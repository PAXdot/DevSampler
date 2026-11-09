"use client";

import type { CSSProperties, ReactNode } from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";

// ─── TOKENS (Halaska UI kit) ───────────────────────────────────

export const tokens = {
  space: { xs: 4, sm: 8, md: 16, lg: 32, xl: 40, xxl: 80, xxxl: 160, xxxxl: 240 },
  radius: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, pill: 999 },
  type: {
    xxs: { fontSize: 9, lineHeight: 1.3 },
    xs: { fontSize: 10, lineHeight: 1.45 },
    sm: { fontSize: 12, lineHeight: 1.55, letterSpacing: "0.01em" },
    base: { fontSize: 13, lineHeight: 1.6, letterSpacing: "0.01em" },
    md: { fontSize: 14, lineHeight: 1.6, letterSpacing: "0.005em" },
    lg: { fontSize: 16, lineHeight: 1.5 },
    xl: { fontSize: 20, lineHeight: 1.35 },
    xxl: { fontSize: 24, lineHeight: 1.3 },
    xxxl: { fontSize: 32, lineHeight: 1.2 },
    display: { fontSize: 40, lineHeight: 1.15 },
  },
  font: {
    sans: "var(--halaska-sans, 'Geist'), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "var(--halaska-mono, 'Geist Mono'), 'SF Mono', 'Fira Code', monospace",
  },
  weight: { regular: 400, medium: 500, semibold: 600, bold: 700 },
  light: {
    bg: "#fafafa", bgElevated: "#ffffff", bgSubtle: "#f3f3f3", bgMuted: "#eeeeee", bgHover: "#e8e8e8", bgInput: "#f0f0f0",
    border: "#e5e5e5", borderSubtle: "#eeeeee", borderInput: "rgba(0,0,0,0.06)", borderFocus: "#444444",
    text: "#3d3d3d", textSecondary: "#888888", textTertiary: "#aaaaaa", textMuted: "#cccccc", textInverse: "#ffffff",
    shadow: "rgba(0,0,0,0.04)", shadowMd: "rgba(0,0,0,0.06)", shadowLg: "rgba(0,0,0,0.1)",
    accent: "#8b5cf6", accentHover: "#7c3aed", accentBg: "#f5f3ff", accentText: "#8b5cf6",
    success: "#22c55e", successHover: "#16a34a", successBg: "#f0fdf4",
    warning: "#f59e0b", warningHover: "#d97706", warningBg: "#fffbeb",
    danger: "#ef4444", dangerHover: "#dc2626", dangerBg: "#fef2f2",
  },
  dark: {
    bg: "#1a1a1a", bgElevated: "#2a2a2a", bgSubtle: "#222222", bgMuted: "#333333", bgHover: "#3d3d3d", bgInput: "#252525",
    border: "#3a3a3a", borderSubtle: "#2f2f2f", borderInput: "rgba(255,255,255,0.06)", borderFocus: "#cccccc",
    text: "#d8d8d8", textSecondary: "#999999", textTertiary: "#6a6a6a", textMuted: "#4a4a4a", textInverse: "#1a1a1a",
    shadow: "rgba(0,0,0,0.2)", shadowMd: "rgba(0,0,0,0.3)", shadowLg: "rgba(0,0,0,0.4)",
    accent: "#a78bfa", accentHover: "#8b5cf6", accentBg: "rgba(167,139,250,0.12)", accentText: "#a78bfa",
    success: "#4ade80", successHover: "#22c55e", successBg: "rgba(74,222,128,0.1)",
    warning: "#fbbf24", warningHover: "#f59e0b", warningBg: "rgba(251,191,36,0.1)",
    danger: "#f87171", dangerHover: "#ef4444", dangerBg: "rgba(248,113,113,0.1)",
  },
};

export const motion = {
  fast: "var(--halaska-t-fast, 0.15s)",
  normal: "var(--halaska-t-normal, 0.25s)",
  smooth: "var(--halaska-t-smooth, 0.35s)",
  spring: "var(--halaska-t-spring, 0.4s)",
  slow: "var(--halaska-t-slow, 0.5s)",
  easeInOut: "var(--halaska-e-inout, cubic-bezier(0.4, 0, 0.2, 1))",
  easeOut: "var(--halaska-e-out, cubic-bezier(0.0, 0, 0.2, 1))",
  easeIn: "var(--halaska-e-in, cubic-bezier(0.4, 0, 1, 1))",
  emphasized: "var(--halaska-e-emph, cubic-bezier(0.2, 0, 0, 1))",
  springCurve: "var(--halaska-e-spring, cubic-bezier(0.34, 1.56, 0.64, 1))",
};

const ThemeContext = createContext<"light" | "dark">("light");
export function useThemeContext() { return useContext(ThemeContext); }

const AccentContext = createContext<string | null>(null);
export function useAccent() { return useContext(AccentContext); }

function p(theme: "light" | "dark") {
  return theme === "dark" ? tokens.dark : tokens.light;
}

export function usePal(themeProp?: "light" | "dark") {
  const ctxTheme = useThemeContext();
  const theme = themeProp || ctxTheme;
  const accent = useAccent();
  const base = p(theme);
  if (!accent || accent === base.accent) return base;
  const hex = accent;
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  const hR = Math.max(0, r - 30), hG = Math.max(0, g - 30), hB = Math.max(0, b - 30);
  const hoverHex = `#${hR.toString(16).padStart(2, "0")}${hG.toString(16).padStart(2, "0")}${hB.toString(16).padStart(2, "0")}`;
  const bgAlpha = theme === "dark" ? 0.12 : 0.08;
  return {
    ...base,
    accent: hex,
    accentText: hex,
    accentHover: hoverHex,
    accentBg: `rgba(${r},${g},${b},${bgAlpha})`,
  };
}

export const interactiveBase: CSSProperties = {
  fontFamily: tokens.font.sans,
  cursor: "pointer",
  border: "none",
  outline: "none",
  transition: `all ${motion.normal} ${motion.easeInOut}`,
};

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Modal behaviour for overlays: moves focus inside when it opens, keeps Tab
// inside, closes on Escape, and returns focus to whatever opened it.
export function useModalFocus(open: boolean, onClose?: () => void) {
  const ref = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    if (!open || typeof document === "undefined") return;
    const opener = document.activeElement as HTMLElement | null;
    const items = () => (ref.current ? [...ref.current.querySelectorAll(FOCUSABLE)].filter((el) => (el as HTMLElement).getClientRects().length) as HTMLElement[] : []);
    const t = setTimeout(() => {
      const node = ref.current;
      if (node && !node.contains(document.activeElement)) ((items()[0] || node) as HTMLElement).focus({ preventScroll: true });
    }, 0);
    const onKey = (e: KeyboardEvent) => {
      const node = ref.current;
      if (e.key === "Escape") { e.stopPropagation(); closeRef.current?.(); return; }
      if (e.key !== "Tab" || !node) return;
      const list = items();
      if (!list.length) { e.preventDefault(); return; }
      const first = list[0], last = list[list.length - 1], active = document.activeElement;
      if (e.shiftKey && (active === first || !node.contains(active))) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && (active === last || !node.contains(active))) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey, true);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey, true);
      if (opener && opener.focus) opener.focus({ preventScroll: true });
    };
  }, [open]);
  return ref;
}

// A plain-text label can name a control for assistive tech.
export const labelText = (label: unknown) => (typeof label === "string" ? label : undefined);

export function Spinner({ size = 16, color }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" role="img" aria-label="Loading" style={{ animation: "halaska-spin 0.8s linear infinite" }}>
      <circle cx="8" cy="8" r="6" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeDasharray="28" strokeDashoffset="8" opacity="0.8" />
    </svg>
  );
}

interface ButtonProps {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: ReactNode;
  iconRight?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  theme?: "light" | "dark";
  style?: CSSProperties;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
  "aria-expanded"?: boolean;
  "aria-haspopup"?: boolean | "dialog" | "menu" | "listbox" | "tree" | "grid";
  "aria-describedby"?: string;
}

export function Button({
  children, variant = "primary", size = "md", icon, iconRight,
  disabled, loading, fullWidth, onClick, theme: tp, style: sp,
  type, "aria-label": ariaLabel, "aria-expanded": ariaExpanded, "aria-haspopup": ariaHaspopup, "aria-describedby": ariaDescribedby,
}: ButtonProps) {
  const ctx = useThemeContext(); const theme = tp || ctx; const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  const sizes: Record<string, CSSProperties & { fontSize: number }> = {
    sm: { padding: `${8 - 1}px ${12}px`, ...tokens.type.sm, height: 30 },
    md: { padding: `${8}px ${16}px`, ...tokens.type.base, height: 36 },
    lg: { padding: `${12}px ${24}px`, ...tokens.type.md, height: 42 },
    xl: { padding: `${16}px ${32}px`, ...tokens.type.lg, height: 48 },
  };

  const shadowColors: Record<string, string> = {
    primary: "inset 0 -2px 0 0 rgba(0,0,0,0.35)",
    secondary: "inset 0 -2px 0 0 rgba(0,0,0,0.05)",
    outline: "inset 0 -2px 0 0 rgba(0,0,0,0.08)",
    ghost: "inset 0 -2px 0 0 rgba(0,0,0,0.06)",
    accent: "inset 0 -2px 0 0 rgba(0,0,0,0.3)",
    danger: "inset 0 -2px 0 0 rgba(0,0,0,0.3)",
  };

  const brightnessMap: Record<string, number> = {
    primary: 1.15, secondary: 1.04, outline: 1.12, ghost: 1.12, accent: 1.06, danger: 1.06,
  };

  const variants: Record<string, CSSProperties> = {
    primary: { background: disabled ? pal.bgMuted : pal.text, color: disabled ? pal.textMuted : pal.textInverse },
    secondary: { background: disabled ? "transparent" : pal.bgMuted, color: disabled ? pal.textMuted : pal.text },
    outline: { background: disabled ? "transparent" : "transparent", color: disabled ? pal.textMuted : pal.text, border: `1.5px solid ${disabled ? pal.borderSubtle : pal.borderInput}` },
    ghost: { background: disabled ? "transparent" : "transparent", color: disabled ? pal.textMuted : pal.textSecondary },
    accent: { background: disabled ? pal.bgMuted : pal.accent, color: disabled ? pal.textMuted : "#ffffff" },
    danger: { background: disabled ? pal.bgMuted : pal.danger, color: disabled ? pal.textMuted : "#ffffff" },
  };

  const s = sizes[size]; const v = variants[variant] || variants.primary;
  const isHover = hover && !disabled && !loading;
  const shadow = shadowColors[variant] || shadowColors.primary;
  const brightness = brightnessMap[variant] || 1.12;

  return (
    <button
      onClick={disabled || loading ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      disabled={disabled}
      type={type} aria-label={ariaLabel} aria-expanded={ariaExpanded} aria-haspopup={ariaHaspopup} aria-describedby={ariaDescribedby} aria-busy={loading || undefined}
      style={{
        ...interactiveBase, ...s, border: "none", ...v,
        fontWeight: tokens.weight.medium, borderRadius: tokens.radius.md,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        gap: 8, width: fullWidth ? "100%" : "auto",
        transform: pressed && !disabled ? "scale(0.97)" : "scale(1)",
        opacity: loading ? 0.7 : 1, pointerEvents: disabled || loading ? "none" : "auto",
        letterSpacing: "-0.01em",
        boxShadow: isHover ? shadow : "none",
        filter: isHover ? `brightness(${brightness})` : "brightness(1)",
        transition: `all ${motion.normal} ${motion.easeInOut}, box-shadow ${motion.fast} ${motion.easeOut}, filter ${motion.fast} ${motion.easeOut}`,
        ...sp,
      }}
    >
      {loading && <Spinner size={s.fontSize} color={v.color as string} />}
      {!loading && icon && <span style={{ fontSize: s.fontSize + 2, lineHeight: 1, display: "flex" }}>{icon}</span>}
      <span style={{ fontFamily: tokens.font.sans, fontWeight: tokens.weight.medium }}>
        {children}
      </span>
      {iconRight && <span style={{ fontSize: s.fontSize + 2, lineHeight: 1, display: "flex" }}>{iconRight}</span>}
    </button>
  );
}
