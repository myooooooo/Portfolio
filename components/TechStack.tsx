
import React from 'react';

const TechStack: React.FC = () => {
  const tools = [
    { name: 'Figma', icon: '📐', level: 'Expert' },
    { name: 'Adobe Suite', icon: '✨', level: 'Love it' },
    { name: 'Procreate', icon: '✏️', level: 'Daily' },
    { name: 'React', icon: '⚛️', level: 'Learning' },
    { name: 'Python', icon: '🐍', level: 'NSI Award' },
    { name: 'Discord', icon: '👾', level: 'Manager' },
  ];

  return (
    <section className="py-10 px-4 mb-10">
      <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-md rounded-[3rem] border-2 border-white p-8 md:p-12 shadow-xl relative overflow-hidden">
        
        {/* Decor */}
        <div className="absolute -left-10 top-1/2 w-40 h-40 bg-pop-yellow/30 rounded-full blur-2xl"></div>
        <div className="absolute -right-10 bottom-0 w-40 h-40 bg-pop-accent/30 rounded-full blur-2xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/3 text-center md:text-left">
                <h3 className="font-display text-4xl text-pop-purple mb-2">My Tech Stack</h3>
                <p className="text-gray-600 font-medium">
                    Mes outils de prédilection pour donner vie à mes idées, du pixel au code.
                </p>
            </div>

            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                {tools.map((tool, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl border border-pop-light shadow-sm flex items-center gap-3 transform transition-transform hover:scale-105 hover:shadow-md cursor-default">
                        <div className="bg-pop-light w-10 h-10 rounded-full flex items-center justify-center text-xl">
                            {tool.icon}
                        </div>
                        <div>
                            <div className="font-bold text-pop-purple text-sm">{tool.name}</div>
                            <div className="text-[10px] font-bold text-pop-pink uppercase">{tool.level}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
