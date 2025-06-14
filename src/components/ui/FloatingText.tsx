import React from 'react';

import { motion } from 'framer-motion';

interface FloatingTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const FloatingText: React.FC<FloatingTextProps> = ({ 
  text, 
  className = '',
  delay = 0
}) => {
  const words = text.split(' ');
  
  return (
    <div className={`overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <div key={i} className="inline-block mr-2">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  );
};