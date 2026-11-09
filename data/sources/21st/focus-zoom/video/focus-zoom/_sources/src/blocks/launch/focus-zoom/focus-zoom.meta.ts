// Built with Remotion - https://remotion.pro/license
import { launchMeta } from "../contract";
export const meta = launchMeta({ category: "camera/product", tags: ["focus", "zoom", "spotlight", "screenshot", "detail"], slots: [{ key: "image", type: "image", role: "screenshot" }, { key: "label", type: "text", role: "headline", maxChars: 60, lines: 1 }] });
