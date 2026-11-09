"use client";

import {
  createContext,
  useContext,
  useMemo,
  type CSSProperties,
  type ReactNode,
} from "react";
import type { FillStyle } from "@/components/ui/pagination-utils/types";

export type DoodleUITheme = "light" | "dark" | "system";

export interface DoodleUIContextValue {
  animate: boolean;
  forceAnimate: boolean;
  theme?: DoodleUITheme;
  roughness?: number;
  strokeWidth?: number;
  sketchColor?: string;
  fillStyle?: FillStyle;
  bowing?: number;
}

const DoodleUIContext = createContext<DoodleUIContextValue | null>(null);

export interface DoodleUIProviderProps {
  children: ReactNode;
  animate?: boolean;
  forceAnimate?: boolean;
  theme?: DoodleUITheme;
  roughness?: number;
  strokeWidth?: number;
  sketchColor?: string;
  fillStyle?: FillStyle;
  bowing?: number;
}

export function DoodleUIProvider({
  children,
  animate = true,
  forceAnimate = false,
  theme = "system",
  roughness,
  strokeWidth,
  sketchColor,
  fillStyle,
  bowing,
}: DoodleUIProviderProps) {
  const value = useMemo(
    () => ({
      animate,
      forceAnimate,
      theme,
      roughness,
      strokeWidth,
      sketchColor,
      fillStyle,
      bowing,
    }),
    [
      animate,
      forceAnimate,
      theme,
      roughness,
      strokeWidth,
      sketchColor,
      fillStyle,
      bowing,
    ],
  );

  const scopeStyle = useMemo((): CSSProperties => {
    const vars: Record<string, string | number> = {};
    if (roughness !== undefined) vars["--doodle-ui-roughness"] = roughness;
    if (strokeWidth !== undefined) vars["--doodle-ui-stroke-width"] = strokeWidth;
    if (sketchColor !== undefined) vars["--doodle-ui-stroke-color"] = sketchColor;
    if (fillStyle !== undefined) vars["--doodle-ui-fill-style"] = fillStyle;
    if (bowing !== undefined) vars["--doodle-ui-bowing"] = bowing;
    return vars as CSSProperties;
  }, [roughness, strokeWidth, sketchColor, fillStyle, bowing]);

  const hasSketchVars = Object.keys(scopeStyle).length > 0;
  const hasExplicitTheme = theme === "light" || theme === "dark";
  const needsScopeWrapper = hasSketchVars || hasExplicitTheme;

  const scopeClassName =
    theme === "dark" ? "dark" : theme === "light" ? "light" : undefined;

  return (
    <DoodleUIContext.Provider value={value}>
      {needsScopeWrapper ? (
        <div
          style={{ display: "contents", ...scopeStyle }}
          data-theme={hasExplicitTheme ? theme : undefined}
          className={scopeClassName}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </DoodleUIContext.Provider>
  );
}

export function useDoodleUI(): DoodleUIContextValue {
  return (
    useContext(DoodleUIContext) ?? { animate: true, forceAnimate: false, theme: "system" }
  );
}

export { DoodleUIContext };
