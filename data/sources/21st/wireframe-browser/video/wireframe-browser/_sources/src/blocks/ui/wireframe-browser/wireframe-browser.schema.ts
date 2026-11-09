// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Addresses typed one after another. */
  urls: z.array(z.string().max(40)).min(1).max(3),
  /** Skeleton page each address opens (same order as urls). */
  pages: z.array(z.enum(["dashboard", "list", "article", "chart", "empty"])).min(1).max(3),
  /** Your screenshot for the last page. Empty keeps the skeleton. */
  image: z.string(),
  /** Frames per address. */
  segment: z.number().int().min(36).max(150),
  surfaceColor: zColor().optional(),
  textColor: zColor().optional(),
  theme: z.enum(["light", "dark"]),
  accent: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  urls: ["northwind.app/overview", "northwind.app/customers"],
  pages: ["dashboard", "list"],
  image: "",
  segment: 60,
  surfaceColor: "#FFFFFF", textColor: "#0A0A0B",
  theme: "light",
  accent: "#3D63FF",
  background: "#18181B",
  fontFamily: "Geist",
};
