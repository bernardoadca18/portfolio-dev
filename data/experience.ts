// File: src/data/experience.ts
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  type: "trabalho" | "educação";
}

export const timeline: Experience[] = [
  {
    company: "Emive Grandes Projetos",
    role: "Técnico de TI / Infraestrutura",
    period: "Nov 2025 - Fev 2026",
    description: "Implementação de infraestrutura de larga escala, CFTV, Redes IP, monitoramento com Zabbix e virtualização com Proxmox.",
    type: "trabalho"
  },
  {
    company: "Freelance",
    role: "Desenvolvedor de Software Fullstack",
    period: "Dez 2023 - Presente",
    description: "Arquitetura e desenvolvimento de sistemas SaaS (ControlCar) e plataformas financeiras corporativas utilizando Next.js, Django e Spring Boot.",
    type: "trabalho"
  },
  {
    company: "Centro Universitário Una",
    role: "Bacharelado em Ciência da Computação",
    period: "Jan 2022 - Dez 2025",
    description: "Formação acadêmica focada em fundamentos de computação, algoritmos e engenharia de software.",
    type: "educação"
  },
  {
    company: "IGTI",
    role: "Desenvolvimento de Software",
    period: "Mai 2021 - Jul 2021",
    description: "Imersão técnica em desenvolvimento frontend e backend.",
    type: "educação"
  }
];
