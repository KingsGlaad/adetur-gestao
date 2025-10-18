import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import sharp from "sharp";
import { supabase } from "@/lib/supabase";

const BUCKET_NAME = "adetur-bucket";

function sanitizeTitle(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

// GET: Lista todos os eventos de um município
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const events = await prisma.event.findMany({
      where: { id },
    });
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar eventos." },
      { status: 500 }
    );
  }
}

// PUT: Atualiza um evento existente
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    
        if (!userId) {
          return new NextResponse("Unauthorized", { status: 401 });
        }
    const id = (await params).id;
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const date = formData.get("date") as string;
    const municipalityId = formData.get("municipalityId") as string;
    const files = formData.getAll("images") as File[];
    const imagesToDeleteRaw = formData.get("imagesToDelete") as string | null;

    const existingEvent = await prisma.event.findUnique({
      where: { id },
    });
    if (!existingEvent) {
      return NextResponse.json(
        { message: "Evento não encontrado." },
        { status: 404 }
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
          (img) => img.url.split(`${BUCKET_NAME}/`)[1]
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

      // 3. Salvar novas URLs no banco de dados
      await prisma.eventImage.createMany({
        data: imageUrls.map((url) => ({ url, eventId: id })),
      });
    }

    const updatedEvent = await prisma.event.update({
      where: { id },
      data: {
        title,
        description,
        date,
        municipalityId,
      },
    });

    return NextResponse.json(updatedEvent);
  } catch (error) {
    console.error("Erro ao atualizar destaque:", error);
    return NextResponse.json(
      { message: "Erro ao atualizar destaque." },
      { status: 500 }
    );
  }
}


// DELETE: Remove um evento
export async function DELETE(req: NextRequest) {
  try {

    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const { id } = await req.json();
    // Lógica para remover a imagem do Supabase antes de apagar o registo
    const event = await prisma.event.findUnique({ where: { id } });
    const images = await prisma.eventImage.findMany({ where: { eventId: id } });
    const filePaths = images.map(
      (img) => img.url.split(`${BUCKET_NAME}/`)[1]
    );
    await supabase.storage.from(BUCKET_NAME).remove(filePaths);
    await prisma.eventImage.deleteMany({ where: { eventId: id } });
    if(!event) {
      return NextResponse.json(
        { error: "Evento não encontrado." },
        { status: 404 }
      );
    }
    await prisma.event.delete({ where: { id } });
    return NextResponse.json({ message: "Evento removido com sucesso." });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao remover evento." },
      { status: 500 }
    );
  }
}
