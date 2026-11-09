"use client";

import { useState, useRef, useEffect, createContext, useContext } from "react";

// ─── Design tokens (Halaska UI kit) ───────────────────────────
export const tokens = {
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

const ThemeContext = createContext("light");
export function useThemeContext() {
  return useContext(ThemeContext);
}

const AccentContext = createContext(null);
function useAccent() {
  return useContext(AccentContext);
}

function p(theme) {
  const base = theme === "dark" ? tokens.dark : tokens.light;
  return base;
}

// Hook that returns palette with accent overrides applied
export function usePal(themeProp) {
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

// A stable id for linking a control to its popup or active option.
let uidCount = 0;
function useUid(prefix = "hk") {
  const ref = useRef(null);
  if (!ref.current) ref.current = `${prefix}-${++uidCount}`;
  return ref.current;
}

// A plain-text label can name a control for assistive tech.
const labelText = (label) => (typeof label === "string" ? label : undefined);

function Label({ children, required, htmlFor, theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return (
    <label
      htmlFor={htmlFor}
      style={{
        ...tokens.type.sm,
        fontWeight: tokens.weight.medium,
        fontFamily: tokens.font.sans,
        color: pal.textSecondary,
        display: "flex",
        alignItems: "center",
        gap: 4,
        transition: `color ${motion.smooth} ${motion.easeInOut}`,
        ...sp,
      }}
    >
      {children}
      {required && (
        <span aria-hidden="true" style={{ color: pal.danger }}>
          *
        </span>
      )}
    </label>
  );
}

function ChevronIcon({ size = 12, direction = "right", style }) {
  const rot = { right: 0, down: 90, left: 180, up: -90 }[direction] ?? 0;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        display: "inline-block",
        flexShrink: 0,
        transform: `rotate(${rot}deg)`,
        transition: `transform ${motion.normal} ${motion.easeInOut}`,
        ...style,
      }}
    >
      <polyline points="6,3 11,8 6,13" />
    </svg>
  );
}

function Combobox({
  options = [],
  value,
  onChange,
  placeholder = "Select…",
  label,
  theme: tp,
}) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [query, setQuery] = useState("");
  const [idx, setIdx] = useState(0);
  const ref = useRef(null);
  const uid = useUid("combo");
  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(query.toLowerCase()),
  );
  const selected = options.find((o) => o.value === value);
  const closeAndReturn = () => {
    setOpen(false);
    ref.current?.querySelector("[data-combobox-trigger]")?.focus();
  };
  useEffect(() => {
    const h = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        minWidth: 220,
      }}
    >
      {label && <Label theme={theme}>{label}</Label>}
      <button
        type="button"
        data-combobox-trigger
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={labelText(label)}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" && !open) {
            e.preventDefault();
            setOpen(true);
          }
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          ...interactiveBase,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 38,
          padding: "0 16px",
          background: pal.bgInput,
          borderRadius: tokens.radius.md,
          border: open
            ? `1.5px solid ${pal.borderFocus}`
            : hover
              ? `1.5px solid ${pal.borderSubtle}`
              : "1.5px solid transparent",
          color: selected ? pal.text : pal.textTertiary,
          ...tokens.type.base,
          fontFamily: tokens.font.sans,
          transition: `border-color ${motion.normal} ${motion.easeInOut}`,
        }}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <span style={{ color: pal.textTertiary, display: "inline-flex" }}>
          <ChevronIcon size={12} direction={open ? "up" : "down"} />
        </span>
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 4px)",
            left: 0,
            right: 0,
            zIndex: 100,
            background:
              theme === "dark"
                ? "rgba(30,30,30,0.95)"
                : "rgba(255,255,255,0.95)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: `1px solid ${pal.borderSubtle}`,
            borderRadius: tokens.radius.md,
            boxShadow: `0 8px 24px ${pal.shadowLg}`,
            animation: `halaska-scale-in ${motion.normal} ${motion.emphasized} both`,
            overflow: "hidden",
          }}
        >
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter…"
            aria-label="Filter options"
            aria-controls={`${uid}-list`}
            aria-activedescendant={
              filtered[idx] ? `${uid}-opt-${idx}` : undefined
            }
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setIdx((i) => Math.min(i + 1, filtered.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setIdx((i) => Math.max(i - 1, 0));
              } else if (e.key === "Enter") {
                e.preventDefault();
                if (filtered[idx]) {
                  onChange?.(filtered[idx].value);
                  closeAndReturn();
                }
              } else if (e.key === "Escape") {
                e.stopPropagation();
                closeAndReturn();
              }
            }}
            style={{
              width: "100%",
              padding: "10px 16px",
              background: "transparent",
              border: "none",
              outline: "none",
              borderBottom: `1px solid ${pal.borderSubtle}`,
              color: pal.text,
              fontFamily: tokens.font.sans,
              ...tokens.type.sm,
              boxSizing: "border-box",
            }}
          />
          <div
            id={`${uid}-list`}
            role="listbox"
            style={{ maxHeight: 200, overflowY: "auto", padding: 4 }}
          >
            {filtered.length === 0 ? (
              <div
                style={{
                  padding: 12,
                  textAlign: "center",
                  color: pal.textTertiary,
                  ...tokens.type.sm,
                }}
              >
                No results
              </div>
            ) : (
              filtered.map((o, i) => (
                <button
                  key={o.value}
                  id={`${uid}-opt-${i}`}
                  type="button"
                  role="option"
                  aria-selected={o.value === value}
                  tabIndex={-1}
                  onClick={() => {
                    onChange?.(o.value);
                    closeAndReturn();
                  }}
                  onMouseEnter={() => setIdx(i)}
                  style={{
                    ...interactiveBase,
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: tokens.radius.sm,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: idx === i ? pal.bgSubtle : "transparent",
                    color: pal.text,
                    ...tokens.type.sm,
                    textAlign: "left",
                    fontFamily: tokens.font.sans,
                    transition: `background ${motion.fast} ${motion.easeInOut}`,
                  }}
                >
                  <span>{o.label}</span>
                  {o.value === value && (
                    <span style={{ color: pal.accent, fontSize: 12 }}>✓</span>
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Combobox;
