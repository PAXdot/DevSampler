// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Where the action lands, shown above the button. Empty hides it. */
  context: z.string().max(28),
  /** Button text while it waits to be held. */
  label: z.string().max(20),
  /** Button text once the hold completes. */
  doneLabel: z.string().max(20),
  /** Scene text, the cursor and the hold ring's track. */
  color: zColor(),
  /** Button fill, the hold ring and the burst. */
  accent: zColor(),
  /** Second spark color in the burst. */
  secondary: zColor(),
  /** Button material before it fills. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  context: "Production · main",
  label: "Hold to deploy",
  doneLabel: "Deployed",
  color: "#F4F4F5",
  accent: "#3D63FF",
  secondary: "#808286",
  surfaceColor: "#09090B",
  background: "#09090B",
  fontFamily: "Geist",
};
