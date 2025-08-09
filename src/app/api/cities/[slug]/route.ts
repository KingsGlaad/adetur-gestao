import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

/**
 * Busca o código do IBGE para um dado nome de município.
 */
async function fetchIbgeCode(municipalityName: string): Promise<string | null> {
  try {
    const response = await fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/municipios"
    );
    const data = await response.json();

    // Busca no array o município que tem nome exato igual ao município informado
    const municipio = data.find(
      (item: { nome: string; id: number }) =>
        item.nome.toLowerCase() === municipalityName.toLowerCase()
    );

    return municipio ? municipio.id.toString() : null;
  } catch (error) {
    console.error("Falha ao buscar código do IBGE:", error);
    return null;
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const data = await req.json();
  const slug = (await params).slug;

  // Busca automaticamente o código do IBGE com base no nome do município
  const ibgeCode = await fetchIbgeCode(data.name);

  console.error("Código do IBGE:", ibgeCode);

  const municipio = await prisma.municipality.update({
    where: { slug },
    data: {
      name: data.name,
      description: data.description,
      about: data.about,
      latitude: data.latitude,
      longitude: data.longitude,
      coatOfArms: data.coatOfArms,
      ibgeCode: ibgeCode, // Salva o código do IBGE na base de dados
    },
  });

  return NextResponse.json(municipio);
}
