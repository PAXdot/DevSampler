"use client";

/*!
 * Halaska UI — Select
 * (c) Halaska · https://ui.halaska.com · MIT License
 * Extracted from the single-file kit (halaska-kit-v1.0.jsx) as a standalone drop-in component.
 */

import { useState, useRef, useEffect, createContext, useContext } from "react";

// ─── TOKENS ─────────────────────────────────────────────────
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

function Select({
  value,
  onChange,
  options,
  placeholder,
  label,
  disabled,
  size = "md",
  theme: tp,
  style: sp,
}) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const listRef = useRef(null);
  const typed = useRef({ text: "", at: 0 });
  const uid = useUid("select");
  const [hoverIdx, setHoverIdx] = useState(-1);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const sizes = {
    sm: { ...tokens.type.sm, height: 32, px: 12 },
    md: { ...tokens.type.base, height: 38, px: 16 },
    lg: { ...tokens.type.md, height: 44, px: 16 },
  };
  const s = sizes[size];

  const valOf = (opt) => (typeof opt === "string" ? opt : opt.value);
  const labOf = (opt) => (typeof opt === "string" ? opt : opt.label);
  const selectedIdx = options.findIndex((opt) => valOf(opt) === value);
  const selectedLabel = selectedIdx >= 0 ? labOf(options[selectedIdx]) : null;

  // Keep the active option in view while moving with the keyboard.
  useEffect(() => {
    if (!open || hoverIdx < 0) return;
    const el = listRef.current?.children[hoverIdx];
    if (el && el.scrollIntoView) el.scrollIntoView({ block: "nearest" });
  }, [open, hoverIdx]);

  const openList = () => {
    setOpen(true);
    setHoverIdx(selectedIdx >= 0 ? selectedIdx : 0);
  };
  const pick = (i) => {
    if (options[i] != null) onChange?.(valOf(options[i]));
    setOpen(false);
  };
  const onKeyDown = (e) => {
    if (disabled) return;
    const last = options.length - 1;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) return openList();
      setHoverIdx((i) =>
        e.key === "ArrowDown" ? Math.min(last, i + 1) : Math.max(0, i - 1),
      );
    } else if (e.key === "Home" && open) {
      e.preventDefault();
      setHoverIdx(0);
    } else if (e.key === "End" && open) {
      e.preventDefault();
      setHoverIdx(last);
    } else if ((e.key === "Enter" || e.key === " ") && open) {
      e.preventDefault();
      pick(hoverIdx);
    } else if (e.key === "Escape" && open) {
      e.stopPropagation();
      setOpen(false);
    } else if (e.key === "Tab") setOpen(false);
    else if (e.key.length === 1 && e.key !== " ") {
      // Type-ahead: jump to the first option starting with what was typed.
      const now = Date.now();
      typed.current = {
        text:
          (now - typed.current.at < 600 ? typed.current.text : "") +
          e.key.toLowerCase(),
        at: now,
      };
      const i = options.findIndex((opt) =>
        String(labOf(opt)).toLowerCase().startsWith(typed.current.text),
      );
      if (i >= 0) {
        if (open) setHoverIdx(i);
        else onChange?.(valOf(options[i]));
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, ...sp }}>
      {label && <Label theme={theme}>{label}</Label>}
      <div ref={ref} style={{ position: "relative" }}>
        <button
          type="button"
          disabled={disabled}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={labelText(label)}
          aria-controls={open ? `${uid}-list` : undefined}
          aria-activedescendant={
            open && hoverIdx >= 0 ? `${uid}-opt-${hoverIdx}` : undefined
          }
          onClick={() => {
            if (disabled) return;
            open ? setOpen(false) : openList();
          }}
          onKeyDown={onKeyDown}
          style={{
            ...interactiveBase,
            ...s,
            width: "100%",
            boxSizing: "border-box",
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: `0 ${s.px}px`,
            color: !value ? pal.textMuted : pal.text,
            background: disabled ? pal.bgSubtle : pal.bgInput,
            border: open
              ? `1.5px solid ${pal.borderFocus}`
              : "1.5px solid transparent",
            borderRadius: tokens.radius.md,
          }}
        >
          <span
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {selectedLabel || placeholder || "Select..."}
          </span>
          <span
            aria-hidden="true"
            style={{ color: pal.textTertiary, display: "inline-flex" }}
          >
            <ChevronIcon size={12} direction={open ? "up" : "down"} />
          </span>
        </button>
        {open && (
          <div
            ref={listRef}
            id={`${uid}-list`}
            role="listbox"
            style={{
              position: "absolute",
              top: "calc(100% + 4px)",
              left: 0,
              right: 0,
              zIndex: 50,
              background: pal.bgElevated,
              borderRadius: tokens.radius.md,
              boxShadow: `0 4px 20px ${pal.shadowLg}`,
              padding: 4,
              maxHeight: 200,
              overflowY: "auto",
              transformOrigin: "top center",
              animation: `halaska-dropdown-expand ${motion.fast} ${motion.easeOut} both`,
            }}
          >
            {options.map((opt, i) => {
              const val = valOf(opt);
              const lab = labOf(opt);
              const isActive = val === value;
              const isHover = hoverIdx === i;
              return (
                <button
                  key={val}
                  id={`${uid}-opt-${i}`}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  tabIndex={-1}
                  onMouseEnter={() => setHoverIdx(i)}
                  onMouseLeave={() => setHoverIdx(-1)}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => pick(i)}
                  style={{
                    ...interactiveBase,
                    width: "100%",
                    textAlign: "left",
                    padding: `${8 + 1}px ${12}px`,
                    ...tokens.type.base,
                    borderRadius: tokens.radius.sm,
                    color: isActive ? pal.text : pal.textSecondary,
                    fontWeight: isActive
                      ? tokens.weight.medium
                      : tokens.weight.regular,
                    background: isHover ? pal.bgSubtle : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: `background ${motion.normal} ${motion.easeInOut}, color ${motion.normal} ${motion.easeInOut}`,
                  }}
                >
                  {lab}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      style={{ fontSize: 12, color: pal.textTertiary }}
                    >
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export {
  tokens,
  motion,
  interactiveBase,
  usePal,
  useThemeContext,
  ThemeContext,
  AccentContext,
  useAccent,
  Label,
  ChevronIcon,
};
export default Select;
