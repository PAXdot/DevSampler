"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useIsomorphicLayoutEffect } from "@/components/ui/checkbox-utils/use-isomorphic-layout-effect";
import { DEFAULT_SEED, nextFontIndex, randomSeed } from "@/components/ui/checkbox-utils/utils";

export interface SketchSeedContextValue {
  seed: number;
  fontIndex: number;
  shuffle: () => void;
  setSeed: (seed: number) => void;
}

const SketchSeedContext = createContext<SketchSeedContextValue | null>(null);

export interface SketchSeedProviderProps {
  children: ReactNode;
  initialSeed?: number;
  fonts?: readonly string[];
  initialFontIndex?: number;
}

export function SketchSeedProvider({
  children,
  initialSeed,
  fonts,
  initialFontIndex = 0,
}: SketchSeedProviderProps) {
  const [seed, setSeed] = useState(() => initialSeed ?? DEFAULT_SEED);
  const [fontIndex, setFontIndex] = useState(initialFontIndex);
  const fontCount = fonts?.length ?? 0;

  useEffect(() => {
    if (initialSeed !== undefined) return;
    setSeed(randomSeed());
  }, [initialSeed]);

  const shuffle = useCallback(() => {
    setSeed(randomSeed());
    setFontIndex((current) => nextFontIndex(current, fontCount));
  }, [fontCount]);

  const activeFamily = fontIndex > 0 ? fonts?.[fontIndex] : undefined;

  useIsomorphicLayoutEffect(() => {
    const root = document.documentElement;
    if (activeFamily) {
      root.style.setProperty("--doodle-ui-font", activeFamily);
      root.style.setProperty("--doodle-ui-font-weight", "400");
    } else {
      root.style.setProperty("--doodle-ui-font", "initial");
      root.style.setProperty("--doodle-ui-font-weight", "initial");
    }
    return () => {
      root.style.removeProperty("--doodle-ui-font");
      root.style.removeProperty("--doodle-ui-font-weight");
    };
  }, [activeFamily]);

  const value = useMemo(
    () => ({ seed, fontIndex, shuffle, setSeed }),
    [seed, fontIndex, shuffle],
  );

  return (
    <SketchSeedContext.Provider value={value}>
      {children}
    </SketchSeedContext.Provider>
  );
}

export function useSketchSeed(): SketchSeedContextValue {
  const ctx = useContext(SketchSeedContext);
  if (!ctx) {
    throw new Error(
      "useSketchSeed() must be used inside <SketchSeedProvider>. Wrap your tree so Shuffle can redraw every sketch.",
    );
  }
  return ctx;
}

export function useOptionalSketchSeed(): SketchSeedContextValue | null {
  return useContext(SketchSeedContext);
}

export { SketchSeedContext };
