// File: src/data/projects.ts

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "fullstack" | "gamedev" | "ai" | "infra";
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  status: "Concluído" | "Em andamento";
  role: string;
  highlights: string[];
  credentials?: {
    user: string;
    pass: string;
  };
}

export const projects: Project[] = [
  {
    slug: "control-car",
    title: "ControlCar - SaaS para Oficinas",
    shortDescription: "Plataforma multi-tenant para gestão completa de oficinas mecânicas.",
    fullDescription: "Uma solução SaaS robusta desenvolvida para otimizar o fluxo de trabalho de oficinas mecânicas. Inclui gestão de Ordens de Serviço, controle de estoque, cadastro de clientes e faturamento. A arquitetura híbrida permite alta escalabilidade e performance.",
    category: "fullstack",
    technologies: ["Next.js", "Django", "Node.js", "Prisma", "Docker", "PostgreSQL"],
    imageUrl: "https://picsum.photos/seed/controlcar/800/600",
    status: "Concluído",
    role: "Arquiteto & Desenvolvedor Principal",
    highlights: [
      "Arquitetura de microsserviços para escalabilidade horizontal.",
      "Multi-tenancy com isolamento de dados por organização.",
      "Interface responsiva e intuitiva focada na produtividade do mecânico."
    ],
    credentials: {
      user: "admin@teste.com",
      pass: "123456"
    }
  },
  {
    slug: "gestao-financeira",
    title: "Plataforma de Gestão Financeira",
    shortDescription: "Sistema corporativo para gestão de empréstimos e controle financeiro.",
    fullDescription: "Desenvolvimento de uma API RESTful segura seguindo princípios de Clean Architecture. O sistema permite o controle rigoroso de transações financeiras, gestão de contratos de empréstimo e geração de relatórios detalhados.",
    category: "fullstack",
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "React.js", "PostgreSQL"],
    imageUrl: "https://picsum.photos/seed/finance/800/600",
    status: "Concluído",
    role: "Desenvolvedor Backend & Frontend",
    highlights: [
      "Implementação de autenticação robusta via JWT.",
      "Dashboards financeiros complexos com Recharts.",
      "Arquitetura seguindo princípios SOLID e Clean Code."
    ]
  },
  {
    slug: "ai-content-generator",
    title: "IA Content Generator",
    shortDescription: "Pipeline de geração de assets e roteiros utilizando modelos Gemini e Stable Diffusion.",
    fullDescription: "Integração de LLMs e modelos generativos de imagem para automatizar a criação de conteúdo técnico e artístico. Utiliza prompts avançados e pipelines ComfyUI para prototipagem rápida de assets de jogos.",
    category: "ai",
    technologies: ["Python", "Google Gemini API", "Stable Diffusion", "ComfyUI", "React"],
    imageUrl: "https://picsum.photos/seed/ai/800/600",
    status: "Em andamento",
    role: "Especialista em IA",
    highlights: [
      "Otimização de prompts para geração de roteiros e diálogos.",
      "Pipelines de texturização procedural baseados em IA.",
      "Integração de modelos locais via API."
    ]
  },
  {
    slug: "multiplayer-backend-rpg",
    title: "Multiplayer RPG Backend",
    shortDescription: "Sistemas de inventário, leaderboards e economia in-game para jogos Unity/Godot.",
    fullDescription: "Backend robusto focado em jogos persistentes. Gerencia sistemas críticos como inventário de jogadores, lojas in-game, rankings globais e autenticação cross-platform.",
    category: "gamedev",
    technologies: ["C#", "Unity", "Django", "Spring Boot", "Docker"],
    imageUrl: "https://picsum.photos/seed/rpg/800/600",
    status: "Concluído",
    role: "Game Backend Engineer",
    highlights: [
      "Sincronização de estado de inventário distribuído.",
      "Proteção contra manipulação de dados via API altamente segura.",
      "Integração nativa com Unity e Godot."
    ]
  }
];
