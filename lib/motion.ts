import type { Transition } from "framer-motion";

export const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function fadeUpVariant(delay = 0): { hidden: object; visible: object } {
  return {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: EASE_OUT_EXPO,
      } satisfies Transition,
    },
  };
}
