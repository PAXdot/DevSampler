/** Everything the library knows about formatting. */
export interface Formats {
  date: (d: Date) => string;
  dateShort: (d: Date) => string;
  month: (d: Date) => string;
  dateLong: (d: Date) => string;
  time: (d: Date, withSeconds: boolean) => string;
  dateTime: (d: Date, withSeconds: boolean) => string;
  offset: (d: Date) => string;
  number: (n: number, decimals?: number) => string;
  count: (n: number) => string;
  percent: (share: number) => string;
  compareText: (a: string, b: string) => number;
  relative: (ms: number) => string;
}

const RELATIVE_STEPS: readonly (readonly [Intl.RelativeTimeFormatUnit, number])[] = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
];

/** Every format of one locale, built once. */
export function formatsFor(locale: string): Formats {
  const dateFormat = new Intl.DateTimeFormat(locale, { day: "2-digit", month: "2-digit", year: "numeric" });
  const dateShortFormat = new Intl.DateTimeFormat(locale, { day: "2-digit", month: "2-digit" });
  const monthFormat = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" });
  const dateLongFormat = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const clock = { hour: "2-digit", minute: "2-digit", hour12: false, hourCycle: "h23" } as const;
  const timeFormats = {
    without: new Intl.DateTimeFormat(locale, clock),
    with: new Intl.DateTimeFormat(locale, { ...clock, second: "2-digit" }),
  };
  const dateTimeFormats = {
    without: new Intl.DateTimeFormat(locale, { day: "2-digit", month: "2-digit", year: "numeric", ...clock }),
    with: new Intl.DateTimeFormat(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      ...clock,
      second: "2-digit",
    }),
  };
  const offsetFormat = new Intl.DateTimeFormat(locale, { timeZoneName: "shortOffset" });
  const numberFormats = new Map<number | undefined, Intl.NumberFormat>();
  const countFormat = new Intl.NumberFormat(locale);
  const percentFormat = new Intl.NumberFormat(locale, { style: "percent", maximumFractionDigits: 0 });
  const collator = new Intl.Collator(locale);
  const relativeFormat = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  return {
    date: (d) => dateFormat.format(d),
    dateShort: (d) => dateShortFormat.format(d),
    month: (d) => monthFormat.format(d),
    dateLong: (d) => dateLongFormat.format(d),
    time: (d, withSeconds) => (withSeconds ? timeFormats.with : timeFormats.without).format(d),
    dateTime: (d, withSeconds) => (withSeconds ? dateTimeFormats.with : dateTimeFormats.without).format(d),
    offset: (d) => offsetFormat.formatToParts(d).find((part) => part.type === "timeZoneName")?.value ?? "",
    number: (n, decimals) => {
      let f = numberFormats.get(decimals);
      if (!f) {
        f = new Intl.NumberFormat(locale, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals ?? 10,
        });
        numberFormats.set(decimals, f);
      }
      return f.format(n);
    },
    count: (n) => countFormat.format(n),
    percent: (share) => percentFormat.format(share),
    compareText: (a, b) => collator.compare(a, b),
    relative: (ms) => {
      const seconds = Math.max(0, Math.round(ms / 1000));
      for (const [unit, size] of RELATIVE_STEPS) {
        if (seconds >= size) return relativeFormat.format(-Math.floor(seconds / size), unit);
      }
      return relativeFormat.format(-seconds, "second");
    },
  };
}

/** The instance shipped by default: English notation on a 24-hour clock. */
export const DEFAULT_FORMATS: Formats = formatsFor("en-GB");

/** The two characters a notation separates with. */
export interface Separators {
  readonly group: string;
  readonly decimal: string;
}

export function separatorsOf(formats: Formats): Separators {
  const punctuation = [...formats.number(1234.5, 1).replace(/[\d-]/g, "")];
  const decimal = punctuation[punctuation.length - 1] ?? ".";
  return { group: punctuation.length > 1 ? (punctuation[0] as string) : "", decimal };
}

/** The separators of the default notation. */
export const DEFAULT_SEPARATORS: Separators = separatorsOf(DEFAULT_FORMATS);
