// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { appearance, appearanceDefaults } from "../../launch/contract";
export const schema = z.object({
  headline: z.string().max(64), context: z.string().max(52),
  question: z.string().max(90), answer: z.string().max(160),
  mainImage: z.string(), sideImage: z.string(),
  sideWidth: z.number().min(0.3).max(0.5),
  revealFrame: z.number().int().min(24).max(58),
  ...appearance,
});
export const defaults: z.infer<typeof schema> = {
  headline: "Keep the main idea in view", context: "A detail worth exploring",
  question: "How could this idea fit into the whole?",
  answer: "Explore the detail here, while keeping your original work in context.",
  mainImage: "", sideImage: "", sideWidth: 0.38, revealFrame: 36,
  ...appearanceDefaults,
};
