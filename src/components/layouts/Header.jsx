import React, { useState, useEffect } from 'react';
import AnimatedLogo from '../ui/AnimatedLogo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#companies', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-card border-b border-neutral-800/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <AnimatedLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-neutral-300 hover:text-indigo-400 transition-colors duration-300 relative group font-medium animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full animate-glow"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-neutral-300 hover:text-indigo-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-card border-t border-neutral-800/50 animate-slide-up">
            <nav className="container mx-auto px-4 md:px-6 py-4 flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-neutral-300 hover:text-indigo-400 transition-colors duration-300 font-medium animate-fade-scale"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
