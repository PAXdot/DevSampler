// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
import { metaBase } from "../_shared/meta-base";

export const meta = defineVideoMeta({
  ...metaBase("V02"),
  kind: "element",
  category: "data/price",
  tags: ["price", "pricing", "discount", "offer", "launch", "sale"],
  timing: {
    fps: 30,
    duration: { default: 100, min: 45, max: 600 },
    stretch: "hold",
    phases: { in: 54, out: 0 },
    markers: { settled: 54 },
    beats: [0, 12, 20, 42],
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
  slots: [
    { key: "plan", type: "text", maxChars: 32, lines: 1, role: "kicker" },
    { key: "currency", type: "text", maxChars: 3, lines: 1, role: "label" },
    { key: "period", type: "text", maxChars: 8, lines: 1, role: "label" },
    { key: "saveLabel", type: "text", maxChars: 24, lines: 1, role: "accent" },
    { key: "newPrice", type: "number", role: "value" },
  ],
  brand: { accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "oldPrice", prop: "strike", from: "0", settledBy: 20, easing: "ease" },
    { target: "newPrice", prop: "roll", settledBy: 42, easing: "ease" },
    { target: "saveLabel", prop: "scale", from: "0.6", settledBy: 54, easing: "spring" },
  ],
  preview: { poster: { marker: "settled" }, hover: [0, 100] },
});
