// File: app/projects/page.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { pt } from '@/locales/pt';

type Category = 'Todos' | 'Fullstack & Web' | 'GameDev' | 'IA & Dados' | 'Infra & DevOps';

export default function ProjectsPage() {
  const t = pt.projects;
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');

  const categories: { label: Category; value: string }[] = [
    { label: t.all as Category, value: 'Todos' },
    { label: t.fullstack as Category, value: 'fullstack' },
    { label: t.gamedev as Category, value: 'gamedev' },
    { label: t.ai as Category, value: 'ai' },
    { label: t.infra as Category, value: 'infra' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'Todos') return true;
    const catValue = categories.find(c => c.label === activeCategory)?.value;
    return project.category === catValue;
  });

  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold md:text-5xl mb-6">Meus <span className="text-gradient">Projetos</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Uma seleção de sistemas SaaS, jogos e soluções de IA desenvolvidos com foco em performance e inovação.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`relative px-6 py-2.5 text-sm font-medium transition-all rounded-full overflow-hidden ${
                activeCategory === cat.label
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white glass'
              }`}
            >
              {activeCategory === cat.label && (
                <motion.div
                  layoutId="active-cat"
                  className="absolute inset-0 bg-brand-primary -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
