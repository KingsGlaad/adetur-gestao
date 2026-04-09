"use client";

import { Edit, MoreHorizontal, Trash, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface DataTableCellActionsProps {
  onEdit?: () => void;
  onDelete?: () => void;
  onView?: () => void;
  label?: string;
  loading?: boolean;
  children?: React.ReactNode;
}

export function DataTableCellActions({
  onEdit,
  onDelete,
  onView,
  label = "Ações",
  loading = false,
  children,
}: DataTableCellActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0" disabled={loading}>
          <span className="sr-only">Abrir menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-primary/20">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>

        {onView && (
          <DropdownMenuItem onClick={onView}>
            <Eye className="mr-2 h-4 w-4" /> Visualizar
          </DropdownMenuItem>
        )}

        {children}

        {onEdit && (
          <DropdownMenuItem onClick={onEdit}>
            <Edit className="mr-2 h-4 w-4" /> Editar
          </DropdownMenuItem>
        )}

        {onDelete && (
          <DropdownMenuItem
            onClick={onDelete}
            disabled={loading}
            variant="destructive"
          >
            <Trash className="mr-2 h-4 w-4" /> Excluir
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
