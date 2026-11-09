// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "data/craft",
  job: "data",
  language: "aura",
  mechanic: ["ripple"],
  energy: "default",
  tags: ["number", "stat", "metric", "kpi", "peak", "ridgeline", "joyplot", "waves", "pulse", "data", "counter", "glow", "landscape", "reveal"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 140, max: 600 },
    stretch: "hold",
    phases: { in: 130, out: 0 },
    markers: { settled: 130, wake: 6, build: 40, lift: 72, land: 92, count: 76, pulse: 152 },
    beats: [0, 6, 40, 72, 92, 130, 152],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "value", type: "number", role: "value" },
    { key: "label", type: "text", maxChars: 48, lines: 2, role: "caption" },
  ],
  brand: {
    color: "colors.text",
    accent: "colors.primary",
    accent2: "colors.secondary",
    background: "colors.background",
    fontFamily: "fonts.display",
    labelFontFamily: "fonts.body",
  },
  motionBeats: [
    { target: "ridges", prop: "amplitude", from: "calm", settledBy: 82, easing: "ease" },
    { target: "peak", prop: "y", from: "baseline", settledBy: 118, easing: "spring" },
    { target: "ring", prop: "radius", from: "peak", settledBy: 140, easing: "linear" },
    { target: "value", prop: "count", settledBy: 120, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (stacked ridgelines ripple like a pulse record until the front ridge spikes into the number, 2026-10-08)" },
});
