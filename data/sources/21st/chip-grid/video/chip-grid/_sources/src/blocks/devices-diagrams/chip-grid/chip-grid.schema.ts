// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";
import { ICON_NAMES } from "../_shared/icons";

export const schema = z.object({
  /** Heading above the grid. Empty hides it. */
  title: z.string().max(40),
  chips: z.array(z.object({ text: z.string().max(28), icon: z.enum(ICON_NAMES) })).min(2).max(9),
  /** Columns in landscape; tall frames use at most two. */
  columns: z.number().int().min(1).max(4),
  accent: zColor(),
  color: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "What you get",
  chips: [
    { text: "Server rendering", icon: "zap" },
    { text: "Edge caching", icon: "globe" },
    { text: "Typed routes", icon: "code" },
    { text: "Auth built in", icon: "lock" },
    { text: "Realtime data", icon: "database" },
    { text: "Usage analytics", icon: "chart" },
  ],
  columns: 3,
  accent: "#3D63FF",
  color: "#F4F4F5",
  fontFamily: "Geist",
};
