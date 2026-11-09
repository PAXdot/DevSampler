// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Page headline the torch reads first. Two lines at most. */
  headline: z.string().max(44),
  /** Card titles on the page, up to three. */
  cards: z.array(z.string().max(14)).max(3),
  /** Headline, card titles and the cursor. */
  color: zColor(),
  /** Torch light and the first card's artwork. */
  accent: zColor(),
  /** Second color of the card artwork. */
  secondary: zColor(),
  /** Card material. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  headline: "Every component ships with its motion",
  cards: ["Hero", "Pricing", "Testimonials"],
  color: "#F4F4F5",
  accent: "#3D63FF",
  secondary: "#808286",
  surfaceColor: "#09090B",
  background: "#09090B",
  fontFamily: "Geist",
};
