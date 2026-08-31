"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  variant?: "ghost" | "outline" | "default";
  align?: "start" | "center" | "end";
}

export function ThemeToggle({
  className,
  variant = "ghost",
  align = "end",
}: ThemeToggleProps) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant={variant}
        size="sm"
        className={cn(
          "w-9 h-9 p-0 hover:bg-black/10 dark:hover:bg-white/10 rounded-full",
          className
        )}
        aria-label="Alternar tema"
      >
        <Sun className="h-5 w-5 opacity-70" />
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          size="sm"
          className={cn(
            "w-9 h-9 p-0 hover:bg-black/10 dark:hover:bg-white/10 rounded-full relative",
            className
          )}
          aria-label="Alternar tema"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-sky-400" />
          <span className="sr-only">Alternar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className="bg-popover border-border">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={cn("cursor-pointer", theme === "light" && "font-bold text-primary")}
        >
          <Sun className="mr-2 h-4 w-4 text-amber-500" />
          <span>Claro</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={cn("cursor-pointer", theme === "dark" && "font-bold text-primary")}
        >
          <Moon className="mr-2 h-4 w-4 text-sky-400" />
          <span>Escuro</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={cn("cursor-pointer", theme === "system" && "font-bold text-primary")}
        >
          <span className="mr-2 text-xs">💻</span>
          <span>Sistema</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
