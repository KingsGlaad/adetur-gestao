"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function MobileMenu() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button className="md:hidden p-2" aria-label="Menu">
          <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
          <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
          <div className="w-6 h-0.5 bg-foreground"></div>
        </button>
      </DrawerTrigger>
      <DrawerContent className="h-full">
        <div className="mx-auto w-full max-w-sm h-full">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <nav className="flex flex-col gap-4">
              <DrawerClose asChild>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Início
                </Link>
              </DrawerClose>
              <DrawerClose asChild>
                <Link
                  href="/quem-somos"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Quem somos
                </Link>
              </DrawerClose>
              <DrawerClose asChild>
                <Link
                  href="/municipios"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Municípios
                </Link>
              </DrawerClose>
            </nav>
            <div className="flex flex-col gap-2 pt-4 border-t mt-4">
              <DrawerClose asChild>
                <Link href="/login" className="w-full">
                  <Button variant="ghost" className="w-full">
                    Entrar
                  </Button>
                </Link>
              </DrawerClose>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
