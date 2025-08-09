"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { heroImages } from "@/data/site-data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, Calendar } from "lucide-react";

export function HeroSectionCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 7000 })]}
        className="absolute inset-0"
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="relative w-full h-screen">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="object-cover w-full h-full"
                priority={index === 0}
              />
              {/* Overlay com cor primária no tema */}
              <div className="absolute inset-0 bg-black/60 dark:bg-black/50" />

              {/* Conteúdo central */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-amber-300 mb-6 leading-tight drop-shadow-lg">
                  {image.title}
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground mb-8 max-w-2xl">
                  {image.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    variant="explore"
                    className="text-lg px-8 py-4 bg-amber-300 hover:shadow-accent-foreground transform hover:scale-105 text-white"
                  >
                    <Search className="mr-2 h-5 w-5" />
                    Explorar Destinos
                  </Button>
                  <Button
                    size="lg"
                    className="text-lg px-8 py-4 hover:shadow-accent-foreground transform-3d hover:scale-105"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Eventos Locais
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Dots com cor dinâmica */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                current === index ? "bg-white" : "bg-white/50 dark:bg-white/40"
              }`}
            />
          ))}
        </div>
      </Carousel>

      {/* Elementos flutuantes */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float z-10">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
