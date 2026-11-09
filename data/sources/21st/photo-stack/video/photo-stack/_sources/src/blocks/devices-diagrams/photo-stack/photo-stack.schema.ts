// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Photos dropped onto the stack in order (image or video); repeated when there are more cards. Empty slots show drawn photos. */
  photo1: z.string(),
  photo2: z.string(),
  photo3: z.string(),
  photo4: z.string(),
  /** Cards in the stack. */
  count: z.number().int().min(2).max(6),
  /** Max random turn per card, degrees. */
  spread: z.number().min(0).max(18),
  caption: z.string().max(40),
  /** White print border around each photo. */
  border: z.boolean(),
  /** Print border material. */
  paperColor: zColor().optional(),
  accent: zColor(),
  color: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  photo1: "",
  photo2: "",
  photo3: "",
  photo4: "",
  count: 4,
  spread: 8,
  caption: "Field notes, spring trip",
  border: true,
  paperColor: "#FBFBF9",
  accent: "#3D63FF",
  color: "#F4F4F5",
  fontFamily: "Geist",
};
