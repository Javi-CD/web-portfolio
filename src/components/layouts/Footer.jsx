import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import AnimatedLogo from '../ui/AnimatedLogo';
import { socialLinks } from '../../data/socialLinks';
import { contactInfo } from '../../data/contactInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-neutral-950/50 border-t border-neutral-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <AnimatedLogo />
            </div>
            <p className="text-neutral-400 mb-6 max-w-md leading-relaxed">
              Backend Developer passionate about creating innovative web
              solutions with modern technologies. Always learning, always
              building.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-neutral-800/50 rounded-lg text-neutral-400 transition-all duration-200 hover:bg-neutral-800/70 ${social.color} animate-glow`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-shimmer">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-shimmer">
              Get In Touch
            </h3>
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <div key={info.label}>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="block text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-neutral-400">{info.value}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-neutral-400 text-sm text-center md:text-left">
            <span>© {currentYear} Javier Pérez. Made with </span>
            <Heart className="w-4 h-4 inline text-red-500 animate-pulse" />
            <span> and lots of ☕</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-neutral-500 text-sm">Thanks for your time</div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2 bg-neutral-800/50 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/70 transition-all duration-200 animate-glow"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
