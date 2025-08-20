"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Highlight } from "@/types/highligth";
import { X } from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

type HighlightDrawerProps = {
  highlight: Highlight;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function HighlightDrawer({
  highlight,
  open,
  onOpenChange,
}: HighlightDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent className="w-1/2 h-[100dvh] rounded-none">
        <div className="mx-auto w-full">
          <DrawerHeader className="border-b pb-4">
            <div className="flex items-center justify-between">
              <DrawerTitle className="text-2xl font-bold">
                Detalhes do Destaque
              </DrawerTitle>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Fechar</span>
                </Button>
              </DrawerClose>
            </div>
            <DrawerDescription>
              Visualize as informações detalhadas do destaque.
            </DrawerDescription>
          </DrawerHeader>

          <ScrollArea className="h-[calc(100dvh-120px)]">
            <div className="p-6 space-y-6">
              <div className="flex flex-col space-y-2">
                <Image
                  src={highlight.images || "/images/no-image.jpg"}
                  alt={highlight.title || "Destaque"}
                  width={400}
                  height={200}
                  className="object-cover rounded-md"
                />
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Título:
                  </h3>
                  <p className="text-lg font-medium">{highlight.title}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Descrição:
                  </h3>
                  <p className="text-lg font-medium">{highlight.description}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Município:
                  </h3>
                  <p className="text-lg font-medium">
                    {highlight.municipality?.name || "Nenhum"}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Data de Publicação:
                  </h3>
                  <p className="text-lg font-medium">
                    {highlight.createdAt
                      ? format(highlight.createdAt, "PPP", { locale: ptBR })
                      : "Data não disponível"}
                  </p>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
