import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { uploadHightlightImages } from "@/lib/uploadHightlightImages";

// POST: Atualizar a imagem de um destaque
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get("file") as File;
    const highlight = await prisma.highlight.findUnique({
      where: { id: params.id },
    });

    if (!highlight) {
      return NextResponse.json(
        { message: "Destaque não encontrado." },
        { status: 404 }
      );
    }

    if (!imageFile) {
      return NextResponse.json(
        { message: "Nenhum arquivo enviado." },
        { status: 400 }
      );
    }

    // Faz o upload da nova imagem
    const imageUrl = await uploadHightlightImages(
      imageFile,
      params.id,
      highlight.title
    );

    if (!imageUrl) {
      return NextResponse.json(
        { message: "Erro ao fazer upload da imagem." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Imagem do destaque atualizada com sucesso!",
    });
  } catch (error) {
    console.error("Erro ao atualizar imagem do destaque:", error);
    return NextResponse.json(
      { message: "Erro ao atualizar a imagem." },
      { status: 500 }
    );
  }
}
