// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "product-ui/craft",
  job: "product-ui",
  language: "editorial",
  mechanic: ["engrave"],
  energy: "calm",
  requiresScreenshot: true,
  tags: ["engraving", "banknote", "line art", "intaglio", "guilloche", "image reveal", "photo", "screenshot", "editorial", "premium"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 150, max: 600 },
    stretch: "hold",
    phases: { in: 140, out: 0 },
    markers: { settled: 140, wave: 46, dissolve: 98 },
    beats: [0, 46, 98, 140],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [{ key: "screenshot", type: "image", role: "screenshot" }],
  brand: { ink: "colors.primary", accent: "colors.secondary", color: "colors.text", background: "colors.background" },
  motionBeats: [
    { target: "lines", prop: "draw", from: "left", settledBy: 50, easing: "ease" },
    { target: "plate", prop: "wave", settledBy: 100, easing: "ease" },
    { target: "image", prop: "reveal", settledBy: 140, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (image engraved as banknote lines that ripple, then open into the real image, 2026-10-08)" },
});
