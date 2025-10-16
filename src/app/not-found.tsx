import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center  bg-gray-50 text-center ">
        <div className="max-w-lg w-full">
          <Image
            src={"/404.png"}
            alt="Ilustração de página não encontrada"
            width={500}
            height={500}
            className="mx-auto"
            priority
          />
          <p className="text-lg text-gray-600 mb-8">
            Oops! Parece que a página que você está procurando não existe ou foi
            movida.
          </p>
          <Link href="/">
            <Button size="lg" className="hover:bg-amber-300/80 cursor-pointer mb-8">Voltar para a Página Inicial</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
