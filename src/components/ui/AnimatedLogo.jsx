import React, { useState } from 'react';

const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-1">
        {/* Javi part */}
        <span className="text-xl md:text-2xl font-bold text-slate-100 transition-all duration-300">
          {['J', 'a', 'v', 'i'].map((letter, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-300 ${
                isHovered ? 'transform -translate-y-1 text-cyan-400' : ''
              }`}
              style={{
                transitionDelay: isHovered
                  ? `${index * 100}ms`
                  : `${(3 - index) * 100}ms`,
              }}
            >
              {letter}
            </span>
          ))}
        </span>

        {/* Hyphen */}
        <span
          className={`text-xl md:text-2xl font-bold transition-all duration-300 ${
            isHovered ? 'text-emerald-400 scale-110' : 'text-slate-400'
          }`}
        >
          -
        </span>

        {/* CD part */}
        <span className="text-xl md:text-2xl font-bold text-slate-100 transition-all duration-300">
          {['C', 'D'].map((letter, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-300 ${
                isHovered ? 'transform translate-y-1 text-cyan-400' : ''
              }`}
              style={{
                transitionDelay: isHovered
                  ? `${(index + 4) * 100}ms`
                  : `${(1 - index) * 100}ms`,
              }}
            >
              {letter}
            </span>
          ))}
        </span>
      </div>

      {/* Underline effect */}
      <div
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-500 ${
          isHovered ? 'w-full' : 'w-0'
        }`}
      />
    </div>
  );
};

export default AnimatedLogo;
