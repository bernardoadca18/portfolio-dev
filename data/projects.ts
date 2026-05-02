// File: src/data/projects.ts

import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: "control-car",
    title: "ControlCar - SaaS para Oficinas",
    shortDescription: "Plataforma multi-tenant para gestão completa de oficinas mecânicas.",
    fullDescription: "Uma solução SaaS robusta desenvolvida para otimizar o fluxo de trabalho de oficinas mecânicas. Inclui gestão de Ordens de Serviço, controle de estoque, cadastro de clientes e faturamento. A arquitetura híbrida permite alta escalabilidade e performance.",
    category: "fullstack",
    technologies: ["Next.js", "Django", "Node.js", "Prisma", "Docker", "PostgreSQL"],
    imageUrl: "https://picsum.photos/seed/controlcar/800/600",
    mediaUrls: [
      "https://picsum.photos/seed/cc1/800/600",
      "https://picsum.photos/seed/cc2/800/600",
      "https://picsum.photos/seed/cc3/800/600"
    ],
    status: "Concluído",
    role: "Arquiteto & Desenvolvedor Principal",
    highlights: [
      "Arquitetura de microsserviços para escalabilidade horizontal.",
      "Multi-tenancy com isolamento de dados por organização.",
      "Interface responsiva e intuitiva focada na produtividade do mecânico."
    ],
    architecture: "Sistema distribuído utilizando Django para o core administrativo e Node.js para serviços de tempo real e microsserviços de inventário. A comunicação entre serviços é feita via RabbitMQ.",
    challenges: "O maior desafio foi implementar o isolamento de dados multi-tenant garantindo que nenhuma organização pudesse acessar dados de outra, mesmo em tabelas compartilhadas no PostgreSQL.",
    aiIntegration: "Utilização do Gemini para gerar automaticamente descrições de falhas técnicas com base em códigos de erro inseridos pelo mecânico.",
    credentials: {
      user: "admin@teste.com",
      pass: "123456"
    }
  },
  {
    slug: "procedural-rpg-engine",
    title: "RPG Procedural Engine (Godot + Houdini)",
    shortDescription: "Engine customizada para geração de masmorras procedurais e assets 3D via Houdini Engine.",
    fullDescription: "Desenvolvimento de uma pipeline que integra Houdini com Godot para gerar terrenos e estruturas complexas em tempo real, economizando centenas de horas de Level Design manual.",
    category: "gamedev",
    technologies: ["Godot", "C#", "Houdini", "Python", "GLSL Shaders"],
    imageUrl: "https://picsum.photos/seed/rpgproc/800/600",
    status: "Em andamento",
    role: "Lead Game Developer",
    highlights: [
      "Integração procedural de malhas via Houdini Engine.",
      "Algoritmos de pathfinding 3D customizados.",
      "Sistemas de biome-generation baseados em ruído de Perlin."
    ],
    architecture: "Sistema modular em C# dentro da Godot Engine, consumindo HDA (Houdini Digital Assets) para spawns dinâmicos de geometria.",
    challenges: "Sincronizar a geração de colisão em tempo real para malhas geradas proceduralmente sem impactar o frame rate."
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
