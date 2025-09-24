"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, Plus, X } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Municipality } from "@/types/municipality";
import { Highlight } from "@/types/highligth";

const highlightSchema = z.object({
  title: z.string().min(1, "O título é obrigatório."),
  description: z.string().optional(),
  municipalityId: z.string().min(1, "Selecione um município."),
});

type HighlightFormValues = z.infer<typeof highlightSchema>;

interface HighlightFormDialogProps {
  initialData?: Highlight | null;
  onUpdate: () => void;
  municipalities: Municipality[];
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function HighlightFormDialog({
  initialData,
  onUpdate,
  municipalities,
  isOpen: controlledIsOpen,
  onOpenChange: controlledOnOpenChange,
}: HighlightFormDialogProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  // Novas imagens a serem enviadas
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  // Imagens que já existem e são mantidas
  const [existingImages, setExistingImages] = useState<
    { id: string; url: string }[]
  >([]);
  const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isOpen = controlledIsOpen ?? internalIsOpen;
  const onOpenChange = controlledOnOpenChange ?? setInternalIsOpen;

  const title = initialData ? "Editar Destaque" : "Novo Destaque";
  const action = initialData ? "Salvar alterações" : "Criar Destaque";
  const toastMessage = initialData
    ? "Destaque atualizado."
    : "Destaque criado.";

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<HighlightFormValues>({
    resolver: zodResolver(highlightSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      municipalityId: initialData?.municipalityId || "",
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (initialData) {
      reset({
        title: initialData.title,
        description: initialData.description ?? "",
        municipalityId: initialData.municipalityId,
      });
      setExistingImages(
        (initialData.galleryImages || []).map((img, idx) => ({
          id: img.id ?? String(idx),
          url: img.url,
        }))
      );
    } else {
      reset({ title: "", description: "", municipalityId: "" });
      setExistingImages([]);
    }
    setImageFiles([]);
    setImagesToDelete([]);
  }, [initialData, reset, isOpen]);

  // Efeito para limpar as URLs de objeto e evitar vazamento de memória
  useEffect(() => {
    const newImageUrls = imageFiles.map((file) => URL.createObjectURL(file));

    // Função de limpeza que será chamada quando o componente for desmontado ou as dependências mudarem
    return () => {
      newImageUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imageFiles]);

  const onSubmit = async (data: HighlightFormValues) => {
    const totalImages = existingImages.length + imageFiles.length;
    if (totalImages === 0) {
      toast.error(
        "Pelo menos uma imagem é obrigatória para criar um destaque."
      );
      return;
    }
    if (totalImages > 5) {
      toast.error("Um destaque pode ter no máximo 5 imagens.");
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description || "");
      formData.append("municipalityId", data.municipalityId);
      imageFiles.forEach((file) => {
        formData.append("images", file);
      });
      if (imagesToDelete.length > 0) {
        formData.append("imagesToDelete", JSON.stringify(imagesToDelete));
      }

      if (initialData) {
        await axios.put(`/api/highlights/${initialData.id}`, formData);
      } else {
        await axios.post("/api/highlights", formData);
      }

      toast.success(toastMessage);
      onUpdate();
      onOpenChange(false);
    } catch (error) {
      toast.error("Ocorreu um erro ao salvar o destaque.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const totalImages =
        existingImages.length + imageFiles.length + files.length;
      if (totalImages > 5) {
        toast.error("Você pode selecionar no máximo 5 imagens.");
        e.target.value = ""; // Limpa a seleção
        return;
      }
      const fileArray = Array.from(files);
      setImageFiles((prev) => [...prev, ...fileArray]);
    }
  };

  const handleRemoveNewImage = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveExistingImage = (image: { id: string; url: string }) => {
    setExistingImages((prev) => prev.filter((img) => img.id !== image.id));
    setImagesToDelete((prev) => [...prev, image.id]);
  };

  const imagePreviews = {
    existing: existingImages,
    new: imageFiles.map((file) => URL.createObjectURL(file)),
  };

  if (!isMounted) return null;

  const content = (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <Label>Galeria de Imagens (Máx. 5)</Label>
          <div className="mt-2 flex flex-col gap-4 p-4 border rounded-lg">
            <Input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              disabled={existingImages.length + imageFiles.length >= 5}
            />
            <div className="flex flex-wrap gap-4">
              {imagePreviews.existing.map((image) => (
                <div key={image.id} className="relative">
                  <Image
                    src={image.url}
                    alt="Imagem existente"
                    width={100}
                    height={100}
                    className="object-cover rounded-md bg-slate-100"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                    onClick={() => handleRemoveExistingImage(image)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              {imagePreviews.new.map((src, index) => (
                <div key={index} className="relative">
                  <Image
                    src={src}
                    alt={`Preview ${index + 1}`}
                    width={100}
                    height={100}
                    className="object-cover rounded-md bg-slate-100"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                    onClick={() => handleRemoveNewImage(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label>Título</Label>
            <Input {...register("title")} className="mt-1" />
            {errors.title && (
              <p className="text-sm text-red-500 mt-1">
                {errors.title.message}
              </p>
            )}
          </div>
          <div>
            <Label>Município</Label>
            <Controller
              control={control}
              name="municipalityId"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder="Selecione um município" />
                  </SelectTrigger>
                  <SelectContent>
                    {municipalities.map((m) => (
                      <SelectItem key={m.id} value={m.id}>
                        {m.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.municipalityId && (
              <p className="text-sm text-red-500 mt-1">
                {errors.municipalityId.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label>Descrição</Label>
          <Textarea {...register("description")} className="mt-1" />
          {errors.description && (
            <p className="text-sm text-red-500 mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Salvando...
            </>
          ) : (
            action
          )}
        </Button>
      </form>
    </DialogContent>
  );

  if (initialData) {
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        {content}
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="w-full md:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Destaque
        </Button>
      </DialogTrigger>
      {content}
    </Dialog>
  );
}
