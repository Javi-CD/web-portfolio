import React from 'react';
import { stats } from '../../../data/about';

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="bg-neutral-900/30 backdrop-blur-sm p-6 rounded-xl text-center border border-neutral-800/20 hover:border-neutral-700/30 transition-all duration-300"
        >
          <div className="flex justify-center mb-4">
            <div className="p-2 bg-neutral-800/20 rounded-lg text-neutral-500">
              {stat.icon}
            </div>
          </div>
          <div className="text-xl font-light text-neutral-200 mb-1">
            {stat.value}
          </div>
          <div className="text-xs text-neutral-500 font-light">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
