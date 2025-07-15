'use client';

import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import {
  Hero,
  About,
  Skills,
  Companies,
  Projects,
  Contact,
} from '../components/sections';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 bg-mesh-gradient">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Companies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
