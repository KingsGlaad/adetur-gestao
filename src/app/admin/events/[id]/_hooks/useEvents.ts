/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";
import { Event } from "@/generated";
import { toast } from "sonner";

export type EventFormValues = {
  title: string;
  description: string;
  date: Date;
};
/**
 * Hook customizado para gerenciar a lógica de eventos de um município.
 * @param municipalityId O ID do município.
 */
export function useEvents(municipalityId: string) {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchEvents = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/cities/${municipalityId}/events`
      );
      if (!response.ok) {
        throw new Error("Falha ao buscar eventos.");
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      toast.error("Erro ao carregar os eventos.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [municipalityId]);

  useEffect(() => {
    if (municipalityId) {
      fetchEvents();
    }
  }, [municipalityId, fetchEvents]);

  const processEventData = async (
    data: EventFormValues,
    imageFile: File | null,
    existingEvent: Event | null
  ) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();

      // Adiciona os dados do formulário ao FormData
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof Date) {
          formData.append(key, value.toISOString());
        } else if (value !== null && value !== undefined) {
          formData.append(key, String(value));
        }
      });

      if (imageFile) {
        formData.append("image", imageFile);
      }

      if (!existingEvent) {
        formData.append("municipalityId", municipalityId);
      }

      const url = existingEvent
        ? `/api/events/${existingEvent.id}`
        : "/api/events";
      const method = existingEvent ? "PUT" : "POST";

      const response = await fetch(url, { method, body: formData });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Ocorreu um erro.");
      }

      toast.success(
        `Evento ${existingEvent ? "atualizado" : "criado"} com sucesso!`
      );
      await fetchEvents(); // Atualiza a lista de eventos
    } catch (error: any) {
      toast.error(
        error.message ||
          `Falha ao ${existingEvent ? "atualizar" : "criar"} o evento.`
      );
      throw error; // Propaga o erro para o componente
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteEvent = async (eventId: string) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Ocorreu um erro ao excluir.");
      }

      toast.success("Evento excluído com sucesso!");
      setEvents((prev) => prev.filter((event) => event.id !== eventId)); // Remove o evento da lista localmente
    } catch (error: any) {
      toast.error(error.message || "Falha ao excluir o evento.");
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { events, isLoading, isSubmitting, processEventData, deleteEvent };
}
