// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  title: z.string().max(40),
  /** Steps down the trunk: a pill label and a note on its branch. */
  nodes: z.array(z.object({ text: z.string().max(28), note: z.string().max(80) })).min(2).max(4),
  /** Label on the bracket that loops from the last step back to the first. Empty hides the loop. */
  loopLabel: z.string().max(24),
  accent: zColor(),
  color: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "How the agent works",
  nodes: [
    { text: "Gather context", note: "Reads files, searches docs and asks tools for what it needs" },
    { text: "Take action", note: "Edits code and runs commands in a sandbox" },
    { text: "Verify work", note: "Runs the tests and compares output to the goal" },
  ],
  loopLabel: "repeat until done",
  accent: "#FF7A59",
  color: "#EDEDF0",
  background: "#1C1C1E",
  fontFamily: "Geist",
};
