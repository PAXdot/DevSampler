// Built with Remotion - https://remotion.pro/license
// Pure schemas and manifests. No React, fonts or renderer imports.
import { z } from "zod";
import { defineVideoMeta } from "../../kit/spec";
import { zColor } from "../../kit/z";
import type { BlockDef } from "../types";
import { LAUNCH_CLASSIFICATIONS, QUARANTINED_PATTERNS } from "../curation";

export const STYLE_IDS = ["swiss", "editorial", "glass", "terminal", "studio"] as const;
export type StyleId = typeof STYLE_IDS[number];
export const STYLES = {
  swiss: { name: "Swiss Grid", accent: "#FC4C31", fontFamily: "Geist" },
  editorial: { name: "Editorial Paper", accent: "#9D432C", fontFamily: "Georgia" },
  glass: { name: "Glass Studio", accent: "#A2AEFF", fontFamily: "Geist" },
  terminal: { name: "Terminal Grid", accent: "#A3FF8F", fontFamily: "Menlo" },
  studio: { name: "Studio Pop", accent: "#FFD65A", fontFamily: "Geist" },
} as const;

export const baseSchema = z.object({
  title: z.string().max(72), subtitle: z.string().max(120),
  labels: z.array(z.string().max(32)).min(3).max(6),
  accent: zColor(), fontFamily: z.string(),
});
export type SceneProps = z.infer<typeof baseSchema> & { image?: string; secondaryImage?: string; value?: number; suffix?: string };
export type ProductSceneProps = SceneProps & { showHeading?: boolean; showBackground?: boolean; background?: string; foreground?: string; secondary?: string; bodyFontFamily?: string; monoFontFamily?: string };
export type StyledProps = ProductSceneProps & { style: StyleId | "product" };
export type PatternSpec = {
  id: string; name: string; description: string; category: string; tags: string[];
  sourceIds: string[]; relationship: "direct-pattern" | "adaptation" | "original-extension";
  defaults: { title: string; subtitle: string; labels: string[]; image?: string; secondaryImage?: string; value?: number; suffix?: string };
};

export const slugFor = (pattern: string, style: StyleId) => `lp-${pattern}-${style}`;
export function schemaFor(spec: PatternSpec) {
  return baseSchema.extend({
    ...(spec.defaults.image !== undefined ? { image: z.string() } : {}),
    ...(spec.defaults.secondaryImage !== undefined ? { secondaryImage: z.string() } : {}),
    ...(spec.defaults.value !== undefined ? { value: z.number().min(0).max(999999) } : {}),
    ...(spec.defaults.suffix !== undefined ? { suffix: z.string().max(12) } : {}),
  });
}
export function metaFor(spec: PatternSpec, style: StyleId) {
  return defineVideoMeta({
    spec: "21st.video/1", kind: "scene", category: spec.category,
    ...LAUNCH_CLASSIFICATIONS[spec.id], looks: [], requiresScreenshot: false,
    tags: ["launch-library", "launch", style, spec.id, ...spec.tags], engines: { remotion: ">=4.0.479 <5" },
    timing: { fps: 30, duration: { default: 180, min: 150, max: 900 }, stretch: "hold", phases: { in: 16, out: 12 }, markers: { settled: 132 }, beats: [18, 48, 84, 116] },
    layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: false, preset: "full", backdrop: [] },
    slots: [
      { key: "title", type: "text", role: "headline", maxChars: 72 },
      { key: "subtitle", type: "text", role: "body", maxChars: 120 },
      { key: "labels", type: "list", role: "items" },
      ...(spec.defaults.image !== undefined ? [{ key: "image", type: "image" as const, role: "media" }] : []),
      ...(spec.defaults.secondaryImage !== undefined ? [{ key: "secondaryImage", type: "image" as const, role: "media" }] : []),
    ], brand: { accent: "colors.primary", fontFamily: "fonts.heading" },
    render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
    motionBeats: [{ target: "content", prop: "transform", from: "composed", settledBy: 132, easing: "ease" }],
    preview: { poster: { marker: "settled" }, hover: [0, 180] },
    provenance: { origin: "own", license: "MIT", sourceUrl: "docs/research/launch-videos-2026-10-06/library-expansion.md" },
  });
}
export function defsFor(specs: PatternSpec[]): BlockDef[] {
  return specs.flatMap(spec => STYLE_IDS.map(style => ({
    slug: slugFor(spec.id, style), name: `${spec.name} · ${STYLES[style].name}`,
    schema: schemaFor(spec), defaults: { ...spec.defaults, accent: STYLES[style].accent, fontFamily: STYLES[style].fontFamily }, meta: metaFor(spec, style),
  })));
}

export const canonicalSlugFor = (pattern: string) => `lp-${pattern}`;
const canonicalNames: Record<string, string> = {
  "ex-serif-chapter": "Chapter advances through columns",
  "ex-contact-wall": "Image contact sheet assembles",
};
export function canonicalSchemaFor(spec: PatternSpec) {
  const legacy = schemaFor(spec);
  return legacy.omit({ labels: true, image: true, secondaryImage: true }).extend({
    items: z.array(z.string().max(32)).min(3).max(6),
    showHeading: z.boolean().default(false), showBackground: z.boolean().default(false),
    background: zColor(), foreground: zColor(), secondary: zColor(),
    bodyFontFamily: z.string(), monoFontFamily: z.string(),
    ...(spec.defaults.image !== undefined ? { screenshot: z.string() } : {}),
    ...(spec.defaults.secondaryImage !== undefined ? { from: z.string() } : {}),
  });
}
export function canonicalDefsFor(specs: PatternSpec[]): BlockDef[] {
  return specs.map(spec => {
    const { labels, image, secondaryImage, ...content } = spec.defaults;
    const legacy = metaFor(spec, "swiss");
    return {
      slug: canonicalSlugFor(spec.id), name: canonicalNames[spec.id] ?? spec.name,
      schema: canonicalSchemaFor(spec),
      defaults: { ...content, items: labels, ...(image !== undefined ? { screenshot: image } : {}), ...(secondaryImage !== undefined ? { from: secondaryImage } : {}), accent: "#3D63FF", secondary: "#B2B4B8", foreground: "#19191D", background: "#F8F8FA", fontFamily: "Inter", bodyFontFamily: "Inter", monoFontFamily: "Geist Mono", showHeading: false, showBackground: false },
      meta: defineVideoMeta({
        ...legacy,
        tags: ["launch", "canonical", spec.id, ...spec.tags],
        timing: { ...legacy.timing, phases: { in: 16, out: 0 } },
        layout: { ...legacy.layout, transparent: true, backdrop: ["showBackground"] },
        slots: legacy.slots.map(slot => ({ ...slot, key: slot.key === "labels" ? "items" : slot.key === "image" ? "screenshot" : slot.key === "secondaryImage" ? "from" : slot.key })),
        brand: { accent: "colors.primary", secondary: "colors.secondary", foreground: "colors.text", background: "colors.background", fontFamily: "fonts.heading", bodyFontFamily: "fonts.body", monoFontFamily: "fonts.mono" },
        looks: [
          { id: "focus", name: "Mechanism in focus", props: { showHeading: false } },
          { id: "context", name: "Mechanism with context", props: { showHeading: true } },
        ],
      }),
    };
  });
}
export const isCuratedPattern = (id: string) => !(id in QUARANTINED_PATTERNS);
