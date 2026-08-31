import "@/css/style.css";

import { AppSidebar } from "@/components/admin/sidebar/app-sidebar";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";
import { ThemeToggle } from "@/components/admin/theme-toggle";

export const metadata: Metadata = {
  title: {
    template: "%s | ADETUR - Agencia de Desenvolvimento do Turismo",
    default: "ADETUR - Agencia de Desenvolvimento do Turismo",
  },
  description:
    "Sistema de Gestão da ADETUR - Agencia de Desenvolvimento do Turismo",
};

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <Providers>
      <div className="flex min-h-screen w-full bg-background text-foreground">
        <AppSidebar />
        <SidebarInset className="bg-background">
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-muted bg-muted/50 px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/admin">ADETUR</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dashboard</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <ThemeToggle />
            </div>
          </header>
          <main className="p-4 md:p-6 lg:p-10 flex flex-1 flex-col gap-4 bg-muted/50">
            {children}
          </main>
        </SidebarInset>
      </div>
    </Providers>
  );
}
