// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { appearance, appearanceDefaults } from "../../launch/contract";

export const schema = z.object({
  headline: z.string().max(64),
  titles: z.array(z.string().max(28)).min(2).max(4),
  runtimes: z.array(z.string().max(28)).min(2).max(4),
  details: z.array(z.string().max(44)).min(2).max(4),
  image1: z.string(), image2: z.string(), image3: z.string(), image4: z.string(),
  tilt: z.number().min(0).max(18),
  stagger: z.number().int().min(8).max(18),
  ...appearance,
});
export const defaults: z.infer<typeof schema> = {
  headline: "A workspace for every idea",
  titles: ["Design space", "Build space", "Review space"],
  runtimes: ["Visual canvas", "Local preview", "Shared feedback"],
  details: ["Your references, together", "Your tools, ready", "Your team, in context"],
  image1: "", image2: "", image3: "", image4: "",
  tilt: 8, stagger: 14, ...appearanceDefaults,
};
