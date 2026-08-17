"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable as GenericDataTable, dataTableFeatures } from "@/components/admin/data-table/data-table";
import { TransparencyFormDialog } from "../TransparencyFormDialog";

interface DataTableProps<TData extends import("@tanstack/react-table").RowData> {
  columns: ColumnDef<typeof dataTableFeatures, TData, any>[];
  data: TData[];
  onUpdate: () => void;
}

export function DataTable<TData extends import("@tanstack/react-table").RowData>({
  columns,
  data,
  onUpdate,
}: DataTableProps<TData>) {
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
