import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Lista todos os eventos de um município
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
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
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json();
    const id = (await params).id;
    const updatedEvent = await prisma.event.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        date: new Date(data.date),
        municipalityId: data.municipalitie,
      },
    });
    return NextResponse.json(updatedEvent);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao atualizar evento." },
      { status: 500 }
    );
  }
}

// DELETE: Remove um evento
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    // Lógica para remover a imagem do Supabase antes de apagar o registo
    const event = await prisma.event.findUnique({ where: { id } });
    if (event?.image) {
      // Implementar a lógica de remoção do Supabase aqui, se necessário
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
