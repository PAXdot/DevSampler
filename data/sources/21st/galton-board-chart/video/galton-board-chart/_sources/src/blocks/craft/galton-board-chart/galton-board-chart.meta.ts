// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "data/craft",
  job: "data",
  language: "aura",
  mechanic: ["physics", "accumulate", "count-up"],
  energy: "default",
  tags: ["data", "chart", "bar chart", "distribution", "galton board", "physics", "particles", "balls", "counter", "stats"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 220, min: 190, max: 600 },
    stretch: "hold",
    phases: { in: 186, out: 0 },
    // drop: balls leave the funnel; landed: the last ball rests; settled: curve, values and total are in.
    markers: { settled: 186, drop: 8, fill: 60, landed: 154 },
    beats: [0, 8, 60, 154, 186],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "title", type: "text", maxChars: 40, lines: 2, role: "headline" },
    { key: "total", type: "number", maxChars: 12, lines: 1, role: "stat" },
    { key: "totalLabel", type: "text", maxChars: 24, lines: 1, role: "label" },
    { key: "items", type: "list", maxChars: 10, lines: 1, role: "label" },
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
    { target: "pegs", prop: "scale", settledBy: 14, easing: "spring" },
    { target: "balls", prop: "path", from: "top", settledBy: 154, easing: "linear" },
    { target: "values", prop: "scale", settledBy: 178, easing: "spring" },
    { target: "curve", prop: "draw", settledBy: 182, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 220] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (seeded Galton board whose bins fill into the user's bar chart, 2026-10-08)" },
});
