"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";
import { Lightbox } from "@/components/images/Lightbox";

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
      <div className="aspect-[16/10] w-full flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-500">
        <ImageOff className="w-12 h-12 text-slate-400 mb-2" strokeWidth={1.5} />
        <h3 className="font-semibold">Nenhuma imagem disponível</h3>
        <p className="text-sm">A galeria deste município está vazia.</p>
      </div> 
    );
  }

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
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
      {isLightboxOpen && (
        <Lightbox
          images={images}
          selectedIndex={selectedImageIndex}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </div>
  );
}
