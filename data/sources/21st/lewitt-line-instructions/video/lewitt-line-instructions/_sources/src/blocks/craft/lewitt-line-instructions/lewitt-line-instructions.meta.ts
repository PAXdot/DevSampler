// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "titles/craft",
  job: "titles",
  language: "hand-drawn",
  mechanic: ["hatching"],
  energy: "calm",
  tags: ["title", "typography", "negative space", "hatching", "line drawing", "sol lewitt", "conceptual art", "minimal", "plotter", "reveal"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 165, min: 130, max: 600 },
    stretch: "hold",
    phases: { in: 128, out: 0 },
    // Quadrants draw in reading order; the word opens its margin at `hero`.
    markers: { settled: 128, q1: 6, q2: 22, q3: 38, q4: 54, hero: 98, caption: 104 },
    beats: [6, 22, 38, 54, 98],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "word", type: "text", maxChars: 28, lines: 3, role: "headline" },
    { key: "caption", type: "text", maxChars: 72, lines: 3, role: "caption" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", background: "colors.background", fontFamily: "fonts.heading", captionFontFamily: "fonts.mono" },
  motionBeats: [
    { target: "hatch", prop: "draw", from: "outer-edge", settledBy: 100, easing: "ease" },
    { target: "word", prop: "margin", settledBy: 124, easing: "spring" },
    { target: "caption", prop: "y", from: "below", settledBy: 128, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 165] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (four-direction line hatching leaves the word as negative space, 2026-10-08)" },
});
