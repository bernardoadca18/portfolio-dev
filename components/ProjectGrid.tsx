'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Project, Category } from '@/lib/data';
import { Code2, Gamepad2 } from 'lucide-react';

interface ProjectGridProps {
  projects: Project[];
  dictionary: any;
}

export default function ProjectGrid({ projects, dictionary }: ProjectGridProps) {
  const [filter, setFilter] = useState<Category | 'all'>('all');

  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter
  );

  return (
    <div className="w-full">
      {/* Filter Controls */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => setFilter('all')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
            filter === 'all'
              ? 'bg-emerald-500 border-emerald-500 text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
              : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700'
          }`}
        >
          {dictionary.projects.all}
        </button>
        <button
          onClick={() => setFilter('software')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${
            filter === 'software'
              ? 'bg-emerald-500 border-emerald-500 text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
              : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700'
          }`}
        >
          <Code2 className="w-4 h-4 shrink-0" />
          {dictionary.projects.software}
        </button>
        <button
          onClick={() => setFilter('game')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${
            filter === 'game'
              ? 'bg-emerald-500 border-emerald-500 text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
              : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700'
          }`}
        >
          <Gamepad2 className="w-4 h-4 shrink-0" />
          {dictionary.projects.games}
        </button>
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all duration-300 min-w-0"
            >
              <div className="relative h-48 w-full overflow-hidden bg-zinc-900 shrink-0">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-sm px-3 py-1 rounded-full border border-zinc-800 flex items-center gap-2 max-w-[80%]">
                  {project.category === 'software' ? (
                    <><Code2 className="w-3 h-3 text-emerald-500 shrink-0" /><span className="text-xs font-medium uppercase tracking-wider text-zinc-300 truncate">Software</span></>
                  ) : (
                    <><Gamepad2 className="w-3 h-3 text-emerald-500 shrink-0" /><span className="text-xs font-medium uppercase tracking-wider text-zinc-300 truncate">Game</span></>
                  )}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow min-w-0">
                <h3 className="text-xl font-bold text-zinc-100 mb-2 font-display truncate">{project.title}</h3>
                <p className="text-sm text-zinc-400 mb-6 line-clamp-3 flex-grow break-words">{project.summary}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 4).map((tech) => {
                    let colorClass = "text-zinc-300 border-zinc-700/50 bg-zinc-800/50";
                    const t = tech.toLowerCase();
                    if (t.includes('node') || t.includes('django') || t.includes('spring') || t.includes('python') || t.includes('java')) {
                      colorClass = "text-emerald-400 border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_10px_rgba(16,185,129,0.1)]";
                    } else if (t.includes('react') || t.includes('next') || t.includes('tailwind') || t.includes('vite')) {
                      colorClass = "text-blue-400 border-blue-500/30 bg-blue-500/10 shadow-[0_0_10px_rgba(59,130,246,0.1)]";
                    } else if (t.includes('api') || t.includes('websocket') || t.includes('jwt') || t.includes('postgres') || t.includes('aws') || t.includes('docker') || t.includes('rag') || t.includes('llm')) {
                      colorClass = "text-purple-400 border-purple-500/30 bg-purple-500/10 shadow-[0_0_10px_rgba(168,85,247,0.1)]";
                    } else if (t.includes('godot') || t.includes('c#') || t.includes('fsm') || t.includes('blender')) {
                      colorClass = "text-orange-400 border-orange-500/30 bg-orange-500/10 shadow-[0_0_10px_rgba(249,115,22,0.1)]";
                    }

                    return (
                      <span key={tech} className={`px-2 py-1 text-xs rounded-md border break-words ${colorClass}`}>
                        {tech}
                      </span>
                    );
                  })}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 bg-zinc-800/50 text-zinc-500 text-xs rounded-md border border-zinc-700/50 shrink-0">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
                
                <Link 
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-zinc-800 hover:bg-emerald-500 hover:text-zinc-950 text-zinc-100 font-medium transition-all duration-300 shrink-0"
                >
                  {dictionary.projects.viewDetails}
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
