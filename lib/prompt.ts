import type { Item } from "@/lib/types";

export type SourceFile = { path: string; content: string };

export function agentPrompt(item: Item, source?: SourceFile[] | null) {
  const local = Boolean(source && source.length > 0);
  const lines = [
    local
      ? `You are integrating the local component "${item.name}" into this project.`
      : `You are integrating the component "${item.name}" into this project.`,
    "",
    item.description || "No description was published for this component.",
    "",
    `Author: ${item.author || "unknown"}`,
    item.meta ? `Tags: ${item.meta}` : "",
    item.license ? `License: ${item.license}` : "",
    item.preview ? `Preview: ${item.preview}` : "",
    "",
  ];
  if (local && source) {
    lines.push("The source is already on disk. Copy these files into the project.");
    lines.push("");
    for (const file of source) {
      lines.push(`File: ${file.path}`, "```tsx", file.content, "```", "");
    }
  } else {
    lines.push("The source file is not on disk yet.");
  }
  return lines.filter((line, index) => line !== "" || lines[index - 1] !== "").join("\n");
}
