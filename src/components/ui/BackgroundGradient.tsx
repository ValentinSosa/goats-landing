import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundGradientProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  children,
  className = '',
  containerClassName = '',
  animate = true,
}) => {
  return (
    <div className={`relative ${containerClassName}`}>
      <motion.div
        initial={animate ? { opacity: 0, scale: 0.95 } : {}}
        animate={animate ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform -skew-y-6 rounded-2xl opacity-70 blur-lg ${className}`}
      />
      <motion.div
        initial={animate ? { opacity: 0, y: 20 } : {}}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        {children}
      </motion.div>
    </div>
  );
};