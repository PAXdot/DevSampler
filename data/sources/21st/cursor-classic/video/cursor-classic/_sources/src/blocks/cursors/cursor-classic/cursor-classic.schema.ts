// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Dialog title. */
  title: z.string().max(24),
  /** Line under the title. Empty hides it. */
  subtitle: z.string().max(40),
  /** First setting, already switched on. */
  firstLabel: z.string().max(20),
  /** Small line under the first setting (hidden in 9:16). Empty hides it. */
  firstHint: z.string().max(32),
  /** Second setting, the one the cursor switches on. */
  secondLabel: z.string().max(20),
  /** Small line under the second setting (hidden in 9:16). Empty hides it. */
  secondHint: z.string().max(32),
  /** Secondary footer button. Empty hides it. */
  cancelLabel: z.string().max(12),
  /** Primary footer button before the click. */
  saveLabel: z.string().max(16),
  /** Primary footer button after the click, next to a check. */
  savedLabel: z.string().max(16),
  /** Text, the cursor's fill and the Save button before the click. */
  color: zColor(),
  /** Switches, icon tiles and the Save button after the click. */
  accent: zColor(),
  /** Dialog material. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "Notifications",
  subtitle: "Choose what we send you",
  firstLabel: "Email updates",
  firstHint: "News about features you use",
  secondLabel: "Push alerts",
  secondHint: "Mentions and replies on mobile",
  cancelLabel: "Cancel",
  saveLabel: "Save changes",
  savedLabel: "Saved",
  color: "#F4F4F5",
  accent: "#3D63FF",
  surfaceColor: "#09090B",
  background: "#09090B",
  fontFamily: "Geist",
};
