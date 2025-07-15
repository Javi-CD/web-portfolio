import React from 'react';

const ContactCTA = () => {
  return (
    <div
      className="text-center mt-16 animate-slide-up"
      style={{ animationDelay: '0.7s' }}
    >
      <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-white mb-4">
          Ready to start a project?
        </h3>
        <p className="text-neutral-400 mb-6">
          I&apos;m available for freelance work and full-time opportunities.
          Let&apos;s build something amazing together!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:javierperezdeveloper@gmail.com?subject=Project Inquiry"
            className="btn-primary"
          >
            Start a Project
          </a>
          <a href="#" className="btn-secondary">
            Schedule a Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
