import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CalendarDays, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface RecentEventsProps {
  events: {
    id: string;
    title: string;
    description: string;
    date: Date;
    image: string | null;
  }[];
}

export function RecentEvents({ events }: RecentEventsProps) {
  return (
    <Card className="col-span-1 border-primary/20 bg-primary/5 p-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle className="flex items-center gap-2 text-lg">
            <CalendarDays className="h-5 w-5 text-primary" />
            Eventos Recentes
          </CardTitle>
          <CardDescription>
            Últimas atividades programadas na região.
          </CardDescription>
        </div>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/admin/events" className="text-xs">
            Ver todos
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-6">
            {events.length === 0 ? (
              <div className="flex h-[300px] flex-col items-center justify-center text-center">
                <p className="text-sm text-muted-foreground">
                  Nenhum evento recente encontrado.
                </p>
              </div>
            ) : (
              events.map((event) => (
                <div
                  key={event.id}
                  className="group flex gap-4 rounded-lg border border-transparent transition-all hover:bg-muted/50"
                >
                  <Avatar className="h-16 w-16 rounded-md border border-border shadow-sm">
                    {event.image ? (
                      <AvatarImage
                        src={event.image}
                        alt={event.title}
                        className="object-cover"
                      />
                    ) : (
                      <AvatarFallback className="rounded-md bg-muted">
                        <CalendarDays className="h-6 w-6 text-muted-foreground" />
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div className="flex flex-1 flex-col justify-center space-y-1">
                    <p className="line-clamp-1 text-sm font-semibold group-hover:text-primary">
                      {event.title}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">
                        {format(event.date, "dd 'de' MMMM", { locale: ptBR })}
                      </span>
                      <span>•</span>
                      <span>
                        {format(event.date, "yyyy", { locale: ptBR })}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
