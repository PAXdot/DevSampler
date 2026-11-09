// Built with Remotion - https://remotion.pro/license
import type { z } from "zod";
import type { BlockModule } from "../compile/index";
import type { VideoMeta } from "../kit/spec";

export type BlockDef = {
  slug: string;
  name: string;
  schema: z.AnyZodObject;
  defaults: Record<string, unknown>;
  meta: VideoMeta;
};

export type BlockModules = Record<string, Omit<BlockModule, "defaults">>;
