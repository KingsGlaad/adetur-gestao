import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { uploadHightlightImages } from "@/lib/uploadHightlightImages";
import { Highlight, HighlightType } from "@/types/highligth";
import { z } from "zod";

const highlightSchema = z.object({
  title: z.string().min(1, "O título é obrigatório."),
  description: z.string().min(1, "A descrição é obrigatória."),
  link: z
    .string()
    .url("O link deve ser uma URL válida.")
    .optional()
    .or(z.literal("")),
  municipalityId: z.string().optional().or(z.literal("")),
  publishedAt: z
    .string()
    .refine((val) => !isNaN(new Date(val).getTime()), "Data inválida."),
});

// GET: Buscar todos os destaques
export async function GET() {
  try {
    const highlights = await prisma.highlight.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        municipality: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(highlights);
  } catch (error) {
    console.error("Erro ao buscar destaques:", error);
    return NextResponse.json(
      { message: "Erro ao buscar destaques." },
      { status: 500 }
    );
  }
}

// POST: Criar um novo destaque
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const link = formData.get("link") as string;
    const municipalityId = formData.get("municipality") as string;
    const publishedAtStr = formData.get("publishedAt") as string;
    const imageFile = formData.get("image") as File;

    const publishedAt = new Date(publishedAtStr);

    // Validação
    const parsedData = highlightSchema.safeParse({
      title,
      description,
      link,
      municipalityId,
      publishedAt: publishedAtStr,
    });

    if (!parsedData.success) {
      return NextResponse.json(
        {
          message: "Dados de entrada inválidos.",
          errors: parsedData.error.flatten(),
        },
        { status: 400 }
      );
    }

    if (!imageFile) {
      return NextResponse.json(
        { message: "A imagem é obrigatória." },
        { status: 400 }
      );
    }

    // Cria o destaque no banco de dados primeiro
    const newHighlight = await prisma.highlight.create({
      data: {
        title,
        description,
        link,
        publishedAt,
        municipalityId: municipalityId || null,
        type: HighlightType.EVENT, // Exemplo, ajuste conforme a necessidade
        image: "", // Placeholder, será atualizado após o upload
      },
    });

    // Faz o upload da imagem para o Supabase
    const imageUrl = await uploadHightlightImages(
      imageFile,
      newHighlight.id,
      title
    );

    if (!imageUrl) {
      await prisma.highlight.delete({ where: { id: newHighlight.id } });
      return NextResponse.json(
        { message: "Erro ao fazer upload da imagem." },
        { status: 500 }
      );
    }

    // Atualiza o destaque com a URL da imagem
    await prisma.highlight.update({
      where: { id: newHighlight.id },
      data: { image: imageUrl },
    });

    return NextResponse.json(
      { message: "Destaque criado com sucesso!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar destaque:", error);
    return NextResponse.json(
      { message: "Erro ao criar destaque." },
      { status: 500 }
    );
  }
}
