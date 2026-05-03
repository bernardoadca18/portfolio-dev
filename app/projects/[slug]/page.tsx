import React from 'react';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ProjectDetailClient } from '@/components/project/ProjectDetailClient';

const mdxComponents = {
  Badge,
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4 text-white" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-6 mb-3 text-brand-primary" {...props} />,
  p: (props: any) => <p className="text-slate-400 leading-relaxed mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-5 space-y-2 mb-6" {...props} />,
  code: (props: any) => <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm font-mono text-brand-secondary" {...props} />,
  pre: (props: any) => <pre className="bg-slate-900 border border-white/5 rounded-xl p-4 overflow-x-auto mb-6" {...props} />,
};

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: 'Projeto não encontrado' };

  return {
    title: `${project.title} | Bernardo Alves Aguiar da Cunha`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [project.imageUrl],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <Navbar />
      
      <ProjectDetailClient project={project}>
        {project.mdxSource && (
          <MDXRemote source={project.mdxSource} components={mdxComponents} />
        )}
      </ProjectDetailClient>

      <Footer />
    </main>
  );
}
