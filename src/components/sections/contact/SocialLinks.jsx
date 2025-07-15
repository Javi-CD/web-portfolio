import React from 'react';
import { socialLinks } from '../../../data/socialLinks';

const SocialLinks = () => {
  return (
    <div
      className="glass-card p-8 rounded-xl animate-slide-up"
      style={{ animationDelay: '0.5s' }}
    >
      <h3 className="text-lg font-medium text-white mb-6">Follow Me</h3>

      <div className="grid grid-cols-2 gap-4">
        {socialLinks.map((social, index) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg hover:bg-neutral-800/50 transition-colors duration-300 text-neutral-400 hover:text-neutral-300 animate-fade-scale`}
            style={{ animationDelay: `${0.6 + index * 0.05}s` }}
          >
            {social.icon}
            <span className="font-medium">{social.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
