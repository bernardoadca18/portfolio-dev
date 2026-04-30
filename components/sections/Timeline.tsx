// File: components/sections/Timeline.tsx
'use client';

import React from 'react';
import { motion } from 'motion/react';
import { timeline } from '@/data/experience';
import { Briefcase, GraduationCap } from 'lucide-react';

export const Timeline = () => {
  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
      {timeline.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          {/* Dot */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-slate-900 text-brand-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-brand-primary group-hover:text-white">
            {item.type === 'trabalho' ? (
              <Briefcase className="w-4 h-4" />
            ) : (
              <GraduationCap className="w-5 h-5" />
            )}
          </div>

          {/* Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass hover:border-brand-primary/30 transition-all">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <span className="font-bold text-white">{item.company}</span>
              <time className="font-mono text-xs text-brand-secondary">{item.period}</time>
            </div>
            <div className="text-brand-primary font-medium text-sm mb-4">{item.role}</div>
            <div className="text-slate-400 text-sm leading-relaxed">
              {item.description}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
