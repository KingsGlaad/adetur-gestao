import { z } from "zod";

export interface Highlight {
  id: string;
  title: string;
  image?: string | null;
  description: string | null;
  municipalityId: string;
  municipality?: {
    name: string;
  } | null;
  latitude: number | null;
  longitude: number | null;
  createdAt: Date;
  galleryImages?: HighlightWithImages[] | null;
}

export interface HighlightWithImages{
  id: string;
  url: string;
  highlightId: string;
  createdAt: Date;
  updatedAt?: Date;
}

// Estados de loading
export interface LoadingStates {
  fetching: boolean;
  creating: boolean;
  updating: string | null;
  deleting: string | null;
  uploading: { [key: string]: number }; // highlightId: progress
}

// Estados dos dialogs
export interface DialogStates {
  edit: { open: boolean; highlight: Highlight | null };
  create: { open: boolean };
  delete: { open: boolean; highlightId: string | null }; // <- aqui estava "id"
}

// Schema de validação
export const highlightSchema = z.object({
  title: z
    .string()
    .min(1, "Título é obrigatório")
    .max(100, "Título muito longo"),
  description: z.string().max(500, "Descrição muito longa").optional(),
  latitude: z
    .number()
    .min(-90, "Latitude inválida")
    .max(90, "Latitude inválida"),
  longitude: z
    .number()
    .min(-180, "Longitude inválida")
    .max(180, "Longitude inválida"),
  municipalitie: z.string(),
});

// Constantes
export const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const MAX_FILES_PER_HIGHLIGHT = 10;
export const SUPABASE_URL =
  "https://uykxygmttywknvgtyxrv.supabase.co/storage/v1/object/public/adetur-bucket";

// Validação de arquivo
export const validateFile = (file: File): string | null => {
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return "Tipo de arquivo não permitido. Use JPG, PNG ou WebP.";
  }
  if (file.size > MAX_FILE_SIZE) {
    return "Arquivo muito grande. Máximo 5MB.";
  }
  return null;
};
