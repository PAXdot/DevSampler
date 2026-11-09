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

/* Preset date picker family: 5 self-contained pickers. The difference is the quick
   selection shortcuts standing BESIDE the calendar: quick, shortcuts, recent,
   relative, custom. NO radix, NO date library, NO portal, NO Intl. Each export is a
   complete picker: a relative wrapper + a trigger (aria-haspopup="dialog",
   aria-expanded) + a panel absolutely positioned BELOW the trigger (a shortcut
   column + a role="grid" month grid). Picking a day or a shortcut updates the value
   and closes the panel. It closes on an outside click or Escape (focus returns to
   the trigger).

   CRITICAL: ALL dates derive from a FIXED reference (BASE_DATE = 2026-01-15) -
   Date.now/new Date() are NEVER called. Shortcuts such as "Today", "Recent" and
   "Relative" are computed from that fixed reference too; reading the real clock
   breaks prerender/hydration determinism. The fixed reference can be changed with
   the `baseDate` prop, but its default is always fixed.

   State trap: the selection state is held OUTSIDE THE POPOVER TREE - the panel
   unmounts on close, and the selection lives on. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

const triggerHeight: Record<StyledSize, string> = {
  sm: "h-8 text-sm",
  md: "h-9 text-sm",
  lg: "h-10 text-base",
  xl: "h-12 text-base",
};

/* SSR-guvenli sabit referans tarih. today ASLA kullanilmaz. */
const BASE_DATE = new Date(2026, 0, 15);

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

/* Shifting days from the fixed reference: every shortcut is built on this. */
function addDays(base: Date, days: number): Date {
  return new Date(base.getFullYear(), base.getMonth(), base.getDate() + days);
}

function addMonths(base: Date, months: number): Date {
  return new Date(base.getFullYear(), base.getMonth() + months, base.getDate());
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
  "inline-flex w-full select-none items-center gap-2 whitespace-nowrap rounded-lg px-3 font-medium outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&_i]:text-base [&_i]:leading-none";

const navBtn =
  "inline-flex size-7 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-[color-mix(in_oklab,var(--color-foreground)_6%,transparent)] hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 [&_svg]:size-4 [&_svg]:shrink-0 [&_i]:text-base [&_i]:leading-none";

const dayBase =
  "relative inline-flex size-8 items-center justify-center rounded-md text-sm text-foreground outline-none transition-colors hover:bg-[color-mix(in_oklab,var(--color-foreground)_6%,transparent)] focus-visible:ring-[3px] focus-visible:ring-ring/50";

const daySelected =
  "bg-primary text-primary-foreground hover:bg-[color-mix(in_oklab,var(--color-primary)_90%,transparent)]";

const presetBtnBase =
  "w-full cursor-default select-none rounded-md px-2 py-1.5 text-left text-xs font-medium text-muted-foreground outline-none transition-colors hover:bg-[color-mix(in_oklab,var(--color-foreground)_6%,transparent)] hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50";

const presetActive =
  "bg-[color-mix(in_oklab,var(--color-primary)_16%,transparent)] text-foreground";

interface Preset {
  label: string;
  date: Date;
}

function CalendarBody({
  month,
  onMonthChange,
  selected,
  onPick,
  labelId,
}: {
  month: Date;
  onMonthChange: (d: Date) => void;
  selected: Date | undefined;
  onPick: (d: Date) => void;
  labelId: string;
}) {
  const year = month.getFullYear();
  const m = month.getMonth();
  const leading = new Date(year, m, 1).getDay();
  const total = daysInMonth(year, m);

  const cells: (Date | null)[] = [];
  for (let i = 0; i < leading; i++) cells.push(null);
  for (let d = 1; d <= total; d++) cells.push(new Date(year, m, d));

  return (
    <div
      data-slot="styled-date-picker-calendar"
      className="flex flex-col gap-2"
    >
      <div className="flex items-center justify-between px-1">
        <button
          type="button"
          aria-label="Previous month"
          className={navBtn}
          onClick={() => onMonthChange(new Date(year, m - 1, 1))}
        >
          <ChevronLeft />
        </button>
        <div id={labelId} className="text-sm font-semibold text-foreground">
          {MONTH_NAMES[m]} {year}
        </div>
        <button
          type="button"
          aria-label="Next month"
          className={navBtn}
          onClick={() => onMonthChange(new Date(year, m + 1, 1))}
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
            <span key={`empty-${i}`} className="size-8" aria-hidden="true" />
          ) : (
            <button
              key={formatDate(day)}
              type="button"
              role="gridcell"
              aria-label={formatLong(day)}
              aria-selected={sameDay(day, selected)}
              className={cn(dayBase, sameDay(day, selected) && daySelected)}
              onClick={() => onPick(day)}
            >
              {day.getDate()}
            </button>
          ),
        )}
      </div>
    </div>
  );
}

export interface DatePickerProps {
  className?: string;
  size?: StyledSize;
  placeholder?: string;
  value?: Date;
  defaultValue?: Date;
  onChange?: (d: Date) => void;
  /* Tum kisayollarin hesaplandigi sabit referans. Varsayilan deterministiktir. */
  baseDate?: Date;
}

/* Shared body: the shortcut column on the left, the calendar on the right. The selection state lives OUTSIDE the popover. */
function PresetPicker({
  className,
  size = "md",
  placeholder = "Pick a date",
  value,
  defaultValue,
  onChange,
  presets,
  heading,
  layout = "side",
}: DatePickerProps & {
  presets: Preset[];
  heading?: string;
  layout?: "side" | "top";
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState<Date | undefined>(
    defaultValue,
  );
  const selected = isControlled ? value : internal;

  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = React.useState(() =>
    startOfMonth(selected ?? BASE_DATE),
  );

  const reduce = useReducedMotion();
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const panelId = React.useId();
  const labelId = React.useId();
  const headingId = React.useId();

  const close = React.useCallback((refocus: boolean) => {
    setOpen(false);
    if (refocus) triggerRef.current?.focus();
  }, []);

  useDismiss(open, close, wrapperRef);

  const commit = (day: Date) => {
    if (!isControlled) setInternal(day);
    onChange?.(day);
    setMonth(startOfMonth(day));
    setOpen(false);
    triggerRef.current?.focus();
  };

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
      className={cn("relative inline-flex w-64 flex-col", className)}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        className={cn(
          triggerBase,
          triggerHeight[size],
          "justify-between border border-field-border bg-transparent text-foreground hover:bg-[color-mix(in_oklab,var(--color-foreground)_4%,transparent)]",
        )}
        onClick={() => setOpen(!open)}
      >
        <span className={cn(!selected && "text-muted-foreground")}>
          {selected ? formatDate(selected) : placeholder}
        </span>
        <Calendar className="text-muted-foreground" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={panelId}
            data-slot="styled-date-picker-popover"
            className={cn(
              "absolute left-0 top-full z-50 mt-2 origin-top rounded-xl border border-border bg-popover p-3 text-popover-foreground shadow-lg outline-none",
              layout === "side"
                ? "flex w-[22rem] gap-3"
                : "flex w-64 flex-col gap-3",
            )}
            initial={mp.initial}
            animate={mp.animate}
            exit={mp.exit}
            transition={
              reduce ? ({ duration: 0.12 } as Transition) : springTransition
            }
          >
            <div
              data-slot="styled-date-picker-presets"
              className={cn(
                "flex flex-col gap-1",
                layout === "side"
                  ? "w-28 shrink-0 border-r border-border pr-2"
                  : "border-b border-border pb-3",
              )}
            >
              {heading ? (
                <div
                  id={headingId}
                  className="px-2 pb-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-muted-foreground"
                >
                  {heading}
                </div>
              ) : null}
              <div
                className={cn(layout === "top" && "grid grid-cols-2 gap-1")}
                role="group"
                aria-labelledby={heading ? headingId : undefined}
              >
                {presets.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    aria-label={`${p.label}, ${formatLong(p.date)}`}
                    className={cn(
                      presetBtnBase,
                      sameDay(p.date, selected) && presetActive,
                    )}
                    onClick={() => commit(p.date)}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <CalendarBody
                month={month}
                onMonthChange={setMonth}
                selected={selected}
                onPick={commit}
                labelId={labelId}
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/* QuickDatePicker: en sik kullanilan birkac atlama, sabit referanstan turetilir. */
export function QuickDatePicker({
  baseDate = BASE_DATE,
  ...props
}: DatePickerProps) {
  const presets = React.useMemo<Preset[]>(
    () => [
      { label: "Today", date: baseDate },
      { label: "Tomorrow", date: addDays(baseDate, 1) },
      { label: "In a week", date: addDays(baseDate, 7) },
      { label: "In a month", date: addMonths(baseDate, 1) },
    ],
    [baseDate],
  );
  return <PresetPicker {...props} presets={presets} heading="Quick" />;
}

/* ShortcutsDatePicker: hafta ve ay sinirlarina atlayan kisayollar. */
export function ShortcutsDatePicker({
  baseDate = BASE_DATE,
  ...props
}: DatePickerProps) {
  const presets = React.useMemo<Preset[]>(() => {
    const startOfWeek = addDays(baseDate, -baseDate.getDay());
    return [
      { label: "Start of week", date: startOfWeek },
      { label: "End of week", date: addDays(startOfWeek, 6) },
      { label: "Start of month", date: startOfMonth(baseDate) },
      {
        label: "End of month",
        date: new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 0),
      },
      { label: "Start of year", date: new Date(baseDate.getFullYear(), 0, 1) },
    ];
  }, [baseDate]);
  return (
    <PresetPicker
      {...props}
      presets={presets}
      heading="Jump to"
      className="w-72"
    />
  );
}

/* RecentDatePicker: backward-looking jumps. Computed from a fixed reference, NOT from the real clock. */
export function RecentDatePicker({
  baseDate = BASE_DATE,
  ...props
}: DatePickerProps) {
  const presets = React.useMemo<Preset[]>(
    () => [
      { label: "Yesterday", date: addDays(baseDate, -1) },
      { label: "3 days ago", date: addDays(baseDate, -3) },
      { label: "Last week", date: addDays(baseDate, -7) },
      { label: "Last month", date: addMonths(baseDate, -1) },
    ],
    [baseDate],
  );
  return <PresetPicker {...props} presets={presets} heading="Recent" />;
}

/* RelativeDatePicker: forward-looking relative jumps, shortcuts in two columns at the top. */
export function RelativeDatePicker({
  baseDate = BASE_DATE,
  ...props
}: DatePickerProps) {
  const presets = React.useMemo<Preset[]>(
    () => [
      { label: "+1 day", date: addDays(baseDate, 1) },
      { label: "+3 days", date: addDays(baseDate, 3) },
      { label: "+2 weeks", date: addDays(baseDate, 14) },
      { label: "+3 months", date: addMonths(baseDate, 3) },
    ],
    [baseDate],
  );
  return (
    <PresetPicker
      {...props}
      presets={presets}
      heading="Relative"
      layout="top"
    />
  );
}

/* CustomDatePicker: is akisina ozel adlandirilmis kisayollar. */
export function CustomDatePicker({
  baseDate = BASE_DATE,
  ...props
}: DatePickerProps) {
  const presets = React.useMemo<Preset[]>(
    () => [
      { label: "Kickoff", date: baseDate },
      { label: "Review", date: addDays(baseDate, 5) },
      { label: "Beta", date: addDays(baseDate, 21) },
      { label: "Launch", date: addMonths(baseDate, 2) },
    ],
    [baseDate],
  );
  return <PresetPicker {...props} presets={presets} heading="Milestones" />;
}

export default QuickDatePicker;
