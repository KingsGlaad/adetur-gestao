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
import { Event } from "@/types/events";
import { X } from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";

type EventDrawerProps = {
  event: Event;
  mode: "edit" | "view";
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function EventDrawer({
  event,
  open,
  onOpenChange,
}: Omit<EventDrawerProps, "mode">) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      {/* Alterado para 50% de largura */}
      <DrawerContent className="w-1/2 h-[100dvh] rounded-none">
        <div className="mx-auto w-full">
          <DrawerHeader className="border-b pb-4">
            <div className="flex items-center justify-between">
              <DrawerTitle className="text-2xl font-bold">
                Detalhes do Evento
              </DrawerTitle>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Fechar</span>
                </Button>
              </DrawerClose>
            </div>
            <DrawerDescription>
              Visualize as informações detalhadas do evento.
            </DrawerDescription>
          </DrawerHeader>

          <ScrollArea className="h-[calc(100dvh-120px)]">
            <div className="p-6 space-y-6">
              <div className="flex flex-col space-y-2">
                <Image
                  src={event.image || "/images/no-image.jpg"}
                  alt={event.title}
                  width={400}
                  height={200}
                  className="object-cover rounded-md"
                />
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Nome:
                  </h3>
                  <p className="text-lg font-medium">{event.title}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Descrição:
                  </h3>
                  <p className="text-lg font-medium">{event.description}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Data:
                  </h3>
                  <p className="text-lg font-medium">
                    {format(event.date, "dd/MM/yyyy")}
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
