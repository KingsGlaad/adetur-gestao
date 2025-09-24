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
import { Loader2, Plus } from "lucide-react";
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
  description: z.string().min(1, "A descrição é obrigatória."),
  municipalityId: z.string().min(1, "Selecione um município."),
});

type HighlightFormValues = z.infer<typeof highlightSchema>;

interface HighlightFormDialogProps {
  initialData?: Highlight | null;
  onUpdate: () => void;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function HighlightFormDialog({
  initialData,
  onUpdate,
  isOpen: controlledIsOpen,
  onOpenChange: controlledOnOpenChange,
}: HighlightFormDialogProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>(
    initialData?.galleryImages?.map((img) => img.url) || []
  );
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
    axios
      .get<Municipality[]>("/api/cities")
      .then((res) => setMunicipalities(res.data))
      .catch(() => toast.error("Erro ao carregar municípios."));
  }, []);

  useEffect(() => {
    if (initialData) {
      reset({
        title: initialData.title,
        description: initialData.description,
        municipalityId: initialData.municipalityId,
      });
      setImagePreviews(initialData.galleryImages?.map((img) => img.url) || []);
    } else {
      reset({ title: "", description: "", municipalityId: "" });
      setImagePreviews([]);
    }
    setImageFiles([]);
  }, [initialData, reset, isOpen]);

  const onSubmit = async (data: HighlightFormValues) => {
    if (!initialData && imageFiles.length === 0) {
      toast.error(
        "A imagem de capa é obrigatória para criar um novo destaque."
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("municipalityId", data.municipalityId);
      imageFiles.forEach((file) => {
        formData.append("images", file);
      });

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
      const fileArray = Array.from(files);
      setImageFiles(fileArray);
      const previewUrls = fileArray.map((file) => URL.createObjectURL(file));
      setImagePreviews(previewUrls);
    }
  };

  if (!isMounted) return null;

  const content = (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <Label>Galeria de Imagens</Label>
          <div className="mt-2 flex flex-col gap-4 p-4 border rounded-lg">
            <Input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
            <div className="flex flex-wrap gap-4">
              {imagePreviews.length > 0
                ? imagePreviews.map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt={`Preview ${index + 1}`}
                      width={100}
                      height={100}
                      className="object-cover rounded-md bg-slate-100"
                    />
                  ))
                : null}
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
