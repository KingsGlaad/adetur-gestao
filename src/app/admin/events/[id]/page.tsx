import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { EventForm } from "./_components/EventForm";

export default async function EditPageEvent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const event = await prisma.event.findUnique({
    where: { id },
    include: {
      municipality: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  if (!event) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Editar Evento</h1>
      <EventForm event={event} />
    </div>
  );
}
