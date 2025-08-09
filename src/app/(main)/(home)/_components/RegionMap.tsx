"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  GeoJSON,
} from "react-leaflet";
import { LatLngTuple, divIcon, GeoJSON as GeoJSONType } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { MunicipalityRefined } from "@/types/municipality";
import { Highlight } from "@/types/highligth"; // ajuste conforme seu tipo real
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { BinocularsIcon, MapPin, Pin } from "lucide-react";
import Image from "next/image";

const ZOOM = 8;
// Ícone personalizado para os destaques
const iconMarkup = renderToStaticMarkup(
  <MapPin size={50} className="text-blue-600 fill-blue-500 drop-shadow-lg" />
);
const customIcon = divIcon({
  html: iconMarkup,
  className: "bg-transparent border-0",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

// Ícone personalizado para os destaques
const highlightIconMarkup = renderToStaticMarkup(
  <BinocularsIcon
    size={32}
    className="text-black fill-red-500 drop-shadow-lg"
  />
);
const customHighlightIcon = divIcon({
  html: highlightIconMarkup,
  className: "bg-transparent border-0",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

function ChangeView({ center, zoom }: { center: LatLngTuple; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

type GeoJsonFeatureCollection = GeoJSON.FeatureCollection<GeoJSON.Geometry>;

type MunicipalityMapProps = {
  mapCenter: LatLngTuple;
  municipalities: MunicipalityRefined[];
  selectedMunicipality: MunicipalityRefined | null;
  highlights: Highlight[]; // Destaques, com lat/lng e info
  geoJSONAlta: GeoJsonFeatureCollection;
  geoJSONAdetur: GeoJsonFeatureCollection;
  geoJSONTerritorio: GeoJsonFeatureCollection;
};

export default function MunicipalityMap({
  municipalities,
  mapCenter,
  selectedMunicipality,
  highlights,
  geoJSONAlta,
  geoJSONAdetur,
  geoJSONTerritorio,
}: MunicipalityMapProps) {
  const selectedCenter: LatLngTuple =
    selectedMunicipality &&
    typeof selectedMunicipality.latitude === "number" &&
    typeof selectedMunicipality.longitude === "number"
      ? [selectedMunicipality.latitude, selectedMunicipality.longitude]
      : mapCenter;

  // Estilo da malha GeoJSON
  const geoJsonStyleAlta = {
    color: "#FFFF00",
    weight: 2,
    fillColor: "#EEDD82",
    fillOpacity: 0.4,
  };

  // Estilo da malha GeoJSON
  const geoJsonStyleAdetur = {
    color: "#00BFFF",
    weight: 2,
    fillColor: "#87CEEB",
    fillOpacity: 0.4,
  };

  // Estilo da malha GeoJSON
  const geoJsonStyleTer = {
    color: "#000000",
    weight: 1,
    fillColor: "#000000",
    fillOpacity: 0.0,
  };

  return (
    <MapContainer
      center={mapCenter}
      zoom={ZOOM}
      className="h-full w-full z-0"
      zoomControl={true}
      dragging={true}
      scrollWheelZoom={true}
      doubleClickZoom={true}
    >
      <ChangeView center={selectedCenter} zoom={ZOOM} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Malha dos municípios (GeoJSON) */}
      <GeoJSON data={geoJSONTerritorio} style={geoJsonStyleTer} />
      <GeoJSON data={geoJSONAlta} style={geoJsonStyleAlta} />
      <GeoJSON data={geoJSONAdetur} style={geoJsonStyleAdetur} />

      {/* Pins dos municípios */}
      {municipalities.map((municipality) => {
        if (
          typeof municipality.latitude !== "number" ||
          typeof municipality.longitude !== "number"
        ) {
          return null;
        }

        const coordinates: [number, number] = [
          municipality.latitude,
          municipality.longitude,
        ];

        return (
          <Marker
            key={municipality.name}
            position={coordinates}
            icon={customIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold">{municipality.name}</h3>
                <div className="relative h-32 mb-2 rounded overflow-hidden">
                  <Image
                    src={municipality.coatOfArms || ""}
                    alt={municipality.name}
                    className="object-cover w-full h-full"
                    fill
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {municipality.description}
                </p>
                <a
                  href={`/municipios/${municipality.slug}`}
                  className="text-primary text-sm hover:underline mt-2 inline-block"
                >
                  Ver mais detalhes
                </a>
              </div>
            </Popup>
          </Marker>
        );
      })}

      {/* Pins dos highlights */}
      {highlights.map((highlight) => {
        if (
          typeof highlight.latitude !== "number" ||
          typeof highlight.longitude !== "number"
        )
          return null;

        return (
          <Marker
            key={`highlight-${highlight.id}`}
            position={[highlight.latitude, highlight.longitude]}
            icon={customHighlightIcon}
            // Você pode usar outro ícone para highlights se quiser
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
                {/* Outros dados que queira mostrar */}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
