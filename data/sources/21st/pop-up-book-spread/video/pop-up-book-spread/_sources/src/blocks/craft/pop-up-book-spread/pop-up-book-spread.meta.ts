// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "titles/craft",
  job: "titles",
  language: "editorial",
  mechanic: ["fold"],
  energy: "default",
  tags: ["title", "headline", "pop-up", "book", "storybook", "paper", "cut paper", "die-cut", "layers", "3d", "fold", "hardcover", "opener", "launch"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 96, max: 600 },
    stretch: "hold",
    phases: { in: 84, out: 0 },
    // open = the cover lifts; back/middle/wings = die-cut layers stand up one after another; card = the headline card pops with a wobble.
    markers: { settled: 84, open: 8, back: 13, middle: 18, wings: 23, card: 29 },
    beats: [0, 8, 13, 18, 23, 29, 84],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "text", type: "text", maxChars: 48, lines: 3, role: "headline" },
    { key: "kicker", type: "text", maxChars: 32, lines: 1, role: "eyebrow" },
    { key: "logo", type: "image", role: "logo" },
  ],
  brand: {
    color: "colors.text",
    primary: "colors.primary",
    secondary: "colors.secondary",
    background: "colors.background",
    fontFamily: "fonts.body",
  },
  motionBeats: [
    { target: "cover", prop: "rotateX", from: "closed", settledBy: 58, easing: "spring" },
    { target: "layers", prop: "rotateX", from: "flat", settledBy: 64, easing: "spring" },
    { target: "card", prop: "rotateX", from: "flat", settledBy: 84, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (hardcover pop-up book opens, die-cut paper layers stand up on parallel-fold hinges, headline card pops last, 2026-10-08)" },
});
