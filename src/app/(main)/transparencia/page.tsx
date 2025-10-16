import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-15rem)] text-center px-4 bg-[#80a3ff]">
      <div className="max-w-md w-full">
        <Image
          src={"/breve.png"}
          alt="Página em construção"
          width={500}
          height={500}
          className="mx-auto mb-8"
          priority
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Estamos em Construção!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Esta página está sendo preparada com muito carinho e em breve estará
          disponível com novidades incríveis.
        </p>
        <Link href="/">
          <Button className="hover:bg-amber-300/80 cursor-pointer">Voltar para a Página Inicial</Button>
        </Link>
      </div>
    </div>
  );
}
