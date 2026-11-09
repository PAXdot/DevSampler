"use client";

import { useDoodleUI } from "@/components/ui/checkbox-utils/doodle-ui-provider";
import { resolveAnimate } from "@/components/ui/checkbox-utils/resolve-animate";
import { usePrefersReducedMotion } from "@/components/ui/checkbox-utils/use-prefers-reduced-motion";

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
