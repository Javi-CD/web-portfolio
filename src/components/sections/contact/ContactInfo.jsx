import React from 'react';
import { contactInfo } from '../../../data/contactInfo';

const ContactInfo = () => {
  return (
    <div className="glass-card p-8 rounded-xl">
      <h3 className="text-xl font-medium text-white mb-6">
        Let&apos;s Connect
      </h3>

      <p className="text-neutral-300 mb-8 leading-relaxed">
        I&apos;m always interested in new opportunities and exciting projects.
        Whether you have a question, want to collaborate, or just want to say
        hi, I&apos;d love to hear from you!
      </p>

      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <div
            key={info.label}
            className="flex items-center gap-4 animate-fade-scale"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <div className="p-3 bg-neutral-800/30 rounded-lg text-neutral-400">
              {info.icon}
            </div>
            <div>
              <div className="text-sm text-neutral-400 mb-1">{info.label}</div>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-white hover:text-gray-400 transition-colors font-medium"
                >
                  {info.value}
                </a>
              ) : (
                <div className="text-white font-medium">{info.value}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
