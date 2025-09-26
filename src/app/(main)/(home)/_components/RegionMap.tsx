/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapPin  } from "lucide-react";
import Image from "next/image";

const ZOOM = 10;
// Ícone personalizado para os destaques
const iconMarkup = renderToStaticMarkup(
  <MapPin size={32} className="text-red-600 fill-red-500 drop-shadow-lg" />
);
const customIcon = divIcon({
  html: iconMarkup,
  className: "bg-transparent border-0",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
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
};

export default function MunicipalityMap({
  municipalities,
  mapCenter,
  selectedMunicipality,
  geoJSONAlta,
  geoJSONAdetur,
}: MunicipalityMapProps) {
  const selectedCenter: LatLngTuple =
    selectedMunicipality &&
    typeof selectedMunicipality.latitude === "number" &&
    typeof selectedMunicipality.longitude === "number"
      ? [selectedMunicipality.latitude, selectedMunicipality.longitude]
      : mapCenter;

  const geoJsonStyle = {
    color: "#007BFF", // Cor unificada para as malhas
    weight: 2,
    fillColor: "#87CEEB", // Preenchimento unificado
    fillOpacity: 0.4,
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
      {geoJSONAlta && <GeoJSON data={geoJSONAlta} style={geoJsonStyle} />}
      {geoJSONAdetur && <GeoJSON data={geoJSONAdetur} style={geoJsonStyle} />}

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
    </MapContainer>
  );
}
