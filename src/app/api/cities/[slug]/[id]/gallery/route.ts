import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { prisma } from "@/lib/prisma";
import path from "path";

const BUCKET_NAME = "adetur-bucket";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const municipalityId = (await params).id;
    const images = await prisma.municipalityImage.findMany({
      where: { municipalityId },
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json(images);
  } catch (error) {
    console.error("Erro ao buscar imagens da galeria:", error);
    return NextResponse.json(
      { error: "Erro ao buscar imagens." },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const municipalityId = (await params).id;
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];

    if (!files.length) {
      return NextResponse.json(
        { error: "Nenhum ficheiro enviado." },
        { status: 400 }
      );
    }

    const uploadResults = await Promise.all(
      files.map(async (file) => {
        const sanitizedFileName = file.name.toLowerCase().replace(/\s+/g, "-");
        const filePath = `cities/${municipalityId}/gallery/${Date.now()}-${sanitizedFileName}`;

        const { error: uploadError } = await supabase.storage
          .from(BUCKET_NAME)
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from(BUCKET_NAME)
          .getPublicUrl(filePath);

        return prisma.municipalityImage.create({
          data: {
            municipalityId,
            url: publicUrlData.publicUrl,
          },
        });
      })
    );

    return NextResponse.json(uploadResults, { status: 201 });
  } catch (error) {
    console.error("Erro no upload da galeria:", error);
    return NextResponse.json(
      { error: "Erro no upload da galeria." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { imageId } = await req.json();
    if (!imageId) {
      return NextResponse.json(
        { error: "ID da imagem é obrigatório." },
        { status: 400 }
      );
    }

    const image = await prisma.municipalityImage.findUnique({
      where: { id: imageId },
    });

    if (!image) {
      // Se não estiver na base de dados, não há nada a fazer
      return NextResponse.json({ message: "Imagem já removida." });
    }

    const urlParts = image.url.split(
      `/storage/v1/object/public/${BUCKET_NAME}/`
    );
    const filePath = urlParts[1];

    if (filePath) {
      await supabase.storage.from(BUCKET_NAME).remove([filePath]);
    }

    await prisma.municipalityImage.delete({ where: { id: imageId } });

    return NextResponse.json({ message: "Imagem removida com sucesso!" });
  } catch (error) {
    console.error("Erro ao remover imagem:", error);
    return NextResponse.json(
      { error: "Erro ao remover imagem." },
      { status: 500 }
    );
  }
}
