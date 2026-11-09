// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "photo-collage",
  mechanic: ["slap"],
  tags: ["logo", "stickers", "die-cut", "sticker bomb", "keywords", "screenshot", "collage", "tactile", "social", "playful", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 130, max: 600 },
    stretch: "hold",
    phases: { in: 124, out: 0 },
    // board: the screenshot settles in; stickers: keywords and small logos slap down one per
    // eighth note (every 8 frames from 16); hero: the big logo sticker drops from above and
    // slaps center at 96; settled: squash, shake and peel curls have come to rest.
    markers: { settled: 124, board: 0, stickers: 16, hero: 96 },
    beats: [16, 24, 32, 40, 48, 56, 64, 72, 80, 96],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "screenshot", type: "image", role: "screenshot" },
    { key: "items", type: "list", maxChars: 18, lines: 1, role: "label" },
  ],
  brand: {
    primary: "colors.primary",
    secondary: "colors.secondary",
    color: "colors.text",
    background: "colors.background",
    fontFamily: "fonts.body",
  },
  motionBeats: [
    { target: "screenshot", prop: "scale", from: "0.92, below", settledBy: 24, easing: "spring" },
    { target: "keyword stickers", prop: "scale", from: "lifted above the board", settledBy: 110, easing: "spring" },
    { target: "logo sticker", prop: "position", from: "above the frame, spinning", settledBy: 118, easing: "spring" },
    { target: "peel curls", prop: "corner", from: "flat", settledBy: 122, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (die-cut keyword and logo stickers slap onto a screenshot with squash and peel, 2026-10-08)" },
});
