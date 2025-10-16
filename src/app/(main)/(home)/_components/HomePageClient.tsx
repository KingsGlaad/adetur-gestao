/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect } from "react";
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
import Link from "next/link";
import { HeroSectionCarousel } from "./Hero-Section";

import { features, tourismSegments, odsGoals } from "@/data/site-data";
import { NewsSection } from "./NewsSection";
import { Municipality } from "@/types/municipality";
import dynamic from "next/dynamic";
import { StatsBackground } from "./svgs/StatsBackground";
import { useParallax } from "@/hooks/useParallax";
const RegionMap = dynamic(() => import("./RegionMap"), {
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
  const parallaxStyle = useParallax(0.03);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Hero Section - Geralmente não precisa de animação de scroll */}
      <section className="relative w-full">
        <HeroSectionCarousel />
      </section>

     
      
        <section
          id="mapa"
          className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] bg-white text-neutral-900 mt-12"
        >
          {/* Lista */}
          <div className="w-full lg:w-2/5 lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto">
            <div className="container mx-auto px-8 py-8 max-w-xl">
              <h1 className="text-3xl font-bold mb-8">Municípios Integrados</h1>
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
              <RegionMap
                municipalities={municipalities}
                selectedMunicipality={selectedMunicipality}
              />
            </div>
          </div>
        </section>
      

      
        <section id="diferenciais" className="py-12 bg-white relative overflow-hidden">
          <StatsBackground/>
          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Nossos Diferenciais
            </h2>
            <div className="flex flex-wrap justify-center md:justify-between gap-8">
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
                    className="bg-blue-900 rounded-lg shadow-md p-8 flex flex-col items-center text-center text-white transition-transform hover:scale-105 w-full sm:w-auto md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)]"
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
      

      <NewsSection />
      

      <section id="segmentos" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* SVGs decorativos no fundo */}
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 text-blue-100/50">
          <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M37.5,-63.9C51.1,-57.1,66.4,-49.2,75.2,-37.8C84,-26.4,86.3,-13.2,84.5,-0.9C82.7,11.4,76.8,22.8,69.4,34.5C62,46.2,53.1,58.2,41.8,66.8C30.5,75.4,16.8,80.6,2.2,81.9C-12.4,83.2,-24.8,80.6,-37.8,74.8C-50.8,69,-64.4,60,-71.9,47.8C-79.4,35.6,-80.8,20.2,-79.9,5.4C-79,-9.4,-75.8,-23.6,-67.6,-35.2C-59.4,-46.8,-46.2,-55.8,-33.1,-62.1C-20,-68.4,-7,-72,6.8,-74.7C20.6,-77.3,41.2,-78.9,52.2,-72.9C63.2,-66.9,64.6,-53.3,60.8,-42.2C57,-31.1,48,-22.5,44.1,-15.4" transform="translate(100 100) scale(1.2)"></path></svg>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-amber-100/50">
          <svg width="500" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M48.4,-63.4C62.9,-55.9,75.2,-43.1,79.5,-27.9C83.8,-12.7,80.1,4.8,72.2,19.1C64.3,33.4,52.2,44.5,38.9,54.5C25.6,64.5,11.1,73.4,-3.8,75.8C-18.7,78.2,-37.4,74.1,-49.8,64.1C-62.2,54.1,-68.3,38.2,-72.7,21.7C-77.1,5.2,-79.8,-11.9,-74.5,-26.1C-69.2,-40.3,-55.9,-51.6,-42.1,-59.6C-28.3,-67.6,-14.2,-72.3,1.3,-73.8C16.7,-75.3,33.,-70.9,48.4,-63.4" transform="translate(100 100) scale(1.1)"></path></svg>
        </div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Segmentos Turísticos</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            A região da Alta Mogiana oferece uma diversidade de experiências para todos os gostos, desde a tranquilidade do campo até a emoção da aventura.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tourismSegments.map((segment) => {
              const Icon =
                segment.name === "Turismo Rural" ? Trees
                : segment.name === "Turismo de Aventura" ? Mountain
                : segment.name === "Turismo Cultural" ? Globe
                : segment.name === "Turismo Ecológico" ? Leaf
                : segment.name === "Pesca" ? Fish
                : segment.name === "Lazer" ? Calendar
                : Church;
              return (
                <div
                  key={segment.name}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-t-4 border-transparent hover:border-amber-400"
                >
                  <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {segment.name}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {segment.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      

      
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
      
    </div>
  );
}

function DecorativeBlob1() {
  return (
    <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M37.5,-63.9C51.1,-57.1,66.4,-49.2,75.2,-37.8C84,-26.4,86.3,-13.2,84.5,-0.9C82.7,11.4,76.8,22.8,69.4,34.5C62,46.2,53.1,58.2,41.8,66.8C30.5,75.4,16.8,80.6,2.2,81.9C-12.4,83.2,-24.8,80.6,-37.8,74.8C-50.8,69,-64.4,60,-71.9,47.8C-79.4,35.6,-80.8,20.2,-79.9,5.4C-79,-9.4,-75.8,-23.6,-67.6,-35.2C-59.4,-46.8,-46.2,-55.8,-33.1,-62.1C-20,-68.4,-7,-72,6.8,-74.7C20.6,-77.3,41.2,-78.9,52.2,-72.9C63.2,-66.9,64.6,-53.3,60.8,-42.2C57,-31.1,48,-22.5,44.1,-15.4" transform="translate(100 100) scale(1.2)"></path></svg>
  )
}
