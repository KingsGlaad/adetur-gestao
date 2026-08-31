"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Sparkles, Smartphone, ArrowRight, QrCode } from "lucide-react";
import { AppQRCode } from "@/components/shared/AppQRCode";
import { Button } from "@/components/ui/button";

function GooglePlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor">
      <path fill="#4285F4" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 59.9.02.2z" />
      <path fill="#34A853" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
      <path fill="#FBBC04" d="M47 512c13 6.8 29.3 4.2 40.7-2.3l297.8-171.1-60.1-60.2L47 512z" />
      <path fill="#EA4335" d="M473.4 233.1L385.6 182l-60.2 60.2 60.2 60.2 87.8-50.6c14.6-8.4 23.6-23.7 23.6-40.4 0-16.6-9-31.9-23.6-40.3z" />
    </svg>
  );
}

function AppleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 170 170" fill="currentColor">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.66-7.83-11.87-14.36-5.74-8.89-10.22-19.3-13.43-31.25-3.21-11.94-4.82-23.2-4.82-33.79 0-14.44 3.73-26.65 11.18-36.64 7.45-9.98 17-15.08 28.66-15.31 4.79 0 10.13 1.25 16.03 3.76 5.89 2.5 9.77 3.82 11.64 3.96 1.52-.14 5.62-1.57 12.3-4.3 6.69-2.72 12.28-3.9 16.79-3.53 12.39.98 22.39 5.87 29.99 14.67-10.99 6.63-16.38 15.75-16.17 27.37.21 9.02 3.66 16.65 10.36 22.88 6.7 6.23 14.61 9.68 23.72 10.35-2.06 6.19-4.78 12.87-8.16 20.03zM119.22 31.84c0-7.39 2.66-14.38 7.98-20.97 5.32-6.59 12-10.58 20.04-11.97.22 1.3.33 2.49.33 3.58 0 7.28-2.79 14.36-8.37 21.24-5.58 6.88-12.44 10.87-20.58 11.97-.43-1.09-.6-2.37-.6-3.85h.02-.8z" />
    </svg>
  );
}

export function AppDownloadModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Exibe o pop-up com um pequeno atraso suave após o carregamento da página
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const androidDownloadUrl =
    process.env.NEXT_PUBLIC_PLAY_STORE_URL ||
    "https://play.google.com/store/apps";
  const iosDownloadUrl =
    process.env.NEXT_PUBLIC_APP_STORE_URL ||
    "https://www.apple.com/app-store/";

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      {/* Backdrop com desfoque */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Conteúdo do Modal */}
      <div className="relative w-full max-w-lg sm:max-w-xl bg-card border border-border text-card-foreground rounded-3xl shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-300 flex flex-col">
        {/* Botão Fechar */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 hover:bg-muted text-muted-foreground hover:text-foreground border border-border transition-colors"
          aria-label="Fechar pop-up"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Topo com gradiente ilustrativo */}
        <div className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 px-6 pt-7 pb-6 text-white text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white mb-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Aplicativo Oficial ADETUR</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
            Descubra a Alta Mogiana no seu Celular!
          </h2>
          <p className="text-xs sm:text-sm text-emerald-50 max-w-sm mx-auto mt-1">
            Tenha em mãos roteiros, atrativos turísticos, mapas e a programação completa de eventos.
          </p>
        </div>

        {/* Corpo do Pop-up */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            {/* Bloco QR Code */}
            <div className="sm:col-span-5 flex flex-col items-center justify-center text-center p-3 rounded-2xl bg-muted/40 border border-border/60">
              <AppQRCode size={120} />
              <p className="text-[11px] text-muted-foreground font-medium mt-2 flex items-center gap-1">
                <QrCode className="w-3.5 h-3.5 text-primary" />
                <span>Auto detecta <strong>Android / iOS</strong></span>
              </p>
            </div>

            {/* Bloco dos 2 Botões CTA */}
            <div className="sm:col-span-7 flex flex-col space-y-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Baixe gratuitamente:
              </p>

              {/* Botão 1: Google Play */}
              <a
                href={androidDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="popup-download-android"
                className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-800 shadow hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <div className="p-1 rounded-lg bg-white/10 group-hover:bg-white/15">
                  <GooglePlayIcon className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase text-zinc-400 font-medium leading-none">
                    Disponível no
                  </span>
                  <span className="text-sm font-bold text-white leading-tight">
                    Google Play
                  </span>
                </div>
              </a>

              {/* Botão 2: App Store */}
              <a
                href={iosDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="popup-download-ios"
                className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-800 shadow hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <div className="p-1 rounded-lg bg-white/10 group-hover:bg-white/15">
                  <AppleIcon className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase text-zinc-400 font-medium leading-none">
                    Baixar na
                  </span>
                  <span className="text-sm font-bold text-white leading-tight">
                    App Store
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Rodapé do Modal */}
          <div className="pt-2 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <Link
              href="/aplicativo"
              onClick={() => setIsOpen(false)}
              className="text-primary hover:underline font-semibold flex items-center gap-1"
            >
              <span>Ver detalhes do aplicativo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground text-xs h-8"
            >
              Continuar no site
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
