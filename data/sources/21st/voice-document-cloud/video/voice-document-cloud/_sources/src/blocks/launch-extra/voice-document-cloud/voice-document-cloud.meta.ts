// Built with Remotion - https://remotion.pro/license
import { launchMeta } from "../../launch/contract";
export const meta = launchMeta({ category: "ui/product", tags: ["voice", "waveform", "documents", "sources", "cloud"], settled: 104,
  slots: [{ key: "headline", type: "text", role: "headline", maxChars: 64, lines: 1 }, { key: "voiceLabel", type: "text", role: "label", maxChars: 32, lines: 1 }, ...[1, 2, 3, 4].map((i) => ({ key: `image${i}`, type: "image" as const, role: "screenshot" }))],
});
