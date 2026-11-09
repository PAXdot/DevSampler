// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "titles/craft",
  job: "titles",
  language: "kinetic-poster",
  mechanic: ["uncurl"],
  energy: "default",
  tags: ["title", "headline", "ribbon", "spiral", "uncurl", "text on path", "kinetic type", "banner", "opener", "launch"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 120, max: 600 },
    stretch: "hold",
    phases: { in: 112, out: 0 },
    // emerge = the headline spools out of the vortex, uncurl = the spiral starts to open, settled = flat on the baseline.
    markers: { settled: 112, emerge: 30, uncurl: 42 },
    beats: [0, 30, 42, 80, 112],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "text", type: "text", maxChars: 24, lines: 1, role: "headline" },
    { key: "kicker", type: "text", maxChars: 32, lines: 2, role: "eyebrow" },
  ],
  brand: {
    color: "colors.text",
    primary: "colors.primary",
    secondary: "colors.secondary",
    background: "colors.background",
    fontFamily: "fonts.heading",
    bodyFontFamily: "fonts.body",
  },
  motionBeats: [
    { target: "ribbon", prop: "path", settledBy: 30, easing: "ease" },
    { target: "ribbon", prop: "curl", settledBy: 112, easing: "spring" },
    { target: "kicker", prop: "y", from: "below", settledBy: 112, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (a headline ribbon spools out of a spiral and uncurls flat onto its baseline, 2026-10-08)" },
});
