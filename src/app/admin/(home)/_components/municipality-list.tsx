import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin, Building2, Users, Star } from "lucide-react";

interface MunicipalityListProps {
  municipalities: {
    id: string;
    name: string;
    description: string | null;
    coatOfArms: string | null;
    users: {
      id: string;
      name: string | null;
      email: string;
    }[];
    highlights: {
      id: string;
    }[];
    events: {
      id: string;
    }[];
    guides: {
      id: string;
    }[];
  }[];
}

export function MunicipalityList({ municipalities }: MunicipalityListProps) {
  return (
    <Card className="col-span-1 border-b border-primary/20 bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 p-4 text-lg">
          <Building2 className="h-5 w-5 text-primary" />
          Municípios
        </CardTitle>
        <CardDescription>
          Gerencie os municípios e suas atrações.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-6">
            {municipalities.map((municipality) => (
              <div
                key={municipality.id}
                className="group flex flex-col gap-3 rounded-lg p-2 transition-colors hover:bg-primary/20"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 rounded-lg border border-border shadow-sm">
                    {municipality.coatOfArms ? (
                      <AvatarImage
                        src={municipality.coatOfArms}
                        alt={municipality.name}
                        className="object-cover"
                      />
                    ) : (
                      <AvatarFallback className="rounded-lg">
                        {municipality.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold leading-none">
                        {municipality.name}
                      </p>
                      <Badge variant="secondary" className="font-normal">
                        {municipality.highlights.length +
                          municipality.events.length}{" "}
                        Atv.
                      </Badge>
                    </div>
                    {municipality.description && (
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {municipality.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pl-16">
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground bg-muted p-1 px-2 rounded-full">
                    <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                    {municipality.highlights.length} Atrações
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground bg-muted p-1 px-2 rounded-full">
                    <MapPin className="h-3 w-3 text-sky-500" />
                    {municipality.events.length} Eventos
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground bg-muted p-1 px-2 rounded-full">
                    <Users className="h-3 w-3 text-emerald-500" />
                    {municipality.guides.length} Guias
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
