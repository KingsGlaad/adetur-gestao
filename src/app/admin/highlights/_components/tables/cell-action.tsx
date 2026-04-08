"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Trash, Edit } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { HighlightFormDialog } from "./HighlightFormDialog";
import { Municipality } from "@/types/municipality";
import { Highlight } from "@/types/highligth";
import { ConfirmModal } from "@/components/modals/confirm-modal";

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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Abrir menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setIsEditOpen(true)}>
            <Edit className="mr-2 h-4 w-4" /> Editar
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsDeleteOpen(true)} disabled={loading}>
            <Trash className="mr-2 h-4 w-4" /> Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
