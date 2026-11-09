// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  title: z.string().max(32),
  range: z.string().max(24),
  rows: z
    .array(
      z.object({
        label: z.string().max(20),
        value: z.number().min(0).max(1e12),
        /** Change in percent; the pill turns red below zero. */
        delta: z.number().min(-1000).max(1000),
      }),
    )
    .min(1)
    .max(5),
  /** Frames between rows. */
  stagger: z.number().int().min(3).max(20),
  color: zColor(),
  accent: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "Installs by surface",
  range: "Last 30 days",
  rows: [
    { label: "cli", value: 130733672, delta: 12.4 },
    { label: "mcp", value: 14470905, delta: 31.8 },
    { label: "registry", value: 4232855, delta: 6.1 },
    { label: "templates", value: 3755811, delta: -2.3 },
  ],
  stagger: 9,
  color: "#F4F4F5",
  accent: "#3D63FF",
  fontFamily: "Geist",
};
