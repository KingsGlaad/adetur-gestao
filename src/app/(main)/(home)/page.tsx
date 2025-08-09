import {
  MapPin,
  Users,
  Calendar,
  Building2,
  Leaf,
  Mountain,
  Church,
  Fish,
  Trees,
  Globe,
} from "lucide-react";
import { features, stats, tourismSegments, odsGoals } from "@/data/site-data";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MunicipalitiesCard } from "@/components/cards/MunicipalitiesCard";
import { prisma } from "@/lib/prisma";
import { HeroSectionCarousel } from "./_components/Hero-Section";
import MapPage from "./_components/MapPage";

export default async function HomePage() {
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
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full">
        <HeroSectionCarousel />
      </section>

      {/* Mapa */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Mapa da Região
          </h2>

          {/* Container do Mapa */}
          <div className="w-full h-[500px] rounded-lg shadow-lg overflow-hidden mx-auto pt-16">
            <MapPage />
          </div>

          {/* Legenda abaixo do mapa */}
          <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">Legenda</h3>
            <ul className="text-sm space-y-1">
              <li>
                <span className="inline-block w-4 h-4 bg-blue-500 mr-2 rounded"></span>
                Cidades pertencentes a ADETUR - Alta Mogiana
              </li>
              <li>
                <span className="inline-block w-4 h-4 bg-yellow-500 mr-2 rounded"></span>
                Cidades pertencentes ao Território da Alta Mogiana
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section 
      <section className="py-12 bg-blue-900">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-blue-800 rounded-lg p-6 text-center shadow-md transition-transform hover:scale-105"
              >
                <div className="text-4xl font-extrabold text-white mb-3">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {stat.title}
                </h3>
                <p className="text-blue-300 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Nossos Diferenciais
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon =
                feature.icon === "MapPin"
                  ? MapPin
                  : feature.icon === "Users"
                  ? Users
                  : feature.icon === "Calendar"
                  ? Calendar
                  : Building2;
              return (
                <div
                  key={index}
                  className="bg-blue-900 rounded-lg shadow-md p-8 flex flex-col items-center text-center text-white transition-transform hover:scale-105"
                >
                  <Icon className="w-14 h-14 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-blue-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Municipalities Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Municípios Integrados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {municipalities.map((municipality) => (
              <MunicipalitiesCard
                key={municipality.id}
                municipalities={municipality}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tourism Segments Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Segmentos Turísticos Atendidos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tourismSegments.map((segment, index) => {
              const Icon =
                segment.name === "Turismo Rural"
                  ? Trees
                  : segment.name === "Turismo de Aventura"
                  ? Mountain
                  : segment.name === "Turismo Cultural"
                  ? Globe
                  : segment.name === "Turismo Ecológico"
                  ? Leaf
                  : segment.name === "Pesca"
                  ? Fish
                  : segment.name === "Lazer"
                  ? Calendar
                  : Church;
              return (
                <div
                  key={index}
                  className="bg-blue-900 rounded-lg shadow-md p-8 flex flex-col items-center text-center text-white transition-transform hover:scale-105"
                >
                  <Icon className="w-14 h-14 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{segment.name}</h3>
                  <p className="text-muted-foreground">{segment.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ODS Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Objetivos de Desenvolvimento Sustentável (ODS)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <TooltipProvider>
              {odsGoals.map((goal, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div className="rounded-lg overflow-hidden p-4 cursor-pointer hover:scale-105 transition-transform duration-300 bg-white shadow-md">
                      <Image
                        src={goal.image}
                        alt={`ODS ${goal.number}`}
                        width={120}
                        height={120}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs bg-muted-foreground text-white p-4 rounded-lg shadow-lg">
                    <h3 className="font-bold mb-2 text-lg">{goal.title}</h3>
                    <p className="text-sm text-">{goal.description}</p>
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
