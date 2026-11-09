// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "aura",
  mechanic: ["flocking"],
  tags: ["logo", "logo reveal", "particles", "birds", "murmuration", "flock", "swarm", "sky", "nature", "cinematic", "opener", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 210, min: 160, max: 600 },
    stretch: "hold",
    phases: { in: 150, out: 0 },
    // sweep: the flock crosses the sky in folding waves; fold: it bunches and pulses;
    // converge: it pours into the mark; formed: every bird has landed; settled: caption in, the mark breathes.
    markers: { settled: 150, fold: 58, converge: 84, formed: 128 },
    beats: [0, 58, 84, 128, 150],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "caption", type: "text", maxChars: 40, lines: 1, role: "subline" },
  ],
  brand: { primary: "colors.primary", secondary: "colors.secondary", color: "colors.text", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "flock", prop: "position", from: "sweeping across the sky", settledBy: 84, easing: "ease" },
    { target: "flock", prop: "shape", from: "folding cloud", settledBy: 128, easing: "spring" },
    { target: "caption", prop: "y", from: "below", settledBy: 150, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 210] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (a 3D starling murmuration folds through the sky and pours into the logo, 2026-10-08)" },
});
