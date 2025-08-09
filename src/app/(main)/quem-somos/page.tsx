import { Target } from "lucide-react";
import { governanceStructure, odsGoals } from "@/data/site-data";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MunicipalitiesCard } from "@/components/cards/MunicipalitiesCard";
import { prisma } from "@/lib/prisma";

export default async function Page() {
  const [municipalities] = await Promise.all([
    prisma.municipality.findMany({
      include: {
        highlights: true,
      },
      orderBy: {
        name: "asc",
      },
    }),
  ]);
  return (
    <div className="container mx-auto px-4 py-8 bg-white mt-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
          <Image
            src={"/capa-adetur.png"}
            alt="Capa da ADETUR"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                Quem Somos
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-400">
                Conheça a história e a estrutura da ADETUR - Associação de
                Desenvolvimento do Turismo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-neutral-900">
          Nossa História
        </h2>
        <div className="space-y-8">
          <div className="relative pl-8 border-l-2 border-accent">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-900"></div>
            <h3 className="text-xl font-semibold text-blue-900 ">
              2001 - Fundação
            </h3>
            <p className="text-neutral-900">
              A ADETUR foi fundada com o objetivo de promover o desenvolvimento
              turístico da região.
            </p>
          </div>
          <div className="relative pl-8 border-l-2 border-accent">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-900"></div>
            <h3 className="text-xl font-semibold text-blue-900">
              2005 - Primeira Expansão
            </h3>
            <p className="text-neutral-900">
              Inclusão dos primeiros municípios associados e início das
              atividades de capacitação.
            </p>
          </div>
          <div className="relative pl-8 border-l-2 border-accent">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-900"></div>
            <h3 className="text-xl font-semibold text-blue-900">
              2010 - Consolidação
            </h3>
            <p className="text-neutral-900">
              Implementação do sistema de governança regional e fortalecimento
              da marca turística.
            </p>
          </div>
          <div className="relative pl-8 border-l-2 border-accent">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-900"></div>
            <h3 className="text-xl font-semibold text-blue-900">
              2020 - Atualidade
            </h3>
            <p className="text-neutral-900">
              Expansão para 7 municípios e desenvolvimento de projetos
              inovadores em turismo.
            </p>
          </div>
        </div>
      </section>

      {/* Municipalities Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-neutral-900">
          Municípios Integrados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {municipalities.map((municipality) => (
            <MunicipalitiesCard
              key={municipality.id}
              municipalities={municipality}
            />
          ))}
        </div>
      </section>

      {/* Governance Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-neutral-900">
          Estrutura de Governança
        </h2>
        <div className="bg-blue-900 p-6 rounded-lg shadow-sm">
          <div className="space-y-6">
            {governanceStructure.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <Target className="w-6 h-6 text-accent mt-1 " />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ODS Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-neutral-900">
            Objetivos de Desenvolvimento Sustentável (ODS)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <TooltipProvider>
              {odsGoals.map((goal, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div className="rounded-lg overflow-hidden p-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <Image
                        src={goal.image}
                        alt={`ODS ${goal.number}`}
                        width={120}
                        height={120}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs bg-neutral-800 text-white p-4">
                    <h3 className="font-bold mb-2 text-lg">{goal.title}</h3>
                    <p className="text-sm text-gray-300">{goal.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </section>
    </div>
  );
}
