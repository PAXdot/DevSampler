// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../kit/z";

export const schema = z.object({
  label: z.string().max(28),
  doneLabel: z.string().max(28),
  /** Button fill before the click. */
  buttonColor: zColor(),
  /** Button text before the click. */
  color: zColor(),
  /** Button fill and ring after the click. */
  accent: zColor(),
  fontFamily: z.string(),
  /** Where the cursor comes from. */
  from: z.enum(["bottom-right", "bottom-left", "right"]),
});

export const defaults: z.infer<typeof schema> = {
  label: "Copy prompt",
  doneLabel: "Copied",
  buttonColor: "#FFFFFF",
  color: "#0A0A0A",
  accent: "#3D63FF",
  fontFamily: "Geist",
  from: "bottom-right",
};
