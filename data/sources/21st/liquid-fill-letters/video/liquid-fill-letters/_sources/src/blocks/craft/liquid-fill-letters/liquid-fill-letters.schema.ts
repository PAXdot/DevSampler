// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";
export const NAME = "Liquid Fill Number";
export const schema = z.object({
  value: z.number().min(0).max(100),
  label: z.string().max(40),
  primary: zColor(), secondary: zColor(), color: zColor(), background: zColor(),
  fontFamily: z.string(), seed: z.number().int(),
});
export const defaults: z.infer<typeof schema> = {
  value: 78, label: "Capacity", primary: "#D6336C", secondary: "#4C6EF5",
  color: "#2A0F1A", background: "#FFF5F7", fontFamily: "Bricolage Grotesque", seed: 31,
};
