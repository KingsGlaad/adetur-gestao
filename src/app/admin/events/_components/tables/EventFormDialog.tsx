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
import { format } from "date-fns";
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
import { EventWithRelations } from "@/types/events";

const eventSchema = z.object({
  title: z.string().min(1, "O título é obrigatório."),
  description: z.string().min(1, "A descrição é obrigatória."),
  date: z
    .string()
    .min(1, "A data é obrigatória.")
    .refine((val) => /^\d{2}\/\d{2}\/\d{4}$/.test(val), {
      message: "Data inválida. Use o formato DD/MM/AAAA.",
    }),
  municipalityId: z.string().min(1, "Selecione um município."),
});

type EventFormValues = z.infer<typeof eventSchema>;

interface EventFormDialogProps {
  initialData?: EventWithRelations | null;
  onUpdate: () => void;
  municipalities: Municipality[];
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function EventFormDialog({
  initialData,
  onUpdate,
  municipalities,
  isOpen: controlledIsOpen,
  onOpenChange: controlledOnOpenChange,
}: EventFormDialogProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  // Novas imagens a serem enviadas
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  // Imagens que já existem e são mantidas
  const [existingImages, setExistingImages] = useState<
    { id: string; url: string }[]
  >([]);
  const [newImagePreviews, setNewImagePreviews] = useState<string[]>([]);
  const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isOpen = controlledIsOpen ?? internalIsOpen;
  const onOpenChange = controlledOnOpenChange ?? setInternalIsOpen;

  const title = initialData ? "Editar Evento" : "Novo Evento";
  const action = initialData ? "Salvar alterações" : "Criar Evento";
  const toastMessage = initialData ? "Evento atualizado." : "Evento criado.";

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      municipalityId: initialData?.municipalityId || "",
      date: initialData?.date
        ? format(new Date(initialData.date), "dd/MM/yyyy")
        : "",
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (initialData) {
      reset({
        title: initialData.title ?? "",
        description: initialData.description ?? "",
        municipalityId: initialData.municipalityId ?? "",
        date: initialData.date
          ? format(new Date(initialData.date), "dd/MM/yyyy")
          : "",
      });
      setExistingImages(
        (initialData.galleryImages || []).map((img, idx) => ({
          id: img.id ?? String(idx),
          url: img.url,
        }))
      );
    } else {
      reset({
        title: "",
        description: "",
        date: "",
        municipalityId: "",
      });
      setExistingImages([]);
    }
    setImageFiles([]);
    setImagesToDelete([]);
    setNewImagePreviews([]);
  }, [initialData, reset, isOpen]);

  // Efeito para limpar as URLs de objeto e evitar vazamento de memória
  useEffect(() => {
    // Função de limpeza que será chamada quando o dialog for fechado (unmount)
    return () => {
      newImagePreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [newImagePreviews]);

  const onSubmit = async (data: EventFormValues) => {
    const totalImages = existingImages.length + imageFiles.length;
    if (totalImages === 0) {
      toast.error(
        "Pelo menos uma imagem é obrigatória para criar um destaque."
      );
      return;
    }
    if (totalImages > 5) {
      toast.error("Um evento pode ter no máximo 5 imagens.");
      return;
    }

    setIsSubmitting(true);
    try {
      const validatedData = eventSchema.parse(data);
      const [day, month, year] = validatedData.date.split("/").map(Number);
      const dateObj = new Date(year, month - 1, day);

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description || "");
      formData.append("date", dateObj.toISOString());
      formData.append("municipalityId", data.municipalityId);
      imageFiles.forEach((file) => {
        formData.append("images", file);
      });
      if (imagesToDelete.length > 0) {
        formData.append("imagesToDelete", JSON.stringify(imagesToDelete));
      }

      if (initialData) {
        await axios.put(`/api/events/${initialData.id}`, formData);
      } else {
        await axios.post("/api/events", formData);
      }

      toast.success(toastMessage);
      onUpdate();
      onOpenChange(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Erros de validação:", error.issues);
      } else {
        toast.error("Ocorreu um erro ao salvar o evento.");
      }
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
      const newPreviews = fileArray.map((file) => URL.createObjectURL(file));

      setImageFiles((prevFiles) => [...prevFiles, ...fileArray]);
      setNewImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
    }
  };

  const handleRemoveNewImage = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setNewImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveExistingImage = (image: { id: string; url: string }) => {
    setExistingImages((prev) => prev.filter((img) => img.id !== image.id));
    setImagesToDelete((prev) => [...prev, image.id]);
  };

  // Função para formatar a data enquanto o usuário digita
  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: { onChange: (value: string) => void }
  ) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove não-dígitos
    let formattedValue = value;

    if (value.length > 2) {
      formattedValue = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }
    if (value.length > 4) {
      formattedValue = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(
        4,
        8
      )}`;
    }

    field.onChange(formattedValue);
  };

  const allImagePreviews = {
    existing: existingImages,
    new: newImagePreviews,
  };

  if (!isMounted) return null;

  const content = (
    <DialogContent className="sm:max-w-2xl">
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
              {allImagePreviews.existing.map((image) => (
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
              {allImagePreviews.new.map((src, index) => (
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

        <div>
          <Label>Data do Evento (DD/MM/AAAA)</Label>
          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <Input
                {...field}
                className="mt-1"
                onChange={(e) => handleDateChange(e, field)}
                placeholder="Ex: 25/12/2024"
              />
            )}
          />
          {errors.date && (
            <p className="text-sm text-red-500 mt-1">{errors.date.message}</p>
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
          Adicionar Evento
        </Button>
      </DialogTrigger>
      {content}
    </Dialog>
  );
}
