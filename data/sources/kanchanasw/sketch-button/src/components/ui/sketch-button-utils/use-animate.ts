"use client";

import { useDoodleUI } from "./doodle-ui-provider";
import { resolveAnimate } from "./resolve-animate";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

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
