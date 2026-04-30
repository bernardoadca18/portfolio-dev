// File: components/sections/ProjectGrid.tsx
'use client';

import React from 'react';
import { motion } from 'motion/react';
import { projects } from '@/data/projects';
import { pt } from '@/locales/pt';
import { ProjectCard } from '@/components/ui/ProjectCard';
import Link from 'next/link';

export const FeaturedProjects = () => {
  const t = pt.projects;
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-between gap-4 mb-16 md:flex-row md:items-end">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold md:text-4xl">{t.title}</h2>
          <div className="w-20 h-1.5 bg-brand-primary mt-4 rounded-full" />
        </div>
        <Link href="/projects" className="text-sm font-semibold text-brand-primary hover:underline">
          {pt.hero.cta_projects} →
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
