// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "text/hook",
  tags: ["hook", "cold open", "question", "intro", "social", "text"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 105, min: 45, max: 600 },
    stretch: "hold",
    phases: { in: 60, out: 0 },
    markers: { settled: 60, answer: 45 },
    beats: [7, 20, 45],
  },
  layout: { aspects: ["1:1", "9:16", "16:9"], mode: "responsive", fill: "frame", safeArea: "title", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "question", type: "text", maxChars: 72, lines: 3, role: "headline" },
    { key: "answer", type: "text", maxChars: 60, lines: 2, role: "subline" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "question", prop: "y", from: "below", settledBy: 20, easing: "ease" },
    { target: "answer", prop: "opacity", settledBy: 60, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 105] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research V04 (cold-open question on black); own copy" },
});
