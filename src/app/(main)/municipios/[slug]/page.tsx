import Image from "next/image";
import { MapPin, Landmark } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import MunicipioMap from "./_components/MunicipioMap";
import { PublicImageGallery } from "./_components/PublicImageGallery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

export default async function MunicipioPage({
  params,
}: {
  params: { slug: string };
}) {
  const municipality = await prisma.municipality.findUnique({
    where: { slug: (await params).slug },
    include: {
      highlights: {
        orderBy: { title: "asc" },
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
    <div className="w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Galeria de Imagens */}
        <PublicImageGallery
          images={displayImages}
          municipalityName={municipality.name}
        />

        {/* Conteúdo Principal */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Coluna de Informações (Esquerda) */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-3xl font-bold text-slate-800">
                  <MapPin className="w-8 h-8 text-blue-600" />
                  {municipality.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-600">
                  {municipality.description}
                </p>
                {municipality.about && (
                  <div
                    className="prose max-w-none mt-4"
                    dangerouslySetInnerHTML={{ __html: municipality.about }}
                  />
                )}
              </CardContent>
            </Card>

            {municipality.highlights.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl font-semibold text-slate-800">
                    <Landmark className="w-6 h-6 text-blue-600" />
                    Destaques Turísticos
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {municipality.highlights.map((highlight) => (
                    <div
                      key={highlight.id}
                      className="p-4 border rounded-lg bg-slate-50"
                    >
                      <h3 className="font-semibold text-slate-700">
                        {highlight.title}
                      </h3>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Coluna do Mapa (Direita) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    Explore o Mapa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-[500px] w-full rounded-lg overflow-hidden border">
                    <MunicipioMap
                      municipality={municipality}
                      highlights={municipality.highlights}
                      geoJsonData={geoJsonData}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
