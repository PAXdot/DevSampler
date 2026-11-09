// Built with Remotion - https://remotion.pro/license
import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { brandFontStack } from "../../kit/brand-fonts";
import type { SceneSpec } from "./types";

export type SceneProps = {
  ink: string;
  accent: string;
  secondary: string;
  paper: string;
  displayFont: string;
  bodyFont: string;
  monoFont: string;
  paintBackground: boolean;
  [field: string]: unknown;
};

const ESCAPES: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (c) => ESCAPES[c]!);

/**
 * Fills placeholders with escaped prop values:
 * - `{{key}}` the text as is;
 * - `{{key|words}}` one `<span class="w" data-word style="--i:n">` per word, so a
 *   scene can stagger words with `--delay: calc(var(--i) * …)`;
 * - `{{key|chars}}` one `<span class="c" style="--i:n">` per character (typing).
 */
export function fillTemplate(html: string, props: Record<string, unknown>): string {
  return html.replace(/\{\{(\w+)(?:\|(words|chars))?\}\}/g, (_, key: string, filter?: string) => {
    const text = String(props[key] ?? "");
    if (filter === "words") {
      return text.split(/\s+/).filter(Boolean).map((word, i) => {
        const safe = escapeHtml(word);
        return `<span class="w" data-word="${safe}" style="--i:${i}">${safe}</span>`;
      }).join(" ");
    }
    if (filter === "chars") {
      return Array.from(text).map((ch, i) => `<span class="c" style="--i:${i}">${ch === " " ? "&nbsp;" : escapeHtml(ch)}</span>`).join("");
    }
    return escapeHtml(text);
  });
}

/** Frames the build-in takes: the design's settle point, compressed to fit short clips. */
export function settleFrames(settleSeconds: number, fps: number, durationInFrames: number): number {
  return Math.max(1, Math.min(Math.round(settleSeconds * fps), Math.round(durationInFrames * 0.8)));
}

/**
 * Renders a motion-gallery scene. Its CSS keyframes never run on their own:
 * every animation is paused and seeked to the current frame through a
 * negative `animation-delay`, so a frame always renders the same pixels
 * (Remotion renders frames out of order and in parallel). The build-in maps
 * onto the clip's first frames and the settled state holds to the end.
 */
export function sceneComponent(spec: SceneSpec): React.FC<SceneProps> {
  const scope = `.v-${spec.id}`;
  const css = `${spec.css}\n${scope},${scope} *,${scope}::before,${scope}::after,${scope} *::before,${scope} *::after{animation-play-state:paused!important;animation-delay:calc(var(--seek) + var(--delay, 0s))!important;animation-fill-mode:both!important;}`;
  const Scene: React.FC<SceneProps> = (props) => {
    const frame = useCurrentFrame();
    const { fps, durationInFrames, width, height } = useVideoConfig();
    const settle = settleFrames(spec.settle, fps, durationInFrames);
    const seconds = (Math.min(frame, settle) / settle) * spec.settle;
    const html = useMemo(() => fillTemplate(spec.html, props), [props]);
    const style = {
      "--seek": `${(-seconds).toFixed(4)}s`,
      "--t": 1,
      "--ink": props.ink,
      "--accent": props.accent,
      "--secondary": props.secondary,
      "--paper": props.paper,
      "--font-display": brandFontStack(props.displayFont),
      "--font-body": brandFontStack(props.bodyFont),
      "--font-mono": brandFontStack(props.monoFont),
      position: "relative",
      width,
      height,
      overflow: "hidden",
      containerType: "size",
    } as React.CSSProperties;
    return (
      <AbsoluteFill>
        <style>{css}</style>
        <div
          className={`stage v-${spec.id}`}
          data-backdrop={props.paintBackground ? "on" : "off"}
          style={style}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </AbsoluteFill>
    );
  };
  Scene.displayName = spec.name;
  return Scene;
}
