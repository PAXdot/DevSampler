// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../kit/z";

/**
 * Style props only. The words arrive at runtime: compileDoc passes `page`
 * (a TikTokPage from @remotion/captions), `position` and `lines`.
 */
export const schema = z.object({
  /** Portrait word poster or compact subtitle placement. */
  portraitLayout: z.enum(["stack", "subtitle"]).default("stack"),
  color: zColor(),
  highlight: zColor(),
  fontFamily: z.string(),
  style: z.enum(["pill", "plain"]),
  /** Text shown when the block is previewed without captions. */
  sample: z.string().max(120),
});

export const defaults: z.infer<typeof schema> = {
  portraitLayout: "stack",
  color: "#FFFFFF",
  highlight: "#3D63FF",
  fontFamily: "Geist",
  style: "pill",
  sample: "Ship the component, not the screenshot.",
};
