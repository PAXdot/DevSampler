// Built with Remotion - https://remotion.pro/license
import { launchMeta } from "../../launch/contract";
import { defineVideoMeta } from "../../../kit/spec";
const base = launchMeta({ category: "data/code", tags: ["code", "console", "split", "editorial", "developer"], settled: 114,
  slots: [{ key: "headline", type: "text", role: "headline", maxChars: 64, lines: 1 }, { key: "codeTitle", type: "text", role: "label", maxChars: 32, lines: 1 }, { key: "outputTitle", type: "text", role: "label", maxChars: 32, lines: 1 }, { key: "code", type: "text", role: "body", maxChars: 900, lines: 16 }, { key: "output", type: "text", role: "body", maxChars: 650, lines: 16 }, { key: "codeImage", type: "image", role: "screenshot" }, { key: "outputImage", type: "image", role: "screenshot" }],
});
export const meta = defineVideoMeta({ ...base, brand: { ...base.brand, monoFontFamily: "fonts.mono" } });
