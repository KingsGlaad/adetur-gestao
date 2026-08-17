"use client";

import { CalendarDays, CalendarOff } from "lucide-react";
import { Event } from "@/types/events"; // Corrigido: nome do tipo para padronização
import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "@/components/images/Lightbox";
import { EmptyPlaceholder } from "@/components/shared/EmptyPlaceholder";

interface EventsSectionProps {
  events: Event[];
}

export function EventsSection({ events }: EventsSectionProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = events
    .map((e) => e.image ?? "/images/no-image.jpeg");

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  if (events.length === 0) {
    return (
      <EmptyPlaceholder
        icon={<CalendarOff size={48} strokeWidth={1.5} />}
        title="Nenhum Evento Futuro"
        subtitle="Não há eventos programados para este município no momento."
      />
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={event.image ?? "/images/no-image.jpeg"}
              alt={event.title || "Evento"}
              width={600}
              height={400}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h4 className="text-lg font-semibold">{event.title}</h4>
              <p className="text-sm">
                <CalendarDays className="inline w-4 h-4 mr-1" />
                {event.date ? new Date(event.date).toLocaleDateString() : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          selectedIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
