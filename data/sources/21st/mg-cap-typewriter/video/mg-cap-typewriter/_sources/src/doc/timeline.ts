// Built with Remotion - https://remotion.pro/license
import { durationAt, type Catalog, type CatalogEntry } from "./catalog-types";
import { PRESET_RECTS, type Clip, type Preset, type Scene, type Size, type VideoDoc } from "./schema";

/** Overlap of the transition into scene i (0 for a cut or the first scene). */
export function enterDur(scene: Scene, index: number): number {
  if (index === 0 || scene.enter.kind === "cut") return 0;
  return scene.enter.durationInFrames;
}

export type SceneSpan = { scene: Scene; index: number; start: number; end: number };

/** start(0)=0; start(i)=start(i-1)+dur(i-1)-enterDur(i). */
export function layoutScenes(doc: Pick<VideoDoc, "scenes">): SceneSpan[] {
  const out: SceneSpan[] = [];
  let start = 0;
  doc.scenes.forEach((scene, index) => {
    if (index > 0) start = out[index - 1]!.start + out[index - 1]!.scene.durationInFrames - enterDur(scene, index);
    out.push({ scene, index, start, end: start + scene.durationInFrames });
  });
  return out;
}

/** total = Σdur − Σ enterDur(i ≥ 1); at least 1 frame so Remotion can mount an empty doc. */
export function totalFrames(doc: Pick<VideoDoc, "scenes">): number {
  const spans = layoutScenes(doc);
  const last = spans[spans.length - 1];
  return Math.max(1, last ? last.end : 0);
}

export function sceneStart(doc: Pick<VideoDoc, "scenes">, sceneId: string): number | undefined {
  return layoutScenes(doc).find((s) => s.scene.id === sceneId)?.start;
}

export function isPinned(clip: Clip): clip is Clip & { anchor: { video: number } } {
  return "video" in clip.anchor;
}

/** Absolute start frame of a clip on the video timeline. */
export function clipStart(doc: Pick<VideoDoc, "scenes">, clip: Clip): number {
  if ("video" in clip.anchor) return clip.anchor.video;
  return (sceneStart(doc, clip.anchor.scene) ?? 0) + clip.anchor.offset;
}

/** The scene whose midpoint-split span contains frame f (transitions split at their midpoint). */
export function sceneAtFrame(doc: Pick<VideoDoc, "scenes">, f: number): SceneSpan | undefined {
  const spans = layoutScenes(doc);
  for (let i = 0; i < spans.length; i++) {
    const s = spans[i]!;
    const next = spans[i + 1];
    const splitEnd = next ? next.start + Math.floor(enterDur(next.scene, next.index) / 2) : s.end;
    const splitStart = i === 0 ? 0 : s.start + Math.floor(enterDur(s.scene, i) / 2);
    if (f >= splitStart && f < splitEnd) return s;
  }
  return spans[spans.length - 1];
}

export function effectivePreset(doc: VideoDoc, clip: Clip, size: Size): Preset {
  return doc.sizes[size].overrides[clip.id]?.preset ?? clip.placement.preset;
}

export function isHiddenIn(doc: VideoDoc, clip: Clip, size: Size): boolean {
  return Boolean(clip.hidden || doc.sizes[size].overrides[clip.id]?.hidden);
}

export function presetRect(preset: Preset) {
  return PRESET_RECTS[preset];
}

/** Duration range of a catalog block in this doc's frames (undefined when the block is unknown). */
export function blockDuration(doc: Pick<VideoDoc, "fps">, catalog: Catalog, ref: string): CatalogEntry["duration"] | undefined {
  const e = catalog.get(ref);
  return e ? durationAt(e, doc.fps) : undefined;
}

/**
 * Smallest legal length for a scene: its base min, every anchored layer's
 * offset + min, and the transitions on both sides (a transition stays at
 * least one frame shorter than both scenes it joins).
 */
export function minSceneFrames(doc: VideoDoc, sceneIndex: number, catalog: Catalog): number {
  const scene = doc.scenes[sceneIndex];
  if (!scene) return 1;
  let min = 1;
  if (scene.base.kind === "block") min = Math.max(min, blockDuration(doc, catalog, scene.base.ref)?.min ?? 1);
  for (const c of doc.clips) {
    if ("scene" in c.anchor && c.anchor.scene === scene.id) {
      const cm = blockDuration(doc, catalog, c.ref)?.min ?? 1;
      min = Math.max(min, c.anchor.offset + Math.min(cm, c.durationInFrames));
    }
  }
  const into = enterDur(scene, sceneIndex);
  if (into) min = Math.max(min, into + 1);
  const next = doc.scenes[sceneIndex + 1];
  const out = next ? enterDur(next, sceneIndex + 1) : 0;
  if (out) min = Math.max(min, out + 1);
  return min;
}

export function maxSceneFrames(doc: VideoDoc, sceneIndex: number, catalog: Catalog): number {
  const scene = doc.scenes[sceneIndex];
  if (!scene) return 1;
  if (scene.base.kind === "block") return blockDuration(doc, catalog, scene.base.ref)?.max ?? 1800;
  if (scene.base.kind === "asset") return doc.assets[scene.base.asset]?.durationInFrames ?? 1800;
  return 1800;
}

/**
 * Restore the lane invariants after any edit:
 * - no two clips overlap in time on one lane (a clash moves the later clip up),
 * - every pinned clip sits above every in-scene clip ("stacked = rendered"),
 * - empty lanes collapse.
 * Relative order is kept where possible. The result can exceed lane 7 when
 * more than 8 layers overlap; ops treat that as a failed edit.
 */
export function normalizeLanes(doc: VideoDoc): void {
  const span = new Map(doc.clips.map((c) => [c, [clipStart(doc, c), clipStart(doc, c) + c.durationInFrames] as const]));
  const place = (clips: Clip[], floor: number): number => {
    const placed: Clip[] = [];
    let top = floor - 1;
    const order = clips.map((c, i) => ({ c, i })).sort((x, y) => x.c.lane - y.c.lane || span.get(x.c)![0] - span.get(y.c)![0] || x.i - y.i);
    for (const { c } of order) {
      const [s, e] = span.get(c)!;
      let lane = Math.max(c.lane, floor);
      while (placed.some((p) => p.lane === lane && span.get(p)![0] < e && s < span.get(p)![1])) lane++;
      c.lane = lane;
      placed.push(c);
      top = Math.max(top, lane);
    }
    return top;
  };
  const maxInScene = place(doc.clips.filter((c) => !isPinned(c)), 0);
  place(doc.clips.filter((c) => isPinned(c)), maxInScene + 1);
  // Collapse empty lanes.
  const used = [...new Set(doc.clips.map((c) => c.lane))].sort((x, y) => x - y);
  const remap = new Map(used.map((l, i) => [l, i]));
  for (const c of doc.clips) c.lane = remap.get(c.lane) ?? c.lane;
}

/** Lowest lane with no clip overlapping [start, end). */
export function freeLane(doc: VideoDoc, start: number, end: number, from = 0, ignoreId?: string): number {
  for (let lane = from; lane < 8; lane++) {
    const busy = doc.clips.some((c) => {
      if (c.lane !== lane || c.id === ignoreId) return false;
      const s = clipStart(doc, c);
      return s < end && start < s + c.durationInFrames;
    });
    if (!busy) return lane;
  }
  return 7;
}

export const secondsToFrames = (s: number, fps: number) => Math.round(s * fps);
export const framesToSeconds = (f: number, fps: number) => Math.round((f / fps) * 100) / 100;

/** m:ss.ff */
export function timecode(f: number, fps: number): string {
  const totalSec = Math.floor(f / fps);
  const ff = String(Math.floor(f % fps)).padStart(2, "0");
  const m = Math.floor(totalSec / 60);
  const s = String(totalSec % 60).padStart(2, "0");
  return `${m}:${s}.${ff}`;
}

/** Composition length for a doc, optionally capped (Hobby "Trim to 0:30" exports a prefix). */
export function docDurationInFrames(doc: Pick<VideoDoc, "scenes">, maxFrames?: number): number {
  const t = totalFrames(doc);
  return maxFrames ? Math.min(t, maxFrames) : t;
}
