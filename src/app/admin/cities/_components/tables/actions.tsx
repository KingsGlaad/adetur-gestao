import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { MunicipioDrawer } from "./municipality-drawer";
import { useState } from "react";
import { MunicipalityRefined } from "@/types/municipality";
import axios from "axios";
import { toast } from "sonner";
import { ConfirmModal } from "@/components/modals/confirm-modal";

interface MunicipioActionsProps {
  municipio: MunicipalityRefined;
}

export function MunicipioActions({ municipio }: MunicipioActionsProps) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const router = useRouter(); // adicionado

  const handleView = () => {
    setOpenDrawer(true);
  };

  const handleEdit = () => {
    router.push(`/admin/cities/${municipio.slug}`);
  };

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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleView}>
            <Eye className="mr-2 h-4 w-4" />
            Visualizar
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleEdit}>
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-destructive focus:text-destructive hover:bg-destructive/10"
            onClick={() => setIsDeleteOpen(true)}
            disabled={loading}
          >
            <Trash className="mr-2 h-4 w-4 text-destructive" />
            Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <MunicipioDrawer
        municipio={municipio}
        open={openDrawer}
        onOpenChange={setOpenDrawer}
      />
    </>
  );
}
