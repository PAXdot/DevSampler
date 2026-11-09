import * as React from 'react';

function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

export interface ProtectionStatusProps {
  title: React.ReactNode;
  icon?: React.ReactNode;
  /** `safe` on, `warn` off or degraded, `brand` a feature in force, `plain` neutral. */
  tone?: 'safe' | 'warn' | 'brand' | 'plain';
  size?: 'md' | 'lg';
  /** Text beside a live dot: what is running right now. */
  live?: string;
  /** Element for the title, when the card opens a section. */
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

const TONE_STYLES: Record<string, { card: string; icon: string; dot: string }> = {
  safe: {
    card: 'bg-emerald-50 dark:bg-emerald-500/10',
    icon: 'text-emerald-600 dark:text-emerald-400',
    dot: 'bg-emerald-500',
  },
  brand: {
    card: 'bg-blue-50 dark:bg-blue-500/10',
    icon: 'text-blue-600 dark:text-blue-400',
    dot: 'bg-blue-500',
  },
  warn: {
    card: 'bg-amber-50 dark:bg-amber-500/10',
    icon: 'text-amber-700 dark:text-amber-400',
    dot: 'bg-amber-500',
  },
  plain: {
    card: 'bg-muted',
    icon: 'text-foreground',
    dot: 'bg-foreground/60',
  },
};

/**
 * The one sentence a person needs about a protection, large, with whether it is running. Heads a panel or a
 * page.
 *
 * The title says what IS, not what the feature is called: "Privacy protection is on: High" rather than
 * "Privacy". A person checking whether they are protected should not have to interpret a label.
 *
 * `live` pairs a dot with text. The dot alone would be decoration, and a safeguard that signals only in colour
 * is a safeguard some readers cannot verify.
 */
export function ProtectionStatus(props: ProtectionStatusProps): React.ReactElement {
  const tone = props.tone || 'safe';
  const styles = TONE_STYLES[tone] || TONE_STYLES.safe;
  const isLg = props.size === 'lg';
  const Title = (props.as || 'p') as React.ElementType;

  return (
    <div
      className={cx(
        'flex items-start gap-4 rounded-2xl',
        isLg ? 'p-6' : 'p-5',
        styles.card,
        props.className,
      )}
    >
      {props.icon ? (
        <span className={cx('flex-shrink-0 leading-none', styles.icon)} aria-hidden="true">
          {props.icon}
        </span>
      ) : null}
      <div className="flex flex-col gap-1.5 min-w-0">
        <Title className={cx('font-bold text-foreground', isLg ? 'text-2xl' : 'text-xl')}>
          {props.title}
        </Title>
        {props.children || props.live ? (
          <p className={cx('text-muted-foreground', isLg ? 'text-base' : 'text-sm', 'flex items-center gap-2 flex-wrap')}>
            {props.live ? (
              <span className="inline-flex items-center gap-2">
                <span
                  className={cx('inline-block w-2 h-2 rounded-full', styles.dot)}
                  aria-hidden="true"
                />
                <span>{props.live + (props.children ? '. ' : '')}</span>
              </span>
            ) : null}
            {props.children}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default ProtectionStatus;
