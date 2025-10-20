"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AccessibilityIcon, Contrast, Minus, Plus } from "lucide-react";
import Link from "next/link";

export function AccessibilityControls() {
  // Inicializa o estado a partir do localStorage, se disponível
  const [isHighContrast, setIsHighContrast] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("highContrast") === "true";
    }
    return false;
  });
  const [fontSize, setFontSize] = useState(() => {
    if (typeof window !== "undefined") {
      return Number(localStorage.getItem("fontSize")) || 100;
    }
    return 100;
  });

  // Aplica as classes e estilos e salva no localStorage sempre que o estado mudar
  useEffect(() => {
    localStorage.setItem("highContrast", String(isHighContrast));
    const mainContent = document.getElementById("main-content");
    if (isHighContrast) {
      mainContent?.classList.add("high-contrast");
    } else {
      mainContent?.classList.remove("high-contrast");
    }
  }, [isHighContrast]);
  
  useEffect(() => {
    localStorage.setItem("fontSize", String(fontSize));
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  const toggleContrast = () => {
    setIsHighContrast((prev) => !prev);
  };

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 10, 150)); // Max 150%
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 10, 80)); // Min 80%
  };

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={decreaseFontSize}
        aria-label="Diminuir fonte"
        className="hover:bg-black/10 dark:hover:bg-white/10"
      >
        <Minus className="h-5 w-5" />
        <span className="sr-only">A-</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={increaseFontSize}
        aria-label="Aumentar fonte"
        className="hover:bg-black/10 dark:hover:bg-white/10"
      >
        <Plus className="h-5 w-5" />
        <span className="sr-only">A+</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleContrast}
        aria-label="Alternar alto contraste"
        className="hover:bg-black/10 dark:hover:bg-white/10"
      >
        <Contrast className="h-5 w-5" />
        <span className="sr-only">Alto Contraste</span>
      </Button>
      <Link href="/acessibilidade" className="ml-2">
        <Button
          variant="ghost"
          size="sm"          
          aria-label="Página de acessibilidade"
          className="hover:bg-black/10 dark:hover:bg-white/10"
        >
          <span className="sr-only">Acessibilidade</span>
          <AccessibilityIcon className="h-5 w-5" />
        </Button>
      </Link>
    </div>
  );
}
