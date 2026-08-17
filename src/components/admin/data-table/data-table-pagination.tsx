"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Table, RowData } from "@tanstack/react-table";
import { dataTableFeatures } from "./data-table";


import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DataTablePaginationProps<TData extends RowData> {
  table: Table<typeof dataTableFeatures, TData>;
  entityName?: string;
}

export function DataTablePagination<TData extends RowData>({
  table,
  entityName = "registros",
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-2 py-4 gap-4">
      <div className="text-sm text-muted-foreground order-2 md:order-1">
        Mostrando{" "}
        {table.store.state.pagination.pageIndex *
          table.store.state.pagination.pageSize +
          1}
        -
        {Math.min(
          (table.store.state.pagination.pageIndex + 1) *
            table.store.state.pagination.pageSize,
          table.getFilteredRowModel().rows.length
        )}{" "}
        de {table.getFilteredRowModel().rows.length} {entityName}
      </div>

      <div className="flex items-center space-x-6 lg:space-x-8 order-1 md:order-2">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium hidden sm:block">Linhas por página</p>
          <Select
            value={`${table.store.state.pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.store.state.pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Ir para a primeira página</span>
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Página anterior</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Página {table.store.state.pagination.pageIndex + 1} de{" "}
            {table.getPageCount()}
          </div>
          
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Próxima página</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Ir para a última página</span>
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
