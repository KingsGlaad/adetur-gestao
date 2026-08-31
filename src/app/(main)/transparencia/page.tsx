import React from "react";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  FileText,
  Download,
  Search,
  Calendar,
  Tag,
  AlertCircle,
  FolderOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

async function getTransparencyData() {
  try {
    const data = await prisma.transparency.findMany({
      where: {
        active: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados de transparência:", error);
    return [];
  }
}

export default async function TransparenciaPage() {
  const data = await getTransparencyData();

  const categories = Array.from(
    new Set(data.map((item) => item.category).filter(Boolean)),
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pt-10">
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-blue-900 via-blue-950 to-background overflow-hidden text-white border-b border-border/40">
        <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-4 bg-white/15 hover:bg-white/20 text-white border-none py-1 px-4 text-xs font-semibold backdrop-blur-md">
            Portal Oficial de Informações
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Transparência ADETUR
          </h1>
          <p className="text-base sm:text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed font-normal">
            Acesso facilitado a relatórios, prestações de contas, resoluções e
            documentos oficiais da ADETUR Alta Mogiana.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar / Filters */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-card text-card-foreground p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2 text-sm">
                <Tag className="w-4 h-4 text-primary" />
                Categorias
              </h3>
              <div className="space-y-1.5">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-primary font-bold bg-primary/10 hover:bg-primary/20 rounded-xl text-xs h-9"
                >
                  Todas as Categorias
                </Button>
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant="ghost"
                    className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl text-xs h-9 transition-all"
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/90 to-emerald-950 p-6 rounded-2xl shadow-lg border border-primary/30 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
              <h3 className="font-bold text-base mb-1 relative z-10">Dúvidas?</h3>
              <p className="text-emerald-100 text-xs mb-4 relative z-10 leading-relaxed">
                Se não encontrar o que procura, entre em contato com nossa
                equipe administrativa.
              </p>
              <Link href="/contato">
                <Button
                  variant="secondary"
                  className="w-full bg-white text-zinc-950 hover:bg-zinc-100 border-none relative z-10 font-bold text-xs shadow-sm h-9 rounded-xl"
                >
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </aside>

          {/* Documents Grid */}
          <div className="lg:col-span-3 space-y-6">
            {/* List */}
            {data.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 bg-card rounded-3xl border-2 border-dashed border-border p-8 text-center">
                <div className="p-4 bg-muted rounded-2xl mb-4 text-muted-foreground">
                  <FolderOpen className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Nenhum documento encontrado
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Estamos preparando novos arquivos para esta seção.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.map((item) => (
                  <Card
                    key={item.id}
                    className="group hover:shadow-xl transition-all duration-300 border-border bg-card text-card-foreground overflow-hidden flex flex-col rounded-2xl"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="p-2.5 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <FileText className="w-5 h-5" />
                        </div>
                        {item.category && (
                          <Badge
                            variant="secondary"
                            className="bg-muted text-muted-foreground border border-border font-medium text-[11px]"
                          >
                            {item.category}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg font-bold text-card-foreground line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                      {item.description && (
                        <CardDescription className="text-muted-foreground line-clamp-2 mt-2 leading-relaxed text-xs">
                          {item.description}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent className="mt-auto pb-4">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {format(new Date(item.createdAt), "dd MMM yyyy", {
                            locale: ptBR,
                          })}
                        </span>
                        <span className="w-1 h-1 bg-border rounded-full" />
                        <span className="text-muted-foreground">PDF</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 pb-6 px-6">
                      <Button
                        asChild
                        className="w-full bg-primary hover:opacity-90 text-primary-foreground font-semibold gap-2 py-5 rounded-xl shadow transition-all cursor-pointer group/btn text-xs"
                      >
                        <a
                          href={item.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                          Baixar Documento
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer Info */}
      <div className="container mx-auto max-w-6xl px-4 py-8 border-t border-border mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-xs">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-primary" />
            <span>
              Todos os dados são coletados de fontes oficiais da ADETUR.
            </span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <Link
              href="/contato"
              className="hover:text-primary transition-colors"
            >
              Dúvidas e Solicitações
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
