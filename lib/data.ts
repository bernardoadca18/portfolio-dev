export type Category = 'software' | 'game';

export interface Project {
  id: string;
  title: string;
  category: Category;
  role: string;
  timeline: string;
  summary: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  gallery: string[];
  links: {
    liveDemo?: string;
    github?: string;
    playGame?: string;
  };
  // Game specific
  lore?: string;
  coreMechanics?: string;
  enemyDesign?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  timeline: string;
  description: string;
  type: 'IT/Web' | 'GameDev';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  timeline: string;
}

export const personalInfo = {
  en: {
    name: "Bernardo Alves Aguiar da Cunha",
    role: "Software Engineer & Interactive Systems Developer",
    location: "Belo Horizonte, Minas Gerais, Brazil",
    email: "bernardoalvesaguiar16@gmail.com",
    phone: "+55 31 98862-0039",
    summary: "Software engineer and interactive systems developer with a proven track record in the full software development life cycle (SDLC), scalable architecture, and advanced game development. I architect robust enterprise solutions utilizing Java (Spring Boot) and Python (Django), alongside high-performance frontends in Next.js and React. In the interactive domain, I engineer complex, state-driven gameplay systems utilizing Godot and C#. My comprehensive background in IT infrastructure, networking, and cloud deployment ensures secure, highly available, and resilient applications.",
  },
  pt: {
    name: "Bernardo Alves Aguiar da Cunha",
    role: "Engenheiro de Software & Desenvolvedor de Sistemas Interativos",
    location: "Belo Horizonte, Minas Gerais, Brasil",
    email: "bernardoalvesaguiar16@gmail.com",
    phone: "+55 31 98862-0039",
    summary: "Engenheiro de software e desenvolvedor de sistemas interativos com histórico comprovado no ciclo de vida completo de desenvolvimento de software (SDLC), arquitetura escalável e desenvolvimento avançado de jogos. Projeto soluções corporativas robustas utilizando Java (Spring Boot) e Python (Django), além de frontends de alta performance em Next.js e React. No domínio interativo, desenvolvo sistemas de gameplay complexos e baseados em estado utilizando Godot e C#. Minha ampla experiência em infraestrutura de TI, redes e implantação em nuvem garante aplicações seguras, altamente disponíveis e resilientes.",
  }
};

export const skillsData = {
  en: {
    software: [
      {
        title: "Frontend",
        skills: ["Next.js", "React.js", "React Native", "TailwindCSS", "HTML", "CSS", "TypeScript", "JavaScript"]
      },
      {
        title: "Backend",
        skills: ["Java", "Spring Boot", "Python", "Django", "Flask", "Node.js", "C++"]
      },
      {
        title: "Databases & Architecture",
        skills: ["PostgreSQL", "MySQL", "Hibernate", "Prisma", "Django ORM", "RESTful APIs", "Clean Architecture", "Microservices"]
      },
      {
        title: "Cloud, DevOps & IT",
        skills: ["AWS", "Docker", "Docker Compose", "Git/GitHub", "TCP/IP", "Linux", "Windows", "Proxmox", "Zabbix", "Hardware", "CCTV"]
      }
    ],
    games: [
      {
        title: "Engines & Frameworks",
        skills: ["Godot", "Unity", "Unreal Engine", "GameMaker Studio 2", "Raylib", "Pygame"]
      },
      {
        title: "Languages",
        skills: ["C#", "C++", "Python"]
      },
      {
        title: "Tools & Concepts",
        skills: ["Blender", "Finite State Machines (FSM)", "AI Design", "Gameplay Architecture"]
      }
    ]
  },
  pt: {
    software: [
      {
        title: "Frontend",
        skills: ["Next.js", "React.js", "React Native", "TailwindCSS", "HTML", "CSS", "TypeScript", "JavaScript"]
      },
      {
        title: "Backend",
        skills: ["Java", "Spring Boot", "Python", "Django", "Flask", "Node.js", "C++"]
      },
      {
        title: "Bancos de Dados & Arquitetura",
        skills: ["PostgreSQL", "MySQL", "Hibernate", "Prisma", "Django ORM", "APIs RESTful", "Clean Architecture", "Microsserviços"]
      },
      {
        title: "Cloud, DevOps & TI",
        skills: ["AWS", "Docker", "Docker Compose", "Git/GitHub", "TCP/IP", "Linux", "Windows", "Proxmox", "Zabbix", "Hardware", "CFTV"]
      }
    ],
    games: [
      {
        title: "Engines & Frameworks",
        skills: ["Godot", "Unity", "Unreal Engine", "GameMaker Studio 2", "Raylib", "Pygame"]
      },
      {
        title: "Linguagens",
        skills: ["C#", "C++", "Python"]
      },
      {
        title: "Ferramentas & Conceitos",
        skills: ["Blender", "Máquinas de Estados Finitos (FSM)", "Design de IA", "Arquitetura de Gameplay"]
      }
    ]
  }
};

export const experienceData = {
  en: [
    {
      id: "exp-0",
      role: "Freelance Software Developer / Lead Software Engineer",
      company: "Independent",
      timeline: "Dec 2023 - Present",
      description: "I act as an architect and lead developer in complex software projects, from architecture conception to deployment and maintenance. I architected and developed a multi-tenant SaaS platform for auto repair shops (ControlCar) using Python (Django), Node.js, Prisma, and Next.js, orchestrated via Docker. I also implemented a secure RESTful API following Clean Architecture principles with Java (Spring Boot) and Spring Security (JWT) for a financial management platform.",
      type: "IT/Web" as const
    },
    {
      id: "exp-1",
      role: "Lead Interactive Systems Engineer",
      company: "Independent Studio",
      timeline: "Jan 2024 - Present",
      description: "I act as the lead engineer and sole developer for 'Profane Scourge', a sophisticated Dark Fantasy 2D action-platformer. I architected robust Finite State Machines (FSM) for complex AI behaviors and engineered highly optimized, scalable gameplay systems utilizing Godot and C#.",
      type: "GameDev" as const
    },
    {
      id: "exp-2",
      role: "Infrastructure & Systems Engineer",
      company: "Emive Grandes Projetos",
      timeline: "Nov 2025 - Feb 2026",
      description: "I engineered and deployed enterprise-grade IT infrastructure, including advanced CCTV systems, NVRs, and secure LAN/WLAN networks. I implemented Proxmox virtualization clusters and established comprehensive Zabbix monitoring protocols to ensure maximum uptime and operational security.",
      type: "IT/Web" as const
    }
  ],
  pt: [
    {
      id: "exp-0",
      role: "Desenvolvedor de Software Freelance / Engenheiro de Software Líder",
      company: "Independente",
      timeline: "Dez 2023 - Presente",
      description: "Eu atuo como arquiteto e desenvolvedor líder em projetos de software complexos, desde a concepção da arquitetura até a implantação e manutenção. Eu arquitetei e desenvolvi uma plataforma SaaS multi-tenant para oficinas mecânicas (ControlCar) usando Python (Django), Node.js, Prisma e Next.js, orquestrada via Docker. Eu também implementei uma API RESTful segura seguindo os princípios da Clean Architecture com Java (Spring Boot) e Spring Security (JWT) para uma plataforma de gestão financeira.",
      type: "IT/Web" as const
    },
    {
      id: "exp-1",
      role: "Engenheiro Líder de Sistemas Interativos",
      company: "Estúdio Independente",
      timeline: "Jan 2024 - Presente",
      description: "Eu atuo como engenheiro líder e desenvolvedor principal de 'Profane Scourge', um sofisticado jogo de ação e plataforma 2D Dark Fantasy. Eu arquitetei Máquinas de Estados Finitos (FSM) robustas para comportamentos complexos de IA e desenvolvi sistemas de gameplay altamente otimizados e escaláveis utilizando Godot e C#.",
      type: "GameDev" as const
    },
    {
      id: "exp-2",
      role: "Engenheiro de Infraestrutura e Sistemas",
      company: "Emive Grandes Projetos",
      timeline: "Nov 2025 - Fev 2026",
      description: "Eu projetei e implantei infraestrutura de TI de nível corporativo, incluindo sistemas avançados de CFTV, NVRs e redes LAN/WLAN seguras. Eu implementei clusters de virtualização Proxmox e estabeleci protocolos abrangentes de monitoramento Zabbix para garantir o máximo de tempo de atividade (uptime) e segurança operacional.",
      type: "IT/Web" as const
    }
  ]
};

export const educationData = {
  en: [
    {
      id: "edu-1",
      institution: "Centro Universitário Una",
      degree: "Bachelor's in Computer Science",
      timeline: "Jan 2022 - Dec 2025"
    },
    {
      id: "edu-2",
      institution: "IGTI",
      degree: "Software Development Course",
      timeline: "May 2021 - Jul 2021"
    }
  ],
  pt: [
    {
      id: "edu-1",
      institution: "Centro Universitário Una",
      degree: "Bacharelado em Ciência da Computação",
      timeline: "Jan 2022 - Dez 2025"
    },
    {
      id: "edu-2",
      institution: "IGTI",
      degree: "Curso de Desenvolvimento de Software",
      timeline: "Mai 2021 - Jul 2021"
    }
  ]
};

export const certifications = [
  "HCSA-VMS/Access Control/Alarm",
  "AWS Academy Cloud Foundations"
];

export const projectsData: Record<string, Project[]> = {
  en: [
    {
      id: "profane-scourge",
      title: "Profane Scourge",
      category: "game" as Category,
      role: "Lead Engineer & Designer",
      timeline: "Jan 2024 - Present",
      summary: "I engineered a sophisticated Dark Fantasy 2D action-platformer using Godot and C#. I prioritized tactical combat mechanics and highly scalable FSM-driven artificial intelligence.",
      description: "I engineered Profane Scourge, an advanced 2D action-platformer that prioritizes deliberate, tactical combat systems over conventional fast-paced mechanics. I leveraged complex state management to govern enemy AI and player interactions, requiring strategic positioning, resource management, and precise execution.",
      techStack: ["Godot", "C#", "FSM", "Blender"],
      thumbnail: "https://picsum.photos/seed/profane-scourge/800/600",
      gallery: [
        "https://picsum.photos/seed/ps-1/800/600",
        "https://picsum.photos/seed/ps-2/800/600",
        "https://picsum.photos/seed/ps-3/800/600"
      ],
      links: {
        playGame: "#",
        github: "#"
      },
      lore: "Set in a plagued world where the line between humanity and monstrosity has blurred. You play as Gideon 'The Cleaner', tasked with purging the corrupted remnants of a fallen kingdom.",
      coreMechanics: "Protagonist (Gideon 'The Cleaner'): Heavy/Tactical Warrior. Utilizes an Iron Shield for blocking and parrying instead of extreme agility. Replaces classic magic with survival tools (bear traps, boiling oil). Built with a complex Godot C# FSM architecture (Idle, Run, Jump, Attack, Block, Parry).",
      enemyDesign: "Enemy ('The Sower'): A mutated villager with a branch-like ribcage. Acts as a slow Grappler. Teaches the player not to turtle behind the shield by using an unblockable 'Hug' grab attack that must be dodged or interrupted."
    },
    {
      id: "connect-pro",
      title: "ConnectPro",
      category: "software" as Category,
      role: "Software Architect",
      timeline: "2023",
      summary: "I architected a services connection platform linking companies with MEI providers, featuring real-time geolocation and WebSockets chat.",
      description: "I architected and developed ConnectPro, a comprehensive platform connecting companies with MEI service providers. I solved complex challenges by modeling a PostgreSQL database with PostGIS to enable real-time geolocation tracking. I structured unified user profiles, implemented a real-time chat system using WebSockets, and built a robust rating engine to ensure service quality.",
      techStack: ["Java", "Spring Boot", "Next.js", "React Native", "PostgreSQL", "PostGIS", "WebSockets"],
      thumbnail: "https://picsum.photos/seed/connectpro/800/600",
      gallery: [
        "https://picsum.photos/seed/cp-1/800/600",
        "https://picsum.photos/seed/cp-2/800/600"
      ],
      links: {}
    },
    {
      id: "torcidas-organizadas",
      title: "Torcidas Organizadas Management Platform",
      category: "software" as Category,
      role: "Software Architect & Data Modeler",
      timeline: "2023",
      summary: "I designed a complete multi-tenant ecosystem for football clubs with native e-commerce, RBAC, and content management.",
      description: "I acted as the Software Architect and Data Modeler for a complete multi-tenant ecosystem tailored for football clubs. I designed a robust, schema-based multi-tenant architecture in PostgreSQL to guarantee total data isolation between clubs. I specified and implemented complex modules, including a native e-commerce system, Role-Based Access Control (RBAC), and a comprehensive content management system.",
      techStack: ["Next.js", "React Native", "PostgreSQL", "AWS"],
      thumbnail: "https://picsum.photos/seed/torcidas/800/600",
      gallery: [
        "https://picsum.photos/seed/to-1/800/600",
        "https://picsum.photos/seed/to-2/800/600"
      ],
      links: {}
    },
    {
      id: "sjf-juristas",
      title: "SJF Juristas System",
      category: "software" as Category,
      role: "Full-Stack Developer",
      timeline: "2023",
      summary: "I developed a financial and management system for the legal sector, featuring complex loan approval flows and PIX integration.",
      description: "I developed a comprehensive financial and management system tailored for the legal sector. I created complex loan approval workflows, integrated PIX for instant payments, and implemented automated receipt processing using AWS S3 and MinIO. I built the entire ecosystem, including a secure backend, an administrative Web Dashboard, and a cross-platform Mobile App.",
      techStack: ["Spring Boot", "Next.js", "React Native", "JWT", "Docker", "AWS S3"],
      thumbnail: "https://picsum.photos/seed/sjf/800/600",
      gallery: [
        "https://picsum.photos/seed/sjf-1/800/600",
        "https://picsum.photos/seed/sjf-2/800/600"
      ],
      links: {}
    },
    {
      id: "control-car",
      title: "ControlCar",
      category: "software" as Category,
      role: "Full-Stack Developer",
      timeline: "2023",
      summary: "I implemented a multi-tenant SaaS platform for automotive fleets and workshops with native data isolation.",
      description: "I developed ControlCar, a multi-tenant SaaS platform designed for automotive fleets and workshops. I implemented a scalable SaaS architecture with native multi-tenant isolation to ensure data security across different workshops. I created comprehensive modules for managing customers, vehicles, and Service Orders (OS), streamlining the entire workshop workflow.",
      techStack: ["Python", "Django", "Next.js", "Prisma", "PostgreSQL", "Docker"],
      thumbnail: "https://picsum.photos/seed/controlcar/800/600",
      gallery: [
        "https://picsum.photos/seed/cc-1/800/600",
        "https://picsum.photos/seed/cc-2/800/600"
      ],
      links: {}
    },
    {
      id: "dev-brain",
      title: "Dev Brain",
      category: "software" as Category,
      role: "Front-End / Software Engineer",
      timeline: "2023",
      summary: "I built a visual productivity app featuring an infinite canvas with custom nodes for audio, video, and speech-to-text.",
      description: "I engineered Dev Brain, a visual productivity application acting as a 'second brain' using an infinite canvas interface. I built a highly interactive Canvas using React Flow, supporting custom nodes for audio, video, and speech-to-text functionalities. I implemented robust client-side storage utilizing IndexedDB and managed complex application state with Zustand.",
      techStack: ["Next.js", "React Flow", "IndexedDB", "Zustand", "TailwindCSS"],
      thumbnail: "https://picsum.photos/seed/devbrain/800/600",
      gallery: [
        "https://picsum.photos/seed/db-1/800/600",
        "https://picsum.photos/seed/db-2/800/600"
      ],
      links: {}
    },
    {
      id: "library-hub",
      title: "LibraryHub",
      category: "software" as Category,
      role: "Full-Stack Developer",
      timeline: "2023",
      summary: "I implemented a modern library management system with a solid Spring Boot backend and a responsive Vite-based interface.",
      description: "I developed LibraryHub, a modern library management system. I implemented a solid, secure backend utilizing Spring Boot with JWT authentication and Role-Based Access Control (RBAC). On the frontend, I built a highly responsive interface using React and Vite, enabling seamless catalog navigation and efficient CRUD operations for librarians.",
      techStack: ["Spring Boot", "React", "Vite", "JWT", "Swagger", "OpenAPI"],
      thumbnail: "https://picsum.photos/seed/libraryhub/800/600",
      gallery: [
        "https://picsum.photos/seed/lh-1/800/600",
        "https://picsum.photos/seed/lh-2/800/600"
      ],
      links: {}
    },
    {
      id: "orag",
      title: "oRAG",
      category: "software" as Category,
      role: "AI Engineer / Backend Developer",
      timeline: "2023",
      summary: "I built an intelligent AI engine for processing custom documents using advanced Retrieval-Augmented Generation (RAG) techniques.",
      description: "I engineered oRAG, an intelligent AI engine designed for processing and querying custom documents. I built robust document extraction pipelines and seamlessly connected them to Large Language Models (LLMs) utilizing advanced Retrieval-Augmented Generation (RAG) techniques. I also configured and deployed Webhooks to facilitate seamless AI integration with external services.",
      techStack: ["Python", "RAG", "Webhooks", "LLM APIs"],
      thumbnail: "https://picsum.photos/seed/orag/800/600",
      gallery: [
        "https://picsum.photos/seed/orag-1/800/600",
        "https://picsum.photos/seed/orag-2/800/600"
      ],
      links: {}
    }
  ],
  pt: [
    {
      id: "profane-scourge",
      title: "Profane Scourge",
      category: "game" as Category,
      role: "Engenheiro Líder & Designer",
      timeline: "Jan 2024 - Presente",
      summary: "Eu desenvolvi um sofisticado jogo de ação e plataforma 2D Dark Fantasy com Godot e C#. Eu priorizei mecânicas de combate tático e inteligência artificial altamente escalável baseada em FSM.",
      description: "Eu desenvolvi o Profane Scourge, um avançado jogo de ação e plataforma 2D que prioriza sistemas de combate táticos e deliberados em detrimento de mecânicas convencionais de ritmo acelerado. Eu utilizei gerenciamento de estado complexo para governar a IA dos inimigos e as interações do jogador, exigindo posicionamento estratégico, gerenciamento de recursos e execução precisa.",
      techStack: ["Godot", "C#", "FSM", "Blender"],
      thumbnail: "https://picsum.photos/seed/profane-scourge/800/600",
      gallery: [
        "https://picsum.photos/seed/ps-1/800/600",
        "https://picsum.photos/seed/ps-2/800/600",
        "https://picsum.photos/seed/ps-3/800/600"
      ],
      links: {
        playGame: "#",
        github: "#"
      },
      lore: "Situado em um mundo assolado por pragas onde a linha entre humanidade e monstruosidade se confundiu. Você joga como Gideon 'O Limpador', encarregado de expurgar os remanescentes corrompidos de um reino caído.",
      coreMechanics: "Protagonista (Gideon 'O Limpador'): Guerreiro Tático e Pesado. Utiliza um Escudo de Ferro para bloqueio e parry em vez de agilidade extrema. Substitui magia clássica por ferramentas de sobrevivência (óleo fervente, armadilhas). Construído com uma arquitetura complexa de FSM em Godot C# (Idle, Run, Jump, Attack, Block, Parry).",
      enemyDesign: "Inimigo ('O Semeador'): Um aldeão mutante. Age como um 'Grappler' lento. Ensina o jogador a não se esconder atrás do escudo através de um ataque de 'Abraço' inbloqueável que deve ser esquivado ou interrompido."
    },
    {
      id: "connect-pro",
      title: "ConnectPro",
      category: "software" as Category,
      role: "Arquiteto de Software",
      timeline: "2023",
      summary: "Eu arquitetei uma plataforma de conexão de serviços unindo empresas a prestadores MEI, com geolocalização em tempo real e chat via WebSockets.",
      description: "Eu arquitetei e desenvolvi o ConnectPro, uma plataforma abrangente que conecta empresas a prestadores de serviços MEI. Eu resolvi desafios complexos modelando um banco de dados PostgreSQL com PostGIS para permitir o rastreamento de geolocalização em tempo real. Eu estruturei perfis de usuário unificados, implementei um sistema de chat em tempo real usando WebSockets e construí um mecanismo de avaliação robusto para garantir a qualidade do serviço.",
      techStack: ["Java", "Spring Boot", "Next.js", "React Native", "PostgreSQL", "PostGIS", "WebSockets"],
      thumbnail: "https://picsum.photos/seed/connectpro/800/600",
      gallery: [
        "https://picsum.photos/seed/cp-1/800/600",
        "https://picsum.photos/seed/cp-2/800/600"
      ],
      links: {}
    },
    {
      id: "torcidas-organizadas",
      title: "Plataforma de Gestão de Torcidas Organizadas",
      category: "software" as Category,
      role: "Arquiteto de Software & Modelador de Dados",
      timeline: "2023",
      summary: "Eu projetei um ecossistema multi-tenant completo para clubes de futebol com e-commerce nativo, RBAC e gestão de conteúdo.",
      description: "Eu atuei como Arquiteto de Software e Modelador de Dados para um ecossistema multi-tenant completo adaptado para clubes de futebol. Eu projetei uma arquitetura multi-tenant robusta baseada em schemas no PostgreSQL para garantir total isolamento de dados entre os clubes. Eu especifiquei e implementei módulos complexos, incluindo um sistema de e-commerce nativo, Controle de Acesso Baseado em Funções (RBAC) e um sistema abrangente de gestão de conteúdo.",
      techStack: ["Next.js", "React Native", "PostgreSQL", "AWS"],
      thumbnail: "https://picsum.photos/seed/torcidas/800/600",
      gallery: [
        "https://picsum.photos/seed/to-1/800/600",
        "https://picsum.photos/seed/to-2/800/600"
      ],
      links: {}
    },
    {
      id: "sjf-juristas",
      title: "Sistema SJF Juristas",
      category: "software" as Category,
      role: "Desenvolvedor Full-Stack",
      timeline: "2023",
      summary: "Eu desenvolvi um sistema financeiro e de gestão para o setor jurídico, com fluxos complexos de aprovação de empréstimos e integração PIX.",
      description: "Eu desenvolvi um sistema financeiro e de gestão abrangente adaptado para o setor jurídico. Eu criei fluxos de trabalho complexos de aprovação de empréstimos, integrei o PIX para pagamentos instantâneos e implementei o processamento automatizado de recibos usando AWS S3 e MinIO. Eu construí todo o ecossistema, incluindo um backend seguro, um Dashboard Web administrativo e um aplicativo móvel multiplataforma.",
      techStack: ["Spring Boot", "Next.js", "React Native", "JWT", "Docker", "AWS S3"],
      thumbnail: "https://picsum.photos/seed/sjf/800/600",
      gallery: [
        "https://picsum.photos/seed/sjf-1/800/600",
        "https://picsum.photos/seed/sjf-2/800/600"
      ],
      links: {}
    },
    {
      id: "control-car",
      title: "ControlCar",
      category: "software" as Category,
      role: "Desenvolvedor Full-Stack",
      timeline: "2023",
      summary: "Eu implementei uma plataforma SaaS multi-tenant para frotas automotivas e oficinas com isolamento nativo de dados.",
      description: "Eu desenvolvi o ControlCar, uma plataforma SaaS multi-tenant projetada para frotas automotivas e oficinas. Eu implementei uma arquitetura SaaS escalável com isolamento nativo multi-tenant para garantir a segurança dos dados entre diferentes oficinas. Eu criei módulos abrangentes para gerenciar clientes, veículos e Ordens de Serviço (OS), otimizando todo o fluxo de trabalho da oficina.",
      techStack: ["Python", "Django", "Next.js", "Prisma", "PostgreSQL", "Docker"],
      thumbnail: "https://picsum.photos/seed/controlcar/800/600",
      gallery: [
        "https://picsum.photos/seed/cc-1/800/600",
        "https://picsum.photos/seed/cc-2/800/600"
      ],
      links: {}
    },
    {
      id: "dev-brain",
      title: "Dev Brain",
      category: "software" as Category,
      role: "Engenheiro Front-End / Software",
      timeline: "2023",
      summary: "Eu construí um aplicativo de produtividade visual com um canvas infinito e nós personalizados para áudio, vídeo e speech-to-text.",
      description: "Eu desenvolvi o Dev Brain, um aplicativo de produtividade visual atuando como um 'segundo cérebro' usando uma interface de canvas infinito. Eu construí um Canvas altamente interativo usando React Flow, suportando nós personalizados para funcionalidades de áudio, vídeo e speech-to-text. Eu implementei armazenamento robusto no lado do cliente utilizando IndexedDB e gerenciei estados complexos da aplicação com Zustand.",
      techStack: ["Next.js", "React Flow", "IndexedDB", "Zustand", "TailwindCSS"],
      thumbnail: "https://picsum.photos/seed/devbrain/800/600",
      gallery: [
        "https://picsum.photos/seed/db-1/800/600",
        "https://picsum.photos/seed/db-2/800/600"
      ],
      links: {}
    },
    {
      id: "library-hub",
      title: "LibraryHub",
      category: "software" as Category,
      role: "Desenvolvedor Full-Stack",
      timeline: "2023",
      summary: "Eu implementei um sistema moderno de gestão de bibliotecas com um backend sólido em Spring Boot e uma interface responsiva baseada em Vite.",
      description: "Eu desenvolvi o LibraryHub, um sistema moderno de gestão de bibliotecas. Eu implementei um backend sólido e seguro utilizando Spring Boot com autenticação JWT e Controle de Acesso Baseado em Funções (RBAC). No frontend, eu construí uma interface altamente responsiva usando React e Vite, permitindo navegação fluida no catálogo e operações CRUD eficientes para bibliotecários.",
      techStack: ["Spring Boot", "React", "Vite", "JWT", "Swagger", "OpenAPI"],
      thumbnail: "https://picsum.photos/seed/libraryhub/800/600",
      gallery: [
        "https://picsum.photos/seed/lh-1/800/600",
        "https://picsum.photos/seed/lh-2/800/600"
      ],
      links: {}
    },
    {
      id: "orag",
      title: "oRAG",
      category: "software" as Category,
      role: "Engenheiro de IA / Desenvolvedor Backend",
      timeline: "2023",
      summary: "Eu construí um motor de IA inteligente para processamento de documentos personalizados usando técnicas avançadas de RAG.",
      description: "Eu desenvolvi o oRAG, um motor de IA inteligente projetado para processar e consultar documentos personalizados. Eu construí pipelines robustos de extração de documentos e os conectei perfeitamente a Large Language Models (LLMs) utilizando técnicas avançadas de Retrieval-Augmented Generation (RAG). Eu também configurei e implantei Webhooks para facilitar a integração perfeita de IA com serviços externos.",
      techStack: ["Python", "RAG", "Webhooks", "LLM APIs"],
      thumbnail: "https://picsum.photos/seed/orag/800/600",
      gallery: [
        "https://picsum.photos/seed/orag-1/800/600",
        "https://picsum.photos/seed/orag-2/800/600"
      ],
      links: {}
    }
  ]
};

export const dictionary = {
  en: {
    nav: {
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      available: "Available for new opportunities",
      title1: "Engineering",
      title2: "Scalable Software",
      title3: "& Developing",
      title4: "Interactive Experiences",
      contact: "Contact Me",
      downloadCv: "Download CV",
      badgeFullstack: "Software",
      badgeDev: "Engineer",
      badgeIndie: "Interactive",
      profilePlaceholder: "Profile Image Placeholder",
    },
    skills: {
      title: "Technical Arsenal",
      subtitle: "A comprehensive toolkit spanning enterprise software architecture and advanced interactive game development.",
      software: "Software Engineering",
      softwareSub: "Architecture & Infrastructure",
      games: "Interactive Systems",
      gamesSub: "Design & Programming",
    },
    experience: {
      title: "Experience",
    },
    education: {
      title: "Education",
      certifications: "Certifications",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of my most impactful work across enterprise software engineering and interactive systems development.",
      all: "All Projects",
      software: "Software & Web",
      games: "Interactive",
      viewDetails: "View Details",
    },
    projectDetails: {
      back: "Back to Projects",
      overview: "Project Overview",
      lore: "Lore & Background",
      mechanics: "Core Mechanics",
      enemy: "Enemy Design",
      gallery: "Gallery",
      links: "Links",
      liveDemo: "Live Demo",
      playGame: "Play Game / Itch.io",
      github: "GitHub Repository",
      techStack: "Technologies Used",
    }
  },
  pt: {
    nav: {
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
    },
    hero: {
      available: "Disponível para novas oportunidades",
      title1: "Engenharia de",
      title2: "Software Escalável",
      title3: "& Desenvolvimento de",
      title4: "Experiências Interativas",
      contact: "Contate-me",
      downloadCv: "Baixar CV",
      badgeFullstack: "Engenheiro",
      badgeDev: "de Software",
      badgeIndie: "Sistemas",
      profilePlaceholder: "Espaço para Foto de Perfil",
    },
    skills: {
      title: "Arsenal Técnico",
      subtitle: "Um conjunto abrangente de ferramentas que abrange arquitetura de software corporativo e desenvolvimento avançado de sistemas interativos.",
      software: "Engenharia de Software",
      softwareSub: "Arquitetura & Infraestrutura",
      games: "Sistemas Interativos",
      gamesSub: "Design & Programação",
    },
    experience: {
      title: "Experiência",
    },
    education: {
      title: "Educação",
      certifications: "Certificações",
    },
    projects: {
      title: "Projetos em Destaque",
      subtitle: "Uma seleção dos meus trabalhos mais impactantes em engenharia de software corporativo e desenvolvimento de sistemas interativos.",
      all: "Todos os Projetos",
      software: "Software & Web",
      games: "Interativos",
      viewDetails: "Ver Detalhes",
    },
    projectDetails: {
      back: "Voltar aos Projetos",
      overview: "Visão Geral do Projeto",
      lore: "Lore & História",
      mechanics: "Mecânicas Principais",
      enemy: "Design de Inimigos",
      gallery: "Galeria",
      links: "Links",
      liveDemo: "Demo Ao Vivo",
      playGame: "Jogar / Itch.io",
      github: "Repositório GitHub",
      techStack: "Tecnologias Utilizadas",
    }
  }
};
