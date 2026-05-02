// File: components/sections/Footer.tsx
'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-slate-950/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">Bernardo <span className="text-brand-primary">Cunha</span></h3>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} - Todos os direitos reservados.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/bernardoadca18" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/bernardo-alves-aguiar-da-cunha-b06364218/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:bernardoalvesaguiar16@gmail.com" className="text-slate-400 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
