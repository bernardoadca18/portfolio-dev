// File: components/ui/Badge.tsx
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Badge = ({ children, variant = 'primary' }: BadgeProps) => {
  const styles = {
    primary: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20',
    secondary: 'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20',
    outline: 'bg-white/5 text-slate-400 border-white/10'
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${styles[variant]} transition-all`}>
      {children}
    </span>
  );
};
