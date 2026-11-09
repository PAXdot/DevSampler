// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Pop-up Book";

export const schema = z.object({
  /** Headline printed on the center card that pops up last. */
  text: z.string().min(1).max(48),
  /** Small line above the headline on the card. Empty hides it. */
  kicker: z.string().max(32),
  /** Logo URL: stamped on the cover and printed on the back page. Empty shows a neutral sample mark. */
  logo: z.string(),
  /** Headline, kicker and the base for the paper tone when the backdrop is transparent. */
  color: zColor(),
  /** Hardcover boards, the middle hill layer and the printed rules. */
  primary: zColor(),
  /** Back mountain layer and the foil disc behind the logo. */
  secondary: zColor(),
  /** The table the book lies on. Light colors give white pages, dark colors give dark pages. "transparent" keeps only the book. */
  background: zColor(),
  /** Font of the kicker and headline (the brand body font). */
  fontFamily: z.string(),
  /** Paper grain on pages, boards and die-cut layers. */
  grain: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  text: "Ship faster",
  kicker: "Introducing",
  logo: "",
  color: "#1E1036",
  primary: "#7C3AED",
  secondary: "#F472B6",
  background: "#F5F0FF",
  fontFamily: "Libre Baskerville",
  grain: true,
};
