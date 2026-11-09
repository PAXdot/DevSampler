// Subset of Redrob's shared icon module (src/icons/index.tsx, 252 glyphs in the real design
// system) containing only the glyph this component actually renders. The frame helper and the
// chevronDown geometry below are copied verbatim from that file; the other ~250 unrelated glyphs
// are intentionally omitted rather than shipped or approximated.

import * as React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement>;

/** Every glyph shares this frame, so a glyph only carries its own geometry. */
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

export type IconName = 'chevronDown';

export type IconComponent = (props: IconProps) => React.ReactElement;

export const icons: Record<IconName, IconComponent> = {
  chevronDown: (p) => svg(p, h('polyline', { points: '7 9.9 12 14.1 17 9.9', key: 'a' })),
};

export default icons;
