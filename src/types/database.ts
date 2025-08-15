
export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
  created_at: string;
  updated_at: string;
  display_order: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image_url: string | null;
  github_url: string | null;
  live_url: string | null;
  category: 'fullstack' | 'ml' | 'automation' | 'web' |null;
  date: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
  display_order: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string | null;
  author: string;
  date: string;
  read_time: string;
  tags: string[];
  image_url: string | null;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
  display_order: number;
}
