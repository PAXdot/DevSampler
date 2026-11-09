// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "cta/qr",
  tags: ["cta", "end card", "qr code", "scan", "short link", "handle", "mobile", "outro"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 75, max: 600 },
    stretch: "hold",
    phases: { in: 66, out: 0 },
    markers: { settled: 66, focus: 36 },
    beats: [4, 10, 36, 44],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "title", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "url", type: "text", maxChars: 100, lines: 1, role: "url" },
    { key: "label", type: "text", maxChars: 32, lines: 1, role: "headline" },
    { key: "eyebrow", type: "text", maxChars: 32, lines: 1, role: "kicker" },
    { key: "handle", type: "text", maxChars: 24, lines: 1, role: "name" },
    { key: "logo", type: "image", role: "logo" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading", logo: "logos.light" },
  motionBeats: [
    { target: "finders", prop: "scale", from: "1.3", settledBy: 18, easing: "spring" },
    { target: "modules", prop: "scale", from: "0", settledBy: 38, easing: "ease" },
    { target: "viewfinder", prop: "inset", from: "wide", settledBy: 46, easing: "spring" },
    { target: "scan", prop: "y", from: "top", settledBy: 64, easing: "linear" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (scannable QR end card, 2026-10-06)" },
});
