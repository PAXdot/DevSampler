// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "editorial",
  mechanic: ["connect"],
  tags: ["logo", "logo reveal", "constellation", "night sky", "astronomy", "stars", "connect the dots", "line drawing", "editorial", "opener", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 210, min: 170, max: 600 },
    stretch: "hold",
    phases: { in: 165, out: 0 },
    // stars: the sky turns in and the logo's key stars brighten one by one; connect: lines draw star to star;
    // close: the figure closes and pulses, the engraving sweeps in and the logo itself inks in as the hero; settled: the name is set.
    markers: { settled: 165, stars: 12, connect: 52, close: 118 },
    beats: [0, 12, 52, 118, 165],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "eyebrow", type: "text", maxChars: 32, lines: 1, role: "eyebrow" },
    { key: "title", type: "text", maxChars: 40, lines: 2, role: "headline" },
  ],
  brand: {
    primary: "colors.primary",
    secondary: "colors.secondary",
    color: "colors.text",
    background: "colors.background",
    fontFamily: "fonts.serif",
    monoFamily: "fonts.mono",
  },
  motionBeats: [
    { target: "sky", prop: "rotation", from: "turned", settledBy: 160, easing: "ease" },
    { target: "stars", prop: "opacity", from: "dark", settledBy: 70, easing: "spring" },
    { target: "lines", prop: "draw", from: "first star", settledBy: 118, easing: "ease" },
    { target: "figure", prop: "opacity", from: "hidden", settledBy: 150, easing: "ease" },
    { target: "logo", prop: "opacity", from: "engraved", settledBy: 152, easing: "ease" },
    { target: "title", prop: "reveal", from: "center", settledBy: 165, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 210] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (stars brighten and lines draw the logo as a constellation, then the brand-colored logo inks in as the hero, 2026-10-08)" },
});
