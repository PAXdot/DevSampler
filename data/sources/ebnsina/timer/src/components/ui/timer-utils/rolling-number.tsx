import * as React from 'react';
import { cn } from '@/lib/utils';

interface RollingNumberProps {
  /** A number, or text you've already formatted ("18px", "40 days"): its digits roll either way. */
  value: number | string;
  /** Intl.NumberFormat options for a number value: percent, currency, units, decimals. */
  format?: Intl.NumberFormatOptions;
  locales?: Intl.LocalesArgument;
  className?: string;
}

export default function RollingNumber({ value, format, locales, className }: RollingNumberProps) {
  const text =
    typeof value === 'string' ? value : new Intl.NumberFormat(locales, format).format(value);

  // Keyed from the right, so the ones stay the ones when 99 becomes 100 and only the new digit enters.
  const chars = React.useMemo(() => {
    const all = [...text];
    return all.map((c, i) => ({ c, key: all.length - i, digit: /[0-9]/.test(c) ? +c : -1 }));
  }, [text]);

  // Digits that appear later roll up from 0; the ones in the first render stay still.
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => setReady(true), []);

  // Always rolls, at the pace values arrive: a lone change takes the full 600ms, quick repeats roll
  // quicker (picking up mid-roll), and a timer's rapid ticks are near-instant rather than churning.
  const changedAtRef = React.useRef(-Infinity);
  const roll = React.useMemo(() => {
    const now = performance.now();
    const gap = now - changedAtRef.current;
    const r = gap < 120 ? 0 : Math.min(600, Math.round(gap * 0.8));
    changedAtRef.current = now;
    return r;
  }, [text]);

  return (
    <span
      className={cn('rolling', ready && 'ready', className)}
      style={{ ['--roll' as any]: `${roll}ms` } as React.CSSProperties}
    >
      <span className="sr-only">{text}</span>
      <span className="chars" aria-hidden="true">
        {chars.map(({ c, key, digit }) =>
          digit >= 0 ? (
            <span className="digit" data-c={c} key={key}>
              <span className="strip" style={{ ['--d' as any]: digit } as React.CSSProperties} />
            </span>
          ) : (
            <span data-c={c} key={key} />
          )
        )}
      </span>
    </span>
  );
}
