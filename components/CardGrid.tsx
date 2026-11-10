import type { ShelfId } from "@/lib/shelves";
import type { Item } from "@/lib/types";
import { useEffect, useRef, type MouseEvent } from "react";

type Layout = {
  grid: string;
  cell: string;
  aspect: string;
  reveal?: boolean;
  dense?: boolean;
  scroll?: boolean;
};

const board = "grid grid-cols-[repeat(auto-fill,minmax(188px,1fr))] gap-3";

const LAYOUTS: Record<ShelfId, Layout> = {
  components: { grid: board, cell: "", aspect: "aspect-[16/10]" },
  themes: { grid: board, cell: "", aspect: "aspect-[16/10]" },
  templates: { grid: board, cell: "", aspect: "aspect-[16/10]", scroll: true },
  apps: { grid: board, cell: "", aspect: "aspect-[16/10]", scroll: true },
  video: { grid: board, cell: "", aspect: "aspect-video" },
  icons: {
    grid: "grid grid-cols-[repeat(auto-fill,minmax(84px,1fr))] gap-x-2 gap-y-3",
    cell: "min-w-0",
    aspect: "aspect-square",
    dense: true,
  },
};

const frame =
  "relative w-full overflow-hidden rounded-xl bg-[#161616] group-focus-visible/open:outline-2 group-focus-visible/open:outline-offset-2 group-focus-visible/open:outline-white";

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
    <ul className={layout.dense ? "icon-board" : layout.grid}>
      {items.map((item, index) => {
        const key = `${item.type}:${item.id}`;
        const isSaved = saved.has(key);
        const price = typeof item.price === "number" && item.price > 0 ? `$${item.price}` : null;
        const fit = layout.dense ? "object-contain p-[28%]" : layout.scroll ? "object-cover object-top" : "object-cover";
        return (
          <li key={key} className={`group/card relative list-none ${layout.cell}`}>
            <div className="relative w-full">
              <button
                type="button"
                aria-label={item.name}
                onClick={() => onOpen(item)}
                onMouseEnter={playPreview}
                onMouseLeave={stopPreview}
                className="group/open relative block w-full text-left outline-none"
              >
                <div className={layout.dense ? "icon-cell" : `${frame} ${layout.aspect}`}>
                  {item.type === "icon" && item.svg ? (
                    <span dangerouslySetInnerHTML={{ __html: item.svg }} />
                  ) : item.preview ? (
                    // Previews are local files with mixed formats, so they stay as plain img tags.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.thumb || item.preview}
                      alt=""
                      loading={index < 8 ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={index < 4 ? "high" : "auto"}
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
                  {item.videoUrl ? <PreviewVideo src={item.clip || item.videoUrl} className={fit} /> : null}
                  {item.type === "app" && item.author ? <span className={badge}>{item.author}</span> : null}
                  {price ? <span className={badge}>{price}</span> : null}
                  {isSaved && !layout.dense ? (
                    <span className="absolute top-2 right-2 z-[1] flex size-6 items-center justify-center rounded-md bg-black/70 text-white">
                      <Bookmark filled className="size-3" />
                      <span className="sr-only">Saved</span>
                    </span>
                  ) : null}
                </div>
              </button>
              {layout.dense ? (
                <>
                  <p className="mt-2 truncate px-0.5 text-xs text-muted">{item.name}</p>
                  {item.author ? <p className="truncate px-0.5 text-[11px] text-white/35">{item.author}</p> : null}
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
                <SaveButton
                  item={item}
                  saved={isSaved}
                  onToggle={onToggleSave}
                  className={`absolute top-1.5 right-1.5 z-[2] bg-black/55 ${
                    isSaved ? "" : "opacity-0 group-focus-within/card:opacity-100 group-hover/card:opacity-100 [@media(hover:none)]:opacity-100"
                  }`}
                />
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
          <div className={`animate-pulse rounded-xl bg-white/[0.05] ${layout.aspect}`} />
          {layout.dense ? <div className="mt-2 h-[18px]" /> : null}
        </li>
      ))}
    </ul>
  );
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

function PreviewVideo({ src, className }: { src: string; className: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const hoverNone = window.matchMedia("(hover: none)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hoverNone || reduce) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) void startVideo(video);
        else stopVideo(video);
      },
      { rootMargin: "120px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-0 motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover/card:opacity-100 motion-safe:data-[playing=true]:opacity-100 ${className}`}
    />
  );
}

function playPreview(event: MouseEvent<HTMLButtonElement>) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(hover: none)").matches) return;
  const video = event.currentTarget.querySelector("video");
  if (!video) return;
  void startVideo(video);
}

function stopPreview(event: MouseEvent<HTMLButtonElement>) {
  if (window.matchMedia("(hover: none)").matches) return;
  const video = event.currentTarget.querySelector("video");
  if (!video) return;
  stopVideo(video);
}

function startVideo(video: HTMLVideoElement) {
  video
    .play()
    .then(() => {
      if (!video.paused) video.dataset.playing = "true";
    })
    .catch(() => {
      delete video.dataset.playing;
    });
}

function stopVideo(video: HTMLVideoElement) {
  video.pause();
  video.currentTime = 0;
  delete video.dataset.playing;
}
