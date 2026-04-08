import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma"; // ajuste o path se for diferente
import { auth } from "@/lib/auth";
import { slugify } from "@/lib/utils";

export async function GET() {
  try {
    const municipalities = await prisma.municipality.findMany({
      where: {
        active: true,
      },
      include: {
        highlights: {
          select: {
            title: true,
            galleryImages: { select: { url: true } },
          },
        },
        events: { select: { title: true } },
        images: {
          select: { url: true },
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



export async function PUT(req: NextRequest) {

  const session = await auth();

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
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
      active: data.active ,
      prefeito: data.prefeito,
      gentilic: data.gentilic,
    },
  });

  return NextResponse.json(municipio);
}
export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const data = await req.json();

    // Busca automaticamente o código do IBGE com base no nome do município
    const ibgeCode = await fetchIbgeCode(data.name);
    const slug = slugify(data.name);

    const municipio = await prisma.municipality.create({
      data: {
        name: data.name,
        slug: slug,
        description: data.description,
        about: data.about,
        latitude: data.latitude,
        longitude: data.longitude,
        ibgeCode: ibgeCode, // Salva o código do IBGE na base de dados
        active: data.active ,
        prefeito: data.prefeito,
        gentilic: data.gentilic,
      },
    });

    return NextResponse.json(municipio);
  } catch (error) {
    console.error("Erro ao criar município:", error);
    return NextResponse.json({ error: "Erro ao criar município." }, { status: 500 });
  }
}
