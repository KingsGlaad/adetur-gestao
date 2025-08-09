export type Municipality = {
  id: string;
  name: string;
  description?: string | null;
  coatOfArms?: string | null;
  about?: string | null;
  slug?: string | null;
  createdAt: Date;
  cordenates?: { latitude: string; longitude: string } | null;
  highlights?: { title: string; id: string }[] | null;
};

export type MunicipalityRefined = {
  id: string;
  name: string;
  description?: string | null;
  coatOfArms?: string | null;
  about?: string | null;
  slug?: string | null;
  createdAt: Date;
  latitude?: number | null;
  longitude?: number | null;
  ibgeCode?: string | null;
  highlights?: { title: string; id: string }[] | null;
};
