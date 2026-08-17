/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Calendar, ChevronLeft } from "lucide-react";
import { Post } from "@/types/post";
import { formatEventDate } from "@/lib/date-formater";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    async function fetchPost() {
      try {
        const response = await fetch(`/api/post/${slug}`);
        if (!response.ok) {
          throw new Error("Falha ao carregar a notícia.");
        }
        const data = await response.json();
        setPost(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-15rem)]">
        <Image
          src="/logo.png"
          priority
          alt="Adetur Logo"
          width={100}
          height={100}
          className="animate-pulse"
        />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-15rem)] space-y-6">
        <Image
          src={"/404.png"}
          alt="404 - não ha nada"
          width={500}
          height={500}
          className="mx-auto"
        />
        <p className="text-gray-600 text-lg">
          Não foi possível carregar esta notícia.
        </p>
        <Link href="/noticias">
          <Button
            variant="outline"
            className="flex items-center mb-8 cursor-pointer hover:bg-primary"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Voltar para todas as notícias
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto max-w-4xl py-12 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        {post.title}
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6">{post.subtitle}</p>
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Calendar className="w-4 h-4 mr-2" />
        <span>Publicado em {formatEventDate(post.createdAt)}</span>
      </div>
      {post.coverImage && (
        <div className="mb-8">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              layout="fill"
              className="object-cover"
              priority
            />
          </div>
          {post.altText && (
            <p className="text-center text-sm text-gray-500 italic mt-2">
              Crédito: {post.altText}
            </p>
          )}
        </div>
      )}
      <div
        className="prose dark:prose-invert max-w-none prose-sm sm:prose-base"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
