// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Small line above the track (hidden in 9:16). Empty hides it. */
  label: z.string().max(16),
  /** Track title. */
  title: z.string().max(24),
  /** Artist under the title. */
  artist: z.string().max(24),
  /** Time played, "m:ss". Also sets how full the progress bar is. */
  elapsed: z.string().max(6),
  /** Track length, "m:ss". */
  duration: z.string().max(6),
  /** Text, the glass tint on light brands and the play button. */
  color: zColor(),
  /** First light blob, the cover and the playing bars. */
  accent: zColor(),
  /** Second light blob and the cover. */
  secondary: zColor(),
  /** Glass tint on dark brands is the text color; on light brands this surface. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  label: "Now playing",
  title: "Midnight Drive",
  artist: "Nova Lines",
  elapsed: "1:24",
  duration: "3:41",
  color: "#F4F4F5",
  accent: "#3D63FF",
  secondary: "#A1A1AA",
  surfaceColor: "#09090B",
  background: "#09090B",
  fontFamily: "Geist",
};
