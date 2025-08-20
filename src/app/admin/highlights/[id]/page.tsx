import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { HighlightForm } from "./_components/highlightForm";

export default async function EditPageHighlight({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const highlight = await prisma.highlight.findUnique({
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

  if (!highlight) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Editar Destaque</h1>
      <HighlightForm highlight={highlight} />
    </div>
  );
}
