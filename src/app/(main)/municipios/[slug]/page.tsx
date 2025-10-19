import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Users, Maximize, User, Smile, Fingerprint } from "lucide-react";
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

// Função para buscar detalhes do município no IBGE (Área e População)
async function getMunicipalityDetails(ibgeCode: string | null | undefined) {
  if (!ibgeCode) return { area: null, population: null };

  try {
    // Busca de metadados (incluindo área)
    const metaPromise = fetch(
      `https://servicodados.ibge.gov.br/api/v3/malhas/municipios/${ibgeCode}/metadados`
    ).then((res) => (res.ok ? res.json() : null));

    // Busca de estimativa de população
    const popPromise = fetch(
      `https://servicodados.ibge.gov.br/api/v3/agregados/6579/periodos/-4/variaveis/9324?localidades=N6[${ibgeCode}]`
    ).then((res) => (res.ok ? res.json() : null));

    const [metaResult, popResult] = await Promise.all([metaPromise, popPromise]);

    const area = metaResult?.[0]?.area?.dimensao ?? null;
    const population = popResult?.[0]?.resultados?.[0]?.series?.[0]?.serie?.['2021'] ?? null;

    return { area, population };
  } catch (error) {
    console.error("Falha ao buscar detalhes do município no IBGE:", error);
    return { area: null, population: null };
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

  // Busca os detalhes (área e população)
  const details = await getMunicipalityDetails(municipality.ibgeCode);

  // Combina a imagem de capa com a galeria
  const displayImages = [
    municipality.coatOfArms,
    ...municipality.images.map((img) => img.url),
  ].filter((url): url is string => !!url);

  return (
    <div className="w-full bg-white">
      {/* Seção 1: Cabeçalho e Descrição */}
      <section className="relative overflow-hidden bg-slate-50/70">
        <MunicipioHeader
          name={municipality.name}
          description={municipality.description}
          coverImage={municipality.coatOfArms}
        />
      </section>
      {/* Seção 4: Galeria e Sobre */}
      <section
        aria-labelledby="gallery-and-about-heading"
        className="py-16 sm:py-24 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Coluna "Conheça Mais" */}
            {municipality.about && (
              <div id="about-section" className="flex flex-col">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">
                  Conheça Mais
                </h2>
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: municipality.about }}
                />
                {/* Lista de Informações Adicionais */}
                <div className="mt-10 border-t border-slate-200 pt-6">
                  <ul className="space-y-4 text-slate-600 grid grid-cols-2 gap-4">
                     {municipality.prefeito && (
                      <li className="flex items-start gap-3 bg-white p-2 rounded-md shadow-sm transform hover:scale-105 transition-transform duration-300 py-4">
                        <User className="h-5 w-5 flex-shrink-0 mt-0.5 text-purple-600" />
                        <span><strong>Prefeito(a):</strong> {municipality.prefeito}</span>
                      </li>
                    )}
                    {details.population && (
                       <li className="flex items-start gap-3 bg-white p-2 rounded-md shadow-sm transform hover:scale-105 transition-transform duration-300 py-4">
                        <Users className="h-5 w-5 flex-shrink-0 mt-0.5 text-blue-600" />
                        <span><strong>População:</strong> {Number(details.population).toLocaleString("pt-BR")} (Est. 2021)</span>
                      </li>
                    )}
                    {details.area && (
                       <li className="flex items-start gap-3 bg-white p-2 rounded-md shadow-sm transform hover:scale-105 transition-transform duration-300 py-4">
                        <Maximize className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-600" />
                        <span><strong>Área Territorial:</strong> {Number(details.area).toLocaleString("pt-BR")} km²</span>
                      </li>
                    )}                   
                    {municipality.gentilic && (
                       <li className="flex items-start gap-3 bg-white p-2 rounded-md shadow-sm transform hover:scale-105 transition-transform duration-300 py-4 h-[56px]">
                        <Fingerprint className="h-5 w-5 flex-shrink-0 mt-0.5 text-yellow-600" />
                        <span><strong>Gentílico:</strong> {municipality.gentilic}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            )}
            {/* Coluna da Galeria */}
            <div id="gallery-section" className="flex flex-col">
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
              <HighlightsSection  highlights={municipality.highlights} />
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
