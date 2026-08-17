"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { dataTableFeatures } from "@/components/admin/data-table/data-table";
import { EventWithRelations } from "@/types/events";
import { CellAction } from "./actions";
import { Municipality } from "@/types/municipality";

// Definição das colunas da tabela
export const columns = (
  onUpdate: () => void,
  municipalities: Municipality[],
): ColumnDef<typeof dataTableFeatures, EventWithRelations, unknown>[] => [
  {
    accessorKey: "title",
    header: "Nome",
    cell: ({ row }) => {
      const name = row.getValue("title") as string;
      return (
        <div className="flex items-center">
          <span>{name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "municipalityId",
    header: "Município",
    cell: ({ row }) => {
      const municipality = row.original.Municipality?.name as string;
      return (
        <div className="flex items-center">
          <span>{municipality}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row }) => {
      const createdAt = row.getValue("date") as string;
      return (
        <div className="flex items-center">
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const event = row.original;
      return (
        <CellAction
          data={event}
          onUpdate={onUpdate}
          municipalities={municipalities}
        />
      );
    },
  },
];
