import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
}

const RevealText: React.FC<RevealTextProps> = ({ children, className = '', delay = 0 }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const chars = textRef.current.querySelectorAll('.char');

    gsap.fromTo(
      chars,
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power4.out',
        stagger: 0.03,
        delay: delay,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [delay]);

  const renderChars = () => {
    return children.split('').map((char, index) => (
      <span
        key={index}
        className="char inline-block overflow-hidden"
        style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
      >
        <span className="inline-block">{char === ' ' ? '\u00A0' : char}</span>
      </span>
    ));
  };

  return (
    <div ref={textRef} className={className}>
      {renderChars()}
    </div>
  );
};

export default RevealText;
