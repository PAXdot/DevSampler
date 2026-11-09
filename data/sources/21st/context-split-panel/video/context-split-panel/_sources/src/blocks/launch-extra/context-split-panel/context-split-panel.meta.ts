// Built with Remotion - https://remotion.pro/license
import { launchMeta } from "../../launch/contract";
export const meta = launchMeta({ category: "ui/product", tags: ["context", "selection", "split", "pane", "chat"], settled: 106,
  slots: [{ key: "headline", type: "text", role: "headline", maxChars: 64, lines: 1 }, { key: "context", type: "text", role: "label", maxChars: 52, lines: 1 }, { key: "question", type: "text", role: "body", maxChars: 90, lines: 3 }, { key: "answer", type: "text", role: "body", maxChars: 160, lines: 5 }, { key: "mainImage", type: "image", role: "screenshot" }, { key: "sideImage", type: "image", role: "screenshot" }],
});
