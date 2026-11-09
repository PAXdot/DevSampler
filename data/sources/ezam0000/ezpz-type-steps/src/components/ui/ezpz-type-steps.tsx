"use client";

/*
MIT License

Copyright (c) 2026 EZPZ

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/**
 * Customize words, palette and fontFamily through props.
 * Place inside a width-constrained container; the SVG scales at 4:5.
 * Keep each line short. Use decorative when nearby text repeats the message.
 */

import { useId, type CSSProperties } from "react";

export interface EZPZTypeStepsProps {
  words?: readonly [string, string, string];
  background?: string;
  ink?: string;
  tread?: string;
  riser?: string;
  fontFamily?: string;
  className?: string;
  style?: CSSProperties;
  label?: string;
  decorative?: boolean;
}

/** Three connected isometric steps carrying live, editable typography. */
export default function EZPZTypeSteps({
  words = ["BUILD", "SHIP", "EZPZ"],
  background = "var(--color-background, #101d27)",
  ink = "var(--color-primary, #d9ff58)",
  tread = "var(--color-muted, #203340)",
  riser = "var(--color-card, #172630)",
  fontFamily = '"Helvetica Neue", Arial, sans-serif',
  className, style, label, decorative = false,
}: EZPZTypeStepsProps) {
  const id = useId();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1800" width="1440" height="1800"
      className={className} style={{ display: "block", width: "100%", height: "auto", ...style }}
      role={decorative ? undefined : "img"} aria-hidden={decorative || undefined}
      aria-labelledby={decorative ? undefined : id} focusable="false">
      {decorative ? null : <title id={id}>{label ?? words.join(". ")}</title>}
      <rect width="1440" height="1800" fill={background}/>
      <g transform="translate(0 105)" fontFamily={fontFamily} fontWeight="700" aria-hidden="true">
        {words.map((word, i) => {
          const x = 150 + .8660254 * 160 * i;
          const y = 685 + 196 * i;
          return <g key={i}>
            <g transform={`matrix(.8660254 -.5 .8660254 .5 ${x} ${y})`}>
              <rect width="760" height="160" fill={tread}/>
              <text x="14" y="129" fontSize="160" fill={ink} textLength="732" lengthAdjust="spacingAndGlyphs">{word}</text>
            </g>
            <g transform={`matrix(.8660254 -.5 0 1 ${x + .8660254 * 160} ${y + 80})`}>
              <rect width="760" height="116" fill={riser}/>
            </g>
          </g>;
        })}
      </g>
    </svg>
  );
}
