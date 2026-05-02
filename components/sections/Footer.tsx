// File: components/sections/Footer.tsx
'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-24 border-t border-white/[0.02] bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-3 tracking-tighter">Bernardo Alves Aguiar da Cunha</h3>
          <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">© {new Date().getFullYear()} — Engenharia de Software</p>
        </div>

        <div className="flex items-center gap-8">
          <a href="https://github.com/bernardoadca18" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors group">
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/bernardo-alves-aguiar-da-cunha-b06364218/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors group">
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a href="mailto:bernardoalvesaguiar16@gmail.com" className="text-slate-500 hover:text-white transition-colors group">
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};

