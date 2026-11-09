"use client";

/**
 * Hand-drawn SVG border overlay that reproduces doodle-ui's rough.js-style
 * sketch look (see https://roughjs.com, MIT License) without the external
 * `roughjs` runtime dependency (not resolvable as an npm import in this
 * build). It draws two seeded, jittered overlapping strokes per shape —
 * the same "double stroke" technique rough.js itself uses to read as
 * hand-drawn. Ported/adapted in spirit from
 * packages/doodle-ui/src/primitives/RoughSvg.tsx (MIT License,
 * Copyright (c) 2026 KanchanaSW (doodle-ui)).
 */

import { useEffect, useRef, useState } from "react";

export type RoughShape = "rectangle" | "ellipse";

export interface RoughSvgProps {
  shape?: RoughShape;
  roughness?: number;
  seed?: number;
  sketchColor?: string;
  bowing?: number;
  strokeWidth?: number;
  inset?: number;
}

const DEFAULT_INSET = 3;

/** Deterministic PRNG so a given seed always draws the same wobble. */
function mulberry32(seed: number) {
  let a = seed >>> 0 || 1;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function sketchyRectPath(
  x: number,
  y: number,
  w: number,
  h: number,
  rng: () => number,
  roughness: number,
  bowing: number,
): string {
  const jitter = () => (rng() - 0.5) * 2 * 1.1 * roughness;
  const bow = () => (rng() - 0.5) * 2 * 2.2 * bowing;
  const corners: [number, number][] = [
    [x, y],
    [x + w, y],
    [x + w, y + h],
    [x, y + h],
    [x, y],
  ];
  let d = "";
  corners.forEach(([px, py], i) => {
    const jx = px + jitter();
    const jy = py + jitter();
    if (i === 0) {
      d += `M ${jx} ${jy} `;
    } else {
      const [prevx, prevy] = corners[i - 1];
      const midx = (prevx + px) / 2 + bow();
      const midy = (prevy + py) / 2 + bow();
      d += `Q ${midx} ${midy} ${jx} ${jy} `;
    }
  });
  return d;
}

function sketchyEllipsePath(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  rng: () => number,
  roughness: number,
  bowing: number,
  segments = 14,
): string {
  const pts: [number, number][] = [];
  for (let i = 0; i <= segments; i += 1) {
    const theta = (i / segments) * Math.PI * 2;
    const jr = 1 + (rng() - 0.5) * 0.07 * roughness;
    pts.push([cx + Math.cos(theta) * rx * jr, cy + Math.sin(theta) * ry * jr]);
  }
  let d = "";
  pts.forEach(([px, py], i) => {
    if (i === 0) {
      d += `M ${px} ${py} `;
    } else {
      const [prevx, prevy] = pts[i - 1];
      const midx = (prevx + px) / 2 + (rng() - 0.5) * 2 * bowing;
      const midy = (prevy + py) / 2 + (rng() - 0.5) * 2 * bowing;
      d += `Q ${midx} ${midy} ${px} ${py} `;
    }
  });
  return d;
}

/**
 * Absolutely-positioned SVG layer that draws a hand-drawn sketch shape
 * behind HTML content. The parent element must be `position: relative`.
 */
export function RoughSvg({
  shape = "rectangle",
  roughness = 1.5,
  seed = 1,
  sketchColor = "#1f1d1a",
  bowing = 1,
  strokeWidth = 1.75,
  inset = DEFAULT_INSET,
}: RoughSvgProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = containerRef.current?.parentElement;
    if (!el) return;
    const update = () =>
      setSize({ width: el.clientWidth, height: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  if (size.width < 2 || size.height < 2) {
    return (
      <div
        ref={containerRef}
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />
    );
  }

  const rngA = mulberry32(seed);
  const rngB = mulberry32(seed + 101);
  const paths =
    shape === "ellipse"
      ? [
          sketchyEllipsePath(
            size.width / 2,
            size.height / 2,
            Math.max(1, size.width / 2 - inset),
            Math.max(1, size.height / 2 - inset),
            rngA,
            roughness,
            bowing,
          ),
          sketchyEllipsePath(
            size.width / 2,
            size.height / 2,
            Math.max(1, size.width / 2 - inset),
            Math.max(1, size.height / 2 - inset),
            rngB,
            roughness,
            bowing,
          ),
        ]
      : [
          sketchyRectPath(
            inset,
            inset,
            Math.max(1, size.width - inset * 2),
            Math.max(1, size.height - inset * 2),
            rngA,
            roughness,
            bowing,
          ),
          sketchyRectPath(
            inset,
            inset,
            Math.max(1, size.width - inset * 2),
            Math.max(1, size.height - inset * 2),
            rngB,
            roughness,
            bowing,
          ),
        ];

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "visible",
        zIndex: 0,
      }}
    >
      <svg
        width="100%"
        height="100%"
        overflow="visible"
        style={{ display: "block" }}
      >
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke={sketchColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={i === 0 ? 1 : 0.75}
          />
        ))}
      </svg>
    </div>
  );
}
