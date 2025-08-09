import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { prisma } from "@/lib/prisma";
import path from "path";

const BUCKET_NAME = "adetur-bucket";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const eventId = (await params).id;
    const event = await prisma.event.findUnique({ where: { id: eventId } });

    if (!event) {
      return NextResponse.json(
        { error: "Evento não encontrado." },
        { status: 404 }
      );
    }

    // Remove a imagem antiga, se existir
    if (event.image) {
      const urlParts = event.image.split(
        `/storage/v1/object/public/${BUCKET_NAME}/`
      );
      if (urlParts[1])
        await supabase.storage.from(BUCKET_NAME).remove([urlParts[1]]);
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;

    const sanitizedTitle = event.title.toLowerCase().replace(/\s+/g, "-");
    const filePath = `cities/${
      event.municipalityId
    }/events/${eventId}/${sanitizedTitle}${path.extname(file.name)}`;

    await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, { upsert: true });

    const { data: publicUrlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    const updatedEvent = await prisma.event.update({
      where: { id: eventId },
      data: { image: publicUrlData.publicUrl },
    });

    return NextResponse.json(updatedEvent);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro no upload da imagem do evento." },
      { status: 500 }
    );
  }
}
