"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class" enableSystem={false}>
      <TooltipProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
