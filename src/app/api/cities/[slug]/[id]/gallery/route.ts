import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { prisma } from "@/lib/prisma";
import sharp from "sharp";

const BUCKET_NAME = "adetur-bucket";

/**
 * Sanitiza nomes de arquivos, removendo acentos, caracteres especiais
 * e garantindo que a extensão original seja preservada.
 */
function sanitizeFileName(fileName: string): string {
  const extension = fileName.split(".").pop() || "";
  const baseName = fileName.replace(/\.[^/.]+$/, "");

  const sanitizedBase = baseName
    .normalize("NFD") // separa acentos
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-zA-Z0-9\-_]/g, "-") // só letras, números, "-" e "_"
    .replace(/-+/g, "-") // evita múltiplos "-"
    .replace(/^-|-$/g, "") // remove "-" no início/fim
    .toLowerCase();

  return extension
    ? `${sanitizedBase}.${extension.toLowerCase()}`
    : sanitizedBase;
}

/**
 * GET - Lista imagens de um município
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
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

/**
 * POST - Upload de imagens para a galeria de um município
 */

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const municipalityId = (await params).id;
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];

    if (!files.length) {
      return NextResponse.json(
        { error: "Nenhum arquivo enviado." },
        { status: 400 }
      );
    }

    const uploadResults = await Promise.all(
      files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // 🔥 Converte e comprime a imagem para WebP
        const compressedBuffer = await sharp(buffer)
          .resize({ width: 1600 }) // opcional: limita a largura
          .webp({ quality: 80 }) // qualidade entre 0-100
          .toBuffer();

        const sanitizedFileName = sanitizeFileName(file.name).replace(
          /\.[^/.]+$/,
          ".webp"
        );
        const filePath = `cities/${municipalityId}/gallery/${Date.now()}-${sanitizedFileName}`;

        const { error: uploadError } = await supabase.storage
          .from(BUCKET_NAME)
          .upload(filePath, compressedBuffer, {
            contentType: "image/webp",
          });

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

/**
 * DELETE - Remove imagem do Supabase Storage e do banco
 */
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
