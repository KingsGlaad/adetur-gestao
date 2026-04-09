"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable as GenericDataTable } from "@/components/admin/data-table/data-table";
import { Municipality } from "@/types/municipality";
import { EventFormDialog } from "./EventFormDialog";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  municipalities: Municipality[];
  onUpdate: () => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  municipalities,
  onUpdate,
}: DataTableProps<TData, TValue>) {
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
