"use client";
import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import { Timeline } from "./_components/TimeLine";
import HistoriaSection from "./_components/CompanhiaMogianaHistoria";
import ArquiteturaSection from "./_components/CompanhiaMogianaArquitetura";
import LocomotivasSection from "./_components/CompanhiaMogianaLocomotivas";
import VideoSection from "./_components/VideoSection";

export default function Page() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <section className="mb-12 sm:mb-16">
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
          <Image
            src={"/cmf/oficinas_Mogiana_Campinas.jpg"}
            alt="Capa da ADETUR"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <HeroSection />
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 border-b border-border">
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-foreground text-center tracking-tight">
          Histórico da Companhia Mogiana
        </h2>
        <div className="p-4 sm:p-6 bg-card border border-border/80 rounded-2xl shadow-sm">
          <div className="space-y-6">
            <HistoriaSection />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-8 sm:py-12 bg-muted/20 border-b border-border">
        <Timeline />
      </section>

      {/* Estrutura Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 border-b border-border">
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-foreground text-center tracking-tight">
          Arquitetura Industrial
        </h2>
        <div className="p-4 sm:p-6 bg-card border border-border/80 rounded-2xl shadow-sm">
          <div className="space-y-6">
            <ArquiteturaSection />
          </div>
        </div>
      </section>

      {/* Locomotivas Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 border-b border-border">
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-foreground text-center tracking-tight">
          Locomotivas Usadas
        </h2>
        <div className="p-4 sm:p-6">
          <div className="space-y-6">
            <LocomotivasSection />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-foreground text-center tracking-tight">
          Assista conteúdos exclusivos
        </h2>
        <div className="p-4 sm:p-6">
          <div className="space-y-6">
            <VideoSection />
          </div>
        </div>
      </section>
    </div>
  );
}
