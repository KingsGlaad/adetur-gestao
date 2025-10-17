"use client";
import {
  Building2,
  CalendarDays,
  Handshake,
  Lightbulb,
  MapPin,
  Target,
  Tv,
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

export default function Page() {
  const { municipalities, isLoading, error } = useMunicipalities();
  return (
    <div className=" mx-auto bg-white mt-8">
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
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-400">
                Conheça a história e a estrutura da ADETUR - Associação de
                Desenvolvimento do Turismo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-16 relative py-16 bg-gray-50 overflow-hidden">
        <div
          className="hidden sm:block absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(229 231 235 / 0.7)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
          }}
        ></div>
        <div className="relative container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-neutral-900 text-center">
            Nossa História
          </h2>

          {/* Linha vertical da timeline */}
          <div className="absolute left-1/2 h-full w-0.5 bg-accent -translate-x-1/2 hidden md:block"></div>

          {/* Item 1 */}
          <div className="relative mb-8 flex justify-between items-center w-full">
            <div className="order-1 w-5/12">
              <div className="bg-blue-900 rounded-lg shadow-lg p-4">
                <h3 className="mb-2 font-bold text-white text-lg">2020</h3>
                <p className="text-sm text-neutral-300">
                  É criada a ADETUR – Agência de Desenvolvimento Turístico Alta
                  Mogiana, uma Instância de Governança Regional (IGR) formada
                  por municípios, empresas e entidades do terceiro setor da Alta
                  Mogiana Paulista, alinhada com as diretrizes do Ministério do
                  Turismo.
                </p>
              </div>
            </div>
            <div className="z-10 flex items-center justify-center w-8 h-8 bg-accent rounded-full"></div>
            <div className="order-3 w-5/12 flex justify-center">
              <Building2 className="w-16 h-16 text-blue-900/30" />
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative mb-8 flex justify-between flex-row-reverse items-center w-full">
            <div className="order-1 w-5/12">
              <div className="bg-blue-900 rounded-lg shadow-lg p-4">
                <h3 className="mb-2 font-bold text-white text-lg">
                  Novembro de 2021
                </h3>
                <p className="text-sm text-neutral-300">
                  A ADETUR realiza uma reunião na cidade de Luiz Antônio, na
                  Estação Ecológica Jataí. Durante o encontro, são apresentados
                  o projeto &quot;TV ALTA MOGIANA&quot; em parceria com a TV Record e um
                  novo roteiro turístico para a cidade de Tambaú.
                </p>
              </div>
            </div>
            <div className="z-10 flex items-center justify-center w-8 h-8 bg-accent rounded-full"></div>
            <div className="order-3 w-5/12 flex justify-center">
              <div className="flex gap-4">
                <Tv className="w-16 h-16 text-blue-900/30" />
                <MapPin className="w-16 h-16 text-blue-900/30" />
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative mb-8 flex justify-between items-center w-full">
            <div className="order-1 w-5/12">
              <div className="bg-blue-900 rounded-lg shadow-lg p-4">
                <h3 className="mb-2 font-bold text-white text-lg">
                  Abril de 2022
                </h3>
                <p className="text-sm text-neutral-300">
                  Ocorre uma reunião de trabalho em Cajuru, com a pauta
                  incluindo a inserção de cidades no Mapa do Turismo (SISMAPA),
                  discussões sobre um novo site e a participação na feira da
                  AVIRP (Associação das Agências de Viagem de Ribeirão Preto e
                  Região).
                </p>
              </div>
            </div>
            <div className="z-10 flex items-center justify-center w-8 h-8 bg-accent rounded-full"></div>
            <div className="order-3 w-5/12 flex justify-center">
              <CalendarDays className="w-16 h-16 text-blue-900/30" />
            </div>
          </div>

          {/* Item 4 */}
          <div className="relative mb-8 flex justify-between flex-row-reverse items-center w-full">
            <div className="order-1 w-5/12">
              <div className="bg-blue-900 rounded-lg shadow-lg p-4">
                <h3 className="mb-2 font-bold text-white text-lg">
                  Julho de 2022
                </h3>
                <p className="text-sm text-neutral-300">
                  O município de Cássia dos Coqueiros autoriza sua integração à
                  ADETUR. Vários outros municípios da região também formalizam
                  sua associação por meio de leis municipais.
                </p>
              </div>
            </div>
            <div className="z-10 flex items-center justify-center w-8 h-8 bg-accent rounded-full"></div>
            <div className="order-3 w-5/12 flex justify-center">
              <Handshake className="w-16 h-16 text-blue-900/30" />
            </div>
          </div>

          {/* Item 5 */}
          <div className="relative mb-8 flex justify-between items-center w-full">
            <div className="order-1 w-5/12">
              <div className="bg-blue-900 rounded-lg shadow-lg p-4">
                <h3 className="mb-2 font-bold text-white text-lg">
                  Maio de 2025
                </h3>
                <p className="text-sm text-neutral-300">
                  A agência participa do evento &quot;PRT em Ação&quot;, promovido pelo
                  Ministério do Turismo e pela Secretaria de Turismo e Viagens
                  do Estado de São Paulo, contribuindo com debates e oficinas
                  sobre o desenvolvimento do turismo regional.
                </p>
              </div>
            </div>
            <div className="z-10 flex items-center justify-center w-8 h-8 bg-accent rounded-full"></div>
            <div className="order-3 w-5/12 flex justify-center">
              <Lightbulb className="w-16 h-16 text-blue-900/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Municipalities Section */}
      <section className="mb-16 bg-gray-100 p-8 relative">
        <div className="absolute inset-0">
          <Image
            src="/bg/bg-municipios2.png"
            alt="Fundo com paisagem da região da Alta Mogiana"
            fill
            className="object-cover backdrop-blur-3xl opacity-80"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-neutral-900 text-center">
            Municípios Integrados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading &&
              Array.from({ length: 6 }).map((_, idx) => (
                <MunicipalitiesCardSkeleton key={idx} /> // Usando o novo esqueleto
              ))}
            {error && <div className="text-red-500 bg-white p-4 rounded-lg text-center">{error}</div>}
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
