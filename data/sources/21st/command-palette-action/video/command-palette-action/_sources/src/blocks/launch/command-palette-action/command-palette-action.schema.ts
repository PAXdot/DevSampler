// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { appearance, appearanceDefaults } from "../contract";
export const schema = z.object({ query: z.string().max(48), actions: z.array(z.string().max(48)).min(1).max(5), selected: z.number().int().min(0).max(4), result: z.string().max(60), ...appearance });
export const defaults: z.infer<typeof schema> = { query: "Create a project", actions: ["Create a project", "Create a document", "Create a workspace"], selected: 0, result: "Your new project is ready", ...appearanceDefaults };
