// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "brand/end-card",
  tags: ["logo", "end card", "outro", "brand", "cta"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 144, min: 60, max: 600 },
    stretch: "hold",
    phases: { in: 40, out: 0 },
    markers: { settled: 44 },
    beats: [6, 16, 28],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "title", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image" },
    { key: "name", type: "text", maxChars: 24, lines: 1, role: "name" },
    { key: "tagline", type: "text", maxChars: 64, lines: 2, role: "subline" },
    { key: "url", type: "text", maxChars: 40, lines: 1, role: "label" },
  ],
  brand: { serifFontFamily: "fonts.serif",  accent: "colors.primary", color: "colors.text", background: "colors.background", fontFamily: "fonts.heading", logo: "logos.light" },
  motionBeats: [
    { target: "logo", prop: "y", from: "below", settledBy: 30, easing: "spring" },
    { target: "tagline", prop: "y", from: "below", settledBy: 40, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 144] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st-ads/remotion/showcase.tsx (EndCard), factor-marketplace/remotion/components/kinetic.tsx (EndAct)" },
});
