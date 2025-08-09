"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Municipality } from "@/types/municipality";
import { LatLngTuple } from "leaflet";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./_components/MunicipalityMap"), {
  ssr: false,
});

const CENTER: LatLngTuple = [-21.110773, -47.440252];

export default function MunicipiosPage() {
  const [municipalitiesData, setMunicipalities] = useState<Municipality[]>([]);
  const [selectedMunicipality, setSelectedMunicipality] =
    useState<Municipality | null>(null);

  useEffect(() => {
    const fetchMunicipalities = async () => {
      try {
        const res = await fetch("/api/cities");
        const data: Municipality[] = await res.json();
        setMunicipalities(data);
      } catch (error) {
        console.error("Erro ao buscar municípios:", error);
      }
    };
    fetchMunicipalities();
  }, []);
  const isLoading = !municipalitiesData || municipalitiesData.length === 0;

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] bg-white text-neutral-900">
      {/* Lista */}
      <div className="w-full lg:w-2/5 ">
        <div className="container mx-auto px-8 py-8 max-w-xl">
          <h1 className="text-3xl font-bold mb-8">Municípios</h1>
          <div className="grid gap-4">
            {isLoading
              ? Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className=" border border-blue-900/35 rounded-lg overflow-hidden animate-pulse"
                  >
                    <div className="relative h-32 bg-blue-900/30" />
                    <div className="p-4">
                      <div className="h-4 bg-blue-900/30 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-blue-900/30 rounded w-full mb-2"></div>
                      <div className="h-3 bg-blue-900/30 rounded w-5/6 mb-4"></div>
                      <div className="flex gap-2 mb-3">
                        <div className="h-5 w-16 bg-blue-900/30 rounded-full"></div>
                        <div className="h-5 w-16 bg-blue-900/30 rounded-full"></div>
                      </div>
                      <div className="h-8 bg-blue-900/30 rounded w-full"></div>
                    </div>
                  </div>
                ))
              : municipalitiesData.map((municipality) => (
                  <div
                    key={municipality.name}
                    className="bg-blue-900 border border-blue-900/35 rounded-lg overflow-hidden hover:border-neutral-500 hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedMunicipality(municipality)}
                  >
                    <div className="relative h-32">
                      <Image
                        src={municipality.coatOfArms || ""}
                        alt={municipality.name}
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-white mb-1">
                        {municipality.name}
                      </h2>
                      <p className="text-sm text-neutral-400 mb-2 line-clamp-2">
                        {municipality.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {municipality.highlights
                          ?.slice(0, 2)
                          .map((item, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-white text-neutral-700 rounded-full text-xs"
                            >
                              {item.title}
                            </span>
                          ))}
                        {(municipality.highlights?.length ?? 0) > 2 && (
                          <span className="px-2 py-1 bg-white text-neutral-700 rounded-full text-xs">
                            +{(municipality.highlights?.length ?? 0) - 2} mais
                          </span>
                        )}
                      </div>
                      <Link
                        href={`/municipios/${municipality.slug}`}
                        className="inline-flex items-center justify-center w-full px-3 py-1.5 bg-white text-neutral-700 rounded-md hover:bg-blue-400 transition-colors text-sm"
                      >
                        <MapPin className="w-3.5 h-3.5 mr-1.5" />
                        Ver Detalhes
                      </Link>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className="hidden lg:block w-full lg:w-3/5 h-[calc(100vh-4rem)] sticky top-16">
        <div className="h-full px-8 py-4">
          <DynamicMap
            mapCenter={CENTER}
            municipalities={municipalitiesData}
            selectedMunicipality={selectedMunicipality}
          />
        </div>
      </div>
    </div>
  );
}
