"use client";

import { useCallback, useEffect, useState } from "react";
import { columns } from "./_components/tables/columns";
import { DataTable } from "./_components/tables/data-table";
import axios from "axios";
import { toast } from "sonner";
import { Transparency } from "@/types/transparency";

export default function TransparencyPage() {
  const [data, setData] = useState<Transparency[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/transparency");
      setData(res.data);
    } catch (error) {
      console.error("Erro ao buscar arquivos de transparência:", error);
      toast.error("Erro ao carregar os dados de transparência.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="flex-1 space-y-6 p-8 pt-6 min-h-screen">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Portal da Transparência
          </h2>
          <p className="text-muted-foreground">
            Gerencie aqui os arquivos, relatórios e documentos oficiais para
            download.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-[400px]">
          <div className="flex flex-col items-center gap-4">
            <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-muted-foreground animate-pulse">
              Carregando arquivos...
            </p>
          </div>
        </div>
      ) : (
        <DataTable
          columns={columns(fetchData)}
          data={data}
          onUpdate={fetchData}
        />
      )}
    </div>
  );
}
