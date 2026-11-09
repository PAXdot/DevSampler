export interface ResolveAnimateInput {
  animate?: boolean;
  providerAnimate?: boolean;
  forceAnimate?: boolean;
  prefersReducedMotion?: boolean;
}

/**
 * Resolve whether sketch animations should run.
 * `prefers-reduced-motion: reduce` wins unless `forceAnimate` is set.
 * An explicit per-component `animate` prop then wins over the provider.
 */
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
