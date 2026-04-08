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
import { Post } from "@/types/post";
import Link from "next/link";
import { ConfirmModal } from "@/components/modals/confirm-modal";

interface CellActionProps {
  data: Post;
  onUpdate: () => void;
}

export const CellAction: React.FC<CellActionProps> = ({ data, onUpdate }) => {
  const [loading, setLoading] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/posts/${data.id}`);
      toast.success("Notícia excluída.");
      onUpdate();
      setIsDeleteOpen(false);
    } catch (error) {
      console.error("Erro ao excluir a notícia:", error);
      toast.error("Ocorreu um erro ao excluir a notícia.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
          <Link href={`/admin/posts/${data.id}`}>
            <DropdownMenuItem
              onSelect={(e) => e.preventDefault()}
              variant="default"
            >
              <Edit className="mr-2 h-4 w-4" /> Editar
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem
            variant="destructive"
            onClick={() => setIsDeleteOpen(true)}
            disabled={loading}
          >
            <Trash className="mr-2 h-4 w-4" />
            Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
