import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import sharp from "sharp";
import { auth } from "@/lib/auth";
import { slugify } from "@/lib/utils";

const BUCKET_NAME = "adetur-bucket";

// GET: Buscar um destaque específico
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const id = (await params).id;
    const highlight = await prisma.highlight.findUnique({
      where: { id },
      include: {
        galleryImages: true,
      },
    });

    if (!highlight) {
      return NextResponse.json(
        { message: "Destaque não encontrado." },
        { status: 404 },
      );
    }

    return NextResponse.json(highlight);
  } catch (error) {
    console.error("Erro ao buscar destaque:", error);
    return NextResponse.json(
      { message: "Erro ao buscar destaque." },
      { status: 500 },
    );
  }
}

// PUT: Atualizar um destaque
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const session = await auth();

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const id = (await params).id;
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const latitude = formData.get("latitude") as string | null;
    const longitude = formData.get("longitude") as string | null;
    const municipalityId = formData.get("municipalityId") as string;
    const files = formData.getAll("images") as File[];
    const imagesToDeleteRaw = formData.get("imagesToDelete") as string | null;

    const existingHighlight = await prisma.highlight.findUnique({
      where: { id },
    });
    if (!existingHighlight) {
      return NextResponse.json(
        { message: "Destaque não encontrado." },
        { status: 404 },
      );
    }

    // 1. Deletar imagens marcadas para exclusão
    if (imagesToDeleteRaw) {
      const imagesToDelete: string[] = JSON.parse(imagesToDeleteRaw);
      if (imagesToDelete.length > 0) {
        const imagesData = await prisma.highlightImage.findMany({
          where: { id: { in: imagesToDelete } },
        });
        const oldFilePaths = imagesData.map(
          (img) => img.url.split(`${BUCKET_NAME}/`)[1],
        );
        await supabase.storage.from(BUCKET_NAME).remove(oldFilePaths);
        await prisma.highlightImage.deleteMany({
          where: { id: { in: imagesToDelete } },
        });
      }
    }

    // 2. Fazer upload de novas imagens
    if (files.length > 0) {
      const imageUrls: string[] = [];
      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const compressedBuffer = await sharp(buffer)
          .resize({ width: 1200, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toBuffer();

        const baseName = file.name.split(".").slice(0, -1).join(".");
        const sanitizedFileName = slugify(baseName);
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
            `Erro no upload para Supabase: ${uploadError.message}`,
          );

        const { data: publicUrlData } = supabase.storage
          .from(BUCKET_NAME)
          .getPublicUrl(filePath);
        imageUrls.push(publicUrlData.publicUrl);
      }

      // 3. Salvar novas URLs no banco de dados
      await prisma.highlightImage.createMany({
        data: imageUrls.map((url) => ({ url, highlightId: id })),
      });
    }

    const updatedHighlight = await prisma.highlight.update({
      where: { id },
      data: {
        title,
        description,
        latitude: latitude ? parseFloat(latitude) : null,
        longitude: longitude ? parseFloat(longitude) : null,
        municipalityId,
      },
    });

    return NextResponse.json(updatedHighlight);
  } catch (error) {
    console.error("Erro ao atualizar destaque:", error);
    return NextResponse.json(
      { message: "Erro ao atualizar destaque." },
      { status: 500 },
    );
  }
}

// DELETE: Excluir um destaque
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const session = await auth();

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const { id } = params;
    const highlight = await prisma.highlight.findUnique({ where: { id } });

    if (!highlight) {
      return NextResponse.json(
        { message: "Destaque não encontrado." },
        { status: 404 },
      );
    }

    await prisma.highlight.delete({ where: { id } });

    return NextResponse.json({ message: "Destaque excluído com sucesso." });
  } catch (error) {
    console.error("Erro ao excluir destaque:", error);
    return NextResponse.json(
      { message: "Erro ao excluir destaque." },
      { status: 500 },
    );
  }
}
