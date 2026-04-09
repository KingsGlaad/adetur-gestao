import Signin from "@/components/Auth/Signin";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Entrar no Sistema",
};

export default function SignIn() {
  return (
    <>
      {/* Grid de fundo */}
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <Image
          src={"/images/grids/grid-02.svg"}
          alt="Grid de fundo"
          layout="fill"
          objectFit="cover"
          className="opacity-50 dark:opacity-30"
        />
      </div>

      {/* Contêiner para centralizar o card */}
      <main className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-5xl rounded-xl bg-card shadow-lg border border-border">
          <div className="flex flex-wrap items-center">
            {/* Coluna do Formulário */}
            <div className="w-full xl:w-1/2">
              <div className="w-full p-8 sm:p-12 xl:p-14">
                <Signin />
              </div>
            </div>

            {/* Coluna de Boas-vindas */}
            <div className="hidden w-full xl:block xl:w-1/2 p-8">
              <div className="custom-gradient-1 dark:bg-muted overflow-hidden rounded-2xl px-10 pt-10">
                <Link className="mb-10 inline-block" href="/">
                  <Image
                    src={"/logo.png"}
                    priority
                    alt="Logo"
                    width={176}
                    height={32}
                  />
                </Link>
                <p className="mb-3 text-xl font-medium text-foreground">
                  Entrar na sua conta
                </p>

                <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                  Bem-vindo de volta!
                </h1>

                <p className="w-full max-w-[375px] font-medium text-muted-foreground">
                  Para acessar o sistema, por favor, insira suas credenciais de
                  login.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
