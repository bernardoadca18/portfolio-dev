// File: components/sections/SkillSection.tsx
'use client';

import React from 'react';
import { motion } from 'motion/react';
import { skillCategories } from '@/data/skills';
import { pt } from '@/locales/pt';
import { Badge } from '@/components/ui/Badge';

export const SkillSection = () => {
  const t = pt.skills;

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{t.title}</h2>
        <div className="w-20 h-1.5 bg-brand-primary mx-auto mt-4 rounded-full" />
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl glass hover:border-brand-primary/50 transition-all group"
          >
            <h3 className="mb-6 text-lg font-semibold border-b border-white/10 pb-4 group-hover:text-brand-primary transition-colors">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
