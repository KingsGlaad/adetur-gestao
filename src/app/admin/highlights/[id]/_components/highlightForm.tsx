"use client";

import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Loader2 } from "lucide-react";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import axios from "axios";
import { Municipality } from "@/types/municipality";
import { toast } from "sonner";
import { useEventForm } from "@/app/admin/events/[id]/_hooks/useEvents";
import { EventImageGallery } from "@/app/admin/events/[id]/_components/events/EventImageGallery";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Highlight } from "@/types/highligth";

interface HighlightFormProps {
  highlight: Highlight;
}

export function HighlightForm({ highlight }: HighlightFormProps) {
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]);
  const { form, isSubmitting, imageFile, gallery, onSubmit } =
    useEventForm(highlight);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  useEffect(() => {
    const fetchMunicipalities = async () => {
      try {
        const res = await axios.get("/api/cities");
        setMunicipalities(res.data); // Espera [{ id, name }]
      } catch {
        toast.error("Erro ao carregar municípios.");
      }
    };
    fetchMunicipalities();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* SEÇÃO DA IMAGEM DE CAPA */}
      <div>
        <Label>Imagem de Capa (Brasão)</Label>
        <div className="mt-2 flex items-center gap-4 p-4 border rounded-lg">
          <Image
            src={imageFile.preview || "/images/no-image.jpeg"}
            alt="Pré-visualização do Brasão"
            width={100}
            height={100}
            className="object-contain rounded-md bg-slate-100"
          />
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                const file = e.target.files[0];
                imageFile.setFile(file);
                imageFile.setPreview(URL.createObjectURL(file));
              }
            }}
          />
        </div>
      </div>

      {/* SEÇÃO DA GALERIA */}
      <EventImageGallery
        images={gallery.images}
        onAddImages={gallery.addImages}
        onRemoveImage={gallery.removeImage}
        isUploading={gallery.isLoading}
      />

      <hr />

      {/* DADOS DO EVENTO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Nome</Label>
          <Input {...register("title")} />
          {errors.title && (
            <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
          )}
        </div>
        <div>
          <Label>Municipio</Label>
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
        </div>
      </div>
      <div>
        <Label>Descrição Curta (para cartões e listas)</Label>
        <Textarea {...register("description")} />
        {errors.description && (
          <p className="text-sm text-red-500 mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Seletor de Data com Shadcn Calendar */}
      <div>
        <Label>Data do Evento</Label>
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
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
                  initialFocus
                  locale={ptBR}
                />
              </PopoverContent>
            </Popover>
          )}
        />
        {errors.date && (
          <p className="text-sm text-red-500 mt-1">{errors.date.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          "Salvar Todas as Alterações"
        )}
      </Button>
    </form>
  );
}
