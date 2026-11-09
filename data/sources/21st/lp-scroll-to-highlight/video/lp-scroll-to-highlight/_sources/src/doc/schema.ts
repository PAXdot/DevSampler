// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { ASPECTS } from "../kit/spec";

/**
 * `21st.video-doc/2`: a whole video as data. One source of truth for the
 * editor UI, the agent's ops, the player host, the render worker and the
 * render cache key. Shape follows spec/editor.md §9 plus `mine` (fields the
 * user set by hand, which the agent must not overwrite).
 *
 * Time is in frames. Scenes have no `from`: order is time and gaps are
 * unrepresentable. Layers ride on a scene (anchor.scene + offset) or are
 * pinned to the video timeline (anchor.video) so they stay still through cuts.
 */

export const DOC_SPEC = "21st.video-doc/2" as const;

export const sizeSchema = z.enum(ASPECTS);
export type Size = z.infer<typeof sizeSchema>;

export const PRESETS = [
  "full",
  "center",
  "upper-third",
  "lower-third",
  "left-half",
  "right-half",
  "corner-tl",
  "corner-br",
] as const;
export const presetSchema = z.enum(PRESETS);
export type Preset = z.infer<typeof presetSchema>;

/** Semantic regions (0..1 of the frame), identical across sizes; a block reflows into its rect. */
export const PRESET_RECTS: Record<Preset, { x: number; y: number; w: number; h: number }> = {
  full: { x: 0, y: 0, w: 1, h: 1 },
  center: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
  "upper-third": { x: 0.08, y: 0.04, w: 0.84, h: 0.4 },
  "lower-third": { x: 0, y: 0.5, w: 1, h: 0.5 },
  "left-half": { x: 0, y: 0, w: 0.5, h: 1 },
  "right-half": { x: 0.5, y: 0, w: 0.5, h: 1 },
  "corner-tl": { x: 0.03, y: 0.04, w: 0.2, h: 0.12 },
  "corner-br": { x: 0.77, y: 0.84, w: 0.2, h: 0.12 },
};

export const PRESET_LABELS: Record<Preset, string> = {
  full: "Full frame",
  center: "Center",
  "upper-third": "Upper third",
  "lower-third": "Lower third",
  "left-half": "Left half",
  "right-half": "Right half",
  "corner-tl": "Top left",
  "corner-br": "Bottom right",
};

export const BRAND_BINDINGS = [
  "colors.primary",
  "colors.secondary",
  "colors.text",
  "colors.background",
  "fonts.heading",
  "fonts.body",
  "fonts.display",
  "fonts.numerals",
  "fonts.serif",
  "fonts.mono",
  "fonts.accent",
  /** Asset ids in brand.logos, resolved to the asset's src for the block (image slots only). */
  "logos.light",
  "logos.dark",
] as const;
export const bindingSchema = z.enum(BRAND_BINDINGS);
export type Binding = z.infer<typeof bindingSchema>;

/** OFL fonts the editor offers. Each has a static loader in kit/brand-fonts.ts. */
export const BRAND_FONTS = ["Inter", "Manrope", "DM Sans", "Space Grotesk", "IBM Plex Sans", "Geist", "Instrument Serif", "Libre Baskerville", "DM Serif Display", "Geist Mono", "IBM Plex Mono", "Space Mono", "Bebas Neue", "Bricolage Grotesque", "Caveat"] as const;

const frames = z.number().int().nonnegative();
const positiveFrames = z.number().int().positive();
const id = z.string().min(1).max(64);
const hex = z.string().regex(/^#[0-9a-fA-F]{6}$/);
const json = z.unknown();

export const propsSchema = z.record(json);
export const bindSchema = z.record(bindingSchema);
export type Props = z.infer<typeof propsSchema>;
export type Bind = z.infer<typeof bindSchema>;

/** Built into compileDoc. "diagonal-wipe" is a catalog transition block (with its own duration range). */
export const BUILTIN_TRANSITIONS = ["fade", "slide", "wipe", "zoom"] as const;
export const DIRECTIONS = ["right", "left", "top", "bottom"] as const;

export const enterSchema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("cut") }),
  z.object({
    kind: z.literal("transition"),
    /** A built-in presentation or a catalog transition block ref. */
    ref: z.string().min(1),
    durationInFrames: positiveFrames,
    timing: z.enum(["linear", "spring"]),
    direction: z.enum(DIRECTIONS).optional(),
  }),
]);
export type Enter = z.infer<typeof enterSchema>;

export const sceneBaseSchema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("block"),
    ref: z.string().min(1),
    props: propsSchema,
    bind: bindSchema,
    /** Media slots inside a block (e.g. a phone screen); null = empty slot. */
    slots: z.record(z.string().nullable()).optional(),
  }),
  z.object({
    kind: z.literal("asset"),
    asset: id,
    fit: z.enum(["cover", "contain"]),
    trimBefore: frames,
  }),
  z.object({
    kind: z.literal("solid"),
    color: z.union([hex, z.object({ bind: z.literal("colors.background") })]),
  }),
]);
export type SceneBase = z.infer<typeof sceneBaseSchema>;

export const sceneSchema = z.object({
  id,
  name: z.string().max(60).optional(),
  durationInFrames: positiveFrames,
  base: sceneBaseSchema,
  enter: enterSchema,
});
export type Scene = z.infer<typeof sceneSchema>;

export const anchorSchema = z.union([
  z.object({ scene: id, offset: frames }),
  z.object({ video: frames }),
]);
export type Anchor = z.infer<typeof anchorSchema>;

export const clipSchema = z.object({
  id,
  lane: z.number().int().min(0).max(7),
  anchor: anchorSchema,
  durationInFrames: positiveFrames,
  ref: z.string().min(1),
  props: propsSchema,
  bind: bindSchema,
  placement: z.object({ preset: presetSchema }),
  hidden: z.boolean().optional(),
});
export type Clip = z.infer<typeof clipSchema>;

export const audioClipSchema = z.object({
  id,
  role: z.enum(["voice", "music"]),
  asset: id,
  name: z.string().max(80).optional(),
  from: frames,
  durationInFrames: positiveFrames,
  trimBefore: frames,
  volumeDb: z.number().min(-60).max(12),
  fadeIn: frames,
  fadeOut: frames,
  duck: z.object({ under: z.literal("voice"), amountDb: z.number().min(-30).max(0) }).optional(),
  fitToVideo: z.boolean().optional(),
});
export type AudioClip = z.infer<typeof audioClipSchema>;

/** Remotion's Caption shape (@remotion/captions), stored inline so renders need no network. */
export const captionItemSchema = z.object({
  text: z.string().max(200),
  startMs: z.number().nonnegative(),
  endMs: z.number().nonnegative(),
  timestampMs: z.number().nullable(),
  confidence: z.number().nullable(),
});
export type CaptionItem = z.infer<typeof captionItemSchema>;

export const captionsSchema = z.object({
  ref: z.string().min(1),
  origin: z.enum(["srt", "typed"]),
  items: z.array(captionItemSchema).max(2000),
  props: propsSchema,
  bind: bindSchema,
  position: z.enum(["bottom", "middle", "top"]),
  perPage: z.number().int().min(1).max(8),
  lines: z.union([z.literal(1), z.literal(2)]),
});
export type Captions = z.infer<typeof captionsSchema>;

export const assetSchema = z.object({
  type: z.enum(["image", "video", "audio", "logo"]),
  /** Only our own origins; enforced server-side (see isAllowedAssetUrl). */
  src: z.string().url(),
  sha256: z.string().regex(/^[0-9a-f]{64}$/),
  durationInFrames: positiveFrames.optional(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
  license: z.string().max(80).optional(),
  name: z.string().max(120).optional(),
});
export type Asset = z.infer<typeof assetSchema>;

export const pinnedComponentSchema = z.object({
  item: z.string(), // "<author>/<slug>"
  version: z.string(),
  hash: z.string(),
  bundleUrl: z.string().url().optional(),
});

export const sizeStateSchema = z.object({
  export: z.boolean(),
  overrides: z.record(z.object({ preset: presetSchema.optional(), hidden: z.boolean().optional() })),
});

export const brandSchema = z.object({
  colors: z.object({ primary: hex, secondary: hex, text: hex, background: hex }),
  fonts: z.object({ heading: z.string(), body: z.string(), display: z.string().optional(), numerals: z.string().optional(), serif: z.string().optional(), mono: z.string().optional(), accent: z.string().optional() }),
  logos: z.object({ light: id.optional(), dark: id.optional() }),
  motion: z.enum(["calm", "default", "punchy"]),
});
export type Brand = z.infer<typeof brandSchema>;

export const videoDocSchema = z.object({
  spec: z.literal(DOC_SPEC),
  id,
  title: z.string().max(80),
  rev: z.number().int().nonnegative(),
  kitVersion: z.string(),
  fps: z.union([z.literal(30), z.literal(60)]),
  main: sizeSchema,
  background: z.union([hex, z.object({ bind: z.literal("colors.background") })]),
  fadeOut: z.boolean(),
  sizes: z.object({ "16:9": sizeStateSchema, "9:16": sizeStateSchema, "1:1": sizeStateSchema }),
  brand: brandSchema,
  components: z.record(pinnedComponentSchema),
  assets: z.record(assetSchema),
  scenes: z.array(sceneSchema).max(60),
  clips: z.array(clipSchema).max(200),
  captions: captionsSchema.nullable(),
  audio: z.array(audioClipSchema).max(24),
  /** "clipId.prop" | "sceneId.dur" | "clipId.timing" | "clipId.placement": set by hand, agent keeps them. */
  mine: z.array(z.string().max(140)).max(2000),
});
export type VideoDoc = z.infer<typeof videoDocSchema>;

export type Selection =
  | { kind: "video" }
  | { kind: "scene"; id: string }
  | { kind: "clip"; id: string }
  | { kind: "cut"; id: string } // id = the scene the cut leads into
  | { kind: "audio"; id: string }
  | { kind: "captions" };
