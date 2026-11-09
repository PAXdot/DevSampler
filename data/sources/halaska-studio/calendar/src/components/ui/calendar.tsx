"use client";

import { useState, useContext, createContext } from "react";

// ─── TOKENS (verbatim from Halaska UI kit: halaska-kit-v1.0.jsx) ──────────
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

const ThemeContext = createContext("light");
function useThemeContext() {
  return useContext(ThemeContext);
}

// Accent color context: allows live accent swapping
const AccentContext = createContext(null);
function useAccent() {
  return useContext(AccentContext);
}

function p(theme) {
  const base = theme === "dark" ? tokens.dark : tokens.light;
  return base;
}

// Hook that returns palette with accent overrides applied
function usePal(themeProp) {
  const ctxTheme = useThemeContext();
  const theme = themeProp || ctxTheme;
  const accent = useAccent();
  const base = p(theme);
  if (!accent || accent === base.accent) return base;
  // Generate variants from the accent hex
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

// ─── CALENDAR (verbatim from Halaska UI kit) ──────────────────────────────
function Calendar({ value, onChange, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const today = new Date();
  const [view, setView] = useState(value || today);
  const year = view.getFullYear();
  const month = view.getMonth();
  const first = new Date(year, month, 1);
  const startDay = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  const monthName = first.toLocaleString("default", { month: "long" });
  const sameDate = (a, b) =>
    a &&
    b &&
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear();
  return (
    <div
      style={{
        width: 260,
        padding: 16,
        background: pal.bgElevated,
        borderRadius: tokens.radius.md,
        border: `1px solid ${pal.borderSubtle}`,
        fontFamily: tokens.font.sans,
        transition: `all ${motion.smooth} ${motion.easeInOut}`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <button
          type="button"
          aria-label="Previous month"
          onClick={() => setView(new Date(year, month - 1, 1))}
          style={{
            ...interactiveBase,
            background: "transparent",
            padding: "4px 8px",
            color: pal.textSecondary,
            borderRadius: tokens.radius.sm,
            ...tokens.type.base,
          }}
        >
          ‹
        </button>
        <div
          aria-live="polite"
          style={{
            ...tokens.type.sm,
            fontWeight: tokens.weight.medium,
            color: pal.text,
          }}
        >
          {monthName} {year}
        </div>
        <button
          type="button"
          aria-label="Next month"
          onClick={() => setView(new Date(year, month + 1, 1))}
          style={{
            ...interactiveBase,
            background: "transparent",
            padding: "4px 8px",
            color: pal.textSecondary,
            borderRadius: tokens.radius.sm,
            ...tokens.type.base,
          }}
        >
          ›
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 2,
        }}
        onKeyDown={(e) => {
          // Arrow keys move between days: left and right by a day, up and down by a week.
          const delta = {
            ArrowLeft: -1,
            ArrowRight: 1,
            ArrowUp: -7,
            ArrowDown: 7,
          }[e.key];
          if (!delta) return;
          const days = [
            ...e.currentTarget.querySelectorAll("button:not([disabled])"),
          ];
          const i = days.indexOf(document.activeElement);
          if (i < 0 || !days[i + delta]) return;
          e.preventDefault();
          days[i + delta].focus();
        }}
      >
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div
            key={i}
            aria-hidden="true"
            style={{
              ...tokens.type.xxs,
              color: pal.textTertiary,
              textAlign: "center",
              padding: "6px 0",
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            {d}
          </div>
        ))}
        {cells.map((d, i) => {
          const date = d ? new Date(year, month, d) : null;
          const isToday = sameDate(date, today);
          const isSelected = sameDate(date, value);
          return (
            <button
              key={i}
              type="button"
              disabled={!d}
              aria-hidden={!d || undefined}
              aria-pressed={d ? isSelected : undefined}
              aria-current={isToday ? "date" : undefined}
              aria-label={
                date
                  ? date.toLocaleDateString("default", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : undefined
              }
              onClick={() => d && onChange?.(date)}
              style={{
                ...interactiveBase,
                padding: "6px 0",
                borderRadius: tokens.radius.sm,
                background: isSelected ? pal.accent : "transparent",
                color: !d
                  ? "transparent"
                  : isSelected
                    ? "#fff"
                    : isToday
                      ? pal.accent
                      : pal.text,
                fontWeight:
                  isToday || isSelected
                    ? tokens.weight.semibold
                    : tokens.weight.regular,
                ...tokens.type.sm,
                border:
                  isToday && !isSelected
                    ? `1px solid ${pal.accent}`
                    : "1px solid transparent",
                transition: `all ${motion.fast} ${motion.easeInOut}`,
              }}
            >
              {d || ""}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
