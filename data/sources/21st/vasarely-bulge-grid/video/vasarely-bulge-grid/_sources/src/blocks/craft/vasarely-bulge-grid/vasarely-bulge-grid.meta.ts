// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "kinetic-poster",
  mechanic: ["bulge"],
  tags: ["logo", "logo reveal", "op art", "checkerboard", "checker", "sphere", "bulge", "optical illusion", "vasarely", "grid", "geometric", "opener", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 132, max: 600 },
    stretch: "hold",
    phases: { in: 130, out: 0 },
    // flat: the checker drifts flat; swell: the bulge pushes up and overshoots;
    // logo: the medallion opens at the apex; settled: the bulge has relaxed, the checker keeps rolling.
    markers: { settled: 130, swell: 10, apex: 62, logo: 64 },
    beats: [0, 10, 62, 72, 92, 130],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "caption", type: "text", maxChars: 40, lines: 1, role: "subline" },
  ],
  brand: { primary: "colors.primary", secondary: "colors.secondary", color: "colors.text", background: "colors.background", fontFamily: "fonts.body" },
  motionBeats: [
    { target: "checker sphere", prop: "radius", from: "flat grid", settledBy: 120, easing: "spring" },
    { target: "medallion", prop: "scale", from: "0", settledBy: 96, easing: "spring" },
    { target: "logo", prop: "scale", from: "0.7", settledBy: 100, easing: "spring" },
    { target: "caption", prop: "y", from: "below", settledBy: 112, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (a flat checkerboard swells into a shaded op-art sphere around the logo, 2026-10-08)" },
});
