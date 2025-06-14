import React, { useRef, useState } from 'react';

interface CardSpotlightProps {
  children: React.ReactNode;
  className?: string;
}

export const CardSpotlight: React.FC<CardSpotlightProps> = ({
  children,
  className = '',
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPosition({ x, y });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-200 dark:border-slate-800 dark:bg-slate-900 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(100, 149, 237, 0.15), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};