import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import { PublicImageGallery } from "./_components/PublicImageGallery"; // Será a galeria principal
import { MunicipioHeader } from "./_components/MunicipioHeader";
import { HighlightsSection } from "./_components/HighlightsSection";
import { EventsSection } from "./_components/EventsSection";
import { MapSection } from "./_components/MapSection";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const municipality = await prisma.municipality.findUnique({
    where: {
      slug: slug,
    },
    select: {
      name: true,
    },
  });

  if (!municipality) {
    return {
      title: "Município não encontrado",
    };
  }

  return {
    title: `${municipality.name} | ADETUR - Agência de Desenvolvimento do Turismo da Alta Mogiana`,
  };
}

// Função para buscar o contorno geográfico do município no IBGE
async function getMunicipalityGeoJson(ibgeCode: string | null | undefined) {
  if (!ibgeCode) return null;
  try {
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v3/malhas/municipios/${ibgeCode}?formato=application/vnd.geo+json`
    );
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error("Falha ao buscar GeoJSON do IBGE:", error);
    return null;
  }
}

export default async function MunicipioPage({ params }: PageProps) {
  const { slug } = await params;

  const municipality = await prisma.municipality.findUnique({
    where: { slug: slug },
    include: {
      highlights: {
        include: { galleryImages: true },
        orderBy: { title: "asc" },
      },
      events: {
        include: { galleryImages: true },
        orderBy: {
          // Corrigido de 'date' para 'startDate' para corresponder ao schema
          date: "asc",
        },
      },
      images: {
        orderBy: { createdAt: "asc" },
      },
    },
  });

  if (!municipality) {
    return notFound();
  }

  // Busca os dados geográficos
  const geoJsonData = await getMunicipalityGeoJson(municipality.ibgeCode);

  // Combina a imagem de capa com a galeria
  const displayImages = [
    municipality.coatOfArms,
    ...municipality.images.map((img) => img.url),
  ].filter((url): url is string => !!url);

  return (
    <div className="w-full bg-white">
      {/* Seção 1: Cabeçalho e Descrição */}
      <section className="bg-slate-50/70 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MunicipioHeader
            name={municipality.name}
            description={municipality.description}
          />
        </div>
      </section>
      {/* Seção 4: Galeria e Sobre */}
      <section
        aria-labelledby="gallery-and-about-heading"
        className="py-16 sm:py-24 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Coluna "Conheça Mais" */}
            {municipality.about && (
              <div id="about-section">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">
                  Conheça Mais
                </h2>
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: municipality.about }}
                />
              </div>
            )}
            {/* Coluna da Galeria */}
            <div id="gallery-section">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">
                Galeria de Imagens
              </h2>
              <PublicImageGallery
                images={displayImages}
                municipalityName={municipality.name}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Mapa e Destaques */}
      <section
        aria-labelledby="map-and-highlights-heading"
        className="py-16 sm:py-24 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="map-and-highlights-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center mb-12"
          >
            Explore {municipality.name}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Coluna do Mapa */}
            <div className="lg:col-span-2 relative h-[70vh] min-h-[600px] w-full bg-slate-200 rounded-lg overflow-hidden shadow-lg">
              <MapSection
                municipality={municipality}
                highlights={municipality.highlights}
                geoJsonData={geoJsonData}
              />
            </div>
            {/* Coluna de Destaques */}
            <div className="lg:col-span-1 h-full lg:max-h-[70vh] lg:min-h-[600px]">
              <HighlightsSection highlights={municipality.highlights} />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Eventos */}
      <section
        aria-labelledby="events-heading"
        className="py-16 sm:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="events-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center mb-12"
          >
            Próximos Eventos
          </h2>
          <EventsSection events={municipality.events} />
        </div>
      </section>
    </div>
  );
}
