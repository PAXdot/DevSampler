// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "aura",
  mechanic: ["magnetism"],
  tags: ["logo", "logo reveal", "ferrofluid", "liquid", "magnetic", "spikes", "glossy", "chrome", "studio", "3d", "opener", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 132, max: 600 },
    stretch: "hold",
    phases: { in: 128, out: 0 },
    // drop: a bead of fluid lands and spreads; pulse1/pulse2: the crown of spikes erupts twice;
    // reach: a tendril stretches up to the logo; touch: it hits the mark and the logo locks in;
    // settled: the tendril has retracted and the crown breathes, leaning toward the logo.
    markers: { settled: 128, drop: 12, pulse1: 20, pulse2: 40, reach: 58, touch: 92 },
    beats: [12, 20, 40, 58, 92, 100, 124],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [{ key: "logo", type: "image", role: "logo" }],
  brand: { primary: "colors.primary", secondary: "colors.secondary", color: "colors.text", background: "colors.background" },
  motionBeats: [
    { target: "fluid", prop: "drop", from: "above the floor", settledBy: 30, easing: "spring" },
    { target: "spikes", prop: "length", settledBy: 124, easing: "spring" },
    { target: "tendril", prop: "reach", settledBy: 124, easing: "spring" },
    { target: "logo", prop: "lock-in", from: "dim, slightly small", settledBy: 112, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (ray-shaded ferrofluid crown reaches up and touches the logo, 2026-10-08)" },
});
