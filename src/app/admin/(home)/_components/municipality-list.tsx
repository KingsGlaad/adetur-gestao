import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";

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
    <Card>
      <CardHeader>
        <CardTitle>Municípios</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {municipalities.map((municipality) => (
            <div key={municipality.id} className="flex items-center gap-4">
              {municipality.coatOfArms && (
                <Image
                  src={municipality.coatOfArms}
                  alt={`Brasão de ${municipality.name}`}
                  className="h-12 w-12 rounded-lg object-cover"
                  width={100}
                  height={100}
                />
              )}
              <div className="flex-1">
                <p className="font-medium">{municipality.name}</p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>{municipality.highlights.length} atrações</span>
                  <span>{municipality.events.length} eventos</span>
                  <span>{municipality.guides.length} guias</span>
                </div>
                {municipality.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {municipality.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
