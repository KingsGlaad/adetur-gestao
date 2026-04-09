"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable as GenericDataTable } from "@/components/admin/data-table/data-table";
import { TransparencyFormDialog } from "../TransparencyFormDialog";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onUpdate: () => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  onUpdate,
}: DataTableProps<TData, TValue>) {
  return (
    <GenericDataTable
      columns={columns}
      data={data}
      searchKey="title"
      searchPlaceholder="Pesquisar arquivo..."
      entityName="arquivos"
      actionButton={<TransparencyFormDialog onUpdate={onUpdate} />}
    />
  );
}
