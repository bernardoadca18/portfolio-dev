'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { dictionary } from '@/lib/data';
import { Globe } from 'lucide-react';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const t = dictionary[language].nav;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/70 backdrop-blur-lg border-b border-white/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold font-display text-white">
          BA<span className="text-emerald-500">.</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
            <Link href="/#projects" className="hover:text-emerald-400 transition-colors">{t.projects}</Link>
            <Link href="/#experience" className="hover:text-emerald-400 transition-colors">{t.experience}</Link>
          </div>
          
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300 hover:text-white hover:border-emerald-500/50 transition-all"
          >
            <Globe className="w-4 h-4 text-emerald-500" />
            {language === 'en' ? '🇺🇸 EN' : '🇧🇷 PT'}
          </button>
        </div>
      </div>
    </nav>
  );
}
