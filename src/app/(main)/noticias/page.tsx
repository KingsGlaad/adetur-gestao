"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Post } from "@/types/post"; 
import { PostCard } from "@/components/cards/PostCard";
import Image from "next/image";
import NotFound from "@/app/not-found";

export default function NewsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAllPosts() {
      try {
        const response = await fetch("/api/posts"); // Busca todos os posts
        if (!response.ok) throw new Error("Falha ao buscar notícias");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAllPosts();
  }, []);

  return (
    <main className="bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Notícias
        </h1>
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <Image src={"/404.png"} alt="404 - não ha nada" width={500} height={500} className="mx-auto"/>
        )}
      </div>
    </main>
  );
}