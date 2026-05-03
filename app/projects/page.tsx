'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { useTranslation } from '@/context/LanguageContext';

type Category = 'Todos' | 'Fullstack & Web' | 'GameDev' | 'IA & Dados' | 'Infra & DevOps';

export default function ProjectsPage() {
  const { t } = useTranslation();
  const pjT = t.projects;
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');

  const categories: { label: Category; value: string }[] = [
    { label: pjT.all as Category, value: 'Todos' },
    { label: pjT.fullstack as Category, value: 'fullstack' },
    { label: pjT.gamedev as Category, value: 'gamedev' },
    { label: pjT.ai as Category, value: 'ai' },
    { label: pjT.infra as Category, value: 'infra' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'Todos') return true;
    const catValue = categories.find(c => c.label === activeCategory)?.value;
    return project.category === catValue;
  });

  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pb-40">
        <div className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold md:text-6xl mb-6 tracking-tight"
          >
            Portfólio <span className="text-gradient">Técnico</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto font-light text-lg"
          >
            Uma exibição de engenharia e software. Seleção de projetos focados em escalabilidade corporativa e infraestrutura robusta.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setActiveCategory(cat.label)}
              className={`relative px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-full overflow-hidden ${
                activeCategory === cat.label
                  ? 'text-white'
                  : 'text-slate-500 hover:text-white bg-slate-900/50 hover:bg-slate-800'
              }`}
            >
              {activeCategory === cat.label && (
                <motion.div
                  layoutId="active-cat-bg"
                  className="absolute inset-0 bg-brand-primary -z-10"
                  transition={{ type: 'spring', bounce: 0.1, duration: 0.5 }}
                />
              )}
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                key={project.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}

