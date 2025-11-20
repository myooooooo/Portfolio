import React from 'react';

const RetroDesktop: React.FC = () => {
  const icons = [
    { label: 'My Computer', icon: '💻', top: '20px', left: '20px' },
    { label: 'Recycle Bin', icon: '🗑️', top: '120px', left: '20px' },
    { label: 'Network', icon: '🌐', top: '220px', left: '20px' },
    { label: 'Paint', icon: '🎨', top: '20px', right: '20px' },
    { label: 'MSN Messenger', icon: '💬', top: '120px', right: '20px' },
    { label: 'Portfolio.exe', icon: '📁', bottom: '100px', right: '40px' },
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none font-[VT323]">
      {icons.map((item, idx) => (
        <div 
            key={idx}
            className="absolute flex flex-col items-center w-24 group pointer-events-auto cursor-pointer"
            style={{ 
                top: item.top, 
                left: item.left, 
                right: item.right, 
                bottom: item.bottom 
            }}
        >
            <div className="text-4xl mb-1 filter drop-shadow-lg group-hover:opacity-80 transition-opacity">
                {item.icon}
            </div>
            <span className="text-white text-shadow-sm px-1 bg-transparent group-hover:bg-[#000080] group-active:border border-dotted border-white">
                {item.label}
            </span>
        </div>
      ))}
      
      {/* Floating Start Banner */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#004040] opacity-20 text-9xl font-bold pointer-events-none rotate-12 hidden md:block">
         WINDOWS 95
      </div>
    </div>
  );
};

export default RetroDesktop;