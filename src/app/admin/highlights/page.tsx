/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useState } from "react";
import { columns } from "./_components/tables/columns";
import { DataTable } from "./_components/tables/data-table";
import axios from "axios";
import { toast } from "sonner";
import { Municipality } from "@/types/municipality";
import { Highlight } from "@/types/highligth";

export default function HighlightsPage() {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar os destaques da API
  const fetchHighlights = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/highlights");
      // A API de listagem precisa incluir a galeria de imagens
      const highlightsWithImages = res.data.map((h: any) => ({
        ...h,
        galleryImages: h.galleryImages || [],
      }));
      setHighlights(highlightsWithImages);
    } catch (error) {
      console.error("Erro ao buscar destaques:", error);
      toast.error("Erro ao carregar os destaques.");
    } finally {
      setLoading(false);
    }
  };

  const fetchMunicipalities = async () => {
    try {
      const res = await axios.get("/api/cities");
      setMunicipalities(res.data);
    } catch (error) {
      toast.error("Erro ao carregar municípios.");
    }
  };

  // Busca os dados quando o componente é montado
  useEffect(() => {
    Promise.all([fetchHighlights(), fetchMunicipalities()]);
  }, []);

  const memoizedColumns = useMemo(
    () => columns(fetchHighlights, municipalities),
    [municipalities]
  );

  if (loading) {
    return <div className="flex-1 space-y-4 p-8 pt-6">Carregando...</div>;
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Destaques</h2>
      </div>
      <DataTable
        columns={memoizedColumns}
        data={highlights}
        municipalities={municipalities}
        onUpdate={fetchHighlights}
      />
    </div>
  );
}
