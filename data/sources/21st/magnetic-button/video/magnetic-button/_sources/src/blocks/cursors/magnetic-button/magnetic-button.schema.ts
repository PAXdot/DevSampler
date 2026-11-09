// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Small line above the button. Empty hides it. */
  kicker: z.string().max(32),
  /** Button text before the click. */
  label: z.string().max(20),
  /** Button text once it is pressed. */
  doneLabel: z.string().max(20),
  /** Line under the button. Empty hides it. */
  hint: z.string().max(40),
  /** Button fill before the click and the scene's text. */
  color: zColor(),
  /** Button fill after the click. */
  accent: zColor(),
  /** Button text before the click. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  kicker: "Free for 14 days",
  label: "Get started",
  doneLabel: "You're in",
  hint: "No credit card required",
  color: "#F4F4F5",
  accent: "#3D63FF",
  surfaceColor: "#09090B",
  background: "#09090B",
  fontFamily: "Geist",
};
