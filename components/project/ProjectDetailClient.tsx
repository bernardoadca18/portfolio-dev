'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowLeft, Terminal, Layout, ShieldCheck, Brain } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { useTranslation } from '@/context/LanguageContext';
import { Project } from '@/types';
import { MDXRemote } from 'next-mdx-remote';

interface ProjectDetailClientProps {
  project: Project;
  children?: React.ReactNode;
}

export const ProjectDetailClient = ({ project, children }: ProjectDetailClientProps) => {
  const { t, language } = useTranslation();
  const pjT = t.projects;

  return (
    <div className="max-w-6xl mx-auto px-6 pb-32">
      <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-brand-primary mb-12 transition-all group">
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        {t.nav.projects}
      </Link>

      {/* Hero Header */}
      <div className="grid gap-12 lg:grid-cols-[1fr_400px] mb-20 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={project.status === 'Concluído' ? 'secondary' : 'primary'} className="rounded-full px-4 py-1">
              {project.status === 'Concluído' ? (language === 'pt' ? 'Concluído' : 'Completed') : (language === 'pt' ? 'Em progresso' : 'In Progress')}
            </Badge>
            <div className="h-1 w-1 rounded-full bg-slate-800" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">{project.role}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">{project.title}</h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl font-light">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-brand-primary hover:text-white transition-all shadow-xl shadow-white/5 active:scale-95">
                <ExternalLink className="w-4 h-4" />
                {pjT.demo}
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white/10 hover:border-white/20 transition-all active:scale-95">
                <Github className="w-4 h-4" />
                {pjT.github}
              </a>
            )}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
           <div className="p-8 rounded-[2rem] glass border border-white/[0.03] space-y-6">
              <div className="flex items-center gap-2 text-slate-400">
                <Terminal className="w-4 h-4" />
                <h3 className="font-bold text-[10px] uppercase tracking-[0.3em]">{language === 'pt' ? 'Stack Tecnológica' : 'Tech Stack'}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
           </div>

            {project.credentials && (
             <div className="p-8 rounded-[2rem] border border-brand-secondary/20 bg-brand-secondary/5 space-y-6">
                <div className="flex items-center gap-2 text-brand-secondary">
                  <ShieldCheck className="w-4 h-4" />
                  <h3 className="font-bold text-[10px] uppercase tracking-[0.3em]">{pjT.credentials}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">{language === 'pt' ? 'Acesso' : 'User'}</span>
                    <code className="text-white text-xs font-mono bg-white/5 px-2 py-1 rounded-lg">{project.credentials.user}</code>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">{language === 'pt' ? 'Senha' : 'Pass'}</span>
                    <code className="text-white text-xs font-mono bg-white/5 px-2 py-1 rounded-lg">{project.credentials.pass}</code>
                  </div>
                </div>
             </div>
            )}
        </motion.div>
      </div>

      {/* Media Full Hero */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-12 mb-24"
      >
        <div className="relative aspect-video rounded-[3rem] overflow-hidden glass border border-white/[0.05] group">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        </div>

        {project.mediaUrls && project.mediaUrls.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.mediaUrls.map((url, i) => (
              <div key={i} className="relative aspect-video rounded-3xl overflow-hidden glass border border-white/[0.03] group hover:border-white/10 transition-colors">
                <Image
                  src={url}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Technical deep dive */}
      <div className="grid gap-20 md:grid-cols-[1fr_350px] items-start">
        <div className="space-y-16">
          <section className="relative">
            <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-primary/50 to-transparent hidden md:block" />
            
            <div className="space-y-16">
              {children ? (
                <div className="mdx-content">
                  {children}
                </div>
              ) : (
                <div className="prose prose-invert max-w-none text-slate-400 space-y-12 font-light">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-4 tracking-tight">{language === 'pt' ? 'Escopo e Objetivo' : 'Scope & Goal'}</h3>
                    <p className="text-lg leading-relaxed">{project.fullDescription}</p>
                  </div>
                  
                  {project.architecture && (
                    <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/[0.02]">
                      <h3 className="text-white text-xl font-bold mb-4 tracking-tight flex items-center gap-2">
                         <Layout className="w-5 h-5 text-brand-primary" />
                         {pjT.architecture}
                      </h3>
                      <p className="text-base leading-relaxed">{project.architecture}</p>
                    </div>
                  )}

                  {project.challenges && (
                    <div>
                      <h3 className="text-white text-xl font-bold mb-4 tracking-tight">{language === 'pt' ? 'Desafios de Engenharia' : 'Engineering Challenges'}</h3>
                      <p className="text-lg leading-relaxed">{project.challenges}</p>
                    </div>
                  )}

                  {project.aiIntegration && (
                    <div className="p-8 rounded-3xl bg-brand-primary/5 border border-brand-primary/10">
                      <h3 className="text-brand-primary text-xl font-bold mb-4 tracking-tight flex items-center gap-3">
                        <Brain className="w-6 h-6" />
                        {language === 'pt' ? 'Integração de Inteligência Artificial' : 'AI Integration'}
                      </h3>
                      <p className="text-lg leading-relaxed text-slate-300">{project.aiIntegration}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-6">
                <h3 className="text-white text-xl font-bold tracking-tight uppercase text-[10px] tracking-[0.3em] text-slate-500">{language === 'pt' ? 'Destaques da Implementação' : 'Implementation Highlights'}</h3>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed p-4 rounded-2xl bg-white/[0.02] border border-white/[0.03]">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        <aside className="space-y-8 sticky top-32">
          <div className="p-8 rounded-[2rem] glass border border-white/[0.03] space-y-6 shadow-2xl shadow-black/20">
            <div className="flex items-center gap-3 text-brand-secondary">
              <Terminal className="w-5 h-5" />
              <h3 className="font-bold text-[10px] uppercase tracking-[0.3em]">{language === 'pt' ? 'Ambiente Local' : 'Local Run'}</h3>
            </div>
            <p className="text-[12px] text-slate-500 leading-relaxed font-light">
              {project.slug === 'library-hub' 
                ? (language === 'pt' 
                    ? "Requer Docker Engine e Docker Compose. O ambiente é orquestrado automaticamente através da configuração .env parametrizada."
                    : "Requires Docker Engine and Docker Compose. The environment is automatically orchestrated via the parameterized .env config.")
                : (language === 'pt'
                    ? "Clone o repositório técnico e execute os comandos de runtime padrão para ambientes Node.js."
                    : "Clone the repository and run standard Node.js runtime commands.")
              }
            </p>
            
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-2 text-white/50 text-[10px] uppercase font-bold tracking-widest">
                <span className="w-1 h-1 rounded-full bg-brand-primary" />
                {language === 'pt' ? 'Passo a Passo' : 'Step by Step'}
              </div>
              <div className="bg-black/40 rounded-xl p-4 font-mono text-[10px] text-brand-secondary leading-relaxed border border-white/5">
                {project.slug === 'library-hub' ? (
                  <>
                    $ git clone ...<br/>
                    $ cp .env.example .env<br/>
                    $ docker-compose up
                  </>
                ) : (
                  <>
                    $ npm install<br/>
                    $ npm run dev
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="p-8 rounded-[2rem] glass border border-white/[0.03] bg-gradient-to-br from-brand-primary/5 to-transparent">
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4">{language === 'pt' ? 'Interessado na solução?' : 'Interested in this solution?'}</h4>
             <p className="text-xs text-slate-400 mb-6 font-light leading-relaxed">
               {language === 'pt' 
                 ? "Este projeto demonstra competências avançadas em arquitetura e escalabilidade."
                 : "This project demonstrates advanced skills in architecture and scalability."}
             </p>
             <Link href="/contact" className="block w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-center text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
               {t.nav.contact}
             </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};
