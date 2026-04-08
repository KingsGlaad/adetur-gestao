import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import sharp from "sharp";
import { auth } from "@/lib/auth";
import { slugify } from "@/lib/utils";

const BUCKET_NAME = "adetur-bucket";

/**
 * PUT - Upload de brasão (cria ou substitui)
 */
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const { id: municipalityId } = await params;

    if (!municipalityId) {
      return NextResponse.json(
        { error: "ID do município é obrigatório." },
        { status: 400 }
      );
    }

    const municipality = await prisma.municipality.findUnique({
      where: { id: municipalityId },
    });

    if (!municipality) {
      return NextResponse.json(
        { error: "Município não encontrado." },
        { status: 404 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "Nenhum ficheiro para upload." },
        { status: 400 }
      );
    }

    // 🔥 Se já existe brasão, remove antes de subir o novo
    if (municipality.coatOfArms) {
      try {
        const urlParts = municipality.coatOfArms.split(
          `/storage/v1/object/public/${BUCKET_NAME}/`
        );
        const oldFilePath = urlParts[1];
        if (oldFilePath) {
          await supabase.storage.from(BUCKET_NAME).remove([oldFilePath]);
        }
      } catch (deleteError) {
        console.error("Erro ao remover o brasão antigo:", deleteError);
      }
    }

    // Converte para buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 🔥 Converte/comprime para WebP mais leve
    const compressedBuffer = await sharp(buffer)
      .resize({ width: 800 }) // limita a largura (ajustável)
      .webp({ quality: 80 }) // qualidade entre 0-100
      .toBuffer();

    const sanitizedName = slugify(municipality.name);
    const fileName = `${sanitizedName}-brasao.webp`;
    const filePath = `cities/${municipalityId}/${fileName}`;

    // Faz upload no Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, compressedBuffer, {
        contentType: "image/webp",
        upsert: true, // Usar upsert é mais seguro aqui
      });

    if (uploadError) {
      console.error("Erro no upload para o Supabase:", uploadError);
      throw new Error("Falha ao fazer upload da imagem.");
    }

    const { data: publicUrlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(uploadData.path);

    // Atualiza município no banco
    const updatedMunicipality = await prisma.municipality.update({
      where: { id: municipalityId },
      data: {
        coatOfArms: publicUrlData.publicUrl,
      },
    });

    return NextResponse.json(updatedMunicipality);
  } catch (error) {
    console.error("Erro interno:", error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro interno ao processar o upload.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

/**
 * DELETE - Remove brasão existente
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const { id: municipalityId } = await params;

    if (!municipalityId) {
      return NextResponse.json(
        { error: "ID do município é obrigatório." },
        { status: 400 }
      );
    }

    const municipality = await prisma.municipality.findUnique({
      where: { id: municipalityId },
    });

    if (!municipality || !municipality.coatOfArms) {
      return NextResponse.json(
        { error: "Brasão não encontrado." },
        { status: 404 }
      );
    }

    const urlParts = municipality.coatOfArms.split(
      `/storage/v1/object/public/${BUCKET_NAME}/`
    );
    const filePath = urlParts[1];

    if (filePath) {
      await supabase.storage.from(BUCKET_NAME).remove([filePath]);
    }

    const updatedMunicipality = await prisma.municipality.update({
      where: { id: municipalityId },
      data: {
        coatOfArms: null,
      },
    });

    return NextResponse.json(updatedMunicipality);
  } catch (error) {
    console.error("Erro interno:", error);
    return NextResponse.json(
      { error: "Erro interno ao processar a remoção." },
      { status: 500 }
    );
  }
  // ... (código do DELETE permanece o mesmo, mas agora neste arquivo)
}
