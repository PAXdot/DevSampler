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
  videoUrl?: string;
  url?: string;
  install?: string;
  repo?: string;
  price?: number;
  meta?: string;
  license?: string;
  swatch?: string;
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
