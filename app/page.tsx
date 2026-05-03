import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { SkillSection } from '@/components/sections/SkillSection';
import { FeaturedProjects } from '@/components/sections/ProjectGrid';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Bernardo Alves Aguiar da Cunha | Software Engineer Specialist',
  description: 'Portfólio técnico de Bernardo Alves Aguiar da Cunha. Arquiteto Fullstack especialista em Infraestrutura, Cloud e IA.',
  openGraph: {
    title: 'Bernardo Alves Aguiar da Cunha | Software Engineer Specialist',
    description: 'Soluções robustas em Web, Infraestrutura e IA.',
    images: ['https://picsum.photos/seed/portfolio/1200/630'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bernardo Alves Aguiar da Cunha | Software Engineer',
    description: 'Soluções robustas em Web, Infraestrutura e IA.',
    images: ['https://picsum.photos/seed/portfolio/1200/630'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SkillSection />
      <FeaturedProjects />
      <ContactSection />
      <Footer />
    </main>
  );
}
