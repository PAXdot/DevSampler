// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Ridgeline Waves";

export const schema = z.object({
  /** The number that lands on top of the peak. */
  value: z.number().min(-1e12).max(1e12),
  /** Digits after the decimal point. */
  decimals: z.number().int().min(0).max(2),
  /** Thousands separators ("12,480"). */
  separators: z.boolean(),
  /** Before the number, e.g. "$". */
  prefix: z.string().max(3),
  /** After the number, e.g. "%" or "+". */
  suffix: z.string().max(3),
  /** One line under the number. Empty hides it. */
  label: z.string().max(48),
  color: zColor(),
  accent: zColor(),
  accent2: zColor(),
  background: zColor(),
  /** Face of the number. */
  fontFamily: z.string(),
  /** Face of the label. */
  labelFontFamily: z.string(),
  /** Ridgelines in the landscape frame (taller frames add rows to keep the spacing). */
  rows: z.number().int().min(16).max(60),
  /** Shape of the terrain (any whole number gives a different landscape). */
  seed: z.number().int().min(1).max(999),
  grain: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  value: 12480,
  decimals: 0,
  separators: true,
  prefix: "",
  suffix: "",
  label: "All-time high",
  color: "#FBEAEC",
  accent: "#FF5A5F",
  accent2: "#FFB4A2",
  background: "#260F12",
  fontFamily: "Geist",
  labelFontFamily: "Inter",
  rows: 34,
  seed: 7,
  grain: true,
};
