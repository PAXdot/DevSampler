// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Headline inside the drop zone. */
  zoneTitle: z.string().max(28),
  /** Accepted files line under the headline. Empty hides it. */
  zoneHint: z.string().max(40),
  /** The file the cursor carries in. */
  fileName: z.string().max(20),
  /** Its size, shown under the name. */
  fileSize: z.string().max(12),
  /** Status once the upload reaches 100%. */
  doneLabel: z.string().max(14),
  /** Text, dashed border and the cursor. */
  color: zColor(),
  /** Zone highlight, file icon, progress bar and the done check. */
  accent: zColor(),
  /** Card material. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  zoneTitle: "Drop files to upload",
  zoneHint: "ZIP, PNG or MP4 up to 2 GB",
  fileName: "brand-kit.zip",
  fileSize: "24.6 MB",
  doneLabel: "Uploaded",
  color: "#F4F4F5",
  accent: "#3D63FF",
  surfaceColor: "#09090B",
  background: "#09090B",
  fontFamily: "Geist",
};
