import type { ShelfId } from "@/lib/shelves";
import type { Item } from "@/lib/types";
import type { MouseEvent } from "react";

type Layout = {
  grid: string;
  cell: string;
  aspect: string;
  reveal?: boolean;
  dense?: boolean;
  scroll?: boolean;
};

const wide = "grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3";

const LAYOUTS: Record<ShelfId, Layout> = {
  components: {
    grid: "-mx-1.5 grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    cell: "relative overflow-hidden p-1.5",
    aspect: "aspect-[4/3]",
    reveal: true,
  },
  themes: {
    grid: "grid grid-cols-1 gap-x-4 gap-y-6 min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    cell: "",
    aspect: "aspect-[1200/630]",
  },
  templates: { grid: wide, cell: "", aspect: "aspect-[16/10]", scroll: true },
  apps: { grid: wide, cell: "", aspect: "aspect-[16/10]", scroll: true },
  video: { grid: wide, cell: "", aspect: "aspect-video" },
  icons: {
    grid: "grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8",
    cell: "",
    aspect: "aspect-square",
    dense: true,
  },
};

const frame =
  "squircle relative w-full overflow-hidden rounded-[14px] bg-card shadow-[0_1px_3px_rgb(0_0_0/0.25)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.06)] group-focus-visible/open:outline-2 group-focus-visible/open:outline-offset-2 group-focus-visible/open:outline-primary";

const badge =
  "absolute top-2.5 left-2.5 z-[1] rounded-md bg-black/70 px-1.5 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm";

export function CardGrid({
  shelf,
  items,
  saved,
  onOpen,
  onToggleSave,
}: {
  shelf: ShelfId;
  items: Item[];
  saved: Set<string>;
  onOpen: (item: Item) => void;
  onToggleSave: (item: Item) => void;
}) {
  const layout = LAYOUTS[shelf];
  return (
    <ul className={layout.grid}>
      {items.map((item, index) => {
        const key = `${item.type}:${item.id}`;
        const isSaved = saved.has(key);
        const price = typeof item.price === "number" && item.price > 0 ? `$${item.price}` : null;
        const fit = layout.dense ? "object-contain p-[28%]" : layout.scroll ? "object-cover object-top" : "object-cover";
        return (
          <li key={key} className={`group/card list-none ${layout.cell}`}>
            <div
              className={`relative ${
                layout.reveal
                  ? "translate-y-[18px] transition-transform duration-300 ease-out-quint group-focus-within/card:translate-y-0 group-hover/card:translate-y-0 max-md:translate-y-0 [@media(hover:none)]:translate-y-0"
                  : ""
              }`}
            >
              <button
                type="button"
                aria-label={item.name}
                onClick={() => onOpen(item)}
                onMouseEnter={playPreview}
                onMouseLeave={stopPreview}
                className="group/open block w-full text-left outline-none after:absolute after:inset-0 after:content-['']"
              >
                <div className={`${frame} ${layout.aspect}`}>
                  {item.preview ? (
                    // Previews are local files with mixed formats, so they stay as plain img tags.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.preview}
                      alt=""
                      loading={index < 8 ? "eager" : "lazy"}
                      decoding="async"
                      className={`h-full w-full ${fit} ${
                        layout.scroll
                          ? "transition-[object-position] duration-[2400ms] ease-in-out group-hover/card:object-bottom motion-reduce:transition-none"
                          : ""
                      }`}
                    />
                  ) : (
                    <span className="flex h-full items-center justify-center px-4 text-center text-[15px] font-semibold tracking-[-0.02em] text-foreground/70">
                      {item.name}
                    </span>
                  )}
                  {item.videoUrl ? (
                    <video
                      src={item.videoUrl}
                      muted
                      loop
                      playsInline
                      preload="none"
                      className={`pointer-events-none absolute inset-0 h-full w-full opacity-0 transition-opacity duration-200 group-hover/card:opacity-100 ${fit}`}
                    />
                  ) : null}
                  {item.type === "app" && item.author ? <span className={badge}>{item.author}</span> : null}
                  {price ? <span className={badge}>{price}</span> : null}
                  {layout.reveal && isSaved ? (
                    <span className="absolute top-2.5 right-2.5 z-[1] flex size-6 items-center justify-center rounded-md bg-black/70 text-white backdrop-blur-sm">
                      <Bookmark filled className="size-3" />
                      <span className="sr-only">Saved</span>
                    </span>
                  ) : null}
                </div>
              </button>
              {layout.dense ? (
                <>
                  <p className="mt-2 truncate px-0.5 text-[12px] text-muted">{item.name}</p>
                  <SaveButton
                    item={item}
                    saved={isSaved}
                    onToggle={onToggleSave}
                    className={`absolute top-1.5 right-1.5 bg-black/60 backdrop-blur-sm ${
                      isSaved ? "" : "opacity-0 group-focus-within/card:opacity-100 group-hover/card:opacity-100 [@media(hover:none)]:opacity-100"
                    }`}
                  />
                </>
              ) : (
                <div
                  className={`flex w-full items-center gap-2 px-1 pt-3 ${
                    layout.reveal
                      ? "translate-y-[30px] transition-transform duration-300 ease-out-quint group-focus-within/card:translate-y-0 group-hover/card:translate-y-0 max-md:translate-y-0 [@media(hover:none)]:translate-y-0"
                      : ""
                  }`}
                >
                  <Lead item={item} />
                  <h3 className="min-w-0 truncate text-[13px] leading-[18px] font-medium text-foreground/85">{item.name}</h3>
                  {item.type === "video" && item.author ? (
                    <span className="shrink-0 text-[11px] text-muted capitalize">{item.author}</span>
                  ) : item.type === "app" && item.meta ? (
                    <span className="shrink-0 text-[11px] text-muted">{item.meta}</span>
                  ) : null}
                  <SaveButton item={item} saved={isSaved} onToggle={onToggleSave} className="-my-1.5 -mr-1.5 ml-auto" />
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function CardGridSkeleton({ shelf }: { shelf: ShelfId }) {
  const layout = LAYOUTS[shelf];
  return (
    <ul className={layout.grid} aria-hidden="true">
      {Array.from({ length: layout.dense ? 24 : 8 }, (_, index) => (
        <li key={index} className={`list-none ${layout.cell}`}>
          <div
            className={`squircle animate-pulse rounded-[14px] bg-foreground/[0.05] ${layout.aspect} ${
              layout.reveal ? "translate-y-[18px] max-md:translate-y-0 [@media(hover:none)]:translate-y-0" : ""
            }`}
          />
          {layout.reveal ? (
            <div className="h-[30px]" />
          ) : layout.dense ? (
            <div className="mt-2 h-[18px]" />
          ) : (
            <div className="flex items-center gap-2 px-1 pt-3">
              <span className="size-[18px] rounded-[30%] bg-foreground/[0.06]" />
              <span className="h-2.5 w-1/2 rounded-full bg-foreground/[0.06]" />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function Lead({ item }: { item: Item }) {
  if (item.type === "theme") {
    return item.swatch ? (
      <span
        className="size-2.5 shrink-0 rounded-full shadow-[inset_0_0_0_1px_rgb(255_255_255/0.15)]"
        style={{ background: item.swatch }}
      />
    ) : null;
  }
  if (item.type === "video") return null;
  const label = item.type === "app" ? item.name : item.author;
  if (!label) return null;
  return <Monogram label={label} />;
}

export function Monogram({ label, size = 18 }: { label: string; size?: number }) {
  let hash = 0;
  for (const char of label) hash = (hash * 31 + char.charCodeAt(0)) % 360;
  return (
    <span
      title={label}
      aria-hidden="true"
      className="squircle flex shrink-0 items-center justify-center rounded-[30%] font-semibold text-white uppercase shadow-[0_0.5px_1px_rgb(0_0_0/0.25)]"
      style={{
        width: size,
        height: size,
        fontSize: Math.round(size * 0.5),
        background: `oklch(0.46 0.09 ${hash})`,
      }}
    >
      {label.replace(/^[^a-z0-9]+/i, "").charAt(0) || "?"}
    </span>
  );
}

function SaveButton({
  item,
  saved,
  onToggle,
  className,
}: {
  item: Item;
  saved: boolean;
  onToggle: (item: Item) => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={saved ? `Unsave ${item.name}` : `Save ${item.name}`}
      title={saved ? "Saved" : "Save"}
      onClick={() => onToggle(item)}
      className={`relative z-[2] flex size-7 shrink-0 items-center justify-center rounded-md transition-[color,background-color,opacity,scale] outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-90 ${
        saved ? "text-foreground" : "text-muted hover:bg-foreground/[0.08] hover:text-foreground"
      } ${className ?? ""}`}
    >
      <Bookmark filled={saved} className="size-3.5" />
    </button>
  );
}

export function Bookmark({ filled, className }: { filled?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}

function playPreview(event: MouseEvent<HTMLButtonElement>) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const video = event.currentTarget.querySelector("video");
  if (!video) return;
  video.play().catch(() => {});
}

function stopPreview(event: MouseEvent<HTMLButtonElement>) {
  const video = event.currentTarget.querySelector("video");
  if (!video) return;
  video.pause();
  video.currentTime = 0;
}
