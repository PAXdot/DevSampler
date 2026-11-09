// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { appearance, appearanceDefaults } from "../contract";
export const schema = z.object({ image: z.string(), label: z.string().max(60), focusX: z.number().min(0.2).max(0.8), focusY: z.number().min(0.2).max(0.8), zoom: z.number().min(1.2).max(3), ...appearance });
export const defaults: z.infer<typeof schema> = { image: "", label: "Bring the important detail into focus", focusX: 0.68, focusY: 0.46, zoom: 2, ...appearanceDefaults };
