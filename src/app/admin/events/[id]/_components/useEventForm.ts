import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Event } from "@/generated/prisma";
import { useState } from "react";

// Esquema de validação com Zod
const eventFormSchema = z.object({
  title: z.string().min(3, "O título deve ter no mínimo 3 caracteres."),
  description: z
    .string()
    .min(10, "A descrição deve ter no mínimo 10 caracteres."),
  date: z.date().refine((val) => val instanceof Date && !isNaN(val.getTime()), {
    message: "A data do evento é obrigatória.",
  }),
  municipalityId: z.string().min(1, "O município é obrigatório."),
});

// Extrai o tipo dos valores do formulário a partir do esquema Zod
export type EventFormValues = z.infer<typeof eventFormSchema>;

export function useEventForm(
  event: Event | null,
  onSubmit: (data: EventFormValues, imageFile: File | null) => Promise<void>
) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(event?.image || null);

  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      title: event?.title || "",
      description: event?.description || "",
      date: event?.date ? new Date(event.date) : undefined,
      municipalityId: event?.municipalityId || "",
    },
  });

  // Handler que será chamado pelo react-hook-form's handleSubmit
  const handleFormSubmit = async (data: EventFormValues) => {
    await onSubmit(data, imageFile);
  };

  return {
    form,
    imageFile: { file: imageFile, setFile: setImageFile, preview, setPreview },
    onSubmit: handleFormSubmit,
  };
}
