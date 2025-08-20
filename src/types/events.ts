export type Event = {
  id: string | null;
  title: string | null;
  description?: string | null;
  date: Date | null;
  image: string | null;
  municipalityId?: string | null;
  municipality?: {
    name: string | null;
  };
};
