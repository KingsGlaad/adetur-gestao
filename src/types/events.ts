import { Municipality } from "./municipality";


export type Event = {
  id: string;
  title: string;
  description: string;
  date: Date;
  image: string | null;
  galleryImages?: EventWithImages[];
  municipalityId: string;
  Municipality?: {
    name: string;
  };
};

export interface EventWithImages {
  id: string;
  url: string;
  eventId: string;
  createdAt: Date;
}

export type EventWithRelations = Event & {
  Municipality: Pick<Municipality, "name" | "slug">;
};
