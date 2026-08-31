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
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] bg-background text-foreground">
      {/* Lista */}
      <div className="w-full lg:w-2/5 border-r border-border">
        <div className="container mx-auto px-6 sm:px-8 py-8 max-w-xl">
          <div className="mb-6 space-y-1">
            <span className="text-xs uppercase tracking-wider font-bold text-primary">Região Turística</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">Municípios</h1>
          </div>
          <div className="grid gap-4">
            {isLoading &&
              Array.from({ length: 6 }).map((_, idx) => (
                <MunicipalityListItemSkeleton key={idx} />
              ))}
            {error && <p className="text-red-500 bg-red-500/10 p-4 rounded-xl border border-red-500/20">{error}</p>}
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
      <div className="hidden lg:block w-full lg:w-3/5 h-[calc(100vh-4rem)] sticky top-16 bg-muted/20">
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
