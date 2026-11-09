// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "process/craft",
  job: "process",
  language: "aura",
  mechanic: ["orbit"],
  energy: "default",
  tags: ["process", "steps", "list", "orbit", "rhythm", "polyrhythm", "logo", "workflow", "sequence", "loop machine"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 210, min: 180, max: 600 },
    stretch: "hold",
    phases: { in: 192, out: 0 },
    // Hits at 12 o'clock follow a 5:4:3 lap ratio; all three dots meet there on "align".
    markers: { firstHit: 20, align: 150, settled: 192 },
    beats: [20, 28, 41, 52, 68, 84, 95, 108, 116, 150],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "items", type: "list", maxChars: 28, lines: 1, role: "label" },
    { key: "logo", type: "image", role: "logo" },
  ],
  brand: {
    color: "colors.text",
    primary: "colors.primary",
    secondary: "colors.secondary",
    background: "colors.background",
    fontFamily: "fonts.heading",
    monoFontFamily: "fonts.mono",
  },
  motionBeats: [
    { target: "orbit", prop: "stroke", from: "12 o'clock", settledBy: 20, easing: "ease" },
    { target: "item", prop: "x", from: "left", settledBy: 140, easing: "spring" },
    { target: "dots", prop: "angle", settledBy: 192, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 210] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (three orbits at 5:4:3 fire list items at 12 o'clock and align on the last beat, 2026-10-08)" },
});
