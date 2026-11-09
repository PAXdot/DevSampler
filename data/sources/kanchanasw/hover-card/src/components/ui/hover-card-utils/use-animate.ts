"use client";

import { useDoodleUI } from "./doodle-ui-provider";
import { resolveAnimate } from "./resolve-animate";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

/**
 * Whether the calling component should play sketch animations.
 *
 * @param animate - Per-component override; when set, wins over the provider
 * @returns `true` when draw-in / morph animations should run
 *
 * @example
 * const shouldAnimate = useAnimate(props.animate);
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
