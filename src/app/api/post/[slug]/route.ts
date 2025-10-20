import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = (await params).slug

    const post = await prisma.post.findUnique({
      where: { slug },
    });

    if (!post) {
      return new NextResponse("Notícia não encontrada", { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Erro ao buscar notícia:", error);
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}