import React from 'react';

const RPGStats: React.FC = () => {
  const stats = [
    { name: 'CREATIVITY', value: 95, color: 'bg-pop-pink' },
    { name: 'CAFFEINE', value: 80, color: 'bg-pop-purple' },
    { name: 'PATIENCE', value: 40, color: 'bg-blue-400' },
    { name: 'CODE SKILL', value: 75, color: 'bg-pop-accent' },
  ];

  return (
    <div className="bg-discord-gray text-white p-4 rounded-xl border-4 border-pop-accent shadow-[8px_8px_0px_0px_#000] font-mono transform rotate-1 hover:rotate-0 transition-transform mt-8">
      <div className="flex justify-between items-center mb-4 border-b-2 border-gray-500 pb-2">
        <span className="text-pop-yellow font-bold text-lg">LVL. 20</span>
        <span className="text-xs text-gray-400">CLASS: ARTIST/DEV</span>
      </div>
      
      <div className="space-y-3">
        {stats.map((stat) => (
          <div key={stat.name}>
            <div className="flex justify-between text-xs mb-1">
              <span>{stat.name}</span>
              <span>{stat.value}/100</span>
            </div>
            <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden border border-gray-600">
              <div 
                className={`h-full ${stat.color}`} 
                style={{ width: `${stat.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-2 border-t-2 border-gray-500 text-[10px] text-center text-gray-400">
        SPECIAL ABILITY: PIXEL PERFECT
      </div>
    </div>
  );
};

export default RPGStats;