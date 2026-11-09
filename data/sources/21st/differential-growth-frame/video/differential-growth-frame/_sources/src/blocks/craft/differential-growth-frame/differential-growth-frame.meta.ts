// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "titles/craft",
  job: "titles",
  language: "aura",
  mechanic: ["growth"],
  energy: "calm",
  tags: ["differential growth", "generative", "organic", "coral", "line art", "title", "headline", "reveal", "canvas"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 150, max: 600 },
    stretch: "hold",
    phases: { in: 132, out: 0 },
    markers: { settled: 132, grow: 14, reveal: 96 },
    beats: [0, 14, 60, 96, 132],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [{ key: "headline", type: "text", maxChars: 60, lines: 3, role: "headline" }],
  brand: { color: "colors.text", primary: "colors.primary", secondary: "colors.secondary", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "line", prop: "growth", from: "center", settledBy: 124, easing: "ease" },
    { target: "headline", prop: "opacity", settledBy: 132, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (one closed line grows into brain-coral folds around a headline window, 2026-10-08)" },
});
