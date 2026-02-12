import React from 'react';

const CreativeTools: React.FC = () => {
  const tools = [
    { name: 'iPad Pro', type: 'Hardware', level: '100%' },
    { name: 'Procreate', type: 'Software', level: '95%' },
    { name: 'Photoshop', type: 'Software', level: '90%' },
    { name: 'Figma', type: 'Product', level: '85%' },
    { name: 'After Effects', type: 'Motion', level: '70%' },
    { name: 'Python', type: 'Dev', level: '60%' },
  ];

  return (
    <section className="py-20 bg-white border-b border-black">
      <div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Section / 04</span>
          <h3 className="text-4xl font-black uppercase tracking-tighter leading-none mb-4">
            ARSENAL<br/>TECHNIQUE
          </h3>
          <p className="text-xs font-bold text-gray-400 uppercase leading-relaxed max-w-[250px]">
            L'ÉQUILIBRE PARFAIT ENTRE LE TOUCHER ANALOGIQUE ET LA PRÉCISION DIGITALE.
          </p>
        </div>

        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
          {tools.map((tool, idx) => (
            <div key={idx} className="group border-l border-black pl-6 py-2 hover:border-pop-pink transition-colors">
              <span className="text-[9px] font-black text-pop-pink uppercase tracking-widest block mb-1">[{tool.type}]</span>
              <h4 className="text-xl font-black uppercase tracking-tighter mb-4">{tool.name}</h4>
              <div className="w-full h-1 bg-gray-100 relative overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-black group-hover:bg-pop-pink transition-all duration-1000"
                  style={{ width: tool.level }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeTools;
