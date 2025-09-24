import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET: Buscar todos os destaques
export async function GET() {
  try {
    const count = await prisma.highlight.count();
    if (count === 0) {
      return NextResponse.json(
        { message: "Nenhum destaque encontrado." },
        { status: 200 }
      );
    }
    const randomIndex = Math.floor(Math.random() * count);

    const highlights = await prisma.highlight.findMany({
      skip: randomIndex,
      take: 5,
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
