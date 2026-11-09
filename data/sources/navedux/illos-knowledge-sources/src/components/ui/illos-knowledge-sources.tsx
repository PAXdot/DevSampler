"use client";

// Knowledge sources for an AI assistant: a live document count, and a list of sources to connect, sync and reconnect.
// The illustration is RAG answer (Shader) from Illos (https://illos.dev).
// It loops while it is on screen, pauses off screen, and stays still for prefers-reduced-motion.
//
// License
// The component code in this file (layout, props, play logic) is free to use, change and share under the MIT license.
// The illustration inside it (the SVG markup and its animation) is not covered by MIT. It belongs to Illos and is
// licensed under the Illos free license, https://illos.dev/license: you can use it in personal and commercial work,
// including client projects, with no credit needed, and you may modify it. Not allowed: redistributing or selling it
// as an asset (packs, illustration or icon sites, or other libraries), or using it to build a competing illustration
// library.
import { useEffect, useRef, useState, type CSSProperties } from "react";

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

export type KnowledgeSourceKind = "web" | "docs" | "inbox" | "drive" | "wiki";
export type KnowledgeSource = {
  id: string;
  name: string;
  /** One short line on what the source holds. */
  detail: string;
  kind: KnowledgeSourceKind;
  status: "connected" | "disconnected" | "error";
  documents?: number;
  /** Minutes since the last sync, for connected sources. */
  syncedMinutesAgo?: number;
  /** Shown in place of the detail when the status is "error". */
  error?: string;
};

export type IllosKnowledgeSourcesProps = {
  eyebrow?: string;
  sources?: KnowledgeSource[];
  /** Connects (when needed) and syncs one source, and resolves with its document count. The default waits a moment. */
  onSync?: (source: KnowledgeSource) => Promise<number | void>;
  className?: string;
};

const DEFAULT_SOURCES: KnowledgeSource[] = [
  { id: "help", name: "Help center", detail: "Public articles and guides", kind: "web", status: "connected", documents: 1204, syncedMinutesAgo: 2 },
  { id: "docs", name: "Product docs", detail: "Reference pages and changelog", kind: "docs", status: "connected", documents: 386, syncedMinutesAgo: 58 },
  { id: "inbox", name: "Support inbox", detail: "Resolved tickets", kind: "inbox", status: "error", documents: 9310, error: "Access expired. Reconnect to keep it current." },
  { id: "drive", name: "Shared drive", detail: "PDFs, slides and spreadsheets", kind: "drive", status: "disconnected" },
  { id: "wiki", name: "Team wiki", detail: "Runbooks and internal notes", kind: "wiki", status: "disconnected" },
];

const fakeSync = (s: KnowledgeSource) =>
  new Promise<number>((done) => setTimeout(() => done(s.documents ?? 120 + ((s.name.length * 211) % 900)), s.status === "connected" ? 1800 : 2600));

type Row = KnowledgeSource & { syncedAt?: number; busy?: { connecting: boolean } };

const count = new Intl.NumberFormat("en-US");
const ago = (at: number | undefined, now: number) => {
  if (at === undefined) return "";
  const m = Math.floor((now - at) / 60000);
  return m < 1 ? "just now" : m < 60 ? `${m} min ago` : `${Math.floor(m / 60)} h ago`;
};

export function IllosKnowledgeSources({ eyebrow = "Assistant knowledge", sources = DEFAULT_SOURCES, onSync = fakeSync, className }: IllosKnowledgeSourcesProps) {
  const [rows, setRows] = useState<Row[]>(() =>
    sources.map((s) => ({ ...s, syncedAt: s.syncedMinutesAgo === undefined ? undefined : Date.now() - s.syncedMinutesAgo * 60000 })),
  );
  const [now, setNow] = useState(() => Date.now());
  const [said, setSaid] = useState("");
  const syncing = rows.some((r) => r.busy);
  useEffect(() => {
    const t = window.setInterval(() => setNow(Date.now()), 30000); // keeps "x min ago" current
    return () => clearInterval(t);
  }, []);

  const patch = (id: string, change: Partial<Row>) => setRows((all) => all.map((r) => (r.id === id ? { ...r, ...change } : r)));

  const sync = async (row: Row) => {
    if (row.busy) return;
    patch(row.id, { busy: { connecting: row.status !== "connected" } });
    try {
      const documents = await onSync(row);
      patch(row.id, { busy: undefined, status: "connected", error: undefined, syncedAt: Date.now(), documents: documents ?? row.documents });
      setNow(Date.now());
      setSaid(`${row.name} is up to date.`);
    } catch {
      patch(row.id, { busy: undefined, status: "error", error: "Sync failed. Try again in a minute." });
      setSaid(`${row.name} could not sync.`);
    }
  };

  const live = rows.filter((r) => r.status === "connected" || (r.status === "error" && r.documents));
  const total = live.reduce((n, r) => n + (r.documents ?? 0), 0);
  const connected = rows.filter((r) => r.status === "connected").length;
  const last = Math.max(...rows.map((r) => r.syncedAt ?? 0));

  return (
    <div
      className={cx(
        "w-full max-w-4xl rounded-[18px] bg-card p-1.5 text-card-foreground",
        "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_8%,transparent),0_1px_2px_rgb(0_0_0/0.04),0_24px_48px_-24px_rgb(0_0_0/0.16)] dark:shadow-[0_0_0_1px_var(--color-border)]",
        "[--tone:#1daf9c] [--haze:30%] dark:[--haze:20%] [--danger:var(--color-destructive,oklch(0.577_0.245_27.325))] dark:[--danger:var(--color-destructive,oklch(0.704_0.191_22.216))]",
        // The illustration's colour roles: surfaces from the theme, the teal ramp for its bars and marks.
        "[--illos-ground:var(--color-card)] [--illos-ink:var(--color-card-foreground)] [--illos-mark:#178c7d] [--illos-spark:#0b463e]",
        "[--illos-ramp-1:#16645a] [--illos-ramp-2:#1daf9c] [--illos-ramp-3:#3fdec9] [--illos-ramp-4:#c2f5ee]",
        "dark:[--illos-mark:#3fdec9] dark:[--illos-spark:#ffffff] dark:[--illos-ramp-1:#84ebdd] dark:[--illos-ramp-2:#3fdec9] dark:[--illos-ramp-3:#1daf9c] dark:[--illos-ramp-4:#1a7569]",
        className,
      )}
    >
      <div className="relative isolate grid overflow-hidden rounded-[12px] md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]" style={{ backgroundImage: WELL }}>
        <div className="order-last flex flex-col justify-between gap-6 p-5 sm:p-7 md:order-first md:pr-0">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">{eyebrow}</span>
            <h2 className="flex flex-col gap-0.5 text-balance">
              <span className="text-4xl font-semibold tracking-tight tabular-nums">{count.format(total)}</span>
              <span className="text-base font-medium">documents to answer from</span>
            </h2>
            <p className="max-w-[34ch] text-sm leading-relaxed text-pretty text-muted-foreground">
              {connected} of {rows.length} sources connected{last ? `, last synced ${ago(last, now)}` : ""}. Connect more to cover more questions.
            </p>
          </div>
          <button
            type="button"
            onClick={() => rows.filter((r) => r.status === "connected").forEach(sync)}
            className="inline-flex h-9 w-fit items-center gap-2 rounded-[8px] bg-background px-3.5 relative before:absolute before:inset-x-0 before:-inset-y-1 text-sm font-medium text-foreground shadow-[0_0_0_1px_var(--color-border),0_1px_2px_rgb(0_0_0/0.05)] transition-[background-color,scale] duration-150 ease-out hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-[0.97]"
          >
            <SyncIcon spinning={syncing} />
            Sync all
          </button>
        </div>
        <ShaderArt svg={RAG_SVG} className="self-center [mask-image:linear-gradient(to_bottom,#000_82%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,#000_6%)]" />
      </div>

      <ul className="flex flex-col gap-1 p-2 pt-3 sm:p-3">
        {rows.map((r) => {
          return (
            <li key={r.id} className="flex items-center gap-3.5 rounded-[10px] px-2 py-2.5 sm:px-3">
              <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-muted text-foreground">
                <KindIcon kind={r.kind} />
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="flex items-center gap-2 text-sm font-medium">
                  <span className="truncate">{r.name}</span>
                  {r.status === "connected" && !r.busy && <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-[var(--tone)]" />}
                </span>
                {r.busy ? (
                  <div className="flex items-center gap-2.5">
                    {/* The real progress is unknown, so the bar only shows that work is under way: it eases most of the way
                        across, and the row turns to its synced state when the work really ends. */}
                    <div role="progressbar" aria-label={`${r.busy.connecting ? "Connecting" : "Syncing"} ${r.name}`} className="h-1 w-full max-w-48 overflow-hidden rounded-full bg-[color-mix(in_oklab,var(--color-foreground)_8%,transparent)]">
                      <div className="h-full origin-left rounded-full bg-[var(--tone)] [scale:0.9_1] transition-[scale] duration-[2400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none starting:[scale:0_1]" />
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground">{r.busy.connecting ? "Connecting…" : "Syncing…"}</span>
                  </div>
                ) : r.status === "error" ? (
                  <span className="flex items-start gap-1.5 text-xs leading-4 text-pretty text-[var(--danger)]">
                    <AlertIcon />
                    {r.error}
                  </span>
                ) : (
                  <span className="text-xs leading-4 text-pretty text-muted-foreground">
                    {r.status === "connected" ? `${count.format(r.documents ?? 0)} documents, synced ${ago(r.syncedAt, now)}` : r.detail}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => sync(r)}
                aria-disabled={r.busy ? true : undefined}
                aria-label={r.status === "connected" ? `Sync ${r.name}` : undefined}
                className={cx(
                  "inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-[8px] px-3 relative before:absolute before:inset-x-0 before:-inset-y-1.5 text-[13px] font-medium transition-[background-color,scale,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-[0.97] aria-disabled:pointer-events-none aria-disabled:opacity-50",
                  // One primary at a time: the source that needs fixing. Connecting more is the quieter offer.
                  r.status === "connected"
                    ? "text-muted-foreground hover:bg-muted hover:text-foreground"
                    : r.status === "error"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-background text-foreground shadow-[0_0_0_1px_var(--color-border),0_1px_2px_rgb(0_0_0/0.05)] hover:bg-muted",
                )}
              >
                {r.status === "connected" ? (
                  <>
                    <SyncIcon spinning={!!r.busy} />
                    <span className="hidden sm:inline">Sync</span>
                  </>
                ) : r.status === "error" ? (
                  "Reconnect"
                ) : (
                  "Connect"
                )}
              </button>
            </li>
          );
        })}
      </ul>
      <p aria-live="polite" className="sr-only">
        {said}
      </p>
    </div>
  );
}

export default IllosKnowledgeSources;

const icon = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;
const KIND_PATHS: Record<KnowledgeSourceKind, string> = {
  web: "M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM3.5 12h17M12 3.5c2.3 2.4 3.4 5.2 3.4 8.5s-1.1 6.1-3.4 8.5c-2.3-2.4-3.4-5.2-3.4-8.5S9.7 5.9 12 3.5Z",
  docs: "M5.5 18.5v-13a2 2 0 0 1 2-2h11v15h-11a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h11M9.5 8h5",
  inbox: "M3.5 13.5 6 5.5h12l2.5 8v5h-17v-5ZM3.5 13.5H8l1.5 2.5h5l1.5-2.5h4.5",
  drive: "M3.5 7.5a2 2 0 0 1 2-2h3.8l2 2.5h7.2a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-10Z",
  wiki: "M6.5 3.5h7.5l4 4v13h-11.5v-17ZM13.5 3.5v4.5h4.5M9.5 12.5h5M9.5 16h5",
};
const KindIcon = ({ kind }: { kind: KnowledgeSourceKind }) => (
  <svg {...icon} className="size-[18px]">
    <path d={KIND_PATHS[kind]} />
  </svg>
);
const SyncIcon = ({ spinning }: { spinning?: boolean }) => (
  <svg {...icon} strokeWidth={1.8} className={cx("size-4", spinning && "animate-spin motion-reduce:animate-none")}>
    <path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3M19.5 4.5v4h-4" />
  </svg>
);
const AlertIcon = () => (
  <svg {...icon} strokeWidth={1.8} className="size-3.5 shrink-0">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5v5.5M12 16.5v.01" />
  </svg>
);

/** The well behind the illustration: soft light from the theme and the accent, under a fine grain. */
const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0.22 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;
const WELL = [
  GRAIN,
  "radial-gradient(80% 60% at 8% 0%, color-mix(in oklab, var(--tone) var(--haze), transparent), transparent 72%)",
  "radial-gradient(70% 70% at 100% 100%, color-mix(in oklab, var(--tone) calc(var(--haze) * 0.7), transparent), transparent 72%)",
  "radial-gradient(60% 50% at 88% 8%, color-mix(in oklab, var(--color-primary) 6%, transparent), transparent 70%)",
  "linear-gradient(160deg, color-mix(in oklab, var(--tone) 7%, var(--color-card)), color-mix(in oklab, var(--color-muted) 75%, var(--color-card)))",
].join(", ");

const RAG_SVG = `<svg class="sh-rag" xmlns="http://www.w3.org/2000/svg" width="720" height="460" viewBox="0 0 720 460" fill="none" stroke="#1daf9c" role="img" aria-labelledby="sh-rag-t" aria-describedby="sh-rag-d">
<title id="sh-rag-t">RAG answer</title>
<desc id="sh-rag-d">A question lands among a field of document pages; the three closest pages light up and are pulled in around it, and an answer page beside them writes itself line by line from those three, each part ending in a citation mark.</desc>
<style>@scope (svg.sh-rag) {
:scope{--_ground:#ffffff;--_ink:#2a2a2a;--_ramp-1:#16645a;--_ramp-2:#1daf9c;--_ramp-3:#3fdec9;--_ramp-4:#c2f5ee;--_mark:#178c7d;--_spark:#0b463e}
@media (prefers-color-scheme: dark){:scope{--_ground:#101112;--_ink:#dadadc;--_ramp-1:#84ebdd;--_ramp-2:#3fdec9;--_ramp-3:#1daf9c;--_ramp-4:#1a7569;--_mark:#3fdec9;--_spark:#ffffff}}
:scope{stroke:none;--g:var(--illos-ground,var(--_ground));--k:var(--illos-ink,var(--_ink))}
.b0,.b1,.b2,.b3{fill:none;stroke-dasharray:7 2.4}
.b0{stroke:var(--illos-ramp-1,var(--_ramp-1))}.b1{stroke:var(--illos-ramp-2,var(--_ramp-2))}.b2{stroke:var(--illos-ramp-3,var(--_ramp-3))}.b3{stroke:var(--illos-ramp-4,var(--_ramp-4));opacity:.55}
.sc{fill:none;stroke:rgb(from color-mix(in srgb,var(--illos-ramp-4,var(--_ramp-4)) 18%,var(--g)) r g b/clamp(.33,(r + g + b)/382.5,1));stroke-width:.8}
.bm{fill:none;stroke:var(--illos-ramp-2,var(--_ramp-2));stroke-width:2.4;stroke-dasharray:5 2.4}
.sp{fill:none;stroke:var(--illos-spark,var(--_spark));stroke-width:1.2;stroke-linecap:round;opacity:.85}
.gr{stroke:rgb(from color-mix(in srgb,var(--k) 9%,var(--g)) r g b/clamp(.67,(r + g + b)/382.5,1));stroke-width:1}
.bx,.ln,.lv{fill:none;stroke:var(--illos-mark,var(--_mark));stroke-width:1.2}
.dot{fill:var(--illos-mark,var(--_mark))}.cf{fill:var(--illos-mark,var(--_mark))}
.ct{fill:none;stroke:var(--g);stroke-width:1.25;stroke-linecap:round;stroke-linejoin:round}
.tx{fill:none;stroke:var(--illos-mark,var(--_mark));stroke-width:1;stroke-linecap:round;stroke-linejoin:round}
@keyframes sh-rag_qn{0%{opacity:1}6.667%{opacity:1;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}9.333%{opacity:0}24.444%{opacity:0;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}28.444%{opacity:1}100%{opacity:1}}
.qn{opacity:1;animation:sh-rag_qn 4.5s linear both}
@keyframes sh-rag_clock{0%{opacity:0}100%{opacity:0}}
.sh-clock{animation:sh-rag_clock 4.5s linear both}
*{animation-iteration-count:infinite!important;animation-play-state:var(--illos-play,running)!important}
@media (prefers-reduced-motion: reduce){*{animation:none!important}}
}
</style>
<g class="sh-still"><path class="sc" d="M4 0V460M11 0V460M18 0V460M25 0V460M32 0V460M39 0V460M46 0V460M53 0V460M60 0V460M67 0V460M74 0V460M81 0V460M88 0V460M95 0V460M102 0V460M109 0V460M116 0V460M123 0V460M130 0V460M137 0V460M144 0V460M151 0V460M158 0V460M165 0V460M172 0V460M179 0V460M186 0V460M193 0V460M200 0V460M207 0V460M214 0V460M221 0V460M228 0V460M235 0V460M242 0V460M249 0V460M256 0V460M263 0V460M270 0V460M277 0V460M284 0V460M291 0V460M298 0V460M305 0V460M312 0V460M319 0V460M326 0V460M333 0V460M340 0V460M347 0V460M354 0V460M361 0V460M368 0V460M375 0V460M382 0V460M389 0V460M396 0V460M403 0V460M410 0V460M417 0V460M424 0V460M431 0V460M438 0V460M445 0V460M452 0V460M459 0V460M466 0V460M473 0V460M480 0V460M487 0V460M494 0V460M501 0V460M508 0V460M515 0V460M522 0V460M529 0V460M536 0V460M543 0V460M550 0V460M557 0V460M564 0V460M571 0V460M578 0V460M585 0V460M592 0V460M599 0V460M606 0V460M613 0V460M620 0V460M627 0V460M634 0V460M641 0V460M648 0V460M655 0V460M662 0V460M669 0V460M676 0V460M683 0V460M690 0V460M697 0V460M704 0V460M711 0V460M718 0V460"/><path class="gr" d="M0 0V460M96 0V460M192 0V460M288 0V460M384 0V460M480 0V460M576 0V460M672 0V460M0 0H720M0 96H720M0 192H720M0 288H720M0 384H720"/><path class="b0" d="M207 150.4V157.4M214 150.4V157.4M221 150.4V157.4M228 225.6V242M235 225.6V242M242 225.6V242M249 225.6V242M249 272.6V279.6M256 225.6V242M256 272.6V279.6M263 225.6V232.6M263 272.6V279.6M270 150.4V157.4M270 225.6V232.6M277 150.4V157.4M284 150.4V157.4M620 282V289M634 244.4V251.4M648 206.8V213.8" stroke-width="3.6"/><path class="b1" d="M207 169.2V204.4M214 169.2V204.4M221 178.6V195M228 178.6V195M249 291.4V326.6M256 291.4V326.6M263 291.4V317.2M270 169.2V204.4M270 291.4V317.2M277 169.2V204.4M277 291.4V298.4M284 169.2V176.2M284 188V204.4M291 169.2V176.2M291 197.4V204.4M564 188V195M564 206.8V213.8M564 225.6V232.6M564 244.4V251.4M564 263.2V270.2M564 282V289M571 188V195M571 206.8V213.8M571 225.6V232.6M571 244.4V251.4M571 263.2V270.2M571 282V289M578 188V195M578 206.8V213.8M578 225.6V232.6M578 244.4V251.4M578 263.2V270.2M578 282V289M585 188V195M585 206.8V213.8M585 225.6V232.6M585 244.4V251.4M585 263.2V270.2M585 282V289M592 188V195M592 206.8V213.8M592 225.6V232.6M592 244.4V251.4M592 263.2V270.2M592 282V289M599 188V195M599 206.8V213.8M599 225.6V232.6M599 244.4V251.4M599 263.2V270.2M599 282V289M606 188V195M606 206.8V213.8M606 225.6V232.6M606 244.4V251.4M606 263.2V270.2M606 282V289M613 188V195M613 206.8V213.8M613 225.6V232.6M613 244.4V251.4M613 263.2V270.2M620 188V195M620 206.8V213.8M620 225.6V232.6M620 244.4V251.4M620 263.2V270.2M627 188V195M627 206.8V213.8M627 225.6V232.6M627 263.2V270.2M634 188V195M634 206.8V213.8M634 225.6V232.6M634 263.2V270.2M641 188V195M641 225.6V232.6M641 263.2V270.2M648 188V195" stroke-width="2.7"/><path class="b2" d="M46 282V289M53 47V54M53 65.8V72.8M53 94V101M53 282V289M53 319.6V336M53 376V383M53 423V430M60 47V54M60 65.8V72.8M60 376V383M60 413.6V420.6M67 47V54M67 65.8V72.8M67 394.8V401.8M67 413.6V420.6M74 131.6V138.6M74 150.4V157.4M74 394.8V401.8M81 65.8V72.8M81 131.6V138.6M88 131.6V138.6M123 329V336M130 329V336M130 357.2V364.2M137 28.2V35.2M137 329V336M144 28.2V35.2M144 56.4V63.4M144 75.2V82.2M151 28.2V35.2M151 65.8V72.8M193 376V383M193 394.8V411.2M193 423V430M200 376V383M200 413.6V430M207 376V383M214 423V430M221 159.8V166.8M221 225.6V242M228 159.8V166.8M228 216.2V223.2M228 244.4V260.8M235 37.6V44.6M235 56.4V63.4M235 75.2V91.6M235 169.2V185.6M235 216.2V223.2M235 244.4V260.8M242 37.6V44.6M242 56.4V63.4M242 75.2V91.6M242 216.2V223.2M242 244.4V251.4M249 65.8V72.8M249 216.2V223.2M249 244.4V251.4M256 56.4V72.8M256 216.2V223.2M256 244.4V251.4M263 216.2V223.2M263 244.4V251.4M263 319.6V326.6M270 216.2V223.2M270 244.4V251.4M270 282V289M277 225.6V242M277 310.2V317.2M284 159.8V166.8M291 188V195M298 159.8V166.8M298 178.6V195M340 376V383M340 404.2V411.2M340 423V430M347 376V383M354 376V383M354 413.6V420.6M361 423V430M368 235V242M368 423V430M375 37.6V44.6M375 300.8V307.8M375 319.6V326.6M375 338.4V345.4M382 37.6V44.6M382 235V242M382 300.8V307.8M382 319.6V326.6M389 65.8V91.6M389 150.4V157.4M389 169.2V176.2M389 300.8V307.8M389 347.8V354.8M396 150.4V157.4M396 169.2V176.2M396 197.4V204.4M396 329V336M403 197.4V204.4M410 235V242M438 84.6V91.6M438 131.6V138.6M438 357.2V364.2M445 84.6V91.6M445 103.4V110.4M445 122.2V129.2M445 357.2V364.2M445 385.4V401.8M452 84.6V91.6M452 235V242M452 357.2V364.2M452 404.2V411.2M459 112.8V119.8M466 131.6V138.6M480 235V242M494 235V242M522 235V242" stroke-width="1.8"/><path class="b3" d="M46 291.4V336M53 75.2V91.6M53 291.4V317.2M53 385.4V420.6M60 56.4V63.4M60 75.2V101M60 282V317.2M60 329V336M60 394.8V411.2M60 423V430M67 56.4V63.4M67 75.2V91.6M67 310.2V336M67 376V383M67 404.2V411.2M67 423V430M74 47V72.8M74 94V101M74 159.8V185.6M74 282V317.2M74 376V383M74 404.2V430M81 47V63.4M81 75.2V82.2M81 94V101M81 141V185.6M81 394.8V430M88 150.4V185.6M95 131.6V138.6M95 150.4V157.4M95 178.6V185.6M102 141V176.2M123 347.8V383M130 338.4V354.8M130 366.6V383M137 37.6V82.2M137 338.4V383M144 37.6V54M144 65.8V72.8M144 347.8V354.8M144 366.6V373.6M151 47V54M151 75.2V82.2M151 329V383M158 28.2V35.2M158 47V54M158 65.8V82.2M165 28.2V54M165 65.8V82.2M193 413.6V420.6M200 385.4V411.2M207 159.8V166.8M207 404.2V430M214 159.8V166.8M214 394.8V411.2M221 169.2V176.2M221 197.4V204.4M221 413.6V420.6M228 150.4V157.4M228 169.2V176.2M228 197.4V204.4M235 65.8V72.8M235 150.4V166.8M235 188V204.4M242 65.8V72.8M249 37.6V63.4M249 282V289M256 37.6V44.6M256 75.2V91.6M256 282V289M263 37.6V72.8M263 84.6V91.6M263 282V289M270 159.8V166.8M270 272.6V279.6M270 319.6V326.6M277 159.8V166.8M277 272.6V289M277 300.8V307.8M277 319.6V326.6M284 178.6V185.6M291 150.4V166.8M291 178.6V185.6M298 150.4V157.4M298 169.2V176.2M298 197.4V204.4M298 235V242M312 235V242M326 235V242M340 235V242M340 394.8V401.8M340 413.6V420.6M347 385.4V430M354 235V242M354 394.8V411.2M354 423V430M361 376V383M361 394.8V420.6M368 385.4V392.4M368 404.2V420.6M375 47V91.6M375 310.2V317.2M375 329V336M375 347.8V354.8M382 47V91.6M382 329V354.8M389 159.8V166.8M389 178.6V204.4M389 310.2V317.2M389 329V345.4M396 37.6V44.6M396 75.2V91.6M396 178.6V195M396 235V242M396 310.2V317.2M396 338.4V354.8M403 159.8V185.6M403 300.8V317.2M403 329V345.4M410 150.4V157.4M410 188V204.4M417 159.8V166.8M417 178.6V204.4M424 235V242M438 94V129.2M438 235V242M438 376V411.2M445 94V101M445 112.8V119.8M445 131.6V138.6M445 376V383M445 404.2V411.2M452 94V101M452 112.8V138.6M452 366.6V392.4M459 84.6V110.4M459 131.6V138.6M459 366.6V411.2M466 84.6V110.4M466 122.2V129.2M466 235V242M466 366.6V401.8M508 235V242M557 178.6V298.4M564 178.6V185.6M564 197.4V204.4M564 216.2V223.2M564 235V242M564 253.8V260.8M564 291.4V298.4M571 178.6V185.6M571 197.4V204.4M571 216.2V223.2M571 253.8V260.8M571 272.6V279.6M571 291.4V298.4M578 178.6V185.6M578 197.4V204.4M578 216.2V223.2M578 235V242M578 253.8V260.8M578 272.6V279.6M578 291.4V298.4M585 178.6V185.6M585 197.4V204.4M585 216.2V223.2M585 235V242M585 253.8V260.8M585 272.6V279.6M585 291.4V298.4M592 178.6V185.6M592 197.4V204.4M592 216.2V223.2M592 235V242M592 253.8V260.8M592 291.4V298.4M599 178.6V185.6M599 197.4V204.4M599 235V242M599 272.6V279.6M599 291.4V298.4M606 178.6V185.6M606 197.4V204.4M606 216.2V223.2M606 235V242M606 253.8V260.8M606 272.6V279.6M606 291.4V298.4M613 197.4V204.4M613 216.2V223.2M613 253.8V260.8M613 272.6V279.6M613 291.4V298.4M620 178.6V185.6M620 197.4V204.4M620 216.2V223.2M620 253.8V260.8M620 272.6V279.6M620 291.4V298.4M627 178.6V185.6M627 197.4V204.4M627 216.2V223.2M627 244.4V260.8M627 272.6V298.4M634 178.6V185.6M634 197.4V204.4M634 216.2V223.2M634 235V242M634 253.8V260.8M634 272.6V298.4M641 178.6V185.6M641 197.4V223.2M641 235V260.8M641 282V298.4M648 178.6V185.6M648 197.4V204.4M648 216.2V242M648 253.8V298.4M655 178.6V298.4" stroke-width="1.1"/><path class="sp" d="M228 237.4v1.2M235 237.4v1.2M242 228v1.2M249 237.4v1.2M256 228v1.2M256 275v1.2M263 228v1.2M270 152.8v1.2M284 152.8v1.2M634 246.8v1.2M648 209.2v1.2"/></g>
<g class="box"><path class="bx" pathLength="1" d="M543 162H674V312.2H543Z"/><circle class="dot" cx="543" cy="162" r="2.2"/><circle class="dot" cx="674" cy="162" r="2.2"/><circle class="dot" cx="543" cy="312.2" r="2.2"/><circle class="dot" cx="674" cy="312.2" r="2.2"/><g class="chip"><rect class="cf" x="543" y="162" width="54.16" height="14.9"/><path class="ct" d="M548 172.9L548 168.3L550.3 166L552.6 168.3L552.6 172.9M548 170.03L552.6 170.03M555.36 172.9L555.36 166L559.96 172.9L559.96 166M567.32 167.15L566.17 166L563.87 166L562.72 167.15L562.72 168.3L563.87 169.45L566.17 169.45L567.32 170.6L567.32 171.75L566.17 172.9L563.87 172.9L562.72 171.75M570.08 166L571.23 172.9L572.38 169.45L573.53 172.9L574.68 166M582.04 166L577.44 166L577.44 172.9L582.04 172.9M577.44 169.45L580.89 169.45M584.8 172.9L584.8 166L588.25 166L589.4 167.15L589.4 168.3L588.25 169.45L584.8 169.45M587.1 169.45L589.4 172.9"/></g></g><path class="tx" d="M52 30L52 34.8L54.4 34.8L55.2 34L55.2 30.8L54.4 30L52 30M57.92 30L59.52 30L60.32 30.8L60.32 34L59.52 34.8L57.92 34.8L57.12 34L57.12 30.8L57.92 30M65.44 30.8L64.64 30L63.04 30L62.24 30.8L62.24 34L63.04 34.8L64.64 34.8L65.44 34M67.36 30L67.36 34L68.16 34.8L69.76 34.8L70.56 34L70.56 30M72.48 34.8L72.48 30L74.08 32.4L75.68 30L75.68 34.8M80.8 30L77.6 30L77.6 34.8L80.8 34.8M77.6 32.4L80 32.4M82.72 34.8L82.72 30L85.92 34.8L85.92 30M87.84 30L91.04 30M89.44 30L89.44 34.8M96.16 30.8L95.36 30L93.76 30L92.96 30.8L92.96 31.6L93.76 32.4L95.36 32.4L96.16 33.2L96.16 34L95.36 34.8L93.76 34.8L92.96 34"/><g class="qn"><path class="tx" d="M168.8 236L170.4 236L171.2 236.8L171.2 240L170.4 240.8L168.8 240.8L168 240L168 236.8L168.8 236M170 239.6L171.2 240.8M173.12 236L173.12 240L173.92 240.8L175.52 240.8L176.32 240L176.32 236M181.44 236L178.24 236L178.24 240.8L181.44 240.8M178.24 238.4L180.64 238.4M186.56 236.8L185.76 236L184.16 236L183.36 236.8L183.36 237.6L184.16 238.4L185.76 238.4L186.56 239.2L186.56 240L185.76 240.8L184.16 240.8L183.36 240M188.48 236L191.68 236M190.08 236L190.08 240.8M194.4 236L196 236M195.2 236L195.2 240.8M194.4 240.8L196 240.8M199.52 236L201.12 236L201.92 236.8L201.92 240L201.12 240.8L199.52 240.8L198.72 240L198.72 236.8L199.52 236M203.84 240.8L203.84 236L207.04 240.8L207.04 236"/></g>
<rect class="sh-clock" width="0" height="0"/>
<metadata class="illos-field" data-cycle="4.5"><![CDATA[// A page centred at c: 5 columns by 6 cells. Faint paper that flickers, a title, ragged lines of text; lit brightens it
// and hot (a read) flashes its text.
float page(vec2 p, vec2 c, float s, float lit, float hot, float ph) {
  vec2 q = p - c + vec2(17.5, 28.2);
  if (q.x < 0.0 || q.x >= 35.0 || q.y < 0.0 || q.y >= 56.4) return 0.0;
  float lc = floor(q.x / 7.0); float lk = floor(q.y / 9.4);
  float hs = hash(vec2(lc + s * 5.0, lk + s));
  float v = mix(0.13, 0.28, lit) + 0.05 * sin(ph + hs * 40.0);
  if (lk < 0.5) { if (lc < 2.0 + floor(2.0 * hash(vec2(s, 1.0)))) v = mix(0.45, 1.1, lit); }
  else if (lk > 1.5) { if (lc < 2.0 + floor(3.6 * hash(vec2(s, lk)))) v = mix(0.3, 0.72, lit) + 0.4 * hot; }
  return v;
}
// The question: a speech bubble 9 columns by 4 cells, two lines of words inside its rim, a tail under its left end.
float bubble(vec2 p, vec2 c, float k) {
  vec2 q = p - c + vec2(31.5, 18.8);
  if (q.x < 0.0 || q.x >= 63.0 || q.y < 0.0 || q.y >= 47.0) return 0.0;
  float lc = floor(q.x / 7.0); float lk = floor(q.y / 9.4);
  float side = (lc < 0.5 || lc > 7.5) ? 1.0 : 0.0;
  float v = 0.0;
  if (lk < 3.5) {
    if (lk < 0.5 || lk > 2.5) v = side > 0.5 ? 0.0 : 0.45;
    else if (side > 0.5) v = 0.45;
    else if (lk < 1.5 || lc < 5.5) v = 1.15;
  } else if (lc > 0.5 && lc < 2.5) v = 0.45;
  return v * k;
}
float field(vec2 p, float t) {
  if (p.x < 24.0 || p.x > 696.0 || p.y < 24.0 || p.y > 436.0) return 0.0;
  float ph = TAU * t / T;
  float v = 0.0;
  // the rest of the field, idle
  v = max(v, page(p, vec2(70.0, 78.0), 4.0, 0.0, 0.0, ph));
  v = max(v, page(p, vec2(150.0, 58.0), 5.0, 0.0, 0.0, ph));
  v = max(v, page(p, vec2(250.0, 60.0), 6.0, 0.0, 0.0, ph));
  v = max(v, page(p, vec2(390.0, 64.0), 7.0, 0.0, 0.0, ph));
  v = max(v, page(p, vec2(452.0, 108.0), 8.0, 0.0, 0.0, ph));
  v = max(v, page(p, vec2(90.0, 162.0), 9.0, 0.0, 0.0, ph));
  v = max(v, page(p, vec2(404.0, 182.0), 10.0, 0.0, 0.0, ph));
  v = max(v, page(p, vec2(62.0, 310.0), 11.0, 0.0, 0.0, ph));
  v = max(v, page(p, vec2(134.0, 360.0), 12.0, 0.0, 0.0, ph));
  v = max(v, page(p, vec2(204.0, 404.0), 13.0, 0.0, 0.0, ph));
  v = max(v, page(p, vec2(392.0, 330.0), 14.0, 0.0, 0.0, ph));
  v = max(v, page(p, vec2(352.0, 404.0), 15.0, 0.0, 0.0, ph));
  v = max(v, page(p, vec2(450.0, 380.0), 16.0, 0.0, 0.0, ph));
  v = max(v, page(p, vec2(66.0, 400.0), 17.0, 0.0, 0.0, ph));
  // the three nearest: let go as the next question comes in, lit as the ring reaches them, pulled in, read and sent
  {
    float g = t < 1.5 ? 1.0 - ease((t - 0.3) / 0.6) : ease((t - 1.850) / 0.65);
    float lit = t < 1.0 ? 1.0 - sm(0.3, 0.75, t) : sm(1.379, 1.499, t);
    float hot = exp(-pow(t - 2.590, 2.0) / 0.006);
    v = max(v, page(p, mix(vec2(165.0, 175.0), vec2(220.0, 182.0), g), 1.0, lit, hot, ph));
  }
  {
    float g = t < 1.5 ? 1.0 - ease((t - 0.3) / 0.6) : ease((t - 1.910) / 0.65);
    float lit = t < 1.0 ? 1.0 - sm(0.3, 0.75, t) : sm(1.459, 1.579, t);
    float hot = exp(-pow(t - 2.840, 2.0) / 0.006);
    v = max(v, page(p, mix(vec2(300.0, 350.0), vec2(262.0, 302.0), g), 2.0, lit, hot, ph));
  }
  {
    float g = t < 1.5 ? 1.0 - ease((t - 0.3) / 0.6) : ease((t - 1.970) / 0.65);
    float lit = t < 1.0 ? 1.0 - sm(0.3, 0.75, t) : sm(1.587, 1.707, t);
    float hot = exp(-pow(t - 3.090, 2.0) / 0.006);
    v = max(v, page(p, mix(vec2(335.0, 125.0), vec2(282.0, 180.0), g), 3.0, lit, hot, ph));
  }
  // the question: the last one fades as the next comes in along the lane and lands
  v = max(v, bubble(p, vec2(250.0, 238.0), 1.0 - sm(0.3, 0.5, t)));
  v = max(v, bubble(p, mix(vec2(40.0, 238.0), vec2(250.0, 238.0), ease((t - 0.3) / 0.8)), sm(0.3, 0.45, t)));
  {
    float u = clamp((t - 0.3) / 0.8, 0.0, 1.0);
    float sp = (u > 0.0 && u < 1.0) ? sin(3.14159 * u) : 0.0;
    vec2 b = mix(vec2(40.0, 238.0), vec2(250.0, 238.0), ease(u));
    for (int s = 1; s <= 3; s++) v += blob(p, b - vec2(32.0 + 13.0 * float(s), 0.0), 9.0 - 1.5 * float(s), sp * (0.5 - 0.12 * float(s)));
  }
  // the search ring
  if (t > 1.100 && t < 1.750) {
    float u = (t - 1.100) / 0.650;
    float R = 14.0 + 136.0 * (1.0 - (1.0 - u) * (1.0 - u));
    v += 0.5 * (1.0 - u) * exp(-pow(length((p - vec2(250.0, 238.0)) * vec2(1.0, 1.0)) - R, 2.0) / 90.0);
  }
  // the line to the answer: dotted, on one row of cells; each part runs down it with a short tail
  if (abs(p.y - 238.500) < 1.0 && p.x > 290.0 && p.x < 535.0 && mod(floor((p.x - 4.0) / 7.0 + 0.5), 2.0) < 0.5) v = max(v, 0.3);
  {
    float u = clamp((t - 2.650) / 0.4, 0.0, 1.0);
    if (u > 0.0 && u < 1.0) { float x = mix(304.0, 520.0, ease(u)); float k = sm(0.0, 0.1, u) * (1.0 - sm(0.85, 1.0, u)); v += blob(p, vec2(x, 238.500), 9.0, 1.2 * k) + blob(p, vec2(x - 14.0, 238.500), 6.0, 0.45 * k); }
  }
  {
    float u = clamp((t - 2.900) / 0.4, 0.0, 1.0);
    if (u > 0.0 && u < 1.0) { float x = mix(304.0, 520.0, ease(u)); float k = sm(0.0, 0.1, u) * (1.0 - sm(0.85, 1.0, u)); v += blob(p, vec2(x, 238.500), 9.0, 1.2 * k) + blob(p, vec2(x - 14.0, 238.500), 6.0, 0.45 * k); }
  }
  {
    float u = clamp((t - 3.150) / 0.4, 0.0, 1.0);
    if (u > 0.0 && u < 1.0) { float x = mix(304.0, 520.0, ease(u)); float k = sm(0.0, 0.1, u) * (1.0 - sm(0.85, 1.0, u)); v += blob(p, vec2(x, 238.500), 9.0, 1.2 * k) + blob(p, vec2(x - 14.0, 238.500), 6.0, 0.45 * k); }
  }
  // the answer page: faint paper; six lines, each written left to right by a hot head; a citation mark after each part
  {
    vec2 q = p - vec2(556.0, 177.0);
    if (q.x >= 0.0 && q.x < 105.0 && q.y >= 0.0 && q.y < 122.2) {
      float lc = floor(q.x / 7.0); float lk = floor(q.y / 9.4);
      float a = 0.15 + 0.04 * sin(ph + hash(vec2(lc, lk)) * 40.0);
      float clear = 1.0 - sm(0.3, 0.6, t);
      for (int j = 0; j < 6; j++) {
        float fj = float(j);
        float w = fj < 0.5 ? 3.050 : fj < 1.5 ? 3.210 : fj < 2.5 ? 3.370 : fj < 3.5 ? 3.530 : fj < 4.5 ? 3.690 : 3.850;
        float len = fj < 0.5 ? 13.0 : fj < 1.5 ? 11.0 : fj < 2.5 ? 12.0 : fj < 3.5 ? 9.0 : fj < 4.5 ? 12.0 : 7.0;
        if (abs(lk - 1.0 - 2.0 * fj) < 0.5) {
          float hc = min(len, 1.0 + floor(len * clamp((t - w) / 0.160, 0.0, 1.0)));
          float on = t < 1.0 ? clear : step(w, t) * step(lc, hc);
          if (lc >= 1.0 && lc < 1.0 + len) a = max(a, 0.72 * on);
          if (t > w && t < w + 0.160 && abs(lc - hc) < 0.5) a = max(a, 1.2);
          // the citation mark, two cells after a part's last line
          if (mod(fj, 2.0) > 0.5 && abs(lc - len - 2.0) < 0.5) a = max(a, 1.15 * (t < 1.0 ? clear : sm(w + 0.160, w + 0.220, t)));
        }
      }
      v = max(v, a);
    }
  }
  return v;
}]]></metadata>
</svg>`;

// On a well the still's screen lines and grid are tints, as the live field draws them, not solid ground-coloured lines.
const LIVE = "<style>.illos-art .sc{stroke:color-mix(in srgb,var(--illos-ramp-4) 18%,transparent)}.illos-art .gr{stroke:color-mix(in srgb,var(--illos-ink) 9%,transparent)}.illos-live{position:relative}.illos-live>svg{position:relative}.illos-live .sh-still{visibility:hidden}.illos-field-canvas{position:absolute;inset:0;width:100%;height:100%;display:block}</style>";

/** One Shader illustration, inline, with its live field drawn beneath the SVG. Decorative: the text says what it means. */
function ShaderArt({ svg, className }: { svg: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = ref.current;
    if (!host) return undefined;
    const stopPlay = playInView(host);
    const stopField = mountShader(host);
    return () => {
      stopField();
      stopPlay();
    };
  }, [svg]);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cx("illos-art pointer-events-none select-none [&>svg]:h-auto [&>svg]:w-full", className)}
      style={{ "--illos-play": "paused" } as CSSProperties}
      dangerouslySetInnerHTML={{ __html: LIVE + svg }}
    />
  );
}

/** Plays while a quarter of it is in view and pauses off screen. Still for prefers-reduced-motion. */
function playInView(host: HTMLElement): () => void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  const io = new IntersectionObserver(
    (entries) => host.style.setProperty("--illos-play", entries.some((e) => e.isIntersecting) ? "running" : "paused"),
    { threshold: 0.25 },
  );
  io.observe(host);
  return () => io.disconnect();
}

// The Shader runtime, inline: it draws each illustration's field on a canvas beneath the SVG.
/**
 * The Shader style's runtime. A Shader SVG carries its field as GLSL in <metadata class="illos-field">;
 * mountShader draws that field on a canvas beneath the SVG in the bar look, taking its time from the SVG's clock
 * animation, so whatever plays, pauses, restarts or holds the SVG's CSS animations drives the field too.
 */

/** Helpers every field may use, and its one uniform, uT (seconds into the cycle). */
const PRELUDE = `precision highp float;
uniform float uT;
const float TAU = 6.2831853;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float blob(vec2 p, vec2 c, float r, float k) { vec2 d = p - c; return k * exp(-dot(d, d) / (r * r)); }
float sm(float a, float b, float t) { return smoothstep(a, b, t); }
float ease(float u) { u = clamp(u, 0.0, 1.0); return u < 0.5 ? 4.0 * u * u * u : 1.0 - pow(-2.0 * u + 2.0, 3.0) / 2.0; }
float seg(vec2 p, vec2 a, vec2 b, float r, float k) { vec2 ab = b - a; float h = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0); vec2 d = p - a - ab * h; return k * exp(-dot(d, d) / (r * r)); }
float noise(vec2 p) { vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y); }
`;

/**
 * One value per bar cell (columns every 7 px from x = 4, cells on a 9.4 period), with the cell's grain. The field pass
 * and the still's sampler both use it, so the still is the live field's first frame.
 */
const CELL = `
float cellValue(float col, float cell) {
  return field(vec2(4.0 + col * 7.0, cell * 9.4 + 3.5), uT) * (0.7 + 0.3 * hash(vec2(col, cell)));
}`;

/** The field pass: one pixel per cell into a COLS x CELLS texture, the value packed into red (coarse) and green (fine). */
const FIELD_MAIN = `
void main() {
  float v = clamp(cellValue(floor(gl_FragCoord.x), floor(gl_FragCoord.y)) / 4.0, 0.0, 0.99999);
  gl_FragColor = vec4(floor(v * 255.0) / 255.0, fract(v * 255.0), 0.0, 1.0);
}`;

/** The canvas in cells for a frame of w x h: columns every 7 from x = 4 to w - 2, cells of 9.4 down h (720 x 460: 103 x 49). */
const gridFor = (w: number, h: number): [number, number] => [Math.floor((w - 6) / 7) + 1, Math.ceil(h / 9.4)];

/**
 * The bar pass: per pixel, read its cell's value from the field pass and draw the bar look (ink and width by density,
 * screen lines, grid, sparks). Cheap per pixel; the field itself is worked out once per cell, not once per pixel.
 * As it is, it paints the ground too. With CLEAR defined (mountShader) the ground is left clear, so the page, a
 * gradient or a section edge, shows through: the look is painted over black and over white, and how much the two
 * differ is how much ground shows at that pixel.
 */
const BARS = `precision highp float;
uniform vec2 uRes; uniform vec2 uGrid; uniform float uDpr; uniform vec3 uGround; uniform vec3 uInk; uniform sampler2D uField;
uniform vec3 uR1; uniform vec3 uR2; uniform vec3 uR3; uniform vec3 uR4; uniform vec3 uSpark;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
vec3 paint(vec3 uGround, vec2 px, float v, float col, float cx, float cell) {
  vec3 color = uGround;
  if (mod(px.x, 96.0) < 1.0 || mod(px.y, 96.0) < 1.0) color = mix(uGround, uInk, 0.09);
  float dx = abs(px.x - cx);
  color = mix(color, mix(uGround, uR4, 0.18), 1.0 - smoothstep(0.3, 0.7, dx));
  float w = 0.0; vec3 c = uR4; float a = 1.0;
  if (v >= 0.72) { w = 3.6; c = uR1; } else if (v >= 0.48) { w = 2.7; c = uR2; } else if (v >= 0.27) { w = 1.8; c = uR3; } else if (v >= 0.1) { w = 1.1; c = uR4; a = 0.55; }
  float bar = step(mod(px.y, 9.4), 7.0) * (1.0 - smoothstep(w * 0.5 - 0.35, w * 0.5 + 0.35, dx)) * step(0.001, w);
  color = mix(color, c, bar * a);
  if (w > 3.5 && hash(vec2(col, cell * 1.3)) > 0.55 && abs(mod(px.y, 9.4) - 3.0) < 0.8 && dx < 0.7) color = uSpark;
  return color;
}
void main() {
  vec2 px = vec2(gl_FragCoord.x, uRes.y * uDpr - gl_FragCoord.y) / uDpr;
  float col = floor((px.x - 4.0) / 7.0 + 0.5);
  float cx = 4.0 + col * 7.0;
  float cell = floor(px.y / 9.4);
  vec4 e = texture2D(uField, (vec2(col, cell) + 0.5) / uGrid);
  float v = (e.r + e.g / 255.0) * 4.0;
  if (col < 0.0 || col > uGrid.x - 1.0) v = 0.0;
#ifdef CLEAR
  vec3 onBlack = paint(vec3(0.0), px, v, col, cx, cell);
  vec3 onWhite = paint(vec3(1.0), px, v, col, cx, cell);
  gl_FragColor = vec4(onBlack, clamp(1.0 - (onWhite.g - onBlack.g), 0.0, 1.0));
#else
  gl_FragColor = vec4(paint(uGround, px, v, col, cx, cell), 1.0);
#endif
}`;

/** The field pass for a field: the prelude, T (the cycle in seconds, which a field may use), the field, one value per cell. */
const fragmentFor = (field: string, cycle: number): string => `${PRELUDE}const float T = ${cycle.toFixed(3)};\n${field}\n${CELL}${FIELD_MAIN}`;

/** The cycle and the field a Shader SVG carries, or null for any other SVG. */
function readField(svg: Element): { cycle: number; field: string } | null {
  const meta = svg.querySelector("metadata.illos-field");
  if (!meta) return null;
  const cycle = Number(meta.getAttribute("data-cycle"));
  const field = (meta.textContent ?? "").trim();
  return cycle > 0 && /float\s+field\s*\(/.test(field) ? { cycle, field } : null;
}

const hex = (value: string, fallback: number[]): number[] => {
  const h = value.trim().replace("#", "");
  const full = h.length === 3 ? h.replace(/./g, "$&$&") : h;
  return /^[0-9a-f]{6}$/i.test(full) ? [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16) / 255) : fallback;
};

/** The light ramp and spark, used when the page sets no --illos-ramp-*. */
const RAMP = ["#16645a", "#1daf9c", "#3fdec9", "#c2f5ee"].map((c) => hex(c, [0, 0, 0]));
const SPARK = hex("#0b463e", [0, 0, 0]);

let probe: CanvasRenderingContext2D | null | undefined;
const unread = new Set<string>();
/**
 * Any CSS colour a role is set to (hex, rgb(), oklch(), a named colour) as sRGB from 0 to 1, read through a 1 px canvas.
 * A value the browser cannot read gives the fallback, with one console warning per value, never a silent white.
 */
function colour(value: string, fallback: number[]): number[] {
  const v = value.trim();
  if (!v) return fallback;
  const quick = hex(v, []);
  if (quick.length) return quick;
  probe ??= document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  if (probe) {
    probe.fillStyle = "#010203";
    probe.fillStyle = v; // a value the canvas cannot read leaves the marker
    if (probe.fillStyle !== "#010203") {
      probe.clearRect(0, 0, 1, 1);
      probe.fillRect(0, 0, 1, 1);
      const [r, g, b] = probe.getImageData(0, 0, 1, 1).data;
      return [r! / 255, g! / 255, b! / 255];
    }
  }
  if (!unread.has(v)) {
    unread.add(v);
    console.warn(`Illos: the colour "${v}" could not be read, so the default is used.`);
  }
  return fallback;
}

/**
 * Draws the field of the Shader SVG inside `host` on a canvas beneath it, with a clear ground so the page shows
 * through, and marks the host `illos-live` (CSS then hides the still). Draws a frame whenever the clock's time changed; while the clock is not running it checks every
 * 250 ms, and an `illos:draw` event on the host draws at once. Does
 * nothing, and leaves the still, under reduced motion, without a GPU for WebGL, or if the field does not compile. Returns cleanup.
 */
const SOFTWARE = /swiftshader|llvmpipe|softpipe|software|basic render/i;

/**
 * A WebGL context only when a GPU draws it, else null. Drawn in software, a field holds the page's main thread every
 * frame, so the still stays instead. The flag catches a blocklisted GPU; the renderer's name catches a software
 * renderer that some browsers still hand out as WebGL.
 */
function hardwareGl(canvas: HTMLCanvasElement, attributes: WebGLContextAttributes = {}): WebGLRenderingContext | null {
  // Asked once per page: on a software renderer each ask waits on the busy GPU process, and fields mount again and again.
  if (software) return null;
  const gl = canvas.getContext("webgl", { ...attributes, failIfMajorPerformanceCaveat: true }) as WebGLRenderingContext | null;
  if (software === undefined) {
    const info = gl?.getExtension("WEBGL_debug_renderer_info");
    software = !gl || Boolean(info && SOFTWARE.test(String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL))));
  }
  if (!software) return gl;
  gl?.getExtension("WEBGL_lose_context")?.loseContext();
  return null;
}
let software: boolean | undefined;

function mountShader(host: HTMLElement): () => void {
  const svg = host.querySelector("svg");
  const spec = svg ? readField(svg) : null;
  if (!svg || !spec) return () => {};
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return () => {};
  const canvas = document.createElement("canvas");
  const gl = hardwareGl(canvas, { antialias: false });
  if (!gl) return () => {};
  const shader = (type: number, src: string) => {
    const s = gl.createShader(type);
    if (!s) return null;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
  };
  const vs = shader(gl.VERTEX_SHADER, "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}");
  const link = (fs: WebGLShader | null) => {
    const prog = gl.createProgram();
    if (!vs || !fs || !prog) return null;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.bindAttribLocation(prog, 0, "p");
    gl.linkProgram(prog);
    return gl.getProgramParameter(prog, gl.LINK_STATUS) ? prog : null;
  };
  // The frame comes from the file's viewBox (a 640 x 720 portrait scene as well as the usual 720 x 460).
  const [vw, vh] = (svg.getAttribute("viewBox") ?? "").trim().split(/[\s,]+/).slice(2).map(Number);
  const [fw, fh] = vw! > 0 && vh! > 0 ? [vw!, vh!] : [720, 460];
  const [COLS, CELLS] = gridFor(fw, fh);
  const fieldProg = link(shader(gl.FRAGMENT_SHADER, fragmentFor(spec.field, spec.cycle)));
  const barsProg = link(shader(gl.FRAGMENT_SHADER, `#define CLEAR\n${BARS}`));
  if (!fieldProg || !barsProg) return () => {};
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  // The field pass draws into a small texture, one texel per cell; the bar pass reads it.
  const cells = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, cells);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, COLS, CELLS, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  const fbo = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, cells, 0);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  const uT = gl.getUniformLocation(fieldProg, "uT");
  const uRes = gl.getUniformLocation(barsProg, "uRes");
  const uGrid = gl.getUniformLocation(barsProg, "uGrid");
  const uDpr = gl.getUniformLocation(barsProg, "uDpr");
  const uInk = gl.getUniformLocation(barsProg, "uInk");
  const uRamp = [1, 2, 3, 4].map((i) => gl.getUniformLocation(barsProg, `uR${i}`));
  const uSpark = gl.getUniformLocation(barsProg, "uSpark");
  const uField = gl.getUniformLocation(barsProg, "uField");

  canvas.className = "illos-field-canvas";
  svg.parentNode?.insertBefore(canvas, svg);
  host.classList.add("illos-live");
  const clock = svg.querySelector(".sh-clock");
  let last = -1;
  let size = "";
  let raf = 0;
  let timer = 0;
  let gone = false;

  // Layout and colours are read at most every half second: a read every frame would force style and layout each frame
  // while the labels animate. A resize or a theme switch shows within half a second.
  let measured = -Infinity;
  let w = 1;
  let h = 1;
  let ink = [0.165, 0.165, 0.165];
  let ramp = RAMP;
  let spark = SPARK;
  const measure = () => {
    const box = svg.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    w = Math.max(1, Math.round(box.width * dpr));
    h = Math.max(1, Math.round(box.height * dpr));
    const style = getComputedStyle(svg);
    // The page's role first, then the SVG's own fallback, which follows the system theme like the still does.
    const role = (r: string) => style.getPropertyValue(`--illos-${r}`).trim() || style.getPropertyValue(`--_${r}`);
    ink = colour(role("ink"), [0.165, 0.165, 0.165]);
    ramp = RAMP.map((fallback, i) => colour(role(`ramp-${i + 1}`), fallback));
    spark = colour(role("spark"), SPARK);
    measured = Date.now();
  };
  const draw = () => {
    const anim = clock?.getAnimations?.()[0];
    const t = (((Number(anim?.currentTime) || 0) / 1000) % spec.cycle + spec.cycle) % spec.cycle;
    if (Date.now() - measured > 500) measure();
    const look = `${w}x${h} ${ink} ${ramp} ${spark}`; // a resize or a theme switch redraws even while the clock is held
    if (t !== last || look !== size) {
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      size = look;
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.viewport(0, 0, COLS, CELLS);
      gl.useProgram(fieldProg);
      gl.uniform1f(uT, t);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, w, h);
      gl.useProgram(barsProg);
      gl.uniform2f(uRes, fw, fh);
      gl.uniform2f(uGrid, COLS, CELLS);
      gl.uniform1f(uDpr, w / fw);
      gl.uniform3fv(uInk, ink);
      ramp.forEach((c, i) => gl.uniform3fv(uRamp[i]!, c));
      gl.uniform3fv(uSpark, spark);
      gl.bindTexture(gl.TEXTURE_2D, cells);
      gl.uniform1i(uField, 0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      last = t;
    }
    return anim?.playState === "running";
  };
  // After the clock stops (a cycle ended, or it paused), keep watching every frame for a while: a player restarts a
  // loop a frame later, and the field must follow at once. Then sleep, checking every 250 ms.
  let idle = 0;
  const tick = () => {
    raf = 0;
    timer = 0;
    if (gone) return;
    idle = draw() ? 0 : idle + 1;
    if (idle < 20) raf = requestAnimationFrame(tick);
    else timer = window.setTimeout(tick, 250);
  };
  const now = () => {
    if (!gone) draw();
  };
  const stop = () => {
    if (gone) return; // a late context loss after cleanup must not touch a host another mount now owns
    gone = true;
    cancelAnimationFrame(raf);
    clearTimeout(timer);
    host.removeEventListener("illos:draw", now);
    canvas.remove();
    host.classList.remove("illos-live");
    gl.getExtension("WEBGL_lose_context")?.loseContext(); // free the context now: browsers cap how many are live
  };
  canvas.addEventListener("webglcontextlost", stop);
  host.addEventListener("illos:draw", now);
  tick();
  return stop;
}
