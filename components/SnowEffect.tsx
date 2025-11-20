import React from 'react';

const SnowEffect: React.FC = () => {
  // Create 50 snowflakes
  const snowflakes = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100 + '%',
    delay: Math.random() * 5 + 's',
    duration: Math.random() * 5 + 5 + 's',
    size: Math.random() * 10 + 5 + 'px',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            animationDelay: flake.delay,
            animationDuration: flake.duration,
            fontSize: flake.size,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default SnowEffect;