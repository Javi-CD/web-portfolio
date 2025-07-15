import React from 'react';
import { interests } from '../../../data/about';

const InterestsGrid = () => {
  return (
    <div className="bg-neutral-900/30 backdrop-blur-sm p-8 rounded-xl border border-neutral-800/20">
      <h3 className="text-lg font-medium text-neutral-200 mb-6">
        Interests & Hobbies
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {interests.map((interest, index) => (
          <div
            key={interest}
            className="flex items-center gap-2 p-3 bg-neutral-800/20 rounded-lg hover:bg-neutral-800/30 transition-colors duration-300"
          >
            <span className="text-xs text-neutral-400 font-light">
              {interest}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestsGrid;
