export interface Transparency {
  id: string;
  title: string;
  description?: string | null;
  fileUrl: string;
  category?: string | null;
  active: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
}
