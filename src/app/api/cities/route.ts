import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // ajuste o path se for diferente

export async function GET() {
  try {
    const municipalities = await prisma.municipality.findMany({
      include: {
        highlights: {
          select: {
            title: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });
    return NextResponse.json(municipalities);
  } catch (error) {
    console.error("Erro ao buscar municípios:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

/**
 * Busca o código do IBGE para um dado nome de município.
 */
async function fetchIbgeCode(municipalityName: string): Promise<string | null> {
  try {
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${encodeURI(
        municipalityName
      )}`
    );
    const data = await response.json();
    // A API pode retornar múltiplos resultados se o nome for ambíguo, pegamos o primeiro.
    return data[0]?.id || null;
  } catch (error) {
    console.error("Falha ao buscar código do IBGE:", error);
    return null;
  }
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  // Busca automaticamente o código do IBGE com base no nome do município
  const ibgeCode = await fetchIbgeCode(data.name);

  console.error("Código do IBGE:", ibgeCode);

  const municipio = await prisma.municipality.create({
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
