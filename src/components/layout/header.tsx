"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Municípios", href: "/municipios" },
    { name: "História", href: "/historia" },
    { name: "Faça parte", href: "#contato" },
  ];

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
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className=" hover:text-blue-500/80 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
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
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
