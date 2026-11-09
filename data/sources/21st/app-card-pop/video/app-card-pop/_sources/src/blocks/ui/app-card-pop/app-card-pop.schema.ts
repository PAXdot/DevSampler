// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Your screenshot or screen recording. Empty shows a stand-in app screen. */
  image: z.string(),
  /** Window or address bar label. */
  title: z.string().max(40),
  chrome: z.enum(["window", "browser", "none"]),
  /** Card shape; auto picks one per aspect. */
  ratio: z.enum(["auto", "16:10", "4:3", "1:1", "4:5"]),
  /** Stand-in screen when no image is set. */
  sample: z.enum(["dashboard", "list", "article", "chart"]),
  /** Corner radius, in % of the short side. */
  radius: z.number().min(0).max(6),
  /** Light sheen that crosses the card once it lands. */
  sheen: z.boolean(),
  theme: z.enum(["light", "dark"]),
  accent: zColor(),
  surfaceColor: zColor().optional(),
  textColor: zColor().optional(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  image: "",
  title: "app.northwind.io/overview",
  chrome: "browser",
  ratio: "auto",
  sample: "dashboard",
  radius: 2,
  sheen: true,
  theme: "light",
  accent: "#3D63FF",
  surfaceColor: "#FFFFFF",
  textColor: "#0A0A0B",
  fontFamily: "Geist",
};
