import { useRouter } from "next/navigation";
import { MunicipioDrawer } from "./municipality-drawer";
import { useState } from "react";
import { MunicipalityRefined } from "@/types/municipality";
import axios from "axios";
import { toast } from "sonner";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import { DataTableCellActions } from "@/components/admin/data-table/data-table-cell-actions";

interface MunicipioActionsProps {
  municipio: MunicipalityRefined;
}

export function MunicipioActions({ municipio }: MunicipioActionsProps) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const router = useRouter();

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/cities/${municipio.slug}`);
      toast.success("Município excluído.");
      router.refresh();
      setIsDeleteOpen(false);
    } catch (error) {
      toast.error("Ocorreu um erro ao excluir o município.");
      console.error(error);
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
        description="Esta ação não pode ser desfeita e excluirá permanentemente o município e todos os seus dados associados."
      />
      <DataTableCellActions
        onView={() => setOpenDrawer(true)}
        onEdit={() => router.push(`/admin/cities/${municipio.slug}`)}
        onDelete={() => setIsDeleteOpen(true)}
        loading={loading}
      />

      <MunicipioDrawer
        municipio={municipio}
        open={openDrawer}
        onOpenChange={setOpenDrawer}
      />
    </>
  );
}
