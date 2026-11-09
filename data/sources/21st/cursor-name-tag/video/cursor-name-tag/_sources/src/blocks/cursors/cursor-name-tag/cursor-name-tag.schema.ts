// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Document title. */
  title: z.string().max(28),
  /** Four checklist items; the teammate checks off the first three. */
  items: z.array(z.string().max(28)).min(4).max(4),
  /** Teammate's name on the cursor's tag; its first letter is their avatar. */
  teammate: z.string().max(12),
  /** Document text. */
  color: zColor(),
  /** Document icon, your avatar and the progress bar. */
  accent: zColor(),
  /** The teammate: cursor, name tag, avatar, row highlight and the checks they make. */
  secondary: zColor(),
  /** Document material. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "Launch checklist",
  items: ["Record the demo", "Write release notes", "Update pricing page", "Post the launch"],
  teammate: "Maya",
  color: "#F4F4F5",
  accent: "#3D63FF",
  secondary: "#F97316",
  surfaceColor: "#09090B",
  background: "#09090B",
  fontFamily: "Geist",
};
