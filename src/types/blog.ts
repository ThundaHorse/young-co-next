export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  category: string;
  featuredImage?: string;
  readingTime: number;
  slug: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
}
