"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Municipality } from "@/types/municipality";
import { EventWithRelations } from "@/types/events";
import { EventFormDialog } from "./EventFormDialog";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import { DataTableCellActions } from "@/components/admin/data-table/data-table-cell-actions";

interface CellActionProps {
  data: EventWithRelations;
  onUpdate: () => void;
  municipalities: Municipality[];
}

export const CellAction: React.FC<CellActionProps> = ({
  data,
  onUpdate,
  municipalities,
}) => {
  const [loading, setLoading] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/events/${data.id}`);
      toast.success("Evento excluído.");
      onUpdate();
      setIsDeleteOpen(false);
    } catch (error) {
      console.error("Erro ao excluir evento:", error);
      toast.error("Ocorreu um erro ao excluir o evento.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <EventFormDialog
        isOpen={isEditOpen}
        onOpenChange={setIsEditOpen}
        initialData={data}
        onUpdate={onUpdate}
        municipalities={municipalities}
      />
      <ConfirmModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <DataTableCellActions
        onEdit={() => setIsEditOpen(true)}
        onDelete={() => setIsDeleteOpen(true)}
        loading={loading}
      />
    </>
  );
};
