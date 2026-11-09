// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Product photo or cutout. Empty shows a rendered stand-in object. */
  image: z.string(),
  eyebrow: z.string().max(28),
  title: z.string().max(40),
  /** Rolls in like a slot machine. */
  price: z.number().int().min(0).max(99999),
  /** Struck through next to the price; 0 hides it. */
  oldPrice: z.number().int().min(0).max(99999),
  currency: z.string().max(3),
  /** Option chips (sizes, colors). */
  chips: z.array(z.string().max(8)).max(5),
  cta: z.string().max(22),
  doneLabel: z.string().max(22),
  surfaceColor: zColor().optional(),
  textColor: zColor().optional(),
  theme: z.enum(["light", "dark"]),
  accent: zColor(),
  strikeColor: zColor().default("#EF4444"), discountColor: zColor().default("#16A34A"),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  image: "",
  eyebrow: "Drop 02, limited run",
  title: "Orbit desk lamp",
  price: 129,
  oldPrice: 169,
  currency: "$",
  chips: ["Sand", "Ink", "Moss", "Rust"],
  cta: "Add to cart",
  doneLabel: "Added",
  surfaceColor: "#FFFFFF", textColor: "#0A0A0B",
  theme: "light",
  accent: "#3D63FF",
  strikeColor: "#EF4444", discountColor: "#16A34A",
  background: "#ECEDF1",
  fontFamily: "Geist",
};
