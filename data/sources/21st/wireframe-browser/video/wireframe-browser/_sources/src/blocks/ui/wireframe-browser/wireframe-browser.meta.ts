// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/browser",
  tags: ["browser", "url", "routing", "wireframe", "skeleton", "explainer", "typing", "ui"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 72, max: 900 },
    stretch: "hold",
    phases: { in: 124, out: 0 },
    markers: { settled: 130 },
    beats: [0, 12, 72],
  },
  layout: { aspects: ["16:9", "1:1", "9:16"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "urls", type: "list", role: "label" },
    { key: "image", type: "image", role: "screenshot" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", accent: "colors.primary", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "browser", prop: "blur", from: "10px", settledBy: 10, easing: "ease" },
    { target: "url", prop: "text", easing: "linear" },
    { target: "page", prop: "blur", from: "cross-dissolve", easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "docs/research/video-components-2026-10-05 (V10 URL bar + wireframe browser, blur dissolves)" },
});
