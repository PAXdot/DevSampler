// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { appearance, appearanceDefaults } from "../contract";
export const schema = z.object({ title: z.string().max(50), clips: z.array(z.string().max(22)).min(3).max(6), ...appearance });
export const defaults: z.infer<typeof schema> = { title: "One story. Every layer in place.", clips: ["Opening", "Product", "Details", "Result"], ...appearanceDefaults, theme: "dark" };
