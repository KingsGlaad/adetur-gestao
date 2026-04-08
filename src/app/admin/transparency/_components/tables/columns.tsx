"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Transparency } from "@/types/transparency";
import { CellAction } from "./actions";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { FileText } from "lucide-react";

export const columns = (onUpdate: () => void): ColumnDef<Transparency>[] => [
  {
    accessorKey: "title",
    header: "Título",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
        <span className="font-medium truncate max-w-[300px]" title={row.original.title}>
          {row.original.title}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row }) => (
      <span className="text-muted-foreground italic">
        {row.original.category}
      </span>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Data de Criação",
    cell: ({ row }) => {
      const date = new Date(row.original.createdAt);
      return (
        <span className="text-muted-foreground">
          {format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
        </span>
      );
    },
  },
  {
    accessorKey: "active",
    header: "Status",
    cell: ({ row }) => (
      <span className={row.original.active ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
        {row.original.active ? "Ativo" : "Inativo"}
      </span>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} onUpdate={onUpdate} />,
  },
];
