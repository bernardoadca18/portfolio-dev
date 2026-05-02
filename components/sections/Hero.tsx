// File: components/sections/Hero.tsx
'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '@/context/LanguageContext';
import { ChevronRight, Download } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  const { t } = useTranslation();
  const heroT = t.hero;

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center overflow-hidden">
      {/* Structural Accents */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-primary/10 to-transparent -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-secondary/5 blur-[120px] rounded-full -z-10 animate-pulse" />
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 text-[10px] font-bold tracking-[0.2em] uppercase border border-white/5 bg-white/5 rounded-full text-brand-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
          {heroT.greeting}
        </div>
        
        <h1 className="mb-8 text-5xl font-bold tracking-tight md:text-8xl leading-[0.9]">
          <span className="block text-white mb-2">Bernardo Alves</span>
          <span className="block text-gradient">Aguiar da Cunha</span>
        </h1>
        
        <p className="mb-12 text-lg text-slate-400 md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
          {heroT.description}
        </p>
        
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
          <Link href="/projects" className="group flex items-center gap-3 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all rounded-full bg-brand-primary hover:scale-105 active:scale-95 shadow-xl shadow-brand-primary/20">
            {heroT.cta_projects}
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <a href="/cv.pdf" download className="flex items-center gap-3 px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all rounded-full border border-white/10 bg-slate-900/50 hover:bg-slate-800 hover:border-white/20 active:scale-95">
            {heroT.cta_cv}
            <Download className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

