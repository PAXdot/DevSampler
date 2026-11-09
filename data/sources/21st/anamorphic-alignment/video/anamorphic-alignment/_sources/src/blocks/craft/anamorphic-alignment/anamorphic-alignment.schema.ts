// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Shattered Title Assembly";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background). When set, the logo is the sliced mark and the title sits under it. Empty slices the title instead. */
  logo: z.string(),
  /** The word the shards align into (or the name under the logo). */
  title: z.string().max(28),
  /** Small line that rises in under the mark once it locks. Empty hides it. */
  caption: z.string().max(48),
  /** Final mark, title and caption ink. */
  color: zColor(),
  /** Shard glow, the flung fragments, the underline bar and the lock flash. */
  primary: zColor(),
  /** Far end of the shard gradient, every third fragment and the bar tip. */
  secondary: zColor(),
  /** Backdrop. "transparent" leaves only the shards and the mark. */
  background: zColor(),
  fontFamily: z.string(),
  bodyFontFamily: z.string(),
  /** Roughly how many shards the title is cut into. */
  shards: z.number().int().min(40).max(420),
  /** 0..1, how far the shards are scattered in depth before they assemble. */
  depth: z.number().min(0.2).max(1),
  grain: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  title: "Ship faster",
  caption: "Everything falls into place",
  color: "#F3EEE6",
  primary: "#FF8A3D",
  secondary: "#FFD27A",
  background: "#0E0F12",
  fontFamily: "Geist",
  bodyFontFamily: "Geist",
  shards: 150,
  depth: 0.85,
  grain: true,
};
