import * as React from 'react';

type IconNode = readonly (readonly [string, Record<string, string | number>])[];

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Any icon from @hugeicons/core-free-icons. */
  icon: IconNode;
  size?: number | string;
  /** Accessible name. Without it the icon is decorative and hidden from screen readers. */
  label?: string;
  /** Overrides the icon's stroke width (Hugeicons default 1.5). */
  strokeWidth?: number;
}

const kebab = (k: string) => k.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase());

export default function Icon({ icon, size = 18, label, strokeWidth, ...rest }: IconProps) {
  const nodes = icon.map(([tag, attrs]) => ({
    tag,
    attrs: Object.fromEntries(
      Object.entries(attrs)
        .filter(([k]) => k !== 'key')
        .map(([k, v]) => [kebab(k), k === 'strokeWidth' && strokeWidth ? strokeWidth : v])
    )
  }));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : 'true'}
      focusable="false"
      {...rest}
    >
      {nodes.map(({ tag, attrs }, i) =>
        React.createElement(tag, { key: i, xmlns: 'http://www.w3.org/2000/svg', ...attrs })
      )}
    </svg>
  );
}
