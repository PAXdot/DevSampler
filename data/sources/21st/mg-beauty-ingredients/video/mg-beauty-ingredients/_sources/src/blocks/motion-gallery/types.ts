// Built with Remotion - https://remotion.pro/license
import type { VideoJob, VideoLanguage } from "../../kit/spec";

/** One editable text in a scene's markup: `{{key}}` in `html`, tagged `data-21st-slot="key"`. */
export type SceneField = {
  key: string;
  label: string;
  default: string;
  maxChars: number;
  role: string;
};

/**
 * A motion-gallery scene: hand-built HTML + scoped CSS keyframes, seeked frame by
 * frame (see scene.tsx). Every selector is scoped under `.v-<id>`, every keyframe
 * name starts with `<id>`, and colors and fonts come from the brand variables
 * `--ink --accent --secondary --paper --font-display --font-body --font-mono`.
 * Layout adapts to the frame through `@container` queries on the stage.
 */
export type SceneSpec = {
  /** Prototype id; the CSS scope is `.v-<id>`. */
  id: string;
  /** Catalog ref. */
  slug: string;
  name: string;
  kind: "scene" | "element";
  job: VideoJob;
  language: VideoLanguage;
  /** Named structural mechanic, e.g. `camera-push-to-detail`. */
  mechanic: string;
  energy: "calm" | "default" | "punchy";
  /** Second of the 6 s design loop where the scene is fully built; held from then on. */
  settle: number;
  requiresScreenshot?: boolean;
  html: string;
  css: string;
  fields: SceneField[];
  colors: { ink: string; accent: string; secondary: string; paper: string };
  fonts: { display: string; body: string; mono: string };
  /** Brand font role the display font follows. */
  displayRole?: "fonts.display" | "fonts.heading" | "fonts.serif" | "fonts.accent";
  tags: string[];
};
