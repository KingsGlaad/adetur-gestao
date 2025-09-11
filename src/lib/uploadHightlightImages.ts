/* eslint-disable @typescript-eslint/no-explicit-any */
import { writeFile, unlink, mkdir } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import slugify from "slugify";

// Helper para garantir que o diretório de upload exista
const ensureUploadDir = async (dirPath: string) => {
  try {
    await mkdir(dirPath, { recursive: true });
  } catch (error: any) {
    if (error.code !== "EEXIST") {
      console.error("Erro ao criar diretório:", error);
      throw error;
    }
  }
};

/**
 * Faz o upload de uma imagem de destaque para o sistema de arquivos local.
 * @param file O arquivo de imagem para fazer upload.
 * @param id O ID do destaque.
 * @param title O título do destaque.
 * @returns A URL pública da imagem enviada ou null em caso de erro.
 */
export async function uploadHightlightImages(
  file: File,
  id: string,
  title: string
): Promise<string | null> {
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Limpa o título para criar um nome de arquivo amigável
    const sanitizedTitle = slugify(title, { lower: true, strict: true });
    const fileExtension = path.extname(file.name);
    const uniqueId = uuidv4().slice(0, 8); // ID único curto
    const filename = `${sanitizedTitle}-${uniqueId}${fileExtension}`;

    // Define o diretório de upload
    const uploadDir = path.join(
      process.cwd(),
      "public",
      "uploads",
      "highlights"
    );
    await ensureUploadDir(uploadDir);

    const filePath = path.join(uploadDir, filename);

    // Escreve o arquivo no sistema de arquivos
    await writeFile(filePath, buffer);

    // Retorna a URL pública
    const publicUrl = `/uploads/highlights/${filename}`;
    return publicUrl;
  } catch (error) {
    console.error("Erro ao fazer upload da imagem:", error);
    return null;
  }
}

/**
 * Exclui uma imagem de destaque do sistema de arquivos local.
 * @param imageUrl A URL pública da imagem a ser excluída.
 */
export async function deleteHighlightImage(imageUrl: string): Promise<void> {
  if (!imageUrl) {
    return;
  }

  try {
    // Converte a URL pública em um caminho de arquivo local
    const filePath = path.join(process.cwd(), "public", imageUrl);

    // Exclui o arquivo
    await unlink(filePath);
    console.log(`Imagem excluída com sucesso: ${filePath}`);
  } catch (error: any) {
    // Se o arquivo não existe, não há problema. Pode já ter sido excluído.
    if (error.code === "ENOENT") {
      console.warn(`Imagem não encontrada para exclusão: ${imageUrl}`);
    } else {
      console.error("Erro ao excluir imagem:", error);
    }
  }
}
