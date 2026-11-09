// Built with Remotion - https://remotion.pro/license
import { durationAt, type Catalog } from "./catalog-types";
import { BUILTIN_TRANSITIONS, videoDocSchema, type Bind, type Brand, type Props, type VideoDoc } from "./schema";
import { clipStart, enterDur, isPinned, totalFrames } from "./timeline";

export type DocIssue = { path: string; message: string };

/**
 * Structural parse plus the invariants from spec/editor.md §9 that need the
 * catalog (manifest min/max). Run in the editor before commit, in tRPC save,
 * and in the agent's edit_video tool.
 */
export function validateDoc(input: unknown, catalog?: Catalog): { ok: true; doc: VideoDoc } | { ok: false; issues: DocIssue[] } {
  const parsed = videoDocSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, issues: parsed.error.issues.map((i) => ({ path: i.path.join("."), message: i.message })) };
  }
  const doc = parsed.data;
  const issues: DocIssue[] = [];
  const sceneIds = new Set<string>();
  const ids = new Set<string>();
  const total = totalFrames(doc);
  const dup = (id: string, path: string) => {
    if (ids.has(id)) issues.push({ path, message: `duplicate id ${id}` });
    ids.add(id);
  };

  doc.scenes.forEach((s, i) => {
    dup(s.id, `scenes.${i}.id`);
    sceneIds.add(s.id);
    const e = enterDur(s, i);
    const prev = doc.scenes[i - 1];
    if (prev && e > Math.min(prev.durationInFrames, s.durationInFrames)) {
      issues.push({ path: `scenes.${i}.enter`, message: "transition longer than a neighbouring scene" });
    }
    if (s.base.kind === "block" && catalog) {
      const entry = catalog.get(s.base.ref);
      if (!entry) issues.push({ path: `scenes.${i}.base.ref`, message: `unknown block ${s.base.ref}` });
      else {
        const d = durationAt(entry, doc.fps);
        if (s.durationInFrames < d.min || s.durationInFrames > d.max) {
          issues.push({ path: `scenes.${i}.durationInFrames`, message: `${entry.name} must be ${d.min}-${d.max} frames` });
        }
      }
    }
    if (i > 0 && s.enter.kind === "transition" && catalog && !(BUILTIN_TRANSITIONS as readonly string[]).includes(s.enter.ref)) {
      const entry = catalog.get(s.enter.ref);
      if (!entry || entry.kind !== "transition") issues.push({ path: `scenes.${i}.enter.ref`, message: `unknown transition ${s.enter.ref}` });
    }
    if (s.base.kind === "asset" && !doc.assets[s.base.asset]) issues.push({ path: `scenes.${i}.base.asset`, message: "missing asset" });
    if (s.base.kind === "block") bindPropsOverlap(s.base.props, s.base.bind, `scenes.${i}.base`, issues);
  });

  doc.clips.forEach((c, i) => {
    dup(c.id, `clips.${i}.id`);
    if ("scene" in c.anchor) {
      const scene = doc.scenes.find((s) => s.id === (c.anchor as { scene: string }).scene);
      if (!scene) issues.push({ path: `clips.${i}.anchor`, message: "anchored to a missing scene" });
      else if (c.anchor.offset + c.durationInFrames > scene.durationInFrames) {
        issues.push({ path: `clips.${i}.durationInFrames`, message: "layer runs past the end of its scene" });
      }
    }
    if (catalog) {
      const entry = catalog.get(c.ref);
      if (!entry) issues.push({ path: `clips.${i}.ref`, message: `unknown block ${c.ref}` });
      else if (c.durationInFrames > durationAt(entry, doc.fps).max) {
        issues.push({ path: `clips.${i}.durationInFrames`, message: `${entry.name} is at most ${durationAt(entry, doc.fps).max} frames` });
      }
    }
    if (isPinned(c) && c.anchor.video + c.durationInFrames > total) issues.push({ path: `clips.${i}.durationInFrames`, message: "layer runs past the end of the video" });
    bindPropsOverlap(c.props, c.bind, `clips.${i}`, issues);
  });

  // No overlaps within a lane.
  const byLane = new Map<number, { s: number; e: number; id: string }[]>();
  for (const c of doc.clips) {
    const s = clipStart(doc, c);
    const list = byLane.get(c.lane) ?? [];
    for (const o of list) if (o.s < s + c.durationInFrames && s < o.e) issues.push({ path: `clips.${c.id}`, message: `overlaps ${o.id} on lane ${c.lane}` });
    list.push({ s, e: s + c.durationInFrames, id: c.id });
    byLane.set(c.lane, list);
  }

  // Stacked = rendered: pinned lanes above every in-scene lane.
  const maxInScene = doc.clips.filter((c) => !isPinned(c)).reduce((m, c) => Math.max(m, c.lane), -1);
  for (const c of doc.clips) if (isPinned(c) && c.lane <= maxInScene) issues.push({ path: `clips.${c.id}.lane`, message: "pinned layer must sit above scene layers" });

  for (const [k, id] of Object.entries(doc.brand.logos)) {
    if (id && !doc.assets[id]) issues.push({ path: `brand.logos.${k}`, message: "missing asset" });
  }
  if (doc.captions && catalog && !catalog.get(doc.captions.ref)) issues.push({ path: "captions.ref", message: `unknown block ${doc.captions.ref}` });

  doc.audio.forEach((a, i) => {
    dup(a.id, `audio.${i}.id`);
    if (!doc.assets[a.asset]) issues.push({ path: `audio.${i}.asset`, message: "missing asset" });
  });

  return issues.length ? { ok: false, issues } : { ok: true, doc };
}

function bindPropsOverlap(props: Props, bind: Bind, path: string, issues: DocIssue[]) {
  for (const k of Object.keys(bind)) if (k in props) issues.push({ path: `${path}.props.${k}`, message: "key is both bound to brand and set" });
}

/**
 * The value a brand binding stands for. `logos.*` hold asset ids; they resolve
 * to the asset's src through `assets` (undefined without it, or when unset, so
 * the block keeps its own default instead of receiving an id as a URL).
 */
export function readBinding(brand: Brand, binding: string, assets?: VideoDoc["assets"]): unknown {
  const [group, key] = binding.split(".") as [keyof Brand, string];
  const g = brand[group] as Record<string, unknown> | undefined;
  const v = g?.[key];
  if (group === "logos") return typeof v === "string" ? assets?.[v]?.src : undefined;
  if (group === "fonts" && v === undefined) {
    if (key === "display") return brand.fonts.heading;
    if (key === "numerals") return brand.fonts.body;
    if (key === "serif") return "Instrument Serif";
    if (key === "mono") return "Geist Mono";
    if (key === "accent") return "Bebas Neue";
  }
  return v;
}

/** Prop merge order: defaults → brand bindings → explicit props. Pass `assets` (doc.assets) so logo bindings resolve. */
export function resolveProps(defaults: Record<string, unknown>, bind: Bind, props: Props, brand: Brand, assets?: VideoDoc["assets"]): Record<string, unknown> {
  const out: Record<string, unknown> = { ...defaults };
  // Motion is a document-wide brand role; an explicit clip override wins.
  if ("motion" in defaults) out.motion = brand.motion;
  if ("energy" in defaults) out.energy = brand.motion;
  for (const [k, b] of Object.entries(bind)) {
    const v = readBinding(brand, b, assets);
    if (v !== undefined) out[k] = v;
  }
  return Object.assign(out, props);
}

export function resolveColor(brand: Brand, c: string | { bind: string }): string {
  return typeof c === "string" ? c : String(readBinding(brand, c.bind) ?? "#000000");
}
