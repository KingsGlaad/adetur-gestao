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
        <div className="w-full max-w-5xl rounded-[10px] bg-blue-100/30 shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="flex flex-wrap items-center">
            {/* Coluna do Formulário */}
            <div className="w-full xl:w-1/2">
              <div className="w-full p-4 sm:p-12.5 xl:p-15">
                <Signin />
              </div>
            </div>

            {/* Coluna de Boas-vindas */}
            <div className="hidden w-full p-7.5 xl:block xl:w-1/2">
              <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">
                <Link className="mb-10 inline-block" href="/">
                  <Image
                    className="dark:hidden"
                    src={"/logo.png"}
                    alt="Logo"
                    width={176}
                    height={32}
                  />
                </Link>
                <p className="mb-3 text-xl font-medium text-black dark:text-white">
                  Entrar na sua conta
                </p>

                <h1 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-heading-3">
                  Bem-vindo de volta!
                </h1>

                <p className="w-full max-w-[375px] font-medium text-black-4 dark:text-black">
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
