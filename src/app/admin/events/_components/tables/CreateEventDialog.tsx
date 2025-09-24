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
import { useForm, Controller, SubmitHandler } from "react-hook-form";
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

const eventSchema = z.object({
  title: z.string().min(1, "O título é obrigatório."),
  description: z.string().min(1, "A descrição é obrigatória."),
  date: z
    .string()
    .min(1, "A data é obrigatória.")
    .refine((val) => /^\d{2}\/\d{2}\/\d{4}$/.test(val), {
      message: "Data inválida. Use o formato DD/MM/AAAA.",
    }),
  municipalitie: z.string().min(1, "Selecione um município."),
});

// Usamos z.input para obter os tipos antes da transformação do Zod
type EventFormValues = z.input<typeof eventSchema>;

export function CreateEventDialog() {
  const [open, setOpen] = useState(false);
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      description: "",
      date: "",
      municipalitie: "",
    },
  });

  useEffect(() => {
    axios
      .get<Municipality[]>("/api/cities")
      .then((res) => setMunicipalities(res.data))
      .catch(() => toast.error("Erro ao carregar municípios."));
  }, []);

  const onSubmit: SubmitHandler<EventFormValues> = async (data) => {
    setIsSubmitting(true);
    try {
      // Validamos os dados com o Zod
      const validatedData = eventSchema.parse(data);

      // Transformamos a data para Date aqui
      const [day, month, year] = validatedData.date.split("/").map(Number);
      const dateObj = new Date(year, month - 1, day);

      const formData = new FormData();
      formData.append("title", validatedData.title);
      formData.append("description", validatedData.description);
      formData.append("municipalitie", validatedData.municipalitie);
      formData.append("date", dateObj.toISOString());
      if (imageFile) {
        formData.append("image", imageFile);
      }

      await axios.post("/api/events", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Evento criado com sucesso!");
      setOpen(false);
      reset();
      setImageFile(null);
      setImagePreview(null);
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Erros de validação já são mostrados pelo react-hook-form
        console.error("Erros de validação:", error.issues);
      } else {
        toast.error("Erro ao criar evento.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Função para lidar com a mudança de imagem
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full md:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Evento
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Novo Evento</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Imagem de Capa */}
          <div>
            <Label className="gap-0.5">Imagem de Capa</Label>
            <div className="mt-2 flex items-center gap-4 p-4 border rounded-lg">
              <Image
                src={imagePreview || "/images/no-image.jpeg"}
                alt="Preview"
                width={100}
                height={100}
                className="object-cover rounded-md bg-slate-100"
              />
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>

          {/* Campos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Nome do Evento</Label>
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
                name="municipalitie"
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
              {errors.municipalitie && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.municipalitie.message}
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
              "Salvar Evento"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
