// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  title: z.string().max(32),
  /** Small line above the title. Empty hides it. */
  eyebrow: z.string().max(40),
  color: zColor(),
  /** Shockwave ring and underline. */
  accent: zColor(),
  /** Left ghost of the RGB split. */
  splitA: zColor(),
  /** Right ghost of the RGB split. */
  splitB: zColor(),
  fontFamily: z.string(),
  shockwave: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  title: "Launch week",
  eyebrow: "Day one",
  color: "#F4F4F5",
  accent: "#7C9CFF",
  splitA: "#22D3EE",
  splitB: "#F59E0B",
  fontFamily: "Geist",
  shockwave: true,
};
