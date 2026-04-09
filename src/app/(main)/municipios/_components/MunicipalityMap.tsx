"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  GeoJSON,
} from "react-leaflet";
import { LatLngTuple, divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { MunicipalityRefined } from "@/types/municipality";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";
import Image from "next/image";

const ZOOM = 9;
const iconMarkup = renderToStaticMarkup(
  <MapPin size={32} className="text-red-600 fill-red-500 drop-shadow-lg" />,
);
const customIcon = divIcon({
  html: iconMarkup,
  className: "bg-transparent border-0",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});
type GeoJsonFeatureCollection = GeoJSON.FeatureCollection<GeoJSON.Geometry>;

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
  const [geoJsonAdetur, setGeoJsonAdetur] =
    useState<GeoJsonFeatureCollection | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([fetch("/adetur.geojson").then((r) => r.json())])
      .then(([adetur]) => {
        setGeoJsonAdetur(adetur);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const geoJsonStyleAdetur = {
    color: "#007BFF",
    weight: 2,
    fillColor: "#87CEEB",
    fillOpacity: 0.4,
  };

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
      {isLoading && (
        <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-gray-200/50 backdrop-blur-sm">
          <Image
            src="/logo.png"
            priority
            alt="Adetur Logo"
            width={30}
            height={30}
            className="animate-pulse"
          />
        </div>
      )}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoJsonAdetur && (
        <GeoJSON data={geoJsonAdetur} style={geoJsonStyleAdetur} />
      )}

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
