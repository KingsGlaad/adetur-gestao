import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";

const BUCKET_NAME = "adetur-bucket";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    const { id } = await params;
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const active = formData.get("active") === "true";
    const file = formData.get("file") as File | null;

    const existing = await prisma.transparency.findUnique({
      where: { id },
    });

    if (!existing) {
      return new NextResponse("Não encontrado", { status: 404 });
    }

    let fileUrl = existing.fileUrl;

    if (file && file.size > 0) {
      // 1. Upload novo PDF
      const buffer = Buffer.from(await file.arrayBuffer());
      const filePath = `transparency/${id}/${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(filePath, buffer, {
          contentType: file.type,
          upsert: true,
        });

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(filePath);
      
      fileUrl = publicUrlData.publicUrl;
    }

    const updated = await prisma.transparency.update({
      where: { id },
      data: {
        title: title || existing.title,
        description: description ?? existing.description,
        category: category ?? existing.category,
        active,
        fileUrl,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Erro ao atualizar transparência:", error);
    return new NextResponse("Erro ao atualizar transparência", { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    const { id } = await params;

    const existing = await prisma.transparency.findUnique({
      where: { id },
    });

    if (!existing) {
      return new NextResponse("Não encontrado", { status: 404 });
    }

    // Deletar do banco
    await prisma.transparency.delete({
      where: { id },
    });

    // Nota: O storage não será limpo para evitar deleção acidental de arquivos compartilhados
    // ou por simplicidade neste momento, seguindo o padrão do projeto que apaga apenas se houver referência direta.

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Erro ao deletar transparência:", error);
    return new NextResponse("Erro ao deletar transparência", { status: 500 });
  }
}
