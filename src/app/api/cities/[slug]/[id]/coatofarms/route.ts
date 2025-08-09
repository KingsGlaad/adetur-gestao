import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import path from "path";

const BUCKET_NAME = "adetur-bucket";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const municipalityId = (await params).id;
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
        console.error(
          "Erro ao remover o brasão antigo (pode não existir):",
          deleteError
        );
      }
    }

    const sanitizedName = municipality.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    const fileExtension = path.extname(file.name);
    const fileName = `${sanitizedName}-coat-of-arms${fileExtension}`;
    const filePath = `cities/${municipalityId}/${fileName}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        upsert: false,
      });

    if (uploadError) {
      console.error("Erro no upload para o Supabase:", uploadError);
      throw new Error("Falha ao fazer upload da imagem.");
    }

    const { data: publicUrlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(uploadData.path);

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

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const municipalityId = (await params).id;
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
}
