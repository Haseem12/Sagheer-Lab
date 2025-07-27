import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Pillars from '@/components/Pillars';
import ProjectShowcase from '@/components/ProjectShowcase';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Pillars />
      <ProjectShowcase />
    </main>
  );
}
