// Built with Remotion - https://remotion.pro/license
import { launchMeta } from "../contract";
export const meta = launchMeta({ category: "ui/interaction", tags: ["command", "palette", "search", "keyboard", "action"], slots: [{ key: "query", type: "text", role: "prompt", maxChars: 48 }, { key: "actions", type: "list", role: "items" }, { key: "result", type: "text", role: "headline", maxChars: 60 }] });
