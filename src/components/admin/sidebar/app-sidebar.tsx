"use client";

import * as React from "react";
import { Calendar, FileText, Home, MapPin, Star } from "lucide-react";

import { NavMain } from "@/components/admin/sidebar/nav-main";
import { NavUser } from "@/components/admin/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";
import Image from "next/image";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession();

  const user = {
    name: session?.user?.name || "Usuário",
    email: session?.user?.email || "usuario@adetur.com.br",
    avatar: session?.user?.image || "/images/default-user.png",
  };

  const navMain = [
    {
      title: "Dashboard",
      url: "/admin",
      icon: Home,
      isActive: true,
    },
    {
      title: "Postagens",
      url: "/admin/posts",
      icon: FileText,
    },
    {
      title: "Cidades",
      url: "/admin/cities",
      icon: MapPin,
      items: [
        {
          title: "Eventos",
          url: "/admin/events",
          icon: Calendar,
        },
        {
          title: "Destaques",
          url: "/admin/highlights",
          icon: Star,
        },
      ],
    },
  ];

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/admin">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Image src="/logo.png" alt="ADETUR" width={50} height={50} />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">ADETUR</span>
                  <span className="truncate text-xs">Gestão de Turismo</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
