
import React, { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  duration?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "",
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export const LineReveal: React.FC<{ text: string, className?: string, delay?: number }> = ({ text, className = "" }) => {
  return (
    <div className={className}>
      {text}
    </div>
  );
};
