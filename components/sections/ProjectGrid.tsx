// File: components/sections/ProjectGrid.tsx
'use client';

import React from 'react';
import { motion } from 'motion/react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';

export const FeaturedProjects = () => {
  const { t } = useTranslation();
  const pjT = t.projects;
  const featured = projects.slice(0, 4);

  return (
    <section className="py-40 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-between gap-8 mb-20 md:flex-row md:items-end">
        <div className="text-center md:text-left">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-secondary mb-4 block">Engineered Solutions</span>
          <h2 className="text-4xl font-bold md:text-6xl tracking-tighter">{pjT.title}</h2>
        </div>
        <Link href="/projects" className="px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-full border border-white/10 hover:bg-white/5">
          {t.hero.cta_projects}
        </Link>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {featured.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

