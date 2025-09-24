"use client";

import { useEffect, useState } from "react";
import { columns } from "./_components/tables/columns";
import { DataTable } from "./_components/tables/data-table";
import axios from "axios";
import { toast } from "sonner";
import { HighlightWithMunicipality } from "@/types/highligth";

export default function HighlightsPage() {
  const [highlights, setHighlights] = useState<HighlightWithMunicipality[]>([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar os destaques da API
  const fetchHighlights = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/highlights");
      setHighlights(res.data);
    } catch (error) {
      console.error("Erro ao buscar destaques:", error);
      toast.error("Erro ao carregar os destaques.");
    } finally {
      setLoading(false);
    }
  };

  // Busca os dados quando o componente é montado
  useEffect(() => {
    fetchHighlights();
  }, []);

  if (loading) {
    return <div className="flex-1 space-y-4 p-8 pt-6">Carregando...</div>;
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Destaques</h2>
      </div>
      <DataTable
        columns={columns(fetchHighlights)}
        data={highlights}
        onUpdate={fetchHighlights}
      />
    </div>
  );
}
