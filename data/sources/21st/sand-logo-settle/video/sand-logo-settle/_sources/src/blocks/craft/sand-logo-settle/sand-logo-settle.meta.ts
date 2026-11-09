// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "aura",
  mechanic: ["pouring"],
  tags: ["logo", "logo reveal", "sand", "pour", "falling sand", "grains", "physics", "strata", "sand art", "warm light", "opener", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 210, min: 170, max: 600 },
    stretch: "hold",
    phases: { in: 160, out: 0 },
    // pour: a thin stream starts at top center; spray: it fans wide and sand piles up inside the
    // logo's silhouette in colored layers; full: the mold is full and the pour tapers off;
    // drained: spilled grains have fallen away; settled: shimmer swept, caption in.
    markers: { settled: 160, pour: 4, spray: 30, full: 112, drained: 136 },
    beats: [4, 30, 112, 136, 160],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "caption", type: "text", maxChars: 40, lines: 1, role: "subline" },
  ],
  brand: { primary: "colors.primary", secondary: "colors.secondary", color: "colors.text", background: "colors.background", fontFamily: "fonts.body" },
  motionBeats: [
    { target: "sand", prop: "fill", from: "empty mold", settledBy: 112, easing: "linear" },
    { target: "spill", prop: "y", from: "piled on the edges", settledBy: 136, easing: "ease" },
    { target: "caption", prop: "y", from: "below", settledBy: 160, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 210] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (falling-sand pour that piles up inside the logo silhouette in brand-colored strata, 2026-10-08)" },
});
