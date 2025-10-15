"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Post } from "@/types/post";
import { Badge } from "@/components/ui/badge";
import { CellAction } from "./cell-action";

export const columns = (
  onUpdate: () => void
): ColumnDef<Post>[] => [
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "createdAt",
    header: "Data de Criação",
    cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
  },
  {
    accessorKey: "published",
    header: "Publicado",
    cell: ({ row }) => {
      const isPublished = row.original.published;
      return isPublished ? (
        <Badge className="bg-emerald-500 text-white hover:bg-emerald-600">Sim</Badge>
      ) : (
        <Badge variant="destructive" >Não</Badge>
      );
    },
  },
  {
    id: "actions",  
    header: "Ações",
    cell: ({ row }) => <CellAction data={row.original} onUpdate={onUpdate} />,
  },
];
