import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface MagneticCursorProps {
  disabled?: boolean;
}

const MagneticCursor: React.FC<MagneticCursorProps> = ({ disabled = false }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (disabled) return;

    const cursor = cursorRef.current;
    const cursorLabel = cursorLabelRef.current;
    if (!cursor || !cursorLabel) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const cursorLabel = target.getAttribute('data-cursor');

      if (cursorLabel) {
        setLabel(cursorLabel);
        gsap.to(cursor, {
          scale: 1.5,
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      // Magnetic effect
      if (target.classList.contains('magnetic')) {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const handleMagneticMove = (e: MouseEvent) => {
          const deltaX = (e.clientX - centerX) * 0.3;
          const deltaY = (e.clientY - centerY) * 0.3;

          gsap.to(target, {
            x: deltaX,
            y: deltaY,
            duration: 0.3,
            ease: 'power2.out'
          });
        };

        const handleMagneticLeave = () => {
          gsap.to(target, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)'
          });
          target.removeEventListener('mousemove', handleMagneticMove);
          target.removeEventListener('mouseleave', handleMagneticLeave);
        };

        target.addEventListener('mousemove', handleMagneticMove);
        target.addEventListener('mouseleave', handleMagneticLeave);
      }
    };

    const handleMouseLeave = () => {
      setLabel('');
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    // Hide cursor when leaving window
    const handleMouseEnterWindow = () => setIsVisible(true);
    const handleMouseLeaveWindow = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseenter', handleMouseEnterWindow);
    window.addEventListener('mouseleave', handleMouseLeaveWindow);

    // Add listeners to all elements with data-cursor or .magnetic
    const interactiveElements = document.querySelectorAll('[data-cursor], .magnetic, a, button');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseenter', handleMouseEnterWindow);
      window.removeEventListener('mouseleave', handleMouseLeaveWindow);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [disabled]);

  if (disabled || !isVisible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[10000] mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-full h-full bg-white rounded-full" />
        {label && (
          <div
            ref={cursorLabelRef}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
          >
            {label}
          </div>
        )}
      </div>
      {/* Hide default cursor */}
      <style dangerouslySetInnerHTML={{
        __html: `
          * {
            cursor: none !important;
          }
        `
      }} />
    </>
  );
};

export default MagneticCursor;
