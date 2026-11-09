// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/commerce",
  tags: ["product", "commerce", "price", "launch", "drop", "cart", "cursor", "ui"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 96, max: 900 },
    stretch: "hold",
    phases: { in: 82, out: 0 },
    markers: { settled: 86, click: 72 },
    beats: [0, 18, 34, 72],
  },
  layout: { aspects: ["16:9", "1:1", "9:16"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "image", type: "image", role: "product" },
    { key: "eyebrow", type: "text", maxChars: 28, lines: 1, role: "eyebrow" },
    { key: "title", type: "text", maxChars: 40, lines: 2, role: "headline" },
    { key: "price", type: "number", role: "stat" },
    { key: "chips", type: "list", role: "label" },
    { key: "cta", type: "text", maxChars: 22, lines: 1, role: "cta" },
    { key: "doneLabel", type: "text", maxChars: 22, lines: 1, role: "subline" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", strikeColor: "colors.secondary", discountColor: "colors.primary", accent: "colors.primary", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "card", prop: "y", from: "below", settledBy: 12, easing: "ease" },
    { target: "price", prop: "digits", from: "roll", settledBy: 28, easing: "ease" },
    { target: "chips", prop: "scale", settledBy: 46, easing: "spring" },
    { target: "cursor", prop: "xy", from: "bottom-right", settledBy: 70, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "docs/research/video-components-2026-10-05 (V02 product card, price roll, CTA click)" },
});
