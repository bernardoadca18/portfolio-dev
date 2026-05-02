// File: components/sections/ContactSection.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslation } from '@/context/LanguageContext';
import { Github, Linkedin, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { sendEmailAction } from '@/app/actions/contact';

export const ContactSection = () => {
  const { t, language } = useTranslation();
  const contactT = t.contact;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const contactSchema = z.object({
    name: z.string().min(2, { message: contactT.validation.name }),
    email: z.string().email({ message: contactT.validation.email }),
    message: z.string().min(10, { message: contactT.validation.message }),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);

    try {
      const result = await sendEmailAction(formData);
      
      if (result.success) {
        setStatus('success');
        reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-40 px-6 max-w-7xl mx-auto">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold md:text-4xl mb-6">{contactT.title}</h2>
            <div className="w-20 h-1.5 bg-brand-primary rounded-full mb-8" />
            <p className="text-slate-400 text-lg leading-relaxed">
              {contactT.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            <a
              href="https://www.linkedin.com/in/bernardo-alves-aguiar-da-cunha-b06364218/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl glass border-white/5 hover:border-brand-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-brand-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">LinkedIn</div>
                <div className="text-white font-medium group-hover:text-brand-primary transition-colors">Bernardo Alves Aguiar da Cunha</div>
              </div>
            </a>

            <a
              href="https://github.com/bernardoadca18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl glass border-white/5 hover:border-brand-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">GitHub</div>
                <div className="text-white font-medium group-hover:text-brand-primary transition-colors">bernardoadca18</div>
              </div>
            </a>

            <a
              href="mailto:bernardoalvesaguiar16@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl glass border-white/5 hover:border-brand-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">E-mail</div>
                <div className="text-white font-semibold">bernardoalvesaguiar16@gmail.com</div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl glass border-white/5 relative overflow-hidden"
        >
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 z-10 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8"
            >
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{contactT.success}</h3>
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                {contactT.name}
              </label>
              <input
                {...register('name')}
                type="text"
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                  errors.name ? 'border-red-500/50' : 'border-white/10'
                } focus:border-brand-primary outline-none transition-all`}
                placeholder={language === 'pt' ? 'Seu nome' : 'Your name'}
              />
              {errors.name && (
                <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                {contactT.email}
              </label>
              <input
                {...register('email')}
                type="email"
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                  errors.email ? 'border-red-500/50' : 'border-white/10'
                } focus:border-brand-primary outline-none transition-all`}
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                {contactT.message}
              </label>
              <textarea
                {...register('message')}
                rows={5}
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                  errors.message ? 'border-red-500/50' : 'border-white/10'
                } focus:border-brand-primary outline-none transition-all resize-none`}
                placeholder={language === 'pt' ? 'Como posso ajudar?' : 'How can I help?'}
              />
              {errors.message && (
                <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              disabled={status === 'loading'}
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-brand-primary text-white font-bold hover:bg-brand-primary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all group"
            >
              {status === 'loading' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {contactT.sending}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  {contactT.send}
                </>
              )}
            </button>
            
            {status === 'error' && (
              <p className="text-center text-sm text-red-500 font-medium">
                {contactT.error}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};
