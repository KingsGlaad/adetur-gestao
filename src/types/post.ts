export interface Post {
  id: string;
  title: string;
  content: string;
  subtitle?: string | null;
  slug?: string | null;
  altText?: string | null;
  published: boolean;
  coverImage?: string | null;
  createdAt: Date;
}
