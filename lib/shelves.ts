export type ShelfId =
  | "components"
  | "templates"
  | "themes"
  | "apps"
  | "icons"
  | "video";

export const SHELVES: { id: ShelfId; href: string; label: string }[] = [
  { id: "components", href: "/", label: "Components" },
  { id: "templates", href: "/templates", label: "Templates" },
  { id: "themes", href: "/themes", label: "Themes" },
  { id: "apps", href: "/apps", label: "Apps" },
  { id: "icons", href: "/icons", label: "Icons" },
  { id: "video", href: "/video", label: "Video" },
];

export type Counts = {
  shelves: Partial<Record<ShelfId, number>>;
  categories: Record<string, number>;
};

const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });

export function formatCount(value: number | undefined): string | null {
  return typeof value === "number" ? compact.format(value) : null;
}

export const COMPONENT_CATEGORIES = [
  { id: "all", label: "All", query: "" },
  { id: "hero", label: "Heroes", query: "hero" },
  { id: "shader", label: "Shaders", query: "shader" },
  { id: "background", label: "Backgrounds", query: "background" },
  { id: "features", label: "Features", query: "features" },
  { id: "pricing", label: "Pricing", query: "pricing" },
  { id: "testimonials", label: "Testimonials", query: "testimonials" },
  { id: "ai-chat", label: "AI chats", query: "ai chat" },
  { id: "button", label: "Buttons", query: "button" },
  { id: "card", label: "Cards", query: "card" },
  { id: "login", label: "Sign-in", query: "sign in" },
  { id: "navigation", label: "Navigation", query: "navigation" },
  { id: "footer", label: "Footers", query: "footer" },
  { id: "dashboard", label: "Dashboards", query: "dashboard" },
  { id: "text", label: "Text", query: "text animation" },
  { id: "cta", label: "CTAs", query: "call to action" },
  { id: "gallery", label: "Galleries", query: "gallery" },
  { id: "form", label: "Forms", query: "form" },
  { id: "video", label: "Videos", query: "video player" },
] as const;

export const COMPONENT_SEEDS = [
  "hero",
  "shader",
  "background",
  "features",
  "pricing",
  "button",
  "card",
  "form",
];

export const THEME_SORTS = [
  { id: "recommended", label: "Recommended" },
  { id: "popular", label: "Popular" },
  { id: "newest", label: "Newest" },
] as const;

export const THEME_COLORS = [
  "blue",
  "violet",
  "green",
  "orange",
  "red",
  "pink",
  "yellow",
  "neutral",
] as const;

export const TEMPLATE_SORTS = [
  { id: "recommended", label: "Recommended" },
  { id: "date", label: "Newest" },
  { id: "price", label: "Price" },
] as const;

export const ICON_FAMILIES = [
  { id: "all", label: "All", prefixes: "lucide,tabler,ph,hugeicons,ri,heroicons,line-md" },
  { id: "lucide", label: "Lucide", prefixes: "lucide" },
  { id: "tabler", label: "Tabler", prefixes: "tabler" },
  { id: "phosphor", label: "Phosphor", prefixes: "ph" },
  { id: "hugeicons", label: "Hugeicons", prefixes: "hugeicons" },
  { id: "remix", label: "Remix", prefixes: "ri" },
  { id: "heroicons", label: "Heroicons", prefixes: "heroicons" },
  { id: "line-md", label: "Material Line", prefixes: "line-md" },
] as const;

export const VIDEO_KINDS = [
  "element",
  "scene",
  "background",
  "transition",
  "captions",
  "overlay-fx",
  "template",
] as const;

export const VIDEO_JOBS = [
  "titles",
  "product-ui",
  "devices",
  "code",
  "process",
  "data",
  "logos",
  "gallery",
  "testimonials",
  "cta",
  "backgrounds",
  "cursors",
] as const;

export const VIDEO_ASPECTS = ["16:9", "9:16", "1:1"] as const;

export const SHELF_COPY: Record<
  ShelfId,
  { eyebrow: string; title: string; lede: string; placeholder: string }
> = {
  components: {
    eyebrow: "Components",
    title: "The library",
    lede: "Local React components. Open one to copy its prompt and source files.",
    placeholder: "Search components",
  },
  templates: {
    eyebrow: "Templates",
    title: "Templates",
    lede: "Local site and app starting points.",
    placeholder: "Search templates",
  },
  themes: {
    eyebrow: "Themes",
    title: "Themes",
    lede: "Local shadcn themes. Open one to copy its CSS.",
    placeholder: "Search themes",
  },
  apps: {
    eyebrow: "Apps",
    title: "Apps",
    lede: "Open-source apps saved locally. Repository links stay on GitHub.",
    placeholder: "Search apps",
  },
  icons: {
    eyebrow: "Icons",
    title: "Icons",
    lede: "Lucide, Tabler, Phosphor, Hugeicons, Remix, Heroicons and line icons, searched by meaning.",
    placeholder: "Search icons",
  },
  video: {
    eyebrow: "Video",
    title: "Video",
    lede: "Local video blocks. Filter by kind, job and aspect.",
    placeholder: "Search video blocks",
  },
};
