// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";
export const NAME = "Radial Data Bloom";
export const schema = z.object({ title: z.string().max(40), values: z.array(z.object({ label: z.string().max(10), value: z.number().min(0).max(999) })).min(3).max(6), primary: zColor(), secondary: zColor(), color: zColor(), background: zColor(), fontFamily: z.string() });
export const defaults: z.infer<typeof schema> = { title: "Growing in every direction", values: [{ label: "Design", value: 42 }, { label: "Build", value: 74 }, { label: "Ship", value: 55 }, { label: "Learn", value: 90 }, { label: "Grow", value: 63 }], primary: "#C77DFF", secondary: "#80FFDB", color: "#F2E9FF", background: "#170F1E", fontFamily: "DM Sans" };
