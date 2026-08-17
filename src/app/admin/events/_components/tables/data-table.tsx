"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable as GenericDataTable, dataTableFeatures } from "@/components/admin/data-table/data-table";
import { Municipality } from "@/types/municipality";
import { EventFormDialog } from "./EventFormDialog";

interface DataTableProps<TData extends import("@tanstack/react-table").RowData> {
  columns: ColumnDef<typeof dataTableFeatures, TData, any>[];
  data: TData[];
  municipalities: Municipality[];
  onUpdate: () => void;
}

export function DataTable<TData extends import("@tanstack/react-table").RowData>({
  columns,
  data,
  municipalities,
  onUpdate,
}: DataTableProps<TData>) {
  return (
    <GenericDataTable
      columns={columns}
      data={data}
      searchKey="title"
      searchPlaceholder="Pesquisar evento..."
      entityName="eventos"
      actionButton={
        <EventFormDialog
          onUpdate={onUpdate}
          municipalities={municipalities}
        />
      }
    />
  );
}
