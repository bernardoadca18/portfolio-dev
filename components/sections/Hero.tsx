// File: components/sections/Hero.tsx
'use client';

import React from 'react';
import { motion } from 'motion/react';
import { pt } from '@/locales/pt';
import { ChevronRight, Download } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  const t = pt.hero;

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/20 blur-[120px] rounded-full -z-10 animate-pulse" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider uppercase border rounded-full bg-white/5 border-white/10 text-brand-secondary">
          {t.greeting}
        </span>
        
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          {t.name.split(' ')[0]} <span className="text-gradient">{t.name.split(' ').slice(1).join(' ')}</span>
        </h1>
        
        <p className="mb-10 text-lg text-slate-400 md:text-xl">
          {t.description}
        </p>
        
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/projects" className="group flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white transition-all rounded-full bg-brand-primary hover:bg-brand-primary/80">
            {t.cta_projects}
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <button className="flex items-center gap-2 px-8 py-4 text-sm font-semibold transition-all rounded-full border border-white/10 bg-white/5 hover:bg-white/10">
            {t.cta_cv}
            <Download className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-brand-primary to-transparent" />
      </motion.div>
    </section>
  );
};
