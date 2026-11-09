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

/* Compact date picker family: 5 self-contained dense pickers. The difference is how
   space is used: dense (a compressed grid), minimal (no frame), narrow (a narrow
   column), inline compact (a trigger that sits on a line of text), bare (with all
   the decoration stripped). NO radix, NO date library, NO portal, NO Intl. Each
   export is a complete picker: a relative wrapper + a trigger (role="combobox" +
   aria-haspopup="grid", aria-expanded) + a month-grid calendar panel (role="grid")
   absolutely positioned BELOW the trigger. Picking a day updates the value and
   closes the panel. It closes on an outside click or Escape (focus returns to the
   trigger).

   CRITICAL: the visible month derives from a FIXED value (the month of the selected
   date if there is one, otherwise FIXED_MONTH = 2026-01) - NEVER today. Reading the
   real clock breaks prerender/hydration determinism. Density means a SMALL
   appearance, not a small target: day cells that fall under 24px carry an invisible
   hit-area extension (after:absolute after:-inset-1). Color comes ONLY from tokens,
   via alpha color-mix.

   State trap: the selection state is held OUTSIDE THE POPOVER TREE - the panel
   unmounts on close, and the selection lives on. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

const triggerHeight: Record<StyledSize, string> = {
  sm: "h-7 text-xs",
  md: "h-8 text-xs",
  lg: "h-9 text-sm",
  xl: "h-10 text-sm",
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

const MONTH_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];
const WEEKDAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function pad2(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}

function formatDate(d: Date): string {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function formatShort(d: Date): string {
  return `${MONTH_SHORT[d.getMonth()]} ${d.getDate()}`;
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
  stiffness: 380,
  damping: 28,
};

const panelMotion = {
  initial: { opacity: 0, scale: 0.97, y: -4 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.97, y: -4 },
};

const triggerBase =
  "inline-flex select-none items-center gap-1.5 whitespace-nowrap rounded-md font-medium outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:size-3.5 [&_svg]:shrink-0 [&_i]:text-xs [&_i]:leading-none";

const navBtn =
  "inline-flex size-6 items-center justify-center rounded text-muted-foreground outline-none transition-colors hover:bg-[color-mix(in_oklab,var(--color-foreground)_6%,transparent)] hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 [&_svg]:size-3.5 [&_svg]:shrink-0 [&_i]:text-xs [&_i]:leading-none";

/* Yogun gun hucresi: gorsel kutu 24px, hit-area after:-inset-1 ile buyutulur. */
const dayBase =
  "relative inline-flex size-6 items-center justify-center rounded text-xs text-foreground outline-none transition-colors after:absolute after:-inset-1 after:content-[''] hover:bg-[color-mix(in_oklab,var(--color-foreground)_6%,transparent)] focus-visible:ring-[3px] focus-visible:ring-ring/50";

const daySelected =
  "bg-primary text-primary-foreground hover:bg-[color-mix(in_oklab,var(--color-primary)_90%,transparent)]";

interface CompactStyle {
  wrapper: string;
  trigger: string;
  panel: string;
  showIcon: boolean;
  showWeekdays: boolean;
  label: (d: Date) => string;
}

const shells: Record<string, CompactStyle> = {
  dense: {
    wrapper: "w-44",
    trigger:
      "w-full justify-between border border-field-border bg-transparent px-2 text-foreground hover:bg-[color-mix(in_oklab,var(--color-foreground)_4%,transparent)]",
    panel: "w-52 border border-border bg-popover p-2 shadow-lg",
    showIcon: true,
    showWeekdays: true,
    label: formatDate,
  },
  minimal: {
    wrapper: "w-36",
    trigger:
      "w-full justify-between border border-transparent bg-transparent px-1.5 text-foreground hover:bg-[color-mix(in_oklab,var(--color-foreground)_6%,transparent)]",
    panel: "w-52 border border-border bg-popover p-2 shadow-md",
    showIcon: true,
    showWeekdays: true,
    label: formatShort,
  },
  narrow: {
    wrapper: "w-28",
    trigger:
      "w-full justify-center border border-field-border bg-transparent px-1 text-foreground hover:bg-[color-mix(in_oklab,var(--color-foreground)_4%,transparent)]",
    panel: "w-52 border border-border bg-popover p-2 shadow-lg",
    showIcon: false,
    showWeekdays: true,
    label: formatShort,
  },
  inline: {
    wrapper: "w-auto align-baseline",
    trigger:
      "h-auto rounded-sm border-0 border-b border-dashed border-field-border bg-transparent px-0.5 py-0 text-foreground hover:bg-[color-mix(in_oklab,var(--color-foreground)_6%,transparent)]",
    panel: "w-52 border border-border bg-popover p-2 shadow-lg",
    showIcon: false,
    showWeekdays: true,
    label: formatShort,
  },
  bare: {
    wrapper: "w-32",
    trigger:
      "w-full justify-start border-0 bg-transparent px-0 text-muted-foreground hover:text-foreground",
    panel: "w-48 bg-popover p-1.5 shadow-md ring-1 ring-border",
    showIcon: false,
    showWeekdays: false,
    label: formatShort,
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
function CompactPicker({
  className,
  size = "md",
  placeholder = "Pick a date",
  value,
  defaultValue,
  onChange,
  shell,
}: DatePickerProps & { shell: CompactStyle }) {
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
      className={cn("relative inline-flex flex-col", shell.wrapper, className)}
    >
      <button
        ref={triggerRef}
        type="button"
        role="combobox"
        aria-haspopup="grid"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        className={cn(triggerBase, triggerHeight[size], shell.trigger)}
        onClick={() => setOpen(!open)}
      >
        <span className={cn(!selected && "text-muted-foreground")}>
          {selected ? shell.label(selected) : placeholder}
        </span>
        {shell.showIcon ? <Calendar className="text-muted-foreground" /> : null}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={panelId}
            data-slot="styled-date-picker-popover"
            className={cn(
              "absolute left-0 top-full z-50 mt-1.5 origin-top rounded-lg text-popover-foreground outline-none",
              shell.panel,
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
              className="flex flex-col gap-1"
            >
              <div className="flex items-center justify-between">
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
                  className="text-xs font-semibold text-foreground"
                >
                  {MONTH_SHORT[m]} {year}
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

              {shell.showWeekdays ? (
                <div className="grid grid-cols-7">
                  {WEEKDAY_LABELS.map((w, i) => (
                    <abbr
                      key={WEEKDAY_NAMES[i]}
                      title={WEEKDAY_NAMES[i]}
                      className="flex size-6 items-center justify-center text-[0.625rem] font-medium text-muted-foreground no-underline"
                    >
                      {w}
                    </abbr>
                  ))}
                </div>
              ) : null}

              <div
                role="grid"
                aria-labelledby={labelId}
                className="grid grid-cols-7"
              >
                {cells.map((day, i) =>
                  day === null ? (
                    <span
                      key={`empty-${i}`}
                      className="size-6"
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
                        sameDay(day, selected) && daySelected,
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

/* DenseDatePicker: sikistirilmis izgara, tam tarih etiketi. */
export function DenseDatePicker(props: DatePickerProps) {
  return <CompactPicker {...props} shell={shells.dense} />;
}

/* MinimalDatePicker: no frame, only a hover background. */
export function MinimalDatePicker(props: DatePickerProps) {
  return <CompactPicker {...props} shell={shells.minimal} />;
}

/* NarrowDatePicker: dar sutunlara sigan ortalanmis trigger. */
export function NarrowDatePicker(props: DatePickerProps) {
  return <CompactPicker {...props} shell={shells.narrow} />;
}

/* InlineCompactDatePicker: metin satirina oturan, noktali altcizgili trigger. */
export function InlineCompactDatePicker(props: DatePickerProps) {
  return <CompactPicker {...props} shell={shells.inline} />;
}

/* BareDatePicker: with the decoration stripped; the panel is frameless too, only a
   ring + a shadow. */
export function BareDatePicker(props: DatePickerProps) {
  return <CompactPicker {...props} shell={shells.bare} />;
}

export default DenseDatePicker;
