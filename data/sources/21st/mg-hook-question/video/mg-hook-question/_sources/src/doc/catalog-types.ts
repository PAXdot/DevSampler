// Built with Remotion - https://remotion.pro/license
import type { Aspect, VideoKind, VideoJob, VideoLanguage, VideoLook } from "../kit/spec";

/**
 * What the editor, the agent and the ops need to know about a block, without
 * its code. Built from the block's 21st.video/1 manifest plus its zod schema
 * (see blocks/describe.ts). The web app gets these from demos.video_meta.
 */
export type FieldType = "text" | "color" | "number" | "boolean" | "select" | "list" | "asset" | "font";

export type FieldInfo = {
  key: string;
  label: string;
  type: FieldType;
  /** Text max length / list max items. */
  max?: number;
  min?: number;
  step?: number;
  options?: string[];
  /** Semantic role used when swapping blocks (headline, name, subline, kicker, code, accent). */
  role?: string;
  /** Paints the block's own full-frame background; hidden when used as a layer. */
  backdrop?: boolean;
  /** Default brand binding for this field when the block is added. */
  brand?: string;
};

export type CatalogEntry = {
  /** Doc ref: "<slug>" for first-party, "<author>/<slug>" for others. */
  ref: string;
  name: string;
  kind: VideoKind;
  category: string;
  job?: VideoJob;
  language?: VideoLanguage;
  mechanic?: string[];
  looks?: VideoLook[];
  energy?: "calm" | "default" | "punchy";
  requiresScreenshot?: boolean;
  clientRenderable?: boolean;
  tags: string[];
  aspects: Aspect[];
  fps: number;
  duration: { default: number; min: number; max: number };
  stretch: "hold" | "scale" | "loop";
  phases: { in: number; out: number };
  settled: number;
  loop: boolean;
  defaultPreset?: string;
  requiresGpu: boolean;
  fields: FieldInfo[];
  defaults: Record<string, unknown>;
  posters?: Partial<Record<Aspect, string>>;
  loops?: Partial<Record<Aspect, string>>;
  bundleUrl?: string;
  author?: string;
};

export type Catalog = {
  get(ref: string): CatalogEntry | undefined;
  list(): CatalogEntry[];
};

/**
 * An entry's duration range in frames at the document's fps. Manifests count
 * frames at their own `timing.fps` (usually 30); a 60 fps doc needs twice as
 * many frames for the same seconds.
 */
export function durationAt(entry: Pick<CatalogEntry, "duration" | "fps">, fps: number): CatalogEntry["duration"] {
  const k = entry.fps > 0 ? fps / entry.fps : 1;
  if (k === 1) return entry.duration;
  const min = Math.max(1, Math.round(entry.duration.min * k));
  const max = Math.max(min, Math.round(entry.duration.max * k));
  return { min, max, default: Math.max(min, Math.min(max, Math.round(entry.duration.default * k))) };
}

/** An entry's settled frame at the document's fps. */
export function settledAt(entry: Pick<CatalogEntry, "settled" | "fps">, fps: number): number {
  return entry.fps > 0 && entry.fps !== fps ? Math.round((entry.settled * fps) / entry.fps) : entry.settled;
}

/**
 * The same catalog with every entry's frame counts expressed at `fps` (and
 * `fps` set to it). UI and prompt code that reads `duration`/`settled`
 * directly then agrees with the ops, which convert via durationAt/settledAt.
 */
export function catalogAtFps(catalog: Catalog, fps: number): Catalog {
  const conv = new Map<string, CatalogEntry>();
  const at = (e: CatalogEntry | undefined) => {
    if (!e || e.fps === fps || !(e.fps > 0)) return e;
    let hit = conv.get(e.ref);
    if (!hit || hit.duration !== durationAt(e, fps)) {
      hit = { ...e, fps, duration: durationAt(e, fps), settled: settledAt(e, fps), phases: { in: Math.round((e.phases.in * fps) / e.fps), out: Math.round((e.phases.out * fps) / e.fps) } };
      conv.set(e.ref, hit);
    }
    return hit;
  };
  return { get: (ref) => at(catalog.get(ref)), list: () => catalog.list().map((e) => at(e)!) };
}

export function catalogFrom(entries: CatalogEntry[]): Catalog {
  const map = new Map(entries.map((e) => [e.ref, e]));
  return { get: (ref) => map.get(ref), list: () => [...map.values()] };
}

export const SCENE_KINDS: VideoKind[] = ["scene", "background"];
export const LAYER_KINDS: VideoKind[] = ["element", "overlay-fx", "captions"];
