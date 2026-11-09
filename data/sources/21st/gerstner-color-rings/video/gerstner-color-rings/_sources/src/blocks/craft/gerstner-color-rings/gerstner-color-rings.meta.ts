// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "kinetic-poster",
  mechanic: ["align"],
  tags: ["logo", "logo reveal", "color wheel", "concentric rings", "gerstner", "swiss design", "geometric", "emblem", "badge", "mechanical", "alignment", "opener", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 150, max: 600 },
    stretch: "hold",
    phases: { in: 150, out: 0 },
    // open: the center plate and the logo land, rings open around them already spinning; spin: each ring decelerates at its
    // own rate; click: from the outside in, every ring ticks the last three steps and locks;
    // lock: the innermost ring lands, the wedges line up into one emblem and the logo pops;
    // shine: a band of light sweeps once around the finished wheel.
    markers: { settled: 150, open: 0, spin: 14, click: 60, lock: 116, shine: 116 },
    beats: [0, 14, 60, 74, 88, 102, 116, 150],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "caption", type: "text", maxChars: 48, lines: 3, role: "subline" },
  ],
  brand: {
    primary: "colors.primary",
    secondary: "colors.secondary",
    color: "colors.text",
    background: "colors.background",
    fontFamily: "fonts.body",
  },
  motionBeats: [
    { target: "rings", prop: "thickness", from: "closed", settledBy: 24, easing: "spring" },
    { target: "rings", prop: "rotation", from: "spinning at different speeds", settledBy: 116, easing: "ease" },
    { target: "rings", prop: "rotation", from: "three steps off", settledBy: 116, easing: "spring" },
    { target: "plate", prop: "scale", from: "closed", settledBy: 20, easing: "spring" },
    { target: "logo", prop: "scale", from: "small", settledBy: 128, easing: "spring" },
    { target: "caption", prop: "y", from: "below", settledBy: 142, easing: "ease" },
    { target: "shine", prop: "angle", from: "twelve o'clock", settledBy: 150, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (Gerstner-style concentric color-step rings spin independently and tick into one aligned emblem around a large logo on a center plate, 2026-10-08)" },
});
