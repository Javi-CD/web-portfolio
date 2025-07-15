import React from 'react';
import { User, MapPin, Calendar } from 'lucide-react';

const PersonalInfo = () => {
  return (
    <div className="space-y-8">
      <div className="bg-neutral-900/40 backdrop-blur-sm p-10 rounded-2xl border border-neutral-800/30">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-neutral-800/30 rounded-xl text-neutral-400">
            <User className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-medium text-neutral-200">Who I Am</h3>
        </div>

        <div className="space-y-6 text-neutral-400 leading-relaxed text-sm">
          <p>
            I&apos;m a passionate{' '}
            <span className="text-neutral-300 font-medium">
              Backend Developer
            </span>{' '}
            with over 1 years of experience building robust, scalable
            applications. I love turning complex problems into simple, elegant
            solutions.
          </p>

          <p>
            My journey in tech started with curiosity about how things work
            behind the scenes. Today, I specialize in creating efficient APIs,
            designing database architectures, and implementing cloud solutions
            that power modern applications.
          </p>

          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, contributing to open-source projects, or sharing
            knowledge with the developer community.
          </p>
        </div>

        <div className="flex items-center gap-6 mt-8 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-neutral-500" />
            <span>Barranquilla, Colombia</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3 text-neutral-500" />
            <span>Available for work</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
