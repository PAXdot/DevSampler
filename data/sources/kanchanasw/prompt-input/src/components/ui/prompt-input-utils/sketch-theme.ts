"use client";

/**
 * Lightweight stand-in for doodle-ui's useSketchTheme hook (ported from
 * packages/doodle-ui/src/hooks/useSketchTheme.ts and
 * packages/doodle-ui/src/types.ts, MIT License,
 * Copyright (c) 2026 KanchanaSW (doodle-ui)). Resolves ink/accent colors
 * from the nearest `.dark` class instead of a DoodleUIProvider context, so
 * the component adapts to whichever light/dark theme it is rendered in.
 */

import { useEffect, useState } from "react";

const DEFAULT_INK = "#1f1d1a";
const DEFAULT_DARK_INK = "#f3f4f6";
const SKETCH_ACCENT = "#e24b3b";
const DARK_SKETCH_ACCENT = "#f87171";

function checkIsDark(): boolean {
  if (typeof document === "undefined") return false;
  const root = document.documentElement;
  if (root.classList.contains("light")) return false;
  if (root.classList.contains("dark")) return true;
  if (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-color-scheme: dark)").matches
  ) {
    return true;
  }
  return false;
}

export interface SketchTheme {
  isDark: boolean;
  ink: string;
  accent: string;
}

export function useSketchTheme(override?: string): SketchTheme {
  const [isDark, setIsDark] = useState<boolean>(checkIsDark);

  useEffect(() => {
    const update = () => setIsDark(checkIsDark());
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    mq?.addEventListener?.("change", update);
    return () => {
      observer.disconnect();
      mq?.removeEventListener?.("change", update);
    };
  }, []);

  const ink = override ?? (isDark ? DEFAULT_DARK_INK : DEFAULT_INK);
  const accent = isDark ? DARK_SKETCH_ACCENT : SKETCH_ACCENT;
  return { isDark, ink, accent };
}
