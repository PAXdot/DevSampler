export type ItemType =
  | "component"
  | "theme"
  | "template"
  | "video"
  | "icon"
  | "logo"
  | "app";

export type Item = {
  id: string;
  type: ItemType;
  name: string;
  description?: string;
  author?: string;
  preview?: string;
  /** Grid-sized still. Same picture as `preview`, fewer bytes. */
  thumb?: string;
  /** Drawer-sized still. Same picture as `preview`, fewer bytes. */
  still?: string;
  videoUrl?: string;
  /** Card-sized silent loop. The drawer keeps `videoUrl`. */
  clip?: string;
  url?: string;
  install?: string;
  repo?: string;
  price?: number;
  meta?: string;
  license?: string;
  swatch?: string;
  about?: string;
  demo?: string;
  tags?: string[];
  svg?: string;
};

export const ITEM_TYPES: ItemType[] = [
  "component",
  "theme",
  "template",
  "video",
  "icon",
  "logo",
  "app",
];
