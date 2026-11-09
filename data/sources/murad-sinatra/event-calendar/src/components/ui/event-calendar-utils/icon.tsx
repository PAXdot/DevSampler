/*
 * Adapted from mors-component-library (https://github.com/murad-sinatra/mors-component-library)
 * MIT License — Copyright (c) 2026 Murad
 */
import type { ReactNode, SVGProps } from 'react';
import { cx } from './cx';

export type IconName =
  | 'chevron-left'
  | 'chevron-right'
  | 'edit'
  | 'trash'
  | 'plus'
  | 'warning';

const PATHS: Record<IconName, ReactNode> = {
  'chevron-left': <path d="M14.5 6l-6 6 6 6" />,
  'chevron-right': <path d="M9.5 6l6 6-6 6" />,
  edit: (
    <>
      <path d="M12 20h8.5" />
      <path d="M16.4 3.9a1.9 1.9 0 0 1 2.7 2.7L8.2 17.5 4 18.5l1-4.2z" />
    </>
  ),
  trash: (
    <path d="M4.5 7h15M9.5 7V5.5A1.5 1.5 0 0 1 11 4h2a1.5 1.5 0 0 1 1.5 1.5V7m-8 0l.8 11.2A2 2 0 0 0 9.3 20h5.4a2 2 0 0 0 2-1.8L17.5 7" />
  ),
  plus: <path d="M12 5.5v13M5.5 12h13" />,
  warning: (
    <>
      <path d="M12 4.75L20.5 19.25H3.5z" />
      <path d="M12 10v4.25M12 17h.01" />
    </>
  ),
};

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name' | 'children'> {
  name: IconName;
  /** Any CSS length. Defaults to `1em` so icons scale with surrounding text. */
  size?: number | string;
  /** Provide to expose the icon to assistive tech; omit for decorative icons. */
  label?: string;
}

export function Icon({ name, size, label, className, style, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cx('mors-icon', className)}
      style={size === undefined ? style : { width: size, height: size, ...style }}
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
      aria-label={label}
      focusable="false"
      {...rest}
    >
      {PATHS[name]}
    </svg>
  );
}
