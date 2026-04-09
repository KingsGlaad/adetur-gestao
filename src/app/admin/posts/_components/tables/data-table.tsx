"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTable as GenericDataTable } from "@/components/admin/data-table/data-table";
import { ColumnDef } from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  return (
    <GenericDataTable
      columns={columns}
      data={data}
      searchKey="title"
      searchPlaceholder="Pesquisar notícias..."
      entityName="notícias"
      actionButton={
        <Link href="/admin/posts/new">
          <Button className="cursor-pointer">
            <Plus className="mr-2 h-4 w-4" /> Adicionar Notícia
          </Button>
        </Link>
      }
    />
  );
}
