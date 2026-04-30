// File: components/sections/Navbar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { pt } from '@/locales/pt';

export const Navbar = () => {
  const pathname = usePathname();
  const t = pt.nav;

  const links = [
    { href: '/', label: t.home },
    { href: '/projects', label: t.projects },
    { href: '/about', label: t.about },
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
      </div>
    </nav>
  );
};
