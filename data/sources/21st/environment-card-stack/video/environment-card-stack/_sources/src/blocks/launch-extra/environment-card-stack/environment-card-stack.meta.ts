// Built with Remotion - https://remotion.pro/license
import { launchMeta } from "../../launch/contract";
export const meta = launchMeta({ category: "ui/product", tags: ["environment", "settings", "cards", "perspective", "stack"], settled: 102,
  slots: [{ key: "headline", type: "text", role: "headline", maxChars: 64, lines: 1 }, ...[1, 2, 3, 4].map((i) => ({ key: `image${i}`, type: "image" as const, role: "screenshot" }))],
});
