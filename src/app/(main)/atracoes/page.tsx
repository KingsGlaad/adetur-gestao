import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { AtracoesClient } from "./_components/AtracoesClient";

export const metadata: Metadata = {
  title: "Atrações e Eventos dos Municípios | ADETUR Alta Mogiana",
  description:
    "Explore as atrações turísticas, pontos históricos, ecoturismo, destaques culturais e o calendário oficial de eventos de todos os municípios da Alta Mogiana.",
  keywords: [
    "Atrações Alta Mogiana",
    "Pontos Turísticos",
    "Eventos nos Municípios",
    "Turismo São Simão",
    "Ecoturismo",
    "ADETUR",
  ],
};

// Revalidação a cada 60 segundos
export const revalidate = 60;

export default async function AtracoesPage() {
  const [municipalities, attractions, highlights, events] = await Promise.all([
    prisma.municipality.findMany({
      where: {
        active: true,
      },
      select: {
        id: true,
        name: true,
        slug: true,
        coatOfArms: true,
      },
      orderBy: {
        name: "asc",
      },
    }),
    prisma.attraction.findMany({
      include: {
        Municipality: {
          select: {
            name: true,
            slug: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    }),
    prisma.highlight.findMany({
      include: {
        Municipality: {
          select: {
            name: true,
            slug: true,
          },
        },
        galleryImages: {
          take: 1,
        },
      },
      orderBy: {
        title: "asc",
      },
    }),
    prisma.event.findMany({
      include: {
        Municipality: {
          select: {
            name: true,
            slug: true,
          },
        },
        galleryImages: {
          take: 1,
        },
      },
      orderBy: {
        date: "asc",
      },
    }),
  ]);

  return (
    <AtracoesClient
      municipalities={municipalities}
      attractions={attractions}
      highlights={highlights}
      events={events}
    />
  );
}
