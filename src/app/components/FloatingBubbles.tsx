'use client';

import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  translateX: number;
  translateY: number;
  duration: number;
}

const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Create initial bubbles
    const initialBubbles: Bubble[] = Array.from({ length: 125 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 50 + 20,
      translateX: Math.random() * 350 - 50,
      translateY: Math.random() * 350 - 50,
      duration: Math.random() * 20 + 10,
    }));

    setBubbles(initialBubbles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-white/15 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            '--translate-x': `${bubble.translateX}px`,
            '--translate-y': `${bubble.translateY}px`,
            animation: `float ${bubble.duration}s infinite`,
          } as React.CSSProperties}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(var(--translate-x), var(--translate-y));
          }
          50% {
            transform: translate(calc(var(--translate-x) * -1), var(--translate-y));
          }
          75% {
            transform: translate(var(--translate-x), calc(var(--translate-y) * -1));
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingBubbles; 