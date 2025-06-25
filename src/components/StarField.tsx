import React, { useState, useEffect } from 'react';
import Star from './Star';

interface StarData {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

const StarField: React.FC = () => {
  const [stars, setStars] = useState<StarData[]>([]);
  const [attachedStar, setAttachedStar] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const generateStars = () => {
      const newStars: StarData[] = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2, // 2-6px
          delay: Math.random() * 3, // 0-3s delay
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  const handleStarHover = (starId: number) => {
    if (!isDragging && attachedStar === null) {
      setAttachedStar(starId);
    } else if (isDragging && attachedStar !== null && attachedStar !== starId) {
      // Switch to new star when dragging over another star
      setAttachedStar(starId);
    }
  };

  const handleStarLeave = () => {
    if (!isDragging) {
      setAttachedStar(null);
    }
  };

  const handleMouseDown = (starId: number) => {
    setAttachedStar(starId);
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Keep star attached until mouse leaves or hovers another star
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging && attachedStar !== null) {
        // Check if mouse is over another star
        const elementUnderMouse = document.elementFromPoint(e.clientX, e.clientY);
        if (elementUnderMouse && elementUnderMouse.closest('.star-point')) {
          const starElement = elementUnderMouse.closest('.star-point') as HTMLElement;
          const starIndex = Array.from(starElement.parentElement?.children || []).indexOf(starElement);
          if (starIndex >= 0 && starIndex !== attachedStar) {
            setAttachedStar(starIndex);
          }
        }
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('mousemove', handleGlobalMouseMove);
    
    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging, attachedStar]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="relative w-full h-full pointer-events-auto">
        {stars.map((star) => (
          <Star
            key={star.id}
            x={star.x}
            y={star.y}
            size={star.size}
            delay={star.delay}
            onHover={() => handleStarHover(star.id)}
            onLeave={handleStarLeave}
            onMouseDown={() => handleMouseDown(star.id)}
            onMouseUp={handleMouseUp}
            isAttached={attachedStar === star.id}
            isDragging={isDragging}
          />
        ))}
      </div>
    </div>
  );
};

export default StarField;
