// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "titles/craft",
  job: "titles",
  language: "kinetic-poster",
  mechanic: ["orbit"],
  energy: "default",
  tags: ["title", "headline", "planet", "ring", "orbit", "space", "3d text", "perspective", "occlusion", "kinetic type", "opener", "launch"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 130, max: 600 },
    stretch: "hold",
    phases: { in: 120, out: 0 },
    // dawn = light swings onto the planet, open = the ring tilts open, settled = the headline lands front and centre.
    markers: { settled: 120, dawn: 30, open: 64 },
    beats: [0, 30, 64, 120, 140],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "text", type: "text", maxChars: 32, lines: 1, role: "headline" },
    { key: "kicker", type: "text", maxChars: 28, lines: 1, role: "eyebrow" },
  ],
  brand: {
    color: "colors.text",
    primary: "colors.primary",
    secondary: "colors.secondary",
    background: "colors.background",
    fontFamily: "fonts.body",
  },
  motionBeats: [
    { target: "planet", prop: "light", settledBy: 48, easing: "ease" },
    { target: "ring", prop: "rotate", settledBy: 120, easing: "ease" },
    { target: "ring", prop: "tilt", settledBy: 100, easing: "spring" },
    { target: "kicker", prop: "y", from: "below", settledBy: 116, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (the headline is a planet's ring, spinning in perspective behind and in front of the planet, 2026-10-08)" },
});
