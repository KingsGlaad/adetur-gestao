import { NextResponse } from "next/server";
import { prismaRandomInstance as rand } from "@/lib/prisma";

// GET: Buscar todos os destaques
export async function GET() {
  try {
    const highlights = await rand.highlight.findManyRandom(5, {
      select: {
        id: true,
        title: true,
        description: true,
        latitude: true,
        longitude: true,
        galleryImages: { select: { url: true } },
        municipality: {
          select: { id: true, name: true, slug: true },
        },
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
