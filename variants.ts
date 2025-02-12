import { Variants } from "framer-motion";

// Define valid directions for the animation
type FadeDirection = 'up' | 'down' | 'left' | 'right';

// Interface for the transition configuration
interface TransitionConfig {
  type: "tween";
  duration: number;
  delay: number;
  ease: number[];
}

/**
 * Creates a fade animation variant based on the specified direction and delay
 * @param direction - The direction of the fade animation ('up', 'down', 'left', 'right')
 * @param delay - The delay before the animation starts (in seconds)
 * @returns Framer Motion variants configuration
 */
export const fadeIn = (direction: FadeDirection, delay: number): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      } as TransitionConfig,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      } as TransitionConfig,
    },
  };
};
