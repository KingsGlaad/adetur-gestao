"use client";

import { useState } from "react";
import { Event } from "@/generated";
import { Button } from "@/components/ui/button";
import { Plus, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEvents } from "../../_hooks/useEvents";
import { EventForm, EventFormValues } from "../EventForm";
import { EventCard } from "./EventCard";
import { DeleteEventDialog } from "./DeleteEventDialog";

interface EventSectionProps {
  municipalityId: string;
}

export function EventsSection({ municipalityId }: EventSectionProps) {
  const { events, isLoading, isSubmitting, processEventData, deleteEvent } =
    useEvents(municipalityId);

  // Estados para controlar os diálogos e o item selecionado
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleOpenForm = (event: Event | null) => {
    setSelectedEvent(event);
    setIsFormOpen(true);
  };

  const handleOpenDeleteDialog = (event: Event) => {
    setSelectedEvent(event);
    setIsDeleteOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedEvent) return;
    try {
      await deleteEvent(selectedEvent.id);
      setIsDeleteOpen(false);
    } catch (error) {
      // O erro já é tratado no hook, não é necessário um toast aqui.
    }
  };

  const handleSubmit = async (
    data: EventFormValues,
    imageFile: File | null
  ) => {
    try {
      await processEventData(data, imageFile, selectedEvent);
      setIsFormOpen(false); // Fecha o diálogo em caso de sucesso
    } catch (error) {
      // O erro já é tratado no hook.
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Eventos</h3>
        <Button type="button" onClick={() => handleOpenForm(null)}>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Evento
        </Button>
      </div>

      {isLoading ? (
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>A carregar eventos...</span>
        </div>
      ) : events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onEdit={() => handleOpenForm(event)}
              onDelete={() => handleOpenDeleteDialog(event)}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          Nenhum evento registado para este município.
        </p>
      )}

      {/* Diálogo para Criar/Editar Guia */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedEvent ? "Editar Evento" : "Adicionar Novo Evento"}
            </DialogTitle>
          </DialogHeader>
          <EventForm
            event={selectedEvent!}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        </DialogContent>
      </Dialog>

      {/* Diálogo para Confirmar Exclusão */}
      <DeleteEventDialog
        open={isDeleteOpen}
        onOpenChange={setIsDeleteOpen}
        onConfirm={handleConfirmDelete}
        isDeleting={isSubmitting}
      />
    </div>
  );
}
