import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, Eye, MoreHorizontal, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { MunicipioDrawer } from "./municipality-drawer";
import { useState } from "react";
import { MunicipalityRefined } from "@/types/municipality";

interface MunicipioActionsProps {
  municipio: MunicipalityRefined;
}

export function MunicipioActions({ municipio }: MunicipioActionsProps) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter(); // adicionado

  const handleView = () => {
    setOpenDrawer(true);
  };

  const handleEdit = () => {
    router.push(`/admin/cities/${municipio.slug}`);
  };

  const handleDelete = (id: string) => {
    alert(`Excluindo município ID: ${id}`);
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
          <DropdownMenuItem
            onClick={() => handleDelete(municipio.id)}
            className="text-destructive focus:text-destructive"
          >
            <Trash2 className="mr-2 h-4 w-4" />
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
