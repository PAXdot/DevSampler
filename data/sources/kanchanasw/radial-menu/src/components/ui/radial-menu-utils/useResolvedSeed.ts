"use client";

import { useEffect, useState } from "react";
import { useOptionalSketchSeed } from "./SketchSeedContext";
import { DEFAULT_SEED, randomSeed } from "./utils";

export { DEFAULT_SEED };

/**
 * Resolves the seed used to draw a sketch.
 *
 * Priority: explicit `seed` prop → {@link SketchSeedProvider} → stable mount random.
 */
export function useResolvedSeed(seed?: number): number {
  const ctx = useOptionalSketchSeed();
  const hasProvider = ctx != null;
  const [clientSeed, setClientSeed] = useState<number | null>(null);

  useEffect(() => {
    if (seed != null || hasProvider) return;
    setClientSeed(randomSeed());
  }, [seed, hasProvider]);

  if (seed != null) return seed;
  if (ctx) return ctx.seed;
  return clientSeed ?? DEFAULT_SEED;
}
