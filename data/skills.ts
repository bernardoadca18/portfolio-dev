// File: src/data/skills.ts
export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Fullstack & Web",
    skills: ["Next.js", "React", "TypeScript", "Node.js", "Django", "Spring Boot", "TailwindCSS"]
  },
  {
    title: "Game Development",
    skills: ["Unity", "Godot", "C#", "Houdini", "Procedural Modeling", "Shader Lab"]
  },
  {
    title: "IA & Especialidades",
    skills: ["Gemini API", "Stable Diffusion", "ComfyUI", "LLM Integration", "TRELLIS2"]
  },
  {
    title: "Infra & DevOps",
    skills: ["Docker", "AWS", "Proxmox", "Linux Server", "Zabbix", "CFTV/IP Networking"]
  }
];
