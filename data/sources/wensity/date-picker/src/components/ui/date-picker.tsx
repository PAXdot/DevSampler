"use client";

import * as React from "react";
import { IconCalendar, IconChevronLeft, IconChevronRight, IconClock, IconX } from "@tabler/icons-react";
import { Popover as BasePopover } from "@base-ui/react/popover";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Calendar
/* ─── Types ─────────────────────────────────────────────────── */

export type CalendarMode = "single" | "range" | "multiple";

export interface DateRange {
  from?: Date;
  to?: Date;
}

export interface CalendarEvent {
  date: Date;
  label?: string;
}

interface CalendarSharedProps {
  /** Month currently displayed (controlled). */
  month?: Date;
  /** Initial displayed month (uncontrolled). Defaults to today's month. */
  defaultMonth?: Date;
  onMonthChange?: (month: Date) => void;
  /** 0 = Sunday, 1 = Monday. Default 0. */
  weekStartsOn?: 0 | 1;
  /** Return true to disable a date from selection. */
  disabled?: (date: Date) => boolean;
  /** Dates that are unavailable/reserved, shown struck-through and disabled. */
  bookedDates?: Date[];
  /** Dates with a scheduled-event indicator dot. */
  events?: CalendarEvent[];
  /** Enables the fast month/year jump view when clicking the header label. Default true. */
  quickNav?: boolean;
  className?: string;
}

interface CalendarSingleProps extends CalendarSharedProps {
  mode?: "single";
  selected?: Date;
  defaultSelected?: Date;
  onSelect?: (date: Date | undefined) => void;
}

interface CalendarMultipleProps extends CalendarSharedProps {
  mode: "multiple";
  selected?: Date[];
  defaultSelected?: Date[];
  onSelect?: (dates: Date[]) => void;
}

interface CalendarRangeProps extends CalendarSharedProps {
  mode: "range";
  selected?: DateRange;
  defaultSelected?: DateRange;
  onSelect?: (range: DateRange | undefined) => void;
}

export type CalendarProps = CalendarSingleProps | CalendarMultipleProps | CalendarRangeProps;

/* ─── Easing ────────────────────────────────────────────────── */

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

/* ─── Date Helpers ──────────────────────────────────────────── */

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAY_LABELS_SUN = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const WEEKDAY_LABELS_MON = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function isSameDay(a?: Date, b?: Date): boolean {
  if (!a || !b) return false;
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function isSameMonth(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addMonths(date: Date, amount: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function isBefore(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() < startOfDay(b).getTime();
}

function isWithinRange(date: Date, range: DateRange): boolean {
  if (!range.from || !range.to) return false;
  const t = startOfDay(date).getTime();
  const from = startOfDay(range.from).getTime();
  const to = startOfDay(range.to).getTime();
  return t > Math.min(from, to) && t < Math.max(from, to);
}

function buildMonthGrid(month: Date, weekStartsOn: 0 | 1): Date[] {
  const firstOfMonth = new Date(month.getFullYear(), month.getMonth(), 1);
  const firstWeekday = firstOfMonth.getDay();
  const leading = weekStartsOn === 1 ? (firstWeekday + 6) % 7 : firstWeekday;
  const gridStart = new Date(firstOfMonth);
  gridStart.setDate(gridStart.getDate() - leading);

  return Array.from({ length: 42 }, (_, i) => {
    const d = new Date(gridStart);
    d.setDate(gridStart.getDate() + i);
    return d;
  });
}

/* ─── Quick-Nav Tooltip ─────────────────────────────────────── */

/**
 * Minimal CSS-only tooltip for the header's month/year quick-nav controls.
 * Kept local instead of the Tooltip primitive: it needs no portal/positioning
 * logic for a fixed-position label, so a Tooltip (+ Radix) dependency isn't
 * worth it here, and primitives can't import each other's source directly.
 */
function QuickNavTooltip({
  label,
  disabled,
  children,
}: {
  label: string;
  disabled?: boolean;
  children: React.ReactElement;
}) {
  if (disabled) return children;

  return (
    <span className="group/tip relative inline-flex">
      {children}
      <span
        role="tooltip"
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 -translate-x-1/2 whitespace-nowrap",
          "rounded-[var(--primitive-radius-control-sm,0.625rem)] bg-[var(--foreground)] px-1.5 py-0.5 text-[10.5px] font-medium text-[var(--background)]",
          "origin-top scale-95 opacity-0 transition-[opacity,transform] delay-0 duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]",
          // Hover-only: no focus-within trigger (would fire on click since
          // the button receives focus) and force-hidden on :active so a
          // click can't leave a stale label visible mid-transition.
          "group-hover/tip:scale-100 group-hover/tip:opacity-100 group-hover/tip:delay-300",
          "group-active/tip:!opacity-0 group-active/tip:!delay-0 group-active/tip:!duration-0",
        )}
      >
        {label}
      </span>
    </span>
  );
}

/* ─── <Calendar> ────────────────────────────────────────────── */

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>((props, ref) => {
  const {
    mode = "single",
    month: controlledMonth,
    defaultMonth,
    onMonthChange,
    weekStartsOn = 0,
    disabled,
    bookedDates,
    events,
    quickNav = true,
    className,
    selected,
    defaultSelected,
    onSelect,
  } = props as CalendarSharedProps & {
    mode?: CalendarMode;
    selected?: Date | Date[] | DateRange;
    defaultSelected?: Date | Date[] | DateRange;
    onSelect?: (value: Date | undefined | Date[] | DateRange | undefined) => void;
  };

  const prefersReducedMotion = useReducedMotion();
  const today = React.useMemo(() => startOfDay(new Date()), []);

  const [internalMonth, setInternalMonth] = React.useState(() =>
    startOfDay(defaultMonth ?? controlledMonth ?? new Date()),
  );
  const isMonthControlled = controlledMonth !== undefined;
  const displayedMonth = isMonthControlled ? controlledMonth : internalMonth;

  const [navView, setNavView] = React.useState<"days" | "months" | "years">("days");
  const [direction, setDirection] = React.useState(1);
  // Center of the 12-year picker grid, independent of displayedMonth so
  // paging through years (via the picker's own prev/next) doesn't require
  // navigating the actual displayed month.
  const [yearAnchor, setYearAnchor] = React.useState(() => displayedMonth.getFullYear());

  function openYearsView() {
    setYearAnchor(displayedMonth.getFullYear());
    setNavView("years");
  }

  // When keyboard nav crosses a month boundary, the day grid remounts (its
  // motion.div key changes) so the old DOM node queried synchronously is the
  // exiting month's grid, not the one containing the target date. Stash the
  // target here and focus it once the new month's grid is actually mounted.
  const dayGridRef = React.useRef<HTMLDivElement | null>(null);
  const pendingFocusDateRef = React.useRef<Date | null>(null);

  React.useEffect(() => {
    if (!pendingFocusDateRef.current) return;
    const iso = pendingFocusDateRef.current.toDateString();
    pendingFocusDateRef.current = null;
    (dayGridRef.current?.querySelector(`[data-date-key="${iso}"]`) as HTMLElement | null)?.focus();
  }, [displayedMonth]);

  const setMonth = React.useCallback(
    (next: Date, dir: number) => {
      setDirection(dir);
      if (!isMonthControlled) setInternalMonth(next);
      onMonthChange?.(next);
    },
    [isMonthControlled, onMonthChange],
  );

  // Internal selection state, used when the caller does not control `selected`.
  const [internalSingle, setInternalSingle] = React.useState<Date | undefined>(
    mode === "single" ? (defaultSelected as Date | undefined) : undefined,
  );
  const [internalMultiple, setInternalMultiple] = React.useState<Date[]>(
    mode === "multiple" ? ((defaultSelected as Date[] | undefined) ?? []) : [],
  );
  const [internalRange, setInternalRange] = React.useState<DateRange | undefined>(
    mode === "range" ? (defaultSelected as DateRange | undefined) : undefined,
  );

  const isSelectedControlled = selected !== undefined;

  const currentSingle = mode === "single" ? ((isSelectedControlled ? selected : internalSingle) as Date | undefined) : undefined;
  const currentMultiple = mode === "multiple" ? ((isSelectedControlled ? selected : internalMultiple) as Date[]) : [];
  const currentRange = mode === "range" ? ((isSelectedControlled ? selected : internalRange) as DateRange | undefined) : undefined;

  function isDisabled(date: Date): boolean {
    if (bookedDates?.some((b) => isSameDay(b, date))) return true;
    return disabled?.(date) ?? false;
  }

  function isBooked(date: Date): boolean {
    return bookedDates?.some((b) => isSameDay(b, date)) ?? false;
  }

  function eventFor(date: Date): CalendarEvent | undefined {
    return events?.find((e) => isSameDay(e.date, date));
  }

  function handleSelectDay(date: Date) {
    if (isDisabled(date)) return;

    if (mode === "single") {
      const next = isSameDay(currentSingle, date) ? undefined : date;
      if (!isSelectedControlled) setInternalSingle(next);
      (onSelect as CalendarSingleProps["onSelect"])?.(next);
      return;
    }

    if (mode === "multiple") {
      const exists = currentMultiple.some((d) => isSameDay(d, date));
      const next = exists ? currentMultiple.filter((d) => !isSameDay(d, date)) : [...currentMultiple, date];
      if (!isSelectedControlled) setInternalMultiple(next);
      (onSelect as CalendarMultipleProps["onSelect"])?.(next);
      return;
    }

    // range
    const from = currentRange?.from;
    const to = currentRange?.to;
    let next: DateRange;
    if (!from || (from && to)) {
      next = { from: date, to: undefined };
    } else if (isBefore(date, from)) {
      next = { from: date, to: from };
    } else {
      next = { from, to: date };
    }
    if (!isSelectedControlled) setInternalRange(next);
    (onSelect as CalendarRangeProps["onSelect"])?.(next);
  }

  function goToMonth(offset: number) {
    setMonth(addMonths(displayedMonth, offset), offset >= 0 ? 1 : -1);
  }

  const weekdayLabels = weekStartsOn === 1 ? WEEKDAY_LABELS_MON : WEEKDAY_LABELS_SUN;
  const grid = React.useMemo(
    () => buildMonthGrid(displayedMonth, weekStartsOn),
    [displayedMonth, weekStartsOn],
  );

  // Roving tabindex target: the selected day if it falls in the displayed
  // month, otherwise today if visible, otherwise the 1st of the month.
  const focusableDate = React.useMemo(() => {
    if (mode === "single" && currentSingle && isSameMonth(currentSingle, displayedMonth)) return currentSingle;
    if (isSameMonth(today, displayedMonth)) return today;
    return new Date(displayedMonth.getFullYear(), displayedMonth.getMonth(), 1);
  }, [mode, currentSingle, displayedMonth, today]);

  function cellState(date: Date) {
    const outsideMonth = !isSameMonth(date, displayedMonth);
    const isToday = isSameDay(date, today);
    const isBookedDay = isBooked(date);
    const event = eventFor(date);
    const isDayDisabled = isDisabled(date);

    let isSelected = false;
    let isRangeStart = false;
    let isRangeEnd = false;
    let isInRange = false;

    if (mode === "single") {
      isSelected = isSameDay(currentSingle, date);
    } else if (mode === "multiple") {
      isSelected = currentMultiple.some((d) => isSameDay(d, date));
    } else if (mode === "range" && currentRange) {
      isRangeStart = isSameDay(currentRange.from, date);
      isRangeEnd = isSameDay(currentRange.to, date);
      isInRange = isWithinRange(date, currentRange);
      isSelected = isRangeStart || isRangeEnd;
    }

    return { outsideMonth, isToday, isBookedDay, event, isDayDisabled, isSelected, isRangeStart, isRangeEnd, isInRange };
  }

  const monthLabel = `${MONTH_NAMES[displayedMonth.getMonth()]} ${displayedMonth.getFullYear()}`;
  const weeks = React.useMemo(() => {
    const rows: Date[][] = [];
    for (let i = 0; i < grid.length; i += 7) {
      rows.push(grid.slice(i, i + 7));
    }
    return rows;
  }, [grid]);

  return (
    <div data-wensity-primitive=""
      ref={ref}
      data-slot="calendar"
      data-mode={mode}
      className={cn(
        "w-full max-w-[300px] select-none rounded-[var(--primitive-radius-surface,1rem)] border border-[var(--border)] p-3",
        "bg-[var(--background)]",
        className,
      )}
    >
      {/* Screen-reader announcement when the displayed month changes. */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {monthLabel}
      </div>

      {/* Header */}
      <div className="mb-2 flex items-center justify-between gap-1">
        <button
          type="button"
          aria-label="Previous month"
          onClick={() => goToMonth(-1)}
          className={cn(
            "flex size-7 shrink-0 items-center justify-center rounded-[var(--primitive-radius-control-sm,0.625rem)] text-[var(--muted-foreground)]",
            "outline-none transition-colors duration-150",
            "hover:bg-[color:var(--primitive-surface-hover,color-mix(in_srgb,var(--foreground)_4%,transparent))] hover:text-[var(--foreground)]",
            "focus-visible:ring-2 focus-visible:ring-[color:var(--primitive-ring,color-mix(in_srgb,var(--foreground)_45%,transparent))]",
          )}
        >
          <IconChevronLeft className="size-4" stroke={1.9} />
        </button>

        <div className="flex items-center gap-0.5">
          <QuickNavTooltip label="Jump to month" disabled={!quickNav}>
            <button
              type="button"
              disabled={!quickNav}
              aria-label="Show month picker"
              onClick={() => setNavView("months")}
              className={cn(
                "rounded-[var(--primitive-radius-control-sm,0.625rem)] px-1.5 py-1 text-[13px] font-medium tracking-[-0.01em] text-[var(--foreground)]",
                "outline-none transition-colors duration-150",
                quickNav && "hover:bg-[color:var(--primitive-surface-hover,color-mix(in_srgb,var(--foreground)_4%,transparent))]",
                "focus-visible:ring-2 focus-visible:ring-[color:var(--primitive-ring,color-mix(in_srgb,var(--foreground)_45%,transparent))]",
                navView === "months" && "bg-[color:var(--primitive-surface-selected,color-mix(in_srgb,var(--foreground)_6%,transparent))]",
              )}
            >
              {MONTH_NAMES[displayedMonth.getMonth()]}
            </button>
          </QuickNavTooltip>

          <QuickNavTooltip label={navView === "months" ? "Jump to year" : "Quick navigation"} disabled={!quickNav}>
            <button
              type="button"
              disabled={!quickNav}
              aria-label="Toggle month or year picker"
              onClick={() => (navView === "months" ? openYearsView() : setNavView("months"))}
              className={cn(
                "rounded-[var(--primitive-radius-control-sm,0.625rem)] px-0.5 py-1 text-[13px] font-medium text-[var(--muted-foreground)]/40",
                "outline-none transition-colors duration-150",
                quickNav && "hover:text-[var(--muted-foreground)]",
                "focus-visible:ring-2 focus-visible:ring-[color:var(--primitive-ring,color-mix(in_srgb,var(--foreground)_45%,transparent))]",
              )}
            >
              |
            </button>
          </QuickNavTooltip>

          <QuickNavTooltip label="Jump to year" disabled={!quickNav}>
            <button
              type="button"
              disabled={!quickNav}
              aria-label="Show year picker"
              onClick={openYearsView}
              className={cn(
                "rounded-[var(--primitive-radius-control-sm,0.625rem)] px-1.5 py-1 text-[13px] font-medium tracking-[-0.01em] text-[var(--foreground)]",
                "outline-none transition-colors duration-150",
                quickNav && "hover:bg-[color:var(--primitive-surface-hover,color-mix(in_srgb,var(--foreground)_4%,transparent))]",
                "focus-visible:ring-2 focus-visible:ring-[color:var(--primitive-ring,color-mix(in_srgb,var(--foreground)_45%,transparent))]",
                navView === "years" && "bg-[color:var(--primitive-surface-selected,color-mix(in_srgb,var(--foreground)_6%,transparent))]",
              )}
            >
              {displayedMonth.getFullYear()}
            </button>
          </QuickNavTooltip>
        </div>

        <button
          type="button"
          aria-label="Next month"
          onClick={() => goToMonth(1)}
          className={cn(
            "flex size-7 shrink-0 items-center justify-center rounded-[var(--primitive-radius-control-sm,0.625rem)] text-[var(--muted-foreground)]",
            "outline-none transition-colors duration-150",
            "hover:bg-[color:var(--primitive-surface-hover,color-mix(in_srgb,var(--foreground)_4%,transparent))] hover:text-[var(--foreground)]",
            "focus-visible:ring-2 focus-visible:ring-[color:var(--primitive-ring,color-mix(in_srgb,var(--foreground)_45%,transparent))]",
          )}
        >
          <IconChevronRight className="size-4" stroke={1.9} />
        </button>
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          {navView === "days" && (
            <motion.div
              key={`${displayedMonth.getFullYear()}-${displayedMonth.getMonth()}`}
              custom={direction}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * -12 }}
              transition={{ duration: prefersReducedMotion ? 0.12 : 0.18, ease: EASE_OUT }}
            >
              {/* Weekday row */}
              <div className="mb-1 grid grid-cols-7">
                {weekdayLabels.map((label, i) => (
                  <div
                    key={`${label}-${i}`}
                    className="flex h-7 items-center justify-center text-[length:var(--primitive-text-hint,0.6875rem)] font-medium text-[var(--muted-foreground)]"
                  >
                    {label}
                  </div>
                ))}
              </div>

              {/* Day grid, ARIA grid with row/gridcell required children. */}
              <div
                ref={dayGridRef}
                role="grid"
                aria-label={monthLabel}
                className="grid grid-cols-7 gap-y-0.5"
                onKeyDown={(e) => {
                  const deltas: Record<string, number> = {
                    ArrowLeft: -1,
                    ArrowRight: 1,
                    ArrowUp: -7,
                    ArrowDown: 7,
                  };
                  let targetDate: Date | undefined;
                  if (e.key in deltas) {
                    const current = new Date((e.target as HTMLElement).dataset.date ?? "");
                    current.setDate(current.getDate() + deltas[e.key]!);
                    targetDate = current;
                  } else if (e.key === "Home" || e.key === "End") {
                    const current = new Date((e.target as HTMLElement).dataset.date ?? "");
                    const weekday = weekStartsOn === 1 ? (current.getDay() + 6) % 7 : current.getDay();
                    current.setDate(current.getDate() + (e.key === "Home" ? -weekday : 6 - weekday));
                    targetDate = current;
                  } else if (e.key === "PageUp" || e.key === "PageDown") {
                    e.preventDefault();
                    const current = new Date((e.target as HTMLElement).dataset.date ?? "");
                    targetDate = addMonths(current, e.key === "PageUp" ? -1 : 1);
                    // Clamp to the target month's last day (e.g. Jan 31 -> Feb 28).
                    const daysInTargetMonth = new Date(targetDate.getFullYear(), targetDate.getMonth() + 1, 0).getDate();
                    targetDate.setDate(Math.min(current.getDate(), daysInTargetMonth));
                  }
                  if (!targetDate) return;
                  e.preventDefault();
                  if (!isSameMonth(targetDate, displayedMonth)) {
                    pendingFocusDateRef.current = targetDate;
                    setMonth(new Date(targetDate.getFullYear(), targetDate.getMonth(), 1), isBefore(targetDate, displayedMonth) ? -1 : 1);
                    return;
                  }
                  const iso = targetDate.toDateString();
                  (dayGridRef.current?.querySelector(`[data-date-key="${iso}"]`) as HTMLElement | null)?.focus();
                }}
              >
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex} role="row" className="contents">
                    {week.map((date) => {
                      const state = cellState(date);
                      return (
                        <div
                          key={date.toISOString()}
                          role="gridcell"
                          aria-selected={state.isSelected || undefined}
                          className="relative flex h-8 items-center justify-center"
                        >
                          {/* Range band: full width between the endpoints, half width
                              on the endpoint cells themselves so it visually meets
                              the solid selected circle instead of leaving a gap. */}
                          {mode === "range" &&
                            currentRange?.from &&
                            currentRange?.to &&
                            !isSameDay(currentRange.from, currentRange.to) &&
                            (state.isInRange || state.isRangeStart || state.isRangeEnd) && (
                              <div
                                className={cn(
                                  "absolute inset-y-0 bg-[color:var(--primitive-surface-selected,color-mix(in_srgb,var(--foreground)_6%,transparent))]",
                                  state.isRangeStart ? "left-1/2 right-0" : state.isRangeEnd ? "left-0 right-1/2" : "inset-x-0",
                                )}
                              />
                            )}
                          <button
                            type="button"
                            disabled={state.isDayDisabled}
                            aria-label={date.toDateString()}
                            data-date={date.toISOString()}
                            data-date-key={date.toDateString()}
                            tabIndex={isSameDay(date, focusableDate) ? 0 : -1}
                            onClick={() => handleSelectDay(date)}
                            className={cn(
                              "relative z-10 flex size-8 items-center justify-center rounded-full text-[13px] tabular-nums",
                              "outline-none transition-colors duration-150",
                              "focus-visible:ring-2 focus-visible:ring-[color:var(--primitive-ring,color-mix(in_srgb,var(--foreground)_45%,transparent))]",
                              state.outsideMonth ? "text-[var(--muted-foreground)]/40" : "text-[var(--foreground)]",
                              !state.isSelected &&
                                !state.isDayDisabled &&
                                "hover:bg-[color:var(--primitive-surface-hover,color-mix(in_srgb,var(--foreground)_4%,transparent))]",
                              state.isSelected &&
                                "bg-[color:var(--primitive-control-solid,var(--primary))] text-[color:var(--primitive-control-solid-foreground,var(--primary-foreground))] hover:bg-[color:var(--primitive-control-solid-hover,color-mix(in_srgb,var(--primary)_90%,var(--background)))]",
                              state.isToday &&
                                !state.isSelected &&
                                "border border-[var(--border)] font-semibold",
                              state.isDayDisabled &&
                                !state.isBookedDay &&
                                "pointer-events-none text-[var(--muted-foreground)] opacity-30",
                              state.isBookedDay &&
                                "pointer-events-none text-[var(--muted-foreground)]/50 line-through",
                            )}
                          >
                            {date.getDate()}
                            {state.event && !state.isSelected && (
                              <span className="absolute bottom-0.5 size-1 rounded-full bg-[color:var(--primitive-info,#0ea5e9)]" />
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {navView === "months" && (
            <motion.div
              key="months"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.12 : 0.15, ease: EASE_OUT }}
              className="grid grid-cols-3 gap-1 py-1"
            >
              {MONTH_NAMES.map((name, i) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => {
                    setMonth(new Date(displayedMonth.getFullYear(), i, 1), 1);
                    setNavView("days");
                  }}
                  className={cn(
                    "flex h-10 items-center justify-center rounded-[var(--primitive-radius-control-sm,0.625rem)] text-[13px] text-[var(--foreground)]",
                    "outline-none transition-colors duration-150",
                    "hover:bg-[color:var(--primitive-surface-hover,color-mix(in_srgb,var(--foreground)_4%,transparent))]",
                    i === displayedMonth.getMonth() &&
                      "bg-[color:var(--primitive-control-solid,var(--primary))] text-[color:var(--primitive-control-solid-foreground,var(--primary-foreground))]",
                  )}
                >
                  {name.slice(0, 3)}
                </button>
              ))}
            </motion.div>
          )}

          {navView === "years" && (
            <motion.div
              key="years"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.12 : 0.15, ease: EASE_OUT }}
            >
              {/* Decade pager, the 12-year grid below is a window, not the full range. */}
              <div className="mb-1 flex items-center justify-between px-0.5">
                <button
                  type="button"
                  aria-label="Previous years"
                  onClick={() => setYearAnchor((y) => y - 12)}
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-[var(--primitive-radius-control-sm,0.625rem)] text-[var(--muted-foreground)]",
                    "outline-none transition-colors duration-150",
                    "hover:bg-[color:var(--primitive-surface-hover,color-mix(in_srgb,var(--foreground)_4%,transparent))] hover:text-[var(--foreground)]",
                    "focus-visible:ring-2 focus-visible:ring-[color:var(--primitive-ring,color-mix(in_srgb,var(--foreground)_45%,transparent))]",
                  )}
                >
                  <IconChevronLeft className="size-4" stroke={1.9} />
                </button>
                <span className="text-[length:var(--primitive-text-hint,0.6875rem)] font-medium text-[var(--muted-foreground)]">
                  {yearAnchor - 5}-{yearAnchor + 6}
                </span>
                <button
                  type="button"
                  aria-label="Next years"
                  onClick={() => setYearAnchor((y) => y + 12)}
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-[var(--primitive-radius-control-sm,0.625rem)] text-[var(--muted-foreground)]",
                    "outline-none transition-colors duration-150",
                    "hover:bg-[color:var(--primitive-surface-hover,color-mix(in_srgb,var(--foreground)_4%,transparent))] hover:text-[var(--foreground)]",
                    "focus-visible:ring-2 focus-visible:ring-[color:var(--primitive-ring,color-mix(in_srgb,var(--foreground)_45%,transparent))]",
                  )}
                >
                  <IconChevronRight className="size-4" stroke={1.9} />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-1 py-1">
                {Array.from({ length: 12 }, (_, i) => yearAnchor - 5 + i).map((year) => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => {
                      setMonth(new Date(year, displayedMonth.getMonth(), 1), 1);
                      setNavView("months");
                    }}
                    className={cn(
                      "flex h-10 items-center justify-center rounded-[var(--primitive-radius-control-sm,0.625rem)] text-[13px] tabular-nums text-[var(--foreground)]",
                      "outline-none transition-colors duration-150",
                      "hover:bg-[color:var(--primitive-surface-hover,color-mix(in_srgb,var(--foreground)_4%,transparent))]",
                      year === displayedMonth.getFullYear() &&
                        "bg-[color:var(--primitive-control-solid,var(--primary))] text-[color:var(--primitive-control-solid-foreground,var(--primary-foreground))]",
                    )}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});
Calendar.displayName = "Calendar";

// date-picker

export type { DateRange };

/* ─── Types ─────────────────────────────────────────────────── */

export interface DatePreset {
  label: string;
  getValue: () => Date | DateRange | Date[];
}

export type DatePickerMode = "single" | "range" | "multiple";

interface DatePickerBaseProps {
  /** Selection mode. */
  mode?: DatePickerMode;
  /** Placeholder text in the trigger when no date is selected. */
  placeholder?: string;
  /** Disabled state. */
  disabled?: boolean;
  /** Return true to disable specific dates. */
  dateDisabled?: (date: Date) => boolean;
  /** 0 = Sunday, 1 = Monday. Default 0. */
  weekStartsOn?: 0 | 1;
  /** Earliest selectable date. */
  fromDate?: Date;
  /** Latest selectable date. */
  toDate?: Date;

  /* ── Variant toggles ── */

  /** Show preset quick-selection buttons. Pass an array to customize or `true` for defaults. Default: `true`. */
  presets?: boolean | DatePreset[];
  /** Show time picker (hours + minutes) alongside the calendar. */
  dateTime?: boolean;
  /** Enable month and year quick-nav pickers. Default: `true`. */
  monthYear?: boolean;

  /** Open the calendar popover on first render. */
  defaultOpen?: boolean;

  /** Additional class name for the root wrapper. */
  className?: string;
}

interface DatePickerSingleProps extends DatePickerBaseProps {
  mode?: "single";
  /** Controlled value. */
  value?: Date;
  /** Uncontrolled default value. */
  defaultValue?: Date;
  /** Called when selection changes. */
  onChange?: (value: Date | undefined) => void;
}

interface DatePickerRangeProps extends DatePickerBaseProps {
  mode: "range";
  /** Controlled value. */
  value?: DateRange;
  /** Uncontrolled default value. */
  defaultValue?: DateRange;
  /** Called when selection changes. */
  onChange?: (value: DateRange | undefined) => void;
}

interface DatePickerMultipleProps extends DatePickerBaseProps {
  mode: "multiple";
  /** Controlled value. */
  value?: Date[];
  /** Uncontrolled default value. */
  defaultValue?: Date[];
  /** Called when selection changes. */
  onChange?: (value: Date[]) => void;
}

export type DatePickerProps = DatePickerSingleProps | DatePickerRangeProps | DatePickerMultipleProps;

/* ─── Constants ─────────────────────────────────────────────── */

const TRIGGER_SURFACE = cn(
  "inline-flex h-[var(--primitive-control-height-md,2.25rem)] min-h-[var(--primitive-control-height-md,2.25rem)] items-center gap-2",
  "rounded-[var(--primitive-radius-control,0.875rem)] border border-[var(--border)] px-3 text-sm",
  "bg-[var(--background)] text-[var(--foreground)]",
  "transition-[border-color,background-color,box-shadow] duration-150 ease-[var(--primitive-ease,cubic-bezier(0.23,1,0.32,1))]",
  "hover:border-[color-mix(in_srgb,var(--foreground)_14%,transparent)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primitive-ring,color-mix(in_srgb,var(--foreground)_45%,transparent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
  "disabled:pointer-events-none disabled:opacity-40",
  "data-[open]:border-[color-mix(in_srgb,var(--foreground)_24%,transparent)]",
);

const POPOVER_CONTENT_CLASS = cn(
  "rounded-[var(--primitive-radius-surface,1rem)] border border-[var(--border)] p-3",
  "bg-[color:var(--primitive-surface-overlay,var(--popover))] text-[var(--foreground)]",
  "[box-shadow:var(--primitive-shadow-overlay,0_1px_2px_rgba(0,0,0,0.08),0_18px_48px_-24px_rgba(0,0,0,0.4))]",
  "z-[var(--primitive-z-popover,130)] origin-[var(--transform-origin)] transform-gpu outline-none",
  "transition-[opacity,scale] duration-[180ms] ease-[var(--primitive-ease,cubic-bezier(0.23,1,0.32,1))]",
  "data-[ending-style]:duration-[120ms]",
  "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0",
  "data-[starting-style]:scale-[0.96] data-[ending-style]:scale-[0.96]",
  "motion-reduce:transition-none motion-reduce:data-[starting-style]:scale-100 motion-reduce:data-[ending-style]:scale-100",
);

const PRESET_ITEM_CLASS = cn(
  "rounded-[var(--primitive-radius-item,0.625rem)] px-2 py-1.5 text-left text-xs font-medium",
  "text-[var(--muted-foreground)] transition-colors duration-150",
  "hover:bg-[color:var(--primitive-surface-selected,color-mix(in_srgb,var(--foreground)_6%,transparent))] hover:text-[var(--foreground)]",
  "focus-visible:outline-none focus-visible:bg-[color:var(--primitive-surface-selected,color-mix(in_srgb,var(--foreground)_6%,transparent))] focus-visible:text-[var(--foreground)]",
);

const TIME_FIELD_CLASS = cn(
  "rounded-[var(--primitive-radius-control,0.875rem)] border border-[var(--border)] bg-transparent px-1.5 py-0.5",
  "text-[var(--foreground)] outline-none",
  "focus-visible:ring-2 focus-visible:ring-[color:var(--primitive-ring,color-mix(in_srgb,var(--foreground)_45%,transparent))]",
);

/* ─── Formatting ────────────────────────────────────────────── */

function formatDate(d: Date): string {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function formatShortDate(d: Date): string {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[d.getMonth()]} ${d.getDate()}`;
}

function formatDateRange(range: DateRange): string {
  if (range.from && range.to) {
    return `${formatShortDate(range.from)}, ${formatShortDate(range.to)}`;
  }
  if (range.from) return formatDate(range.from);
  return "";
}

function formatMultipleDates(dates: Date[]): string {
  if (dates.length === 0) return "";
  if (dates.length === 1) return formatDate(dates[0]);
  return `${dates.length} dates selected`;
}

/* ─── Presets ────────────────────────────────────────────────── */

function buildDefaultPresets(mode: DatePickerMode): DatePreset[] {
  const today = startOfDay(new Date());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (mode === "multiple") {
    return [
      { label: "Today", getValue: () => [today] },
      { label: "Tomorrow", getValue: () => { const d = new Date(today); d.setDate(d.getDate() + 1); return [d]; } },
      { label: "Yesterday", getValue: () => [yesterday] },
    ];
  }

  if (mode === "single") {
    return [
      { label: "Today", getValue: () => today },
      { label: "Tomorrow", getValue: () => { const d = new Date(today); d.setDate(d.getDate() + 1); return d; } },
      { label: "Yesterday", getValue: () => yesterday },
    ];
  }

  return [
    {
      label: "Today",
      getValue: () => ({ from: today, to: today }),
    },
    {
      label: "Last 7 days",
      getValue: () => {
        const from = new Date(today);
        from.setDate(from.getDate() - 6);
        return { from, to: today };
      },
    },
    {
      label: "Last 30 days",
      getValue: () => {
        const from = new Date(today);
        from.setDate(from.getDate() - 29);
        return { from, to: today };
      },
    },
    {
      label: "This month",
      getValue: () => {
        const from = new Date(today.getFullYear(), today.getMonth(), 1);
        const to = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        return { from, to };
      },
    },
  ];
}

/* ─── Time Picker Sub-component ─────────────────────────────── */

function TimePicker({
  value,
  onChange,
}: {
  value: Date;
  onChange: (date: Date) => void;
}) {
  const hours = value.getHours();
  const minutes = value.getMinutes();

  return (
    <div data-wensity-primitive="" className="flex items-center gap-1.5 border-t border-[var(--border)] pt-2.5">
      <IconClock size={14} stroke={1.75} className="shrink-0 text-[var(--muted-foreground)]" />
      <div className="flex items-center gap-1 text-xs">
        <select
          value={hours}
          onChange={(e) => {
            const d = new Date(value);
            d.setHours(Number(e.target.value));
            onChange(d);
          }}
          className={TIME_FIELD_CLASS}
        >
          {Array.from({ length: 24 }, (_, i) => (
            <option key={i} value={i}>
              {String(i).padStart(2, "0")}
            </option>
          ))}
        </select>
        <span className="text-[var(--muted-foreground)]">:</span>
        <select
          value={minutes}
          onChange={(e) => {
            const d = new Date(value);
            d.setMinutes(Number(e.target.value));
            onChange(d);
          }}
          className={TIME_FIELD_CLASS}
        >
          {Array.from({ length: 60 }, (_, i) => (
            <option key={i} value={i}>
              {String(i).padStart(2, "0")}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

/* ─── DatePicker ────────────────────────────────────────────── */

function DatePickerInner(props: DatePickerProps) {
  const {
    mode = "single",
    placeholder = "Pick a date",
    disabled: isDisabled = false,
    dateDisabled,
    weekStartsOn = 0,
    fromDate,
    toDate,
    presets: presetsProp = true,
    dateTime = false,
    monthYear = true,
    defaultOpen = false,
    className,
  } = props as DatePickerBaseProps;

  const {
    value: controlledValue,
    defaultValue,
    onChange,
  } = props as {
    value?: Date | DateRange | Date[];
    defaultValue?: Date | DateRange | Date[];
    onChange?: (value: Date | DateRange | Date[] | undefined) => void;
  };

  const [open, setOpen] = React.useState(defaultOpen);

  const isControlled = "value" in props;

  const [internalSingle, setInternalSingle] = React.useState<Date | undefined>(
    mode === "single" ? (defaultValue as Date | undefined) : undefined,
  );
  const [internalRange, setInternalRange] = React.useState<DateRange | undefined>(
    mode === "range" ? (defaultValue as DateRange | undefined) : undefined,
  );
  const [internalMultiple, setInternalMultiple] = React.useState<Date[]>(
    mode === "multiple" ? ((defaultValue as Date[] | undefined) ?? []) : [],
  );

  const currentSingle = mode === "single"
    ? ((isControlled ? controlledValue : internalSingle) as Date | undefined)
    : undefined;
  const currentRange = mode === "range"
    ? ((isControlled ? controlledValue : internalRange) as DateRange | undefined)
    : undefined;
  const currentMultiple = mode === "multiple"
    ? (Array.isArray(isControlled ? controlledValue : internalMultiple)
      ? ((isControlled ? controlledValue : internalMultiple) as Date[])
      : [])
    : [];

  const [displayMonth, setDisplayMonth] = React.useState(() => {
    if (mode === "single" && currentSingle) return startOfDay(currentSingle);
    if (mode === "range" && currentRange?.from) return startOfDay(currentRange.from);
    if (mode === "multiple" && currentMultiple.length > 0) return startOfDay(currentMultiple[0]);
    if (fromDate) return startOfDay(fromDate);
    return startOfDay(new Date());
  });

  // Follow the controlled value to its month. This was already a manual
  // previous-value comparison inside an effect; doing it during render is the
  // same logic without rendering the old month first.
  const [controlledSync, setControlledSync] = React.useState({
    mode,
    value: controlledValue,
  });
  if (controlledSync.mode !== mode || controlledSync.value !== controlledValue) {
    setControlledSync({ mode, value: controlledValue });
    if (mode === "single" && controlledValue) {
      setDisplayMonth(startOfDay(controlledValue as Date));
    } else if (mode === "range" && (controlledValue as DateRange)?.from) {
      setDisplayMonth(startOfDay((controlledValue as DateRange).from!));
    } else if (mode === "multiple" && (controlledValue as Date[])?.length > 0) {
      setDisplayMonth(startOfDay((controlledValue as Date[])[0]));
    }
  }

  function commit(value: Date | DateRange | Date[] | undefined) {
    if (!isControlled) {
      if (mode === "single") setInternalSingle(value as Date | undefined);
      else if (mode === "range") setInternalRange(value as DateRange | undefined);
      else setInternalMultiple((value as Date[]) ?? []);
    }
    onChange?.(value);
  }

  function isDateDisabled(date: Date): boolean {
    if (fromDate && isBefore(date, startOfDay(fromDate))) return true;
    if (toDate && isBefore(startOfDay(toDate), date)) return true;
    return dateDisabled?.(date) ?? false;
  }

  function handleCalendarSelect(value: Date | Date[] | DateRange | undefined) {
    if (mode === "single") {
      let next = value as Date | undefined;
      if (next && dateTime) {
        const merged = new Date(next);
        merged.setHours(selectedTime.getHours(), selectedTime.getMinutes(), 0, 0);
        next = merged;
      }
      commit(next);
      if (next) setOpen(false);
      return;
    }

    if (mode === "multiple") {
      commit((value as Date[]) ?? []);
      return;
    }

    const next = value as DateRange | undefined;
    commit(next);
    if (next?.from && next?.to) setOpen(false);
  }

  function handlePreset(preset: DatePreset) {
    const val = preset.getValue();
    if (mode === "single") commit(val as Date);
    else if (mode === "range") commit(val as DateRange);
    else commit(Array.isArray(val) ? val : [val as Date]);
    setOpen(false);
  }

  function clearSelection() {
    commit(mode === "multiple" ? [] : undefined);
  }

  const showPresets = presetsProp !== false;
  const presets: DatePreset[] = React.useMemo(
    () => (Array.isArray(presetsProp) ? presetsProp : buildDefaultPresets(mode)),
    [presetsProp, mode],
  );

  const [selectedTime, setSelectedTime] = React.useState<Date>(() => {
    if (mode === "single" && currentSingle) return new Date(currentSingle);
    return new Date();
  });

  // Keep the time-of-day picker aligned with the selected date.
  const [timeSync, setTimeSync] = React.useState({
    dateTime,
    mode,
    value: currentSingle,
  });
  if (
    timeSync.dateTime !== dateTime ||
    timeSync.mode !== mode ||
    timeSync.value !== currentSingle
  ) {
    setTimeSync({ dateTime, mode, value: currentSingle });
    if (dateTime && mode === "single" && currentSingle) {
      setSelectedTime(new Date(currentSingle));
    }
  }

  const triggerLabel = React.useMemo(() => {
    if (mode === "single") {
      return currentSingle ? formatDate(currentSingle) : null;
    }
    if (mode === "range") {
      return currentRange?.from ? formatDateRange(currentRange) : null;
    }
    return currentMultiple.length > 0 ? formatMultipleDates(currentMultiple) : null;
  }, [mode, currentSingle, currentRange, currentMultiple]);

  const calendarSelected =
    mode === "single"
      ? currentSingle
      : mode === "range"
        ? currentRange
        : currentMultiple;

  return (
    <BasePopover.Root open={open} onOpenChange={setOpen}>
      <div className={cn("relative inline-flex items-center gap-1.5", className)}>
        <BasePopover.Trigger
          disabled={isDisabled}
          className={cn(TRIGGER_SURFACE, "min-w-[180px] justify-between")}
        >
          <span className={cn(!triggerLabel && "text-[color:var(--primitive-text-placeholder,var(--muted-foreground))]")}>
            {triggerLabel ?? placeholder}
          </span>
          <IconCalendar size={15} stroke={1.75} className="shrink-0 text-[var(--muted-foreground)]" />
        </BasePopover.Trigger>

        {triggerLabel ? (
          <button
            type="button"
            aria-label="Clear selection"
            disabled={isDisabled}
            onClick={clearSelection}
            className="flex size-5 shrink-0 items-center justify-center rounded-[var(--primitive-radius-control-sm,0.625rem)] text-[var(--muted-foreground)] transition-colors duration-150 hover:bg-[color:var(--primitive-surface-hover,color-mix(in_srgb,var(--foreground)_4%,transparent))] hover:text-[var(--foreground)] disabled:pointer-events-none disabled:opacity-40"
          >
            <IconX size={12} stroke={2} />
          </button>
        ) : null}
      </div>

      <BasePopover.Portal>
        <BasePopover.Positioner
          side="bottom"
          align="start"
          sideOffset={6}
          collisionPadding={12}
          className="z-[var(--primitive-z-popover,130)] outline-none"
        >
          <BasePopover.Popup data-wensity-primitive=""
            className={cn(POPOVER_CONTENT_CLASS, showPresets ? "w-[364px]" : "w-[288px]")}
          >
            <div className={cn("flex", showPresets && "gap-3")}>
              {showPresets ? (
                <div className="flex w-[100px] shrink-0 flex-col gap-0.5 border-r border-[var(--border)] pr-2">
                  {presets.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => handlePreset(preset)}
                      className={PRESET_ITEM_CLASS}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              ) : null}

              <div className="flex-1">
                {mode === "single" ? (
                  <Calendar
                    mode="single"
                    selected={calendarSelected as Date | undefined}
                    onSelect={handleCalendarSelect}
                    month={displayMonth}
                    onMonthChange={setDisplayMonth}
                    quickNav={monthYear}
                    weekStartsOn={weekStartsOn}
                    disabled={isDateDisabled}
                    className="max-w-none border-0 bg-transparent p-0"
                  />
                ) : mode === "range" ? (
                  <Calendar
                    mode="range"
                    selected={calendarSelected as DateRange | undefined}
                    onSelect={handleCalendarSelect}
                    month={displayMonth}
                    onMonthChange={setDisplayMonth}
                    quickNav={monthYear}
                    weekStartsOn={weekStartsOn}
                    disabled={isDateDisabled}
                    className="max-w-none border-0 bg-transparent p-0"
                  />
                ) : (
                  <Calendar
                    mode="multiple"
                    selected={calendarSelected as Date[]}
                    onSelect={handleCalendarSelect}
                    month={displayMonth}
                    onMonthChange={setDisplayMonth}
                    quickNav={monthYear}
                    weekStartsOn={weekStartsOn}
                    disabled={isDateDisabled}
                    className="max-w-none border-0 bg-transparent p-0"
                  />
                )}

                {dateTime ? (
                  <TimePicker
                    value={selectedTime}
                    onChange={(d) => {
                      setSelectedTime(d);
                      if (currentSingle) {
                        const merged = new Date(currentSingle);
                        merged.setHours(d.getHours(), d.getMinutes(), 0, 0);
                        commit(merged);
                      }
                    }}
                  />
                ) : null}
              </div>
            </div>
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  );
}

/* ─── Export ────────────────────────────────────────────────── */

export const DatePicker = DatePickerInner as {
  (props: DatePickerSingleProps): React.ReactElement;
  (props: DatePickerRangeProps): React.ReactElement;
  (props: DatePickerMultipleProps): React.ReactElement;
};
