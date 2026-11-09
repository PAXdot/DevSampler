import * as React from 'react';
import { cn } from '@/lib/utils';

interface WidgetProps {
  /** Names the widget for screen readers ("Study timer"). */
  label: string;
  /** Its color: text, lit parts and tinted buttons; plain text color by default. */
  tone?: string;
  /** The widest it grows ("36rem"); it fills the space it's given up to this. */
  max?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Widget({ label, tone, max = '36rem', children, className }: WidgetProps) {
  return (
    <section
      className={cn('widget', className)}
      aria-label={label}
      style={{ ['--tone' as any]: tone, maxInlineSize: max } as React.CSSProperties}
    >
      {children}
    </section>
  );
}
