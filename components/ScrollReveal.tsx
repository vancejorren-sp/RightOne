
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  duration?: number;
}

// Premium "Quart Out" easing for a high-end, responsive feel
const premiumEase = [0.16, 1, 0.3, 1];

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = "",
  duration = 0.6
}) => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: directions[direction].y, 
        x: directions[direction].x 
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration, 
        delay, 
        ease: premiumEase 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const LineReveal: React.FC<{ text: string, className?: string, delay?: number }> = ({ text, className = "", delay = 0 }) => {
  return (
    <div className={`overflow-hidden py-2 px-2 -my-2 -mx-2 ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay, ease: premiumEase }}
      >
        {text}
      </motion.span>
    </div>
  );
};
