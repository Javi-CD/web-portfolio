import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Backend Developer';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-mesh-gradient">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="particle top-1/4 left-1/4 w-2 h-2 bg-gray-400 animate-float"
          style={{ animationDelay: '0s' }}
        ></div>
        <div
          className="particle top-3/4 right-1/4 w-1 h-1 bg-gray-500 animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="particle top-1/2 right-1/3 w-1.5 h-1.5 bg-gray-400 animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="particle top-1/3 left-1/2 w-1 h-1 bg-gray-500 animate-float"
          style={{ animationDelay: '3s' }}
        ></div>
        <div
          className="particle bottom-1/4 left-1/3 w-2 h-2 bg-gray-400 animate-float"
          style={{ animationDelay: '4s' }}
        ></div>
        <div
          className="particle top-1/5 right-1/5 w-1.5 h-1.5 bg-gray-500 animate-float"
          style={{ animationDelay: '5s' }}
        ></div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-neutral-950/20"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
            <span className="text-white">Hi, I&apos;m </span>
            <span className="accent-gradient text-glow">Javier</span>
          </h1>

          {/* Typewriter effect */}
          <div className="text-2xl md:text-4xl text-neutral-300 mb-8 h-12 flex items-center justify-center animate-fade-scale">
            <span className="font-mono">
              {displayText}
              <span className="animate-pulse text-gray-400 text-glow">|</span>
            </span>
          </div>

          {/* Description */}
          <p
            className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            I build robust, scalable server-side applications and APIs.
            Passionate about clean code, system architecture, and solving
            complex problems.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up"
            style={{ animationDelay: '0.6s' }}
          >
            <button
              onClick={scrollToProjects}
              className="btn-primary animate-glow"
            >
              View My Work
            </button>
            <button className="btn-secondary">Download CV</button>
          </div>

          {/* Tech stack preview */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-500">
            {[
              'Node.js',
              'Python',
              'PostgreSQL',
              'Docker',
              'Git',
              'ApiRestFull',
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-3 py-1 bg-neutral-800/20 rounded-full hover:bg-neutral-700/30 hover:text-neutral-400 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-gray-400 transition-colors cursor-pointer"
        >
          <ChevronDown className="w-6 h-6 text-neutral-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
