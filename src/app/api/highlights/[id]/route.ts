import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import sharp from "sharp";

const BUCKET_NAME = "adetur-bucket";

function sanitizeTitle(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

// GET: Buscar um destaque específico
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const highlight = await prisma.highlight.findUnique({
      where: { id },
    });

    if (!highlight) {
      return NextResponse.json(
        { message: "Destaque não encontrado." },
        { status: 404 }
      );
    }

    return NextResponse.json(highlight);
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao buscar destaque." },
      { status: 500 }
    );
  }
}

// PUT: Atualizar um destaque
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const municipalityId = formData.get("municipalityId") as string;
    const files = formData.getAll("images") as File[];

    const existingHighlight = await prisma.highlight.findUnique({
      where: { id },
    });
    if (!existingHighlight) {
      return NextResponse.json(
        { message: "Destaque não encontrado." },
        { status: 404 }
      );
    }

    if (files.length > 0) {
      // 1. Remover imagens antigas do storage e do DB
      const oldImages = await prisma.highlightImage.findMany({
        where: { highlightId: id },
      });
      if (oldImages.length > 0) {
        const oldFilePaths = oldImages.map(
          (img) => img.url.split(`${BUCKET_NAME}/`)[1]
        );
        await supabase.storage.from(BUCKET_NAME).remove(oldFilePaths);
        await prisma.highlightImage.deleteMany({ where: { highlightId: id } });
      }

      // 2. Fazer upload das novas imagens
      const imageUrls: string[] = [];
      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const compressedBuffer = await sharp(buffer)
          .resize({ width: 1200, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toBuffer();

        const sanitizedFileName = sanitizeTitle(file.name.split(".")[0]);
        const fileName = `${Date.now()}-${sanitizedFileName}.webp`;
        const filePath = `cities/${municipalityId}/highlights/${id}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from(BUCKET_NAME)
          .upload(filePath, compressedBuffer, {
            contentType: "image/webp",
            upsert: true,
          });

        if (uploadError)
          throw new Error(
            `Erro no upload para Supabase: ${uploadError.message}`
          );

        const { data: publicUrlData } = supabase.storage
          .from(BUCKET_NAME)
          .getPublicUrl(filePath);
        imageUrls.push(publicUrlData.publicUrl);
      }

      // 3. Salvar novas URLs no DB
      await prisma.highlightImage.createMany({
        data: imageUrls.map((url) => ({ url, highlightId: id })),
      });
    }

    const updatedHighlight = await prisma.highlight.update({
      where: { id },
      data: {
        title,
        description,
        municipalityId,
      },
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

// DELETE: Excluir um destaque
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const highlight = await prisma.highlight.findUnique({ where: { id } });

    if (!highlight) {
      return NextResponse.json(
        { message: "Destaque não encontrado." },
        { status: 404 }
      );
    }

    // Remove imagem do Supabase se existir
    if (highlight.image) {
      const filePath = highlight.image.split(`${BUCKET_NAME}/`)[1];
      await supabase.storage.from(BUCKET_NAME).remove([filePath]);
    }

    await prisma.highlight.delete({ where: { id } });

    return NextResponse.json({ message: "Destaque excluído com sucesso." });
  } catch (error) {
    console.error("Erro ao excluir destaque:", error);
    return NextResponse.json(
      { message: "Erro ao excluir destaque." },
      { status: 500 }
    );
  }
}
