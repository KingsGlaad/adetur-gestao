/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Loader2, Trash2 } from "lucide-react";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState, useRef } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useEventForm, EventFormValues } from "./useEventForm";
import { toast } from "sonner";
import { Event, Municipality } from "@/generated/prisma";

interface EventFormProps {
  event: Event | null;
  onSubmit: (data: EventFormValues, imageFile: File | null) => Promise<void>;
  isSubmitting: boolean;
}

export function EventForm({ event, onSubmit, isSubmitting }: EventFormProps) {
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]);
  const { form, imageFile } = useEventForm(event, onSubmit);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = form;

  useEffect(() => {
    // Reseta o formulário quando o evento selecionado muda
    if (event) {
      reset({
        title: event.title || "",
        description: event.description || "",
        date: event.date ? new Date(event.date) : undefined,
        municipalityId: event.municipalityId || "",
      });
      imageFile.setPreview(event.image || null);
      imageFile.setFile(null);
    }
  }, [event?.id, reset, imageFile.setPreview, imageFile.setFile]);

  useEffect(() => {
    const fetchMunicipalities = async () => {
      try {
        const response = await fetch("/api/cities");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setMunicipalities(data);
      } catch {
        toast.error("Erro ao carregar municípios.");
      }
    };
    fetchMunicipalities();
  }, []);

  const handleFormSubmit = async (data: EventFormValues) => {
    await onSubmit(data, imageFile.file);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* SEÇÃO DA IMAGEM DE CAPA */}
      <div>
        <Label>Imagem de Capa</Label>
        <div className="mt-2 flex items-center gap-x-4">
          <Image
            src={imageFile.preview || "/images/no-image.jpeg"}
            alt="Pré-visualização da imagem do evento"
            width={128}
            height={128}
            className="h-32 w-32 object-cover rounded-md bg-slate-100"
          />
          <div className="flex flex-col gap-y-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
            >
              Alterar Imagem
            </Button>
            {imageFile.preview && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-red-500 hover:text-red-600"
                onClick={() => {
                  imageFile.setFile(null);
                  imageFile.setPreview(null);
                  if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                  }
                }}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Remover
              </Button>
            )}
            <Input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
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
      </div>

      {/* DADOS DO EVENTO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="title">Nome do Evento</Label>
          <Input {...register("title")} />
          {errors.title && (
            <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="municipalityId">Município</Label>
          <Controller
            control={control}
            name="municipalityId"
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
          {errors.municipalityId && (
            <p className="text-sm text-red-500 mt-1">
              {errors.municipalityId.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <Label htmlFor="description">Descrição</Label>
        <Textarea {...register("description")} />
        {errors.description && (
          <p className="text-sm text-red-500 mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Seletor de Data com Shadcn Calendar */}
      <div>
        <Label htmlFor="date">Data do Evento</Label>
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
                    !field.value && "text-muted-foreground",
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
          "Salvar Evento"
        )}
      </Button>
    </form>
  );
}
