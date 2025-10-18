/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useState } from "react";
import { columns } from "./_components/tables/columns";
import { DataTable } from "./_components/tables/data-table";
import axios from "axios";
import { toast } from "sonner";
import { Municipality } from "@/types/municipality";
import { EventWithRelations } from "@/types/events";
import { Loader2 } from "lucide-react";

export default function EventPage() {
  const [events, setEvents] = useState<EventWithRelations[]>([]);
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]);
  const [loading, setLoading] = useState(true);

  
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await axios.get<EventWithRelations[]>("/api/events");
      setEvents(res.data);
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);
      toast.error("Erro ao carregar os eventos.");
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
    Promise.all([fetchEvents(), fetchMunicipalities()]);
  }, []);

  const memoizedColumns = useMemo(
    () => columns(fetchEvents, municipalities),
    [municipalities]
  );

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 pt-6">
        <Loader2 className="animate-spin h-12 w-12 mr-3" />
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Eventos</h2>
      </div>
      <DataTable
        columns={memoizedColumns}
        data={events}
        municipalities={municipalities}
        onUpdate={fetchEvents}
      />
    </div>
  );
}
