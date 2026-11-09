// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Short quotes on the wall. They repeat down the columns while it scrolls. */
  items: z
    .array(z.object({ quote: z.string().max(100), name: z.string().max(28), role: z.string().max(36) }))
    .min(4)
    .max(9),
  /** The quote the wall stops on and lifts out (index into items). */
  highlight: z.number().int().min(0).max(8),
  color: zColor(),
  accent: zColor(),
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  bodyFontFamily: z.string().optional(),
});

export const defaults: z.infer<typeof schema> = {
  items: [
    { quote: "Our launch video took an afternoon instead of two weeks.", name: "Mara Lind", role: "Design lead, Northwind" },
    { quote: "Finally, motion that looks like our product and not a template.", name: "Theo Park", role: "Founder, Acme" },
    { quote: "We ship a changelog video every Friday now.", name: "Ines Duarte", role: "PM, Globex" },
    { quote: "The brand kit just works. Fonts, colors, all of it.", name: "Sam Okafor", role: "Marketing, Initech" },
    { quote: "Went from script to export before lunch.", name: "Lena Brandt", role: "Engineer, Umbrella" },
    { quote: "Every scene stays editable. That alone sold the team.", name: "Ravi Menon", role: "Head of growth, Hooli" },
    { quote: "It replaced three tools in our launch checklist.", name: "Julia Ross", role: "Ops, Stark" },
  ],
  highlight: 1,
  color: "#0A0A0B",
  accent: "#3D63FF",
  surfaceColor: "#FFFFFF",
  background: "#F1F2F6",
  fontFamily: "Geist",
  bodyFontFamily: "Inter",
};
