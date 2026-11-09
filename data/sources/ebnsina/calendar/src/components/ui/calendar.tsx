"use client";

import * as React from "react";
import {
  DateFormatter,
  endOfWeek,
  getLocalTimeZone,
  createCalendar,
  GregorianCalendar,
  toCalendar,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  today,
  type CalendarDate,
} from "@internationalized/date";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { ease, reduced } from "@/components/ui/calendar-utils/motion";
import { announce } from "@/components/ui/calendar-utils/announce";
import type { CustomCalendar } from "@/components/ui/calendar-utils/bangla";
import Button from "@/components/ui/calendar-utils/button";
import Icon from "@/components/ui/calendar-utils/icon";

/**
 * Ported from the Sina UI Calendar (Svelte 5), by ebnsina — https://github.com/ebnsina/sinaui
 * (MIT). Same markup, class names and public options; runes ($props/$state/$derived/$effect/
 * $bindable) translated to React hooks, and the exported `focusDay()` method translated to an
 * imperative handle.
 */

export interface DateRange {
  start: CalendarDate;
  end: CalendarDate;
}

export interface CalendarProps {
  value?: CalendarDate;
  /** Choose a start and end day instead of one: the result is in range. */
  mode?: "single" | "range";
  range?: DateRange;
  /** Months side by side (they wrap on narrow screens). */
  months?: number;
  /** Names the calendar for screen readers ("Loan due date"). */
  label: string;
  /** Fixed, so server and browser render the same text; drives week start and names. */
  locale?: string;
  min?: CalendarDate;
  max?: CalendarDate;
  /** Dates that can't be chosen (closed days, fully booked). */
  isUnavailable?: (date: CalendarDate) => boolean;
  /**
   * Calendar system the days are shown in ('islamic-umalqura', 'persian', 'hebrew'...). The value
   * stays Gregorian either way, so apps store ordinary ISO dates.
   */
  calendar?: string | CustomCalendar;
  /** Stretch across the container (a date picker's popover) instead of hugging the days. */
  fill?: boolean;
  /** Called after a date is chosen (the value is already updated). */
  onchange?: (date: CalendarDate) => void;
  /** Called once both ends of a range are chosen. */
  onrangechange?: (range: DateRange) => void;
}

export interface CalendarHandle {
  /** Puts the tab stop on the chosen day (or today) and focuses it: a date picker opening. */
  focusDay: () => void;
}

const cx = (...parts: Array<string | false | undefined>) =>
  parts.filter(Boolean).join(" ");

function CalendarImpl(
  {
    value,
    mode = "single",
    range,
    months = 1,
    label,
    locale = "en",
    min,
    max,
    isUnavailable,
    calendar = "gregory",
    fill = false,
    onchange,
    onrangechange,
  }: CalendarProps,
  ref: React.Ref<CalendarHandle>,
) {
  const id = React.useId();
  const tz = getLocalTimeZone();

  // The calendar system is fixed for the component's life, so reading it once is intended.
  const [custom] = React.useState<CustomCalendar | undefined>(() =>
    typeof calendar === "string" ? undefined : calendar,
  );
  const [system] = React.useState(
    () =>
      custom?.system ??
      createCalendar(calendar as Parameters<typeof createCalendar>[0]),
  );
  const [intlCalendar] = React.useState<string | undefined>(() =>
    custom ? undefined : (calendar as string),
  );

  const shown = (d: CalendarDate) => toCalendar(d, system);
  const now = shown(today(tz));
  const clampDate = (d: CalendarDate) =>
    min && d.compare(min) < 0
      ? shown(min)
      : max && d.compare(max) > 0
        ? shown(max)
        : d;

  const chosen = () => {
    const d = mode === "range" ? range?.start : value;
    return d && shown(d);
  };

  // The day with the roving tab stop; the months in view follow it.
  const [focused, setFocused] = React.useState<CalendarDate>(() =>
    clampDate(chosen() ?? now),
  );
  const [first, setFirst] = React.useState<CalendarDate>(() =>
    startOfMonth(focused),
  );

  const shownMonths = Array.from({ length: months }, (_, i) =>
    first.add({ months: i }),
  );
  const lastMonth = shownMonths[shownMonths.length - 1];

  // Always six rows (the most a month can span): the calendar never changes height between months.
  const weeksOf = (m: CalendarDate) => {
    const start = startOfWeek(m, locale);
    return Array.from({ length: 6 }, (_, w) =>
      Array.from({ length: 7 }, (_, d) => start.add({ days: w * 7 + d })),
    );
  };

  // Calendars Intl knows are written by Intl; others (Bangla) bring their own names.
  const monthFormat = new DateFormatter(locale, {
    month: "long",
    year: "numeric",
    calendar: intlCalendar,
  });
  const nameOf = (m: CalendarDate) =>
    custom
      ? custom.format(m, locale, { day: false })
      : monthFormat.format(m.toDate(tz));
  const monthName = shownMonths.map(nameOf).join(" – ");
  const fullDate = new DateFormatter(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    calendar: intlCalendar,
  });
  const dayName = (d: CalendarDate) =>
    custom
      ? custom.format(d, locale, { weekday: true })
      : fullDate.format(d.toDate(tz));
  // Day numbers in the locale's digits (Arabic-Indic in Arabic, for example).
  const digits = custom ? custom.digits(locale) : new Intl.NumberFormat(locale);
  // Narrow headers ("M", or one Arabic letter) fit any locale; abbr gives screen readers the full name.
  const weekdays = (() => {
    const short = new DateFormatter(locale, { weekday: "narrow" });
    const long = new DateFormatter(locale, { weekday: "long" });
    return weeksOf(first)[0].map((d) => ({
      short: short.format(d.toDate(tz)),
      long: long.format(d.toDate(tz)),
    }));
  })();

  const outOfRange = (d: CalendarDate) =>
    (min && d.compare(min) < 0) || (max && d.compare(max) > 0);

  // Range: the first click sets the anchor; the band then follows the pointer or the tab stop.
  const [anchor, setAnchor] = React.useState<CalendarDate | undefined>(
    undefined,
  );
  const [hovered, setHovered] = React.useState<CalendarDate | undefined>(
    undefined,
  );

  // Mid-range, days past an unavailable one can't end it: a range never spans a closed day.
  const crossesUnavailable = (d: CalendarDate) => {
    if (!anchor || !isUnavailable) return false;
    const [a, b] = d.compare(anchor) < 0 ? [d, anchor] : [anchor, d];
    for (let x = a; x.compare(b) <= 0; x = x.add({ days: 1 }))
      if (isUnavailable(x)) return true;
    return false;
  };
  const blocked = (d: CalendarDate) =>
    !!outOfRange(d) || !!isUnavailable?.(d) || crossesUnavailable(d);

  const ordered = (a: CalendarDate, b: CalendarDate) =>
    a.compare(b) <= 0 ? [a, b] : [b, a];
  const band = (() => {
    if (mode !== "range") return undefined;
    if (anchor) {
      // The preview holds the last day pointed at, so crossing a gap or a closed day doesn't flicker it.
      const end = hovered ?? focused;
      return ordered(anchor, blocked(end) ? anchor : end);
    }
    return range && ordered(shown(range.start), shown(range.end));
  })();

  const inBand = (d: CalendarDate) =>
    !!band && d.compare(band[0]) >= 0 && d.compare(band[1]) <= 0;
  const isSelected = (d: CalendarDate) =>
    mode === "range"
      ? !!band && (isSameDay(d, band[0]) || isSameDay(d, band[1]))
      : !!value && isSameDay(d, value);

  const rootRef = React.useRef<HTMLDivElement>(null);
  // Set by keyboard moves, so focus follows the tab stop; clicks and month buttons leave focus alone.
  const moveFocusRef = React.useRef(false);

  function slide(dir: 1 | -1) {
    if (reduced()) return;
    const root = rootRef.current;
    if (!root) return;
    const rtl = getComputedStyle(root).direction === "rtl" ? -1 : 1;
    for (const body of root.querySelectorAll("tbody"))
      body.animate(
        [
          { transform: `translateX(${16 * dir * rtl}px)`, opacity: 0 },
          { transform: "none", opacity: 1 },
        ],
        { duration: 220, easing: ease.standard },
      );
  }

  /** Shows months from `to`; the month buttons page by one, the tab stop moving with them. */
  function turn(to: CalendarDate) {
    const dir = to.compare(first) > 0 ? 1 : -1;
    setFirst(to);
    // Computed from `to` directly (not re-read after the update), so the months said are the new ones.
    const nextMonths = Array.from({ length: months }, (_, i) =>
      to.add({ months: i }),
    );
    const nextMonthName = nextMonths.map(nameOf).join(" – ");
    queueMicrotask(() => announce(nextMonthName));
    slide(dir);
  }

  /** Moves the tab stop; when it leaves the months in view, they page and slide in from that side. */
  function go(to: CalendarDate, withFocus: boolean) {
    const next = clampDate(to);
    setFocused(next);
    moveFocusRef.current = withFocus;
    const m = startOfMonth(next);
    if (m.compare(first) < 0) turn(m);
    else if (m.compare(lastMonth) > 0) turn(m.subtract({ months: months - 1 }));
  }

  function page(dir: 1 | -1) {
    const to = first.add({ months: dir });
    turn(to);
    const next = clampDate(focused.add({ months: dir }));
    setFocused(next);
  }

  React.useEffect(() => {
    if (!moveFocusRef.current) return;
    moveFocusRef.current = false;
    rootRef.current
      ?.querySelector<HTMLElement>(`[data-date="${focused}"]`)
      ?.focus();
  }, [focused]);

  const gregorian = (d: CalendarDate) => toCalendar(d, new GregorianCalendar());

  function choose(d: CalendarDate) {
    if (blocked(d)) return;
    setFocused(d);
    if (mode === "single") {
      onchange?.(gregorian(d));
    } else if (!anchor) {
      setAnchor(d);
      announce(`${dayName(d)} is the start. Now choose the end date.`);
    } else {
      const [a, b] = ordered(anchor, d);
      setAnchor(undefined);
      setHovered(undefined);
      const nextRange: DateRange = { start: gregorian(a), end: gregorian(b) };
      announce(`Chosen: ${dayName(a)} to ${dayName(b)}`);
      onrangechange?.(nextRange);
    }
  }

  function onKeyDown(e: React.KeyboardEvent) {
    // Escape drops a half-chosen range, before anything around it (a popover) closes.
    if (e.key === "Escape" && anchor) {
      e.preventDefault();
      e.stopPropagation();
      setAnchor(undefined);
      setHovered(undefined);
      return;
    }
    const root = rootRef.current;
    const rtl = root ? getComputedStyle(root).direction === "rtl" : false;
    const moves: Record<string, () => CalendarDate> = {
      ArrowLeft: () => focused.add({ days: rtl ? 1 : -1 }),
      ArrowRight: () => focused.add({ days: rtl ? -1 : 1 }),
      ArrowUp: () => focused.subtract({ weeks: 1 }),
      ArrowDown: () => focused.add({ weeks: 1 }),
      PageUp: () => focused.subtract(e.shiftKey ? { years: 1 } : { months: 1 }),
      PageDown: () => focused.add(e.shiftKey ? { years: 1 } : { months: 1 }),
      Home: () => startOfWeek(focused, locale),
      End: () => endOfWeek(focused, locale),
    };
    const move = moves[e.key];
    if (!move) return;
    e.preventDefault();
    setHovered(undefined);
    go(move(), true);
  }

  /** Puts the tab stop on the chosen day (or today) and focuses it: a date picker opening. */
  const focusDay = React.useCallback(() => {
    setAnchor(undefined);
    setHovered(undefined);
    const next = clampDate(chosen() ?? now);
    setFocused(next);
    setFirst(startOfMonth(next));
    queueMicrotask(() => {
      rootRef.current
        ?.querySelector<HTMLElement>(`[data-date="${next}"]`)
        ?.focus();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useImperativeHandle(ref, () => ({ focusDay }), [focusDay]);

  return (
    <div
      ref={rootRef}
      className={cx("calendar", fill && "fill", anchor && "choosing")}
      style={
        { ["--months" as unknown as string]: months } as React.CSSProperties
      }
    >
      {shownMonths.map((m, mi) => (
        <div className="month-block" key={mi}>
          <div className="head">
            {mi === 0 ? (
              <Button
                variant="ghost"
                size="sm"
                square
                aria-label="Previous month"
                aria-disabled={
                  (min && first.compare(startOfMonth(shown(min))) <= 0) ||
                  undefined
                }
                onClick={() =>
                  (!min || first.compare(startOfMonth(shown(min))) > 0) &&
                  page(-1)
                }
              >
                <Icon icon={ArrowLeft01Icon} size={16} className="flip" />
              </Button>
            ) : (
              <span className="spacer" />
            )}
            <h2 id={`${id}-month-${mi}`} className="month">
              {nameOf(m)}
            </h2>
            {mi === months - 1 ? (
              <Button
                variant="ghost"
                size="sm"
                square
                aria-label="Next month"
                aria-disabled={
                  (max && lastMonth.compare(startOfMonth(shown(max))) >= 0) ||
                  undefined
                }
                onClick={() =>
                  (!max || lastMonth.compare(startOfMonth(shown(max))) < 0) &&
                  page(1)
                }
              >
                <Icon icon={ArrowRight01Icon} size={16} className="flip" />
              </Button>
            ) : (
              <span className="spacer" />
            )}
          </div>

          <table
            role="grid"
            aria-label={`${label}, ${nameOf(m)}`}
            aria-multiselectable={mode === "range" || undefined}
            onKeyDown={onKeyDown}
          >
            <thead>
              <tr>
                {weekdays.map((w) => (
                  <th scope="col" abbr={w.long} key={w.long}>
                    {w.short}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weeksOf(m).map((week, w) => (
                <tr key={w}>
                  {week.map((d) => {
                    if (!isSameMonth(d, m)) return <td key={d.toString()} />;
                    const selected = isSelected(d);
                    const inside = mode === "range" && inBand(d);
                    return (
                      <td
                        key={d.toString()}
                        role="gridcell"
                        aria-selected={mode === "range" ? inside : selected}
                        className={cx(
                          inside && "in-band",
                          inside &&
                            band &&
                            isSameDay(d, band[0]) &&
                            "band-start",
                          inside && band && isSameDay(d, band[1]) && "band-end",
                        )}
                      >
                        <button
                          type="button"
                          className={cx(
                            "day",
                            selected && "selected",
                            anchor && isSameDay(d, anchor) && "anchor",
                            isSameDay(d, now) && "today",
                          )}
                          data-date={d.toString()}
                          tabIndex={isSameDay(d, focused) ? 0 : -1}
                          aria-label={`${dayName(d)}${isSameDay(d, now) ? ", today" : ""}`}
                          aria-disabled={blocked(d) || undefined}
                          onPointerEnter={() =>
                            anchor && !blocked(d) && setHovered(d)
                          }
                          onClick={() => {
                            setFocused(d);
                            choose(d);
                          }}
                        >
                          {digits.format(d.day)}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

const Calendar = React.forwardRef(CalendarImpl);
export default Calendar;
