// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "text/launch",
  tags: ["launch", "intro", "title", "product", "announcement"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 60, max: 600 },
    stretch: "hold",
    phases: { in: 44, out: 0 },
    markers: { settled: 48 },
    beats: [4, 12, 30],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "title", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "kicker", type: "text", maxChars: 32, lines: 1, role: "kicker" },
    { key: "product", type: "text", maxChars: 28, lines: 2, role: "name" },
    { key: "date", type: "text", maxChars: 24, lines: 1, role: "subline" },
  ],
  brand: { monoFontFamily: "fonts.mono",  accent: "colors.primary", color: "colors.text", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "kicker", prop: "y", from: "below", settledBy: 20, easing: "spring" },
    { target: "product", prop: "y", from: "below", settledBy: 40, easing: "spring" },
    { target: "date", prop: "opacity", settledBy: 44, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st-ads/remotion/ui.tsx (Wordmark), factor-marketplace/remotion/components/kinetic.tsx" },
});
