// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  title: z.string().max(40),
  /** Follows the title under the same sweep. Empty hides it. */
  subline: z.string().max(64),
  color: zColor(),
  /** Hairline that trails the mask edge. */
  accent: zColor(),
  fontFamily: z.string(),
  /** Slant of the mask edge, in degrees. */
  angle: z.number().min(0).max(40),
  hairline: z.boolean(),
  align: z.enum(["center", "left"]),
});

export const defaults: z.infer<typeof schema> = {
  title: "Built for speed",
  subline: "Every component ships with its motion",
  color: "#F4F4F5",
  accent: "#7C9CFF",
  fontFamily: "Geist",
  angle: 20,
  hairline: true,
  align: "center",
};
