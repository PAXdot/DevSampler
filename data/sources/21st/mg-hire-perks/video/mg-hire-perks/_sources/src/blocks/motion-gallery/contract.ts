// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { defineVideoMeta } from "../../kit/spec";
import { zColor } from "../../kit/z";
import type { BlockDef } from "../types";
import type { SceneSpec } from "./types";

const FPS = 30;
const DEFAULT_FRAMES = 180;

/** Schema, defaults and 21st.video/1 manifest for one motion-gallery scene. */
export function defFor(spec: SceneSpec): BlockDef {
  const reserved = new Set(["ink", "accent", "secondary", "paper", "displayFont", "bodyFont", "monoFont", "paintBackground"]);
  const clash = spec.fields.find((f) => reserved.has(f.key));
  if (clash) throw new Error(`${spec.slug}: field "${clash.key}" shadows a brand prop`);
  const fields = Object.fromEntries(spec.fields.map((f) => [f.key, z.string().max(f.maxChars).describe(f.label)]));
  const schema = z.object({
    ink: zColor(),
    accent: zColor(),
    secondary: zColor(),
    paper: zColor(),
    displayFont: z.string(),
    bodyFont: z.string(),
    monoFont: z.string(),
    paintBackground: z.boolean(),
    ...fields,
  });
  const settled = Math.min(Math.round(spec.settle * FPS), Math.round(DEFAULT_FRAMES * 0.8));
  const beats = [0, Math.round(settled / 4), Math.round(settled / 2), Math.round((settled * 3) / 4), settled];
  return {
    slug: spec.slug,
    name: spec.name,
    schema,
    defaults: {
      ...spec.colors,
      displayFont: spec.fonts.display,
      bodyFont: spec.fonts.body,
      monoFont: spec.fonts.mono,
      paintBackground: true,
      ...Object.fromEntries(spec.fields.map((f) => [f.key, f.default])),
    },
    meta: defineVideoMeta({
      spec: "21st.video/1",
      kind: spec.kind,
      category: `${spec.job}/motion-gallery`,
      job: spec.job,
      language: spec.language,
      mechanic: [spec.mechanic],
      energy: spec.energy,
      requiresScreenshot: spec.requiresScreenshot ?? false,
      tags: ["motion-gallery", spec.job, spec.mechanic, ...spec.tags],
      engines: { remotion: ">=4.0.533 <5" },
      timing: {
        fps: FPS,
        duration: { default: DEFAULT_FRAMES, min: 90, max: 900 },
        stretch: "hold",
        phases: { in: settled, out: 0 },
        markers: { settled },
        beats,
        loop: false,
      },
      layout: {
        aspects: ["16:9", "9:16", "1:1"],
        mode: "responsive",
        fill: "frame",
        safeArea: "action",
        transparent: true,
        preset: "full",
        backdrop: ["paintBackground"],
      },
      slots: spec.fields.map((f) => ({ key: f.key, type: "text" as const, maxChars: f.maxChars, role: f.role })),
      brand: {
        ink: "colors.text",
        accent: "colors.primary",
        secondary: "colors.secondary",
        paper: "colors.background",
        displayFont: spec.displayRole ?? "fonts.display",
        bodyFont: "fonts.body",
        monoFont: "fonts.mono",
      },
      motionBeats: [{ target: spec.mechanic, prop: "transform", from: "enter", settledBy: settled, easing: "ease" }],
      render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
      preview: { poster: { marker: "settled" }, hover: [0, DEFAULT_FRAMES] },
      provenance: { origin: "own", license: "MIT", sourceUrl: "docs/research/launch-videos-2026-10-06/README.md" },
    }),
  };
}
