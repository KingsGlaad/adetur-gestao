"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngTuple, divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { MunicipalityRefined } from "@/types/municipality";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";
import Image from "next/image";

const ZOOM = 13;
const iconMarkup = renderToStaticMarkup(<MapPin className="fill-red-600" />);
const customIcon = divIcon({
  html: iconMarkup,
  className: "", // Zera a classe para não ter estilos estranhos do Leaflet
  iconSize: [50, 50],
  iconAnchor: [16, 32],
});

function ChangeView({ center, zoom }: { center: LatLngTuple; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

type MunicipalityMapProps = {
  mapCenter: LatLngTuple;
  municipalities: MunicipalityRefined[];
  selectedMunicipality: MunicipalityRefined | null;
};

export default function MunicipalityMap({
  municipalities,
  mapCenter,
  selectedMunicipality,
}: MunicipalityMapProps) {
  const selectedCenter: LatLngTuple =
    selectedMunicipality &&
    typeof selectedMunicipality.latitude === "number" &&
    typeof selectedMunicipality.longitude === "number"
      ? [selectedMunicipality.latitude, selectedMunicipality.longitude]
      : mapCenter;
  return (
    <MapContainer
      center={mapCenter}
      zoom={ZOOM}
      style={{ height: "100%", width: "100%" }}
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
                  href={`/municipios/${municipality.id}`}
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
