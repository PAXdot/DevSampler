// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { appearance, appearanceDefaults } from "../contract";
export const schema = z.object({ title: z.string().max(54), notes: z.array(z.string().max(42)).min(3).max(6), ...appearance });
export const defaults: z.infer<typeof schema> = { title: "Turn scattered ideas into a clear plan", notes: ["Find the opportunity", "Sketch the first idea", "Explore the details", "Make a prototype", "Collect feedback", "Share the result"], ...appearanceDefaults };
