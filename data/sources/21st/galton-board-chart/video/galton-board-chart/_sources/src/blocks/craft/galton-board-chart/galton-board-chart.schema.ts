// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Galton Board Chart";

export const schema = z.object({
  /** Chart title. Two lines at most. */
  title: z.string().max(40),
  /** The headline number; it counts up as the balls land. */
  total: z.number().min(0),
  /** Caption under the headline number. */
  totalLabel: z.string().max(24),
  /** One bin per item, left to right. Stack heights follow the values. */
  items: z
    .array(z.object({ label: z.string().max(10), value: z.number().min(0) }))
    .min(2)
    .max(8),
  /** All text, pegs and bin walls. */
  color: zColor(),
  /** Balls of the first bin; the bins blend toward `secondary`. */
  primary: zColor(),
  /** Balls of the last bin. */
  secondary: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  monoFontFamily: z.string(),
  /** Draw a curve across the finished stacks. */
  curve: z.boolean(),
  /** Changes every bounce while keeping the same final chart. */
  seed: z.number().int().min(0).max(9999),
  grain: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  title: "Where it all lands",
  total: 15410,
  totalLabel: "in total",
  items: [
    { label: "Mon", value: 1240 },
    { label: "Tue", value: 2860 },
    { label: "Wed", value: 4120 },
    { label: "Thu", value: 3380 },
    { label: "Fri", value: 2210 },
    { label: "Sat", value: 980 },
    { label: "Sun", value: 620 },
  ],
  color: "#1E1B18",
  primary: "#E4572E",
  secondary: "#F3A712",
  background: "#F4EFE6",
  fontFamily: "Geist",
  monoFontFamily: "Geist Mono",
  curve: true,
  seed: 7,
  grain: true,
};
