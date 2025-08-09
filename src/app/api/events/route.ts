import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import path from "path";
import { supabase } from "@/lib/supabase";

// GET: Lista todos os eventos de um município
export async function GET(req: NextRequest) {
  try {
    const events = await prisma.event.findMany({
      orderBy: { date: "asc" }, // Ordena por data do evento
    });
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar eventos." },
      { status: 500 }
    );
  }
}

const BUCKET_NAME = "adetur-bucket";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const date = formData.get("date") as string;
    const municipalityId = formData.get("municipalitie") as string;
    const file = formData.get("file") as File | null;

    // Cria o evento no banco
    const newEvent = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        municipalityId,
      },
    });

    let imageUrl: string | null = null;

    // Se houver arquivo, faz upload
    if (file) {
      const sanitizedTitle = title.toLowerCase().replace(/\s+/g, "-");
      const filePath = `cities/${municipalityId}/events/${
        newEvent.id
      }/${sanitizedTitle}${path.extname(file.name)}`;

      const { error: uploadError } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        return NextResponse.json(
          { error: "Erro no upload para Supabase." },
          { status: 500 }
        );
      }

      const { data: publicUrlData } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(filePath);

      imageUrl = publicUrlData.publicUrl;

      // Atualiza o evento com a URL da imagem
      await prisma.event.update({
        where: { id: newEvent.id },
        data: { image: imageUrl },
      });
    }

    return NextResponse.json({ ...newEvent, image: imageUrl }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao criar evento." },
      { status: 500 }
    );
  }
}
