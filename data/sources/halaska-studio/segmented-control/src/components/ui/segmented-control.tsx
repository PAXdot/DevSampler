"use client";

/*!
 * Halaska UI: SegmentedControl
 * (c) Halaska · https://ui.halaska.com · MIT License
 * Extracted from the single-file kit (halaska-kit-v1.0.jsx) together with
 * the exact tokens/motion/theme helpers it relies on.
 */

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from "react";

// ─── Tokens ─────────────────────────────────────────────────
const tokens = {
  space: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 40,
    xxl: 80,
    xxxl: 160,
    xxxxl: 240,
  },
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
    bg: "#fafafa",
    bgElevated: "#ffffff",
    bgSubtle: "#f3f3f3",
    bgMuted: "#eeeeee",
    bgHover: "#e8e8e8",
    bgInput: "#f0f0f0",
    border: "#e5e5e5",
    borderSubtle: "#eeeeee",
    borderInput: "rgba(0,0,0,0.06)",
    borderFocus: "#444444",
    text: "#3d3d3d",
    textSecondary: "#888888",
    textTertiary: "#aaaaaa",
    textMuted: "#cccccc",
    textInverse: "#ffffff",
    shadow: "rgba(0,0,0,0.04)",
    shadowMd: "rgba(0,0,0,0.06)",
    shadowLg: "rgba(0,0,0,0.1)",
    accent: "#8b5cf6",
    accentHover: "#7c3aed",
    accentBg: "#f5f3ff",
    accentText: "#8b5cf6",
    success: "#22c55e",
    successHover: "#16a34a",
    successBg: "#f0fdf4",
    warning: "#f59e0b",
    warningHover: "#d97706",
    warningBg: "#fffbeb",
    danger: "#ef4444",
    dangerHover: "#dc2626",
    dangerBg: "#fef2f2",
  },
  dark: {
    bg: "#1a1a1a",
    bgElevated: "#2a2a2a",
    bgSubtle: "#222222",
    bgMuted: "#333333",
    bgHover: "#3d3d3d",
    bgInput: "#252525",
    border: "#3a3a3a",
    borderSubtle: "#2f2f2f",
    borderInput: "rgba(255,255,255,0.06)",
    borderFocus: "#cccccc",
    text: "#d8d8d8",
    textSecondary: "#999999",
    textTertiary: "#6a6a6a",
    textMuted: "#4a4a4a",
    textInverse: "#1a1a1a",
    shadow: "rgba(0,0,0,0.2)",
    shadowMd: "rgba(0,0,0,0.3)",
    shadowLg: "rgba(0,0,0,0.4)",
    accent: "#a78bfa",
    accentHover: "#8b5cf6",
    accentBg: "rgba(167,139,250,0.12)",
    accentText: "#a78bfa",
    success: "#4ade80",
    successHover: "#22c55e",
    successBg: "rgba(74,222,128,0.1)",
    warning: "#fbbf24",
    warningHover: "#f59e0b",
    warningBg: "rgba(251,191,36,0.1)",
    danger: "#f87171",
    dangerHover: "#ef4444",
    dangerBg: "rgba(248,113,113,0.1)",
  },
};

const motion = {
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

// ─── Theme / accent context ───────────────────────────────────
const ThemeContext = createContext("light");
function useThemeContext() {
  return useContext(ThemeContext);
}

const AccentContext = createContext(null);
function useAccent() {
  return useContext(AccentContext);
}

function p(theme) {
  return theme === "dark" ? tokens.dark : tokens.light;
}

function usePal(themeProp) {
  const ctxTheme = useThemeContext();
  const theme = themeProp || ctxTheme;
  const accent = useAccent();
  const base = p(theme);
  if (!accent || accent === base.accent) return base;
  const hex = accent;
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  const hR = Math.max(0, r - 30),
    hG = Math.max(0, g - 30),
    hB = Math.max(0, b - 30);
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

const interactiveBase = {
  fontFamily: tokens.font.sans,
  cursor: "pointer",
  border: "none",
  outline: "none",
  transition: `all ${motion.normal} ${motion.easeInOut}`,
};

// Arrow keys move focus between the items of a group (tabs, menus, radios).
function arrowNav(
  e,
  {
    selector = "button:not([disabled])",
    horizontal = true,
    vertical = true,
    onEscape,
  } = {},
) {
  if (e.key === "Escape" && onEscape) {
    e.stopPropagation();
    onEscape();
    return null;
  }
  const prev =
    (horizontal && e.key === "ArrowLeft") || (vertical && e.key === "ArrowUp");
  const next =
    (horizontal && e.key === "ArrowRight") ||
    (vertical && e.key === "ArrowDown");
  if (!prev && !next && e.key !== "Home" && e.key !== "End") return null;
  const items = [...e.currentTarget.querySelectorAll(selector)];
  if (!items.length) return null;
  const i = items.indexOf(document.activeElement);
  const target =
    e.key === "Home"
      ? items[0]
      : e.key === "End"
        ? items[items.length - 1]
        : items[(i + (next ? 1 : -1) + items.length) % items.length];
  e.preventDefault();
  target.focus();
  return target;
}

function SegmentedControl({ options, value, onChange, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [indicator, setIndicator] = useState({});
  const containerRef = useRef(null);
  const btnRefs = useRef({});

  const update = useCallback(() => {
    const btn = btnRefs.current[value];
    const container = containerRef.current;
    if (btn && container) {
      const cR = container.getBoundingClientRect();
      const bR = btn.getBoundingClientRect();
      setIndicator({ left: bR.left - cR.left, width: bR.width });
    }
  }, [value]);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  return (
    <div
      ref={containerRef}
      role="radiogroup"
      onKeyDown={(e) => {
        const el = arrowNav(e);
        if (el) el.click();
      }}
      style={{
        display: "flex",
        alignItems: "center",
        background:
          theme === "dark" ? "rgba(51,51,51,0.5)" : "rgba(238,238,238,0.6)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderRadius: tokens.radius.md,
        padding: 3,
        position: "relative",
        transition: `all ${motion.smooth} ${motion.easeInOut}`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 3,
          height: "calc(100% - 6px)",
          background: pal.bgElevated,
          borderRadius: tokens.radius.sm + 2,
          boxShadow: `0 1px 3px ${pal.shadow}`,
          transition: `left ${motion.smooth} ${motion.emphasized}, width ${motion.normal} ${motion.easeInOut}, background ${motion.smooth} ${motion.easeInOut}`,
          ...indicator,
        }}
      />
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          role="radio"
          aria-checked={value === opt}
          tabIndex={value === opt ? 0 : -1}
          ref={(el) => (btnRefs.current[opt] = el)}
          onClick={() => onChange(opt)}
          style={{
            ...interactiveBase,
            position: "relative",
            zIndex: 1,
            padding: "6px 14px",
            background: "transparent",
            ...tokens.type.sm,
            flex: "1 0 auto",
            fontWeight:
              value === opt ? tokens.weight.medium : tokens.weight.regular,
            color: value === opt ? pal.text : pal.textTertiary,
            borderRadius: tokens.radius.sm + 2,
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default SegmentedControl;
