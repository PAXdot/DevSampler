// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** App name under the icon. Empty hides it. */
  name: z.string().max(20),
  /** Number of petals (odd numbers stay symmetric). */
  petals: z.number().int().min(1).max(9),
  /** Icon tile color. */
  tile: zColor(),
  /** Petal color at the base. */
  petal: zColor(),
  /** Petal color at the tips. */
  tip: zColor(),
  color: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  name: "Lily",
  petals: 5,
  tile: "#2945E6",
  petal: "#F5EEFF",
  tip: "#C4C6CA",
  color: "#F4F4F5",
  fontFamily: "Geist",
};
