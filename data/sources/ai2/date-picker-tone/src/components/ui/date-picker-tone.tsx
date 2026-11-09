"use client";

import * as React from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "motion/react";

import { cn } from "@/lib/utils";

/* Tone date picker family: 5 self-contained pickers. The difference is ONLY the
   semantic tone: info, success, warning, danger, muted. The tone drives the trigger
   frame, the calendar header, the selected day and the focus ring. NO radix, NO date
   library, NO portal, NO Intl. Each export is a complete picker: a relative wrapper
   + a trigger (role="combobox" + aria-haspopup="grid", aria-expanded) + a month-grid
   calendar panel (role="grid") absolutely positioned BELOW the trigger. Picking a
   day updates the value and closes the panel. It closes on an outside click or
   Escape (focus returns to the trigger).

   CRITICAL: the visible month derives from a FIXED value (the month of the selected
   date if there is one, otherwise FIXED_MONTH = 2026-01) - NEVER today. Reading the
   real clock breaks prerender/hydration determinism. Color comes ONLY from the ai2
   semantic tokens (danger, NEVER destructive), via alpha color-mix. Only a fade
   under reduced motion.

   State trap: the selection state is held OUTSIDE THE POPOVER TREE - the panel
   unmounts on close, and the selection lives on. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

type Tone = "info" | "success" | "warning" | "danger" | "muted";

const triggerHeight: Record<StyledSize, string> = {
  sm: "h-8 text-sm",
  md: "h-9 text-sm",
  lg: "h-10 text-base",
  xl: "h-12 text-base",
};

/* SSR-guvenli sabit gorunen ay. today ASLA kullanilmaz. */
const FIXED_MONTH = new Date(2026, 0, 1);

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function pad2(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}

function formatDate(d: Date): string {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function formatLong(d: Date): string {
  return `${MONTH_NAMES[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function startOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function daysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function sameDay(a: Date | undefined, b: Date | undefined): boolean {
  return (
    !!a &&
    !!b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function useDismiss(
  open: boolean,
  onClose: (refocus: boolean) => void,
  ref: React.RefObject<HTMLDivElement | null>,
) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose(true);
    };
    const onPointer = (e: PointerEvent) => {
      const node = ref.current;
      if (node && e.target instanceof Node && !node.contains(e.target)) {
        onClose(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open, onClose, ref]);
}

const springTransition: Transition = {
  type: "spring" as const,
  stiffness: 340,
  damping: 26,
};

const panelMotion = {
  initial: { opacity: 0, scale: 0.96, y: -6 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: -6 },
};

const triggerBase =
  "inline-flex w-full select-none items-center gap-2 whitespace-nowrap rounded-lg border px-3 font-medium outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&_i]:text-base [&_i]:leading-none";

const navBtn =
  "inline-flex size-7 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-[color-mix(in_oklab,var(--color-foreground)_6%,transparent)] hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 [&_svg]:size-4 [&_svg]:shrink-0 [&_i]:text-base [&_i]:leading-none";

const dayBase =
  "relative inline-flex size-8 items-center justify-center rounded-md text-sm text-foreground outline-none transition-colors focus-visible:ring-[3px]";

/* Static class sets per tone: every value is written literally so Tailwind can see the class. Alpha only through color-mix. */
interface ToneStyles {
  trigger: string;
  icon: string;
  headline: string;
  dayHover: string;
  daySelected: string;
  dayRing: string;
  panel: string;
}

const toneStyles: Record<Tone, ToneStyles> = {
  info: {
    trigger:
      "border-[color-mix(in_oklab,var(--color-info)_45%,transparent)] bg-info-soft text-info-soft-foreground hover:bg-[color-mix(in_oklab,var(--color-info)_18%,transparent)]",
    icon: "text-info",
    headline: "text-info",
    dayHover:
      "hover:bg-[color-mix(in_oklab,var(--color-info)_14%,transparent)]",
    daySelected:
      "bg-info text-info-foreground hover:bg-[color-mix(in_oklab,var(--color-info)_90%,transparent)]",
    dayRing:
      "focus-visible:ring-[color-mix(in_oklab,var(--color-info)_50%,transparent)]",
    panel: "border-[color-mix(in_oklab,var(--color-info)_30%,transparent)]",
  },
  success: {
    trigger:
      "border-[color-mix(in_oklab,var(--color-success)_45%,transparent)] bg-success-soft text-success-soft-foreground hover:bg-[color-mix(in_oklab,var(--color-success)_18%,transparent)]",
    icon: "text-success",
    headline: "text-success",
    dayHover:
      "hover:bg-[color-mix(in_oklab,var(--color-success)_14%,transparent)]",
    daySelected:
      "bg-success text-success-foreground hover:bg-[color-mix(in_oklab,var(--color-success)_90%,transparent)]",
    dayRing:
      "focus-visible:ring-[color-mix(in_oklab,var(--color-success)_50%,transparent)]",
    panel: "border-[color-mix(in_oklab,var(--color-success)_30%,transparent)]",
  },
  warning: {
    trigger:
      "border-[color-mix(in_oklab,var(--color-warning)_45%,transparent)] bg-warning-soft text-warning-soft-foreground hover:bg-[color-mix(in_oklab,var(--color-warning)_18%,transparent)]",
    icon: "text-warning",
    headline: "text-warning",
    dayHover:
      "hover:bg-[color-mix(in_oklab,var(--color-warning)_14%,transparent)]",
    daySelected:
      "bg-warning text-warning-foreground hover:bg-[color-mix(in_oklab,var(--color-warning)_90%,transparent)]",
    dayRing:
      "focus-visible:ring-[color-mix(in_oklab,var(--color-warning)_50%,transparent)]",
    panel: "border-[color-mix(in_oklab,var(--color-warning)_30%,transparent)]",
  },
  danger: {
    trigger:
      "border-[color-mix(in_oklab,var(--color-danger)_45%,transparent)] bg-danger-soft text-danger-soft-foreground hover:bg-[color-mix(in_oklab,var(--color-danger)_18%,transparent)]",
    icon: "text-danger",
    headline: "text-danger",
    dayHover:
      "hover:bg-[color-mix(in_oklab,var(--color-danger)_14%,transparent)]",
    daySelected:
      "bg-danger text-danger-foreground hover:bg-[color-mix(in_oklab,var(--color-danger)_90%,transparent)]",
    dayRing:
      "focus-visible:ring-[color-mix(in_oklab,var(--color-danger)_50%,transparent)]",
    panel: "border-[color-mix(in_oklab,var(--color-danger)_30%,transparent)]",
  },
  muted: {
    trigger:
      "border-border bg-muted text-muted-foreground hover:bg-[color-mix(in_oklab,var(--color-foreground)_8%,transparent)]",
    icon: "text-muted-foreground",
    headline: "text-muted-foreground",
    dayHover:
      "hover:bg-[color-mix(in_oklab,var(--color-foreground)_8%,transparent)]",
    daySelected:
      "bg-[color-mix(in_oklab,var(--color-foreground)_82%,transparent)] text-background hover:bg-[color-mix(in_oklab,var(--color-foreground)_70%,transparent)]",
    dayRing: "focus-visible:ring-ring/50",
    panel: "border-border",
  },
};

export interface DatePickerProps {
  className?: string;
  size?: StyledSize;
  placeholder?: string;
  value?: Date;
  defaultValue?: Date;
  onChange?: (d: Date) => void;
}

/* Shared body: the selection state lives OUTSIDE the popover. */
function TonePicker({
  className,
  size = "md",
  placeholder = "Pick a date",
  value,
  defaultValue,
  onChange,
  tone,
}: DatePickerProps & { tone: Tone }) {
  const t = toneStyles[tone];

  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState<Date | undefined>(
    defaultValue,
  );
  const selected = isControlled ? value : internal;

  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = React.useState(() =>
    startOfMonth(selected ?? FIXED_MONTH),
  );

  const reduce = useReducedMotion();
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const panelId = React.useId();
  const labelId = React.useId();

  const close = React.useCallback((refocus: boolean) => {
    setOpen(false);
    if (refocus) triggerRef.current?.focus();
  }, []);

  useDismiss(open, close, wrapperRef);

  const pick = (day: Date) => {
    if (!isControlled) setInternal(day);
    onChange?.(day);
    setMonth(startOfMonth(day));
    setOpen(false);
    triggerRef.current?.focus();
  };

  const year = month.getFullYear();
  const m = month.getMonth();
  const leading = new Date(year, m, 1).getDay();
  const total = daysInMonth(year, m);
  const cells: (Date | null)[] = [];
  for (let i = 0; i < leading; i++) cells.push(null);
  for (let d = 1; d <= total; d++) cells.push(new Date(year, m, d));

  const fade = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const mp = reduce ? fade : panelMotion;

  return (
    <div
      ref={wrapperRef}
      data-slot="styled-date-picker"
      data-tone={tone}
      className={cn("relative inline-flex w-64 flex-col", className)}
    >
      <button
        ref={triggerRef}
        type="button"
        role="combobox"
        aria-haspopup="grid"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        className={cn(
          triggerBase,
          triggerHeight[size],
          "justify-between",
          t.trigger,
        )}
        onClick={() => setOpen(!open)}
      >
        <span className={cn(!selected && "opacity-70")}>
          {selected ? formatDate(selected) : placeholder}
        </span>
        <Calendar className={t.icon} />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={panelId}
            data-slot="styled-date-picker-popover"
            className={cn(
              "absolute left-0 top-full z-50 mt-2 w-64 origin-top rounded-xl border bg-popover p-3 text-popover-foreground shadow-lg outline-none",
              t.panel,
            )}
            initial={mp.initial}
            animate={mp.animate}
            exit={mp.exit}
            transition={
              reduce ? ({ duration: 0.12 } as Transition) : springTransition
            }
          >
            <div
              data-slot="styled-date-picker-calendar"
              className="flex flex-col gap-2"
            >
              <div className="flex items-center justify-between px-1">
                <button
                  type="button"
                  aria-label="Previous month"
                  className={navBtn}
                  onClick={() => setMonth(new Date(year, m - 1, 1))}
                >
                  <ChevronLeft />
                </button>
                <div
                  id={labelId}
                  className={cn("text-sm font-semibold", t.headline)}
                >
                  {MONTH_NAMES[m]} {year}
                </div>
                <button
                  type="button"
                  aria-label="Next month"
                  className={navBtn}
                  onClick={() => setMonth(new Date(year, m + 1, 1))}
                >
                  <ChevronRight />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-0.5">
                {WEEKDAY_LABELS.map((w) => (
                  <div
                    key={w}
                    className="flex size-8 items-center justify-center text-xs font-medium text-muted-foreground"
                  >
                    {w}
                  </div>
                ))}
              </div>

              <div
                role="grid"
                aria-labelledby={labelId}
                className="grid grid-cols-7 gap-0.5"
              >
                {cells.map((day, i) =>
                  day === null ? (
                    <span
                      key={`empty-${i}`}
                      className="size-8"
                      aria-hidden="true"
                    />
                  ) : (
                    <button
                      key={formatDate(day)}
                      type="button"
                      role="gridcell"
                      aria-label={formatLong(day)}
                      aria-selected={sameDay(day, selected)}
                      className={cn(
                        dayBase,
                        t.dayHover,
                        t.dayRing,
                        sameDay(day, selected) && t.daySelected,
                      )}
                      onClick={() => pick(day)}
                    >
                      {day.getDate()}
                    </button>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/* InfoDatePicker: bilgilendirici info tonu. */
export function InfoDatePicker(props: DatePickerProps) {
  return <TonePicker {...props} tone="info" />;
}

/* SuccessDatePicker: onaylanmis/gecerli secim tonu. */
export function SuccessDatePicker(props: DatePickerProps) {
  return <TonePicker {...props} tone="success" />;
}

/* WarningDatePicker: dikkat isteyen tarih tonu. */
export function WarningDatePicker(props: DatePickerProps) {
  return <TonePicker {...props} tone="warning" />;
}

/* DangerDatePicker: the tone for an invalid or risky date. ai2 danger tokens, NO destructive. */
export function DangerDatePicker(props: DatePickerProps) {
  return <TonePicker {...props} tone="danger" />;
}

/* MutedDatePicker: sessiz, ikincil tarih tonu. */
export function MutedDatePicker(props: DatePickerProps) {
  return <TonePicker {...props} tone="muted" />;
}

export default InfoDatePicker;
