// Redrob icons atlas (src/icons/index.tsx in redrob-ui) ships 252 glyphs generated from the design
// system's reference bundle. Hero only renders one of them (arrowRight, beside the secondary link),
// so only that glyph is reproduced here - transcribed verbatim (same svg() frame helper, same path
// data) from the original file; the other 251 entries are simply omitted, nothing is redrawn.

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

export type IconName = 'arrowRight';

export type IconComponent = (props: IconProps) => React.ReactElement;

export const icons: Record<IconName, IconComponent> = {
  arrowRight: (p) => svg(p, [h('line', { x1: 3.5, y1: 12, x2: 19.5, y2: 12, key: 'a' }), h('polyline', { points: '15.1 8.31 19.5 12 15.1 15.69', key: 'b' })]),
};

export default icons;
