// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "overlay-fx",
  category: "overlay/frame",
  tags: ["hud", "corners", "labels", "mono", "frame", "timecode", "techy", "overlay"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 30, max: 1800 },
    stretch: "hold",
    phases: { in: 22, out: 0 },
    markers: { settled: 22 },
    beats: [0, 4, 8],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0, y: 0, w: 1, h: 1 },
    safeArea: "action",
    transparent: true,
    preset: "full",
    backdrop: [],
  },
  slots: [
    { key: "topLeft", type: "text", maxChars: 28, lines: 1, role: "label" },
    { key: "topRight", type: "text", maxChars: 28, lines: 1, role: "label" },
    { key: "bottomLeft", type: "text", maxChars: 28, lines: 1, role: "label" },
    { key: "bottomRight", type: "text", maxChars: 28, lines: 1, role: "label" },
  ],
  brand: { monoFontFamily: "fonts.mono",  accent: "colors.primary", color: "colors.text" },
  motionBeats: [
    { target: "brackets", prop: "scale", settledBy: 8, easing: "ease" },
    { target: "labels", prop: "type", settledBy: 22, easing: "linear" },
    { target: "hairline", prop: "width", settledBy: 20, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (motion study of V02, research 2026-10-05)" },
});
