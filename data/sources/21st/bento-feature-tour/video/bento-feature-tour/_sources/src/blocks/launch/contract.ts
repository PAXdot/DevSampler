// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { defineVideoMeta, type VideoMetaInput } from "../../kit/spec";
import { zColor } from "../../kit/z";

export const appearance = { theme: z.enum(["light", "dark"]), accent: zColor(), fontFamily: z.string(), surfaceColor: zColor().optional(), textColor: zColor().optional() };
export const appearanceDefaults = { theme: "dark" as const, accent: "#7C91FF", fontFamily: "Geist", surfaceColor: "#141417", textColor: "#F4F4F5" };

/** Own implementations of general motion patterns. Reference footage stays out of block bundles. */
export function launchMeta(input: {
  category: string; tags: string[]; slots: VideoMetaInput["slots"];
  settled?: number; duration?: number; kind?: "scene" | "element";
}): ReturnType<typeof defineVideoMeta> {
  const scene = input.kind === "scene";
  const duration = input.duration ?? 150;
  return defineVideoMeta({
    spec: "21st.video/1", kind: input.kind ?? "element", category: input.category,
    tags: ["launch", "product", "introducing", ...input.tags], engines: { remotion: ">=4.0.479 <5" },
    timing: { fps: 30, duration: { default: duration, min: Math.max(90, (input.settled ?? 100) + 11), max: 900 }, stretch: "hold", phases: { in: 16, out: 0 }, markers: { settled: input.settled ?? 100 }, beats: [16, 40, 72] },
    layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: scene ? "frame" : "region", safeArea: "action", transparent: !scene, preset: "full", defaultRegion: { x: 0, y: 0, w: 1, h: 1 }, backdrop: [] },
    slots: input.slots, brand: { accent: "colors.primary", fontFamily: "fonts.heading", surfaceColor: "colors.background", textColor: "colors.text" },
    motionBeats: [{ target: "content", prop: "transform", from: "translated", settledBy: input.settled ?? 100, easing: "ease" }],
    render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
    preview: { poster: { marker: "settled" }, hover: [0, duration] },
    provenance: { origin: "own", license: "MIT", sourceUrl: "docs/research/launch-videos-2026-10-06/patterns.md" },
  });
}
