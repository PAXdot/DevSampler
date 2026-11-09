"use client";

import { memo, useMemo, useRef, type CSSProperties } from "react";
import rough from "roughjs";
import type { Drawable } from "roughjs/bin/core";
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect";
import { useResolvedSeed } from "./use-resolved-seed";
import {
  mergeSketchProps,
  readSketchCssVars,
  useSketchDefaults,
  type SketchDefaults,
} from "./use-sketch-defaults";
import { useElementSize } from "./use-element-size";
import {
  DEFAULT_INSET,
  toRoughOptions,
  type RoughSvgProps,
} from "./types";

let roughPaintCount = 0;

export function getRoughPaintCount(): number {
  return roughPaintCount;
}

export function resetRoughPaintCount(): void {
  roughPaintCount = 0;
}

function ensureSvg(container: HTMLDivElement): SVGSVGElement {
  const existing = container.querySelector(":scope > svg");
  if (existing instanceof SVGSVGElement) return existing;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("overflow", "visible");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.style.display = "block";
  container.appendChild(svg);
  return svg;
}

type PaintInputs = {
  width: number;
  height: number;
  shape: RoughSvgProps["shape"];
  roughness?: number;
  seed: number;
  sketchColor?: string;
  bowing?: number;
  fillStyle?: RoughSvgProps["fillStyle"];
  strokeWidth?: number;
  fill?: string;
  hachureGap?: number;
  hachureAngle?: number;
  fillWeight?: number;
  inset: number;
  path?: string;
  sketchDefaults: SketchDefaults;
  cssVars?: ReturnType<typeof readSketchCssVars>;
};

function createDrawable(opts: PaintInputs): Drawable | null {
  const {
    width,
    height,
    shape = "rectangle",
    roughness,
    seed,
    sketchColor,
    bowing,
    fillStyle,
    strokeWidth,
    fill,
    hachureGap,
    hachureAngle,
    fillWeight,
    inset,
    path,
    sketchDefaults,
    cssVars,
  } = opts;

  if (width < 2 || height < 2) return null;
  if (shape === "path" && !path) return null;

  const merged = mergeSketchProps(
    {
      roughness,
      seed,
      sketchColor,
      bowing,
      fillStyle,
      strokeWidth,
      hachureGap,
      hachureAngle,
      fillWeight,
    },
    sketchDefaults,
    cssVars,
  );

  roughPaintCount += 1;

  const generator = rough.generator();
  const options = toRoughOptions({
    roughness: merged.roughness,
    seed,
    sketchColor: merged.sketchColor,
    bowing: merged.bowing,
    fillStyle: merged.fillStyle,
    strokeWidth: merged.strokeWidth,
    fill,
    hachureGap,
    hachureAngle,
    fillWeight,
  });

  const x = inset;
  const y = inset;
  const w = Math.max(1, width - inset * 2);
  const h = Math.max(1, height - inset * 2);

  switch (shape) {
    case "ellipse":
      return generator.ellipse(width / 2, height / 2, w, h, options);
    case "line":
      return generator.line(inset, height / 2, width - inset, height / 2, options);
    case "line-vertical":
      return generator.line(width / 2, inset, width / 2, height - inset, options);
    case "path":
      return generator.path(path!, options);
    default:
      return generator.rectangle(x, y, w, h, options);
  }
}

function applyDrawable(svg: SVGSVGElement, drawable: Drawable) {
  while (svg.firstChild) svg.removeChild(svg.firstChild);
  const rc = rough.svg(svg);
  svg.appendChild(rc.draw(drawable));
}

function RoughSvgImpl({
  shape = "rectangle",
  width: widthProp,
  height: heightProp,
  roughness,
  seed: seedProp,
  sketchColor,
  bowing,
  fillStyle,
  strokeWidth,
  fill,
  hachureGap,
  hachureAngle,
  fillWeight,
  inset = DEFAULT_INSET,
  path,
  className,
  style,
}: RoughSvgProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measured = useElementSize(containerRef);
  const seed = useResolvedSeed(seedProp);
  const sketchDefaults = useSketchDefaults();
  const lastAppliedKeyRef = useRef<string>("");

  const width = widthProp ?? measured.width;
  const height = heightProp ?? measured.height;

  const drawable = useMemo(
    () =>
      createDrawable({
        width,
        height,
        shape,
        roughness,
        seed,
        sketchColor,
        bowing,
        fillStyle,
        strokeWidth,
        fill,
        hachureGap,
        hachureAngle,
        fillWeight,
        inset,
        path,
        sketchDefaults,
      }),
    [
      width,
      height,
      shape,
      roughness,
      seed,
      sketchColor,
      bowing,
      fillStyle,
      strokeWidth,
      fill,
      hachureGap,
      hachureAngle,
      fillWeight,
      inset,
      path,
      sketchDefaults,
    ],
  );

  const paintKey = useMemo(
    () =>
      [
        width,
        height,
        shape,
        roughness,
        seed,
        sketchColor,
        bowing,
        fillStyle,
        strokeWidth,
        fill,
        hachureGap,
        hachureAngle,
        fillWeight,
        inset,
        path,
        sketchDefaults.roughness,
        sketchDefaults.bowing,
        sketchDefaults.strokeWidth,
        sketchDefaults.sketchColor,
        sketchDefaults.fillStyle,
      ].join("|"),
    [
      width,
      height,
      shape,
      roughness,
      seed,
      sketchColor,
      bowing,
      fillStyle,
      strokeWidth,
      fill,
      hachureGap,
      hachureAngle,
      fillWeight,
      inset,
      path,
      sketchDefaults,
    ],
  );

  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || !drawable) return;

    const cssVars = readSketchCssVars(container);
    const mergedWithCss = mergeSketchProps(
      {
        roughness,
        seed,
        sketchColor,
        bowing,
        fillStyle,
        strokeWidth,
        hachureGap,
        hachureAngle,
        fillWeight,
      },
      sketchDefaults,
      cssVars,
    );
    const mergedWithoutCss = mergeSketchProps(
      {
        roughness,
        seed,
        sketchColor,
        bowing,
        fillStyle,
        strokeWidth,
        hachureGap,
        hachureAngle,
        fillWeight,
      },
      sketchDefaults,
      undefined,
    );
    const cssChangesOptions =
      mergedWithCss.roughness !== mergedWithoutCss.roughness ||
      mergedWithCss.bowing !== mergedWithoutCss.bowing ||
      mergedWithCss.strokeWidth !== mergedWithoutCss.strokeWidth ||
      mergedWithCss.sketchColor !== mergedWithoutCss.sketchColor ||
      mergedWithCss.fillStyle !== mergedWithoutCss.fillStyle;

    const fullKey = cssChangesOptions
      ? `${paintKey}|css:${mergedWithCss.roughness}|${mergedWithCss.bowing}|${mergedWithCss.strokeWidth}|${mergedWithCss.sketchColor}|${mergedWithCss.fillStyle}`
      : paintKey;
    const svg = ensureSvg(container);

    if (fullKey === lastAppliedKeyRef.current && svg.childElementCount > 0) {
      return;
    }

    if (cssChangesOptions) {
      const withCss = createDrawable({
        width,
        height,
        shape,
        roughness,
        seed,
        sketchColor,
        bowing,
        fillStyle,
        strokeWidth,
        fill,
        hachureGap,
        hachureAngle,
        fillWeight,
        inset,
        path,
        sketchDefaults,
        cssVars,
      });
      if (!withCss) return;
      applyDrawable(svg, withCss);
    } else {
      applyDrawable(svg, drawable);
    }
    lastAppliedKeyRef.current = fullKey;
  }, [
    drawable,
    paintKey,
    width,
    height,
    shape,
    roughness,
    seed,
    sketchColor,
    bowing,
    fillStyle,
    strokeWidth,
    fill,
    hachureGap,
    hachureAngle,
    fillWeight,
    inset,
    path,
    sketchDefaults,
  ]);

  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || !drawable || width < 2 || height < 2) return;
    const svg = ensureSvg(container);
    if (svg.childElementCount > 0) return;
    applyDrawable(svg, drawable);
    lastAppliedKeyRef.current = paintKey;
  });

  const overlayStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    overflow: "visible",
    zIndex: 0,
    ...style,
  };

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={className}
      style={overlayStyle}
    />
  );
}

export const RoughSvg = memo(RoughSvgImpl);
RoughSvg.displayName = "RoughSvg";
