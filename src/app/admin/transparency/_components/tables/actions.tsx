"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Download } from "lucide-react";
import { Transparency } from "@/types/transparency";
import { TransparencyFormDialog } from "../TransparencyFormDialog";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import { DataTableCellActions } from "@/components/admin/data-table/data-table-cell-actions";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface CellActionProps {
  data: Transparency;
  onUpdate: () => void;
}

export const CellAction: React.FC<CellActionProps> = ({ data, onUpdate }) => {
  const [loading, setLoading] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/transparency/${data.id}`);
      toast.success("Arquivo excluído.");
      onUpdate();
      setIsDeleteOpen(false);
    } catch (error) {
      console.error("Erro ao excluir arquivo:", error);
      toast.error("Ocorreu um erro ao excluir o arquivo.");
    } finally {
      setLoading(false);
    }
  };

  const onDownload = () => {
    if (data.fileUrl) {
      window.open(data.fileUrl, "_blank");
    }
  };

  return (
    <>
      <TransparencyFormDialog
        isOpen={isEditOpen}
        onOpenChange={setIsEditOpen}
        initialData={data}
        onUpdate={onUpdate}
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
      >
        <DropdownMenuItem onClick={onDownload} className="cursor-pointer">
          <Download className="mr-2 h-4 w-4" /> Download
        </DropdownMenuItem>
      </DataTableCellActions>
    </>
  );
};
