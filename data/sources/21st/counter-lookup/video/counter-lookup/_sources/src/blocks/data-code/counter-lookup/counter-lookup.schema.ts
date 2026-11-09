// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  question: z.string().max(48),
  /** The first query is typed; the rest cycle through the input once the counter lands. */
  queries: z.array(z.string().max(24)).min(1).max(8),
  /** Confirmation line under the suggestion. */
  confirm: z.string().max(40),
  target: z.number().int().min(1).max(1e9),
  label: z.string().max(32),
  color: zColor(),
  accent: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  question: "Does it work with your stack?",
  queries: ["Next.js", "Remix", "Astro", "Vite", "Expo", "Nuxt"],
  confirm: "Supported out of the box",
  target: 205,
  label: "integrations and counting",
  color: "#F4F4F5",
  accent: "#3D63FF",
  background: "#09090B",
  fontFamily: "Geist",
};
