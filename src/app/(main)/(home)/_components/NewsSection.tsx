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
    <section id="noticias" className="py-16 md:py-24 bg-background border-b border-border">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-wider font-bold text-primary">Informativos & Novidades</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Últimas Notícias
          </h2>
        </div>
        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}