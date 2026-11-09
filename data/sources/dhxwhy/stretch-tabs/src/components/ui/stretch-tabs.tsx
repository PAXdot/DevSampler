"use client";

import * as React from "react";

type DivProps = React.ComponentProps<"div">;

export type StretchTabItem = {
  value: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  content?: React.ReactNode;
  disabled?: boolean;
};

export type StretchTabsProps = {
  items: StretchTabItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  variant?: "underline" | "pill" | "segment";
  stretch?: number;
  duration?: number;
  panelTransition?: "slide" | "fade" | "none";
  compact?: boolean;
  "aria-label"?: string;
  className?: string;
  listClassName?: string;
  panelClassName?: string;
  ref?: DivProps["ref"];
};

type Box = { left: number; width: number };

const LIST = {
  underline: "relative flex items-end gap-1 border-b border-border",
  pill: "relative flex items-center gap-1 rounded-full",
  segment: "relative flex items-center gap-1 rounded-xl bg-muted p-1",
} as const;

const INDICATOR = {
  underline: "bottom-0 h-0.5 rounded-full bg-primary",
  pill: "inset-y-0 rounded-full bg-primary",
  segment: "inset-y-1 rounded-lg bg-background shadow-sm ring-1 ring-border/60",
} as const;

const TAB = {
  underline: "h-9 px-3 pb-2.5 text-sm text-muted-foreground data-[state=active]:text-foreground",
  pill: "h-9 px-3.5 text-sm text-muted-foreground data-[state=active]:text-primary-foreground",
  segment: "h-8 px-3 text-sm text-muted-foreground data-[state=active]:text-foreground",
} as const;

const COMPACT_TAB = {
  underline: "h-8 px-2 pb-2 text-xs text-muted-foreground data-[state=active]:text-foreground",
  pill: "h-7 px-2.5 text-xs text-muted-foreground data-[state=active]:text-primary-foreground",
  segment: "h-7 px-2 text-xs text-muted-foreground data-[state=active]:text-foreground",
} as const;

function useReducedMotion() {
  const [reduced, setReduced] = React.useState(true);
  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return reduced;
}

export function StretchTabs({
  items,
  value,
  defaultValue,
  onValueChange,
  variant = "segment",
  stretch = 1,
  duration = 380,
  panelTransition = "slide",
  compact = false,
  "aria-label": ariaLabel = "Tabs",
  className = "",
  listClassName = "",
  panelClassName = "",
  ref,
}: StretchTabsProps) {
  const reduced = useReducedMotion();
  const baseId = React.useId();
  const firstEnabled = items.find((item) => !item.disabled)?.value ?? items[0]?.value ?? "";
  const [localValue, setLocalValue] = React.useState(defaultValue ?? firstEnabled);
  const active = value ?? localValue;
  const listRef = React.useRef(null as HTMLDivElement | null);
  const indicatorRef = React.useRef(null as HTMLSpanElement | null);
  const panelRef = React.useRef(null as HTMLDivElement | null);
  const tabRefs = React.useRef({} as { [value: string]: HTMLButtonElement | null });
  const previous = React.useRef(active);
  const animation = React.useRef(null as Animation | null);
  const activeIndex = Math.max(0, items.findIndex((item) => item.value === active));

  const select = (next: string) => {
    if (next === active) return;
    if (value === undefined) setLocalValue(next);
    onValueChange?.(next);
  };

  const boxOf = (tabValue: string): Box | null => {
    const tab = tabRefs.current[tabValue];
    return tab ? { left: tab.offsetLeft, width: tab.offsetWidth } : null;
  };

  const place = (box: Box) => {
    const indicator = indicatorRef.current;
    if (!indicator) return;
    indicator.style.transform = `translateX(${box.left}px)`;
    indicator.style.width = `${box.width}px`;
  };

  React.useLayoutEffect(() => {
    const indicator = indicatorRef.current;
    const to = boxOf(active);
    const fromValue = previous.current;
    previous.current = active;
    if (!indicator || !to) return;
    const from = fromValue === active ? null : boxOf(fromValue);
    place(to);
    indicator.dataset.direction = from ? (to.left > from.left ? "forward" : "backward") : "none";
    if (!from || reduced || typeof indicator.animate !== "function") return;
    animation.current?.cancel();
    const unionLeft = Math.min(from.left, to.left);
    const unionWidth = Math.max(from.left + from.width, to.left + to.width) - unionLeft;
    const midLeft = (from.left + to.left) / 2;
    const midWidth = (from.width + to.width) / 2;
    const amount = Math.max(0, Math.min(1, stretch));
    const stretchedLeft = midLeft + (unionLeft - midLeft) * amount;
    const stretchedWidth = midWidth + (unionWidth - midWidth) * amount;
    animation.current = indicator.animate([
      { transform: `translateX(${from.left}px)`, width: `${from.width}px`, easing: "cubic-bezier(0.4, 0, 0.6, 1)" },
      { transform: `translateX(${stretchedLeft}px)`, width: `${stretchedWidth}px`, offset: 0.45, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
      { transform: `translateX(${to.left}px)`, width: `${to.width}px` },
    ], { duration });
    const panel = panelRef.current;
    if (panel && panelTransition !== "none") {
      const forward = to.left > from.left;
      const shift = panelTransition === "slide" ? (forward ? 24 : -24) : 0;
      panel.animate([{ opacity: 0, transform: `translateX(${shift}px)` }, { opacity: 1, transform: "translateX(0)" }], { duration: Math.max(200, duration * 0.8), easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
    }
  }, [active]);

  // Re-measure when the list or any tab changes size (container resize, label update, font swap).
  const itemKey = items.map((item) => item.value).join("|");
  React.useEffect(() => {
    const list = listRef.current;
    if (!list || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => { const box = boxOf(previous.current); if (box) { animation.current?.cancel(); place(box); } });
    for (const node of [list, ...Object.values(tabRefs.current)]) if (node) observer.observe(node, { box: "border-box" });
    return () => observer.disconnect();
  }, [itemKey]);

  React.useEffect(() => () => animation.current?.cancel(), []);

  const onKeyDown = (event: React.KeyboardEvent) => {
    const enabled = items.filter((item) => !item.disabled);
    const current = enabled.findIndex((item) => item.value === active);
    let next = -1;
    if (event.key === "ArrowRight") next = (current + 1) % enabled.length;
    else if (event.key === "ArrowLeft") next = (current - 1 + enabled.length) % enabled.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = enabled.length - 1;
    if (next < 0) return;
    event.preventDefault();
    const target = enabled[next]!;
    select(target.value);
    tabRefs.current[target.value]?.focus();
  };

  const activeItem = items[activeIndex];

  return (
    <div ref={ref} data-slot="stretch-tabs" data-variant={variant} data-value={active} data-compact={compact ? "true" : "false"} className={`w-full ${className}`}>
      <div ref={listRef} role="tablist" aria-label={ariaLabel} onKeyDown={onKeyDown} className={`${LIST[variant]} ${listClassName}`}>
        <span ref={indicatorRef} data-indicator aria-hidden="true" className={`pointer-events-none absolute left-0 w-0 will-change-transform ${INDICATOR[variant]}`} />
        {items.map((item) => {
          const selected = item.value === active;
          return (
            <button
              key={item.value}
              ref={(node) => { tabRefs.current[item.value] = node; }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.value}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.value}`}
              tabIndex={selected ? 0 : -1}
              disabled={item.disabled}
              data-state={selected ? "active" : "inactive"}
              data-value={item.value}
              onClick={() => select(item.value)}
              className={`relative z-10 inline-flex shrink-0 items-center gap-1.5 rounded-lg font-medium outline-none transition-colors duration-300 motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-40 ${(compact ? COMPACT_TAB : TAB)[variant]}`}
            >
              {item.icon}
              <span>{item.label}</span>
              {item.badge !== undefined && (
                <span data-badge className={`inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 font-mono text-[10px] tabular-nums transition-colors duration-300 motion-reduce:transition-none ${selected ? "bg-chart-2/20 text-foreground" : "bg-muted-foreground/15 text-muted-foreground"}`}>{item.badge}</span>
              )}
            </button>
          );
        })}
      </div>
      {activeItem?.content !== undefined && (
        <div
          key={active}
          ref={panelRef}
          role="tabpanel"
          id={`${baseId}-panel-${active}`}
          aria-labelledby={`${baseId}-tab-${active}`}
          tabIndex={0}
          data-panel
          className={`mt-4 outline-none focus-visible:ring-2 focus-visible:ring-ring ${panelClassName}`}
        >
          {activeItem.content}
        </div>
      )}
    </div>
  );
}

export default StretchTabs;
