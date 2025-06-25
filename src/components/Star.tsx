
import React, { useEffect, useState } from 'react';

interface StarProps {
  x: number;
  y: number;
  size: number;
  delay: number;
  onHover: (star: { x: number; y: number }) => void;
  onLeave: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  isAttached: boolean;
  isDragging: boolean;
}

const Star: React.FC<StarProps> = ({ 
  x, 
  y, 
  size, 
  delay, 
  onHover, 
  onLeave, 
  onMouseDown,
  onMouseUp,
  isAttached,
  isDragging 
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (isAttached) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isAttached]);

  const starStyle = isAttached
    ? {
        left: `${mousePos.x}px`,
        top: `${mousePos.y}px`,
        position: 'fixed' as const,
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }
    : {
        left: `${x}%`,
        top: `${y}%`,
        position: 'absolute' as const,
      };

  return (
    <div
      className={`star-point cursor-pointer transition-all duration-300 select-none ${
        isAttached ? 'scale-150' : 'hover:scale-125'
      }`}
      style={{
        ...starStyle,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
      }}
      onMouseEnter={() => onHover({ x, y })}
      onMouseLeave={onLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <div
        className={`w-full h-full rounded-full animate-star-twinkle ${
          isAttached 
            ? 'bg-tech-cyan shadow-lg shadow-tech-cyan/50' 
            : 'bg-gradient-to-r from-tech-cyan to-tech-purple'
        }`}
        style={{
          boxShadow: isAttached 
            ? `0 0 20px rgba(0, 255, 255, 0.8)` 
            : `0 0 ${size * 2}px rgba(6, 182, 212, 0.6)`,
        }}
      />
    </div>
  );
};

export default Star;
