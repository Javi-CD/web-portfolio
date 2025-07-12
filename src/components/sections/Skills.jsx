import React from 'react';
import {
  Code2,
  Database,
  Server,
  Cloud,
  Container,
  GitBranch,
  Terminal,
  Layers,
  Shield,
  Zap,
  Settings,
  Monitor,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: 'JavaScript', level: 'Advanced', icon: '🟨' },
        { name: 'Python', level: 'Advanced', icon: '🐍' },
        { name: 'TypeScript', level: 'Intermediate', icon: '🔷' },
        { name: 'Java', level: 'Intermediate', icon: '☕' },
        { name: 'Go', level: 'Beginner', icon: '🔵' },
        { name: 'Rust', level: 'Beginner', icon: '🦀' },
      ],
    },
    {
      title: 'Backend Technologies',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', level: 'Advanced', icon: '🟢' },
        { name: 'Express.js', level: 'Advanced', icon: '⚡' },
        { name: 'FastAPI', level: 'Intermediate', icon: '🚀' },
        { name: 'Django', level: 'Intermediate', icon: '🎯' },
        { name: 'Spring Boot', level: 'Beginner', icon: '🍃' },
        { name: 'GraphQL', level: 'Intermediate', icon: '🔗' },
      ],
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'PostgreSQL', level: 'Advanced', icon: '🐘' },
        { name: 'MongoDB', level: 'Intermediate', icon: '🍃' },
        { name: 'Redis', level: 'Intermediate', icon: '🔴' },
        { name: 'MySQL', level: 'Intermediate', icon: '🐬' },
        { name: 'Elasticsearch', level: 'Beginner', icon: '🔍' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: 'AWS', level: 'Intermediate', icon: '☁️' },
        { name: 'Docker', level: 'Advanced', icon: '🐳' },
        { name: 'Kubernetes', level: 'Beginner', icon: '⚙️' },
        { name: 'GitHub Actions', level: 'Intermediate', icon: '🔄' },
        { name: 'Terraform', level: 'Beginner', icon: '🏗️' },
      ],
    },
    {
      title: 'Tools & Software',
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: 'Git', level: 'Advanced', icon: '📝' },
        { name: 'VS Code', level: 'Advanced', icon: '💻' },
        { name: 'Postman', level: 'Advanced', icon: '📮' },
        { name: 'Linux', level: 'Intermediate', icon: '🐧' },
        { name: 'Nginx', level: 'Intermediate', icon: '🌐' },
        { name: 'Jest', level: 'Intermediate', icon: '🧪' },
      ],
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Intermediate':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Beginner':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default:
        return 'text-neutral-400 bg-neutral-400/10 border-neutral-400/20';
    }
  };

  return (
    <section id="skills" className="section-padding bg-neutral-950/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Skills & </span>
            <span className="accent-gradient">Technologies</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different
            domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="skill-card rounded-xl p-6 h-full"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 bg-neutral-800/50 rounded-lg hover:bg-neutral-800/70 transition-all duration-200"
                    style={{
                      animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-neutral-200 font-medium">
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 rounded-full border border-neutral-700">
            <Zap className="w-4 h-4 text-indigo-400" />
            <span className="text-neutral-300 text-sm">
              Always learning and exploring new technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
