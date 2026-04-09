"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { HighlightFormDialog } from "./HighlightFormDialog";
import { Municipality } from "@/types/municipality";
import { Highlight } from "@/types/highligth";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import { DataTableCellActions } from "@/components/admin/data-table/data-table-cell-actions";

interface CellActionProps {
  data: Highlight;
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
      await axios.delete(`/api/highlights/${data.id}`);
      toast.success("Destaque excluído.");
      onUpdate();
      setIsDeleteOpen(false);
    } catch (error) {
      console.error("Erro ao excluir destaque:", error);
      toast.error("Ocorreu um erro ao excluir o destaque.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HighlightFormDialog
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
