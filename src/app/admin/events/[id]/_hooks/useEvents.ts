import { useState, useEffect } from "react";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler } from "react-hook-form";
import { Event } from "@/types/events";
import { EventImage } from "@/generated";

export const eventSchema = z.object({
  title: z.string().min(1, "O título é obrigatório."),
  description: z.string().min(1, "A descrição é obrigatória."),
  date: z.date({
    message: "A data do evento é obrigatória.",
  }),
  municipalitie: z.string({}),
});

export type EventFormValues = z.infer<typeof eventSchema>;

export function useEventForm(event: Event) {
  const router = useRouter();

  // Estados para as imagens
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(() => {
    return event?.image || null;
  });
  const [galleryImages, setGalleryImages] = useState<EventImage[]>([]);
  const [isGalleryLoading, setIsGalleryLoading] = useState(true);

  // Instância do React Hook Form
  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: event?.title || "",
      description: event?.description || "",
      date: event?.date || new Date(),
      municipalitie: event?.municipalityId || "",
    },
  });

  // Lógica para a Galeria de Imagens
  const fetchGallery = async () => {
    setIsGalleryLoading(true);
    try {
      const res = await axios.get(`/api/events/${event.id}/gallery`);
      setGalleryImages(res.data);
    } catch {
      toast.error("Erro ao carregar a galeria de imagens.");
    } finally {
      setIsGalleryLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, [event?.id]);

  const handleAddGalleryImages = async (files: FileList) => {
    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("files", file));
    try {
      await axios.post(`/api/events/${event.id}/gallery`, formData);
      toast.success("Imagens adicionadas à galeria!");
      await fetchGallery();
    } catch {
      toast.error("Erro ao adicionar imagens.");
    }
  };

  const handleRemoveGalleryImage = async (imageId: string) => {
    try {
      await axios.delete(`/api/events/${event.id}/gallery`, {
        data: { imageId },
      });
      toast.success("Imagem removida da galeria!");
      setGalleryImages((prev) => prev.filter((img) => img.id !== imageId));
    } catch {
      toast.error("Erro ao remover imagem.");
    }
  };

  // Lógica de Submissão Principal
  const onSubmit: SubmitHandler<EventFormValues> = async (data) => {
    try {
      // 1. Atualiza os dados de texto
      await axios.put(`/api/events/${event.id}`, data);

      // 2. Se houver um novo ficheiro de brasão, faz o upload
      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("name", data.title);
        await axios.post(`/api/events/${event.id}/image`, formData);
      }

      toast.success("Evento atualizado com sucesso!");
      router.refresh();
    } catch (error) {
      toast.error("Erro ao atualizar o evento.");
    }
  };

  return {
    form,
    isSubmitting: form.formState.isSubmitting,
    imageFile: {
      file: imageFile,
      preview: imagePreview,
      setFile: setImageFile,
      setPreview: setImagePreview,
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
