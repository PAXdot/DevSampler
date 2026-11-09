// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { appearance, appearanceDefaults } from "../../launch/contract";
export const schema = z.object({
  headline: z.string().max(64), voiceLabel: z.string().max(32),
  documentTitles: z.array(z.string().max(32)).min(2).max(4),
  image1: z.string(), image2: z.string(), image3: z.string(), image4: z.string(),
  amplitude: z.number().min(0.2).max(1),
  captureFrames: z.number().int().min(30).max(70),
  ...appearance,
});
export const defaults: z.infer<typeof schema> = {
  headline: "Bring every source into the picture", voiceLabel: "Voice note",
  documentTitles: ["Field notes", "Project brief", "Team feedback", "Roadmap"],
  image1: "", image2: "", image3: "", image4: "", amplitude: 0.7, captureFrames: 54,
  ...appearanceDefaults,
};
