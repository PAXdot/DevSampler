// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { appearance, appearanceDefaults } from "../../launch/contract";
export const schema = z.object({
  headline: z.string().max(64), codeTitle: z.string().max(32), outputTitle: z.string().max(32),
  code: z.string().max(900), output: z.string().max(650),
  codeImage: z.string(), outputImage: z.string(),
  highlightLine: z.number().int().min(0).max(30),
  split: z.number().min(0.4).max(0.6),
  monoFontFamily: z.string().default("Geist Mono"),
  ...appearance,
});
export const defaults: z.infer<typeof schema> = {
  headline: "Write the idea. See it take shape.", codeTitle: "Your example", outputTitle: "Preview output",
  code: 'const scene = {\n  title: "A new perspective",\n  theme: "light",\n  layout: "responsive",\n};\n\npreview(scene);',
  output: 'Example preview\n\nTitle: A new perspective\nTheme: light\nLayout: responsive\n\nReady for your own content.',
  codeImage: "", outputImage: "", highlightLine: 3, split: 0.54,
  monoFontFamily: "Geist Mono",
  ...appearanceDefaults,
};
