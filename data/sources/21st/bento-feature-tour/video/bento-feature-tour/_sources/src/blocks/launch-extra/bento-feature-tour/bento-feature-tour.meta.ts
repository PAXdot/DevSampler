// Built with Remotion - https://remotion.pro/license
import { launchMeta } from "../../launch/contract";
export const meta = launchMeta({ category: "ui/product", tags: ["bento", "features", "tour", "workflow", "panels"], settled: 118,
  slots: [{ key: "headline", type: "text", role: "headline", maxChars: 64, lines: 1 }, ...[1, 2, 3].map((i) => ({ key: `image${i}`, type: "image" as const, role: "screenshot" }))],
});
