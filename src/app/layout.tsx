import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/providers/theme-provider";
import { NextAuthProvider } from "@/providers/session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADETUR - Agência de Desenvolvimento Turístico - Alta Mogiana",
  description: "Sistema de Gestão de Informações Turísticas da Região",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <NextAuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Toaster />
            {children}
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
