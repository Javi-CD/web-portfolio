'use client';

import Header from '../components/layouts/Header';
import Hero from '../components/sections/Hero';
import Skills from '../components/sections/Skills';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />
      <main>
        <Hero />
        <Skills />

        {/* Placeholder sections */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center bg-neutral-900/50 text-neutral-300 py-20"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Proyectos</h2>
            <p className="text-lg">Sección de proyectos próximamente...</p>
          </div>
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-300 py-20"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Acerca de</h2>
            <p className="text-lg">Sección acerca de próximamente...</p>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-neutral-900/50 text-neutral-300 py-20"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Contacto</h2>
            <p className="text-lg">Sección de contacto próximamente...</p>
          </div>
        </section>
      </main>
    </div>
  );
}
