import { toast } from "sonner";

const MAX_FILE_SIZE_MB = 5;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Valida um único ficheiro de imagem com base no tipo e tamanho.
 * @param file O ficheiro a ser validado.
 * @returns Um objeto indicando se o ficheiro é válido e uma mensagem de erro, se aplicável.
 */
export function validateImageFile(file: File): ValidationResult {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return {
      isValid: false,
      error: `Tipo de ficheiro não suportado. Apenas JPG, PNG e WebP são permitidos.`,
    };
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return {
      isValid: false,
      error: `O ficheiro é muito grande. O tamanho máximo é de ${MAX_FILE_SIZE_MB}MB.`,
    };
  }

  return { isValid: true };
}

/**
 * Uma função auxiliar que recebe uma FileList, valida cada ficheiro,
 * exibe notificações de erro para os inválidos e retorna um array apenas com os ficheiros válidos.
 * @param files A FileList de um elemento de input.
 * @returns Um array de objetos File válidos.
 */
export function filterAndValidateImages(files: FileList): File[] {
  const validFiles: File[] = [];

  Array.from(files).forEach((file) => {
    const validation = validateImageFile(file);
    if (validation.isValid) {
      validFiles.push(file);
    } else {
      toast.error(`Erro em "${file.name}": ${validation.error}`);
    }
  });

  return validFiles;
}
