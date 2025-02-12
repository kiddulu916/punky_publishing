'use client';

import { ComponentType } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

interface WithAnimationProps {
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

/**
 * Higher-order component that adds fade animation to any component
 * @param WrappedComponent - The component to be animated
 * @param defaultProps - Default animation properties
 */
export const withAnimation = <P extends object>(
  WrappedComponent: ComponentType<P>,
  defaultProps: WithAnimationProps = {
    direction: 'up',
    delay: 0,
  }
) => {
  return function WithAnimationComponent(props: P & WithAnimationProps) {
    const {
      direction = defaultProps.direction,
      delay = defaultProps.delay,
      className = '',
      ...componentProps
    } = props;

    return (
      <motion.div
        variants={fadeIn(direction!, delay!)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className={className}
      >
        <WrappedComponent {...(componentProps as P)} />
      </motion.div>
    );
  };
};
