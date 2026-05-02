// File: src/data/projects.ts

import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: "control-car",
    title: "ControlCar - Ecossistema SaaS Multi-tenant",
    shortDescription: "Plataforma de alta performance para gestão de oficinas mecânicas com arquitetura escalável.",
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
    mdxSource: `
## Visão Geral

O **ControlCar** nasceu da necessidade de modernizar a gestão de oficinas mecânicas brasileiras. O projeto foca em três pilares: **Segurança de Dados**, **Performance de Operação** e **Escalabilidade**.

## Arquitetura Técnica

A solução utiliza uma abordagem híbrida de backend:
- **Core Administrativo:** Desenvolvido em Django para garantir rapidez no desenvolvimento de regras de negócio complexas.
- **Microservices de Inventário:** Implementados em Node.js para operações de alta concorrência e processamento de imagens.

### Diferenciais Implementados:
1. **Multi-tenancy Rígido:** Isolamento completo de dados utilizando esquemas de banco de dados e middlewares de segurança.
2. **Pipelines de CI/CD:** Deploy automatizado via Docker para ambientes de staging e produção.
3. **Dashboards Analíticos:** Visualização de KPIs da oficina em tempo real.

Integramos APIs de IA para auxiliar na sugestão de diagnósticos técnicos, elevando a oficina a um patamar de consultoria automotiva.
    `,
    architecture: "Sistema distribuído utilizando Django para o core administrativo e Node.js para serviços de tempo real e microsserviços de inventário. A comunicação entre serviços é feita via RabbitMQ.",
    challenges: "O maior desafio foi implementar o isolamento de dados multi-tenant garantindo que nenhuma organização pudesse acessar dados de outra, mesmo em tabelas compartilhadas no PostgreSQL.",
    aiIntegration: "Utilização do Gemini para gerar automaticamente descrições de falhas técnicas com base em códigos de erro inseridos pelo mecânico.",
    credentials: {
      user: "admin@teste.com",
      pass: "123456"
    }
  },
  {
    slug: "gestao-financeira",
    title: "Sistema de Gestão Financeira Corporativa",
    shortDescription: "API RESTful de alta segurança para controle de ativos e empréstimos utilizando Spring Boot.",
    fullDescription: "Desenvolvimento de uma API RESTful segura seguindo princípios de Clean Architecture. O sistema permite o controle rigoroso de transações financeiras, gestão de contratos de empréstimo e geração de relatórios detalhados.",
    category: "fullstack",
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "React.js", "PostgreSQL"],
    imageUrl: "https://picsum.photos/seed/finance/800/600",
    status: "Concluído",
    role: "Engenheiro Backend & Frontend",
    highlights: [
      "Implementação de autenticação robusta via JWT e Spring Security.",
      "Dashboards financeiros complexos com análise preditiva de fluxo de caixa.",
      "Arquitetura seguindo princípios SOLID para fácil manutenção."
    ],
    mdxSource: `
## Engenharia Financeira

Este projeto foi construído para lidar com transações sensíveis, onde a **Integridade de Dados** e **Auditoria** são mandatórias.

## Implementação

Utilizamos **Java 21 com Spring Boot 3**, aproveitando ao máximo as novas funcionalidades de concorrência. 

### Destaques do Backend:
- **Clean Architecture:** Separação clara entre as camadas de domínio, casos de uso e infraestrutura.
- **Segurança:** Implementação customizada do Spring Security para gerenciar permissões em granularidade fina.
- **Transactional Support:** Gerenciamento rigoroso de transações ACID para evitar inconsistências em transferências de valores.

### Frontend:
Dashboards construídos com React e shadcn/ui, proporcionando uma experiência de usuário focada em dados financeiros densos sem perder a legibilidade.
    `
  },
  {
    slug: "library-hub",
    title: "LibraryHub - Gestão e Automação de Acervos",
    shortDescription: "Plataforma SaaS full-stack para gestão escalável de bibliotecas, empréstimos e controle de acesso.",
    fullDescription: "Solução corporativa construída com ecossistema Spring Boot e React, estruturada sob princípios de Clean Architecture, segurança stateless via JWT e infraestrutura conteinerizada.",
    liveUrl: "https://library-nos79m5f2-bernardoadca18s-projects.vercel.app/",
    githubUrl: "https://github.com/bernardoadca18/LibraryHub",
    category: "fullstack",
    technologies: ["Java 21", "Spring Boot 3.4.1", "React 18", "PostgreSQL", "Docker", "JWT", "Zustand"],
    imageUrl: "/input_file_0.png",
    mediaUrls: [
      "/input_file_1.png",
      "/input_file_2.png",
      "/input_file_3.png"
    ],
    status: "Concluído",
    role: "Software Engineer Sênior",
    highlights: [
      "Arquitetura Clean com independência de camadas e persistência agnóstica (PostgreSQL/H2).",
      "Segurança rigorosa com RBAC (Role-Based Access Control) e políticas de 'Owner or Admin'.",
      "Alta performance em consultas utilizando Spring Data Projections e Caching nativo.",
      "Ecossistema DevOps completo com Docker Compose e builds otimizados em multi-stage."
    ],
    mdxSource: `
## Visão Geral do Projeto

O **LibraryHub** é uma plataforma SaaS projetada para a gestão de alta disponibilidade de ativos bibliográficos. O sistema foi arquitetado para mitigar complexidades de concorrência e garantir a integridade de dados em ambientes corporativos.

> **Infraestrutura de Demonstração:**
> - **Frontend:** Hospedado na Vercel para entrega de conteúdo estático otimizado.
> - **Backend / API:** [Endpoint de Produção](https://libraryhub-jyhm.onrender.com/api) hospedado no Render (tier gratuito).
> - **Nota:** Por utilizar instâncias gratuitas no backend, a aplicação pode levar alguns segundos para "acordar" no primeiro acesso (cold start).

## 1. Engenharia de Backend (Java / Spring Boot)

O backend segue os padrões da **Clean Architecture**, isolando regras de negócio da infraestrutura.

- **Stack:** Java 21 e Spring Boot 3.4.1.
- **Segurança (JWT):** Implementação stateless com algoritmo HMAC256. Filtros customizados interceptam requisições para validação e autorização dinâmica.
- **Role-Based Access Control (RBAC):** Definição de contextos de acesso para usuários e administradores, garantindo que operações críticas sejam restritas.
- **Performance:** Utilização estratégica de **Projections** para evitar o problema de N+1 e **Spring Cache (@Cacheable)** em endpoints de alto tráfego como o catálogo de livros.

## 2. Front-end Moderno (React / TypeScript)

A interface foi construída com foco em reatividade e tipos estritos, garantindo previsibilidade no fluxo de dados.

- **Estado Global:** Gerenciamento via **Zustand**, centralizando a sessão do usuário e preferências visuais de forma leve.
- **Camada de Rede:** Axios configurado com **Interceptors** para injeção automática de tokens e handling de expiração da sessão (Middleware approach).
- **Design System:** Prototipado com TailwindCSS v4, garantindo uma UI mobile-first e temas dinâmicos (Dark/Light).

## 3. Infraestrutura e DevOps

O projeto adota mentalidade **Infrastructure as Code (IaC)** para facilitar o deploy e escalabilidade.

- **Conteinerização:** Orquestração via \`docker-compose\` gerindo containers de banco (PostgreSQL), admin (pgAdmin) e aplicação (Spring/Node).
- **Otimização de Imagem:** Uso de **Multi-stage builds** no Dockerfile para reduzir a superfície de ataque e o tamanho final da imagem de produção.
- **Automation:** Scripts DDL/DML automatizados na inicialização para garantia de paridade entre ambientes de desenvolvimento e produção.

### Local Run:
Para executar o projeto localmente, certifique-se de ter o Docker instalado e configure o arquivo '.env' seguindo o exemplo fornecido no repositório. Em seguida, utilize o comando:
\`\`\`bash
docker-compose up --build
\`\`\`

### Diferenciais Técnicos:
1. **Concurrency Control:** Lógica de reserva de exemplares com travas no banco para evitar race conditions em empréstimos simultâneos.
2. **Histórico Relacional:** Rastreamento completo de devoluções e débitos técnicos.
    `,
    architecture: "Arquitetura monolítica modularizada seguindo Clean Architecture. Camada de persistência via Spring Data JPA com suporte a múltiplos perfis de banco de dados (Produção/Testes).",
    challenges: "Implementar uma lógica de empréstimo que suportasse alta concorrência sem permitir furos no inventário, resolvida através de transações isoladas e validações em nível de banco de dados.",
    credentials: {
      user: "user_test1",
      pass: "12345678"
    }
  },
  {
    slug: "dev-brain",
    title: "Dev Brain - AI-Powered Infinite Canvas",
    shortDescription: "Plataforma Local-First de organização visual com interface de infinite canvas e assistente de IA integrado.",
    fullDescription: "O Dev Brain é uma plataforma de produtividade projetada para o fluxo de trabalho de desenvolvedores e criadores. Substitui listas lineares por um grafo interativo bidimensional, permitindo a conexão de notas, mídias e inteligência artificial em um ecossistema visual unificado.",
    category: "ai",
    technologies: ["Next.js 15", "React 19", "Zustand", "@xyflow/react", "IndexedDB", "@google/genai", "Framer Motion", "Tailwind CSS"],
    imageUrl: "https://picsum.photos/seed/devbrain/1200/800",
    status: "Concluído",
    role: "Fullstack Engineer & UI/UX Designer",
    highlights: [
      "Arquitetura Local-First utilizando IndexedDB para persistência de dados de alta performance sem nuvem.",
      "Motor de animação e micro-interações fluidas com Framer Motion e Tailwind CSS v4.",
      "Sistema de gerenciamento de estado complexo com Zustand e suporte a Undo/Redo (Histórico).",
      "Integração multimodal: Transcrição de voz (Speech-to-Text) e gravação de áudio diretamente no canvas."
    ],
    mdxSource: `
## Visão Geral do Projeto

O **Dev Brain** é uma plataforma Local-First de produtividade e organização visual projetada especificamente para o fluxo de trabalho de desenvolvedores e criadores (ex: Game Design, Lore mapping, System Architecture). Baseado em uma interface de **Infinite Canvas** (Lona Infinita), o sistema substitui listas lineares por um grafo interativo bidimensional.

## 1. Arquitetura Core e Motor do Canvas

A aplicação foi construída sobre as fundações mais modernas do ecossistema React, exigindo um controle de estado e renderização extremamente otimizados.

- **Engine Gráfica:** Utiliza **React Flow (@xyflow/react)** para renderização performática de centenas de nós e arestas, suportando zoom, pan e navegação fluida.
- **Gerenciamento de Estado (Zustand):** Arquitetura dividida em stores complexos:
  - **useCanvasStore:** Gerencia coordenadas, conexões e dados em tempo real. Implementa um algoritmo customizado de **History Stack (Undo/Redo)** rastreando até 50 mutações estruturais.
  - **useFileSystemStore:** Gerencia uma árvore hierárquica de diretórios (File Tree) recursiva para múltiplos canvas isolados.

## 2. Arquitetura Local-First e Persistência

Para garantir privacidade absoluta, zero latência e funcionamento offline, o projeto adota uma abordagem **Local-First**.

- **IndexedDB Integrado:** Superando os limites do localStorage (5MB), o sistema utiliza a biblioteca **idb-keyval** para salvar gigabytes de dados estruturados diretamente no banco NoSQL do navegador.
- **Auto-Save Engine:** Implementação de debouncing inteligente (atraso estratégico) para salvar o estado assincronamente a cada mutação, prevenindo perda de dados sem onerar a thread principal.

## 3. Ecossistema Multi-Modal de Nós

O Dev Brain funciona como um agregador de formatos construído sobre APIs nativas do navegador.

- **Drag-and-Drop (DnD):** Módulo de tarefas implementado com **@dnd-kit/core**, utilizando algoritmos de matrizes de colisão para reordenação fluida.
- **AudioNode:** Consome a **MediaDevices API** para capturar e processar buffers de áudio diretamente da interface, gerando Blobs locais.
- **SpeechToTextNode:** Implementa a **Web Speech API** para ditado em tempo real, processando streams de voz com feedback visual imediato.

## 4. Design System e Algoritmos de UI

- **Engine de Hue Shifting:** Módulo matemático customizado capaz de transitar dinamicamente entre HEX, RGB, HSL e HSV. Alimenta a ferramenta "Hue Shifter", permitindo customização global da interface via CSS Variables em tempo de execução.
- **Integração IA:** Arquitetura preparada com o SDK do **Google Gemini (@google/genai)**, provendo um assistente contextual embutido diretamente no canvas.
    `,
    architecture: "Arquitetura Local-First baseada em Next.js e Zustand, utilizando IndexedDB (idb-keyval) como camada de persistência persistente no cliente. O canvas é alimentado pelo React Flow para renderização de grafos bidimensionais.",
    challenges: "Gerenciar o estado de centenas de nós simultâneos e garantir que a stack de Undo/Redo não consumisse memória excessiva, além de contornar os limites de armazenamento síncrono do browser.",
    aiIntegration: "Uso do Google Gemini para processar contextos extraídos dos nós do canvas, auxiliando em brainstormings e organização automática de ideias."
  }
];

