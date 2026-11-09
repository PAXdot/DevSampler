"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, KeyRound, Monitor, RefreshCw, ScanLine, ShieldCheck, Smartphone } from "lucide-react";

export type QrCodeLoginStatus = "waiting" | "scanned" | "confirmed" | "expired";
export type QrCodeScanLoginProps = {
  ref?: React.ComponentProps<"section">["ref"];
  qrSrc?: string;
  /** Square matrix without a quiet zone. A four-module quiet zone is added here. */
  qrModules?: boolean[][];
  /** Authoritative when supplied. The host handles scanning and authentication. */
  status?: QrCodeLoginStatus;
  defaultStatus?: QrCodeLoginStatus;
  onStatusChange?: (status: QrCodeLoginStatus) => void;
  onRefresh?: () => void;
  expiresInSeconds?: number;
  /** Change this when replacing a session whose image or matrix stays the same. */
  codeId?: string | number;
  deviceName?: string;
  onUsePassword?: () => void;
  onPasswordSubmit?: (email: string, password: string) => void;
  passwordOpen?: boolean;
  defaultPasswordOpen?: boolean;
  onPasswordOpenChange?: (open: boolean) => void;
  passwordPending?: boolean;
  passwordError?: string;
  appName?: string;
  logo?: React.ReactNode;
  steps?: string[];
  welcomeMessage?: string;
  className?: string;
  /** Decorative scan motion only, never a simulated sign-in. Opt in in your app. */
  autoplay?: boolean;
};

const DEFAULT_STEPS = ["Open the app on your phone", "Scan the code with its camera", "Confirm to sign in here"];
const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card";
const MOTION = `
@keyframes qr-login-scan { 0%,100% { transform:translateY(12px) } 50% { transform:translateY(182px) } }
@keyframes qr-login-phone { 0%,100% { transform:rotate(0deg) } 20%,60% { transform:rotate(-10deg) } 40%,80% { transform:rotate(10deg) } }
@keyframes qr-login-stamp { from { opacity:0; transform:scale(.75) rotate(-12deg) } to { opacity:1; transform:scale(1) rotate(0deg) } }
@keyframes qr-login-slide { from { opacity:0; transform:translateX(24px) } to { opacity:1; transform:translateX(0) } }
[data-slot="qr-code-scan-login"] { container:qr-login / inline-size; }
[data-slot="qr-code-scan-login"] [data-layout] { display:flex; flex-direction:column; align-items:center; justify-content:center; gap:20px; min-height:446px; }
[data-slot="qr-code-scan-login"] [data-guidance] { width:100%; min-width:0; }
[data-slot="qr-code-scan-login"] [data-heading-break], [data-slot="qr-code-scan-login"] [data-eyebrow] { display:none; }
[data-slot="qr-code-scan-login"][data-password-open="true"] [data-code-column] { display:none; }
[data-slot="qr-code-scan-login"] [data-scan-line] { animation:qr-login-scan 2.2s ease-in-out infinite; }
[data-slot="qr-code-scan-login"] [data-phone] { animation:qr-login-phone .6s ease-in-out 2; }
[data-slot="qr-code-scan-login"] [data-stamp] { animation:qr-login-stamp .42s cubic-bezier(.2,.8,.2,1) both; }
[data-slot="qr-code-scan-login"] [data-password-form] { animation:qr-login-slide .32s ease-out both; }
@container qr-login (min-width:560px) {
  [data-slot="qr-code-scan-login"] [data-layout] { flex-direction:row; align-items:center; gap:32px; min-height:294px; }
  [data-slot="qr-code-scan-login"] [data-code-column], [data-slot="qr-code-scan-login"][data-password-open="true"] [data-code-column] { display:flex; width:228px; flex-shrink:0; }
  [data-slot="qr-code-scan-login"] [data-heading-break], [data-slot="qr-code-scan-login"] [data-eyebrow] { display:block; }
}
@media (prefers-reduced-motion:reduce) {
  [data-slot="qr-code-scan-login"] *, [data-slot="qr-code-scan-login"] *::before, [data-slot="qr-code-scan-login"] *::after { animation:none !important; transition:none !important; }
}
`;

/** A QR sign-in UI. Session creation, expiry policy, and authentication belong to the host. */
export function QrCodeScanLogin({
  ref, qrSrc, qrModules, status, defaultStatus = "waiting", onStatusChange, onRefresh,
  expiresInSeconds = 60, codeId, deviceName = "your phone", onUsePassword, onPasswordSubmit,
  passwordOpen, defaultPasswordOpen = false, onPasswordOpenChange, passwordPending = false,
  passwordError, appName = "your workspace", logo, steps = DEFAULT_STEPS,
  welcomeMessage = "Welcome back", className = "", autoplay = false,
}: QrCodeScanLoginProps) {
  const id = React.useId();
  const [localStatus, setLocalStatus] = React.useState(defaultStatus);
  const [localOpen, setLocalOpen] = React.useState(defaultPasswordOpen);
  const [showPassword, setShowPassword] = React.useState(false);
  const [generation, setGeneration] = React.useState(0);
  const lifetime = Number.isFinite(expiresInSeconds) ? Math.max(0, Math.ceil(expiresInSeconds)) : 60;
  const [remaining, setRemaining] = React.useState(lifetime);
  const deadline = React.useRef(0);
  const timerIdentity = React.useRef([] as unknown[]);
  const notified = React.useRef(false);
  const statusCallback = React.useRef(onStatusChange);
  const emailRef = React.useRef(null as HTMLInputElement | null);
  const toggleRef = React.useRef(null as HTMLButtonElement | null);
  const focusIntent = React.useRef(false);
  const currentStatus = status ?? localStatus;
  const open = passwordOpen ?? localOpen;
  const matrixValid = Boolean(qrModules?.length && qrModules.every((row) => row.length === qrModules.length));
  const hasCode = Boolean(qrSrc || matrixValid);
  const expired = currentStatus === "expired";
  const confirmed = currentStatus === "confirmed";
  const scanned = currentStatus === "scanned";
  // Expired codes remain unusable even while a controlled host handles the expiry callback.
  const timedOut = hasCode && remaining === 0 && !confirmed;
  const unavailable = expired || timedOut;
  const stage = confirmed || scanned ? 3 : 1;
  const statusText = unavailable ? "Code expired · get a fresh one" : confirmed ? "Signed in" : scanned ? `Scanned on ${deviceName} · confirm on your phone` : "Waiting for scan…";

  React.useEffect(() => { statusCallback.current = onStatusChange; }, [onStatusChange]);
  React.useEffect(() => {
    const identity = [lifetime, codeId, qrSrc, qrModules, generation];
    // StrictMode replays effects, but a zero-second session must expire only once.
    if (identity.every((value, index) => Object.is(timerIdentity.current[index], value))) return;
    timerIdentity.current = identity;
    deadline.current = Date.now() + lifetime * 1000;
    notified.current = false;
    setRemaining(lifetime);
  }, [lifetime, codeId, qrSrc, qrModules, generation]);

  React.useEffect(() => {
    if (currentStatus === "confirmed" || currentStatus === "expired" || !hasCode) return;
    const tick = () => {
      const seconds = Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000));
      setRemaining(seconds);
      if (seconds === 0 && !notified.current) {
        notified.current = true;
        if (status === undefined) setLocalStatus("expired");
        statusCallback.current?.("expired");
      }
    };
    tick();
    const timer = window.setInterval(tick, 250);
    return () => window.clearInterval(timer);
  }, [currentStatus, status, hasCode, lifetime, codeId, qrSrc, qrModules, generation]);

  React.useEffect(() => {
    if (!open) setShowPassword(false);
    if (!focusIntent.current) return;
    focusIntent.current = false;
    if (open) emailRef.current?.focus(); else toggleRef.current?.focus();
  }, [open]);

  const requestOpen = (next: boolean) => {
    focusIntent.current = true;
    if (passwordOpen === undefined) setLocalOpen(next);
    onPasswordOpenChange?.(next);
    if (next) onUsePassword?.();
  };
  const refresh = () => {
    setGeneration((value) => value + 1);
    if (status === undefined) setLocalStatus("waiting");
    onStatusChange?.("waiting");
    onRefresh?.();
  };
  const submit = (event: React.SubmitEvent) => {
    event.preventDefault();
    if (passwordPending || !onPasswordSubmit) return;
    const fields = new FormData(event.currentTarget as HTMLFormElement);
    onPasswordSubmit(String(fields.get("email") ?? "").trim(), String(fields.get("password") ?? ""));
  };

  return (
    <section ref={ref} aria-labelledby={`${id}-title`} data-slot="qr-code-scan-login" data-status={currentStatus} data-unavailable={unavailable} data-autoplay={autoplay ? "on" : "off"} data-password-open={open}
      className={`w-full max-w-[660px] rounded-[28px] border border-border bg-card text-card-foreground shadow-xl shadow-primary/5 ${className}`}>
      <style>{MOTION}</style>
      <header className="flex items-center justify-between gap-3 px-6 pb-5 pt-6">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground" aria-hidden="true">{logo ?? <ScanLine className="size-5" />}</span>
          <div className="min-w-0"><h2 id={`${id}-title`} className="break-words text-sm font-semibold tracking-tight">{appName}</h2><p className="text-[11px] text-muted-foreground">Desktop sign-in</p></div>
        </div>
        <span aria-hidden="true" className="flex shrink-0 items-center gap-2 rounded-full border border-border px-3 py-2 text-muted-foreground"><Smartphone className="size-3.5" /><span className="h-px w-4 bg-border" /><Monitor className="size-3.5" /></span>
      </header>

      <div data-layout className="px-6 pb-5">
        <div data-code-column className="flex flex-col items-center">
          <div className="relative rounded-[24px] border border-border bg-muted/60 p-2.5">
            <div data-qr-tile className="relative flex size-[200px] items-center justify-center overflow-hidden rounded-2xl bg-primary-foreground text-primary dark:bg-primary dark:text-primary-foreground">
              <div data-qr-art aria-hidden={unavailable || confirmed || undefined} className={`size-full transition-[filter,opacity] duration-300 ${unavailable ? "opacity-25 blur-sm" : confirmed ? "opacity-10 blur-sm" : "opacity-100"}`}>
                {qrSrc ? <img src={qrSrc} alt={`Scan to sign in to ${appName}`} className="size-full object-contain p-3" /> : matrixValid && qrModules ? (
                  <svg data-qr-svg role="img" aria-label={`Scan to sign in to ${appName}`} viewBox={`0 0 ${qrModules.length + 8} ${qrModules.length + 8}`} shapeRendering="crispEdges" className="size-full" fill="currentColor">
                    {qrModules.flatMap((row, y) => row.map((filled, x) => filled ? <rect key={`${x}-${y}`} x={x + 4} y={y + 4} width="1" height="1" /> : null))}
                  </svg>
                ) : <span className="flex size-full flex-col items-center justify-center gap-3 text-center text-xs"><ScanLine className="size-10" aria-hidden="true" />Your sign-in code <br />will appear here</span>}
              </div>
              {hasCode && currentStatus === "waiting" && !unavailable && !open && autoplay && <span data-scan-line aria-hidden="true" className="pointer-events-none absolute inset-x-2 top-0 h-0.5 bg-current shadow-[0_0_12px_currentColor] before:absolute before:inset-x-0 before:bottom-0 before:h-7 before:bg-current before:opacity-10" />}
              {scanned && !unavailable && <span data-phone className="absolute flex size-14 items-center justify-center rounded-2xl border border-border bg-card text-card-foreground shadow-lg"><Smartphone className="size-7" aria-hidden="true" /></span>}
              {confirmed && <div data-stamp className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-3 text-center"><span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground ring-8 ring-primary/10 dark:bg-primary-foreground dark:text-primary"><Check className="size-8" strokeWidth={2.5} aria-hidden="true" /></span><p className="text-[13px] font-semibold">{welcomeMessage}</p></div>}
              {unavailable && <button type="button" data-refresh onClick={refresh} className={`absolute flex items-center gap-2 rounded-full bg-card px-4 py-2.5 text-xs font-medium text-card-foreground shadow-lg ${FOCUS}`}><RefreshCw className="size-3.5" aria-hidden="true" />Refresh code</button>}
            </div>
            <span className="absolute -bottom-2.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-medium text-muted-foreground" data-countdown aria-hidden="true">
              <ShieldCheck className="size-3" />{confirmed ? "Device connected" : unavailable ? "Session expired" : hasCode ? `Expires in ${remaining}s` : "Waiting for a code"}
            </span>
          </div>
          <p role="status" aria-live="polite" aria-atomic="true" data-login-status className="mt-5 min-h-8 max-w-[250px] text-center text-[11px] leading-4 text-muted-foreground">{hasCode ? statusText : "Waiting for a sign-in code…"}</p>
        </div>

        <div data-guidance>
          {open ? <form id={`${id}-password`} data-password-form onSubmit={submit} aria-label="Password sign-in" aria-busy={passwordPending} onKeyDown={(event) => { if (event.key === "Escape") { event.preventDefault(); requestOpen(false); } }}>
            <h3 className="text-xl font-semibold tracking-tight">A familiar way in.</h3>
            <p className="mb-4 mt-1 text-xs text-muted-foreground">Sign in with your email and password.</p>
            <label htmlFor={`${id}-email`} className="mb-1 block text-[11px] font-medium">Email address</label>
            <input ref={emailRef} id={`${id}-email`} name="email" type="email" autoComplete="username" autoCapitalize="none" spellCheck={false} required disabled={passwordPending} placeholder="you@example.com" className={`h-10 w-full rounded-xl border border-border bg-background px-3 text-xs disabled:opacity-60 ${FOCUS}`} />
            <label htmlFor={`${id}-password-input`} className="mb-1 mt-3 block text-[11px] font-medium">Password</label>
            <div className="relative"><input id={`${id}-password-input`} name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" required disabled={passwordPending} aria-invalid={passwordError ? true : undefined} aria-describedby={passwordError ? `${id}-error` : undefined} placeholder="Enter your password" className={`h-10 w-full rounded-xl border border-border bg-background pl-3 pr-11 text-xs disabled:opacity-60 ${FOCUS}`} /><button type="button" aria-label={showPassword ? "Hide password" : "Show password"} aria-pressed={showPassword} onClick={() => setShowPassword(!showPassword)} className={`absolute inset-y-1 right-1 flex w-8 items-center justify-center rounded-lg text-muted-foreground ${FOCUS}`}>{showPassword ? <EyeOff className="size-4" aria-hidden="true" /> : <Eye className="size-4" aria-hidden="true" />}</button></div>
            {passwordError && <p id={`${id}-error`} role="alert" className="mt-2 text-xs text-foreground">{passwordError}</p>}
            <button type="submit" disabled={passwordPending} className={`mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-primary text-xs font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60 ${FOCUS}`}>{passwordPending ? "Signing in…" : "Sign in"}<ArrowRight className="size-3.5" aria-hidden="true" /></button>
          </form> : <div id={`${id}-password`}>
            <p data-eyebrow className="mb-2 text-[10px] font-medium uppercase tracking-[.18em] text-muted-foreground">Phone → desktop</p>
            <h3 className="text-[25px] font-semibold leading-[1.15] tracking-tight">Point. Confirm. <br data-heading-break />You’re in.</h3>
            <ol className="mt-4 space-y-3" aria-label="How to sign in">
              {steps.map((step, index) => <li key={`${index}-${step}`} data-step={index + 1} aria-current={!unavailable && stage === index + 1 ? "step" : undefined} className="flex items-center gap-3 text-xs leading-4"><span className={`flex size-6 shrink-0 items-center justify-center rounded-full border text-[10px] font-medium ${!unavailable && stage >= index + 1 ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground"}`} aria-hidden="true">{!unavailable && (confirmed || stage > index + 1) ? <Check className="size-3" /> : String(index + 1).padStart(2, "0")}</span><span className={!unavailable && stage >= index + 1 ? "text-foreground" : "text-muted-foreground"}>{step}</span></li>)}
            </ol>
          </div>}
        </div>
      </div>
      <footer className="flex items-center justify-between gap-3 rounded-b-[28px] border-t border-border bg-muted/25 px-6 py-3.5">
        <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground"><ShieldCheck className="size-3.5 shrink-0" aria-hidden="true" />{open ? "Your usual sign-in" : "Approve on your phone"}</span>
        <button ref={toggleRef} type="button" data-password-toggle aria-expanded={open} aria-controls={`${id}-password`} onClick={() => requestOpen(!open)} className={`flex items-center gap-1.5 rounded-md px-1 py-1 text-[11px] font-medium hover:text-muted-foreground ${FOCUS}`}>{open ? <ArrowLeft className="size-3.5" aria-hidden="true" /> : <KeyRound className="size-3.5" aria-hidden="true" />}{open ? "Back to QR code" : "Use password instead"}</button>
      </footer>
    </section>
  );
}

export default QrCodeScanLogin;
