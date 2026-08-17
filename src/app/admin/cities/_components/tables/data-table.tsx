"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTable as GenericDataTable } from "@/components/admin/data-table/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { dataTableFeatures } from "@/components/admin/data-table/data-table";

interface DataTableProps<TData extends import("@tanstack/react-table").RowData> {
  columns: ColumnDef<typeof dataTableFeatures, TData, any>[];
  data: TData[];
}

export function MunicipiosDataTable<TData extends import("@tanstack/react-table").RowData>({
  columns,
  data,
}: DataTableProps<TData>) {
  return (
    <GenericDataTable
      columns={columns}
      data={data}
      searchKey="name"
      searchPlaceholder="Pesquisar municípios..."
      entityName="municípios"
      actionButton={
        <Link href="/admin/cities/new">
          <Button className="cursor-pointer">
            <Plus className="mr-2 h-4 w-4" />
            Adicionar município
          </Button>
        </Link>
      }
    />
  );
}
