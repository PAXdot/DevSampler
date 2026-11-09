// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { appearance, appearanceDefaults } from "../../launch/contract";
export const schema = z.object({
  headline: z.string().max(64), sourceTitle: z.string().max(42), resultTitle: z.string().max(42),
  lines: z.array(z.string().max(60)).min(2).max(6),
  sourceImage: z.string(), resultImage: z.string(),
  transformFrame: z.number().int().min(28).max(58),
  resultVariant: z.enum(["dashboard", "article", "list"]),
  ...appearance,
});
export const defaults: z.infer<typeof schema> = {
  headline: "From a brief to a workspace", sourceTitle: "A simple starting point", resultTitle: "A place to make it happen",
  lines: ["Gather the useful context", "Give every idea a place", "Connect the work ahead", "Make room for the next step"],
  sourceImage: "", resultImage: "", transformFrame: 44, resultVariant: "dashboard",
  ...appearanceDefaults,
};
