"use client";

import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/** Reactive `prefers-reduced-motion: reduce`.
 *
 *  Starts as false and reads the real preference only once mounted: the
 *  server cannot know it, so reading it during the first render would make
 *  that render differ from the server HTML (a hydration mismatch). Stays
 *  false where matchMedia doesn't exist (SSR, old browsers). */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    const media = window.matchMedia(QUERY);
    setReduced(media.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
