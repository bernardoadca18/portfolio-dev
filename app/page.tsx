import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { SkillSection } from '@/components/sections/SkillSection';
import { FeaturedProjects } from '@/components/sections/ProjectGrid';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SkillSection />
      <FeaturedProjects />
      <Footer />
    </main>
  );
}
