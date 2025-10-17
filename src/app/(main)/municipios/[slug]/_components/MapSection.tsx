/* eslint-disable @typescript-eslint/no-explicit-any */
import { MunicipalityRefined } from "@/types/municipality";
import { Highlight } from "@/types/highligth";
import MunicipioMap from "./MunicipioMap";

interface MapSectionProps {
  // Usando os tipos diretamente do Prisma, pois a página já os busca
  municipality: MunicipalityRefined;
  highlights: Highlight[];
  geoJsonData: any;
  focusedHighlightId: string | null;
  onHighlightSelect: (id: string | null) => void;
}

export function MapSection({
  municipality,
  highlights,
  geoJsonData,
}: MapSectionProps) {
  return (
    <MunicipioMap
      municipality={municipality}
      highlights={highlights}
      geoJsonData={geoJsonData}
    />
  );
}