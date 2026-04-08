import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";

const BUCKET_NAME = "adetur-bucket";

export async function GET() {
  try {
    const items = await prisma.transparency.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(items);
  } catch (error) {
    console.error("Erro ao buscar transparência:", error);
    return new NextResponse("Erro ao buscar transparência", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const file = formData.get("file") as File | null;

    if (!title || !file) {
      return new NextResponse("Título e arquivo são obrigatórios", { status: 400 });
    }

    // 1. Criar registro inicial
    const item = await prisma.transparency.create({
      data: {
        title,
        description,
        category,
        fileUrl: "",
      },
    });

    // 2. Upload do PDF
    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = `transparency/${item.id}/${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, buffer, {
        contentType: file.type,
        upsert: true,
      });

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    // 3. Atualizar URL
    const updated = await prisma.transparency.update({
      where: { id: item.id },
      data: { fileUrl: publicUrl },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Erro ao criar transparência:", error);
    return new NextResponse("Erro ao criar transparência", { status: 500 });
  }
}
