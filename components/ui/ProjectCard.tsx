// File: components/ui/ProjectCard.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Badge } from './Badge';
import { Project } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';
import { pt } from '@/locales/pt';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const t = pt.projects;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl glass transition-all"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <Badge variant={project.status === 'Concluído' ? 'secondary' : 'primary'}>
            {project.status}
          </Badge>
          <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{project.category}</span>
        </div>

        <h3 className="mb-2 text-xl font-bold group-hover:text-brand-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="mb-6 text-sm text-slate-400 line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline">{tech}</Badge>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] text-slate-500">+{project.technologies.length - 4}</span>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-lg bg-white/5 hover:bg-brand-primary hover:text-white"
        >
          {t.details}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
};
