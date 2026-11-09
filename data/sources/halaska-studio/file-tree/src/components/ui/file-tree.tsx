"use client";

import { useState, createContext, useContext } from "react";

/*!
 * Halaska UI: UX patterns & components for AI products
 * (c) Halaska · https://ui.halaska.com · MIT License
 * Verbatim excerpt (FileTree + its shared primitives) from the single-file kit.
 */

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
    text: "#3d3d3d",
    textSecondary: "#888888",
    textTertiary: "#aaaaaa",
    accent: "#8b5cf6",
    accentText: "#8b5cf6",
    accentBg: "#f5f3ff",
  },
  dark: {
    bg: "#1a1a1a",
    bgElevated: "#2a2a2a",
    bgSubtle: "#222222",
    bgMuted: "#333333",
    text: "#d8d8d8",
    textSecondary: "#999999",
    textTertiary: "#6a6a6a",
    accent: "#a78bfa",
    accentText: "#a78bfa",
    accentBg: "rgba(167,139,250,0.12)",
  },
};

const motion = {
  normal: "var(--halaska-t-normal, 0.25s)",
  smooth: "var(--halaska-t-smooth, 0.35s)",
  easeInOut: "var(--halaska-e-inout, cubic-bezier(0.4, 0, 0.2, 1))",
  emphasized: "var(--halaska-e-emph, cubic-bezier(0.2, 0, 0, 1))",
};

const ThemeContext = createContext("light");
function useThemeContext() {
  return useContext(ThemeContext);
}

function usePal(themeProp) {
  const ctxTheme = useThemeContext();
  const theme = themeProp || ctxTheme;
  return theme === "dark" ? tokens.dark : tokens.light;
}

const interactiveBase = {
  fontFamily: tokens.font.sans,
  cursor: "pointer",
  border: "none",
  outline: "none",
  transition: `all ${motion.normal} ${motion.easeInOut}`,
};

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

function FileTreeFolderIcon({ open, color }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      {open ? (
        <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />
      ) : (
        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      )}
    </svg>
  );
}

function FileTreeFileIcon({ color }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function FileTreeNode({ node, depth, theme }) {
  const pal = usePal(theme);
  const [open, setOpen] = useState(node.defaultOpen ?? true);
  const [hover, setHover] = useState(false);
  const isFolder = !!node.children;
  return (
    <div>
      <button
        type="button"
        aria-expanded={isFolder ? open : undefined}
        onClick={() => isFolder && setOpen((o) => !o)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          ...interactiveBase,
          display: "flex",
          alignItems: "center",
          gap: 7,
          width: "100%",
          padding: "4px 8px",
          paddingLeft: 8 + depth * 16,
          borderRadius: tokens.radius.xs,
          background: hover ? pal.bgSubtle : "transparent",
          textAlign: "left",
          cursor: isFolder ? "pointer" : "default",
        }}
      >
        {isFolder ? (
          <ChevronIcon
            size={9}
            direction={open ? "down" : "right"}
            style={{ color: pal.textTertiary, flexShrink: 0 }}
          />
        ) : (
          <span style={{ width: 9, flexShrink: 0 }} />
        )}
        {isFolder ? (
          <FileTreeFolderIcon open={open} color={pal.textSecondary} />
        ) : (
          <FileTreeFileIcon color={pal.textTertiary} />
        )}
        <span
          style={{
            ...tokens.type.sm,
            fontFamily: tokens.font.mono,
            color: isFolder ? pal.text : pal.textSecondary,
            transition: `color ${motion.smooth} ${motion.easeInOut}`,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {node.name}
        </span>
        {node.badge && (
          <span
            style={{
              ...tokens.type.xxs,
              fontFamily: tokens.font.mono,
              color: pal.accentText,
              background: pal.accentBg,
              padding: "1px 6px",
              borderRadius: tokens.radius.pill,
              marginLeft: "auto",
              flexShrink: 0,
              transition: `all ${motion.smooth} ${motion.easeInOut}`,
            }}
          >
            {node.badge}
          </span>
        )}
      </button>
      {isFolder && (
        <div
          aria-hidden={!open}
          style={{
            overflow: "hidden",
            maxHeight: open ? node.children.length * 200 : 0,
            opacity: open ? 1 : 0,
            visibility: open ? "visible" : "hidden",
            transition: `max-height 0.35s ${motion.emphasized}, opacity ${motion.normal} ${motion.easeInOut}, visibility 0s linear ${open ? "0s" : "0.35s"}`,
          }}
        >
          {node.children.map((child, i) => (
            <FileTreeNode
              key={child.name + i}
              node={child}
              depth={depth + 1}
              theme={theme}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FileTree({ data = [], theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        fontFamily: tokens.font.sans,
        ...sp,
      }}
    >
      {data.map((node, i) => (
        <FileTreeNode key={node.name + i} node={node} depth={0} theme={theme} />
      ))}
    </div>
  );
}

export default FileTree;
