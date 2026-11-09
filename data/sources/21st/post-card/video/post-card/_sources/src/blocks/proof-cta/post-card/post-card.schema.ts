// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  name: z.string().max(32),
  handle: z.string().max(24),
  /** Age of the post ("2h", "Oct 6"). */
  time: z.string().max(10),
  /** The post. Wrap a phrase in *stars* to mark it once the post has landed. */
  post: z.string().max(220),
  /** Picture of the author. Empty draws their initials. */
  avatar: z.string(),
  verified: z.boolean(),
  replies: z.number().int().min(0).max(99_999_999),
  reposts: z.number().int().min(0).max(99_999_999),
  likes: z.number().int().min(0).max(99_999_999),
  color: zColor(),
  accent: zColor(),
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  bodyFontFamily: z.string().optional(),
});

export const defaults: z.infer<typeof schema> = {
  name: "Mara Lind",
  handle: "@maralind",
  time: "2h",
  post: "Rebuilt our launch video in one afternoon with Acme. *Every scene matches our brand*, and nobody had to open a motion tool.",
  avatar: "",
  verified: true,
  replies: 48,
  reposts: 312,
  likes: 2481,
  color: "#0A0A0B",
  accent: "#3D63FF",
  surfaceColor: "#FFFFFF",
  background: "#F1F2F6",
  fontFamily: "Geist",
  bodyFontFamily: "Inter",
};
