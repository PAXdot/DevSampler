import { createContext, useContext } from "react";

type Theme = "dark" | "light";
export type GlassMode = "glass" | "liquid-glass";

export interface GlassSettings {
  blur: number;
  transparency: number;
  saturation: number;
}

export interface LiquidGlassSettings {
  profile: string;
  bezel: number;
  refraction: number;
  thickness: number;
  lightAngle: number;
  specularOpacity: number;
  transparency: number;
  blur: number;
  saturation: number;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
  mode: GlassMode;
  setMode: (mode: GlassMode) => void;
  toggleMode: () => void;
  glass: GlassSettings;
  setGlass: (settings: Partial<GlassSettings>) => void;
  resetGlass: () => void;
  liquidGlass: LiquidGlassSettings;
  setLiquidGlass: (settings: Partial<LiquidGlassSettings>) => void;
  resetLiquidGlass: () => void;
}

const defaultGlass: GlassSettings = {
  blur: 17,
  transparency: 10,
  saturation: 100,
};

const defaultLiquidGlass: LiquidGlassSettings = {
  profile: "convex-circle",
  bezel: 9,
  refraction: 90,
  thickness: 120,
  lightAngle: -150,
  specularOpacity: 10,
  transparency: 20,
  blur: 10,
  saturation: 100,
};

// Context default values mirror the source library's ThemeProvider defaults
// (glass mode, default glass/liquidGlass settings). This card never needs a
// mounted <ThemeProvider> ancestor: useGlassSurface() only reads these
// context values, so the default object below is enough for it to render
// correctly out of the box.
const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
  isDark: true,
  mode: "glass",
  setMode: () => {},
  toggleMode: () => {},
  glass: defaultGlass,
  setGlass: () => {},
  resetGlass: () => {},
  liquidGlass: defaultLiquidGlass,
  setLiquidGlass: () => {},
  resetLiquidGlass: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}
