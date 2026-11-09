"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import useMeasure from "react-use-measure";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

// Fold-out toolbar. At rest it's one icon button showing the current tool,
// with a small notch in its corner saying there's more inside. Pressing it
// unfolds a tray of tools along one side, pushing whatever sits next to it out
// of the way. Picking a tool folds the tray back into the button.
//
// The picked tool is one object that morphs between the button and its slot:
// opening, its icon leaves the button and travels out to its place in the tray
// as its tile fills in; closing, it travels back and hands over to the button
// in the last frames, same spot and colour, so there's no visible swap. It
// rides the same spring as the tray's edge, which it never outruns, so it's
// never clipped. The other tools stay put and settle in as the edge reaches
// them. The tray's real width (or height) springs, measured from the row, so
// nothing inside is ever scaled. One highlight slides between tools on hover. Escape or a press outside folds
// it without a choice; arrow keys move between the tools. When the toolbar is
// active, the picked tool's fill rides home with it and rests on the button.

export type FoldTool = { value: string; label: string; icon: ReactNode; disabled?: boolean };

export type FoldToolbarProps = {
  tools: readonly FoldTool[];
  /** Picked tool (controlled). Pair with `onChange`. */
  value?: string;
  /** Picked tool on mount (uncontrolled). Defaults to the first tool. */
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Fires on every pick, including the tool that was already picked. Use it to make this toolbar the active one. */
  onPick?: (value: string) => void;
  /** This toolbar holds the tool in use: folded, the button keeps the picked tool's fill. `false` mutes the button like any idle tool; leave it unset for a standalone toolbar. */
  active?: boolean;
  /** Unfolded (controlled). Pair with `onOpenChange`. */
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Side the tray unfolds toward. */
  direction?: "right" | "left" | "down" | "up";
  /** Button size in px; every tool is this square. */
  size?: number;
  /** Corner radius of the buttons in px. The tray's runs parallel to it. */
  radius?: number;
  /** Seconds the tray takes to unfold. */
  duration?: number;
  /** Fold back as soon as a tool is picked. */
  closeOnSelect?: boolean;
  /** Fill behind the picked tool, with its icon in white. Empty gives a neutral tint. */
  accent?: string;
  /** Names the toolbar for screen readers, e.g. "Shapes". */
  label: string;
  className?: string;
};

const PAD = 2;

export function FoldToolbar({
  tools,
  value,
  defaultValue,
  onChange,
  onPick,
  active,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  direction = "right",
  size = 40,
  radius = 12,
  duration = 0.35,
  closeOnSelect = true,
  accent,
  label,
  className,
}: FoldToolbarProps) {
  const [innerValue, setInnerValue] = useState(defaultValue ?? tools[0]?.value);
  const selected = value ?? innerValue;
  const currentIndex = Math.max(0, tools.findIndex((t) => t.value === selected));
  const current = tools[currentIndex];
  const [innerOpen, setInnerOpen] = useState(defaultOpen);
  const open = openProp ?? innerOpen;
  // Whether the picked tool is home in the button. It leaves the moment the
  // tray opens or closes and only counts as home once its trip has finished,
  // so the button's own icon takes over exactly where the travelling one stops.
  const [landed, setLanded] = useState(!open);
  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    setLanded(false);
  }
  // The tool under the pointer, and whether the highlight glides there from
  // another tool or appears on it fresh (when the pointer has just come in).
  const [hover, setHover] = useState<{ i: number | null; glide: boolean }>({ i: null, glide: false });
  const hovered = hover.i;
  const setHovered = (i: number | null) => setHover((h) => ({ i, glide: h.i !== null && i !== null }));

  const vertical = direction === "up" || direction === "down";
  const reverse = direction === "left" || direction === "up";
  // +1 when the tray grows along the axis, -1 when it grows back against it.
  const sign = reverse ? -1 : 1;
  const axis = vertical ? "y" : "x";
  const cross = vertical ? "x" : "y";
  const step = size + PAD;

  const [rowRef, row] = useMeasure();
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const toolRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();

  const setOpen = (next: boolean) => {
    if (openProp === undefined) setInnerOpen(next);
    if (next !== open) onOpenChange?.(next);
    if (!next) setHovered(null);
  };

  const pick = (t: FoldTool) => {
    if (t.disabled) return;
    if (value === undefined) setInnerValue(t.value);
    if (t.value !== selected) onChange?.(t.value);
    onPick?.(t.value);
    if (closeOnSelect) {
      setOpen(false);
      trigger.current?.focus();
    }
  };

  // A press anywhere else folds the tray.
  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", away);
    return () => document.removeEventListener("pointerdown", away);
  });

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && open) {
      e.preventDefault();
      setOpen(false);
      trigger.current?.focus();
      return;
    }
    const back = vertical ? "ArrowUp" : "ArrowLeft";
    const fwd = vertical ? "ArrowDown" : "ArrowRight";
    if (e.key !== back && e.key !== fwd) return;
    // Arrows walk the visible order: trigger, then tools, in the direction they unfold.
    const order = [trigger.current, ...toolRefs.current.slice(0, tools.length).filter((b, i) => b && !tools[i].disabled)];
    if (reverse) order.reverse();
    if (!open || order.length < 2) return;
    const at = order.indexOf(document.activeElement as HTMLButtonElement);
    e.preventDefault();
    order[(at + (e.key === fwd ? 1 : -1) + order.length) % order.length]?.focus();
  };

  // Closed, the tray is just the button; open, it's the whole measured row.
  const closedExtent = size + PAD * 2;
  const openExtent = (vertical ? row.height : row.width) || closedExtent;
  // visualDuration is when it looks settled, so everything on this spring lands together.
  const spring = { type: "spring", visualDuration: duration, bounce: 0 } as const;
  const quick = { type: "spring", visualDuration: 0.2, bounce: 0 } as const;
  const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];
  // From tool i's slot back to the button: the tools before it, the button, and the 1px divider with its gaps.
  const home = (i: number) => -sign * ((i + 1) * step + 1 + PAD);
  // When a tool settles in, roughly as the tray's edge passes it.
  const reveal = (i: number) => Math.min(0.04 + i * 0.03, 0.2);
  const lineup = vertical ? (reverse ? "flex-col-reverse" : "flex-col") : reverse ? "flex-row-reverse" : "flex-row";
  // Highlights are pinned to the toolbar's first slot and translated to a tool's.
  const anchor = { [vertical ? (reverse ? "bottom" : "top") : reverse ? "right" : "left"]: 0, width: size, height: size, borderRadius: radius };
  const slot = (i: number) => sign * i * step;

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        ref={root}
        onKeyDown={onKeyDown}
        className={cn(
          "relative isolate flex shrink-0 overflow-hidden transition-colors",
          vertical ? "flex-col" : "flex-row",
          reverse ? "justify-end" : "justify-start",
          // A flat tint of whatever surface holds it, light or dark.
          open ? "bg-black/[0.045] dark:bg-white/[0.05]" : "bg-transparent",
          className,
        )}
        // The tint comes in quickly but leaves with the fold, so the shrinking tray never shows as a bare gap.
        style={{ borderRadius: radius + PAD, [vertical ? "width" : "height"]: closedExtent, transitionDuration: open ? "150ms" : `${duration * 900}ms` }}
        initial={false}
        animate={{ [vertical ? "height" : "width"]: open ? openExtent : closedExtent }}
        transition={spring}
      >
        <div ref={rowRef} className={cn("flex shrink-0 items-center", lineup)} style={{ padding: PAD, gap: PAD }}>
          <button
            ref={trigger}
            type="button"
            aria-label={open ? `Close ${label}` : `${label}: ${current?.label}`}
            aria-expanded={open}
            aria-controls={id}
            onClick={() => setOpen(!open)}
            className={cn(
              // Above the toolbar so the picked tool's fill, resting behind it, never covers its icon.
              // Only the hover tint fades; the icon colour switches with the fill in the same frame.
              "relative z-10 grid shrink-0 cursor-pointer place-items-center overflow-hidden outline-none transition-[background-color] duration-150",
              "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-400 [&_svg]:size-5",
              active && accent && !open ? "text-white" : active === false && !open ? "text-muted-foreground hover:text-foreground" : "text-foreground",
              open ? "hover:bg-black/[0.05] dark:hover:bg-white/[0.07]" : "hover:bg-black/[0.045] dark:hover:bg-white/[0.07]",
            )}
            style={{ width: size, height: size, borderRadius: radius }}
          >
            {/* The picked tool's icon. It hands over to the travelling tool the moment the tray opens and takes back over as it lands. */}
            <span className="col-start-1 row-start-1 grid place-items-center" style={{ opacity: landed ? 1 : 0 }}>
              {current?.icon}
            </span>
            <AnimatePresence initial={false}>
              {open && (
                <motion.span
                  key="close"
                  className="col-start-1 row-start-1 grid place-items-center"
                  initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.8, transition: { duration: 0.1, ease: EASE } }}
                  transition={{ ...quick, opacity: { duration: 0.15, ease: EASE, delay: 0.08 } }}
                >
                  <IconX stroke={1.75} />
                </motion.span>
              )}
            </AnimatePresence>
            {/* Says the button holds more tools; it tucks away while they're out. */}
            <motion.svg
              aria-hidden
              viewBox="0 0 5 5"
              className="pointer-events-none absolute right-[5px] bottom-[5px] !size-[5px] fill-current"
              initial={false}
              animate={{ opacity: open ? 0 : 0.6, scale: open ? 0.4 : 1 }}
              transition={quick}
            >
              <path d="M5 0V4a1 1 0 0 1-1 1H0Z" />
            </motion.svg>
          </button>

          <motion.span
            aria-hidden
            className={cn("shrink-0 rounded-full bg-border", vertical ? "h-px" : "w-px")}
            style={vertical ? { width: size * 0.5 } : { height: size * 0.5 }}
            initial={false}
            animate={{ opacity: open ? 1 : 0 }}
            transition={{ duration: open ? 0.2 : 0.1, ease: EASE }}
          />

          <div
            id={id}
            role="toolbar"
            aria-label={label}
            aria-orientation={vertical ? "vertical" : "horizontal"}
            inert={!open}
            onPointerLeave={() => setHovered(null)}
            className={cn("relative isolate flex shrink-0", lineup)}
            style={{ gap: PAD }}
          >
            {/* Hover and picked highlights glide from tool to tool instead of each tool lighting up on its own. */}
            <motion.span
              aria-hidden
              className="absolute -z-10 bg-black/[0.05] dark:bg-white/[0.07]"
              style={anchor}
              initial={false}
              animate={{ [axis]: slot(hovered ?? currentIndex), [cross]: 0, opacity: hovered !== null && hovered !== currentIndex ? 1 : 0 }}
              transition={{ [axis]: hover.glide ? quick : { duration: 0 }, opacity: { duration: 0.15, ease: EASE } }}
            />
            <motion.span
              aria-hidden
              className={cn(
                "absolute -z-10",
                !accent && "bg-black/[0.09] dark:bg-white/[0.14]",
              )}
              style={{ ...anchor, background: accent || undefined }}
              initial={false}
              // Travels with the picked tool, filling in on the way out and draining on the way home.
              // Going home it starts from the tool just picked, wherever the tile was before.
              animate={{
                [axis]: open ? slot(currentIndex) : [slot(currentIndex), slot(currentIndex) + home(currentIndex)],
                [cross]: 0,
                // Active, it stays filled the whole trip and rests behind the button as its fill.
                opacity: open || active ? 1 : 0,
              }}
              transition={{
                [axis]: spring,
                opacity: active
                  ? { duration: open ? 0 : 0.15, ease: EASE }
                  : { duration: duration * 0.6, ease: open ? EASE : [0.4, 0, 1, 1] },
              }}
            />
            {tools.map((t, i) => {
              const on = i === currentIndex;
              return (
                <motion.button
                  key={t.value}
                  ref={(el) => {
                    toolRefs.current[i] = el;
                  }}
                  type="button"
                  aria-label={t.label}
                  aria-pressed={on}
                  title={t.label}
                  disabled={t.disabled}
                  tabIndex={open ? 0 : -1}
                  onClick={() => pick(t)}
                  onPointerEnter={(e) => e.pointerType === "mouse" && !t.disabled && setHovered(i)}
                  onFocus={(e) => e.currentTarget.matches(":focus-visible") && setHovered(i)}
                  onBlur={() => setHovered(null)}
                  className={cn(
                    "grid shrink-0 cursor-pointer place-items-center outline-none transition-colors duration-150",
                    "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-400 disabled:cursor-default disabled:opacity-40 [&_svg]:size-5",
                    // On the way home the picked icon turns back to the button's colour.
                    on && accent && (open || active) ? "text-white" : on || hovered === i ? "text-foreground" : "text-muted-foreground",
                  )}
                  style={{ width: size, height: size, borderRadius: radius }}
                  initial={false}
                  onAnimationComplete={() => on && !open && setLanded(true)}
                  // The picked tool travels between the button and its slot and is never faded mid-flight;
                  // the rest stay in place and settle in as the edge reaches them, and fade at once going home.
                  animate={
                    on
                      ? { opacity: open || !landed ? 1 : 0, [axis]: open ? 0 : home(i), [cross]: 0, scale: 1 }
                      : { opacity: open ? 1 : 0, [axis]: 0, [cross]: 0, scale: open ? 1 : 0.9 }
                  }
                  transition={
                    on
                      ? { [axis]: spring, opacity: { duration: 0 } }
                      : {
                          [axis]: { duration: 0 },
                          opacity: open ? { duration: 0.22, ease: EASE, delay: reveal(i) } : { duration: 0.1, ease: EASE },
                          scale: open ? { ...spring, delay: reveal(i) } : { duration: 0.1 },
                        }
                  }
                >
                  {t.icon}
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </MotionConfig>
  );
}
