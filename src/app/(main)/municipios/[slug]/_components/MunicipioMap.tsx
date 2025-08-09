"use client";

import { useState } from "react";
import { TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
import { MapPin, Eye } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Highlight } from "@/types/highligth";

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
  municipality: {
    name: string;
    latitude: number | null;
    longitude: number | null;
  };
  highlights: Highlight[];
  geoJsonData: GeoJsonFeatureCollection; // GeoJSON para o contorno do município
}

export default function MunicipioMap({
  municipality,
  highlights,
  geoJsonData,
}: MunicipioMapProps) {
  const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(
    null
  );

  console.log(selectedHighlight);

  if (
    typeof municipality.latitude !== "number" ||
    typeof municipality.longitude !== "number"
  ) {
    return (
      <div className="w-full h-full bg-slate-200 flex items-center justify-center">
        <p>Localização indisponível.</p>
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
        <SheetContent className="w-[400px] sm:w-[540px] p-0">
          {selectedHighlight && (
            <div>
              <div className="relative w-full h-64">
                <Image
                  src={selectedHighlight.images?.[0] || "/images/no-image.jpeg"}
                  alt={`Imagem de ${selectedHighlight.title}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <SheetHeader>
                  <SheetTitle className="text-2xl">
                    {selectedHighlight.title}
                  </SheetTitle>
                  <SheetDescription className="pt-4 text-base">
                    {selectedHighlight.description}
                  </SheetDescription>
                </SheetHeader>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
