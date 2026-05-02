// File: types/index.ts

export type Category = 'fullstack' | 'gamedev' | 'ai' | 'infra';

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: Category;
  technologies: string[];
  imageUrl: string;
  mediaUrls?: string[]; // Added for gallery expansion
  liveUrl?: string;
  githubUrl?: string;
  status: "Concluído" | "Em andamento";
  role: string;
  highlights: string[];
  architecture?: string; // Detailed architecture section
  challenges?: string; // Challenges resolved
  aiIntegration?: string; // AI integration details
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
