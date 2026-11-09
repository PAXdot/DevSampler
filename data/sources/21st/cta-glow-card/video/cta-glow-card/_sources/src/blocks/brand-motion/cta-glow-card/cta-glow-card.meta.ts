// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "brand/end-card",
  tags: ["end card", "cta", "outro", "button", "glow", "url", "call to action"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 60, max: 600 },
    stretch: "hold",
    phases: { in: 32, out: 0 },
    markers: { settled: 32 },
    beats: [4, 10, 16, 22],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "title", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "eyebrow", type: "text", maxChars: 32, lines: 1, role: "kicker" },
    { key: "title", type: "text", maxChars: 48, lines: 2, role: "headline" },
    { key: "cta", type: "text", maxChars: 24, lines: 1, role: "label" },
    { key: "url", type: "text", maxChars: 40, lines: 1, role: "url" },
  ],
  brand: { monoFontFamily: "fonts.mono",  accent: "colors.primary", color: "colors.text", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "eyebrow", prop: "y", from: "below", settledBy: 12, easing: "ease" },
    { target: "title", prop: "y", from: "below", settledBy: 18, easing: "ease" },
    { target: "cta", prop: "y", from: "below", settledBy: 24, easing: "ease" },
    { target: "url", prop: "opacity", settledBy: 30, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (motion study of V12, V04, V02, research 2026-10-05)" },
});
