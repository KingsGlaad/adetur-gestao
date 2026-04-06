import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, Eye, Loader2, MoreHorizontal, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { MunicipioDrawer } from "./municipality-drawer";
import { useState } from "react";
import { MunicipalityRefined } from "@/types/municipality";
import axios from "axios";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface MunicipioActionsProps {
  municipio: MunicipalityRefined;
}

export function MunicipioActions({ municipio }: MunicipioActionsProps) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [loading, setLoading] = useState(false);
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
      router.refresh(); // Recarrega a página atual para refletir as mudanças
    } catch (error) {
      toast.error("Ocorreu um erro ao excluir o município.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <DropdownMenuItem
                className="text-destructive focus:text-destructive hover:bg-destructive/10"
                onSelect={(e) => e.preventDefault()}
              >
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Trash className="mr-2 h-4 w-4 text-destructive" />
                )}
                Excluir
              </DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação não pode ser desfeita e excluirá permanentemente o
                  município e todos os seus dados associados.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction
                  onClick={onDelete}
                  className="bg-red-500 hover:bg-red-400 cursor-pointer"
                >
                  Excluir
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
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
