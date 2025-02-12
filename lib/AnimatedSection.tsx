'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FC, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

/**
 * AnimatedSection component that wraps content with fade animation
 * @param children - The content to be animated
 * @param className - Optional CSS classes
 * @param direction - Animation direction (default: 'up')
 * @param delay - Animation delay in seconds (default: 0)
 */
export const AnimatedSection: FC<AnimatedSectionProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0
}) => {
  return (
    <motion.div
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Example usage in the same file
export const ExampleUsage: FC = () => {
  return (
    <div className="grid gap-8">
      {/* Basic usage with default values */}
      <AnimatedSection>
        <h1>This fades in from bottom to top</h1>
      </AnimatedSection>

      {/* Fade in from left with delay */}
      <AnimatedSection direction="left" delay={0.2}>
        <p>This content slides in from the left after a small delay</p>
      </AnimatedSection>

      {/* Fade in from right with longer delay */}
      <AnimatedSection direction="right" delay={0.4}>
        <div className="bg-gray-100 p-4 rounded">
          <h2>Card Title</h2>
          <p>This entire card slides in from the right with a longer delay</p>
        </div>
      </AnimatedSection>

      {/* Staggered animations from bottom */}
      <div className="grid grid-cols-3 gap-4">
        {['First', 'Second', 'Third'].map((item, index) => (
          <AnimatedSection 
            key={item} 
            direction="up" 
            delay={0.2 * index}
            className="bg-blue-100 p-4 rounded"
          >
            <p>{item} item</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};
