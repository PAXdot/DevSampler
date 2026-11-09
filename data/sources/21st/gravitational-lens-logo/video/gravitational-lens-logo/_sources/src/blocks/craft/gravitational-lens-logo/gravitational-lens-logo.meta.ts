// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "aura",
  mechanic: ["lensing"],
  tags: ["logo", "logo reveal", "space", "stars", "einstein ring", "gravitational lens", "physics", "cinematic", "opener", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 132, max: 600 },
    stretch: "hold",
    phases: { in: 128, out: 0 },
    // drift: stars only; lens: the mass slides in; ring: arcs close into the Einstein ring;
    // logo: the mark focuses in at the center; settled: everything holds, the sky keeps drifting.
    markers: { settled: 128, lens: 8, ring: 86, logo: 92 },
    beats: [0, 8, 64, 86, 92, 112],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "caption", type: "text", maxChars: 40, lines: 1, role: "subline" },
  ],
  brand: { primary: "colors.primary", secondary: "colors.secondary", color: "colors.text", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "lens", prop: "position", from: "off-frame right", settledBy: 92, easing: "ease" },
    { target: "einstein ring", prop: "radius", settledBy: 104, easing: "spring" },
    { target: "logo", prop: "focus", from: "blurred, doubled", settledBy: 118, easing: "spring" },
    { target: "caption", prop: "y", from: "below", settledBy: 128, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (point-mass lens bends a starfield into an Einstein ring around the logo, 2026-10-08)" },
});
