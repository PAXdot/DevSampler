export interface ResolveAnimateInput {
  animate?: boolean;
  providerAnimate?: boolean;
  forceAnimate?: boolean;
  prefersReducedMotion?: boolean;
}

export function resolveAnimate({
  animate,
  providerAnimate = true,
  forceAnimate = false,
  prefersReducedMotion = false,
}: ResolveAnimateInput): boolean {
  if (prefersReducedMotion && !forceAnimate) return false;
  if (animate !== undefined) return animate;
  return providerAnimate;
}
