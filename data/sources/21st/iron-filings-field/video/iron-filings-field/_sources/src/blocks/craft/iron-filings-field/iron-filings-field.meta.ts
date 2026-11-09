// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "aura",
  mechanic: ["magnetism"],
  tags: ["logo", "logo reveal", "headline", "iron filings", "magnetic field", "physics", "field lines", "connect", "integration", "metallic", "generative"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 132, max: 600 },
    stretch: "hold",
    phases: { in: 128, out: 0 },
    // scatter: filings lie at random; tap: the plate is knocked; align: filings snap into
    // field lines from the poles outward; logo / headline: the poles light and resolve.
    markers: { settled: 128, tap: 26, align: 30, logo: 78, headline: 94 },
    beats: [0, 26, 30, 64, 78, 94, 128],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "headline", type: "text", maxChars: 44, lines: 2, role: "headline" },
  ],
  brand: { primary: "colors.primary", secondary: "colors.secondary", color: "colors.text", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "filings", prop: "rotation", from: "random", settledBy: 100, easing: "spring" },
    { target: "filings", prop: "position", from: "even grid", settledBy: 100, easing: "spring" },
    { target: "logo", prop: "scale", from: "0.82, blurred", settledBy: 108, easing: "spring" },
    { target: "headline", prop: "opacity", from: "0, blurred", settledBy: 128, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (iron filings snap into the magnetic field between logo and headline, 2026-10-08)" },
});
