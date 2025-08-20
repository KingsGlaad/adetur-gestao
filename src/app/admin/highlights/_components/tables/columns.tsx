"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { HighlightActions } from "./actions";
import { Highlight } from "@/types/highligth";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<Highlight>[] = [
  {
    accessorKey: "title",
    header: "Título",
    cell: ({ row }) => {
      const title = row.getValue("title") as string;
      return (
        <div className="font-medium max-w-[200px] truncate">
          <span>{title}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "municipality",
    header: "Município",
    cell: ({ row }) => {
      const municipalityName = row.original.municipality?.name as string;
      return (
        <div className="font-medium">
          <span>{municipalityName || "Nenhum"}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Data de Publicação",
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt") as Date;
      return (
        <div className="text-sm text-muted-foreground">
          {format(createdAt, "PPP", { locale: ptBR })}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const highlight = row.original;
      return <HighlightActions highlight={highlight} />;
    },
  },
];
