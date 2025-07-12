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

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-15"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="accent-gradient">Javi</span>
          </h1>

          {/* Typewriter effect */}
          <div className="text-2xl md:text-4xl text-neutral-300 mb-8 h-12 flex items-center justify-center">
            <span className="font-mono">
              {displayText}
              <span className="animate-pulse text-indigo-400">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I build robust, scalable server-side applications and APIs.
            Passionate about clean code, system architecture, and solving
            complex problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
              View My Work
            </button>
            <button className="px-8 py-3 border border-neutral-600 text-neutral-300 font-semibold rounded-lg hover:border-indigo-400 hover:text-indigo-400 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-400/10">
              Download CV
            </button>
          </div>

          {/* Tech stack preview */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-500">
            {['Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS', 'Redis'].map(
              (tech, index) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-neutral-700 rounded-full hover:border-neutral-600 hover:text-neutral-400 transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-indigo-400 transition-colors cursor-pointer"
        >
          <ChevronDown className="w-6 h-6 text-neutral-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
