// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "data/craft",
  job: "data",
  language: "kinetic-poster",
  mechanic: ["assemble"],
  energy: "default",
  tags: ["number", "stat", "metric", "bar chart", "chart", "data", "counter", "kpi", "reveal", "growth", "glow"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 120, max: 600 },
    stretch: "hold",
    phases: { in: 120, out: 0 },
    markers: { settled: 120, rise: 4, update: 28, scan: 50, formed: 96 },
    beats: [0, 4, 28, 50, 96, 120],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "value", type: "number", role: "value" },
    { key: "label", type: "text", maxChars: 48, lines: 2, role: "caption" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", accent2: "colors.secondary", background: "colors.background", fontFamily: "fonts.display" },
  motionBeats: [
    { target: "bars", prop: "height", from: "baseline", settledBy: 48, easing: "spring" },
    { target: "bars", prop: "shape", settledBy: 100, easing: "spring" },
    { target: "label", prop: "y", from: "below", settledBy: 108, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (chart bars rise, then a scan beam retargets them into the number, 2026-10-08)" },
});
