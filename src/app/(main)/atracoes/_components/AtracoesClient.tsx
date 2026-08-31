"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Compass, 
  Calendar, 
  MapPin, 
  Search, 
  Filter, 
  Sparkles, 
  Star, 
  Smartphone,
  ChevronRight,
  Clock,
  Layers
} from "lucide-react";
import { formatEventDate } from "@/lib/date-formater";
import { Button } from "@/components/ui/button";

interface MunicipalityOption {
  id: string;
  name: string;
  slug: string | null;
  coatOfArms: string | null;
}

interface AttractionItem {
  id: string;
  name: string;
  description: string;
  image: string | null;
  municipalityId: string;
  Municipality: {
    name: string;
    slug: string | null;
  };
}

interface HighlightItem {
  id: string;
  title: string;
  description: string | null;
  image: string | null;
  municipalityId: string;
  Municipality: {
    name: string;
    slug: string | null;
  };
  galleryImages: {
    url: string;
  }[];
}

interface EventItem {
  id: string;
  title: string;
  description: string;
  date: Date | string;
  image: string | null;
  municipalityId: string;
  Municipality: {
    name: string;
    slug: string | null;
  };
  galleryImages: {
    url: string;
  }[];
}

interface AtracoesClientProps {
  municipalities: MunicipalityOption[];
  attractions: AttractionItem[];
  highlights: HighlightItem[];
  events: EventItem[];
}

type TabType = "all" | "attractions" | "highlights" | "events";

export function AtracoesClient({
  municipalities,
  attractions,
  highlights,
  events,
}: AtracoesClientProps) {
  const [selectedMunicipality, setSelectedMunicipality] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState<TabType>("all");

  // Filtros aplicados
  const filteredAttractions = useMemo(() => {
    return attractions.filter((item) => {
      const matchMun =
        selectedMunicipality === "all" || item.municipalityId === selectedMunicipality;
      const matchSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.Municipality.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchMun && matchSearch;
    });
  }, [attractions, selectedMunicipality, searchQuery]);

  const filteredHighlights = useMemo(() => {
    return highlights.filter((item) => {
      const matchMun =
        selectedMunicipality === "all" || item.municipalityId === selectedMunicipality;
      const matchSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.Municipality.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchMun && matchSearch;
    });
  }, [highlights, selectedMunicipality, searchQuery]);

  const filteredEvents = useMemo(() => {
    return events.filter((item) => {
      const matchMun =
        selectedMunicipality === "all" || item.municipalityId === selectedMunicipality;
      const matchSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.Municipality.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchMun && matchSearch;
    });
  }, [events, selectedMunicipality, searchQuery]);

  const totalResults =
    filteredAttractions.length + filteredHighlights.length + filteredEvents.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-emerald-950/80 via-zinc-900 to-background overflow-hidden text-white border-b border-border/40">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/bg/bg-municipios2.png')" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Guia Completo da Região</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Atrações & Eventos dos{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Municípios
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Descubra os pontos turísticos mais incríveis, patrimônios históricos, cachoeiras, roteiros culturais e a agenda oficial de eventos de toda a Alta Mogiana.
          </p>

          {/* BARRA DE BUSCA E FILTROS RÁPIDOS */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            {/* Input de Busca */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar atração, evento ou local..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-card/90 text-card-foreground border border-border/80 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 outline-none text-sm placeholder:text-muted-foreground shadow-lg transition-all"
              />
            </div>

            {/* Select de Município */}
            <div className="sm:w-64">
              <select
                value={selectedMunicipality}
                onChange={(e) => setSelectedMunicipality(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-card/90 text-card-foreground border border-border/80 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 outline-none text-sm shadow-lg transition-all cursor-pointer"
              >
                <option value="all">Todos os Municípios</option>
                {municipalities.map((mun) => (
                  <option key={mun.id} value={mun.id}>
                    {mun.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Abas de Navegação / Filtro por Tipo */}
          <div className="pt-6 flex flex-wrap justify-center gap-2">
            {[
              { id: "all", label: "Tudo", count: totalResults, icon: Layers },
              {
                id: "attractions",
                label: "Atrações Turísticas",
                count: filteredAttractions.length,
                icon: Compass,
              },
              {
                id: "highlights",
                label: "Destaques & Roteiros",
                count: filteredHighlights.length,
                icon: Star,
              },
              {
                id: "events",
                label: "Eventos Municipais",
                count: filteredEvents.length,
                icon: Calendar,
              },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105"
                      : "bg-white/10 text-zinc-300 hover:bg-white/15 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive ? "bg-white/20 text-white" : "bg-black/30 text-zinc-400"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        {/* CASO NÃO HAJA NENHUM RESULTADO */}
        {totalResults === 0 && (
          <div className="text-center py-16 space-y-4 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto text-muted-foreground">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Nenhum resultado encontrado</h3>
            <p className="text-sm text-muted-foreground">
              Não encontramos atrações ou eventos com os filtros selecionados. Tente buscar por outro termo ou selecionar &quot;Todos os Municípios&quot;.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedMunicipality("all");
                setActiveTab("all");
              }}
            >
              Limpar Filtros
            </Button>
          </div>
        )}

        {/* SEÇÃO 1: EVENTOS DOS MUNICÍPIOS */}
        {(activeTab === "all" || activeTab === "events") && filteredEvents.length > 0 && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-amber-600 dark:text-amber-400 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>Programação Oficial</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  Eventos dos Municípios
                </h2>
              </div>
              <Link
                href="/eventos"
                className="text-xs sm:text-sm font-semibold text-primary hover:underline flex items-center gap-1"
              >
                <span>Ver calendário completo de eventos</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEvents.map((event) => {
                const imageUrl =
                  event.galleryImages?.[0]?.url || event.image || "/images/no-image.jpeg";
                return (
                  <Link
                    key={event.id}
                    href={`/eventos/${event.id}`}
                    className="group flex flex-col rounded-2xl bg-card border border-border/70 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300"
                  >
                    {/* Imagem do Evento */}
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                      <Image
                        src={imageUrl}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-amber-300 font-semibold text-xs flex items-center gap-1.5 border border-amber-500/30">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formatEventDate(new Date(event.date))}</span>
                      </div>
                    </div>

                    {/* Detalhes do Evento */}
                    <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1.5">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          <span className="font-medium">{event.Municipality.name}</span>
                        </div>
                        <h3 className="font-bold text-base text-card-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                          {event.title}
                        </h3>
                        {event.description && (
                          <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                            {event.description}
                          </p>
                        )}
                      </div>

                      <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                        <span>Ver detalhes do evento</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* SEÇÃO 2: ATRAÇÕES TURÍSTICAS */}
        {(activeTab === "all" || activeTab === "attractions") && filteredAttractions.length > 0 && (
          <section className="space-y-6">
            <div className="border-b border-border pb-4">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                <Compass className="w-4 h-4" />
                <span>Ecoturismo, História e Cultura</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Pontos Turísticos & Atrações
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAttractions.map((attraction) => {
                const imageUrl = attraction.image || "/images/no-image.jpeg";
                return (
                  <Link
                    key={attraction.id}
                    href={`/atracoes/${attraction.id}`}
                    className="group flex flex-col rounded-2xl bg-card border border-border/70 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300"
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                      <Image
                        src={imageUrl}
                        alt={attraction.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white font-medium text-xs flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{attraction.Municipality.name}</span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
                      <div>
                        <h3 className="font-bold text-base text-card-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                          {attraction.name}
                        </h3>
                        {attraction.description && (
                          <p className="text-xs text-muted-foreground mt-2 line-clamp-3 leading-relaxed">
                            {attraction.description}
                          </p>
                        )}
                      </div>

                      <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                        <span>Conhecer atração</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* SEÇÃO 3: DESTAQUES & ROTEIROS ESPECIAIS */}
        {(activeTab === "all" || activeTab === "highlights") && filteredHighlights.length > 0 && (
          <section className="space-y-6">
            <div className="border-b border-border pb-4">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                <Star className="w-4 h-4 fill-cyan-400" />
                <span>Imperdíveis da Região</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Destaques Regionais & Roteiros
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredHighlights.map((highlight) => {
                const imageUrl =
                  highlight.galleryImages?.[0]?.url || highlight.image || "/images/no-image.jpeg";
                return (
                  <Link
                    key={highlight.id}
                    href={`/municipios/highlights/${highlight.id}`}
                    className="group flex flex-col rounded-2xl bg-card border border-border/70 overflow-hidden shadow-sm hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300"
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                      <Image
                        src={imageUrl}
                        alt={highlight.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-semibold text-cyan-300 flex items-center gap-1 border border-cyan-500/30">
                        <Star className="w-3 h-3 fill-cyan-400 text-cyan-400" />
                        <span>Destaque</span>
                      </div>
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white font-medium text-xs flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{highlight.Municipality.name}</span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
                      <div>
                        <h3 className="font-bold text-base text-card-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                          {highlight.title}
                        </h3>
                        {highlight.description && (
                          <p className="text-xs text-muted-foreground mt-2 line-clamp-3 leading-relaxed">
                            {highlight.description}
                          </p>
                        )}
                      </div>

                      <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                        <span>Explorar destaque</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* BANNER CTA APP */}
        <section className="rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-zinc-900 text-white p-8 sm:p-12 shadow-xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-emerald-300">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Aplicativo Móvel</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Tenha todas as atrações e eventos no seu bolso!
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Baixe gratuitamente o aplicativo oficial da ADETUR Alta Mogiana e acesse roteiros, mapas de navegação e programações atualizadas a qualquer momento.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Button size="lg" className="bg-white text-zinc-950 hover:bg-zinc-100 font-bold gap-2 px-6 h-12 shadow-lg" asChild>
              <Link href="/aplicativo">
                <Smartphone className="w-4 h-4" />
                Baixar o Aplicativo
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
