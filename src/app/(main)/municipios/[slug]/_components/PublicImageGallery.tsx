"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PublicImageGalleryProps {
  images: string[];
  municipalityName: string;
}

export function PublicImageGallery({
  images,
  municipalityName,
}: PublicImageGalleryProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[16/10] w-full flex items-center justify-center bg-slate-200 rounded-lg">
        <span className="text-slate-500">Nenhuma imagem disponível</span>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const changeImage = (direction: "next" | "prev") => {
    const newIndex =
      direction === "next"
        ? (selectedImageIndex + 1) % images.length
        : (selectedImageIndex - 1 + images.length) % images.length;
    setSelectedImageIndex(newIndex);
  };

  const [mainImage, ...thumbnailImages] = images;

  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[450px]">
        {/* Imagem Principal */}
        <div
          className="col-span-4 sm:col-span-3 row-span-2 relative rounded-lg overflow-hidden cursor-pointer group"
          onClick={() => openLightbox(0)}
        >
          <Image
            src={mainImage}
            alt={`Imagem principal de ${municipalityName}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Miniaturas */}
        {thumbnailImages.slice(0, 2).map((image, index) => (
          <div
            key={index}
            className="hidden sm:block relative rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(index + 1)}
          >
            <Image
              src={image}
              alt={`Miniatura ${index + 1} de ${municipalityName}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {index === 1 && images.length > 3 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  +{images.length - 3}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-transparent border-none shadow-none">
          <Image
            src={images[selectedImageIndex]}
            alt={`Imagem ${selectedImageIndex + 1} de ${municipalityName}`}
            width={1600}
            height={900}
            className="w-full h-full object-contain"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 bg-black/30 hover:bg-black/50 text-white"
            onClick={() => changeImage("prev")}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 bg-black/30 hover:bg-black/50 text-white"
            onClick={() => changeImage("next")}
          >
            <ChevronRight />
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
