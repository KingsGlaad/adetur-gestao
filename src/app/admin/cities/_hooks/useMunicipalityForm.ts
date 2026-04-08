/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { MunicipalityRefined } from "@/types/municipality";
import { MunicipalityImage } from "@/generated/prisma";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { SubmitHandler } from "react-hook-form";
import TipTapLink from "@tiptap/extension-link";

// Schema para os dados de texto do formulário
const municipalitySchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  description: z.string().min(1, "A descrição é obrigatória"),
  about: z.string().min(1, "O campo 'Sobre' é obrigatório"),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  id: z.string().optional(),
  active: z.boolean(),
  prefeito: z.string().min(1, "O nome do prefeito é obrigatório"),
  gentilic: z.string().min(1, "O gentílico é obrigatório"),
});

type MunicipalityFormValues = z.infer<typeof municipalitySchema>;

export function useMunicipalityForm(municipio: MunicipalityRefined | null) {
  const router = useRouter();

  // Estados para as imagens
  const [coatOfArmsFile, setCoatOfArmsFile] = useState<File | null>(null);
  const [coatOfArmsPreview, setCoatOfArmsPreview] = useState<string | null>(
    municipio?.coatOfArms || null,
  );
  const [galleryImages, setGalleryImages] = useState<MunicipalityImage[]>([]);
  const [isGalleryLoading, setIsGalleryLoading] = useState(true);

  // Instância do React Hook Form
  const form = useForm<MunicipalityFormValues>({
    resolver: zodResolver(municipalitySchema),
    defaultValues: {
      name: municipio?.name ?? "",
      description: municipio?.description ?? "",
      about: municipio?.about ?? "",
      latitude: municipio?.latitude ?? undefined,
      longitude: municipio?.longitude ?? undefined,
      active: municipio?.active ?? false,
      prefeito: municipio?.prefeito ?? "",
      gentilic: municipio?.gentilic ?? "",
    },
  });

  // Instância do Editor Tiptap
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3, 4] } }),
      TipTapLink.configure({ openOnClick: false, autolink: true }),
    ],
    content: municipio?.about ?? "",
    immediatelyRender: false,
    onUpdate: ({ editor }) =>
      form.setValue("about", editor.getHTML(), { shouldValidate: true }),
  });

  // Lógica para a Galeria de Imagens
  const fetchGallery = async () => {
    if (!municipio) {
      setIsGalleryLoading(false);
      return;
    }
    setIsGalleryLoading(true);
    try {
      const res = await axios.get(
        `/api/cities/${municipio.slug}/${municipio.id}/gallery`,
      );
      setGalleryImages(res.data);
    } catch {
      toast.error("Erro ao carregar a galeria de imagens.");
    } finally {
      setIsGalleryLoading(false);
    }
  };

  useEffect(() => {
    if (municipio?.id) {
      fetchGallery();
    }
  }, [municipio?.id]);

  const handleAddGalleryImages = async (files: FileList) => {
    if (!municipio) return;

    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("files", file));
    try {
      await axios.post(
        `/api/cities/${municipio.slug}/${municipio.id}/gallery`,
        formData,
      );
      toast.success("Imagens adicionadas à galeria!");
      await fetchGallery();
    } catch {
      toast.error("Erro ao adicionar imagens.");
    }
  };

  const handleRemoveGalleryImage = async (imageId: string) => {
    if (!municipio) return;

    try {
      await axios.delete(
        `/api/cities/${municipio.slug}/${municipio.id}/gallery`,
        {
          data: { imageId },
        },
      );
      toast.success("Imagem removida da galeria!");
      setGalleryImages((prev) => prev.filter((img) => img.id !== imageId));
    } catch {
      toast.error("Erro ao remover imagem.");
    }
  };

  // Lógica de Submissão Principal
  const onSubmit: SubmitHandler<MunicipalityFormValues> = async (data) => {
    const isCreating = !municipio;

    try {
      let response;
      if (isCreating) {
        // 1. Cria o município com os dados de texto
        response = await axios.post(`/api/cities`, data);
      } else {
        // 1. Atualiza os dados de texto
        response = await axios.put(`/api/cities/${municipio.slug}`, data);
      }

      const savedMunicipality = response.data;

      // 2. Se houver um novo ficheiro de brasão, faz o upload
      if (coatOfArmsFile) {
        const formData = new FormData();
        formData.append("file", coatOfArmsFile);
        formData.append("name", data.name);
        // A rota de upload precisa ser ajustada para receber o ID
        await axios.put(
          `/api/cities/${savedMunicipality.slug}/${savedMunicipality.id}/coatofarms`,
          formData,
        );
      }

      toast.success(
        `Município ${isCreating ? "criado" : "atualizado"} com sucesso!`,
      );
      router.push("/admin/cities");
      router.refresh();
    } catch (error) {
      console.error("Erro ao atualizar o município:", error);
      toast.error("Erro ao atualizar o município.");
    }
  };

  return {
    form,
    editor,
    isSubmitting: form.formState.isSubmitting,
    coatOfArms: {
      file: coatOfArmsFile,
      preview: coatOfArmsPreview,
      setFile: setCoatOfArmsFile,
      setPreview: setCoatOfArmsPreview,
    },
    gallery: {
      images: galleryImages,
      isLoading: isGalleryLoading,
      addImages: handleAddGalleryImages,
      removeImage: handleRemoveGalleryImage,
    },
    onSubmit,
  };
}
