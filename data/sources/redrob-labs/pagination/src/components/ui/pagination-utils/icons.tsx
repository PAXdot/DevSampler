// Minimal subset of the redrob-ui icon table (src/icons/index.tsx), trimmed to only the two
// glyphs the Pagination component uses. Geometry copied verbatim from the source file.
import * as React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement>;

export function svg(props: IconProps, children: React.ReactNode): React.ReactElement {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: '1em',
      height: '1em',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'butt',
      strokeLinejoin: 'miter',
      strokeMiterlimit: 3,
      'aria-hidden': 'true',
      focusable: 'false',
      ...props,
    },
    children,
  );
}

const h = React.createElement;

export type IconName = 'chevronLeft' | 'chevronRight';

export type IconComponent = (props: IconProps) => React.ReactElement;

export const icons: Record<IconName, IconComponent> = {
  chevronLeft: (p) => svg(p, h('polyline', { points: '14.1 7 9.9 12 14.1 17', key: 'a' })),
  chevronRight: (p) => svg(p, h('polyline', { points: '9.9 7 14.1 12 9.9 17', key: 'a' })),
};

export default icons;
