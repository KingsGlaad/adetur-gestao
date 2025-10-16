import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import sharp from "sharp";
import { auth } from "@clerk/nextjs/server";

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

/**
 * Sanitiza o título para gerar nomes de arquivos seguros
 */
function sanitizeTitle(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .toLowerCase()
    .replace(/\s+/g, "-") // substitui espaços por hífens
    .replace(/[^a-z0-9-]/g, ""); // remove caracteres não alfanuméricos (exceto hífen)
}

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    
        if (!userId) {
          return new NextResponse("Unauthorized", { status: 401 });
        }
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const date = formData.get("date") as string;
    const municipalityId = formData.get("municipalitie") as string;
    const file = formData.get("image") as File | null;

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
      // Converte para buffer e otimiza a imagem
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const compressedBuffer = await sharp(buffer)
        .resize({ width: 1200, withoutEnlargement: true }) // Redimensiona se for maior que 1200px
        .webp({ quality: 80 }) // Converte para WebP com 80% de qualidade
        .toBuffer();

      const sanitizedTitle = sanitizeTitle(title);
      const fileName = `${sanitizedTitle}.webp`;
      const filePath = `cities/${municipalityId}/events/${newEvent.id}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(filePath, compressedBuffer, {
          contentType: "image/webp",
          upsert: true,
        });

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
