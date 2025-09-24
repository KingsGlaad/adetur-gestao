"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { HighlightWithMunicipality } from "@/types/highligth";

export const columns = (
  onUpdate: () => void
): ColumnDef<HighlightWithMunicipality>[] => [
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "municipality.name",
    header: "Município",
    cell: ({ row }) => row.original.municipality?.name || "N/A",
  },
  {
    accessorKey: "createdAt",
    header: "Criado em",
    cell: ({ row }) =>
      row.original.createdAt
        ? new Date(row.original.createdAt).toLocaleDateString("pt-BR")
        : "N/A",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} onUpdate={onUpdate} />,
  },
];
