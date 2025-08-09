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

export function HeroImage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="relative">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <div className="text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                      {image.title}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-neutral-400">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                current === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </>
  );
}
