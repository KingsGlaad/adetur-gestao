"use client";

import { useState } from "react";
import { TileLayer, Marker, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { renderToStaticMarkup } from "react-dom/server"; 
import { divIcon } from "leaflet";
import { MapPin, Eye, MapPinOff, ImageIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Highlight } from "@/types/highligth"; // Corrigido: caminho e tipo para incluir imagens
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {  MunicipalityRefined } from "@/types/municipality";

// Importação dinâmica do MapContainer para evitar problemas de SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

// Ícone personalizado para os destaques
const highlightIconMarkup = renderToStaticMarkup(
  <MapPin size={32} className="text-blue-600 fill-blue-500 drop-shadow-lg" />
);
const customHighlightIcon = divIcon({
  html: highlightIconMarkup,
  className: "bg-transparent border-0",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

type GeoJsonFeatureCollection = GeoJSON.FeatureCollection<GeoJSON.Geometry>;

interface MunicipioMapProps {
  municipality:MunicipalityRefined;
  highlights: Highlight[];
  geoJsonData: GeoJsonFeatureCollection; // GeoJSON para o contorno do município
}

export default function MunicipioMap({
  municipality,
  highlights,
  geoJsonData,
}: MunicipioMapProps) {
  const [selectedHighlight, setSelectedHighlight] =
    useState<Highlight | null>(null);

  console.log(selectedHighlight);

  if (
    typeof municipality.latitude !== "number" ||
    typeof municipality.longitude !== "number"
  ) {
    return (
      <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center text-center p-4">
        <MapPinOff className="w-16 h-16 text-slate-400 mb-4" strokeWidth={1} />
        <h3 className="text-lg font-semibold text-slate-600">Localização Indisponível</h3>
        <p className="text-sm text-slate-500">Não foi possível carregar o mapa para este município.</p>
      </div> 
    );
  }

  const center: [number, number] = [
    municipality.latitude,
    municipality.longitude,
  ];

  return (
    <>
      <MapContainer
        center={center}
        zoom={12}
        zoomControl={true}
        dragging={true}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Camada para desenhar o contorno do município */}
        {geoJsonData && (
          <GeoJSON
            data={geoJsonData}
            style={{
              color: "#1e40af", // Azul
              weight: 2,
              opacity: 0.6,
              fillColor: "#60a5fa", // Azul claro
              fillOpacity: 0.1,
            }}
          />
        )}

        {/* Marcadores para cada destaque */}
        {highlights.map((highlight) =>
          highlight.latitude && highlight.longitude ? (
            <Marker
              key={highlight.id}
              position={[highlight.latitude, highlight.longitude]}
              icon={customHighlightIcon}
              eventHandlers={{
                click: () => setSelectedHighlight(highlight),
              }}
            />
          ) : null
        )}
      </MapContainer>

      {/* Painel Lateral (Sheet) para mostrar detalhes do destaque */}
      <Sheet
        open={!!selectedHighlight}
        onOpenChange={(isOpen) => !isOpen && setSelectedHighlight(null)}
      >
        <SheetContent className="w-[400px] sm:w-[540px] flex flex-col p-0">
          {selectedHighlight && (
            <>
              {/* Seção do Carrossel */}
              <div className="flex-shrink-0">
                {selectedHighlight.galleryImages &&
                selectedHighlight.galleryImages.length > 0 ? (
                  <Carousel
                    plugins={[
                      Autoplay({
                        delay: 5000,
                        stopOnInteraction: true,
                      }),
                    ]}
                    opts={{
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {selectedHighlight.galleryImages.map((image) => (
                        <CarouselItem key={image.id}>
                          <div className="relative w-full h-60">
                            <Image
                              src={image.url}
                              alt={`Imagem de ${selectedHighlight.title}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-4" />
                    <CarouselNext className="absolute right-4" />
                  </Carousel>
                ) : (
                  <div className="relative w-full h-60 bg-slate-100 flex flex-col items-center justify-center text-slate-500">
                    <ImageIcon className="w-12 h-12 text-slate-400 mb-2" strokeWidth={1.5}/>
                    <p className="text-sm">
                      Nenhuma imagem disponível
                    </p>
                  </div>
                )}
              </div>

              {/* Seção de Conteúdo com Scroll */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold text-slate-900">
                    {selectedHighlight.title}
                  </SheetTitle>
                </SheetHeader>
                <SheetDescription className="text-base text-slate-600 leading-relaxed">
                  {selectedHighlight.description}
                </SheetDescription>
                <Link
                  href={`/municipios/highlights/${selectedHighlight.id}`}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Ver Detalhes
                </Link>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
