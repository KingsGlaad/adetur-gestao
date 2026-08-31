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
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full">
        <HeroSectionCarousel />
      </section>

      {/* Seção Mapa e Lista de Municípios */}
      <section
        id="mapa"
        className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] bg-muted/20 border-b border-border mt-12"
      >
        {/* Lista */}
        <div className="w-full lg:w-2/5 lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto">
          <div className="container mx-auto px-6 sm:px-8 py-8 max-w-xl">
            <div className="mb-6 space-y-1">
              <span className="text-xs uppercase tracking-wider font-bold text-primary">Região Turística</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">Municípios Integrados</h1>
            </div>
            <div className="grid gap-4">
              {isLoading
                ? Array.from({ length: 6 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="border border-border rounded-2xl overflow-hidden animate-pulse bg-card p-4 space-y-3"
                    >
                      <div className="h-28 bg-muted rounded-xl" />
                      <div className="h-4 bg-muted rounded w-3/4" />
                      <div className="h-3 bg-muted rounded w-full" />
                    </div>
                  ))
                : municipalities.map((municipality) => (
                    <div
                      key={municipality.name}
                      className="bg-card text-card-foreground border border-border/80 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedMunicipality(municipality)}
                    >
                      <div className="relative h-32 bg-muted">
                        <Image
                          src={municipality.coatOfArms || "/logo.png"}
                          alt={municipality.name}
                          fill
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-5">
                        <h2 className="text-lg font-bold text-card-foreground mb-1">
                          {municipality.name}
                        </h2>
                        <p className="text-xs text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                          {municipality.description}
                        </p>

                        <Link
                          href={`/municipios/${municipality.slug}`}
                          className="inline-flex items-center justify-center w-full px-3 py-2 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity text-xs gap-1.5 shadow-sm"
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          Ver Detalhes do Município
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

      {/* Seção Nossos Diferenciais */}
      <section
        id="diferenciais"
        className="py-16 md:py-24 bg-background relative overflow-hidden border-b border-border"
      >
        <StatsBackground />
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-wider font-bold text-primary">Por que a Alta Mogiana?</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Nossos Diferenciais
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <Link
                  href={feature.link}
                  key={feature.title}
                  className="bg-card text-card-foreground border border-border/80 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção Notícias */}
      <NewsSection />

      {/* Seção Segmentos Turísticos */}
      <section
        id="segmentos"
        className="py-16 md:py-24 bg-muted/20 relative overflow-hidden border-b border-border"
      >
        {/* SVGs decorativos */}
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 text-emerald-500/5 dark:text-emerald-500/5 pointer-events-none">
          <DecorativeBlob1 />
        </div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-wider font-bold text-primary">Diversidade de Roteiros</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Segmentos Turísticos
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A região da Alta Mogiana oferece uma diversidade de experiências
              para todos os gostos, desde a tranquilidade do campo até a emoção da
              aventura.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="bg-card text-card-foreground border border-border/80 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-amber-500/40 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-bold text-card-foreground mb-2 group-hover:text-amber-500 transition-colors">
                    {segment.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-grow">
                    {segment.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção ODS */}
      <section id="ods" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400">Sustentabilidade & Futuro</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Objetivos de Desenvolvimento Sustentável (ODS)
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            <TooltipProvider>
              {odsGoals.map((goal) => (
                <Tooltip key={goal.number}>
                  <TooltipTrigger asChild>
                    <div className="rounded-2xl overflow-hidden p-4 cursor-pointer hover:scale-105 transition-all duration-300 bg-card border border-border/80 shadow-sm hover:shadow-md flex items-center justify-center">
                      <Image
                        src={goal.image}
                        alt={`ODS ${goal.number}`}
                        width={120}
                        height={120}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs bg-popover text-popover-foreground border border-border p-4 rounded-xl shadow-xl">
                    <h3 className="font-bold mb-1 text-sm text-foreground">{goal.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{goal.description}</p>
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
    <svg
      width="400"
      height="400"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M37.5,-63.9C51.1,-57.1,66.4,-49.2,75.2,-37.8C84,-26.4,86.3,-13.2,84.5,-0.9C82.7,11.4,76.8,22.8,69.4,34.5C62,46.2,53.1,58.2,41.8,66.8C30.5,75.4,16.8,80.6,2.2,81.9C-12.4,83.2,-24.8,80.6,-37.8,74.8C-50.8,69,-64.4,60,-71.9,47.8C-79.4,35.6,-80.8,20.2,-79.9,5.4C-79,-9.4,-75.8,-23.6,-67.6,-35.2C-59.4,-46.8,-46.2,-55.8,-33.1,-62.1C-20,-68.4,-7,-72,6.8,-74.7C20.6,-77.3,41.2,-78.9,52.2,-72.9C63.2,-66.9,64.6,-53.3,60.8,-42.2C57,-31.1,48,-22.5,44.1,-15.4"
        transform="translate(100 100) scale(1.2)"
      ></path>
    </svg>
  );
}
