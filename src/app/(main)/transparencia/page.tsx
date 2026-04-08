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
    <div className="min-h-screen bg-slate-50/50 flex flex-col pt-20">
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-[#80a3ff] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] -z-10" />
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none py-1 px-4 text-sm font-medium backdrop-blur-sm">
            Portal Oficial
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Transparência Adetur
          </h1>
          <p className="text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed font-light">
            Acesso facilitado a relatórios, prestações de contas, resoluções e
            documentos oficiais da Adetur Cataratas e Caminhos.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-12 -mt-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar / Filters */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Tag className="w-4 h-4 text-blue-500" />
                Categorias
              </h3>
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-blue-600 font-medium bg-blue-50"
                >
                  Todas
                </Button>
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant="ghost"
                    className="w-full justify-start text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all"
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 p-6 rounded-2xl shadow-lg border-none text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
              <h3 className="font-bold text-lg mb-2 relative z-10">Dúvidas?</h3>
              <p className="text-blue-100 text-sm mb-4 relative z-10">
                Se não encontrar o que procura, entre em contato com nossa
                equipe administrativa.
              </p>
              <Link href="/contato">
                <Button
                  variant="secondary"
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 border-none relative z-10 font-semibold shadow-sm"
                >
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </aside>

          {/* Documents Grid */}
          <div className="lg:col-span-3 space-y-8">
            {/* Search Bar */}
            <div className="relative group max-w-2xl">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none group-focus-within:text-blue-500 text-slate-400 transition-colors">
                <Search className="h-5 w-5" />
              </div>
              <Input
                placeholder="Pesquisar por título ou descrição..."
                className="pl-12 py-6 bg-white border-slate-200 focus-visible:ring-blue-500 focus-visible:border-blue-500 rounded-2xl shadow-sm group-hover:shadow-md transition-all text-lg"
              />
            </div>

            {/* List */}
            {data.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                <div className="p-4 bg-slate-50 rounded-full mb-4">
                  <FolderOpen className="w-12 h-12 text-slate-300" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">
                  Nenhum documento encontrado
                </h3>
                <p className="text-slate-500">
                  Estamos preparando novos arquivos para esta seção.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.map((item) => (
                  <Card
                    key={item.id}
                    className="group hover:shadow-xl transition-all duration-300 border-slate-200 overflow-hidden flex flex-col rounded-2xl"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <FileText className="w-6 h-6" />
                        </div>
                        {item.category && (
                          <Badge
                            variant="secondary"
                            className="bg-slate-100 text-slate-600 border-none font-medium"
                          >
                            {item.category}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl text-slate-800 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </CardTitle>
                      {item.description && (
                        <CardDescription className="text-slate-500 line-clamp-2 mt-2 leading-relaxed">
                          {item.description}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent className="mt-auto pb-4">
                      <div className="flex items-center gap-4 text-sm text-slate-400 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {format(new Date(item.createdAt), "dd MMM yyyy", {
                            locale: ptBR,
                          })}
                        </span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span className="text-slate-500">PDF</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 pb-6 px-6">
                      <Button
                        asChild
                        className="w-full bg-slate-900 hover:bg-blue-600 text-white gap-2 py-6 rounded-xl shadow-lg transition-all duration-300 cursor-pointer group/btn"
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
      <footer className="container mx-auto max-w-6xl px-4 py-12 border-t border-slate-200 mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>
              Todos os dados são coletados de fontes oficiais da Adetur.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-blue-600 transition-colors font-medium"
            >
              Manual da Transparência
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors font-medium"
            >
              Dados Abertos
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
