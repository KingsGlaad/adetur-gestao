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
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { MunicipalityRefined } from "@/types/municipality";
import "leaflet/dist/leaflet.css";

const ZOOM = 10;
// Ícone personalizado para os destaques
const iconMarkup = renderToStaticMarkup(
  <MapPin size={32} className="text-red-600 fill-red-500 drop-shadow-lg" />,
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
  municipalities: MunicipalityRefined[];
  selectedMunicipality: MunicipalityRefined | null;
};

export default function RegionMap({
  municipalities,
  selectedMunicipality,
}: MunicipalityMapProps) {
  const [meshes, setMeshes] = useState<Record<string, GeoJsonFeatureCollection>>({});
  const [isLoading, setIsLoading] = useState(true);

  const mapCenter: LatLngTuple = [-21.110773, -47.440252];

  useEffect(() => {
    if (!municipalities || municipalities.length === 0) {
      setIsLoading(false);
      return;
    }

    const fetchMeshes = async () => {
      setIsLoading(true);
      const newMeshes: Record<string, GeoJsonFeatureCollection> = {};
      
      try {
        const promises = municipalities
          .filter((m) => m.ibgeCode)
          .map(async (m) => {
            const cleanCode = m.ibgeCode?.trim();
            try {
              const res = await fetch(
                `https://servicodados.ibge.gov.br/api/v3/malhas/municipios/${cleanCode}?formato=application/vnd.geo+json`,
              );
              
              if (!res.ok) {
                console.warn(`Erro na API do IBGE para ${m.name} (${cleanCode}): ${res.status}`);
                return;
              }

              const data = await res.json();
              
              if (!data || !data.features || data.features.length === 0) {
                console.warn(`O município ${m.name} (${cleanCode}) não retornou geometria válida.`);
                return;
              }

              newMeshes[m.id] = data;
              console.log(`Malha carregada com sucesso para ${m.name} (${cleanCode})`);
            } catch (err) {
              console.error(`Falha na requisição para ${m.name} (${cleanCode}):`, err);
            }
          });

        await Promise.all(promises);
        setMeshes(newMeshes);
        console.log(`Total de malhas carregadas: ${Object.keys(newMeshes).length}`);
      } catch (error) {
        console.error("Erro geral ao buscar malhas do IBGE:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeshes();
  }, [municipalities]);

  const selectedCenter: LatLngTuple =
    selectedMunicipality &&
    typeof selectedMunicipality.latitude === "number" &&
    typeof selectedMunicipality.longitude === "number"
      ? [selectedMunicipality.latitude, selectedMunicipality.longitude]
      : mapCenter;

  const geoJsonStyleAdetur = {
    color: "#007BFF",
    weight: 2,
    fillColor: "#87CEEB",
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
      {isLoading && (
        <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-gray-200/50 backdrop-blur-sm">
          <Image
            src="/logo.png"
            alt="Adetur Logo"
            priority
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

      {/* Malhas dos municípios vindas do IBGE */}
      {Object.entries(meshes).map(([municipalityId, geoData]) => (
        <GeoJSON
          key={`geojson-${municipalityId}`}
          data={geoData}
          style={geoJsonStyleAdetur}
        />
      ))}

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
