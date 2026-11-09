// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { appearance, appearanceDefaults } from "../../launch/contract";
export const schema = z.object({
  headline: z.string().max(64),
  featureTitles: z.array(z.string().max(36)).length(3),
  captions: z.array(z.string().max(52)).length(3),
  image1: z.string(), image2: z.string(), image3: z.string(),
  stepFrames: z.number().int().min(16).max(30),
  showProgress: z.boolean(),
  ...appearance,
});
export const defaults: z.infer<typeof schema> = {
  headline: "One picture. Every part of the story.",
  featureTitles: ["Find the starting point", "Shape the work", "Share the next step"],
  captions: ["Bring useful context together", "Make the important things clear", "Keep everyone moving together"],
  image1: "", image2: "", image3: "", stepFrames: 24, showProgress: true,
  ...appearanceDefaults,
};
