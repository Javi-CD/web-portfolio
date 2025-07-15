import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { projects } from '../../../data/projects';

const Projects = () => {
  const getTechColor = (tech) => {
    const primaryTechs = [
      'Python',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'MongoDB',
    ];
    const secondaryTechs = ['JWT', 'Docker', 'Redis'];

    if (primaryTechs.includes(tech)) {
      return 'bg-blue-500/10 text-blue-400 border-blue-400/20';
    }
    if (secondaryTechs.includes(tech)) {
      return 'bg-neutral-600/10 text-neutral-300 border-neutral-300/20';
    }
    return 'bg-neutral-500/10 text-neutral-400 border-neutral-400/20';
  };

  return (
    <section id="projects" className="section-padding bg-neutral-950/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            <span className="text-white">Featured </span>
            <span className="accent-gradient text-glow">Projects</span>
          </h2>
          <p
            className="text-xl text-neutral-400 max-w-2xl mx-auto animate-fade-scale"
            style={{ animationDelay: '0.2s' }}
          >
            A showcase of my recent work and technical expertise
          </p>
        </div>

        {/* Projects list */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-card rounded-lg p-6 group hover:bg-neutral-900/50 transition-all duration-300 animate-slide-up border-l-4 ${
                project.featured ? 'border-l-blue-500' : 'border-l-neutral-700'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Code2 className="w-5 h-5 text-neutral-400" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Project status badges */}
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="bg-neutral-700/50 text-neutral-300 px-2 py-1 rounded text-xs font-medium">
                          Featured
                        </span>
                      )}

                      {/* Privacy indicator */}
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          project.isPrivate
                            ? 'bg-neutral-800/50 text-neutral-400'
                            : 'bg-neutral-700/30 text-neutral-300'
                        }`}
                      >
                        {project.isPrivate ? 'Private' : 'Public'}
                      </span>

                      {/* Company indicator */}
                      {project.company && (
                        <span className="bg-neutral-600/30 text-neutral-400 px-2 py-1 rounded text-xs font-medium">
                          {project.company}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-neutral-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 md:flex-col md:w-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-800/50 text-neutral-300 rounded-lg hover:bg-neutral-700/50 hover:text-white transition-all duration-200 text-sm whitespace-nowrap"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-all duration-200 text-sm whitespace-nowrap border border-blue-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
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
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/Javi-CD"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
