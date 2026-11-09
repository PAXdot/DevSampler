// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "brand/integrations",
  tags: ["logos", "integrations", "logo cloud", "icons", "app icons", "ecosystem", "keynote", "scene"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 120, max: 600 },
    stretch: "hold",
    phases: { in: 112, out: 0 },
    markers: { settled: 112, swap: 78 },
    beats: [4, 12, 78, 84],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "title", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "phrase", type: "text", maxChars: 60, lines: 2, role: "headline" },
    { key: "phrase2", type: "text", maxChars: 60, lines: 2, role: "subline" },
    { key: "logos", type: "list", role: "logos" },
  ],
  brand: { accent: "colors.primary", color: "colors.text", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "phrase", prop: "words", settledBy: 34, easing: "ease" },
    { target: "tiles", prop: "scale", from: "0.6", settledBy: 60, easing: "spring" },
    { target: "phrase2", prop: "words", settledBy: 112, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (motion study of V15, research 2026-10-05)" },
});
