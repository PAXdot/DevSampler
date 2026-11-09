import * as React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement>;

/** Every glyph shares this frame, so a glyph only carries its own geometry. (Trimmed from redrob-ui's shared icon set to the three icons ThemeSwitch uses - monitor/sun/moon - geometry copied verbatim.) */
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

export type IconName = 'monitor' | 'sun' | 'moon';

export type IconComponent = (props: IconProps) => React.ReactElement;

export const icons: Record<IconName, IconComponent> = {
  monitor: (p) => svg(p, [h("path", { d: "M3 4.5H19A2 2 0 0 1 21 6.5V14.5A2 2 0 0 1 19 16.5H5A2 2 0 0 1 3 14.5Z", key: "a" }), h("line", { x1: 12, y1: 16.5, x2: 12, y2: 20, key: "b" }), h("line", { x1: 8, y1: 20, x2: 16, y2: 20, key: "c" })]),
  sun: (p) => svg(p, [h("circle", { cx: 12, cy: 12, r: 3.2, key: "a" }), h("line", { x1: 17.8, y1: 12.0, x2: 21.2, y2: 12.0, key: "b" }), h("line", { x1: 16.44, y1: 8.27, x2: 19.05, y2: 6.09, key: "c" }), h("line", { x1: 12.0, y1: 6.2, x2: 12.0, y2: 2.8, key: "d" }), h("line", { x1: 7.56, y1: 8.27, x2: 4.95, y2: 6.09, key: "e" }), h("line", { x1: 6.2, y1: 12.0, x2: 2.8, y2: 12.0, key: "f" }), h("line", { x1: 7.56, y1: 15.73, x2: 4.95, y2: 17.91, key: "g" }), h("line", { x1: 12.0, y1: 17.8, x2: 12.0, y2: 21.2, key: "h" }), h("line", { x1: 16.44, y1: 15.73, x2: 19.05, y2: 17.91, key: "i" })]),
  moon: (p) => svg(p, h("path", { d: "M15.2 3.6A8.6 8.6 0 1 0 20.4 15.4A6.9 6.9 0 0 1 15.2 3.6Z", key: "a" })),
};

export default icons;
