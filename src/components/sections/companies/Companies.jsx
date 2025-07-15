import React from 'react';
import {
  Building2,
  MapPin,
  Calendar,
  ExternalLink,
  Trophy,
  Briefcase,
} from 'lucide-react';
import { companies } from '../../../data/companies';

const Companies = () => {
  const getTypeColor = (type) => {
    switch (type) {
      case 'Full-time':
        return 'bg-blue-500/10 text-blue-400 border-blue-400/20';
      case 'Freelance':
        return 'bg-green-500/10 text-green-400 border-green-400/20';
      case 'Contract':
        return 'bg-purple-500/10 text-purple-400 border-purple-400/20';
      default:
        return 'bg-neutral-500/10 text-neutral-400 border-neutral-400/20';
    }
  };

  const getTechColor = (tech) => {
    const primaryTechs = [
      'Python',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'MongoDB',
    ];
    const secondaryTechs = ['JWT', 'Docker', 'React', 'JavaScript'];

    if (primaryTechs.includes(tech)) {
      return 'bg-blue-500/10 text-blue-400 border-blue-400/20';
    }
    if (secondaryTechs.includes(tech)) {
      return 'bg-neutral-600/10 text-neutral-300 border-neutral-300/20';
    }
    return 'bg-neutral-500/10 text-neutral-400 border-neutral-400/20';
  };

  return (
    <section id="companies" className="section-padding bg-neutral-950/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            <span className="text-white">Work </span>
            <span className="accent-gradient text-glow">Experience</span>
          </h2>
          <p
            className="text-xl text-neutral-400 max-w-2xl mx-auto animate-fade-scale"
            style={{ animationDelay: '0.2s' }}
          >
            Companies and organizations I&apos;ve worked with and contributed to
          </p>
        </div>

        {/* Companies timeline */}
        <div className="space-y-8">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className="glass-card rounded-lg p-8 group hover:bg-neutral-900/50 transition-all duration-300 animate-slide-up border-l-4 border-l-blue-500"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  {/* Company header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Building2 className="w-6 h-6 text-neutral-400" />
                      <div>
                        <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {company.name}
                        </h3>
                        <p className="text-lg text-neutral-300 font-medium">
                          {company.role}
                        </p>
                      </div>
                    </div>

                    {/* Company badges */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(company.type)}`}
                      >
                        {company.type}
                      </span>

                      <div className="flex items-center gap-1 text-neutral-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{company.period}</span>
                      </div>

                      <div className="flex items-center gap-1 text-neutral-400 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{company.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    {company.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-neutral-300 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {company.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${getTechColor(tech)}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  {company.projects && company.projects.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-neutral-300 mb-3 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Key Projects
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {company.projects.map((project, idx) => (
                          <span
                            key={idx}
                            className="bg-neutral-800/50 text-neutral-300 px-3 py-1 rounded-lg text-sm"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  {company.achievements && company.achievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-neutral-300 mb-3 flex items-center gap-2">
                        <Trophy className="w-4 h-4" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {company.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-neutral-400 text-sm flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Action button */}
                {company.website && (
                  <div className="lg:w-auto">
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-all duration-200 text-sm whitespace-nowrap border border-blue-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div
          className="text-center mt-16 animate-slide-up"
          style={{ animationDelay: '0.8s' }}
        >
          <p className="text-neutral-400 mb-6">
            Interested in working together?
          </p>
          <a href="#contact" className="btn-primary">
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Companies;
