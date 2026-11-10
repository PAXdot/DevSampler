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
  { id: "login", label: "Sign in", query: "sign in" },
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

export const ICON_STYLES = [
  { id: "outline", label: "Outline" },
  { id: "fill", label: "Fill" },
  { id: "duotone", label: "Duotone" },
  { id: "light", label: "Light" },
  { id: "bold", label: "Bold" },
  { id: "thin", label: "Thin" },
] as const;

export const ICON_SETS = [
  { id: "phosphor", label: "Phosphor", author: "Phosphor Icons" },
  { id: "tabler", label: "Tabler", author: "Paweł Kuna" },
  { id: "hugeicons", label: "Hugeicons", author: "Hugeicons Pro" },
  { id: "remix-icon", label: "Remix", author: "Remix Design" },
  { id: "lucide", label: "Lucide", author: "Lucide" },
  { id: "heroicons", label: "Heroicons", author: "Tailwind Labs" },
  { id: "line-md", label: "Material Line", author: "Vjacheslav Trushkin" },
  { id: "animateicons-lucide", label: "AnimateIcons / Lucide", author: "Avijit Dey" },
  { id: "lucide-animated", label: "Lucide Animated", author: "dmytro" },
  { id: "heroicons-animated", label: "Heroicons Animated", author: "Aniket Pawar" },
  { id: "animateicons-hugeicons", label: "AnimateIcons / Hugeicons", author: "Avijit Dey" },
] as const;

export const ICON_CATEGORIES = [
  { id: "interface-general", label: "Interface General" },
  { id: "arrows", label: "Arrows" },
  { id: "devices-signals", label: "Devices & Signals" },
  { id: "typography", label: "Typography" },
  { id: "things", label: "Things" },
  { id: "folders-files", label: "Folders & Files" },
  { id: "social-brands", label: "Social Media & Brands" },
  { id: "shopping-payment", label: "Shopping & Payment" },
  { id: "communication", label: "Communication" },
  { id: "forms-shapes", label: "Forms & Shapes" },
  { id: "layout", label: "Layout" },
  { id: "code", label: "Code" },
  { id: "statistics-charts", label: "Statistics & Charts" },
  { id: "photography-video", label: "Photography & Video" },
  { id: "location", label: "Location" },
  { id: "people", label: "People" },
  { id: "security", label: "Security" },
  { id: "food", label: "Food" },
  { id: "sound-music", label: "Sound & Music" },
  { id: "nature-energy", label: "Nature & Energy" },
  { id: "time-date", label: "Time & Date" },
  { id: "building", label: "Building" },
  { id: "emoji", label: "Emoji" },
  { id: "vehicles", label: "Vehicles & Aircrafts" },
  { id: "weather", label: "Weather" },
  { id: "edit", label: "Edit" },
  { id: "health-medical", label: "Health & Medical" },
  { id: "furniture-household", label: "Furniture & Household" },
  { id: "gaming", label: "Gaming" },
  { id: "sports", label: "Sports" },
  { id: "hands", label: "Hands" },
  { id: "ai-magic", label: "AI & Magic" },
  { id: "crypto", label: "Crypto" },
  { id: "filter-settings", label: "Filter & Settings" },
  { id: "clouds", label: "Clouds" },
  { id: "keyboard", label: "Keyboard" },
  { id: "accessibility", label: "Accessibility" },
  { id: "augmented-reality", label: "Augmented Reality" },
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
    lede: "Personal apps and business software, each filed in its own subsection.",
    placeholder: "Search apps",
  },
  icons: {
    eyebrow: "Icons",
    title: "Icons",
    lede: "Phosphor, Tabler, Hugeicons, Remix, Lucide, Heroicons and the animated sets, filed by category and maker.",
    placeholder: "Search icons",
  },
  video: {
    eyebrow: "Video",
    title: "Video",
    lede: "Local video blocks. Filter by kind, job and aspect.",
    placeholder: "Search video blocks",
  },
};
