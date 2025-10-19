"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Contrast, Minus, Plus } from "lucide-react";

export function AccessibilityControls() {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(100); // Base font size in percent

  // High Contrast Toggle
  useEffect(() => {
    if (isHighContrast) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  }, [isHighContrast]);

  // Font Size Adjustment
  useEffect(() => {
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
    </div>
  );
}