"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { MunicipioActions } from "./actions";
import { Municipality } from "@/types/municipality";

// Função para formatar números com separador de milhares
export const formatarNumero = (numero: number) => {
  return numero.toLocaleString("pt-BR");
};

// Componente para a cor da badge de região
export const getBadgeColor = (regiao: string) => {
  switch (regiao) {
    case "Norte":
      return "bg-emerald-500 hover:bg-emerald-600";
    case "Nordeste":
      return "bg-amber-500 hover:bg-amber-600";
    case "Centro-Oeste":
      return "bg-purple-500 hover:bg-purple-600";
    case "Sudeste":
      return "bg-rose-500 hover:bg-rose-600";
    case "Sul":
      return "bg-sky-500 hover:bg-sky-600";
    default:
      return "bg-gray-500 hover:bg-gray-600";
  }
};

// Definição das colunas da tabela
export const columns: ColumnDef<Municipality>[] = [
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      return (
        <div className="flex items-center">
          <span>{name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Associado em",
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt") as string;
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
      const municipio = row.original;
      return <MunicipioActions municipio={municipio} />;
    },
  },
];
