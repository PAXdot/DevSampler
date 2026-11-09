// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "text/kinetic",
  tags: ["title", "headline", "kinetic-type", "launch", "text"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 90, min: 45, max: 600 },
    stretch: "hold",
    phases: { in: 24, out: 0 },
    markers: { settled: 24 },
    beats: [0, 6, 12],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
    safeArea: "title",
    transparent: true,
    preset: "center",
    backdrop: [],
  },
  slots: [{ key: "title", type: "text", maxChars: 60, lines: 2, role: "headline" }],
  brand: { serifFontFamily: "fonts.serif",  accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading" },
  motionBeats: [{ target: "title", prop: "y", from: "below", settledBy: 24, easing: "spring" }],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 90] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "factor-marketplace/remotion/components/kinetic.tsx, mixed-text.tsx" },
});
