// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../kit/z";

export const schema = z.object({
  name: z.string().max(18),
  /** Logo image. Empty draws a monogram tile in the accent. */
  logo: z.string(),
  color: zColor(),
  accent: zColor(),
  fontFamily: z.string(),
  /** 0..1, how present the bug is (they usually sit quietly). */
  opacity: z.number().min(0.2).max(1),
  showName: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  name: "Acme",
  logo: "",
  color: "#F4F4F5",
  accent: "#3D63FF",
  fontFamily: "Geist",
  opacity: 0.9,
  showName: true,
};
