"use client";
import { useState, useEffect } from "react";
import { Municipality } from "@/types/municipality";

export function useMunicipalities() {
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMunicipalities = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/cities");
        const data: Municipality[] = await res.json();
        setMunicipalities(data);
      } catch (err) {
        setError("Erro ao buscar municípios.");
        console.error("Erro ao buscar municípios:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMunicipalities();
  }, []);

  return { municipalities, isLoading, error };
}
