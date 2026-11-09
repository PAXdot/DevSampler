// Built with Remotion - https://remotion.pro/license
import { DOC_SPEC, type Brand, type Size, type VideoDoc } from "./schema";

export const KIT_VERSION = "0.1.0";

export const DEFAULT_BRAND: Brand = {
  colors: { primary: "#3D63FF", secondary: "#898B8F", text: "#FFFFFF", background: "#0B0B10" },
  fonts: { heading: "Inter", body: "Inter" },
  logos: {},
  motion: "default",
};

export function emptyDoc(id: string, main: Size = "16:9", title = "Untitled video"): VideoDoc {
  return {
    spec: DOC_SPEC,
    id,
    title,
    rev: 1,
    kitVersion: KIT_VERSION,
    fps: 30,
    main,
    background: { bind: "colors.background" },
    fadeOut: false,
    sizes: {
      "16:9": { export: main === "16:9", overrides: {} },
      "9:16": { export: main === "9:16", overrides: {} },
      "1:1": { export: main === "1:1", overrides: {} },
    },
    brand: structuredClone(DEFAULT_BRAND),
    components: {},
    assets: {},
    scenes: [],
    clips: [],
    captions: null,
    audio: [],
    mine: [],
  };
}

let counter = 0;
/** Short, collision-resistant ids for scenes and clips ("s_k3x9a"). */
export function uid(prefix: string): string {
  counter = (counter + 1) % 1296;
  const rand = Math.floor(Math.random() * 36 ** 4).toString(36).padStart(4, "0");
  return `${prefix}_${rand}${counter.toString(36)}`;
}
