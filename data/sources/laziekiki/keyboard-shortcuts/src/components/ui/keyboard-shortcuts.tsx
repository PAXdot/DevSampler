"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { createPortal } from "react-dom";

export type Shortcut = {
  keys: string | string[];
  label: string;
};

export type ShortcutGroup = {
  heading: string;
  items: Shortcut[];
};

export type ShortcutsDialogProps = {
  groups: ShortcutGroup[];
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  searchable?: boolean;
  title?: string;
  dark?: boolean;
  className?: string;
};

const SPRING = { type: "spring" as const, stiffness: 360, damping: 30, mass: 0.7 };

const isMac =
  typeof navigator !== "undefined" && /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);

function glyph(token: string): string {
  const t = token.trim().toLowerCase();
  const map: Record<string, string> = {
    mod: isMac ? "⌘" : "Ctrl",
    cmd: "⌘",
    meta: "⌘",
    ctrl: "Ctrl",
    control: "Ctrl",
    shift: "⇧",
    alt: isMac ? "⌥" : "Alt",
    option: "⌥",
    enter: "↵",
    return: "↵",
    esc: "Esc",
    escape: "Esc",
    space: "Space",
    tab: "⇥",
    backspace: "⌫",
    del: "⌦",
    delete: "⌦",
    up: "↑",
    down: "↓",
    left: "←",
    right: "→",
    plus: "+",
  };
  if (map[t]) return map[t];
  return token.length === 1 ? token.toUpperCase() : token.charAt(0).toUpperCase() + token.slice(1);
}

function parseCombo(combo: string): { chord: string[]; sequence: boolean } {
  const trimmed = combo.trim();
  if (trimmed.includes(" ") && !trimmed.includes("+")) {
    return { chord: trimmed.split(/\s+/).map(glyph), sequence: true };
  }
  return { chord: trimmed.split("+").map(glyph), sequence: false };
}

function toAlternatives(keys: string | string[]): string[] {
  return Array.isArray(keys) ? keys : [keys];
}

export function ShortcutsDialog({
  groups,
  open,
  onOpenChange,
  searchable = true,
  title = "Keyboard shortcuts",
  dark,
  className,
}: ShortcutsDialogProps) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const rootRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!open) return;
    setQuery("");
    const t = window.setTimeout(() => inputRef.current?.focus(), 40);
    return () => window.clearTimeout(t);
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onOpenChange?.(false);
        return;
      }
      if (e.key !== "Tab") return;
      const root = rootRef.current;
      if (!root) return;
      const focusable = root.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return groups;
    return groups
      .map((g) => ({
        ...g,
        items: g.items.filter((it) => {
          const keyText = toAlternatives(it.keys).join(" ").toLowerCase();
          return (
            it.label.toLowerCase().includes(q) ||
            keyText.includes(q) ||
            g.heading.toLowerCase().includes(q)
          );
        }),
      }))
      .filter((g) => g.items.length > 0);
  }, [groups, query]);

  if (!mounted) return null;

  return createPortal(
    <div ref={rootRef} className={dark === undefined ? undefined : dark ? "dark" : ""}>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9998] flex items-start justify-center overflow-y-auto p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.16 }}
          >
            <div
              className="fixed inset-0 bg-zinc-950/40 backdrop-blur-[2px] dark:bg-black/60"
              onClick={() => onOpenChange?.(false)}
              aria-hidden
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={title}
              className={
                "relative z-[1] mt-8 w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-200 bg-white text-zinc-900 shadow-2xl shadow-zinc-950/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 sm:mt-0 " +
                (className ?? "")
              }
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
              transition={SPRING}
            >
              <div className="flex items-center justify-between gap-3 border-b border-zinc-100 px-4 py-3 dark:border-zinc-800">
                <h2 className="text-[14px] font-semibold tracking-tight">{title}</h2>
                <button
                  onClick={() => onOpenChange?.(false)}
                  aria-label="Close"
                  className="grid h-7 w-7 place-items-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {searchable && (
                <div className="flex items-center gap-2 border-b border-zinc-100 px-4 py-2.5 dark:border-zinc-800">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-zinc-400" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3" />
                  </svg>
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search shortcuts"
                    className="w-full bg-transparent text-[13px] text-zinc-800 placeholder:text-zinc-400 focus:outline-none dark:text-zinc-100"
                  />
                </div>
              )}

              <div className="max-h-[60vh] overflow-y-auto px-3 py-1.5 [scrollbar-color:#d4d4d8_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-[3px] [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-300 [&::-webkit-scrollbar-thumb]:bg-clip-content [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-2.5 dark:[scrollbar-color:#52525b_transparent] dark:[&::-webkit-scrollbar-thumb]:bg-zinc-600">
                {filtered.length === 0 ? (
                  <p className="px-2 py-10 text-center text-[13px] text-zinc-400">
                    No shortcuts match "{query}".
                  </p>
                ) : (
                  filtered.map((group, gi) => (
                    <div key={group.heading} className={gi === 0 ? "" : "mt-1"}>
                      <p className="px-2 pb-1 pt-3 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-zinc-400/90">
                        {group.heading}
                      </p>
                      <ul>
                        {group.items.map((item) => (
                          <li
                            key={item.label}
                            className="group/row flex items-center justify-between gap-4 rounded-lg px-2 py-[7px] transition-colors hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60"
                          >
                            <span className="truncate text-[13px] text-zinc-700 dark:text-zinc-300">
                              {item.label}
                            </span>
                            <Keys keys={item.keys} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>

              <div className="flex items-center justify-between border-t border-zinc-100 px-4 py-2.5 text-[11.5px] text-zinc-400 dark:border-zinc-800">
                <span className="flex items-center gap-1.5">
                  Press <Kbd label="?" /> anywhere to open this
                </span>
                <span className="flex items-center gap-1.5">
                  <Kbd label="Esc" /> to close
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>,
    document.body,
  );
}

function Keys({ keys }: { keys: string | string[] }) {
  const alts = toAlternatives(keys);
  return (
    <span className="flex shrink-0 items-center gap-2">
      {alts.map((combo, ai) => {
        const { chord, sequence } = parseCombo(combo);
        return (
          <React.Fragment key={combo}>
            {ai > 0 && <span className="text-[10.5px] text-zinc-300 dark:text-zinc-600">or</span>}
            <span className="flex items-center gap-[3px]">
              {chord.map((k, ki) => (
                <React.Fragment key={k + ki}>
                  {sequence && ki > 0 && (
                    <span className="px-[3px] text-[10.5px] italic text-zinc-400">then</span>
                  )}
                  <Kbd label={k} />
                </React.Fragment>
              ))}
            </span>
          </React.Fragment>
        );
      })}
    </span>
  );
}

function Kbd({ label }: { label: string }) {
  const square = label.length <= 1;
  return (
    <kbd
      className={
        "inline-flex h-[22px] items-center justify-center rounded-[6px] border border-zinc-200/90 bg-gradient-to-b from-white to-zinc-50 text-center font-sans text-[11.5px] font-medium leading-none text-zinc-600 shadow-[0_1px_0_rgba(0,0,0,0.04),inset_0_-1px_0_rgba(0,0,0,0.03)] dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-800/70 dark:text-zinc-300 dark:shadow-[0_1px_0_rgba(0,0,0,0.3)] " +
        (square ? "w-[22px]" : "px-1.5")
      }
    >
      {label}
    </kbd>
  );
}

export function useShortcuts(triggerKey = "?") {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      const typing =
        !!el &&
        (el.tagName === "INPUT" ||
          el.tagName === "TEXTAREA" ||
          el.isContentEditable ||
          el.getAttribute?.("role") === "textbox");
      if (typing) return;
      if (e.key === triggerKey) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [triggerKey]);

  return { open, setOpen, toggle: () => setOpen((o) => !o) };
}
