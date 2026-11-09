// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { appearance, appearanceDefaults } from "../contract";
export const schema = z.object({ title: z.string().max(48), steps: z.array(z.string().max(28)).min(3).max(6), tilt: z.number().min(0).max(45), ...appearance });
export const defaults: z.infer<typeof schema> = { title: "A workflow that keeps moving", steps: ["Discover", "Build", "Review", "Deliver"], tilt: 28, ...appearanceDefaults, theme: "dark" };
