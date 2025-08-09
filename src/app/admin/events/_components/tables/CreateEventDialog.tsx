"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Loader2, Plus } from "lucide-react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import Image from "next/image";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

import { Municipality } from "@/types/municipality";

const eventSchema = z.object({
  title: z.string().min(1, "O título é obrigatório."),
  description: z.string().min(1, "A descrição é obrigatória."),
  date: z.date({ message: "A data é obrigatória." }),
  municipalitie: z.string().min(1, "Selecione um município."),
});

type EventFormValues = z.infer<typeof eventSchema>;

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
      date: undefined,
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
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("municipalitie", data.municipalitie);
    formData.append("date", data.date.toISOString());
    if (imageFile) formData.append("image", imageFile);

    try {
      await axios.post("/api/events", formData);
      toast.success("Evento criado com sucesso!");
      setOpen(false);
      reset();
      setImageFile(null);
      setImagePreview(null);
    } catch {
      toast.error("Erro ao criar evento.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
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
            <Label>Imagem de Capa</Label>
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
              <Input {...register("title")} />
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
                    <SelectTrigger className="w-full">
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
            <Textarea {...register("description")} />
            {errors.description && (
              <p className="text-sm text-red-500 mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <Label>Data do Evento</Label>
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal mt-1",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(field.value, "PPP", { locale: ptBR })
                      ) : (
                        <span>Escolha uma data</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      locale={ptBR}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
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

        <DialogFooter />
      </DialogContent>
    </Dialog>
  );
}
