// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "captions",
  category: "captions/karaoke",
  tags: ["captions", "subtitles", "karaoke", "word highlight", "tiktok", "reels"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 90, min: 10, max: 18000 },
    stretch: "hold",
    phases: { in: 5, out: 0 },
    markers: { settled: 30 },
    // Default sample token starts: 100 ms + i * 300 ms at 30 fps; real pages carry their own token times.
    beats: [3, 12, 21, 30, 39, 48],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "title", transparent: true, backdrop: [] },
  slots: [{ key: "sample", type: "text", maxChars: 120, lines: 2, role: "body" }],
  brand: { highlight: "colors.primary", fontFamily: "fonts.heading", color: "colors.text" },
  motionBeats: [{ target: "word", prop: "highlight", easing: "spring" }],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 90] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st-ads/remotion/showcase.tsx (Subs), factor-marketplace/remotion/components/mixed-text.tsx (Subtitles)" },
});
