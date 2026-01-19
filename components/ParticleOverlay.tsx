
import React, { useState, useImperativeHandle, forwardRef, useEffect } from 'react';

export interface ParticleHandle {
  explode: (x: number, y: number, color: string, count?: number) => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number; // 0 to 1
  decay: number;
}

const ParticleOverlay = forwardRef<ParticleHandle, {}>((props, ref) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useImperativeHandle(ref, () => ({
    explode: (x, y, color, count = 12) => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 2;
        newParticles.push({
          id: Date.now() + Math.random(),
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color,
          size: Math.random() * 6 + 4,
          life: 1.0,
          decay: Math.random() * 0.03 + 0.02
        });
      }
      setParticles(prev => [...prev, ...newParticles]);
    }
  }));

  useEffect(() => {
    let animationId: number;
    
    const update = () => {
      setParticles(prev => {
        if (prev.length === 0) return prev;
        
        return prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.2, // Gravity
            life: p.life - p.decay
          }))
          .filter(p => p.life > 0);
      });
      animationId = requestAnimationFrame(update);
    };

    animationId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-[100] overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.life,
            transform: `scale(${p.life})`,
            borderRadius: '2px', // Square-ish particles fit the theme better
            boxShadow: `0 0 4px ${p.color}`
          }}
        />
      ))}
    </div>
  );
});

ParticleOverlay.displayName = 'ParticleOverlay';

export default ParticleOverlay;
