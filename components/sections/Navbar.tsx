// File: components/sections/Navbar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

import { useTranslation } from '@/context/LanguageContext';
import { Languages } from 'lucide-react';

export const Navbar = () => {
  const pathname = usePathname();
  const { t, language, setLanguage } = useTranslation();
  const n = t.nav;

  const links = [
    { href: '/', label: n.home },
    { href: '/projects', label: n.projects },
    { href: '/about', label: n.about },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-8 pointer-events-none">
      <div className="flex items-center gap-1 p-1.5 rounded-full glass border-white/[0.05] pointer-events-auto bg-slate-900/40 backdrop-blur-2xl">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-full ${
                isActive ? 'text-white' : 'text-slate-500 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                />
              )}
              {link.label}
            </Link>
          );
        })}
        
        <div className="w-[1px] h-3 bg-white/5 mx-3" />
        
        <button
          onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
          className="flex items-center justify-center px-4 py-2 rounded-full text-slate-500 hover:text-white hover:bg-white/5 transition-all uppercase text-[9px] font-black tracking-tighter"
          title="Alternar Idioma"
        >
          <Languages className="w-3.5 h-3.5 mr-2 opacity-50" />
          {language}
        </button>
      </div>
    </nav>
  );
};

