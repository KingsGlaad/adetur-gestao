"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { VLibrasWidget } from "@/components/layout/VLibrasWidget";
import { AppDownloadModal } from "@/components/modals/AppDownloadModal";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen pt-[70px]">
      <Header />
      <main id="main-content" className="flex-1 flex flex-col">
        {children}
        <Footer />
      </main>
      <AppDownloadModal />
      <VLibrasWidget /> {/* Movido para fora do main para não ser afetado pelo filtro */}
    </div>
  );
}

