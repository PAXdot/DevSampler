// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "titles/craft",
  job: "titles",
  language: "kinetic-poster",
  mechanic: ["assemble"],
  tags: ["title", "headline", "logo", "wordmark", "reveal", "shatter", "shards", "assemble", "3d", "camera move", "opener"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 156, max: 600 },
    stretch: "hold",
    phases: { in: 152, out: 0 },
    // lock = the one frame the camera reaches the viewpoint and every shard lines up.
    markers: { settled: 152, lock: 108, reveal: 126 },
    beats: [0, 60, 108, 126, 136],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "title", type: "text", maxChars: 28, lines: 2, role: "headline" },
    { key: "caption", type: "text", maxChars: 48, lines: 2, role: "subline" },
  ],
  brand: {
    logo: "logos.light",
    color: "colors.text",
    primary: "colors.primary",
    secondary: "colors.secondary",
    background: "colors.background",
    fontFamily: "fonts.heading",
    bodyFontFamily: "fonts.body",
  },
  motionBeats: [
    { target: "camera", prop: "orbit", from: "off-axis", settledBy: 132, easing: "spring" },
    { target: "shards", prop: "alignment", settledBy: 132, easing: "spring" },
    { target: "fragments", prop: "position", from: "title", settledBy: 140, easing: "ease" },
    { target: "bar", prop: "width", from: "left", settledBy: 140, easing: "ease" },
    { target: "caption", prop: "y", from: "below", settledBy: 152, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (title cut into shards scattered in depth, the camera swings in and they assemble into the headline, 2026-10-08)" },
});
