import React from 'react';
import { PersonalInfo, StatsGrid, InterestsGrid } from '../index';

const About = () => {
  return (
    <section id="about" className="section-padding bg-neutral-950/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">
            <span className="text-neutral-200">About </span>
            <span className="text-neutral-400">Me</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto font-light">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Personal info */}
          <PersonalInfo />

          {/* Right side - Stats and interests */}
          <div className="space-y-8">
            {/* Stats */}
            <StatsGrid />

            {/* Interests */}
            <InterestsGrid />

            {/* Call to action */}
            <div className="text-center">
              <p className="text-neutral-500 mb-6 text-sm font-light">
                Want to know more about my journey?
              </p>
              <button className="px-6 py-2 bg-neutral-800/40 text-neutral-300 text-sm font-light rounded-lg border border-neutral-700/30 hover:bg-neutral-800/60 hover:border-neutral-600/40 transition-all duration-300">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
