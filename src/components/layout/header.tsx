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

const navigation = [
  { name: "Quem Somos", href: "/quem-somos" },
  { name: "Municípios", href: "/municipios" },
  { name: "Atrações", href: "/atracoes" },
  { name: "Notícias", href: "/noticias" },
  { name: "História", href: "/historia" },
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
            <div className="h-11 w-11 flex items-center justify-center rounded-xl border bg-white dark:bg-zinc-900">
              <Image src="/logo.png" alt="Logo ADETUR" width={40} height={40} />
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-lg">ADETUR</span>
              <span className="text-xs tracking-widest uppercase text-muted-foreground">
                Alta Mogiana
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden xl:flex absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-1 xl:gap-2 p-1 rounded-full bg-muted/30 border whitespace-nowrap">
              {navigation.map((item) => {
                if (item.name === "Municípios") {
                  return (
                    <li key={item.name} className="group relative">
                      <span
                        className={cn(
                          "flex items-center gap-2 px-5 py-2 rounded-full cursor-pointer",
                          isActive(item.href)
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted",
                        )}
                      >
                        Municípios
                        <ChevronDown size={16} />
                      </span>

                      {/* MEGA MENU */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                        <div className="w-[880px] bg-background border rounded-xl shadow-xl">
                          <div className="flex items-center justify-between p-6 border-b">
                            <div>
                              <h3 className="font-semibold text-lg">
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
                                className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted"
                              >
                                <Image
                                  src={city.coatOfArms || "/logo.png"}
                                  alt={city.name}
                                  width={20}
                                  height={20}
                                />
                                {city.name}
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
                        "px-5 py-2 rounded-full",
                        isActive(item.href)
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted",
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
          <div className="flex items-center gap-3">
            <AccessibilityControls />

            <Button
              size="icon"
              variant="outline"
              className="xl:hidden"
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
          "fixed inset-0 bg-background/80 backdrop-blur transition xl:hidden",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed right-0 top-0 bottom-0 w-[320px] bg-background shadow-xl transition-transform xl:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="pt-24 px-6 space-y-3">
          {navigation.map((item) => {
            if (item.name === "Municípios") {
              return (
                <Accordion type="single" collapsible key={item.name}>
                  <AccordionItem value="cities">
                    <AccordionTrigger>Municípios</AccordionTrigger>

                    <AccordionContent>
                      <Link
                        href="/municipios"
                        className="block py-2 text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Ver todos
                      </Link>

                      {municipalities.map((city) => (
                        <Link
                          key={city.id}
                          href={`/municipios/${city.slug}`}
                          className="block py-2 text-sm"
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
                className="block py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
