// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "aura",
  mechanic: ["growth"],
  energy: "calm",
  tags: ["logo", "logo reveal", "reaction diffusion", "turing pattern", "gray-scott", "generative", "organic", "coral", "fingerprint", "simulation", "opener", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 240, min: 190, max: 600 },
    stretch: "hold",
    phases: { in: 178, out: 0 },
    // seed: a thin line of chemical traces the logo edge; spread: Turing ridges grow out to
    // fill the frame; recede: the kill rate rises from the outside in; settled: a living ring
    // holds around the clean logo.
    markers: { settled: 178, seed: 2, spread: 26, full: 118, recede: 120 },
    beats: [0, 2, 26, 118, 120, 178],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [{ key: "logo", type: "image", role: "logo" }],
  brand: { primary: "colors.primary", secondary: "colors.secondary", color: "colors.text", background: "colors.background" },
  motionBeats: [
    { target: "logo", prop: "opacity", from: "0", settledBy: 16, easing: "spring" },
    { target: "seed line", prop: "trace", from: "top of the logo", settledBy: 24, easing: "ease" },
    { target: "pattern", prop: "growth", from: "logo edge", settledBy: 118, easing: "ease" },
    { target: "pattern", prop: "recede", from: "frame edge", settledBy: 178, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 240] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (Gray-Scott reaction-diffusion grows from the logo silhouette and recedes into a ring, 2026-10-08)" },
});
