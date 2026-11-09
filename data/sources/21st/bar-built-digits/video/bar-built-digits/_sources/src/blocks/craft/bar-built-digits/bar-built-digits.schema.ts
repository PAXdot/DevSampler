// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Bar-Built Digits";

export const schema = z.object({
  /** The number the bars build. */
  value: z.number().min(-1e12).max(1e12),
  /** Digits after the decimal point. */
  decimals: z.number().int().min(0).max(2),
  /** Thousands separators ("12,480"). */
  separators: z.boolean(),
  /** Drawn in bars before the number, e.g. "$". */
  prefix: z.string().max(3),
  /** Drawn in bars after the number, e.g. "%" or "+". */
  suffix: z.string().max(3),
  /** One line under the number. Empty hides it. */
  label: z.string().max(48),
  color: zColor(),
  accent: zColor(),
  accent2: zColor(),
  background: zColor(),
  /** Face the digits are cut from (bold weights read best). */
  fontFamily: z.string(),
  /** Floor reflection under the bars. */
  reflection: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  value: 12480,
  decimals: 0,
  separators: true,
  prefix: "",
  suffix: "",
  label: "Teams onboarded this year",
  color: "#E9FFF8",
  accent: "#2EE6B6",
  accent2: "#7AD7FF",
  background: "#071A1F",
  fontFamily: "Geist",
  reflection: true,
};
