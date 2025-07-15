import React from 'react';
import Image from 'next/image';
import { Zap } from 'lucide-react';
import { technologies } from '../../../data/technologies';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-neutral-950/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            <span className="text-white">Technologies </span>
            <span className="accent-gradient text-glow">I use.</span>
          </h2>
          <p
            className="text-xl text-neutral-400 max-w-2xl mx-auto animate-fade-scale"
            style={{ animationDelay: '0.2s' }}
          >
            Over the years, I have worked with a variety of technologies. Here
            are some of the technologies I have experience with:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="glass-card rounded-xl p-4 flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-300 animate-fade-scale group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="mb-2 group-hover:scale-110 transition-transform duration-300 relative w-12 h-12 flex items-center justify-center">
                <Image
                  src={tech.logoUrl}
                  alt={`${tech.name} logo`}
                  width={48}
                  height={48}
                  className="object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className={`hidden text-2xl ${tech.color}`}>
                  {tech.name.charAt(0)}
                </div>
              </div>
              <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2">
            <span className="text-neutral-500 font-normal text-sm flex items-center gap-1">
              <span
                className="animate-pulse"
                style={{ animationDelay: '0s', animationDuration: '2s' }}
              >
                .
              </span>
              <span
                className="animate-pulse"
                style={{ animationDelay: '0.3s', animationDuration: '2s' }}
              >
                .
              </span>
              <span
                className="animate-pulse"
                style={{ animationDelay: '0.6s', animationDuration: '2s' }}
              >
                .
              </span>
              <span className="ml-1">and many more!</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
