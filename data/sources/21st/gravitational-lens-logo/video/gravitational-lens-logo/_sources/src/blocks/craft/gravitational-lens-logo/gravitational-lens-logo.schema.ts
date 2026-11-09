// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Gravitational Lens Logo";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background). Empty shows a neutral sample mark. */
  logo: z.string(),
  /** One short line under the ring. Empty hides it. */
  caption: z.string().max(40),
  /** Einstein ring and the warmer half of the nebula. */
  primary: zColor(),
  /** Outer glow of the lensed galaxy and the cooler nebula gas. */
  secondary: zColor(),
  /** Stars, the ring's hot core and the caption. */
  color: zColor(),
  /** Deep space. Light colors flip to a photographic-plate negative (dark stars on pale). */
  background: zColor(),
  /** Star count multiplier. */
  density: z.number().min(0.3).max(1.6),
  /** Lens mass: how wide the Einstein ring opens around the logo. */
  strength: z.number().min(0.7).max(1.25),
  grain: z.boolean(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  caption: "Coming into focus",
  primary: "#5EE7DF",
  secondary: "#F7B267",
  color: "#F1F5F9",
  background: "#04070B",
  density: 1,
  strength: 1,
  grain: true,
  fontFamily: "Geist",
};
