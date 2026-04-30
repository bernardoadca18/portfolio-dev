// File: app/about/page.tsx
'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Timeline } from '@/components/sections/Timeline';
import { pt } from '@/locales/pt';
import { Coffee, Code, Server, Gamepad2, BrainCircuit } from 'lucide-react';

export default function AboutPage() {
  const t = pt.about;

  const corePillars = [
    {
      title: "Infraestrutura & Redes",
      icon: <Server className="w-6 h-6 text-brand-secondary" />,
      text: "Minha base em TI me deu uma compreensão profunda de como o software interage com o hardware. Virtualização, redes e segurança são pilares que tornam meu código backend mais resiliente."
    },
    {
      title: "Fullstack Mastery",
      icon: <Code className="w-6 h-6 text-brand-primary" />,
      text: "Do Spring Boot ao Next.js, busco a excelência tanto no backend quanto no frontend, sempre focando em arquiteturas limpas e escaláveis."
    },
    {
      title: "Game Development",
      icon: <Gamepad2 className="w-6 h-6 text-emerald-400" />,
      text: "A lógica de jogos me ensinou a lidar com estados complexos, performance em tempo real e interfaces altamente interativas e ricas."
    },
    {
      title: "IA & Automação",
      icon: <BrainCircuit className="w-6 h-6 text-amber-400" />,
      text: "Integro modelos de linguagem e pipelines generativos para elevar a produtividade e criar experiências de usuário inteligentes."
    }
  ];

  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Intro Section */}
        <div className="grid gap-16 lg:grid-cols-2 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold md:text-5xl mb-8">Conectando os <span className="text-gradient">Pontos</span></h1>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                Bacharel em Ciência da Computação pela UNA, minha jornada na tecnologia começou na base: lidando com servidores, redes IP e segurança física. Essa experiência de &quot;campo&quot; moldou minha visão como desenvolvedor, permitindo-me projetar sistemas que não são apenas bonitos visualmente, mas robustos por baixo do capô.
              </p>
              <p>
                Como Desenvolvedor Freelancer, liderei a concepção de arquiteturas SaaS complexas, unindo o ecossistema Python (Django) com a agilidade do Next.js. Além disso, minha paixão por GameDev me trouxe competências únicas em lógica procedural e otimização.
              </p>
              <p>
                Hoje, unifico essas vertentes — Infra, Web e Games — para construir a próxima geração de aplicações inteligentes e imersivas.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {corePillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl glass border-white/5 hover:border-brand-primary/20 transition-all"
              >
                <div className="mb-4">{pillar.icon}</div>
                <h3 className="font-bold mb-2 text-white">{pillar.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">{t.timeline}</h2>
            <div className="w-20 h-1.5 bg-brand-primary mx-auto mt-4 rounded-full" />
          </div>
          
          <Timeline />
        </div>
      </div>

      <Footer />
    </main>
  );
}
