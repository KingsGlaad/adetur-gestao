import { supabase } from "@/lib/supabase";

export async function uploadHighlightImages(
  files: File[],
  highlightId: string
): Promise<string[]> {
  const uploadedUrls: string[] = [];

  for (const file of files) {
    const filename = `${highlightId}/${crypto.randomUUID()}-${file.name}`;
    const { error } = await supabase.storage
      .from("highlights")
      .upload(filename, file);

    if (error) {
      console.error("Erro ao enviar imagem:", error.message);
      continue;
    }

    const { data } = supabase.storage.from("highlights").getPublicUrl(filename);
    if (data?.publicUrl) {
      uploadedUrls.push(data.publicUrl);
    }
  }

  return uploadedUrls;
}
