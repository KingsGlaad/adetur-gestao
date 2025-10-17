"use client";

import { useState } from "react";
import { Municipality } from "@/types/municipality";
import { LatLngTuple } from "leaflet";
import dynamic from "next/dynamic";
import { useMunicipalities } from "@/hooks/useMunicipalities";
import { MunicipalityListItemCard } from "@/components/cards/MunicipalityListItemCard";
import { MunicipalityListItemSkeleton } from "@/components/cards/MunicipalityListItemSkeleton";

const DynamicMap = dynamic(() => import("./_components/MunicipalityMap"), {
  ssr: false,
});

const CENTER: LatLngTuple = [-21.110773, -47.440252];

export default function MunicipiosPage() {
  const { municipalities, isLoading, error } = useMunicipalities();
  const [selectedMunicipality, setSelectedMunicipality] =
    useState<Municipality | null>(null);

    
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] bg-white text-neutral-900">
      {/* Lista */}
      <div className="w-full lg:w-2/5 ">
        <div className="container mx-auto px-8 py-8 max-w-xl">
          <h1 className="text-3xl font-bold mb-8">Municípios</h1>
          <div className="grid gap-4">
            {isLoading &&
              Array.from({ length: 6 }).map((_, idx) => (
                <MunicipalityListItemSkeleton key={idx} />
              ))}
            {error && <p className="text-red-500">{error}</p>}
            {!isLoading &&
              !error &&
              municipalities.map((municipality) => (
                <MunicipalityListItemCard
                  key={municipality.id}
                  municipality={municipality}
                  onClick={() => setSelectedMunicipality(municipality)}
                />
              ))}
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className="hidden lg:block w-full lg:w-3/5 h-[calc(100vh-4rem)] sticky top-16">
        <div className="h-full px-8 py-4">
          <DynamicMap
            municipalities={municipalities}
            selectedMunicipality={selectedMunicipality}
            mapCenter={CENTER}
          />
        </div>
      </div>
    </div>
  );
}
