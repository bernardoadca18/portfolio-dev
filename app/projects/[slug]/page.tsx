// File: app/projects/[slug]/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { pt } from '@/locales/pt';
import { ExternalLink, Github, ArrowLeft, Terminal, Layout, ShieldCheck, Brain } from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const t = pt.projects;

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-6">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Voltar para Projetos
        </Link>

        {/* Header Section */}
        <div className="grid gap-12 lg:grid-cols-[1fr_350px] mb-16">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant={project.status === 'Concluído' ? 'secondary' : 'primary'}>
                {project.status}
              </Badge>
              <Badge variant="outline">{project.role}</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary text-white font-semibold hover:bg-brand-primary/80 transition-all">
                  <ExternalLink className="w-4 h-4" />
                  {t.demo}
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                  <Github className="w-4 h-4" />
                  {t.github}
                </a>
              )}
            </div>
          </div>

          <div className="space-y-6">
             <div className="p-6 rounded-2xl glass space-y-4">
                <h3 className="font-bold text-sm uppercase tracking-widest text-slate-500">Tecnologias</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
             </div>

             {project.credentials && (
               <div className="p-6 rounded-2xl border border-brand-secondary/30 bg-brand-secondary/5 space-y-4">
                  <div className="flex items-center gap-2 text-brand-secondary">
                    <ShieldCheck className="w-4 h-4" />
                    <h3 className="font-bold text-sm uppercase tracking-widest">{t.credentials}</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Email:</span>
                      <code className="text-white bg-white/5 px-2 py-0.5 rounded">{project.credentials.user}</code>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Senha:</span>
                      <code className="text-white bg-white/5 px-2 py-0.5 rounded">{project.credentials.pass}</code>
                    </div>
                  </div>
               </div>
             )}
          </div>
        </div>

        {/* Media Gallery (Placeholder for now) */}
        <div className="relative aspect-video rounded-3xl overflow-hidden glass mb-16 border-2 border-white/5">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content Section */}
        <div className="grid gap-16 md:grid-cols-[1fr_300px]">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Layout className="w-6 h-6 text-brand-primary" />
                {t.architecture}
              </h2>
              <div className="prose prose-invert max-w-none text-slate-400 space-y-8">
                <div>
                  <h3 className="text-white font-bold mb-2">Resumo</h3>
                  <p>{project.fullDescription}</p>
                </div>
                
                {project.architecture && (
                  <div>
                    <h3 className="text-white font-bold mb-2">Arquitetura</h3>
                    <p>{project.architecture}</p>
                  </div>
                )}

                {project.challenges && (
                  <div>
                    <h3 className="text-white font-bold mb-2">Desafios</h3>
                    <p>{project.challenges}</p>
                  </div>
                )}

                {project.aiIntegration && (
                  <div className="p-4 rounded-xl bg-brand-primary/10 border border-brand-primary/20">
                    <h3 className="text-brand-primary font-bold mb-2 flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      Integração de IA
                    </h3>
                    <p className="text-sm">{project.aiIntegration}</p>
                  </div>
                )}

                <ul className="list-disc pl-5 space-y-2">
                  {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="p-6 rounded-2xl glass space-y-4">
              <div className="flex items-center gap-2 text-brand-primary">
                <Terminal className="w-4 h-4" />
                <h3 className="font-bold text-sm uppercase tracking-widest">Local Run</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Para rodar este projeto localmente, clone o repositório e execute <code className="bg-white/5 px-1 rounded">npm install</code> seguido de <code className="bg-white/5 px-1 rounded">npm run dev</code>.
              </p>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </main>
  );
}
