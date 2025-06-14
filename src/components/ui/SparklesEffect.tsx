import React, { useEffect, useState } from 'react';
import { motion, MotionStyle } from 'framer-motion';

interface SparkleProps {
  color?: string;
  size?: number;
  style?: MotionStyle;
}

const Sparkle: React.FC<SparkleProps> = ({
  color = '#FFC700',
  size = 4,
  style = {},
}) => {
  const path =
    'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 71 34 71C34 71 35.8193 50.7065 44.5 43.5C51.6298 36.647 71 34 71 34C71 34 51.6471 33.5972 44.5 25.5C36.5605 16.7901 34 0 34 0C34 0 33.6591 17.1505 26.5 25.5Z';

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 68 68"
      style={{
        position: 'absolute',
        ...style,
      }}
      initial={{ scale: 0, rotate: 0 }}
      animate={{ scale: 1, rotate: 360 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 10,
      }}
    >
      <path d={path} fill={color} />
    </motion.svg>
  );
};

interface SparklesEffectProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SparklesEffect: React.FC<SparklesEffectProps> = ({
  children,
  className = '',
  id
}) => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; createdAt: number; color: string; size: number; style: MotionStyle }>>([]);

  useEffect(() => {
    const generateSparkle = () => {
      const sparkleColors = ['#FFC700', '#FF0044', '#00DDFF'];
      const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)] ?? '#FFC700';
      const size = Math.random() * 10 + 6;
      const createdAt = Date.now();
      const sparkleId = createdAt;

      const containerEl = document.getElementById(id ? id : 'sparkles-container');
      if (!containerEl) return null;

      const rect = containerEl.getBoundingClientRect();
      const style: MotionStyle = {
        top: `${Math.random() * rect.height}px`,
        left: `${Math.random() * rect.width}px`,
        zIndex: 2,
      };

      return {
        id: sparkleId,
        createdAt,
        color,
        size,
        style,
      };
    };

    const interval = setInterval(() => {
      const now = Date.now();
      const sparkle = generateSparkle();
      if (sparkle) {
        setSparkles(prevSparkles => [...prevSparkles, sparkle]);
      }

      setSparkles(prevSparkles =>
        prevSparkles.filter(sparkle => now - sparkle.createdAt < 600)
      );
    }, 400);

    return () => clearInterval(interval);
  }, [id]);

  return (
    <div id={id || 'sparkles-container'} className={`relative inline-block ${className}`}>
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <div className="relative z-10">{children}</div>
    </div>
  );
};