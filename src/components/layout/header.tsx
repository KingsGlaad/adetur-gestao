"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import axios from "axios";
import { Municipality } from "@/types/municipality";
import { AccessibilityControls } from "./AccessibilityControls";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]);

  const navigation = [
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Municípios", href: "/municipios" },
    { name: "Notícias", href: "/noticias" },
    { name: "História - Alta Mogiana", href: "/historia" },
    { name: "Faça parte", href: "/contato" },
    { name: "Transparencia", href: "/transparencia" },
  ];

  useEffect(() => {
    const fetchMunicipalities = async () => {
      try {
        const res = await axios.get<Municipality[]>("/api/cities");
        // Ordena os municípios em ordem alfabética
        const sorted = res.data.sort((a, b) => a.name.localeCompare(b.name));
        setMunicipalities(sorted);
      } catch (error) {
        console.error("Falha ao buscar municípios para o cabeçalho:", error);
      }
    };
    fetchMunicipalities();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/50 backdrop-blur-lg border-b border-white/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={"/"}>
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
                <Image
                  src={"/logo.png"}
                  alt="Logo da ADETUR"
                  width={80}
                  height={80}
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">ADETUR - Alta Mogiana</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavigationMenu>
                <NavigationMenuList>
                  {navigation.map((item) =>
                    item.name === "Municípios" ? (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuTrigger className="bg-transparent hover:text-white text-sm font-medium">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-white border-0 ">
                          <ul className="grid w-[200px] gap-3 p-4 ">
                            <li className="hover:text-white">
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/municipios"
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    Ver todos
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            {municipalities.map((municipality) => (
                              <li
                                key={municipality.id}
                                className="hover:text-white"
                              >
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={`/municipios/${municipality.slug}`}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {municipality.name}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuLink
                          href={item.href}
                          className="bg-transparent hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ),
                  )}
                </NavigationMenuList>
              </NavigationMenu>
              {/* Controles de Acessibilidade */}
              <div className="border-l border-slate-300 dark:border-white/20 pl-2 ml-2">
                <AccessibilityControls />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:bg-white/20"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-lg rounded-lg mt-2 border border-white/20">
              {navigation.map((item) =>
                item.name === "Municípios" ? (
                  <Accordion
                    key={item.name}
                    type="single"
                    collapsible
                    className="w-full"
                  >
                    <AccordionItem
                      value="municipalities"
                      className="border-b-0"
                    >
                      <AccordionTrigger className="hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-white/10 hover:no-underline">
                        {item.name}
                      </AccordionTrigger>
                      <AccordionContent className="pl-6 pr-2 pb-0">
                        <div className="flex flex-col space-y-1">
                          <Link
                            href="/municipios"
                            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Ver todos
                          </Link>
                          {municipalities.map((municipality) => (
                            <Link
                              key={municipality.id}
                              href={`/municipios/${municipality.slug}`}
                              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {municipality.name}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ),
              )}
              {/* Controles de Acessibilidade para Mobile */}
              <div className="border-t border-slate-300/50 dark:border-white/20 mt-4 pt-4 flex justify-center">
                <AccessibilityControls />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
