// Trimmed from the redrob-ui design system's generated icon set (src/icons/index.tsx, 252 glyphs,
// MIT licensed). Only the glyphs Alert actually renders are kept here (info, success, warning,
// danger, close); every path below is copied verbatim, byte-for-byte, from that source file.
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

export type IconName = 'info' | 'success' | 'warning' | 'danger' | 'close';

export type IconComponent = (props: IconProps) => React.ReactElement;

export const icons: Record<IconName, IconComponent> = {
  info: (p) => svg(p, [h("path", { d: "M20.89 10.59 A9 9 0 1 1 14.93 3.49", key: "a" }), h("rect", { x: 11, y: 7, width: 2, height: 2, fill: "currentColor", stroke: "none", key: "b" }), h("line", { x1: 12, y1: 11, x2: 12, y2: 16.5, key: "c" })]),
  success: (p) => svg(p, [h("path", { d: "M20.89 10.59 A9 9 0 1 1 14.93 3.49", key: "a" }), h("polyline", { points: "8 12.65 10.8 15 16 10.64", key: "b" })]),
  warning: (p) => svg(p, [h("path", { d: "M12 3.5 21.5 20.5 H2.5 Z", key: "a" }), h("line", { x1: 12, y1: 10, x2: 12, y2: 14, key: "b" }), h("rect", { x: 11, y: 16, width: 2, height: 2, fill: "currentColor", stroke: "none", key: "c" })]),
  danger: (p) => svg(p, [h("path", { d: "M20.89 10.59 A9 9 0 1 1 14.93 3.49", key: "a" }), h("line", { x1: 12, y1: 7, x2: 12, y2: 13, key: "b" }), h("rect", { x: 11, y: 15.5, width: 2, height: 2, fill: "currentColor", stroke: "none", key: "c" })]),
  close: (p) => svg(p, [h("line", { x1: 5.5, y1: 5.5, x2: 18.5, y2: 18.5, key: "a" }), h("line", { x1: 18.5, y1: 5.5, x2: 5.5, y2: 18.5, key: "b" })]),
};

export default icons;
