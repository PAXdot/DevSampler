// Built with Remotion - https://remotion.pro/license
import { createTikTokStyleCaptions, type TikTokPage } from "@remotion/captions";
import { TransitionSeries, linearTiming, springTiming, type TransitionPresentation } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import React, { useMemo } from "react";
import { AbsoluteFill, Audio, Img, OffthreadVideo, Sequence, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import {
  clipStart,
  effectivePreset,
  isHiddenIn,
  isPinned,
  layoutScenes,
  presetRect,
  resolveColor,
  resolveProps,
  totalFrames,
  type Clip,
  type Scene,
  type Size,
  type VideoDoc,
} from "../doc/index";
import { loadBrandFont } from "../kit/brand-fonts";
import { zoom } from "./zoom";

/**
 * compileDoc: the ONE mapping from 21st.video-doc/2 to Remotion, shared by
 * the player host (browser) and the render workers (E2B, Mac), so preview and
 * export can't drift. Mapping table: spec/editor.md §9.
 */

export type BlockModule = {
  Component?: React.FC<any>;
  /** Transition blocks export a presentation factory instead of a component. */
  presentation?: (props: Record<string, unknown>) => TransitionPresentation<any>;
  defaults: Record<string, unknown>;
};

export type BlockResolver = (ref: string) => BlockModule | undefined;

export type DocVideoProps = {
  doc: VideoDoc;
  size: Size;
  /** Server entitlement, never read from the doc. */
  watermark: boolean;
  resolve: BlockResolver;
  /** Optional export range (Hobby "Trim to 0:30" exports a prefix without editing the doc). */
  maxFrames?: number;
};

// Re-exported from doc (pure, no React) so servers can use it without pulling Remotion.
export { docDurationInFrames } from "../doc/timeline";

const Missing: React.FC<{ name: string }> = ({ name }) => (
  <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", fontFamily: "sans-serif", fontSize: 24 }}>
    {name} unavailable
  </AbsoluteFill>
);

function presentationFor(enter: Extract<Scene["enter"], { kind: "transition" }>, resolve: BlockResolver): TransitionPresentation<any> {
  const dir = enter.direction ?? "right";
  // A catalog transition block wins over a built-in with the same name.
  const mod = resolve(enter.ref);
  if (mod?.presentation) return mod.presentation({ ...mod.defaults, ...(enter.direction ? { direction: enter.direction } : {}) });
  switch (enter.ref) {
    case "fade":
      return fade();
    case "slide":
      return slide({ direction: `from-${dir}` as "from-right" });
    case "wipe":
      return wipe({ direction: `from-${dir}` as "from-right" });
    case "zoom":
      return zoom();
    case "diagonal-wipe":
      return wipe({ direction: "from-top-left" });
    default:
      return fade();
  }
}

function timingFor(enter: Extract<Scene["enter"], { kind: "transition" }>) {
  return enter.timing === "spring"
    ? springTiming({ durationInFrames: enter.durationInFrames, config: { damping: 200 } })
    : linearTiming({ durationInFrames: enter.durationInFrames });
}

/** A block rendered into its region; Sequence width/height make it reflow instead of scale. */
const Placed: React.FC<{ doc: VideoDoc; clip: Clip; size: Size; resolve: BlockResolver; from: number }> = ({ doc, clip, size, resolve, from }) => {
  const { width: W, height: H, fps } = useVideoConfig();
  const r = presetRect(effectivePreset(doc, clip, size));
  const mod = resolve(clip.ref);
  const C = mod?.Component;
  const props = resolveProps(mod?.defaults ?? {}, clip.bind, clip.props, doc.brand, doc.assets);
  const w = Math.round(r.w * W);
  const h = Math.round(r.h * H);
  return (
    <Sequence
      from={from}
      durationInFrames={clip.durationInFrames}
      width={w}
      height={h}
      premountFor={fps}
      name={clip.ref}
      style={{ left: Math.round(r.x * W), top: Math.round(r.y * H), width: w, height: h, right: "auto", bottom: "auto" }}
    >
      <AbsoluteFill data-21st-clip={clip.id}>{C ? <C {...props} /> : <Missing name={clip.ref} />}</AbsoluteFill>
    </Sequence>
  );
};

const SceneBase: React.FC<{ doc: VideoDoc; scene: Scene; resolve: BlockResolver }> = ({ doc, scene, resolve }) => {
  const base = scene.base;
  if (base.kind === "solid") return <AbsoluteFill data-21st-clip={scene.id} style={{ background: resolveColor(doc.brand, base.color) }} />;
  if (base.kind === "asset") {
    const a = doc.assets[base.asset];
    if (!a) return <Missing name="media" />;
    const style: React.CSSProperties = { width: "100%", height: "100%", objectFit: base.fit };
    return (
      <AbsoluteFill data-21st-clip={scene.id} style={{ background: "#000" }}>
        {a.type === "video" ? <OffthreadVideo src={a.src} trimBefore={base.trimBefore} style={style} muted /> : <Img src={a.src} style={style} />}
      </AbsoluteFill>
    );
  }
  const mod = resolve(base.ref);
  const C = mod?.Component;
  const slots: Record<string, string | null> = {};
  for (const [k, v] of Object.entries(base.slots ?? {})) slots[k] = v ? (doc.assets[v]?.src ?? null) : null;
  const props = { ...resolveProps(mod?.defaults ?? {}, base.bind, base.props, doc.brand, doc.assets), ...slots };
  return <AbsoluteFill data-21st-clip={scene.id}>{C ? <C {...props} /> : <Missing name={base.ref} />}</AbsoluteFill>;
};

const dbToGain = (db: number) => Math.pow(10, db / 20);

function audioVolume(doc: VideoDoc, a: VideoDoc["audio"][number]) {
  const voice = doc.audio.filter((x) => x.role === "voice" && x.id !== a.id).map((v) => [v.from, v.from + v.durationInFrames] as const);
  const ATTACK = 6;
  const RELEASE = 12;
  return (f: number) => {
    const abs = a.from + f;
    let g = dbToGain(a.volumeDb);
    if (a.fadeIn > 0) g *= interpolate(f, [0, a.fadeIn], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    if (a.fadeOut > 0) g *= interpolate(f, [a.durationInFrames - a.fadeOut, a.durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    if (a.duck && voice.length) {
      let k = 0;
      for (const [s, e] of voice) {
        const into = interpolate(abs, [s - ATTACK, s], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const out = interpolate(abs, [e, e + RELEASE], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        k = Math.max(k, Math.min(into, out));
      }
      g *= 1 - k * (1 - dbToGain(a.duck.amountDb));
    }
    return g;
  };
}

const CaptionsLayer: React.FC<{ doc: VideoDoc; resolve: BlockResolver }> = ({ doc, resolve }) => {
  const { fps } = useVideoConfig();
  const c = doc.captions!;
  const pages = useMemo<TikTokPage[]>(
    () => createTikTokStyleCaptions({ captions: c.items, combineTokensWithinMilliseconds: c.perPage * 350 }).pages,
    [c.items, c.perPage],
  );
  const mod = resolve(c.ref);
  const C = mod?.Component;
  if (!C) return null;
  const props = resolveProps(mod.defaults, c.bind, c.props, doc.brand, doc.assets);
  return (
    <AbsoluteFill>
      {pages.map((page, i) => {
        const from = Math.round((page.startMs / 1000) * fps);
        const next = pages[i + 1];
        const end = next ? Math.round((next.startMs / 1000) * fps) : from + Math.round((page.durationMs / 1000) * fps);
        if (end <= from) return null;
        return (
          // The hit-test id sits on the page, so captions only claim clicks while words are on screen.
          <Sequence key={i} from={from} durationInFrames={end - from} premountFor={fps}>
            <AbsoluteFill data-21st-clip="captions">
              <C {...props} page={page} position={c.position} lines={c.lines} portraitLayout={c.props?.["portraitLayout"] ?? (c.bind?.["portraitLayout"] ? props["portraitLayout"] : "subtitle")} />
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

export const Watermark: React.FC = () => {
  const { width, height } = useVideoConfig();
  const u = Math.min(width, height) / 100;
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div style={{ position: "absolute", right: u * 3, bottom: u * 3, fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, fontSize: u * 3, color: "rgba(255,255,255,0.75)", textShadow: "0 1px 4px rgba(0,0,0,0.35)" }}>
        made with 21st
      </div>
    </AbsoluteFill>
  );
};

const FadeOut: React.FC = () => {
  const f = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const o = interpolate(f, [durationInFrames - 15, durationInFrames - 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <AbsoluteFill style={{ background: "#000", opacity: o, pointerEvents: "none" }} />;
};

/** The composition component. Mount with durationInFrames = docDurationInFrames(doc). */
export const DocVideo: React.FC<DocVideoProps> = ({ doc, size, watermark, resolve }) => {
  const { fps } = useVideoConfig();
  useMemo(() => {
    loadBrandFont(doc.brand.fonts.heading);
    loadBrandFont(doc.brand.fonts.body);
  }, [doc.brand.fonts.heading, doc.brand.fonts.body]);

  const spans = layoutScenes(doc);
  const visible = doc.clips.filter((c) => !isHiddenIn(doc, c, size));
  const inScene = (sceneId: string) => visible.filter((c) => !isPinned(c) && (c.anchor as { scene: string }).scene === sceneId).sort((a, b) => a.lane - b.lane);
  const pinned = visible.filter(isPinned).sort((a, b) => a.lane - b.lane);

  return (
    <AbsoluteFill style={{ background: resolveColor(doc.brand, doc.background) }}>
      <TransitionSeries>
        {spans.flatMap(({ scene, index }) => {
          const parts: React.ReactNode[] = [];
          if (index > 0 && scene.enter.kind === "transition") {
            parts.push(<TransitionSeries.Transition key={`t-${scene.id}`} presentation={presentationFor(scene.enter, resolve)} timing={timingFor(scene.enter)} />);
          }
          parts.push(
            <TransitionSeries.Sequence key={scene.id} durationInFrames={scene.durationInFrames} premountFor={fps} name={scene.name ?? (scene.base.kind === "block" ? scene.base.ref : scene.base.kind)}>
              <AbsoluteFill>
                <SceneBase doc={doc} scene={scene} resolve={resolve} />
                {inScene(scene.id).map((c) => (
                  <Placed key={c.id} doc={doc} clip={c} size={size} resolve={resolve} from={(c.anchor as { offset: number }).offset} />
                ))}
              </AbsoluteFill>
            </TransitionSeries.Sequence>,
          );
          return parts;
        })}
      </TransitionSeries>
      {pinned.map((c) => (
        <Placed key={c.id} doc={doc} clip={c} size={size} resolve={resolve} from={clipStart(doc, c)} />
      ))}
      {doc.captions && doc.captions.items.length ? <CaptionsLayer doc={doc} resolve={resolve} /> : null}
      {doc.audio.map((a) => {
        const asset = doc.assets[a.asset];
        if (!asset) return null;
        return (
          <Sequence key={a.id} from={a.from} durationInFrames={a.durationInFrames} name={`${a.role} audio`}>
            <Audio src={asset.src} trimBefore={a.trimBefore} volume={audioVolume(doc, a)} />
          </Sequence>
        );
      })}
      {doc.fadeOut ? <FadeOut /> : null}
      {watermark ? <Watermark /> : null}
    </AbsoluteFill>
  );
};
