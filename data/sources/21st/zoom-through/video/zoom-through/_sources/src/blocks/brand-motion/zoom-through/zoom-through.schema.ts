// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  previewAccent: zColor(),
  textColor: zColor(),
  beforeTitle: z.string().max(32),
  afterTitle: z.string().max(32),
  nextLabel: z.string().max(32),
  fontFamily: z.string().optional(),
  bodyFontFamily: z.string().optional(),
  /** Preview scene backgrounds. Clear both when placing the transition over other content. */
  background: zColor(),
  nextBackground: zColor(),
  /** How far the camera pushes into the outgoing shot (2 = twice its size). */
  scale: z.number().min(1.2).max(5),
  /** Vertical drift while pushing in, as a share of the height (negative = up). */
  lift: z.number().min(-0.4).max(0.4),
  /** Forward pitch while pushing in, in degrees (0 = flat). */
  tilt: z.number().min(0).max(40),
  /** 0..1, motion blur on the push. */
  blur: z.number().min(0).max(1),
});

export const defaults: z.infer<typeof schema> = {
  previewAccent: "#3D63FF",
  textColor: "#F4F4F5",
  beforeTitle: "Before",
  afterTitle: "After",
  nextLabel: "Next scene",
  fontFamily: "Geist",
  bodyFontFamily: "Geist",
  background: "#0B0B10",
  nextBackground: "#0B0B10",
  scale: 2,
  lift: -0.2,
  tilt: 0,
  blur: 0.6,
};
