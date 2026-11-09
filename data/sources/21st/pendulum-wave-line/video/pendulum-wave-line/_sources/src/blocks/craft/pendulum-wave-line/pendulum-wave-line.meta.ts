// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "titles/craft",
  job: "titles",
  language: "aura",
  mechanic: ["pendulum"],
  energy: "calm",
  tags: ["title", "headline", "pendulum", "pendulum wave", "physics", "metal", "sync", "rhythm", "underline", "hypnotic", "realistic"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 240, min: 200, max: 600 },
    stretch: "hold",
    phases: { in: 200, out: 0 },
    // The row swings through its interference patterns (two rows ~21, three rows ~64,
    // four rows ~85, long snakes after ~110), every bob reaches the same extreme on
    // "sync", the row swings back as one and settles into a straight line under the title.
    markers: { settled: 200, twoRows: 21, threeRows: 64, fourRows: 85, sync: 150, title: 160 },
    beats: [0, 21, 64, 85, 150, 160, 200],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [{ key: "text", type: "text", maxChars: 60, lines: 2, role: "headline" }],
  brand: { primary: "colors.primary", secondary: "colors.secondary", color: "colors.text", background: "colors.background", fontFamily: "fonts.body" },
  motionBeats: [
    { target: "pendulum row", prop: "phase", from: "interleaved rows", settledBy: 150, easing: "linear" },
    { target: "pendulum row", prop: "swing", from: "released line", settledBy: 200, easing: "spring" },
    { target: "headline", prop: "opacity", from: "blurred, below", settledBy: 196, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 240] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (pendulum-wave apparatus of polished metal bobs on V threads, true harmonic periods realign into an underline, 2026-10-08)" },
});
