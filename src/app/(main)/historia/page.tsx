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
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="mb-12 sm:mb-16">
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-lg">
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
      <section className=" mx-auto px-4 py-8 sm:py-12 bg-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-neutral-900 text-center">
          Histórico da Companhia Mogiana
        </h2>
        <div className="p-4 sm:p-6 rounded-lg">
          <div className="space-y-6">
            <HistoriaSection />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <Timeline />
      </section>

      {/*Estrutura Section */}
      <section className="mx-auto px-4 py-8 sm:py-12 bg-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-neutral-900 text-center">
          Arquitetura Industrial
        </h2>
        <div className="p-4 sm:p-6 rounded-lg">
          <div className="space-y-6">
            <ArquiteturaSection />
          </div>
        </div>
      </section>

      {/*Locomotivas Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-neutral-900 text-center">
          Locomotivas Usadas
        </h2>
        <div className="p-4 sm:p-6 rounded-lg">
          <div className="space-y-6">
            <LocomotivasSection />
          </div>
        </div>
      </section>

      {/*Video Section */}
      <section className=" mx-auto px-4 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-neutral-900 text-center">
          Assista conteúdos exclusivos
        </h2>
        <div className="p-4 sm:p-6 rounded-lg">
          <div className="space-y-6">
            <VideoSection />
          </div>
        </div>
      </section>
    </div>
  );
}
