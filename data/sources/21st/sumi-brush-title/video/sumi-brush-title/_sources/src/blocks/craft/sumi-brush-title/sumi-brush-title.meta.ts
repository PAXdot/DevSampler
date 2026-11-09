// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "titles/craft",
  job: "titles",
  language: "hand-drawn",
  mechanic: ["stroke"],
  energy: "default",
  tags: ["title", "headline", "brush", "brush stroke", "sumi", "ink", "calligraphy", "painted", "dry brush", "hand-drawn", "seal", "stamp", "opener", "launch"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 90, max: 600 },
    stretch: "hold",
    phases: { in: 72, out: 0 },
    // stroke = the brush lands, tail = the dry bristles leave the paper, seal = the stamp hits, settled = ink stops bleeding.
    markers: { settled: 72, stroke: 4, tail: 32, seal: 46 },
    beats: [0, 4, 14, 32, 46, 72],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "text", type: "text", maxChars: 40, lines: 3, role: "headline" },
    { key: "kicker", type: "text", maxChars: 32, lines: 1, role: "eyebrow" },
  ],
  brand: {
    color: "colors.text",
    primary: "colors.primary",
    secondary: "colors.secondary",
    background: "colors.background",
    fontFamily: "fonts.heading",
  },
  motionBeats: [
    { target: "brush", prop: "stroke", from: "left", settledBy: 32, easing: "ease" },
    { target: "text", prop: "scale", settledBy: 40, easing: "spring" },
    { target: "kicker", prop: "y", from: "below", settledBy: 48, easing: "spring" },
    { target: "seal", prop: "scale", settledBy: 56, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (one sumi ink brush stroke with dry bristle streaks paints in behind the title, 2026-10-08)" },
});
