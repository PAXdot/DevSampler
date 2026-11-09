"use client";

// Webhook endpoint setup: a URL field with validation, event checkboxes, a live request preview and a test send.
// The illustration is Webhook fan-out (Shader) from Illos (https://illos.dev).
// It loops while it is on screen, pauses off screen, and stays still for prefers-reduced-motion.
//
// License
// The component code in this file (layout, props, play logic) is free to use, change and share under the MIT license.
// The illustration inside it (the SVG markup and its animation) is not covered by MIT. It belongs to Illos and is
// licensed under the Illos free license, https://illos.dev/license: you can use it in personal and commercial work,
// including client projects, with no credit needed, and you may modify it. Not allowed: redistributing or selling it
// as an asset (packs, illustration or icon sites, or other libraries), or using it to build a competing illustration
// library.
import { useEffect, useId, useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from "react";

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

export type WebhookEvent = { type: string; description: string };
export type WebhookEndpoint = { url: string; events: string[] };
export type WebhookTestResult = { status: number; ok: boolean };

export type IllosWebhookSetupProps = {
  title?: string;
  description?: string;
  events?: WebhookEvent[];
  defaultUrl?: string;
  defaultEvents?: string[];
  /** Sends one sample event to the endpoint. The default waits a moment and answers 200. */
  onSendTest?: (endpoint: WebhookEndpoint & { event: string }) => Promise<WebhookTestResult>;
  onSubmit?: (endpoint: WebhookEndpoint) => void | Promise<void>;
  className?: string;
};

const DEFAULT_EVENTS: WebhookEvent[] = [
  { type: "order.created", description: "A customer places an order" },
  { type: "order.paid", description: "Payment goes through" },
  { type: "order.refunded", description: "An order is refunded" },
  { type: "customer.created", description: "Someone signs up" },
  { type: "subscription.renewed", description: "A plan renews" },
  { type: "subscription.canceled", description: "A plan is canceled" },
];

const fakeTest = () => new Promise<WebhookTestResult>((done) => setTimeout(() => done({ status: 200, ok: true }), 650 + Math.random() * 400));

/** The reason a URL cannot take webhooks, or null when it can. */
function checkUrl(value: string): string | null {
  const v = value.trim();
  if (!v) return "Enter the URL that should receive events.";
  let u: URL;
  try {
    u = new URL(v);
  } catch {
    return "Enter a full address, starting with https://";
  }
  if (u.protocol === "http:") return "Use https:// so every event is encrypted on the way.";
  if (u.protocol !== "https:") return "Enter a full address, starting with https://";
  if (u.hostname === "localhost" || /^(127\.|10\.|192\.168\.)/.test(u.hostname)) return "Use a public address. Local ones can't be reached from the internet.";
  if (!u.hostname.includes(".")) return "Add the full domain, like api.example.com";
  return null;
}

export function IllosWebhookSetup({
  title = "Add a webhook endpoint",
  description = "We send a signed POST request to your URL each time one of the selected events happens.",
  events = DEFAULT_EVENTS,
  defaultUrl = "",
  defaultEvents = ["order.created", "order.paid"],
  onSendTest = fakeTest,
  onSubmit,
  className,
}: IllosWebhookSetupProps) {
  const id = useId();
  const [url, setUrl] = useState(defaultUrl);
  const [urlError, setUrlError] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>(defaultEvents);
  const [preview, setPreview] = useState(defaultEvents[defaultEvents.length - 1] ?? events[0]?.type ?? "event");
  const [eventsError, setEventsError] = useState(false);
  const [test, setTest] = useState<{ state: "idle" | "sending" | "done"; event?: string; status?: number; ok?: boolean; ms?: number }>({ state: "idle" });
  const [save, setSave] = useState<"idle" | "saving" | "saved">("idle");
  const urlRef = useRef<HTMLInputElement>(null);

  const ordered = events.map((e) => e.type).filter((t) => selected.includes(t));
  const shown = ordered.includes(preview) ? preview : (ordered[0] ?? preview);
  const target = checkUrl(url) ? null : new URL(url.trim());

  const toggle = (type: string, on: boolean) => {
    setSelected((s) => (on ? [...s, type] : s.filter((t) => t !== type)));
    if (on) {
      setPreview(type);
      setEventsError(false);
    }
    setSave("idle");
  };
  const allOn = ordered.length === events.length;

  /** Checks both fields, shows what is wrong next to it, and moves focus to the first problem. */
  const valid = () => {
    const e = checkUrl(url);
    setUrlError(e);
    setEventsError(ordered.length === 0);
    if (e) urlRef.current?.focus();
    return !e && ordered.length > 0;
  };

  const sendTest = async () => {
    if (!valid() || test.state === "sending") return;
    const started = performance.now();
    setTest({ state: "sending", event: shown });
    try {
      const r = await onSendTest({ url: url.trim(), events: ordered, event: shown });
      setTest({ state: "done", event: shown, status: r.status, ok: r.ok, ms: Math.round(performance.now() - started) });
    } catch {
      setTest({ state: "done", event: shown, ok: false, ms: Math.round(performance.now() - started) });
    }
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!valid() || save === "saving") return;
    setSave("saving");
    try {
      await onSubmit?.({ url: url.trim(), events: ordered });
      setSave("saved");
    } catch {
      setSave("idle");
    }
  };

  return (
    <div
      className={cx(
        "w-full max-w-5xl rounded-[18px] bg-card p-1.5 text-card-foreground",
        "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_8%,transparent),0_1px_2px_rgb(0_0_0/0.04),0_24px_48px_-24px_rgb(0_0_0/0.16)] dark:shadow-[0_0_0_1px_var(--color-border)]",
        "[--tone:#1daf9c] [--haze:30%] dark:[--haze:20%] [--danger:var(--color-destructive,oklch(0.577_0.245_27.325))] dark:[--danger:var(--color-destructive,oklch(0.704_0.191_22.216))]",
        // The illustration's colour roles: surfaces from the theme, the teal ramp for its bars and marks.
        "[--illos-ground:var(--color-card)] [--illos-ink:var(--color-card-foreground)] [--illos-mark:#178c7d] [--illos-spark:#0b463e]",
        "[--illos-ramp-1:#16645a] [--illos-ramp-2:#1daf9c] [--illos-ramp-3:#3fdec9] [--illos-ramp-4:#c2f5ee]",
        "dark:[--illos-mark:#3fdec9] dark:[--illos-spark:#ffffff] dark:[--illos-ramp-1:#84ebdd] dark:[--illos-ramp-2:#3fdec9] dark:[--illos-ramp-3:#1daf9c] dark:[--illos-ramp-4:#1a7569]",
        className,
      )}
    >
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="relative isolate flex flex-col justify-between gap-3 overflow-hidden rounded-[12px] p-3" style={{ backgroundImage: WELL }}>
          <ShaderArt svg={FANOUT_SVG} className="-mx-3 -mt-3 [mask-image:linear-gradient(to_bottom,#000_82%,transparent)]" />
          <section aria-label="Request preview" className="rounded-[8px] bg-card/90 [font-family:var(--font-mono,ui-monospace),ui-monospace,SFMono-Regular,Menlo,monospace] text-[12px] leading-5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_7%,transparent),0_8px_24px_-12px_rgb(0_0_0/0.18)] dark:shadow-[0_0_0_1px_var(--color-border)]">
            <div className="flex items-center gap-2 px-3.5 pt-3 pb-2">
              <span className="rounded-[4px] bg-[color-mix(in_oklab,var(--tone)_16%,transparent)] px-1.5 text-[11px] font-medium text-[color-mix(in_oklab,var(--tone)_70%,var(--color-foreground))]">POST</span>
              <span className={cx("min-w-0 truncate", target ? "text-card-foreground" : "text-muted-foreground")}>
                {target ? `${target.host}${target.pathname === "/" ? "" : target.pathname}` : "your endpoint"}
              </span>
            </div>
            <pre className="overflow-x-auto px-3.5 pb-3.5 text-muted-foreground">
              {"{\n  "}
              <Key>id</Key>: <Val>"ev_7Hq2Lm"</Val>
              {",\n  "}
              <Key>type</Key>: <Val>"{shown}"</Val>
              {",\n  "}
              <Key>created</Key>: <Val>"2026-11-03T09:41:00Z"</Val>
              {",\n  "}
              <Key>data</Key>
              {": { "}
              <Key>id</Key>: <Val>"{shown.split(".")[0]}_1042"</Val>
              {" }\n}"}
            </pre>
          </section>
        </div>

        <form noValidate onSubmit={submit} className="flex flex-col gap-6 p-5 sm:p-7">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-lg font-semibold tracking-tight text-balance">{title}</h2>
            <p className="max-w-[46ch] text-sm leading-relaxed text-pretty text-muted-foreground">{description}</p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-url`} className="text-sm font-medium">
              Endpoint URL
            </label>
            <input
              ref={urlRef}
              id={`${id}-url`}
              type="url"
              inputMode="url"
              autoComplete="off"
              spellCheck={false}
              placeholder="https://api.example.com/webhooks"
              value={url}
              aria-invalid={urlError ? true : undefined}
              aria-describedby={`${id}-url-note`}
              onChange={(e) => {
                setUrl(e.target.value);
                setSave("idle");
                if (urlError) setUrlError(checkUrl(e.target.value)); // once wrong, clear the message as soon as it is right
              }}
              onBlur={() => url.trim() && setUrlError(checkUrl(url))}
              className={cx(
                "h-10 w-full rounded-[8px] border bg-background px-3 [font-family:var(--font-mono,ui-monospace),ui-monospace,SFMono-Regular,Menlo,monospace] text-base text-foreground outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted-foreground/70 sm:text-sm",
                "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/40",
                urlError ? "border-[var(--danger)] focus-visible:ring-[color-mix(in_oklab,var(--danger)_25%,transparent)]" : "border-border",
              )}
            />
            <p id={`${id}-url-note`} className={cx("flex items-center gap-1.5 text-[13px]", urlError ? "text-[var(--danger)]" : "text-muted-foreground")}>
              {urlError && <AlertIcon />}
              {urlError ?? "A public https address that answers within 10 seconds."}
            </p>
          </div>

          <fieldset aria-labelledby={`${id}-events`} className="flex min-w-0 flex-col gap-2.5" aria-describedby={eventsError ? `${id}-events-error` : undefined}>
            <div className="flex items-baseline justify-between gap-3">
              <span id={`${id}-events`} className="text-sm font-medium">
                Events
              </span>
              <div className="flex items-baseline gap-3 text-[13px]">
                <span className="text-muted-foreground tabular-nums">{ordered.length} selected</span>
                <button
                  type="button"
                  onClick={() => {
                    setSelected(allOn ? [] : events.map((e) => e.type));
                    if (!allOn) setEventsError(false);
                    setSave("idle");
                  }}
                  className="relative rounded-[4px] font-medium text-foreground underline decoration-border underline-offset-4 transition-[text-decoration-color] duration-150 hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring before:absolute before:-inset-x-2 before:-inset-y-3"
                >
                  {allOn ? "Clear" : "Select all"}
                </button>
              </div>
            </div>
            <div className="grid gap-1 sm:grid-cols-2">
              {events.map((ev) => {
                const on = selected.includes(ev.type);
                return (
                  <label
                    key={ev.type}
                    className={cx(
                      "flex cursor-pointer items-start gap-3 rounded-[8px] px-2.5 py-2 transition-colors duration-150",
                      on ? "bg-muted" : "hover:bg-muted/60",
                    )}
                  >
                    <span className="relative mt-0.5 grid shrink-0 place-items-center">
                      <input
                        type="checkbox"
                        checked={on}
                        onChange={(e) => toggle(ev.type, e.target.checked)}
                        className="peer size-4 cursor-pointer appearance-none rounded-[4px] border border-[color-mix(in_oklab,var(--color-foreground)_25%,transparent)] bg-background transition-colors duration-150 checked:border-primary checked:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      />
                      <CheckIcon className="pointer-events-none absolute size-3 text-primary-foreground opacity-0 transition-opacity duration-150 peer-checked:opacity-100" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="truncate [font-family:var(--font-mono,ui-monospace),ui-monospace,SFMono-Regular,Menlo,monospace] text-[13px] leading-5 text-foreground">{ev.type}</span>
                      <span className="truncate text-xs leading-5 text-muted-foreground">{ev.description}</span>
                    </span>
                  </label>
                );
              })}
            </div>
            {eventsError && (
              <p id={`${id}-events-error`} className="flex items-center gap-1.5 text-[13px] text-[var(--danger)]">
                <AlertIcon />
                Pick at least one event to send.
              </p>
            )}
          </fieldset>

          <div className="mt-auto flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-end gap-2">
              <button
                type="button"
                onClick={sendTest}
                aria-disabled={test.state === "sending" || undefined}
                className="inline-flex h-9 items-center gap-2 rounded-[8px] bg-background px-3.5 relative before:absolute before:inset-x-0 before:-inset-y-1 text-sm font-medium text-foreground shadow-[0_0_0_1px_var(--color-border),0_1px_2px_rgb(0_0_0/0.05)] transition-[background-color,scale] duration-150 ease-out hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-[0.97] aria-disabled:cursor-progress"
              >
                {test.state === "sending" ? <Spinner /> : <SendIcon />}
                {test.state === "sending" ? "Sending…" : "Send test event"}
              </button>
              <button
                type="submit"
                aria-disabled={save === "saving" || undefined}
                className="inline-flex h-9 min-w-[8.75rem] items-center justify-center gap-2 rounded-[8px] bg-primary px-4 relative before:absolute before:inset-x-0 before:-inset-y-1 text-sm font-medium text-primary-foreground transition-[background-color,scale] duration-150 ease-out hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-[0.97] aria-disabled:cursor-progress"
              >
                {save === "saving" && <Spinner />}
                {save === "saved" && <CheckIcon className="size-4" />}
                {save === "saving" ? "Adding…" : save === "saved" ? "Endpoint added" : "Add endpoint"}
              </button>
            </div>
            <p aria-live="polite" className="min-h-5 text-right text-[13px] text-muted-foreground tabular-nums">
              {test.state === "done" && (
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className={cx("size-1.5 rounded-full", test.ok ? "bg-[var(--tone)]" : "bg-[var(--danger)]")} />
                  {test.ok ? "Delivered" : "Not delivered"} <span className="[font-family:var(--font-mono,ui-monospace),ui-monospace,SFMono-Regular,Menlo,monospace] text-foreground">{test.event}</span>
                  {test.status ? `, ${test.status} in ${test.ms} ms` : `, no answer after ${test.ms} ms`}
                </span>
              )}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IllosWebhookSetup;

const Key = ({ children }: { children: string }) => <span className="text-[color-mix(in_oklab,var(--tone)_65%,var(--color-foreground))]">"{children}"</span>;
const Val = ({ children }: { children: ReactNode }) => <span className="text-card-foreground">{children}</span>;

const icon = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;
const CheckIcon = ({ className }: { className?: string }) => (
  <svg {...icon} strokeWidth={2.4} className={className}>
    <path d="M5 12.5 10 17.5 19 7" />
  </svg>
);
const SendIcon = () => (
  <svg {...icon} className="size-4">
    <path d="M4.5 12h12M12 6.5l5.5 5.5-5.5 5.5" />
  </svg>
);
const AlertIcon = () => (
  <svg {...icon} className="size-3.5 shrink-0">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5v5.5M12 16.5v.01" />
  </svg>
);
const Spinner = () => (
  <svg {...icon} className="size-4 animate-spin motion-reduce:animate-none">
    <path d="M12 3a9 9 0 1 0 9 9" />
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

const FANOUT_SVG = `<svg class="sh-webhook-fanout" xmlns="http://www.w3.org/2000/svg" width="720" height="460" viewBox="0 0 720 460" fill="none" stroke="#1daf9c" role="img" aria-labelledby="sh-webhook-fanout-t">
<title id="sh-webhook-fanout-t">Webhook fan-out</title>
<style>@scope (svg.sh-webhook-fanout) {
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

@keyframes sh-webhook-fanout_clock{0%{opacity:0}100%{opacity:0}}
.sh-clock{animation:sh-webhook-fanout_clock 4s linear both}
*{animation-iteration-count:infinite!important;animation-play-state:var(--illos-play,running)!important}
@media (prefers-reduced-motion: reduce){*{animation:none!important}}
}
</style>
<g class="sh-still"><path class="sc" d="M4 0V460M11 0V460M18 0V460M25 0V460M32 0V460M39 0V460M46 0V460M53 0V460M60 0V460M67 0V460M74 0V460M81 0V460M88 0V460M95 0V460M102 0V460M109 0V460M116 0V460M123 0V460M130 0V460M137 0V460M144 0V460M151 0V460M158 0V460M165 0V460M172 0V460M179 0V460M186 0V460M193 0V460M200 0V460M207 0V460M214 0V460M221 0V460M228 0V460M235 0V460M242 0V460M249 0V460M256 0V460M263 0V460M270 0V460M277 0V460M284 0V460M291 0V460M298 0V460M305 0V460M312 0V460M319 0V460M326 0V460M333 0V460M340 0V460M347 0V460M354 0V460M361 0V460M368 0V460M375 0V460M382 0V460M389 0V460M396 0V460M403 0V460M410 0V460M417 0V460M424 0V460M431 0V460M438 0V460M445 0V460M452 0V460M459 0V460M466 0V460M473 0V460M480 0V460M487 0V460M494 0V460M501 0V460M508 0V460M515 0V460M522 0V460M529 0V460M536 0V460M543 0V460M550 0V460M557 0V460M564 0V460M571 0V460M578 0V460M585 0V460M592 0V460M599 0V460M606 0V460M613 0V460M620 0V460M627 0V460M634 0V460M641 0V460M648 0V460M655 0V460M662 0V460M669 0V460M676 0V460M683 0V460M690 0V460M697 0V460M704 0V460M711 0V460M718 0V460"/><path class="gr" d="M0 0V460M96 0V460M192 0V460M288 0V460M384 0V460M480 0V460M576 0V460M672 0V460M0 0H720M0 96H720M0 192H720M0 288H720M0 384H720"/><path class="b0" d="M137 225.6V242M144 225.6V232.6M151 225.6V232.6" stroke-width="3.6"/><path class="b1" d="M123 235V242M130 225.6V242M137 216.2V223.2M144 216.2V223.2M144 235V251.4M151 216.2V223.2M151 235V242M158 216.2V242M165 225.6V232.6M564 150.4V157.4M564 225.6V232.6M571 65.8V72.8M571 310.2V317.2M571 385.4V392.4" stroke-width="2.7"/><path class="b2" d="M116 216.2V242M123 206.8V232.6M123 244.4V251.4M130 206.8V223.2M130 244.4V260.8M137 197.4V213.8M137 244.4V251.4M144 206.8V213.8M144 253.8V260.8M151 206.8V213.8M151 244.4V251.4M158 244.4V251.4M165 216.2V223.2M165 235V242M172 216.2V242M550 150.4V157.4M557 65.8V72.8M557 150.4V157.4M557 225.6V242M557 300.8V317.2M557 385.4V392.4M564 65.8V82.2M564 141V148M564 235V242M564 300.8V317.2M564 376V401.8M571 56.4V63.4M571 75.2V82.2M571 141V157.4M571 225.6V242M571 291.4V307.8M571 319.6V326.6M571 376V383M571 394.8V401.8M578 56.4V82.2M578 141V157.4M578 225.6V242M578 300.8V317.2M578 376V401.8" stroke-width="1.8"/><path class="b3" d="M102 216.2V242M109 206.8V260.8M116 197.4V213.8M116 244.4V260.8M123 188V204.4M123 253.8V270.2M130 188V204.4M130 263.2V270.2M137 188V195M137 253.8V270.2M144 188V204.4M144 263.2V270.2M151 188V204.4M151 253.8V270.2M158 197.4V213.8M158 253.8V260.8M165 197.4V213.8M165 244.4V260.8M172 206.8V213.8M172 244.4V260.8M179 206.8V251.4M186 206.8V251.4M193 206.8V251.4M200 216.2V251.4M207 225.6V232.6M214 225.6V232.6M228 225.6V232.6M235 206.8V213.8M235 263.2V270.2M242 188V195M242 244.4V251.4M249 206.8V213.8M256 206.8V213.8M263 178.6V185.6M263 272.6V279.6M277 225.6V232.6M277 253.8V260.8M284 225.6V232.6M284 282V289M291 197.4V204.4M291 225.6V232.6M291 253.8V260.8M291 282V289M298 197.4V204.4M298 225.6V232.6M305 197.4V204.4M305 225.6V232.6M312 291.4V298.4M319 225.6V232.6M333 263.2V270.2M340 300.8V307.8M347 150.4V157.4M347 188V195M354 225.6V232.6M368 141V148M368 225.6V232.6M375 225.6V232.6M389 225.6V232.6M396 131.6V138.6M396 225.6V232.6M410 225.6V232.6M417 122.2V129.2M417 225.6V232.6M431 225.6V232.6M431 282V289M438 169.2V176.2M438 225.6V232.6M438 338.4V345.4M445 169.2V176.2M445 225.6V232.6M445 282V289M452 225.6V232.6M459 225.6V232.6M466 225.6V232.6M473 103.4V110.4M473 225.6V232.6M480 225.6V232.6M494 159.8V166.8M494 291.4V298.4M501 159.8V166.8M501 225.6V232.6M508 159.8V166.8M515 225.6V232.6M515 366.6V373.6M522 225.6V232.6M529 225.6V232.6M529 300.8V307.8M536 150.4V157.4M536 225.6V232.6M536 300.8V307.8M536 376V383M543 65.8V82.2M543 150.4V157.4M543 225.6V232.6M543 300.8V307.8M543 376V392.4M550 56.4V91.6M550 131.6V148M550 159.8V166.8M550 216.2V242M550 291.4V326.6M550 376V401.8M557 47V63.4M557 75.2V91.6M557 131.6V148M557 159.8V176.2M557 206.8V223.2M557 244.4V251.4M557 291.4V298.4M557 319.6V326.6M557 366.6V383M557 394.8V411.2M564 47V63.4M564 84.6V91.6M564 122.2V138.6M564 159.8V176.2M564 206.8V223.2M564 244.4V251.4M564 291.4V298.4M564 319.6V336M564 366.6V373.6M564 404.2V411.2M571 47V54M571 84.6V91.6M571 122.2V138.6M571 159.8V176.2M571 206.8V223.2M571 244.4V251.4M571 329V336M571 366.6V373.6M571 404.2V411.2M578 47V54M578 84.6V91.6M578 122.2V138.6M578 159.8V176.2M578 206.8V223.2M578 244.4V251.4M578 291.4V298.4M578 319.6V336M578 366.6V373.6M578 404.2V411.2M585 56.4V91.6M585 131.6V166.8M585 206.8V251.4M585 291.4V326.6M585 376V411.2M592 65.8V82.2M592 141V166.8M592 216.2V242M592 300.8V326.6M592 376V401.8" stroke-width="1.1"/><path class="sp" d="M151 228v1.2"/></g>
<g class="chip"><rect class="cf" x="98" y="176" width="46.8" height="14.9"/><path class="ct" d="M107.6 180L103 180L103 186.9L107.6 186.9M103 183.45L106.45 183.45M110.36 180L112.66 186.9L114.96 180M122.32 180L117.72 180L117.72 186.9L122.32 186.9M117.72 183.45L121.17 183.45M125.08 186.9L125.08 180L129.68 186.9L129.68 180M132.44 180L137.04 180M134.74 180L134.74 186.9"/></g><g class="chip"><rect class="cf" x="606" y="22" width="105.68" height="14.9"/><path class="ct" d="M615.6 26L611 26L611 29.45L614.45 29.45L615.6 30.6L615.6 31.75L614.45 32.9L612.15 32.9L611 31.75M630.32 27.15L629.17 26L626.87 26L625.72 27.15L625.72 28.3L626.87 29.45L629.17 29.45L630.32 30.6L630.32 31.75L629.17 32.9L626.87 32.9L625.72 31.75M633.08 26L633.08 31.75L634.23 32.9L636.53 32.9L637.68 31.75L637.68 26M640.44 26L640.44 32.9L643.89 32.9L645.04 31.75L645.04 30.6L643.89 29.45L640.44 29.45M640.44 26L643.89 26L645.04 27.15L645.04 28.3L643.89 29.45M652.4 27.15L651.25 26L648.95 26L647.8 27.15L647.8 28.3L648.95 29.45L651.25 29.45L652.4 30.6L652.4 31.75L651.25 32.9L648.95 32.9L647.8 31.75M659.76 27.15L658.61 26L656.31 26L655.16 27.15L655.16 31.75L656.31 32.9L658.61 32.9L659.76 31.75M662.52 32.9L662.52 26L665.97 26L667.12 27.15L667.12 28.3L665.97 29.45L662.52 29.45M664.82 29.45L667.12 32.9M671.03 26L673.33 26M672.18 26L672.18 32.9M671.03 32.9L673.33 32.9M677.24 26L677.24 32.9L680.69 32.9L681.84 31.75L681.84 30.6L680.69 29.45L677.24 29.45M677.24 26L680.69 26L681.84 27.15L681.84 28.3L680.69 29.45M689.2 26L684.6 26L684.6 32.9L689.2 32.9M684.6 29.45L688.05 29.45M691.96 32.9L691.96 26L695.41 26L696.56 27.15L696.56 28.3L695.41 29.45L691.96 29.45M694.26 29.45L696.56 32.9M703.92 27.15L702.77 26L700.47 26L699.32 27.15L699.32 28.3L700.47 29.45L702.77 29.45L703.92 30.6L703.92 31.75L702.77 32.9L700.47 32.9L699.32 31.75"/></g>
<rect class="sh-clock" width="0" height="0"/>
<metadata class="illos-field" data-cycle="4"><![CDATA[float field(vec2 p, float t) {
  if (p.x < 18.0 || p.x > 702.0) return 0.0;
  vec2 S = vec2(140.0, 230.0);
  float v = blob(p, S, 30.0, 0.78);
  // the ring as the event fires
  float r = (t - 0.3) / 0.9;
  if (r > 0.0 && r < 1.0) v += 0.55 * (1.0 - r) * exp(-pow(length(p - S) - 30.0 - 80.0 * r, 2.0) / 60.0);
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    vec2 D = vec2(570.0, 70.0 + 80.0 * fi);
    v += seg(p, S, D, 6.0, 0.12);
    float u = clamp((t - 0.5) / 1.1, 0.0, 1.0);
    if (t > 0.5 && t < 1.65) v += blob(p, mix(S, D, ease(u)), 9.0, 0.95);
    v += blob(p, D, 22.0, 0.45 + 0.45 * sm(1.5, 1.7, t) * (1.0 - sm(2.6, 3.6, t)));
  }
  return v;
}]]></metadata>
</svg>`;

// On a well the still's screen lines and grid are tints, as the live field draws them, not solid ground-coloured lines.
const LIVE = "<style>.illos-art .sc{stroke:color-mix(in srgb,var(--illos-ramp-4) 18%,transparent)}.illos-art .gr{stroke:color-mix(in srgb,var(--illos-ink) 9%,transparent)}.illos-live{position:relative}.illos-live>svg{position:relative}.illos-live .sh-still{visibility:hidden}.illos-field-canvas{position:absolute;inset:0;width:100%;height:100%;display:block}</style>";

/** One Shader illustration, inline, with its live field drawn beneath the SVG. Decorative: the form says what it means. */
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
