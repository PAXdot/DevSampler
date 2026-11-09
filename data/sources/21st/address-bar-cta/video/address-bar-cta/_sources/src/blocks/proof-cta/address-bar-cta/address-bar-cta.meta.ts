// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "cta/url",
  tags: ["cta", "end card", "url", "address bar", "browser", "website", "visit", "typing"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 75, max: 600 },
    stretch: "hold",
    phases: { in: 82, out: 0 },
    markers: { settled: 82, enter: 42 },
    beats: [0, 10, 42, 56, 64],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "url", type: "text", maxChars: 40, lines: 1, role: "url" },
    { key: "name", type: "text", maxChars: 24, lines: 1, role: "headline" },
    { key: "tagline", type: "text", maxChars: 60, lines: 2, role: "subline" },
    { key: "cta", type: "text", maxChars: 20, lines: 1, role: "cta" },
    { key: "logo", type: "image", role: "logo" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading", bodyFontFamily: "fonts.body", logo: "logos.light" },
  motionBeats: [
    { target: "url", prop: "chars", from: "0", settledBy: 36, easing: "linear" },
    { target: "enter", prop: "press", settledBy: 46, easing: "ease" },
    { target: "window", prop: "height", from: "bar", settledBy: 64, easing: "spring" },
    { target: "page", prop: "y", from: "below", settledBy: 82, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (typed address that opens the product, 2026-10-06)" },
});
