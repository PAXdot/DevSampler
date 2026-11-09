"use client";

import { useEffect, useMemo } from "react";
import Circle from "./spinner-utils/circle";
import Dots from "./spinner-utils/dots";
import Pulse from "./spinner-utils/pulse";
import Bars from "./spinner-utils/bars";
import Ring from "./spinner-utils/ring";
import Orbit from "./spinner-utils/orbit";
import PulseDots from "./spinner-utils/pulse-dots";
import OrbitDots from "./spinner-utils/orbit-dots";
import Arc from "./spinner-utils/arc";
import type {
  SpinnerProps,
  SpinnerVariantName,
} from "./spinner-utils/spinner-types";
import { usePrefersReducedMotion } from "./spinner-utils/use-prefers-reduced-motion";
import { clampProgress, progressA11y } from "./spinner-utils/progress";
import { useLoadingConfig } from "./spinner-utils/use-loading-config";

/* eslint-disable @typescript-eslint/no-explicit-any */
const variants: Record<SpinnerVariantName, (props: any) => JSX.Element> = {
  circle: Circle,
  dots: Dots,
  pulse: Pulse,
  bars: Bars,
  ring: Ring,
  orbit: Orbit,
  "pulse-dots": PulseDots,
  "orbit-dots": OrbitDots,
  arc: Arc,
};

/** Prop names each variant declares. The Vue source introspects each
 *  variant's declared `props` at runtime to decide what to forward and
 *  whether `value` is supported; React components don't expose that
 *  metadata, so the same mapping is kept here explicitly. */
const ACCEPTED_PROPS: Record<SpinnerVariantName, string[]> = {
  circle: ["size", "color", "speed", "thickness", "track"],
  dots: ["size", "color", "speed"],
  pulse: ["size", "color", "speed"],
  bars: ["size", "color", "speed"],
  ring: ["size", "color", "speed", "thickness", "track"],
  orbit: ["size", "color", "speed"],
  "pulse-dots": ["size", "color", "speed"],
  "orbit-dots": ["size", "color", "speed"],
  arc: ["size", "color", "speed", "thickness", "track", "value"],
};

/* A spinner that stops entirely reads as a frozen page, so reduced
   motion slows it down instead of disabling it (unlike Skeleton). */
const REDUCED_MOTION_SPEED_FACTOR = 0.5;

/**
 * Port of vue-smart-loading-kit's `<Spinner>` to React.
 * Original source: https://github.com/navidjaberi/vue-smart-loading-kit
 * (MIT License, Copyright (c) 2026 Navid Jaberi)
 */
export default function Spinner(props: SpinnerProps) {
  /* explicit prop > global config > built-in default */
  const config = useLoadingConfig();
  const conf = config.spinner ?? {};

  const size = props.size ?? conf.size ?? 40;
  const color = props.color ?? conf.color ?? "currentColor";
  const speed = props.speed ?? conf.speed ?? 1;
  const thickness = props.thickness ?? conf.thickness ?? 4;
  const track = props.track ?? conf.track;

  const prefersReducedMotion = usePrefersReducedMotion();
  const effectiveSpeed = prefersReducedMotion
    ? speed * REDUCED_MOTION_SPEED_FACTOR
    : speed;

  /** `variant` wins over the deprecated `type`; camelCase names are
   *  normalized to kebab-case so both v0.1.0 spellings keep working. */
  const variantName = useMemo((): SpinnerVariantName => {
    const raw = props.variant ?? props.type ?? conf.variant ?? "circle";
    return raw.replace(
      /[A-Z]/g,
      (c) => `-${c.toLowerCase()}`,
    ) as SpinnerVariantName;
  }, [props.variant, props.type, conf.variant]);

  const Component = variants[variantName] ?? Circle;
  const accepted = ACCEPTED_PROPS[variantName] ?? ACCEPTED_PROPS.circle;

  /* Pass each variant only the props it declares: anything else (e.g.
     `thickness` on dots) would render as a stray HTML attribute. Undefined
     values are dropped so the variant's own defaults apply. */
  const variantProps = useMemo(() => {
    const all: Record<string, unknown> = {
      size,
      color,
      speed: effectiveSpeed,
      thickness,
      track,
      value: props.value,
    };
    return Object.fromEntries(
      Object.entries(all).filter(
        ([k, v]) => v !== undefined && accepted.includes(k),
      ),
    );
  }, [size, color, effectiveSpeed, thickness, track, props.value, accepted]);

  const progress = accepted.includes("value")
    ? clampProgress(props.value)
    : null;

  useEffect(() => {
    if (props.value != null && !accepted.includes("value")) {
      // eslint-disable-next-line no-console
      console.warn(
        `[vue-smart-loading-kit] Spinner \`value\` is ignored by variant "${variantName}". ` +
          `To show progress, use variant="arc" or <ProgressBar>.`,
      );
    }
  }, [props.value, variantName, accepted]);

  const a11y = progressA11y(props.label, progress);

  return (
    <span className="vslk-spinner-wrapper" {...a11y}>
      <Component {...variantProps} />
      {props.label && progress === null ? (
        <span className="vslk-sr-only">{props.label}</span>
      ) : null}
    </span>
  );
}
