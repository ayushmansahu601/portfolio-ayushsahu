import React, { useState, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

const CursorSnake: React.FC = () => {
  const [trail, setTrail] = useState<Point[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = { x: e.clientX, y: e.clientY };
      
      setTrail(prevTrail => {
        const newTrail = [newPoint, ...prevTrail];
        // Keep only the last 20 points for the trail
        return newTrail.slice(0, 20);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      <svg
        className="w-full h-full"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {trail.length > 1 && (
          <path
            d={`M ${trail.map(point => `${point.x},${point.y}`).join(' L ')}`}
            stroke="rgba(0, 255, 255, 0.6)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              filter: 'drop-shadow(0 0 6px rgba(0, 255, 255, 0.4))',
            }}
          />
        )}
        
        {trail.map((point, index) => {
          const opacity = (trail.length - index) / trail.length;
          const size = 2 + (opacity * 3);
          
          return (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r={size}
              fill={`rgba(0, 255, 255, ${opacity * 0.7})`}
              style={{
                filter: `drop-shadow(0 0 ${size}px rgba(0, 255, 255, ${opacity * 0.5}))`,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default CursorSnake;
