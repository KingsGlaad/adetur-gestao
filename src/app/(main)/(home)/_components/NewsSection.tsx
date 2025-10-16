"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Post } from "@/types/post";
import { PostCard } from "@/components/cards/PostCard";

export function NewsSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts?limit=3"); // Busca apenas os 3 posts mais recentes
        if (!response.ok) throw new Error("Falha ao buscar notícias");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <section id="noticias" className="py-12 bg-gray-100">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Últimas Notícias
        </h2>
        {isLoading ? (
          <div className="flex justify-center"><Loader2 className="h-10 w-10 animate-spin text-primary" /></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}