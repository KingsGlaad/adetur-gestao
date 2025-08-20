import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { deleteHighlightImage } from "@/lib/uploadHightlightImages";

const highlightUpdateSchema = z.object({
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

// GET: Buscar um destaque por ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const highlight = await prisma.highlight.findUnique({
      where: { id: params.id },
      include: {
        municipality: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!highlight) {
      return NextResponse.json(
        { message: "Destaque não encontrado." },
        { status: 404 }
      );
    }

    return NextResponse.json(highlight);
  } catch (error) {
    console.error("Erro ao buscar destaque:", error);
    return NextResponse.json(
      { message: "Erro ao buscar destaque." },
      { status: 500 }
    );
  }
}

// PUT: Atualizar um destaque
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const parsedData = highlightUpdateSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json(
        {
          message: "Dados de entrada inválidos.",
          errors: parsedData.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { municipalityId, publishedAt, ...data } = parsedData.data;
    const finalData = {
      ...data,
      publishedAt: new Date(publishedAt),
      municipalityId: municipalityId || null,
    };

    const updatedHighlight = await prisma.highlight.update({
      where: { id: params.id },
      data: finalData,
    });

    return NextResponse.json(updatedHighlight);
  } catch (error) {
    console.error("Erro ao atualizar destaque:", error);
    return NextResponse.json(
      { message: "Erro ao atualizar destaque." },
      { status: 500 }
    );
  }
}

// DELETE: Deletar um destaque
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const highlight = await prisma.highlight.findUnique({
      where: { id: params.id },
    });

    if (!highlight) {
      return NextResponse.json(
        { message: "Destaque não encontrado." },
        { status: 404 }
      );
    }

    // Remove a imagem do Supabase
    await deleteHighlightImage(highlight.image);

    // Deleta o destaque do banco de dados
    await prisma.highlight.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Destaque removido com sucesso." });
  } catch (error) {
    console.error("Erro ao deletar destaque:", error);
    return NextResponse.json(
      { message: "Erro ao deletar destaque." },
      { status: 500 }
    );
  }
}
