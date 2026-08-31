import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16">
        <div className="max-w-lg w-full space-y-6">
          <Image
            src={"/404.png"}
            alt="Ilustração de página não encontrada"
            width={420}
            height={420}
            className="mx-auto drop-shadow-md"
            priority
          />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Página Não Encontrada
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
            Oops! Parece que a página que você está procurando não existe ou foi
            movida para outro endereço.
          </p>
          <div className="pt-2">
            <Link href="/">
              <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 font-semibold rounded-xl shadow-md">
                Voltar para a Página Inicial
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
