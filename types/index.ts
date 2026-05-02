// File: types/index.ts

export type Category = 'fullstack' | 'gamedev' | 'ai' | 'infra';

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription?: string; // Content is moving to MDX
  mdxSource?: string; // For MDX content
  category: Category;
  technologies: string[];
  imageUrl: string;
  mediaUrls?: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "Concluído" | "Em andamento";
  role: string;
  highlights: string[];
  architecture?: string;
  challenges?: string;
  aiIntegration?: string;
  credentials?: {
    user: string;
    pass: string;
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  type: "trabalho" | "educação";
}
