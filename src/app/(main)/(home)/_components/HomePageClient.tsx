/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
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
  Loader2,
} from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MunicipalitiesCard } from "@/components/cards/MunicipalitiesCard";
import Link from "next/link";
import { HeroSectionCarousel } from "./Hero-Section";

import { AnimatedSection } from "./animations/AnimatedSection";

import { features, tourismSegments, odsGoals } from "@/data/site-data";
import { Municipality } from "@/types/municipality";
import dynamic from "next/dynamic";
import MapPage from "./MapPage";
const DynamicMap = dynamic(() => import("./MapPage"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-gray-200">
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
    </div>
  ),
});

interface HomePageClientProps {
  municipalities: Municipality[];
}

export function HomePageClient({ municipalities }: HomePageClientProps) {
  const [selectedMunicipality, setSelectedMunicipality] =
    useState<Municipality | null>(null);
  const isLoading = !municipalities || municipalities.length === 0;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Hero Section - Geralmente não precisa de animação de scroll */}
      <section className="relative w-full">
        <HeroSectionCarousel />
      </section>

      {/* Cada seção principal da página é envolvida pelo AnimatedSection */}
      <AnimatedSection>
        <section
          id="mapa"
          className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] bg-white text-neutral-900"
        >
          {/* Lista */}
          <div className="w-full lg:w-2/5 lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto">
            <div className="container mx-auto px-8 py-8 max-w-xl">
              <h1 className="text-3xl font-bold mb-8">Municípios</h1>
              <div className="grid gap-4">
                {isLoading
                  ? Array.from({ length: 6 }).map((_, idx) => (
                      <div
                        key={idx}
                        className=" border border-blue-900/35 rounded-lg overflow-hidden animate-pulse"
                      >
                        <div className="relative h-32 bg-blue-900/30" />
                        <div className="p-4">
                          <div className="h-4 bg-blue-900/30 rounded w-3/4 mb-2"></div>
                          <div className="h-3 bg-blue-900/30 rounded w-full mb-2"></div>
                          <div className="h-3 bg-blue-900/30 rounded w-5/6 mb-4"></div>
                          <div className="flex gap-2 mb-3">
                            <div className="h-5 w-16 bg-blue-900/30 rounded-full"></div>
                            <div className="h-5 w-16 bg-blue-900/30 rounded-full"></div>
                          </div>
                          <div className="h-8 bg-blue-900/30 rounded w-full"></div>
                        </div>
                      </div>
                    ))
                  : municipalities.map((municipality) => (
                      <div
                        key={municipality.name}
                        className="bg-blue-900 border border-blue-900/35 rounded-lg overflow-hidden hover:border-neutral-500 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => setSelectedMunicipality(municipality)}
                      >
                        <div className="relative h-32">
                          <Image
                            src={municipality.coatOfArms || ""}
                            alt={municipality.name}
                            fill
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="p-4">
                          <h2 className="text-lg font-semibold text-white mb-1">
                            {municipality.name}
                          </h2>
                          <p className="text-sm text-neutral-400 mb-2 line-clamp-2">
                            {municipality.description}
                          </p>

                          <Link
                            href={`/municipios/${municipality.slug}`}
                            className="inline-flex items-center justify-center w-full px-3 py-1.5 bg-white text-neutral-700 rounded-md hover:bg-blue-400 transition-colors text-sm"
                          >
                            <MapPin className="w-3.5 h-3.5 mr-1.5" />
                            Ver Detalhes
                          </Link>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="hidden lg:block w-full lg:w-3/5 h-[calc(100vh-4rem)] sticky top-16">
            <div className="h-full px-8 py-4">
              <MapPage municipalities={municipalities} selectedMunicipality={selectedMunicipality} />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="relative z-10">
        <section id="diferenciais" className="py-12 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Nossos Diferenciais
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => {
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
                    key={feature.title}
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
      </AnimatedSection>

      <AnimatedSection>
        <section id="municipios" className="py-12 bg-gray-100">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Municípios Integrados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {municipalities.map((municipality) => (
                <MunicipalitiesCard
                  key={municipality.id}
                  municipalities={{
                    id: municipality.id,
                    name: municipality.name,
                    slug: municipality.slug ?? null,
                    coatOfArms: municipality.coatOfArms ?? null,
                    description: municipality.description ?? null,
                    highlights: municipality.highlights ?? [],
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="segmentos" className="py-12 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Segmentos Turísticos Atendidos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {tourismSegments.map((segment) => {
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
                    key={segment.name}
                    className="bg-blue-900 rounded-lg shadow-md p-8 flex flex-col items-center text-center text-white transition-transform hover:scale-105"
                  >
                    <Icon className="w-14 h-14 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-foreground">
                      {segment.name}
                    </h3>
                    <p className="text-blue-300 text-sm">
                      {segment.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="ods" className="py-12 bg-gray-100">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Objetivos de Desenvolvimento Sustentável (ODS)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <TooltipProvider>
                {odsGoals.map((goal) => (
                  <Tooltip key={goal.number}>
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
                      <p className="text-sm">{goal.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
