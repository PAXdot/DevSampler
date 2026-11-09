// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Sand Logo";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background works best). Its silhouette is the mold the sand fills. Empty shows a neutral sample mark. */
  logo: z.string(),
  /** One short line under the settled logo. Empty hides it. */
  caption: z.string().max(40),
  /** Main sand tone and the warm light around the pour. */
  primary: zColor(),
  /** Second sand tone, layered in strata with the primary. */
  secondary: zColor(),
  /** Caption, the dotted mold outline and the pale sand layer. */
  color: zColor(),
  /** Backdrop. "transparent" keeps only the sand and its glow. */
  background: zColor(),
  /** Pour the colors in layers (sand-art strata); off mixes them grain by grain. */
  strata: z.boolean(),
  /** Film grain over the backdrop. */
  grain: z.boolean(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  caption: "Built to last",
  primary: "#F28482",
  secondary: "#84A59D",
  color: "#F7EDE2",
  background: "#2B1B17",
  strata: true,
  grain: true,
  fontFamily: "DM Sans",
};
