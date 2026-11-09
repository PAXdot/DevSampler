"use client";

import { useDoodleUI } from "./DoodleUIProvider";
import { resolveAnimate } from "./resolveAnimate";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Whether the calling component should play sketch animations.
 */
export function useAnimate(animate?: boolean): boolean {
  const { animate: providerAnimate, forceAnimate } = useDoodleUI();
  const prefersReducedMotion = usePrefersReducedMotion();
  return resolveAnimate({
    animate,
    providerAnimate,
    forceAnimate,
    prefersReducedMotion,
  });
}
