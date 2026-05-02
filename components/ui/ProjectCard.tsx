// File: components/ui/ProjectCard.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Badge } from './Badge';
import { Project } from '@/types';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();
  const pjT = t.projects;

  const categoryLabel = pjT[project.category as keyof typeof pjT] || project.category;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[2.5rem] glass p-4 transition-all hover:shadow-2xl hover:shadow-brand-primary/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
           <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
              <ArrowUpRight className="text-white w-6 h-6" />
           </div>
        </div>
      </div>

      <div className="p-6 pt-8">
        <div className="mb-6 flex items-center justify-between">
          <Badge variant={project.status === 'Concluído' ? 'secondary' : 'primary'}>
            {project.status}
          </Badge>
          <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-[0.2em]">{categoryLabel}</span>
        </div>

        <h3 className="mb-4 text-2xl font-bold tracking-tight group-hover:text-brand-primary transition-colors leading-tight">
          {project.title}
        </h3>
        
        <p className="mb-8 text-sm text-slate-400 leading-relaxed font-light line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-10">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="text-[10px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 font-medium">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] px-2 py-1 text-slate-600 font-bold uppercase tracking-tighter">
              +{project.technologies.length - 4} More
            </span>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="flex items-center justify-center gap-2 w-full py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all rounded-2xl border border-white/10 bg-white/5 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white group-active:scale-[0.98]"
        >
          {pjT.details}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
};

