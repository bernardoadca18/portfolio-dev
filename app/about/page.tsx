// File: app/about/page.tsx
'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Timeline } from '@/components/sections/Timeline';
import { useTranslation } from '@/context/LanguageContext';
import { Code, Server, BrainCircuit, Globe, Database } from 'lucide-react';

export default function AboutPage() {
  const { t } = useTranslation();
  const aboutT = t.about;

  const corePillars = [
    {
      title: "Engenharia de Infraestrutura",
      icon: <Server className="w-6 h-6 text-brand-secondary" />,
      text: "Expertise profunda em administração de servidores Linux, redes IP e virtualização. Garanto que o software opere sobre bases resilientes e seguras."
    },
    {
      title: "Arquitetura Fullstack",
      icon: <Code className="w-6 h-6 text-brand-primary" />,
      text: "Domínio completo do ecossistema TypeScript e frameworks robustos (Next.js, Django, Spring Boot). Foco em performance e UX técnica."
    },
    {
      title: "Inteligência Artificial Aplicada",
      icon: <BrainCircuit className="w-6 h-6 text-amber-500" />,
      text: "Implementação de workflows inteligentes utilizando LLMs para otimizar processos de negócio e automação de serviços."
    },
    {
      title: "Dados & Confiabilidade",
      icon: <Database className="w-6 h-6 text-emerald-500" />,
      text: "Modelagem de dados complexos em PostgreSQL e monitoramento proativo via Zabbix/Grafana para ambientes críticos."
    }
  ];

  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pb-40">
        {/* Intro Section */}
        <div className="grid gap-16 lg:grid-cols-2 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold md:text-6xl mb-8 leading-tight">Engenharia e <span className="text-gradient">Infraestrutura</span></h1>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-light">
              <p>
                Sou Bacharel em Ciência da Computação com uma trajetória que percorre tanto o desenvolvimento de software quanto a gestão de infraestrutura crítica. Minha base técnica foi consolidada administrando servidores, redes e segurança, o que me permite projetar sistemas com uma visão realista sobre performance e confiabilidade.
              </p>
              <p>
                Tenho focado o desenvolvimento de soluções SaaS multi-tenant, lidando com desafios reais de isolamento de dados e escalabilidade. Atuo na construção de arquiteturas que suportam o crescimento de empresas sem comprometer a estabilidade ou a segurança das informações.
              </p>
              <p>
                Trabalho com tecnologias como Python (Django), Node.js, Java (Spring Boot) e React, sempre priorizando código limpo e manutenível. Meu objetivo é entregar sistemas que resolvam problemas de negócio de forma eficiente e escalável.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {corePillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-[2rem] glass border border-white/5 hover:border-brand-primary/30 transition-all group"
              >
                <div className="mb-5 p-3 rounded-2xl bg-white/5 w-fit group-hover:bg-brand-primary/10 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="font-bold mb-3 text-white text-lg">{pillar.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">{aboutT.timeline}</h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
          </div>
          
          <Timeline />
        </div>
      </div>

      <Footer />
    </main>
  );
}
