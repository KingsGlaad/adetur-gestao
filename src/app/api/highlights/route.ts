import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import sharp from "sharp";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { slugify } from "@/lib/utils";

const highlightSchema = z.object({
  title: z.string().min(1, "O título é obrigatório."),
  description: z.string().optional(),
  latitude: z.coerce.number().optional(),
  longitude: z.coerce.number().optional(),
  municipalityId: z.string().min(1, "O município é obrigatório."),
});

const BUCKET_NAME = "adetur-bucket";

// GET: Buscar todos os destaques
export async function GET() {
  try {
    const highlights = await prisma.highlight.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        Municipality: {
          select: {
            name: true,
            id: true,
          },
        },
        galleryImages: true,
      },
    });

    return NextResponse.json(highlights);
  } catch (error) {
    console.error("Erro ao buscar destaques:", error);
    return NextResponse.json(
      { message: "Erro ao buscar destaques." },
      { status: 500 }
    );
  }
}

// POST: Criar um novo destaque

export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const latitude = formData.get("latitude") as string | null;
    const longitude = formData.get("longitude") as string | null;
    const municipalityId = formData.get("municipalityId") as string;
    const files = formData.getAll("images") as File[];

    // Validação
    const parsedData = highlightSchema.safeParse({
      title,
      description,
      latitude: latitude,
      longitude: longitude,
      municipalityId,
    });

    if (!parsedData.success) {
      return NextResponse.json(
        { message: "Dados inválidos", errors: parsedData.error.flatten() },
        { status: 400 }
      );
    }

    const newHighlight = await prisma.highlight.create({
      data: {
        title,
        description,
        latitude: latitude ? parseFloat(latitude) : null,
        longitude: longitude ? parseFloat(longitude) : null,
        municipalityId,
      },
    });

    const imageUrls: string[] = [];

    if (files.length > 0) {
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
        const filePath = `cities/${municipalityId}/highlights/${newHighlight.id}/${fileName}`;

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

      await prisma.highlightImage.createMany({
        data: imageUrls.map((url) => ({
          url,
          highlightId: newHighlight.id,
        })),
      });
    }

    return NextResponse.json(
      { ...newHighlight, galleryImages: imageUrls.map((url) => ({ url })) },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar destaque:", error);
    return NextResponse.json(
      { message: "Erro ao criar destaque." },
      { status: 500 }
    );
  }
}
