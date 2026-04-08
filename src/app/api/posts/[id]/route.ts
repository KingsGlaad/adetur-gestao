import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import sharp from "sharp";
import { auth } from "@/lib/auth";

const BUCKET_NAME = "adetur-bucket";

function sanitizeTitleForFileName(title: string): string {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * PUT - Atualiza um post existente
 */
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const { id } = (await params);
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const subtitle = formData.get("subtitle") as string;
    const content = formData.get("content") as string;
    const published = formData.get("published") === "true";
    const coverImage = formData.get("coverImage") as File | null;

    if (!title || !content) {
      return new NextResponse("Título e conteúdo são obrigatórios", { status: 400 });
    }

    const currentPost = await prisma.post.findUnique({ where: { id } });
    if (!currentPost) {
      return new NextResponse("Notícia não encontrada", { status: 404 });
    }

    let imageUrl = currentPost.coverImage;

    // Se uma nova imagem foi enviada
    if (coverImage) {
      // 1. Apaga a imagem antiga, se existir
      if (currentPost.coverImage) {
        const oldFilePath = currentPost.coverImage.split(`${BUCKET_NAME}/`)[1];
        await supabase.storage.from(BUCKET_NAME).remove([oldFilePath]);
      }

      // 2. Processa e envia a nova imagem
      const fileBuffer = await coverImage.arrayBuffer();
      const compressedBuffer = await sharp(fileBuffer)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toBuffer();

      const sanitizedFileName = sanitizeTitleForFileName(title) + ".webp";
      const newFilePath = `posts/${id}/${sanitizedFileName}`;

      const { error: uploadError } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(newFilePath, compressedBuffer, {
          contentType: "image/webp",
          upsert: true,
        });

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(newFilePath);
      
      imageUrl = publicUrlData.publicUrl;
    }

    // 3. Atualiza o post no banco de dados
    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        title,
        subtitle,
        content,
        published,
        coverImage: imageUrl,
      },
    });

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("Erro ao atualizar notícia:", error);
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}

/**
 * DELETE - Exclui um post e sua imagem
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const { id } = (await params) ;

    const post = await prisma.post.findUnique({ where: { id } });

    if (!post) {
      return new NextResponse("Notícia não encontrada", { status: 404 });
    }

    // Se houver uma imagem, exclui do Supabase
    if (post.coverImage) {
      const filePath = post.coverImage.split(`${BUCKET_NAME}/`)[1];
      if (filePath) {
        await supabase.storage.from(BUCKET_NAME).remove([filePath]);
      }
    }

    // Exclui o post do banco de dados
    await prisma.post.delete({ where: { id } });

    return new NextResponse(null, { status: 204 }); // 204 No Content
  } catch (error) {
    console.error("Erro ao excluir notícia:", error);
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}