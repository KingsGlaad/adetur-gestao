"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AccessibilityControls } from "./AccessibilityControls";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Municipality } from "@/types/municipality";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "@/components/shared/theme-toggle";

const navigation = [
  { name: "Quem Somos", href: "/quem-somos" },
  { name: "Municípios", href: "/municipios" },
  { name: "Atrações", href: "/atracoes" },
  { name: "Notícias", href: "/noticias" },
  { name: "História", href: "/historia" },
  { name: "Aplicativo", href: "/aplicativo" },
  { name: "Faça parte", href: "/contato" },
  { name: "Transparência", href: "/transparencia" },
];

function useScroll() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrolled;
}

function useMunicipalities() {
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/cities");
        const data: Municipality[] = await res.json();

        setMunicipalities(data.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (err) {
        console.error("Erro ao buscar municípios", err);
      }
    }

    load();
  }, []);

  return municipalities;
}

export function Header() {
  const pathname = usePathname();

  const scrolled = useScroll();
  const municipalities = useMunicipalities();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <>
      {/* HEADER */}
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
        <header
          className={cn(
            "pointer-events-auto transition-all duration-500 flex items-center justify-between relative",
            scrolled
              ? "w-full xl:w-[98%] max-w-[1600px] xl:mt-4 bg-background/80 backdrop-blur-xl border-b xl:border border-border xl:rounded-full px-6 py-3"
              : "w-full bg-background/60 backdrop-blur border-b border-border px-6 xl:px-10 py-4",
          )}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-11 w-11 flex items-center justify-center rounded-xl border border-border bg-white dark:bg-zinc-900 shadow-sm">
              <Image src="/logo.png" alt="Logo ADETUR" width={40} height={40} />
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">ADETUR</span>
              <span className="text-xs tracking-widest uppercase text-muted-foreground">
                Alta Mogiana
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden xl:flex absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-1 xl:gap-2 p-1 rounded-full bg-muted/40 border border-border whitespace-nowrap shadow-sm">
              {navigation.map((item) => {
                if (item.name === "Municípios") {
                  return (
                    <li key={item.name} className="group relative">
                      <span
                        className={cn(
                          "flex items-center gap-2 px-5 py-2 rounded-full cursor-pointer text-sm font-medium transition-colors",
                          isActive(item.href)
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-foreground/80 hover:text-foreground hover:bg-muted",
                        )}
                      >
                        Municípios
                        <ChevronDown size={16} />
                      </span>

                      {/* MEGA MENU */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="w-[880px] bg-popover text-popover-foreground border border-border rounded-2xl shadow-2xl overflow-hidden">
                          <div className="flex items-center justify-between p-6 border-b border-border bg-muted/20">
                            <div>
                              <h3 className="font-bold text-lg text-foreground">
                                Nossos Municípios
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                Explore a região da Alta Mogiana
                              </p>
                            </div>

                            <Button size="sm" className="gap-2" asChild>
                              <Link href="/municipios">
                                <MoveRight className="h-4 w-4" />
                                Explore
                              </Link>
                            </Button>
                          </div>

                          <div className="grid grid-cols-3 gap-2 p-6 max-h-[380px] overflow-y-auto">
                            {municipalities.map((city) => (
                              <Link
                                key={city.id}
                                href={`/municipios/${city.slug}`}
                                className="flex items-center gap-2.5 p-2 rounded-xl text-sm font-medium text-foreground hover:bg-muted/80 transition-colors"
                              >
                                <div className="w-6 h-6 rounded-md overflow-hidden bg-muted flex items-center justify-center shrink-0 border border-border/50">
                                  <Image
                                    src={city.coatOfArms || "/logo.png"}
                                    alt={city.name}
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                  />
                                </div>
                                <span className="truncate">{city.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "px-5 py-2 rounded-full text-sm font-medium transition-colors inline-block",
                        isActive(item.href)
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-foreground/80 hover:text-foreground hover:bg-muted",
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 sm:gap-3">
            <AccessibilityControls />
            <div className="h-5 w-px bg-border hidden sm:block" />
            <ThemeToggle />

            <Button
              size="icon"
              variant="outline"
              className="xl:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </header>
      </div>

      {/* MOBILE MENU */}
      <div
        className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity xl:hidden z-[105]",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed right-0 top-0 bottom-0 w-[320px] bg-background border-l border-border shadow-2xl transition-transform duration-300 xl:hidden z-[110] flex flex-col justify-between overflow-y-auto",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="pt-24 px-6 space-y-3">
          {navigation.map((item) => {
            if (item.name === "Municípios") {
              return (
                <Accordion type="single" collapsible key={item.name}>
                  <AccordionItem value="cities" className="border-border">
                    <AccordionTrigger className="text-foreground font-semibold py-3 hover:no-underline">
                      Municípios
                    </AccordionTrigger>

                    <AccordionContent className="space-y-1">
                      <Link
                        href="/municipios"
                        className="block py-2 px-3 rounded-lg text-primary font-bold hover:bg-muted"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Ver todos os municípios →
                      </Link>

                      {municipalities.map((city) => (
                        <Link
                          key={city.id}
                          href={`/municipios/${city.slug}`}
                          className="block py-2 px-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {city.name}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block py-3 px-3 rounded-xl font-semibold transition-colors",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Rodapé Mobile com Toggle e Info */}
        <div className="p-6 border-t border-border flex items-center justify-between bg-muted/20">
          <span className="text-xs text-muted-foreground font-medium">Tema visual:</span>
          <ThemeToggle variant="outline" />
        </div>
      </div>
    </>
  );
}
