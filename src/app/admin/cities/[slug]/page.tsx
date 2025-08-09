import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { MunicipalityForm } from "./_components/MunicipalityForm";

export default async function EditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const municipio = await prisma.municipality.findUnique({
    where: { slug },
    include: {
      highlights: true,
      images: true,
    },
  });

  if (!municipio) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Editar Município</h1>
      <MunicipalityForm municipio={municipio} />
    </div>
  );
}
