import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronLeft, ArrowRight, Share2, Tag, Newspaper } from "lucide-react";
import { formatEventDate } from "@/lib/date-formater";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug },
    select: { title: true, subtitle: true, coverImage: true },
  });

  if (!post) {
    return {
      title: "Notícia não encontrada | ADETUR",
    };
  }

  return {
    title: `${post.title} | ADETUR Alta Mogiana`,
    description:
      post.subtitle?.substring(0, 160) ||
      `Leia a matéria completa: ${post.title}.`,
    openGraph: {
      title: post.title,
      description: post.subtitle || undefined,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export const revalidate = 60;

export default async function PostDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post || !post.published) {
    return notFound();
  }

  // Notícias relacionadas / recentes
  const recentPosts = await prisma.post.findMany({
    where: {
      published: true,
      id: {
        not: post.id,
      },
    },
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* HEADER HERO DA NOTÍCIA */}
      <section className="relative py-12 md:py-16 bg-gradient-to-b from-muted/60 via-background to-background border-b border-border/50">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-6">
            {/* Link Voltar */}
            <Link
              href="/noticias"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors py-1 px-3 rounded-full bg-muted/60 border border-border/60"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Voltar para todas as notícias</span>
            </Link>

            {/* Metadados do Post */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-bold">
                Notícia Oficial
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                <span>Publicado em {formatEventDate(new Date(post.createdAt))}</span>
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
              {post.title}
            </h1>

            {/* Subtítulo */}
            {post.subtitle && (
              <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
                {post.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* IMAGEM DE CAPA E CONTEÚDO */}
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-8">
        {/* Imagem de Capa */}
        {post.coverImage && (
          <div className="mb-10 space-y-2">
            <div className="relative w-full h-[320px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-border/80 bg-muted">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
            {post.altText && (
              <p className="text-center text-xs text-muted-foreground italic pt-1">
                Foto / Crédito: {post.altText}
              </p>
            )}
          </div>
        )}

        {/* Corpo do Artigo com Tipografia Rica */}
        <article className="bg-card border border-border/70 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div
            className="prose dark:prose-invert max-w-none text-card-foreground leading-relaxed prose-headings:font-bold prose-a:text-primary prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* SEÇÃO DE MATÉRIAS RELACIONADAS */}
        {recentPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground">
                Outras Notícias Recentes
              </h3>
              <Link
                href="/noticias"
                className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
              >
                <span>Ver todas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {recentPosts.map((recent) => (
                <Link
                  key={recent.id}
                  href={`/noticias/${recent.slug}`}
                  className="group flex flex-col rounded-2xl bg-card border border-border/70 overflow-hidden shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
                >
                  <div className="relative h-36 w-full bg-muted">
                    <Image
                      src={recent.coverImage || "/images/no-image.jpeg"}
                      alt={recent.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1 space-y-2">
                    <h4 className="font-bold text-sm text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {recent.title}
                    </h4>
                    <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-primary" />
                      {formatEventDate(new Date(recent.createdAt))}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
