const MARKS: Record<string, string[]> = {
  home: ["M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"],
  grid: ["M4 4h6.5v6.5H4z", "M13.5 4H20v6.5h-6.5z", "M4 13.5h6.5V20H4z", "M13.5 13.5H20V20h-6.5z"],
  swatch: ["M12 4a8 8 0 1 0 0 16", "M12 8a4 4 0 0 1 0 8", "M16.5 7.5h.01", "M17.5 12h.01", "M15.5 16h.01"],
  layout: ["M4 5h16v14H4z", "M4 9h16", "M9 9v10"],
  box: ["M4 8.5 12 4l8 4.5v7L12 20l-8-4.5z", "M12 11.5V20", "M4 8.5l8 4.5 8-4.5"],
  icons: ["M8.2 8.2a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0", "M14 5h5.5v5.5H14z", "M6.5 19 12 13.5 17.5 19"],
  play: ["M4 5h16v14H4z", "m10 9 5 3-5 3z"],
  bookmark: ["M7 4.5h10a1 1 0 0 1 1 1V20l-6-3.2L6 20V5.5a1 1 0 0 1 1-1z"],
  hero: ["M4 16 12 6l8 10", "M4 18h16"],
  shader: ["M5 16c2-6 4-6 7-2s5 4 7-2", "M5 20h14"],
  background: ["M4 6h16v12H4z", "M8 15c2-3 3-3 4 0s3 2 4-2"],
  features: ["M6 7h.01", "M6 12h.01", "M6 17h.01", "M10 7h8", "M10 12h8", "M10 17h5"],
  pricing: ["M7 6h10v12H7z", "M7 10h10", "M12 6v12"],
  testimonials: ["M6 7h9a2 2 0 0 1 2 2v4H8l-2 2z"],
  "ai-chat": ["M12 4.5 13.4 9 18 10.4 13.4 12 12 16.5 10.6 12 6 10.4 10.6 9z"],
  button: ["M5 9h14v6H5z"],
  card: ["M4 7h16v10H4z", "M4 11h16"],
  login: ["M10 7V5h8v14h-8v-2", "M4 12h10", "m11 9 3 3-3 3"],
  navigation: ["M4 7h16", "M4 12h16", "M4 17h10"],
  footer: ["M4 5h16v14H4z", "M4 15h16"],
  dashboard: ["M4 4h7v7H4z", "M13 4h7v4h-7z", "M13 10h7v10h-7z", "M4 13h7v7H4z"],
  text: ["M6 18 12 6l6 12", "M8.5 14h7"],
  cta: ["M5 12h12", "m13 7 5 5-5 5"],
  gallery: ["M4 6h6v6H4z", "M14 6h6v6h-6z", "M4 14h6v4H4z", "M14 14h6v4h-6z"],
  form: ["M6 5h12v14H6z", "M9 9h6", "M9 13h6", "M9 16h3"],
  "interface-general": ["M5 7h14", "M5 12h14", "M5 17h8"],
  arrows: ["M5 12h14", "m13 6 6 6-6 6"],
  "devices-signals": ["M8 4h8v16H8z", "M11 18h2"],
  typography: ["M6 18 12 6l6 12", "M8.2 14h7.6"],
  things: ["M12 4 19 8v8l-7 4-7-4V8z", "M12 12 5 8", "M12 12l7-4", "M12 12v8"],
  "folders-files": ["M4 7h6l2 2h8v9H4z"],
  "social-brands": ["M8 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5", "M16 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4", "M16 18.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4", "M10 10.5 14 8.5", "M10 13.5 14 16"],
  "shopping-payment": ["M6 8h12l-1 11H7z", "M9 8V7a3 3 0 0 1 6 0v1"],
  communication: ["M5 6h14v9H8l-3 3z"],
  "forms-shapes": ["M5 6h6v6H5z", "M15 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6"],
  code: ["m8 8-4 4 4 4", "m16 8 4 4-4 4"],
  "statistics-charts": ["M5 19V10", "M12 19V5", "M19 19v-7"],
  "photography-video": ["M4 8h11v9H4z", "m15 11 5-2v8l-5-2z"],
  location: ["M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10", "M12 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"],
  people: ["M12 12a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4", "M6 19.5a6 6 0 0 1 12 0"],
  security: ["M8 10V8a4 4 0 0 1 8 0v2", "M6 10h12v9H6z"],
  food: ["M6 4v7", "M9 4v7", "M7.5 11v9", "M14 4c2 3 2 6 0 8v8"],
  "sound-music": ["M9 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5", "M11.5 15.5V6l7-2v8", "M18.5 12a2 2 0 1 0 0-4"],
  "nature-energy": ["M12 20V10", "M12 14c-4-1-6-4-6-8 4 0 7 2 8 6", "M12 12c4-1 7-3 8-7-4 0-7 2-8 6"],
  "time-date": ["M12 7v5l3 2", "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16"],
  building: ["M5 20V6l7-3 7 3v14", "M9 20v-4h6v4", "M9 9h.01", "M12 9h.01", "M15 9h.01", "M9 13h.01", "M12 13h.01", "M15 13h.01"],
  emoji: ["M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16", "M9 10h.01", "M15 10h.01", "M8.5 14a4 4 0 0 0 7 0"],
  vehicles: ["M4 14h16v4H4z", "M6 14l2-5h8l2 5", "M7.5 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2", "M16.5 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2"],
  weather: ["M7 16a4 4 0 1 1 1-7.9A5 5 0 0 1 17 10a3.5 3.5 0 0 1 0 7z"],
  edit: ["M4 20h4L18 10l-4-4L4 16z", "M13 7l4 4"],
  "health-medical": ["M12 21s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10"],
  "furniture-household": ["M5 13h14v5H5z", "M7 13V8h10v5", "M7 18v2", "M17 18v2"],
  gaming: ["M7 15H5a3 3 0 0 1-3-3 6 6 0 0 1 6-6h8a6 6 0 0 1 6 6 3 3 0 0 1-3 3h-2", "M8 11v4", "M6 13h4", "M16 12h.01", "M18 14h.01"],
  sports: ["M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16", "M4.5 12h15", "M12 4c2 2.5 3 5 3 8s-1 5.5-3 8", "M12 4c-2 2.5-3 5-3 8s1 5.5 3 8"],
  hands: ["M8 11V6.5a1.5 1.5 0 0 1 3 0V11", "M11 10V5.5a1.5 1.5 0 0 1 3 0V11", "M14 10.5V7a1.5 1.5 0 0 1 3 0v7c0 3-2 6-6 6-3 0-5-2-5-5v-3a1.5 1.5 0 0 1 3 0"],
  "ai-magic": ["M12 3.5 13.5 9 19 10.5 13.5 12 12 17.5 10.5 12 5 10.5 10.5 9z", "M18 16.5 18.6 18.4 20.5 19 18.6 19.6 18 21.5 17.4 19.6 15.5 19 17.4 18.4z"],
  crypto: ["M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16", "M10 8h4a2 2 0 0 1 0 4h-4", "M10 12h4.5a2 2 0 0 1 0 4H10", "M12 6.5V8", "M12 16v1.5"],
  "filter-settings": ["M4 7h16", "M4 12h16", "M4 17h16", "M8 5.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8", "M15 10.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8", "M11 15.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8"],
  outline: ["M12 5.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13"],
  light: ["M12 5.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13"],
  bold: ["M12 5.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13"],
  thin: ["M12 5.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13"],
  element: ["M6 6h12v12H6z"],
  scene: ["M4 9h16v10H4z", "M4 9l2.2-3h3.2L7.2 9", "M9.2 9l2.2-3h3.2l-2.2 3", "M14.4 9l2.2-3H20L17.8 9"],
  transition: ["M4 8h7", "m8 5 3 3-3 3", "M20 16H13", "m16 13-3 3 3 3"],
  captions: ["M4 7h16v10H4z", "M7 12h6", "M7 15h4"],
  clouds: ["M7 17a4 4 0 1 1 .6-7.9A5 5 0 0 1 17 11a3.2 3.2 0 0 1-.2 6.4z"],
  keyboard: ["M3 7h18v10H3z", "M7 11h.01", "M11 11h.01", "M15 11h.01", "M8 15h8"],
  accessibility: ["M12 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3", "M5 9h14", "M12 9v5", "M12 14l-4 6", "M12 14l4 6"],
  "augmented-reality": ["M12 4 20 8v8l-8 4-8-4V8z", "M12 12 4 8", "M12 12l8-4", "M12 12v8"],
  "everyday-utilities": ["M14 7a4 4 0 0 0-5.7 5.7L4 17l3 3 4.3-4.3A4 4 0 0 0 14 7"],
  notes: ["M7 4h8l4 4v12H7z", "M15 4v4h4", "M10 12h6", "M10 16h4"],
  "personal-finance": ["M4 8h16v10H4z", "M4 12h16", "M8 16h3"],
  "files-and-sync": ["M7 7h7l3 3v8H7z", "M14 7v3h3", "M8 18l2 2 4-4"],
  "bookmarks-and-reading": ["M6 5h9a2 2 0 0 1 2 2v12l-4-2-4 2V7a2 2 0 0 1 2-2"],
  "camera-and-photos": ["M4 8h3l2-2h6l2 2h3v10H4z", "M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6"],
  "music-and-media": ["M9 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5", "M11.5 15.5V6l7-2v8"],
  "health-and-fitness": ["M4 13h4l2-5 3 9 2-4h5"],
  calendars: ["M5 6h14v13H5z", "M5 10h14", "M8 4v4", "M16 4v4"],
  "tasks-and-habits": ["M5 7h14", "M5 12h14", "M5 17h14", "M8 7l-1.5 1.5", "M8 12l-1.5 1.5"],
  messaging: ["M5 6h14v9H8l-3 3z"],
  learning: ["M3 8 12 4l9 4-9 4z", "M7 10.5V16c2 1.5 8 1.5 10 0v-5.5"],
  analytics: ["M4 19V5", "M4 19h16", "M8 15l3-4 3 2 4-6"],
  commerce: ["M6 8h12l-1 11H7z", "M9 8V7a3 3 0 0 1 6 0v1"],
  automation: ["M12 4v3", "M12 17v3", "M4 12h3", "M17 12h3", "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"],
  marketing: ["M4 11v2l10 4V7z", "M14 9.5a4 4 0 0 1 0 5"],
  "team-knowledge": ["M6 5h8a3 3 0 0 1 3 3v11H9a3 3 0 0 0-3 3z", "M6 5a3 3 0 0 0-3 3v11"],
  "project-management": ["M5 6h6v5H5z", "M13 6h6v3h-6z", "M13 12h6v6h-6z", "M5 14h6v4H5z"],
  "booking-and-scheduling": ["M5 6h14v13H5z", "M8 4v4", "M16 4v4", "M8 13h3"],
  "customer-support": ["M5 13a7 7 0 0 1 14 0", "M5 13v4h3v-4", "M16 13v4h3v-4"],
  crm: ["M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6", "M16 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5", "M3.5 18a4.5 4.5 0 0 1 9 0", "M14 18a3.5 3.5 0 0 1 6.5-1.5"],
  "team-messaging": ["M4 7h10v7H7l-3 2z", "M14 10h6v6h-3l-2 2v-2h-1z"],
  "forms-and-surveys": ["M7 4h10v16H7z", "M10 8h4", "M10 12h4", "M10 16h2"],
  "invoices-and-accounting": ["M7 3h10v18l-2-1.5L13 21l-2-1.5L9 21l-2-1.5L5 21V3z", "M9 8h6", "M9 12h6"],
  "people-and-hr": ["M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6", "M15.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5", "M4 19a5 5 0 0 1 10 0", "M14 19a4 4 0 0 1 6-2"],
};

const ALIAS: Record<string, string> = {
  personal: "people",
  business: "building",
  template: "layout",
  "overlay-fx": "ai-magic",
  animated: "ai-magic",
  video: "play",
};

const DOTS: Record<string, string> = {
  blue: "#60a5fa",
  violet: "#a78bfa",
  green: "#4ade80",
  orange: "#fb923c",
  red: "#f87171",
  pink: "#f472b6",
  yellow: "#facc15",
  neutral: "#a3a3a3",
};

const WEIGHT: Record<string, number> = {
  thin: 1,
  light: 1.25,
  bold: 2.6,
};

export function Mark({ name, className = "size-3.5 shrink-0" }: { name: string; className?: string }) {
  const dot = DOTS[name];
  if (dot) {
    return <span className={`${className} inline-block rounded-full`} style={{ background: dot, width: "0.7em", height: "0.7em" }} />;
  }
  if (name === "fill") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="5.5" fill="currentColor" />
      </svg>
    );
  }
  if (name === "duotone") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 5.5a6.5 6.5 0 0 0 0 13z" fill="currentColor" />
      </svg>
    );
  }
  const paths = MARKS[ALIAS[name] ?? name];
  if (!paths) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={WEIGHT[name] ?? 1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
