import { Municipality } from "./municipality";


export type Event = {
  id: string | null;
  title: string | null;
  description?: string | null;
  date: Date | null;
  image: string | null;
  galleryImages?: EventWithImages[] | null;
  municipalityId?: string | null;
  municipality?: {
    name: string | null;
  };
};

export interface EventWithImages {
  id: string;
  url: string;
  eventId: string;
  createdAt: Date;
}



export type EventWithRelations = Event & {
  municipality: Pick<Municipality, "name" | "slug">;
};
