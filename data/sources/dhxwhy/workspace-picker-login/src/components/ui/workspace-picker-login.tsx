"use client";

import * as React from "react";
import { ArrowRight, Building2, Check, Fingerprint, KeyRound, LoaderCircle, Lock, Mail, Plus, ShieldCheck } from "lucide-react";

export type WorkspaceMethod = "sso" | "password" | "passkey";
export type WorkspaceStatus = "idle" | "looking" | "ready" | "continuing" | "done";

export type Workspace = {
  id: string;
  name: string;
  /** Shown under the name, for example acme.yourapp.com. */
  address?: string;
  members?: number;
  lastUsed?: string;
  method: WorkspaceMethod;
  /** Picks one of the five chart-token gradients. Defaults to the item index. */
  tone?: 1 | 2 | 3 | 4 | 5;
  initials?: string;
};

type DivProps = React.ComponentProps<"div">;

export type WorkspacePickerLoginProps = {
  appName?: string;
  logo?: React.ReactNode;
  title?: string;
  description?: string;
  email?: string;
  defaultEmail?: string;
  onEmailChange?: (email: string) => void;
  /** Host state: idle shows the email field, looking shows skeletons, ready shows the list. */
  status?: WorkspaceStatus;
  workspaces?: Workspace[];
  selected?: string | null;
  defaultSelected?: string | null;
  onSelect?: (workspaceId: string | null) => void;
  onLookup?: (email: string) => void;
  onContinue?: (workspace: Workspace, credentials: { password?: string }) => void;
  onChangeEmail?: () => void;
  onCreateWorkspace?: () => void;
  welcome?: string;
  footer?: React.ReactNode;
  className?: string;
  ref?: DivProps["ref"];
};

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const TONES = {
  1: "from-chart-1 to-chart-4",
  2: "from-chart-2 to-chart-3",
  3: "from-chart-3 to-chart-1",
  4: "from-chart-4 to-chart-2",
  5: "from-chart-5 to-chart-4",
} as const;
const METHOD_LABEL = { sso: "SSO", password: "Password", passkey: "Passkey" } as const;
const METHOD_TINT = { sso: "bg-chart-3/15 text-foreground", password: "bg-muted text-muted-foreground", passkey: "bg-chart-2/15 text-foreground" } as const;
const FOCUS = "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card";

function initialsOf(name: string) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]!.toUpperCase()).join("");
}

function MethodIcon({ method, className = "size-3.5" }: { method: WorkspaceMethod; className?: string }) {
  if (method === "sso") return <ShieldCheck className={className} aria-hidden="true" />;
  if (method === "passkey") return <Fingerprint className={className} aria-hidden="true" />;
  return <KeyRound className={className} aria-hidden="true" />;
}

export function WorkspacePickerLogin({
  appName = "your app",
  logo,
  title,
  description = "Enter your email and we'll find your workspaces.",
  email,
  defaultEmail = "",
  onEmailChange,
  status = "idle",
  workspaces = [],
  selected,
  defaultSelected = null,
  onSelect,
  onLookup,
  onContinue,
  onChangeEmail,
  onCreateWorkspace,
  welcome,
  footer,
  className = "",
  ref,
}: WorkspacePickerLoginProps) {
  const id = React.useId();
  const [localEmail, setLocalEmail] = React.useState(defaultEmail);
  const [localSelected, setLocalSelected] = React.useState(defaultSelected as string | null);
  const [password, setPassword] = React.useState("");
  const [reduced, setReduced] = React.useState(true);
  const list = React.useRef(null as HTMLUListElement | null);
  const card = React.useRef(null as HTMLDivElement | null);
  const previous = React.useRef({} as { [id: string]: DOMRect });
  const previousHeight = React.useRef(0);
  const animations = React.useRef([] as Animation[]);
  const value = email ?? localEmail;
  const normalized = value.trim().toLowerCase();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
  const chosenId = selected === undefined ? localSelected : selected;
  const chosen = workspaces.find((workspace) => workspace.id === chosenId) ?? null;
  const listing = status === "ready" || status === "continuing" || status === "done";

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const select = (next: string | null) => {
    if (selected === undefined) setLocalSelected(next);
    onSelect?.(next);
  };

  React.useEffect(() => {
    if (listing && workspaces.length === 1 && chosenId !== workspaces[0]!.id) select(workspaces[0]!.id);
    // select is stable enough for this effect; the dependencies are the real inputs.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listing, workspaces, chosenId]);

  React.useEffect(() => {
    if (status === "idle") { if (chosenId !== null) select(null); setPassword(""); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  // Items enter with a stagger, the chosen one rises to the top with FLIP, and the card height follows.
  React.useLayoutEffect(() => {
    const box = card.current;
    const items = [...(list.current?.querySelectorAll("[data-workspace]") ?? [])] as HTMLElement[];
    const before = previous.current;
    const after = {} as { [id: string]: DOMRect };
    for (const item of items) after[item.dataset.workspace!] = item.getBoundingClientRect();
    previous.current = after;
    const height = box?.getBoundingClientRect().height ?? 0;
    const oldHeight = previousHeight.current;
    previousHeight.current = height;
    if (reduced) return;
    for (const animation of animations.current) animation.cancel();
    animations.current = [];
    items.forEach((item, index) => {
      const key = item.dataset.workspace!;
      const start = before[key];
      const end = after[key];
      if (!start) {
        animations.current.push(item.animate([{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 420, delay: index * 70, easing: EASE, fill: "backwards" }));
      } else if (end && Math.abs(start.top - end.top) > 1) {
        animations.current.push(item.animate([{ transform: `translateY(${start.top - end.top}px)` }, { transform: "translateY(0)" }], { duration: 520, easing: EASE }));
      }
    });
    if (box && oldHeight && Math.abs(oldHeight - height) > 1) {
      animations.current.push(box.animate([{ height: `${oldHeight}px` }, { height: `${height}px` }], { duration: 420, easing: EASE }));
    }
  }, [status, workspaces, chosenId, reduced]);

  React.useEffect(() => () => { for (const animation of animations.current) animation.cancel(); }, []);

  const changeEmail = (next: string) => {
    if (email === undefined) setLocalEmail(next);
    onEmailChange?.(next);
  };

  const submitEmail = (event: React.FormEvent) => {
    event.preventDefault();
    if (!valid || status !== "idle") return;
    onLookup?.(normalized);
  };

  const continueWith = (event: React.FormEvent) => {
    event.preventDefault();
    if (!chosen || status !== "ready") return;
    onContinue?.(chosen, chosen.method === "password" ? { password } : {});
  };

  const visible = chosen ? [chosen] : workspaces;

  return (
    <div
      ref={ref}
      data-slot="workspace-picker-login"
      data-status={status}
      data-selected={chosen?.id ?? ""}
      className={`w-full max-w-[400px] text-card-foreground ${className}`}
    >
      <div ref={card} className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/5">
        <div aria-hidden="true" className="h-1 w-full bg-linear-to-r from-chart-1 via-chart-4 to-chart-2" />
        <div className="p-6">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-chart-1 to-chart-4 text-background shadow-sm">{logo ?? <Building2 className="size-5" aria-hidden="true" />}</div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground"><Lock className="size-3" aria-hidden="true" />{status === "done" ? "Signed in" : "Your workspaces"}</span>
          </div>
          <h2 className="text-[22px] font-semibold leading-7 tracking-tight">{title ?? `Sign in to ${appName}`}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{status === "done" ? welcome ?? "You're in." : listing && chosen ? `Continue to ${chosen.name}.` : listing ? `${workspaces.length} ${workspaces.length === 1 ? "workspace" : "workspaces"} for ${normalized}` : status === "looking" ? `Looking up ${normalized}…` : description}</p>

          {status === "idle" && (
            <form data-email-form onSubmit={submitEmail} className="mt-5">
              <label htmlFor={`${id}-email`} className="mb-1.5 block text-xs font-medium">Email address</label>
              <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 focus-within:ring-2 focus-within:ring-ring">
                <Mail className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                <input id={`${id}-email`} type="email" inputMode="email" autoComplete="email" value={value} onChange={(event) => changeEmail(event.target.value)} placeholder="you@company.com" className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
              </div>
              <button type="submit" data-lookup disabled={!valid} className={`mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-medium text-primary-foreground transition-colors motion-reduce:transition-none hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground ${FOCUS}`}>
                Continue <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </form>
          )}

          {status === "looking" && (
            <ul data-skeleton aria-busy="true" aria-label="Finding workspaces" className="mt-5 space-y-2">
              {[0, 1].map((index) => (
                <li key={index} className="flex items-center gap-3 rounded-2xl border border-border/70 p-3">
                  <span className="size-10 shrink-0 rounded-xl bg-muted motion-safe:animate-pulse" />
                  <span className="flex-1 space-y-2"><span className="block h-3 w-2/5 rounded bg-muted motion-safe:animate-pulse" /><span className="block h-2.5 w-3/5 rounded bg-muted/70 motion-safe:animate-pulse" /></span>
                </li>
              ))}
            </ul>
          )}

          {listing && (
            <>
              <ul ref={list} data-workspace-list role="listbox" aria-label="Workspaces" aria-activedescendant={chosen ? `${id}-${chosen.id}` : undefined} className="mt-5 space-y-2">
                {visible.map((workspace) => {
                  const tone = TONES[workspace.tone ?? (((workspaces.indexOf(workspace) % 5) + 1) as 1 | 2 | 3 | 4 | 5)];
                  const active = chosen?.id === workspace.id;
                  return (
                    <li key={workspace.id} id={`${id}-${workspace.id}`} data-workspace={workspace.id} role="option" aria-selected={active}>
                      <button
                        type="button"
                        data-pick={workspace.id}
                        disabled={status !== "ready"}
                        onClick={() => select(active ? null : workspace.id)}
                        onKeyDown={(event) => {
                          if (active || !["ArrowDown", "ArrowUp"].includes(event.key)) return;
                          event.preventDefault();
                          const target = (event.currentTarget.closest("li")?.[event.key === "ArrowDown" ? "nextElementSibling" : "previousElementSibling"] as HTMLElement | null)?.querySelector("button");
                          target?.focus();
                        }}
                        className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition-colors motion-reduce:transition-none ${active ? "border-transparent bg-muted/60 ring-2 ring-ring" : "border-border/70 hover:bg-muted/40"} ${FOCUS}`}
                      >
                        <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br text-sm font-semibold text-background shadow-sm ${tone}`}>{workspace.initials ?? initialsOf(workspace.name)}</span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium">{workspace.name}</span>
                          <span data-meta className="mt-0.5 block truncate text-xs text-muted-foreground">
                            {workspace.address ?? `${workspace.id}.${appName.toLowerCase().replace(/\s+/g, "")}.com`}
                            {workspace.members !== undefined && ` · ${workspace.members.toLocaleString()} ${workspace.members === 1 ? "member" : "members"}`}
                            {workspace.lastUsed && ` · last used ${workspace.lastUsed}`}
                          </span>
                        </span>
                        <span className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[10px] font-medium ${METHOD_TINT[workspace.method]}`}><MethodIcon method={workspace.method} className="size-3" />{METHOD_LABEL[workspace.method]}</span>
                        {active && <Check className="size-4 shrink-0 text-foreground" aria-hidden="true" />}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {chosen && status !== "done" && (
                <form data-continue onSubmit={continueWith} className="mt-3 space-y-3">
                  {chosen.method === "password" && (
                    <div>
                      <label htmlFor={`${id}-password`} className="mb-1.5 block text-xs font-medium">Password</label>
                      <input id={`${id}-password`} type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                    </div>
                  )}
                  <button type="submit" data-primary disabled={status !== "ready" || (chosen.method === "password" && !password)} className={`flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-medium text-primary-foreground transition-colors motion-reduce:transition-none hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 ${FOCUS}`}>
                    {status === "continuing" ? <LoaderCircle className="size-4 motion-safe:animate-spin" aria-hidden="true" /> : <MethodIcon method={chosen.method} className="size-4" />}
                    {status === "continuing" ? "Opening…" : chosen.method === "sso" ? `Continue with ${chosen.name} SSO` : chosen.method === "passkey" ? "Continue with passkey" : "Continue with password"}
                  </button>
                </form>
              )}

              {status === "done" && (
                <div data-done role="status" className="mt-3 flex items-center gap-3 rounded-2xl border border-border/70 bg-muted/40 p-3 text-sm">
                  <span className="flex size-8 items-center justify-center rounded-full bg-linear-to-br from-chart-2 to-chart-3 text-background"><Check className="size-4" strokeWidth={3} aria-hidden="true" /></span>
                  <span className="font-medium">{welcome ?? `Welcome back to ${chosen?.name ?? appName}`}</span>
                </div>
              )}

              {status === "ready" && (
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <button type="button" data-change-email onClick={() => { select(null); onChangeEmail?.(); }} className={`rounded px-1 underline decoration-border underline-offset-4 hover:text-foreground ${FOCUS}`}>Not you? Change email</button>
                  {onCreateWorkspace && <button type="button" data-create onClick={onCreateWorkspace} className={`inline-flex items-center gap-1 rounded px-1 hover:text-foreground ${FOCUS}`}><Plus className="size-3" aria-hidden="true" />New workspace</button>}
                </div>
              )}
            </>
          )}
        </div>
        {footer && <div className="border-t border-border bg-muted/30 px-6 py-3 text-center text-xs text-muted-foreground">{footer}</div>}
      </div>
      <p className="sr-only" role="status" aria-live="polite">{status === "looking" ? "Finding your workspaces" : listing ? `${workspaces.length} workspaces found${chosen ? `, ${chosen.name} selected` : ""}` : ""}</p>
    </div>
  );
}

export default WorkspacePickerLogin;
