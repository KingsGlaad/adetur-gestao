"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Post } from "@/types/post";
import { useRouter } from "next/navigation";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import { DataTableCellActions } from "@/components/admin/data-table/data-table-cell-actions";

interface CellActionProps {
  data: Post;
  onUpdate: () => void;
}

export const CellAction: React.FC<CellActionProps> = ({ data, onUpdate }) => {
  const router = useRouter();
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
      <DataTableCellActions
        onEdit={() => router.push(`/admin/posts/${data.id}`)}
        onDelete={() => setIsDeleteOpen(true)}
        loading={loading}
      />
    </>
  );
};
