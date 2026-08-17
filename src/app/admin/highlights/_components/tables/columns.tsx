"use client";
import { ColumnDef } from "@tanstack/react-table";
import { dataTableFeatures } from "@/components/admin/data-table/data-table";
import { CellAction } from "./cell-action";
import { Municipality } from "@/types/municipality";
import { Highlight } from "@/types/highligth";

export const columns = (
  onUpdate: () => void,
  municipalities: Municipality[]
): ColumnDef<typeof dataTableFeatures, Highlight, unknown>[] => [
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "municipalityId",
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
    cell: ({ row }) => (
      <CellAction
        data={row.original}
        onUpdate={onUpdate}
        municipalities={municipalities}
      />
    ),
  },
];
