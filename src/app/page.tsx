import About from '@/components/Sections/About';
import Contact from '@/components/Sections/Contact';
import Hero from '@/components/Sections/Hero';
import Projects from '@/components/Sections/Projects';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
