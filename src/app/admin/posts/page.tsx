/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCallback, useEffect, useState } from "react";
import { columns } from "./_components/tables/columns";
import { DataTable } from "./_components/tables/data-table";
import axios from "axios";
import { toast } from "sonner";
import { Post } from "@/types/post";

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar os posts da API
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/posts");
        setPosts(res.data);
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
      toast.error("Erro ao carregar as notícias.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Busca os dados quando o componente é montado
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return <div className="flex-1 space-y-4 p-8 pt-6">Carregando...</div>;
  }

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">
          Gerenciamento de Notícias
        </h2>
        
      </div>
      <DataTable columns={columns(fetchPosts)} data={posts} />
    </div>
  );
}
