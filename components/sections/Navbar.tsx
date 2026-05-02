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
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <div className="flex items-center gap-1 p-1 rounded-full glass pointer-events-auto">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                isActive ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-brand-primary rounded-full -z-10"
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                />
              )}
              {link.label}
            </Link>
          );
        })}
        
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        
        <button
          onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
          className="flex items-center justify-center p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all uppercase text-[10px] font-bold tracking-widest"
          title="Alternar Idioma"
        >
          <Languages className="w-4 h-4 mr-1.5" />
          {language}
        </button>
      </div>
    </nav>
  );
};
