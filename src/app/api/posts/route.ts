import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import sharp from "sharp";

import { slugify } from "@/lib/utils";

const BUCKET_NAME = "adetur-bucket";

async function createUniqueSlug(title: string): Promise<string> {
  const slug = slugify(title);
  let uniqueSlug = slug;
  let counter = 1;

  while (await prisma.post.findUnique({ where: { slug: uniqueSlug } })) {
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }
  return uniqueSlug;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = searchParams.get("limit");

    const posts = await prisma.post.findMany({
      where: {
        published: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      ...(limit && { take: parseInt(limit, 10) }),
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }


    const formData = await req.formData();
    const title = formData.get("title") as string;
    const subtitle = formData.get("subtitle") as string;
    const content = formData.get("content") as string;
    const altText = formData.get("altText") as string;
    const published = formData.get("published") === "true";
    const coverImage = formData.get("coverImage") as File | null;

    if (!title || !content) {
      return new NextResponse("Título e conteúdo são obrigatórios", {
        status: 400,
      });
    }

    const slug = await createUniqueSlug(title);

    // 1. Cria o post no banco de dados primeiro para obter um ID
    const newPost = await prisma.post.create({
      data: {
        title,
        slug,
        subtitle,
        content,
        published,
        altText,
      },
    });

    // 2. Se houver uma imagem, processa e faz o upload, depois atualiza o post
    if (!coverImage) {
      return NextResponse.json(newPost, { status: 201 });
    }

    const fileBuffer = await coverImage.arrayBuffer();

    // 3. Converte e comprime a imagem para WebP
    const compressedBuffer = await sharp(fileBuffer)
      .resize({ width: 1200, withoutEnlargement: true }) // Redimensiona se for maior que 1200px
      .webp({ quality: 80 }) // Converte para WebP com 80% de qualidade
      .toBuffer();

    const sanitizedFileName = slugify(title) + ".webp";
    const filePath = `posts/${newPost.id}/${sanitizedFileName}`;

    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, compressedBuffer, {
        contentType: "image/webp",
        upsert: true, // Sobrescreve se já existir
      });

    if (uploadError) throw uploadError;

    const { data: publicUrlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    // 4. Atualiza o post com a URL da imagem
    const updatedPost = await prisma.post.update({
      where: { id: newPost.id },
      data: { coverImage: publicUrlData.publicUrl },
    });

    return NextResponse.json(updatedPost, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar notícia:", error);
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}
