import "@/css/style.css";

import { Sidebar } from "@/components/Layouts/sidebar";

import { Header } from "@/components/Layouts/header";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    template: "%s | ADETUR - Agencia de Desenvolvimento do Turismo",
    default: "ADETUR - Agencia de Desenvolvimento do Turismo",
  },
  description:
    "Sistema de Gestão da ADETUR - Agencia de Desenvolvimento do Turismo",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-Br" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="flex min-h-screen">
            <Sidebar />

            <div className="w-full bg-gray-2 dark:bg-[#020d1a]">
              <Header />

              <main className="isolate mx-auto w-full max-w-screen-2xl overflow-hidden p-4 md:p-6 2xl:p-10">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
