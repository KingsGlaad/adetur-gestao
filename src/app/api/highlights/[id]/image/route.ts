import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import { auth } from "@/lib/auth";
import { slugify } from "@/lib/utils";
import sharp from "sharp";

const BUCKET_NAME = "adetur-bucket";

// POST: Atualizar a imagem de um destaque
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const session = await auth();

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { id } = await params;
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { message: "Nenhum arquivo enviado." },
        { status: 400 },
      );
    }

    const highlight = await prisma.highlight.findUnique({
      where: { id },
    });

    if (!highlight) {
      return NextResponse.json(
        { message: "Destaque não encontrado." },
        { status: 404 },
      );
    }

    // 1. Processar a imagem
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const compressedBuffer = await sharp(buffer)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer();

    const sanitizedTitle = slugify(highlight.title);
    const fileName = `${Date.now()}-${sanitizedTitle}.webp`;
    const filePath = `cities/${highlight.municipalityId}/highlights/${id}/${fileName}`;

    // 2. Upload para Supabase
    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, compressedBuffer, {
        contentType: "image/webp",
        upsert: true,
      });

    if (uploadError) throw uploadError;

    const { data: publicUrlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    // 3. Atualizar o banco de dados
    const updatedHighlight = await prisma.highlight.update({
      where: { id },
      data: { image: publicUrlData.publicUrl },
    });

    return NextResponse.json(updatedHighlight);
  } catch (error) {
    console.error("Erro ao atualizar imagem do destaque:", error);
    return NextResponse.json(
      { message: "Erro ao atualizar a imagem." },
      { status: 500 },
    );
  }
}
