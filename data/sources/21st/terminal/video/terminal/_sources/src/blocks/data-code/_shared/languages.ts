// Built with Remotion - https://remotion.pro/license
// Schema metadata must remain independent of React and the rendering runtime.
export const LANGUAGES = ["tsx", "ts", "js", "css", "json", "bash", "python", "plain"] as const;
export type Language = (typeof LANGUAGES)[number];
