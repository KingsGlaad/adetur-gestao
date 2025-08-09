import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { prisma } from "@/lib/prisma";
import path from "path";

const BUCKET_NAME = "adetur-bucket";

// GET: Busca todas as imagens da galeria de um evento
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const eventId = (await params).id;
    const images = await prisma.eventImage.findMany({
      where: { eventId },
      orderBy: { createdAt: "asc" },
    });
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar imagens da galeria do evento." },
      { status: 500 }
    );
  }
}

// POST: Faz o upload de novas imagens para a galeria do evento
export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const event = await prisma.event.findUnique({
      where: { id: (await params).id },
    });
    if (!event) {
      return NextResponse.json(
        { error: "Evento não encontrado." },
        { status: 404 }
      );
    }

    const formData = await req.formData();
    const files = formData.getAll("files") as File[];

    const uploadResults = await Promise.all(
      files.map(async (file) => {
        const sanitizedFileName = file.name.toLowerCase().replace(/\s+/g, "-");
        const filePath = `cities/${event.municipalityId}/events/${
          event.id
        }/gallery/${Date.now()}-${sanitizedFileName}`;

        await supabase.storage.from(BUCKET_NAME).upload(filePath, file);
        const { data: publicUrlData } = supabase.storage
          .from(BUCKET_NAME)
          .getPublicUrl(filePath);

        return prisma.eventImage.create({
          data: {
            eventId: (await params).id,
            url: publicUrlData.publicUrl,
          },
        });
      })
    );

    return NextResponse.json(uploadResults, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro no upload da galeria do evento." },
      { status: 500 }
    );
  }
}

// DELETE: Remove uma imagem da galeria
export async function DELETE(req: NextRequest) {
  try {
    const { imageId } = await req.json();
    const image = await prisma.eventImage.findUnique({
      where: { id: imageId },
    });

    if (image) {
      const urlParts = image.url.split(
        `/storage/v1/object/public/${BUCKET_NAME}/`
      );
      if (urlParts[1]) {
        await supabase.storage.from(BUCKET_NAME).remove([urlParts[1]]);
      }
      await prisma.eventImage.delete({ where: { id: imageId } });
    }

    return NextResponse.json({ message: "Imagem removida com sucesso!" });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao remover imagem da galeria." },
      { status: 500 }
    );
  }
}
