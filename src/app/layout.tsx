import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import VLibrasWidget from "@/components/layout/VLibrasWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADETUR - Agência de Desenvolvimento Turístico - Alta Mogiana",
  description: "Sistema de Gestão de Informações Turísticas da Região",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <body className={`${inter.className}`}>
          <ThemeProvider attribute="class" defaultTheme="ligth">
            <Toaster />
            {children}
            <VLibrasWidget />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
