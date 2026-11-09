"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { createPortal } from "react-dom";

export type BubbleContext = { text: string; range: Range | null };

export type BubbleAction = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  run?: (ctx: BubbleContext) => void;
  isActive?: (ctx: BubbleContext) => boolean;
  divider?: never;
};

export type BubbleItem = BubbleAction | { divider: true };

export type SelectionBubbleProps = {
  actions: BubbleItem[];
  children: React.ReactNode;
  offset?: number;
  dark?: boolean;
  className?: string;
};

type Anchor = { top: number; left: number; width: number; bottom: number };

const SPRING = { type: "spring" as const, stiffness: 520, damping: 30, mass: 0.6 };

function isAction(item: BubbleItem): item is BubbleAction {
  return !("divider" in item);
}

export function SelectionBubble({
  actions,
  children,
  offset = 10,
  dark,
  className,
}: SelectionBubbleProps) {
  const reduce = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const bubbleRef = React.useRef<HTMLDivElement>(null);
  const rangeRef = React.useRef<Range | null>(null);

  const [mounted, setMounted] = React.useState(false);
  const [anchor, setAnchor] = React.useState<Anchor | null>(null);
  const [text, setText] = React.useState("");
  const [size, setSize] = React.useState({ w: 0, h: 0 });
  const [vp, setVp] = React.useState({ w: 1024, h: 768 });
  const [, force] = React.useReducer((n) => n + 1, 0);

  React.useEffect(() => setMounted(true), []);

  const sync = React.useCallback(() => {
    const sel = typeof window !== "undefined" ? window.getSelection() : null;
    const container = containerRef.current;
    if (!sel || sel.isCollapsed || sel.rangeCount === 0 || !container) {
      setAnchor(null);
      rangeRef.current = null;
      return;
    }
    const range = sel.getRangeAt(0);
    if (!container.contains(range.commonAncestorContainer)) {
      setAnchor(null);
      rangeRef.current = null;
      return;
    }
    const r = range.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) {
      setAnchor(null);
      rangeRef.current = null;
      return;
    }
    rangeRef.current = range;
    setText(sel.toString());
    setVp({ w: window.innerWidth, h: window.innerHeight });
    setAnchor({ top: r.top, left: r.left, width: r.width, bottom: r.bottom });
  }, []);

  React.useEffect(() => {
    const onUp = () => window.setTimeout(sync, 0);
    const onSelChange = () => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) {
        setAnchor(null);
        rangeRef.current = null;
      }
    };
    const onScroll = () => {
      if (rangeRef.current) sync();
    };
    document.addEventListener("mouseup", onUp);
    document.addEventListener("keyup", onUp);
    document.addEventListener("selectionchange", onSelChange);
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    return () => {
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("keyup", onUp);
      document.removeEventListener("selectionchange", onSelChange);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
    };
  }, [sync]);

  React.useLayoutEffect(() => {
    if (bubbleRef.current) {
      const r = bubbleRef.current.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
    }
  }, [anchor, actions]);

  let placement: "top" | "bottom" = "top";
  let left = 0;
  let top = 0;
  if (anchor && size.w > 0) {
    const cx = anchor.left + anchor.width / 2;
    left = cx - size.w / 2;
    left = Math.min(Math.max(8, left), vp.w - 8 - size.w);
    const above = anchor.top - offset - size.h;
    if (above < 8) {
      placement = "bottom";
      top = anchor.bottom + offset;
    } else {
      placement = "top";
      top = above;
    }
  }

  const ctx: BubbleContext = { text, range: rangeRef.current };

  if (!mounted) return null;

  return (
    <>
      <div ref={containerRef} className={className}>
        {children}
      </div>

      {createPortal(
        <div className={dark ? "dark" : ""}>
          <AnimatePresence>
            {anchor && (
              <motion.div
                ref={bubbleRef}
                role="toolbar"
                aria-label="Formatting"
                className="fixed z-[9999] flex items-center gap-0.5 rounded-xl border border-zinc-700/60 bg-zinc-900 p-1 text-zinc-100 shadow-xl shadow-black/30 dark:border-zinc-200 dark:bg-white dark:text-zinc-900 dark:shadow-black/10"
                style={{ top, left }}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: placement === "top" ? 6 : -6, scale: 0.96 }}
                animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: placement === "top" ? 6 : -6, scale: 0.96 }}
                transition={SPRING}
                onMouseDown={(e) => e.preventDefault()}
              >
                {actions.map((item, i) =>
                  isAction(item) ? (
                    <BubbleButton
                      key={item.id}
                      action={item}
                      active={item.isActive?.(ctx) ?? false}
                      onRun={() => {
                        item.run?.({ text, range: rangeRef.current });
                        force();
                      }}
                    />
                  ) : (
                    <span key={`d${i}`} className="mx-0.5 h-5 w-px bg-zinc-700/70 dark:bg-zinc-200" />
                  ),
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>,
        document.body,
      )}
    </>
  );
}

function BubbleButton({
  action,
  active,
  onRun,
}: {
  action: BubbleAction;
  active: boolean;
  onRun: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={action.label}
      aria-pressed={active}
      onClick={onRun}
      className={
        "inline-flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-[13px] font-medium transition-colors " +
        (active
          ? "bg-white/15 text-white dark:bg-zinc-900/10 dark:text-zinc-900"
          : "text-zinc-300 hover:bg-white/10 hover:text-white dark:text-zinc-500 dark:hover:bg-zinc-900/5 dark:hover:text-zinc-900")
      }
    >
      {action.icon ?? action.label}
    </button>
  );
}
