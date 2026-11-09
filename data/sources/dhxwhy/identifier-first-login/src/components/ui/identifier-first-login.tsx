"use client";

import * as React from "react";
import { ArrowRight, Building2, Check, ChevronDown, Fingerprint, KeyRound, LoaderCircle, LockKeyhole, Mail, ShieldCheck } from "lucide-react";

export type LoginMethod = "sso" | "google" | "microsoft" | "apple" | "passkey" | "password";
export type LoginStatus = "idle" | "pending" | "success";
export type LoginRoute = { domain: string; method: "sso" | "google" | "microsoft" | "apple"; label?: string };
export type LoginAccount = { email: string; name: string; /** Profile photo URL; shown instead of the initial once signed in. */ avatar?: string; initials?: string; method: "passkey" };
export type LoginDemoStep = { at: number; email?: string; typeFor?: number; status?: LoginStatus };

export type IdentifierFirstLoginProps = {
  appName?: string;
  logo?: React.ReactNode;
  description?: string;
  email?: string;
  defaultEmail?: string;
  onEmailChange?: (email: string) => void;
  /** Wait after the last edit before suggesting a method. Enter and blur detect immediately. */
  detectDelay?: number;
  /** UI hints only. Resolve enterprise routing and account availability on your server.
   * Only supply knownAccounts already remembered on this device, never an account directory. */
  routes?: LoginRoute[];
  knownAccounts?: LoginAccount[];
  lastUsed?: LoginMethod;
  /** Explicit social choices also work before email entry; their email argument is then empty. */
  onContinue?: (method: LoginMethod, email: string) => void;
  /** Controlled by the integrating app; clicking never claims authentication succeeded. */
  status?: LoginStatus;
  error?: string;
  footer?: React.ReactNode;
  className?: string;
  /** Presentation only: does not invoke onContinue or a credential API. Off by default. */
  autoplay?: boolean;
  demoSequence?: LoginDemoStep[];
  demoDuration?: number;
};

const NO_ROUTES: LoginRoute[] = [];
const NO_ACCOUNTS: LoginAccount[] = [];
const NO_STEPS: LoginDemoStep[] = [];
const PROVIDERS = ["google", "microsoft", "apple"] as const;
const PROVIDER_NAMES = { google: "Google", microsoft: "Microsoft", apple: "Apple" };
const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card";
const EASE = "cubic-bezier(.22,1,.36,1)";

function ActionProgress({ label, compact = false, complete = false }: { label: string; compact?: boolean; complete?: boolean }) {
  return (
    <span data-action-progress role="status" className={`pointer-events-none absolute inset-0 flex items-center justify-center ${compact ? "flex-col gap-0.5 text-[9px] leading-3" : "gap-2 text-xs"}`}>
      {complete ? <Check className="size-3.5 shrink-0" aria-hidden="true" /> : <LoaderCircle className="size-3.5 shrink-0 motion-safe:animate-spin" aria-hidden="true" />}
      <span key={label} className="whitespace-nowrap">{label}</span>
    </span>
  );
}

function ProviderIcon({ provider }: { provider: "google" | "microsoft" | "apple" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px] shrink-0" aria-hidden="true">
      {provider === "google" ? (
        <path d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.9-1.75 2.98-4.33 2.98-7.36ZM12 22c2.7 0 4.96-.9 6.62-2.41l-3.24-2.51c-.9.6-2.04.96-3.38.96-2.6 0-4.8-1.75-5.59-4.11H3.07v2.59A10 10 0 0 0 12 22ZM6.41 13.93A6 6 0 0 1 6.1 12c0-.67.11-1.32.31-1.93V7.48H3.07A10 10 0 0 0 2 12c0 1.61.39 3.14 1.07 4.52l3.34-2.59ZM12 5.96c1.47 0 2.79.5 3.82 1.5l2.87-2.87A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.93 5.48l3.34 2.59C7.2 7.71 9.4 5.96 12 5.96Z" />
      ) : provider === "microsoft" ? (
        <path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z" />
      ) : (
        <path d="M16.8 2c.1 1.5-.5 2.7-1.3 3.6-.9 1-2.1 1.5-3.3 1.4-.2-1.4.5-2.7 1.3-3.5.9-.9 2.2-1.5 3.3-1.5Zm3.4 15.2c-.5 1.2-.8 1.8-1.5 2.8-1 1.4-2.3 3.1-3.9 3.1-1.4 0-1.8-.9-3.7-.9s-2.4.9-3.7.9c-1.5.1-2.8-1.5-3.7-2.9-2.6-3.7-2.9-8.1-1.3-10.5C3.5 8 5.2 7 6.8 7c1.7 0 2.7.9 4.2.9 1.4 0 2.3-.9 4.1-.9 1.5 0 3.1.8 4.2 2.1-3.7 2-3.1 7.1.9 8.1Z" transform="translate(1 -1) scale(.92)" />
      )}
    </svg>
  );
}

/** An identifier-first presentation layer, not an authentication or account-discovery service. */
export function IdentifierFirstLogin({
  appName = "your workspace",
  logo,
  description = "Enter your email — we'll pick the right way in.",
  email,
  defaultEmail = "",
  onEmailChange,
  detectDelay = 400,
  routes = NO_ROUTES,
  knownAccounts = NO_ACCOUNTS,
  lastUsed,
  onContinue,
  status = "idle",
  error,
  footer,
  className = "",
  autoplay = false,
  demoSequence = NO_STEPS,
  demoDuration = 7000,
}: IdentifierFirstLoginProps) {
  const id = React.useId();
  const [localEmail, setLocalEmail] = React.useState(defaultEmail);
  const [demoEmail, setDemoEmail] = React.useState("");
  const [demoStatus, setDemoStatus] = React.useState("idle" as LoginStatus);
  const [interacted, setInteracted] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [reduced, setReduced] = React.useState(true);
  const [ready, setReady] = React.useState(false);
  // Prefilled identifiers retain their server-rendered route. Every edit waits anew.
  const [detected, setDetected] = React.useState({ value: email ?? defaultEmail, resolved: true });
  const detectionTimer = React.useRef(0);
  const previousDetection = React.useRef(null as typeof detected | null);
  const rootRef = React.useRef(null as HTMLDivElement | null);
  const inputRef = React.useRef(null as HTMLInputElement | null);
  const previous = React.useRef([] as { key: string; rect: DOMRect }[]);
  const previousHeight = React.useRef(0);
  const animations = React.useRef([] as Animation[]);
  const stopRef = React.useRef(false);
  const quietEmail = React.useRef(null as string | null);
  const openingRef = React.useRef(false);
  const feedbackTimer = React.useRef(0);
  const pressAnimation = React.useRef(null as Animation | null);
  const [action, setAction] = React.useState(null as { key: string; method: LoginMethod; email: string; opening: boolean } | null);
  const playing = autoplay && ready && !reduced && !interacted && demoSequence.length > 0;
  const value = playing ? demoEmail : email ?? localEmail;
  // Invalidate before rendering children, including an edit back to a previous value.
  if (detected.value !== value) setDetected({ value, resolved: false });
  const normalized = value.trim().toLowerCase();
  const inputValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
  const valid = inputValid && detected.value === value && detected.resolved;
  const settledDetection = valid ? detected : null;
  const domain = inputValid ? normalized.split("@")[1] ?? "" : "";
  const account = inputValid ? knownAccounts.find((item) => item.email.trim().toLowerCase() === normalized) : undefined;
  const route = inputValid ? routes.find((item) => item.domain.trim().toLowerCase() === domain) : undefined;
  const method: LoginMethod = account?.method ?? route?.method ?? "password";
  const mode = !value ? "empty" : !valid ? "typing" : method;
  const currentStatus = playing ? demoStatus : status;
  const busy = currentStatus !== "idle";
  const quietAction = action?.email === value ? action : null;
  const actionPending = Boolean(quietAction && (quietAction.opening || currentStatus === "pending"));
  const actionComplete = Boolean(quietAction && !quietAction.opening && currentStatus === "success");
  const blocked = busy || actionPending;
  const verification = busy && !quietAction;
  const progressLabel = actionComplete ? "Signed in" : `Opening ${quietAction?.method === "password" ? "password" : PROVIDER_NAMES[quietAction?.method as keyof typeof PROVIDER_NAMES] ?? "sign-in"}…`;
  const showsProgress = (key: string) => quietAction?.key === key && (actionPending || actionComplete);
  const primaryProvider = PROVIDERS.find((provider) => valid && method === provider);
  const promoted = Boolean(primaryProvider);
  const alternatives = expanded && valid && method !== "password";
  const buttonLabel = method === "sso" ? `Continue with ${route?.label ?? "SSO"}` : method === "passkey" ? "Continue with passkey" : "Continue with email";
  const hint = !valid ? "Use your work or personal email" : method === "sso" ? `${domain} uses ${route?.label ?? "SSO"}` : method === "passkey" ? `${account?.name ?? "Your account"}, your passkey is ready on this device` : primaryProvider ? `${PROVIDER_NAMES[primaryProvider]} account${lastUsed === primaryProvider ? " · last used here" : " · ready to continue"}` : "Continue to password sign-in";

  const detect = React.useCallback((next: string) => {
    window.clearTimeout(detectionTimer.current);
    if (quietEmail.current === next) return;
    // Enter, blur, and the timer can converge on one value: commit it only once.
    setDetected((current) => current.value === next && current.resolved ? current : { value: next, resolved: true });
  }, []);

  React.useLayoutEffect(() => {
    if (quietEmail.current !== null && quietEmail.current !== value) {
      quietEmail.current = null;
      openingRef.current = false;
      window.clearTimeout(feedbackTimer.current);
      setAction(null);
    }
  }, [value]);

  React.useEffect(() => {
    detectionTimer.current = window.setTimeout(() => detect(value), Math.max(0, detectDelay));
    return () => window.clearTimeout(detectionTimer.current);
  }, [value, detectDelay, detect]);

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduced(media.matches);
      if (media.matches) animations.current.forEach((animation) => animation.cancel());
      if (media.matches) pressAnimation.current?.cancel();
    };
    update();
    setReady(true);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  React.useEffect(() => {
    if (!playing) return;
    let cancelled = false;
    const timers: number[] = [];
    const schedule = (callback: () => void, delay: number) => {
      timers.push(window.setTimeout(() => { if (!cancelled && !stopRef.current) callback(); }, delay));
    };
    const cycle = () => {
      timers.splice(0).forEach((timer) => window.clearTimeout(timer));
      setDemoEmail("");
      setDemoStatus("idle");
      for (const step of demoSequence) {
        const text = step.email;
        if (text !== undefined) {
          schedule(() => { setDemoEmail(""); setDemoStatus("idle"); }, step.at);
          if (step.typeFor && text.length) {
            for (let index = 1; index <= text.length; index += 1) {
              schedule(() => setDemoEmail(text.slice(0, index)), step.at + step.typeFor * index / text.length);
            }
          } else schedule(() => setDemoEmail(text), step.at);
        }
        if (step.status) schedule(() => setDemoStatus(step.status!), step.at);
      }
      schedule(cycle, Math.max(1000, demoDuration));
    };
    cycle();
    return () => { cancelled = true; timers.forEach((timer) => window.clearTimeout(timer)); };
  }, [playing, demoSequence, demoDuration]);

  React.useEffect(() => {
    setExpanded(false);
  }, [normalized]);

  // Stable buttons change layout slots; FLIP animates those same DOM nodes.
  React.useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (quietEmail.current === value) return;
    const live = [...root.querySelectorAll("[data-flip]")].map((node) => ({ node: node as HTMLElement, key: node.getAttribute("data-flip")! }));
    animations.current.forEach((animation) => animation.cancel());
    animations.current = [];
    const height = root.getBoundingClientRect().height;
    const oldHeight = previousHeight.current;
    const old = previous.current;
    const newDetection = previousDetection.current !== settledDetection;
    previousDetection.current = settledDetection;
    previousHeight.current = height;
    previous.current = live.map(({ key, node }) => ({ key, rect: node.getBoundingClientRect() }));
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled || reduced || !ready || quietEmail.current === value) return;
      const revealPrimary = newDetection && valid && !promoted && currentStatus === "idle";
      for (const { node, key } of live) {
        // A reveal already animates the primary; do not stack a second FLIP on it.
        if (key === "primary" && revealPrimary) continue;
        const from = old.find((item) => item.key === key)?.rect;
        const to = node.getBoundingClientRect();
        if (from && from.width && to.width && (Math.abs(from.x - to.x) + Math.abs(from.y - to.y) + Math.abs(from.width - to.width) > 1)) {
          animations.current.push(node.animate([
            { transform: `translate(${from.x - to.x}px, ${from.y - to.y}px) scale(${from.width / to.width}, ${from.height / to.height})` },
            { transform: "translate(0, 0) scale(1, 1)" },
          ], { duration: 520, easing: EASE }));
        }
      }
      if (oldHeight && Math.abs(oldHeight - height) > 1) {
        animations.current.push(root.animate([{ height: `${oldHeight}px` }, { height: `${height}px` }], { duration: 360, easing: EASE }));
      }
      const primary = root.querySelector("[data-primary]");
      if (primary && revealPrimary) {
        animations.current.push(primary.animate([{ opacity: .35, transform: "translateY(14px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 420, easing: EASE }));
      }
      const ring = root.querySelector("[data-passkey-ring]");
      if (ring && currentStatus === "pending") {
        animations.current.push(ring.animate([{ strokeDashoffset: 164, transform: "rotate(-90deg)" }, { strokeDashoffset: 0, transform: "rotate(270deg)" }], { duration: 950, easing: "ease-in-out", iterations: Infinity }));
      }
    });
    return () => { cancelled = true; };
  }, [mode, promoted, alternatives, currentStatus, reduced, ready, valid, settledDetection]);

  React.useEffect(() => () => {
    animations.current.forEach((animation) => animation.cancel());
    pressAnimation.current?.cancel();
    window.clearTimeout(feedbackTimer.current);
  }, []);

  const stopDemo = () => {
    if (!playing || stopRef.current) return;
    stopRef.current = true;
    setLocalEmail(value);
    onEmailChange?.(value);
    setInteracted(true);
  };
  const prepareQuiet = (button: HTMLButtonElement) => {
    quietEmail.current = value;
    window.clearTimeout(detectionTimer.current);
    // Hold an interrupted layout at its visible frame, rather than snapping to its end.
    const moving = rootRef.current?.getAnimations({ subtree: true }) ?? [];
    for (const animation of moving) {
      if (animations.current.includes(animation) || !button.contains((animation.effect as KeyframeEffect).target)) {
        const time = animation.currentTime;
        animation.pause();
        animation.currentTime = time;
      }
    }
    stopDemo();
  };
  const startAction = (choice: LoginMethod, button: HTMLButtonElement, key: string) => {
    if (busy || openingRef.current) return;
    if (choice === "password" && !inputValid) { inputRef.current?.focus(); return; }
    prepareQuiet(button);
    openingRef.current = true;
    setAction({ key, method: choice, email: value, opening: true });
    window.clearTimeout(feedbackTimer.current);
    feedbackTimer.current = window.setTimeout(() => {
      openingRef.current = false;
      setAction((current) => current ? { ...current, opening: false } : null);
    }, 600);
    pressAnimation.current?.cancel();
    if (!reduced) pressAnimation.current = button.animate([{ scale: "1" }, { scale: ".97", offset: .45 }, { scale: "1" }], { duration: 120, easing: "ease-out" });
    // An explicit provider choice neither validates nor promotes an email route.
    onContinue?.(choice, inputValid ? normalized : "");
  };
  const resumeDetection = () => {
    quietEmail.current = null;
    setAction(null);
  };
  const continueWith = (choice: LoginMethod) => {
    if (busy || openingRef.current || !inputValid) { if (!busy && !openingRef.current) inputRef.current?.focus(); return; }
    resumeDetection();
    detect(value);
    stopDemo();
    onContinue?.(choice, normalized);
  };
  const submit = (event: React.SubmitEvent) => {
    event.preventDefault();
    if (method === "password" && rootRef.current) startAction("password", rootRef.current.querySelector("[data-primary]") as HTMLButtonElement, "primary");
    else continueWith(method);
  };

  return (
    <div
      ref={rootRef}
      data-slot="identifier-first-login"
      data-mode={mode}
      data-status={currentStatus}
      data-autoplay={autoplay ? "on" : "off"}
      data-playing={playing}
      data-ready={ready}
      onPointerDownCapture={(event) => {
        const button = (event.target as Element).closest("[data-quiet-action]") as HTMLButtonElement | null;
        if (button && !blocked) prepareQuiet(button); else stopDemo();
      }}
      onKeyDownCapture={(event) => {
        const button = (event.target as Element).closest("[data-quiet-action]") as HTMLButtonElement | null;
        if (button && !blocked && (event.key === "Enter" || event.key === " ")) prepareQuiet(button); else stopDemo();
      }}
      onFocusCapture={stopDemo}
      className={`relative w-full max-w-[400px] overflow-hidden rounded-3xl border border-border bg-card text-card-foreground shadow-xl shadow-primary/5 ${className}`}
    >
      <div className="px-7 pt-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground" aria-hidden="true">
            {logo ?? <LockKeyhole className="size-5" />}
          </span>
          <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[.16em] text-muted-foreground"><LockKeyhole className="size-3" aria-hidden="true" />Your workspace</span>
        </div>
        <h1 id={`${id}-heading`} className="text-[24px] font-semibold leading-tight tracking-tight">Sign in to {appName}</h1>
        <p className="mt-2 text-[13px] leading-5 text-muted-foreground">{description}</p>
      </div>

      <form onSubmit={submit} aria-labelledby={`${id}-heading`} aria-busy={currentStatus === "pending" || actionPending} className="px-7 pb-5 pt-5">
        <label htmlFor={`${id}-email`} className="mb-1.5 block text-xs font-medium">Email address</label>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <input
            ref={inputRef}
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="username"
            autoCapitalize="none"
            spellCheck={false}
            required
            value={value}
            disabled={verification}
            readOnly={Boolean(quietAction && blocked)}
            aria-describedby={error ? `${id}-error` : `${id}-hint`}
            aria-invalid={error ? true : undefined}
            onChange={(event) => { stopDemo(); setLocalEmail(event.target.value); onEmailChange?.(event.target.value); }}
            onBlur={() => detect(value)}
            onKeyDown={(event) => { if (event.key === "Enter" && !blocked) { resumeDetection(); detect(value); } }}
            placeholder="you@example.com"
            className={`h-[52px] w-full rounded-xl border border-border bg-background pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground disabled:opacity-70 ${FOCUS}`}
          />
        </div>
        <div className="relative flex min-h-8 items-center" id={`${id}-hint`}>
          <span data-route-hint className={`inline-flex max-w-full items-center gap-1.5 rounded-md px-1.5 py-1 text-[10px] leading-4 ${error ? "invisible" : ""} ${valid ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}>
            {valid ? <ShieldCheck className="size-3 shrink-0" aria-hidden="true" /> : <LockKeyhole className="size-3 shrink-0" aria-hidden="true" />}{hint}
          </span>
          {error && <p id={`${id}-error`} role="alert" title={error} className="absolute inset-x-0 truncate text-[11px] font-medium text-foreground">{error}</p>}
        </div>
        <p className="sr-only" aria-live="polite" aria-atomic="true">{valid ? `${hint}. ${primaryProvider ? `Continue with ${PROVIDER_NAMES[primaryProvider]}` : buttonLabel}.` : "Enter your email to find a sign-in method."}</p>

        <div data-actions className={`relative ${verification ? "hidden" : ""}`} style={{ height: valid && method === "sso" ? 134 : 124 }}>
          <button
            type="submit"
            data-primary
            data-flip="primary"
            data-quiet-action={method === "password" ? "password" : undefined}
            data-opening={actionPending && quietAction?.key === "primary"}
            aria-busy={actionPending && quietAction?.key === "primary"}
            aria-disabled={blocked || undefined}
            hidden={promoted}
            disabled={blocked && quietAction?.key !== "primary"}
            className={`absolute left-0 top-0 flex h-12 w-full origin-top-left items-center justify-center gap-2.5 rounded-xl bg-primary px-4 text-[13px] font-medium text-primary-foreground transition-colors duration-120 motion-reduce:transition-none hover:bg-primary/90 disabled:cursor-not-allowed ${FOCUS}`}
          >
            <span className={`flex items-center gap-2.5 ${showsProgress("primary") ? "invisible" : ""}`}>
              {valid && (method === "sso" ? <Building2 className="size-[18px]" aria-hidden="true" /> : method === "passkey" ? <Fingerprint className="size-5" aria-hidden="true" /> : null)}
              {valid ? buttonLabel : "Continue"}<ArrowRight className="absolute right-4 size-4" aria-hidden="true" />
            </span>
            {showsProgress("primary") && <ActionProgress label={progressLabel} complete={actionComplete} />}
          </button>
          <div className="absolute left-0 top-[55px] flex w-full items-center gap-3" aria-hidden="true"><span className="h-px flex-1 bg-border" /><span className="text-[10px] text-muted-foreground">or continue with</span><span className="h-px flex-1 bg-border" /></div>
          {PROVIDERS.map((provider, index) => {
            const selected = primaryProvider === provider;
            const remaining = PROVIDERS.filter((item) => item !== primaryProvider).indexOf(provider);
            return (
              <button
                key={provider}
                type="button"
                data-provider={provider}
                data-flip={provider}
                data-promoted={selected}
                data-quiet-action={provider}
                data-opening={actionPending && quietAction?.key === provider}
                aria-busy={actionPending && quietAction?.key === provider}
                aria-disabled={blocked || undefined}
                onClick={(event) => startAction(provider, event.currentTarget, provider)}
                disabled={blocked && quietAction?.key !== provider}
                aria-label={showsProgress(provider) ? progressLabel : `Continue with ${PROVIDER_NAMES[provider]}${lastUsed === provider ? " (last used)" : ""}`}
                className={`absolute flex origin-top-left items-center justify-center gap-2 rounded-xl border text-xs font-medium transition-colors duration-120 motion-reduce:transition-none ${selected ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90" : valid ? "border-border bg-muted/30 text-muted-foreground hover:bg-accent" : "border-border bg-card text-card-foreground hover:bg-accent"} ${FOCUS}`}
                style={{ height: selected ? 48 : 44, top: selected ? 0 : valid && method === "sso" ? 90 : 80, left: selected ? 0 : promoted ? `calc(${remaining * 50}% + ${remaining * 4}px)` : `calc(${index * 100 / 3}% + ${index * 8 / 3}px)`, width: selected ? "100%" : promoted ? "calc(50% - 4px)" : "calc(33.333333% - 5.333333px)" }}
              >
                <span className={`flex items-center gap-2 ${showsProgress(provider) ? "invisible" : ""}`}>
                  <ProviderIcon provider={provider} />
                  <span className={selected ? "" : "sr-only"}>{selected ? "Continue with " : ""}{PROVIDER_NAMES[provider]}</span>
                  {selected && <ArrowRight className="absolute right-4 size-4" aria-hidden="true" />}
                </span>
                {showsProgress(provider) && <ActionProgress label={progressLabel} compact={!selected} complete={actionComplete} />}
                {lastUsed === provider && !selected && <span className="absolute -top-2.5 rounded-full border border-border bg-card px-1.5 py-0.5 text-[8px] font-medium leading-3 text-muted-foreground">Last used</span>}
              </button>
            );
          })}
        </div>

        {verification && (
          <div data-verification className="flex min-h-[124px] flex-col items-center justify-center gap-2.5 rounded-xl border border-border bg-muted/40 px-4 py-4" role="status" aria-live="polite">
            <div className="relative flex size-14 items-center justify-center rounded-full bg-card text-foreground">
              <svg viewBox="0 0 60 60" className="absolute inset-0 size-full text-primary" fill="none" aria-hidden="true"><circle cx="30" cy="30" r="26" className="text-border" stroke="currentColor" strokeWidth="1.5" /><circle data-passkey-ring cx="30" cy="30" r="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="164" strokeDashoffset={currentStatus === "success" ? 0 : 40} style={{ transformOrigin: "center" }} /></svg>
              {currentStatus === "success" ? account?.avatar ? <img data-avatar src={account.avatar} alt="" className="size-full rounded-full object-cover" /> : <span data-avatar className="text-lg font-semibold">{account ? account.initials ?? account.name.slice(0, 1) : <Check className="size-6" />}</span> : <Fingerprint className="size-6" aria-hidden="true" />}
              {currentStatus === "success" && <span className="absolute -bottom-0.5 -right-0.5 rounded-full border-2 border-card bg-primary p-1 text-primary-foreground"><Check className="size-2.5" aria-hidden="true" /></span>}
            </div>
            <div className="text-center"><p className="text-sm font-medium">{currentStatus === "success" ? account ? `Welcome back, ${account.name}` : "You're signed in" : method === "passkey" ? "Confirm it's you" : "Connecting…"}</p><p className="mt-1 text-[11px] text-muted-foreground">{currentStatus === "success" ? "You're ready to pick up where you left off." : method === "passkey" ? "Use your fingerprint, face, or screen lock." : "Continue with your sign-in provider."}</p></div>
          </div>
        )}

        {valid && method !== "password" && !verification && (
          <div className="mt-3">
            <button type="button" data-alternative-toggle disabled={blocked} aria-expanded={alternatives} aria-controls={`${id}-alternatives`} onClick={() => setExpanded(!expanded)} className={`mx-auto flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] text-muted-foreground hover:text-foreground ${FOCUS}`}>
              Use a password instead <ChevronDown className={`size-3 transition-transform motion-reduce:transition-none ${alternatives ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <div id={`${id}-alternatives`} hidden={!alternatives} className="pt-2">
              <button type="button" data-password data-quiet-action="password" data-opening={actionPending && quietAction?.key === "password"} aria-busy={actionPending && quietAction?.key === "password"} aria-disabled={blocked || undefined} disabled={blocked && quietAction?.key !== "password"} onClick={(event) => startAction("password", event.currentTarget, "password")} className={`relative flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background text-xs transition-colors duration-120 motion-reduce:transition-none hover:bg-accent ${FOCUS}`}>
                <span className={`flex items-center gap-2 ${showsProgress("password") ? "invisible" : ""}`}><KeyRound className="size-4" aria-hidden="true" />Continue with password</span>
                {showsProgress("password") && <ActionProgress label={progressLabel} complete={actionComplete} />}
              </button>
            </div>
          </div>
        )}
      </form>
      {footer && <div className="border-t border-border bg-muted/30 px-7 py-2.5 text-center text-[11px] text-muted-foreground">{footer}</div>}
    </div>
  );
}
