import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import sharp from "sharp";

const BUCKET_NAME = "adetur-bucket";

function generateSlug(title: string): string {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ postId: string }> },
) {
  try {
    const session = await auth();
    const { postId } = await params;

    if (!session) {
      return new NextResponse("Não autorizado", { status: 403 });
    }

    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) {
      return new NextResponse("Notícia não encontrada", { status: 404 });
    }

    const formData = await req.formData();
    const title = formData.get("title") as string;
    const subtitle = formData.get("subtitle") as string;
    const content = formData.get("content") as string;
    const altText = formData.get("altText") as string;
    const published = formData.get("published") === "true";
    const coverImageFile = formData.get("coverImage") as File | null;

    let coverImageUrl = post.coverImage;

    if (coverImageFile) {
      const fileBuffer = await coverImageFile.arrayBuffer();
      const compressedBuffer = await sharp(fileBuffer)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toBuffer();

      const sanitizedFileName = generateSlug(title) + ".webp";
      const filePath = `posts/${post.id}/${sanitizedFileName}`;

      const { error: uploadError } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(filePath, compressedBuffer, {
          contentType: "image/webp",
          upsert: true,
        });

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(filePath);

      coverImageUrl = publicUrlData.publicUrl;
    }

    const updatedPost = await prisma.post.update({
      where: { id: params.postId },
      data: {
        title,
        subtitle,
        content,
        published,
        altText,
        coverImage: coverImageUrl,
      },
    });

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("Erro ao atualizar notícia:", error);
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}
