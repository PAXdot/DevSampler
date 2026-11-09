const images = [
  {
    id: 1,
    caption: "Dashboard overview",
    sub: "Primary workspace with real-time metrics",
    style: {
      background:
        "linear-gradient(160deg, oklch(0.74 0.10 250), oklch(0.58 0.14 265))",
    },
  },
  {
    id: 2,
    caption: "Component explorer",
    sub: "Browse and preview every UI primitive",
    style: {
      background:
        "linear-gradient(160deg, oklch(0.70 0.11 195), oklch(0.54 0.15 210))",
    },
  },
  {
    id: 3,
    caption: "Deployment pipeline",
    sub: "Track builds from push to production",
    style: {
      background:
        "linear-gradient(160deg, oklch(0.72 0.10 285), oklch(0.56 0.14 300))",
    },
  },
  {
    id: 4,
    caption: "Analytics board",
    sub: "Session, retention, and conversion at a glance",
    style: {
      background:
        "linear-gradient(160deg, oklch(0.70 0.09 155), oklch(0.54 0.12 170))",
    },
  },
  {
    id: 5,
    caption: "User settings",
    sub: "Account, billing, and team management",
    style: {
      background:
        "linear-gradient(160deg, oklch(0.72 0.11 35), oklch(0.56 0.15 50))",
    },
  },
  {
    id: 6,
    caption: "Notification centre",
    sub: "Grouped alerts with one-click resolve",
    style: {
      background:
        "linear-gradient(160deg, oklch(0.70 0.10 325), oklch(0.54 0.14 340))",
    },
  },
];

export default function Gallery02() {
  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-(--breakpoint-xl) px-6 sm:px-10">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Showcase
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Every screen, considered.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground sm:text-right">
            Six interfaces. Zero clutter.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {images.map((img) => (
            <figure key={img.id} className="group flex flex-col gap-3">
              <div
                className="aspect-video w-full overflow-hidden rounded-2xl border border-border transition-transform duration-300 group-hover:scale-[1.01]"
                style={img.style}
                role="img"
                aria-label={img.caption}
              />
              <figcaption className="px-1">
                <p className="text-sm font-medium text-foreground">
                  {img.caption}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {img.sub}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
