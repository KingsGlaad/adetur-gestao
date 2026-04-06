"use client";
import {
  Building2,
  CalendarDays,
  Handshake,
  Landmark,
  Lightbulb,
  MapPin,
  Scale,
  Target,
  Tv,
  Users,
} from "lucide-react";
import { governanceStructure, odsGoals } from "@/data/site-data";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Este import está correto
import { MunicipalitiesCard } from "@/components/cards/MunicipalitiesCard";
import { useMunicipalities } from "@/hooks/useMunicipalities";
import { MunicipalitiesCardSkeleton } from "@/components/cards/MunicipalitiesCardSkeleton"; // Novo import

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
export default function Page() {
  const { municipalities, isLoading, error } = useMunicipalities();

  const governanceIconMap: { [key: string]: React.ElementType } = {
    "Assembleia Geral": Users,
    "Conselho Deliberativo": Landmark,
    "Conselho Fiscal": Scale,
    "Diretoria Executiva": Handshake,
    "Grupos de Trabalho (GTs)": Target,
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mb-8">
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
              <p className="text-base sm:text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
                Conheça a história e a estrutura da ADETUR - Associação de
                Desenvolvimento do Turismo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 bg-gray-50 overflow-hidden">
        <div
          className="hidden md:block absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(229 231 235 / 0.7)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
          }}
        ></div>
        <div className="relative container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-neutral-900 text-center">
            Nossa História
          </h2>

          {/* Linha vertical da timeline */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-accent -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {/* Item 1 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-center w-full md:mb-8">
              <div className="md:order-1 w-full md:w-5/12 flex flex-col items-center md:items-start">
                <Building2 className="w-16 h-16 text-blue-900/30 mb-4 md:hidden" />
                <div className="bg-blue-900 rounded-lg shadow-lg p-6 w-full">
                  <h3 className="mb-2 font-bold text-white text-lg">2020</h3>
                  <p className="text-sm text-neutral-300">
                    É criada a ADETUR – Agência de Desenvolvimento Turístico
                    Alta Mogiana, uma Instância de Governança Regional (IGR)
                    formada por municípios, empresas e entidades do terceiro
                    setor da Alta Mogiana Paulista, alinhada com as diretrizes
                    do Ministério do Turismo.
                  </p>
                </div>
              </div>
              <div className="z-10 hidden md:flex items-center justify-center w-8 h-8 bg-accent rounded-full"></div>
              <div className="md:order-3 w-5/12 hidden md:flex justify-center">
                <Building2 className="w-24 h-24 text-blue-900/30" />
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative flex flex-col md:flex-row-reverse md:justify-between items-center w-full md:mb-8">
              <div className="md:order-1 w-full md:w-5/12 flex flex-col items-center md:items-start">
                <div className="flex gap-4 mb-4 md:hidden">
                  <Tv className="w-12 h-12 text-blue-900/30" />
                  <MapPin className="w-12 h-12 text-blue-900/30" />
                </div>
                <div className="bg-blue-900 rounded-lg shadow-lg p-6 w-full">
                  <h3 className="mb-2 font-bold text-white text-lg">
                    Novembro de 2021
                  </h3>
                  <p className="text-sm text-neutral-300">
                    A ADETUR realiza uma reunião na cidade de Luiz Antônio, na
                    Estação Ecológica Jataí. Durante o encontro, são
                    apresentados o projeto &quot;TV ALTA MOGIANA&quot; em
                    parceria com a TV Record e um novo roteiro turístico para a
                    cidade de Tambaú.
                  </p>
                </div>
              </div>
              <div className="z-10 hidden md:flex items-center justify-center w-8 h-8 bg-accent rounded-full"></div>
              <div className="md:order-3 w-5/12 hidden md:flex justify-center">
                <div className="flex gap-4">
                  <Tv className="w-24 h-24 text-blue-900/30" />
                  <MapPin className="w-24 h-24 text-blue-900/30" />
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-center w-full md:mb-8">
              <div className="md:order-1 w-full md:w-5/12 flex flex-col items-center md:items-start">
                <CalendarDays className="w-16 h-16 text-blue-900/30 mb-4 md:hidden" />
                <div className="bg-blue-900 rounded-lg shadow-lg p-6 w-full">
                  <h3 className="mb-2 font-bold text-white text-lg">
                    Abril de 2022
                  </h3>
                  <p className="text-sm text-neutral-300">
                    Ocorre uma reunião de trabalho em Cajuru, com a pauta
                    incluindo a inserção de cidades no Mapa do Turismo
                    (SISMAPA), discussões sobre um novo site e a participação na
                    feira da AVIRP (Associação das Agências de Viagem de
                    Ribeirão Preto e Região).
                  </p>
                </div>
              </div>
              <div className="z-10 hidden md:flex items-center justify-center w-8 h-8 bg-accent rounded-full"></div>
              <div className="md:order-3 w-5/12 hidden md:flex justify-center">
                <CalendarDays className="w-24 h-24 text-blue-900/30" />
              </div>
            </div>

            {/* Item 4 */}
            <div className="relative flex flex-col md:flex-row-reverse md:justify-between items-center w-full md:mb-8">
              <div className="md:order-1 w-full md:w-5/12 flex flex-col items-center md:items-start">
                <Handshake className="w-16 h-16 text-blue-900/30 mb-4 md:hidden" />
                <div className="bg-blue-900 rounded-lg shadow-lg p-6 w-full">
                  <h3 className="mb-2 font-bold text-white text-lg">
                    Julho de 2022
                  </h3>
                  <p className="text-sm text-neutral-300">
                    O município de Cássia dos Coqueiros autoriza sua integração
                    à ADETUR. Vários outros municípios da região também
                    formalizam sua associação por meio de leis municipais.
                  </p>
                </div>
              </div>
              <div className="z-10 hidden md:flex items-center justify-center w-8 h-8 bg-accent rounded-full"></div>
              <div className="md:order-3 w-5/12 hidden md:flex justify-center">
                <Handshake className="w-24 h-24 text-blue-900/30" />
              </div>
            </div>

            {/* Item 5 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-center w-full">
              <div className="md:order-1 w-full md:w-5/12 flex flex-col items-center md:items-start">
                <Lightbulb className="w-16 h-16 text-blue-900/30 mb-4 md:hidden" />
                <div className="bg-blue-900 rounded-lg shadow-lg p-6 w-full">
                  <h3 className="mb-2 font-bold text-white text-lg">
                    Maio de 2025
                  </h3>
                  <p className="text-sm text-neutral-300">
                    A agência participa do evento &quot;PRT em Ação&quot;,
                    promovido pelo Ministério do Turismo e pela Secretaria de
                    Turismo e Viagens do Estado de São Paulo, contribuindo com
                    debates e oficinas sobre o desenvolvimento do turismo
                    regional.
                  </p>
                </div>
              </div>
              <div className="z-10 hidden md:flex items-center justify-center w-8 h-8 bg-accent rounded-full"></div>
              <div className="md:order-3 w-5/12 hidden md:flex justify-center">
                <Lightbulb className="w-24 h-24 text-blue-900/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Municipalities Section */}
      <section className="py-16 bg-gray-100 relative">
        <div className="absolute inset-0">
          <Image
            src="/bg/bg-municipios2.png"
            alt="Fundo com paisagem da região da Alta Mogiana"
            fill
            className="object-cover backdrop-blur-3xl opacity-80"
          />
        </div>
        <div className="relative container mx-auto px-4 ">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-neutral-900 text-center">
            Municípios Integrados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading &&
              Array.from({ length: 6 }).map((_, idx) => (
                <MunicipalitiesCardSkeleton key={idx} /> // Usando o novo esqueleto
              ))}
            {error && (
              <div className="text-red-500 bg-white p-4 rounded-lg text-center">
                {error}
              </div>
            )}
            {!isLoading &&
              !error &&
              municipalities.map((municipality) => (
                <MunicipalitiesCard
                  key={municipality.id}
                  municipality={municipality}
                  background="bg-white"
                  title="text-neutral-900"
                  description="text-neutral-400"
                  bgHighlight="bg-blue-900 text-white"
                />
              ))}
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-neutral-900 text-center">
          Estrutura de Governança
        </h2>
        <div className="max-w-4xl mx-auto">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {governanceStructure.map((item, index) => {
                const Icon = governanceIconMap[item.title] || Target;
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2">
                    <div className="p-1 h-full">
                      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center h-full transition-transform duration-300 hover:scale-105">
                        <div className="mb-4">
                          <Icon className="w-12 h-12 text-accent" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold mb-2 text-blue-900">
                            {item.title}
                          </h3>
                          <p className="text-neutral-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* ODS Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-neutral-900">
            Objetivos de Desenvolvimento Sustentável (ODS)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
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
