// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "text/hero",
  tags: ["text behind", "depth", "cutout", "product hero", "giant word", "outline"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 50, max: 600 },
    stretch: "hold",
    phases: { in: 40, out: 0 },
    markers: { settled: 42 },
    beats: [2, 10, 26, 32],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "title", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "word", type: "text", maxChars: 12, lines: 1, role: "headline" },
    { key: "image", type: "image" },
    { key: "caption", type: "text", maxChars: 60, lines: 1, role: "subline" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "word", prop: "letters", from: "outline", settledBy: 26, easing: "linear" },
    { target: "subject", prop: "y", from: "below", settledBy: 24, easing: "ease" },
    { target: "caption", prop: "opacity", settledBy: 42, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research V02 (giant word behind a cutout); own sample subject" },
});
