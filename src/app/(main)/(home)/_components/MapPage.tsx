"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { MunicipalityRefined } from "@/types/municipality";
import { Highlight } from "@/types/highligth";
import { LatLngTuple } from "leaflet";
import { Loader2 } from "lucide-react";

const DynamicMap = dynamic(() => import("./RegionMap"), {
  ssr: false,
});

type GeoJsonFeatureCollection = GeoJSON.FeatureCollection<GeoJSON.Geometry>;

export default function MapPage() {
  const [geoJsonAlta, setGeoJsonAlta] =
    useState<GeoJsonFeatureCollection | null>(null);
  const [geoJsonAdetur, setGeoJsonAdetur] =
    useState<GeoJsonFeatureCollection | null>(null);
  const [geoJsonTer, setGeoJsonTer] = useState<GeoJsonFeatureCollection | null>(
    null
  );
  const [municipalities, setMunicipalities] = useState<MunicipalityRefined[]>(
    []
  );
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [selectedMunicipality, setSelectedMunicipality] =
    useState<MunicipalityRefined | null>(null);

  // Centro padrão da região (exemplo)
  const CENTER: LatLngTuple = [-21.110773, -47.440252];

  // Fetch malha GeoJSON
  useEffect(() => {
    Promise.all([
      fetch("/altamogiana.geojson").then((r) => r.json()),
      fetch("/adetur.geojson").then((r) => r.json()),
      fetch("/territorio.geojson").then((r) => r.json()),
    ])
      .then(([alta, adetur, territorio]) => {
        setGeoJsonAlta(alta);
        setGeoJsonAdetur(adetur);
        setGeoJsonTer(territorio);
      })
      .catch(console.error);
  }, []);

  // Fetch municípios e destaques do seu backend/Supabase/etc
  useEffect(() => {
    async function fetchData() {
      // Simulação: substitua pelo seu fetch real
      const fetchedMunicipalities: MunicipalityRefined[] = await fetch(
        "/api/cities"
      ).then((r) => r.json());
      console.log(fetchedMunicipalities);
      const fetchedHighlights: Highlight[] = await fetch(
        "/api/highlights"
      ).then((r) => r.json());

      setMunicipalities(fetchedMunicipalities);
      setHighlights(fetchedHighlights);
    }
    fetchData();
  }, []);

  if (!geoJsonAlta || !geoJsonAdetur || !geoJsonTer)
    return (
      <div className="flex justify-center">
        <Loader2 className="animate text-primary" />
      </div>
    );

  return (
    <div className="h-[100vh] w-[100%]">
      <DynamicMap
        mapCenter={CENTER}
        municipalities={municipalities}
        selectedMunicipality={selectedMunicipality}
        geoJSONAlta={geoJsonAlta}
        geoJSONAdetur={geoJsonAdetur}
        geoJSONTerritorio={geoJsonTer}
        highlights={highlights}
      />
    </div>
  );
}
