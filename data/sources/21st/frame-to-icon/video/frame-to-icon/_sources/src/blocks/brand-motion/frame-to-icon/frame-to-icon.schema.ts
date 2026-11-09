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
  /** The brand color the outgoing scene washes into before it shrinks to an icon. */
  color: zColor(),
  /** Icon content (SVG or PNG on a transparent background). Empty sets the name's first letter. */
  logo: z.string(),
  /** Brand name, used for the monogram when there is no logo. */
  name: z.string().max(24),
  /** Final icon size as a share of the short side. */
  iconSize: z.number().min(0.1).max(0.4),
  /** Corner radius of the final icon, as a share of its size (0.22 = app icon). */
  radius: z.number().min(0).max(0.5),
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
  color: "#3557DF",
  logo: "",
  name: "Orbit",
  iconSize: 0.2,
  radius: 0.22,
};
