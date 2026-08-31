"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Newspaper, 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ChevronRight, 
  Sparkles,
  Share2,
  TrendingUp,
  Tag
} from "lucide-react";
import { formatEventDate } from "@/lib/date-formater";
import { Button } from "@/components/ui/button";

export interface PostItem {
  id: string;
  title: string;
  subtitle: string | null;
  slug: string;
  coverImage: string | null;
  altText: string | null;
  createdAt: Date | string;
  published: boolean;
}

interface NoticiasClientProps {
  initialPosts: PostItem[];
}

export function NoticiasClient({ initialPosts }: NoticiasClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"recent" | "oldest">("recent");

  // Filtra e ordena posts
  const filteredPosts = useMemo(() => {
    return initialPosts
      .filter((post) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          post.title.toLowerCase().includes(q) ||
          post.subtitle?.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return sortBy === "recent" ? dateB - dateA : dateA - dateB;
      });
  }, [initialPosts, searchQuery, sortBy]);

  // Primeiro post em destaque (caso não esteja buscando)
  const isSearching = searchQuery.trim().length > 0;
  const featuredPost = !isSearching && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = !isSearching && filteredPosts.length > 0 ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-zinc-900 via-zinc-950 to-background overflow-hidden text-white border-b border-border/40">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/bg/bg-municipios1.png')" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
            <Newspaper className="w-4 h-4 text-emerald-400" />
            <span>Portal de Notícias & Comunicação</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Fique por Dentro da{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Alta Mogiana
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Acompanhe comunicados oficiais, inaugurações de roteiros, eventos culturais, projetos turísticos e notícias de todos os municípios da nossa região.
          </p>

          {/* BARRA DE PESQUISA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Pesquisar por notícias, matérias ou temas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-card text-card-foreground border border-border/80 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 outline-none text-sm placeholder:text-muted-foreground shadow-xl transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground bg-muted px-2 py-1 rounded-md"
                >
                  Limpar
                </button>
              )}
            </div>

            <div className="w-full sm:w-auto flex-shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "recent" | "oldest")}
                className="w-full sm:w-auto px-4 py-3.5 rounded-2xl bg-card text-card-foreground border border-border/80 text-sm font-medium shadow-xl cursor-pointer outline-none focus:border-emerald-500"
              >
                <option value="recent">Mais Recentes</option>
                <option value="oldest">Mais Antigas</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        {/* SEM RESULTADOS */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16 space-y-4 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto text-muted-foreground">
              <Newspaper className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Nenhuma notícia encontrada</h3>
            <p className="text-sm text-muted-foreground">
              {isSearching
                ? `Não encontramos resultados correspondentes a "${searchQuery}". Tente pesquisar por outros termos.`
                : "No momento não há notícias publicadas. Volte em breve para novidades!"}
            </p>
            {isSearching && (
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Ver todas as notícias
              </Button>
            )}
          </div>
        )}

        {/* NOTÍCIA PRINCIPAL EM DESTAQUE (HERO POST) */}
        {featuredPost && (
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-primary">
              <TrendingUp className="w-4 h-4" />
              <span>Destaque Principal</span>
            </div>

            <Link
              href={`/noticias/${featuredPost.slug}`}
              className="group block rounded-3xl bg-card border border-border/80 overflow-hidden shadow-lg hover:shadow-2xl hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Imagem do Post em Destaque */}
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[450px] w-full overflow-hidden bg-muted">
                  <Image
                    src={featuredPost.coverImage || "/images/no-image.jpeg"}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                </div>

                {/* Texto do Post em Destaque */}
                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                        Novidade
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        {formatEventDate(new Date(featuredPost.createdAt))}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-card-foreground group-hover:text-primary transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>

                    {featuredPost.subtitle && (
                      <p className="text-sm sm:text-base text-muted-foreground line-clamp-3 sm:line-clamp-4 leading-relaxed">
                        {featuredPost.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm font-bold text-primary group-hover:translate-x-1 transition-transform flex items-center gap-2">
                      Ler matéria completa
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* GRID DE NOTÍCIAS */}
        {gridPosts.length > 0 && (
          <section className="space-y-6">
            {!isSearching && (
              <div className="flex items-center justify-between border-b border-border pb-4">
                <h3 className="text-2xl font-bold text-foreground tracking-tight">
                  Últimas Publicações
                </h3>
                <span className="text-xs text-muted-foreground font-medium">
                  Total de {filteredPosts.length} notícias
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post) => {
                const imageUrl = post.coverImage || "/images/no-image.jpeg";
                return (
                  <Link
                    key={post.id}
                    href={`/noticias/${post.slug}`}
                    className="group flex flex-col rounded-2xl bg-card border border-border/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300"
                  >
                    {/* Imagem de Capa */}
                    <div className="relative h-52 w-full overflow-hidden bg-muted">
                      <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white font-medium text-xs flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{formatEventDate(new Date(post.createdAt))}</span>
                      </div>
                    </div>

                    {/* Conteúdo do Card */}
                    <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-bold text-lg text-card-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h4>
                        {post.subtitle && (
                          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                            {post.subtitle}
                          </p>
                        )}
                      </div>

                      <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-primary">
                        <span>Ler notícia</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* BANNER NEWSLETTER / CONTATO DE IMPRENSA */}
        <section className="rounded-3xl bg-muted/40 border border-border p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
            <Share2 className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">
            Tem alguma pauta ou sugestão de notícia?
          </h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Se você representa um município, comércio local ou veículo de imprensa, compartilhe seus comunicados com a equipe da ADETUR Alta Mogiana.
          </p>
          <div className="pt-2">
            <Button asChild>
              <Link href="/contato">
                Fale com a Assessoria
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
