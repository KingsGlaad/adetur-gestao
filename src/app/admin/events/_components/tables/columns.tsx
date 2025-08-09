"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { EventActions } from "./actions";
import { Event } from "@/types/events";

// Função para formatar números com separador de milhares
export const formatarNumero = (numero: number) => {
  return numero.toLocaleString("pt-BR");
};

// Definição das colunas da tabela
export const columns: ColumnDef<Event>[] = [
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
      const municipalityId = row.getValue("munipalityId") as string;
      return (
        <div className="flex items-center">
          <span>{municipalityId}</span>
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
      return <EventActions event={event} />;
    },
  },
];
