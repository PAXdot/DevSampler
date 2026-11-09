// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "testimonial/wall",
  tags: ["testimonial", "wall of love", "reviews", "social proof", "quotes", "customers", "scroll"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 75, max: 600 },
    stretch: "hold",
    phases: { in: 80, out: 0 },
    markers: { settled: 80, stop: 56 },
    beats: [0, 56, 62],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "items", type: "list", role: "quote" },
    { key: "highlight", type: "number", role: "index" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading", bodyFontFamily: "fonts.body" },
  motionBeats: [
    { target: "columns", prop: "y", from: "scrolling", settledBy: 56, easing: "ease" },
    { target: "highlight", prop: "scale", from: "1", settledBy: 80, easing: "spring" },
    { target: "wall", prop: "opacity", from: "1", settledBy: 72, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (wall of quotes that stops on one, 2026-10-06)" },
});
