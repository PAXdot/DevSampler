// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** What the agent was asked. */
  query: z.string().max(60),
  /** Steps, in order. Each spins, then checks off. */
  steps: z.array(z.string().max(48)).min(1).max(7),
  /** Frames between steps. */
  interval: z.number().int().min(6).max(40),
  theme: z.enum(["light", "dark"]),
  accent: zColor(),
  surfaceColor: zColor().optional(), textColor: zColor().optional(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  query: "Find teams hiring for design engineers",
  steps: ["Searching 2,400 company pages", "Reading careers pages", "Matching roles to your brief", "Scoring 38 teams", "Drafting your shortlist"],
  interval: 14,
  theme: "light",
  accent: "#3D63FF",
  surfaceColor: "#FFFFFF", textColor: "#0A0A0B",
  fontFamily: "Geist",
};
