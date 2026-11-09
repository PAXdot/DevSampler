// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { appearance, appearanceDefaults } from "../contract";
export const schema = z.object({ beforeImage: z.string(), afterImage: z.string(), beforeLabel: z.string().max(36), afterLabel: z.string().max(36), direction: z.enum(["horizontal", "vertical"]), ...appearance });
export const defaults: z.infer<typeof schema> = { beforeImage: "", afterImage: "", beforeLabel: "The starting point", afterLabel: "The finished result", direction: "horizontal", ...appearanceDefaults };
