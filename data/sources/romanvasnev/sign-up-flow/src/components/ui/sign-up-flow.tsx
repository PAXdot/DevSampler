"use client";

import * as React from "react";

/* ------------------------------------------------------------------ */
/*  SignUpFlow — email or phone sign-up with a one-time code,          */
/*  password and success, in one card. Styled after Apple HIG.         */
/* ------------------------------------------------------------------ */

export type SignUpMethod = "email" | "phone";
export type SignUpStep = "start" | "verify" | "password" | "done";

export type Country = { iso: string; name: string; dial: string; flag: string; mask: string };

export type Provider = { id: string; label: string; icon: React.ReactNode };

export type SignUpFlowProps = {
  /** your logo; a placeholder is shown by default */
  logo?: React.ReactNode;
  theme?: "light" | "dark";
  /** buttons, links, checkmarks. Defaults to HIG systemBlue. */
  accent?: string;
  defaultMethod?: SignUpMethod;
  defaultCountry?: string;
  countries?: Country[];
  codeLength?: number;
  /** seconds before "Resend code" unlocks */
  resendSeconds?: number;
  /** wrong codes allowed before the flow locks */
  maxAttempts?: number;
  /** social sign-in buttons; pass [] to hide */
  providers?: Provider[];
  /** send the code. Throw to show an error. */
  onSendCode?: (method: SignUpMethod, value: string) => Promise<void> | void;
  /** check the code; resolve true when it is right */
  onVerify?: (code: string, method: SignUpMethod, value: string) => Promise<boolean> | boolean;
  onCreatePassword?: (password: string) => Promise<void> | void;
  onComplete?: (account: { method: SignUpMethod; value: string }) => void;
  onProvider?: (id: string) => void;
  onLogin?: () => void;
  onStepChange?: (step: SignUpStep) => void;
  termsHref?: string;
  privacyHref?: string;
  /** code accepted by the built-in mock when onVerify is not set */
  demoCode?: string;
  className?: string;
};

/* ---------- HIG tokens ---------- */

const THEMES = {
  light: {
    bg: "#FFFFFF",
    fill: "rgba(118,118,128,.12)",
    fill2: "rgba(118,118,128,.08)",
    label: "#000000",
    secondary: "rgba(60,60,67,.6)",
    tertiary: "rgba(60,60,67,.3)",
    separator: "rgba(60,60,67,.18)",
    blue: "#007AFF",
    red: "#FF3B30",
    green: "#34C759",
    shadow: "0 0 0 .5px rgba(0,0,0,.05), 0 20px 50px rgba(0,0,0,.1)",
  },
  dark: {
    bg: "#1C1C1E",
    fill: "rgba(118,118,128,.24)",
    fill2: "rgba(118,118,128,.16)",
    label: "#FFFFFF",
    secondary: "rgba(235,235,245,.6)",
    tertiary: "rgba(235,235,245,.3)",
    separator: "rgba(84,84,88,.6)",
    blue: "#0A84FF",
    red: "#FF453A",
    green: "#30D158",
    shadow: "0 0 0 .5px rgba(255,255,255,.07), 0 24px 60px rgba(0,0,0,.55)",
  },
} as const;
type Theme = (typeof THEMES)[keyof typeof THEMES];

const FONT = "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', Inter, 'Segoe UI', Roboto, sans-serif";
const EASE = "cubic-bezier(.2,.9,.25,1)";
const SPRING = "cubic-bezier(.34,1.56,.64,1)";

const CSS = `
@keyframes su-next{from{opacity:0;transform:translateX(28px);filter:blur(6px)}to{opacity:1;transform:none;filter:none}}
@keyframes su-prev{from{opacity:0;transform:translateX(-28px);filter:blur(6px)}to{opacity:1;transform:none;filter:none}}
@keyframes su-pop{0%{transform:scale(.5);opacity:0}60%{transform:scale(1.12);opacity:1}100%{transform:scale(1)}}
@keyframes su-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
@keyframes su-spin{to{transform:rotate(360deg)}}
@keyframes su-draw{to{stroke-dashoffset:0}}
@keyframes su-ring{0%{transform:scale(.4);opacity:0}70%{transform:scale(1.06);opacity:1}100%{transform:scale(1)}}
@keyframes su-blink{50%{opacity:0}}
`;

/* ---------- data ---------- */

export const COUNTRIES: Country[] = [
  { iso: "BR", name: "Brazil", dial: "+55", flag: "🇧🇷", mask: "(##) #####-####" },
  { iso: "FR", name: "France", dial: "+33", flag: "🇫🇷", mask: "# ## ## ## ##" },
  { iso: "DE", name: "Germany", dial: "+49", flag: "🇩🇪", mask: "### ########" },
  { iso: "IN", name: "India", dial: "+91", flag: "🇮🇳", mask: "##### #####" },
  { iso: "IT", name: "Italy", dial: "+39", flag: "🇮🇹", mask: "### ### ####" },
  { iso: "JP", name: "Japan", dial: "+81", flag: "🇯🇵", mask: "## #### ####" },
  { iso: "KZ", name: "Kazakhstan", dial: "+7", flag: "🇰🇿", mask: "### ### ## ##" },
  { iso: "NL", name: "Netherlands", dial: "+31", flag: "🇳🇱", mask: "# ########" },
  { iso: "RU", name: "Russia", dial: "+7", flag: "🇷🇺", mask: "### ###-##-##" },
  { iso: "ES", name: "Spain", dial: "+34", flag: "🇪🇸", mask: "### ### ###" },
  { iso: "SE", name: "Sweden", dial: "+46", flag: "🇸🇪", mask: "## ### ## ##" },
  { iso: "AE", name: "United Arab Emirates", dial: "+971", flag: "🇦🇪", mask: "## ### ####" },
  { iso: "GB", name: "United Kingdom", dial: "+44", flag: "🇬🇧", mask: "#### ######" },
  { iso: "US", name: "United States", dial: "+1", flag: "🇺🇸", mask: "(###) ###-####" },
];

const icon = (d: string) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d={d} />
  </svg>
);
/* brand marks from Simple Icons (CC0); logos remain trademarks of their owners */
export const DEFAULT_PROVIDERS: Provider[] = [
  { id: "apple", label: "Apple", icon: icon("M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701") },
  { id: "google", label: "Google", icon: icon("M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z") },
  { id: "github", label: "GitHub", icon: icon("M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12") },
];

/* ---------- helpers ---------- */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
const slots = (mask: string) => (mask.match(/#/g) || []).length;
const applyMask = (digits: string, mask: string) => {
  let out = "";
  let i = 0;
  for (const ch of mask) {
    if (i >= digits.length) break;
    if (ch === "#") out += digits[i++];
    else out += ch;
  }
  return out;
};

/* ---------- small HIG parts ---------- */

function Spinner({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" style={{ animation: "su-spin .8s linear infinite" }} aria-hidden="true">
      <circle cx="10" cy="10" r="8" fill="none" stroke={color} strokeOpacity=".25" strokeWidth="2.4" />
      <path d="M10 2a8 8 0 0 1 8 8" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function Button({
  children,
  onClick,
  disabled,
  loading,
  t,
  accent,
  variant = "filled",
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  t: Theme;
  accent: string;
  variant?: "filled" | "plain";
  type?: "button" | "submit";
}) {
  const filled = variant === "filled";
  const off = disabled || loading;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={off}
      aria-busy={loading}
      className="relative flex h-[50px] w-full items-center justify-center rounded-[12px] text-[17px] font-semibold outline-none transition-[transform,background-color,color,opacity] duration-200 active:scale-[.98] focus-visible:ring-2 focus-visible:ring-offset-2 disabled:active:scale-100"
      style={{
        background: filled ? (disabled ? t.fill : accent) : "transparent",
        color: filled ? (disabled ? t.tertiary : "#fff") : accent,
        ["--tw-ring-color" as string]: accent,
        ["--tw-ring-offset-color" as string]: t.bg,
        cursor: off ? "default" : "pointer",
      }}
    >
      <span className="transition-opacity duration-200" style={{ opacity: loading ? 0 : 1 }}>
        {children}
      </span>
      {loading && (
        <span className="absolute inset-0 grid place-items-center">
          <Spinner color={filled ? "#fff" : accent} />
        </span>
      )}
    </button>
  );
}

function Check({ on, color, t }: { on: boolean; color: string; t: Theme }) {
  return (
    <span
      className="relative grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full transition-colors duration-200"
      style={{ background: on ? color : "transparent", boxShadow: on ? "none" : `inset 0 0 0 1.5px ${t.tertiary}` }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="none"
        stroke="#fff"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: on ? "scale(1)" : "scale(.3)", opacity: on ? 1 : 0, transition: `transform .35s ${SPRING}, opacity .2s` }}
      >
        <path d="M5 12.5l4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}

function Field({
  t,
  accent,
  error,
  children,
  focused,
}: {
  t: Theme;
  accent: string;
  error?: boolean;
  focused: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex h-[50px] items-center rounded-[12px] transition-shadow duration-200"
      style={{
        background: t.fill,
        boxShadow: error ? `inset 0 0 0 1.5px ${t.red}` : focused ? `inset 0 0 0 1.5px ${accent}` : "inset 0 0 0 1.5px transparent",
      }}
    >
      {children}
    </div>
  );
}

function ErrorText({ t, children }: { t: Theme; children: React.ReactNode }) {
  return (
    <p role="alert" className="m-0 mt-2 flex items-start gap-1.5 text-[13px] leading-[18px]" style={{ color: t.red, animation: "su-in .25s ease" }}>
      <svg viewBox="0 0 16 16" width="15" height="15" className="mt-[1.5px] shrink-0" aria-hidden="true">
        <circle cx="8" cy="8" r="7.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 4.5v4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="8" cy="11.2" r=".95" fill="currentColor" />
      </svg>
      <span>{children}</span>
    </p>
  );
}

function Segmented({ value, onChange, t }: { value: SignUpMethod; onChange: (m: SignUpMethod) => void; t: Theme }) {
  const items: { id: SignUpMethod; label: string }[] = [
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone" },
  ];
  const i = items.findIndex((x) => x.id === value);
  const dark = t === THEMES.dark;
  return (
    <div role="tablist" aria-label="Sign up with" className="relative grid h-8 grid-cols-2 rounded-[9px] p-[2px]" style={{ background: t.fill }}>
      <div
        className="absolute bottom-[2px] left-[2px] top-[2px] w-[calc(50%-2px)] rounded-[7px]"
        style={{
          transform: `translateX(${i * 100}%)`,
          transition: `transform .35s ${EASE}`,
          background: dark ? "#636366" : "#FFFFFF",
          boxShadow: "0 3px 8px rgba(0,0,0,.12), 0 3px 1px rgba(0,0,0,.04)",
        }}
      />
      {items.map((it) => (
        <button
          key={it.id}
          role="tab"
          type="button"
          aria-selected={it.id === value}
          onClick={() => onChange(it.id)}
          className="relative z-10 text-[13px] outline-none transition-[font-weight]"
          style={{ color: t.label, fontWeight: it.id === value ? 600 : 500 }}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}

function LogoPlaceholder({ t }: { t: Theme }) {
  return (
    <div className="flex h-8 items-center gap-2" aria-label="Logo">
      <span className="grid h-8 w-8 place-items-center rounded-[9px]" style={{ background: t.label }}>
        <span className="h-3 w-3 rotate-45 rounded-[3px]" style={{ background: t.bg }} />
      </span>
      <span className="text-[17px] font-semibold tracking-[-0.02em]" style={{ color: t.label }}>
        Logo
      </span>
    </div>
  );
}

/* ---------- one-time code ---------- */

function CodeInput({
  length,
  value,
  onChange,
  t,
  accent,
  error,
  disabled,
  shakeKey,
  inputRef,
}: {
  length: number;
  value: string;
  onChange: (v: string) => void;
  t: Theme;
  accent: string;
  error: boolean;
  disabled: boolean;
  shakeKey: number;
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const [focused, setFocused] = React.useState(false);
  const wrapRef = React.useRef<HTMLDivElement>(null);
  /* shake on every wrong code, without remounting (keeps focus) */
  React.useEffect(() => {
    if (!shakeKey) return;
    wrapRef.current?.animate(
      [0, -9, 8, -6, 4, -2, 0].map((x) => ({ transform: `translateX(${x}px)` })),
      { duration: 450, easing: "ease-out" },
    );
  }, [shakeKey]);
  return (
    <div ref={wrapRef} className="relative">
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, "").slice(0, length))}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        inputMode="numeric"
        autoComplete="one-time-code"
        aria-label={`${length}-digit code`}
        maxLength={length}
        disabled={disabled}
        className="absolute inset-0 z-10 h-full w-full cursor-text opacity-0"
      />
      <div className="flex justify-between gap-2" aria-hidden="true">
        {Array.from({ length }, (_, i) => {
          const ch = value[i];
          const active = focused && !disabled && (i === value.length || (i === length - 1 && value.length === length));
          return (
            <div
              key={i}
              className="relative grid h-[58px] flex-1 place-items-center rounded-[12px] text-[26px] font-semibold tabular-nums transition-shadow duration-200"
              style={{
                background: t.fill,
                color: error ? t.red : t.label,
                boxShadow: error ? `inset 0 0 0 1.5px ${t.red}` : active ? `inset 0 0 0 1.5px ${accent}` : "inset 0 0 0 1.5px transparent",
                opacity: disabled ? 0.5 : 1,
              }}
            >
              {ch ? (
                <span key={ch + i} style={{ animation: `su-pop .3s ${EASE}` }}>
                  {ch}
                </span>
              ) : active ? (
                <span className="h-7 w-[2px] rounded-full" style={{ background: accent, animation: "su-blink 1s steps(1) infinite" }} />
              ) : (
                <span className="h-[3px] w-3 rounded-full" style={{ background: t.tertiary }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- main ---------- */

export function SignUpFlow({
  logo,
  theme = "light",
  accent: accentProp,
  defaultMethod = "email",
  defaultCountry = "US",
  countries = COUNTRIES,
  codeLength = 6,
  resendSeconds = 30,
  maxAttempts = 3,
  providers = DEFAULT_PROVIDERS,
  onSendCode,
  onVerify,
  onCreatePassword,
  onComplete,
  onProvider,
  onLogin,
  onStepChange,
  termsHref = "#",
  privacyHref = "#",
  demoCode = "420420",
  className = "",
}: SignUpFlowProps) {
  const t = THEMES[theme];
  const accent = accentProp ?? t.blue;
  const uid = React.useId();

  const [step, setStepState] = React.useState<SignUpStep>("start");
  const [dir, setDir] = React.useState<1 | -1>(1);
  const go = (s: SignUpStep, d: 1 | -1 = 1) => {
    setDir(d);
    setStepState(s);
    onStepChange?.(s);
  };

  /* start */
  const [method, setMethod] = React.useState<SignUpMethod>(defaultMethod);
  const [email, setEmail] = React.useState("");
  const [country, setCountry] = React.useState<Country>(() => countries.find((c) => c.iso === defaultCountry) ?? countries[0]);
  const [digits, setDigits] = React.useState("");
  const [agree, setAgree] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [focus, setFocus] = React.useState<string | null>(null);
  const [touched, setTouched] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [startError, setStartError] = React.useState("");

  const emailOk = EMAIL_RE.test(email.trim());
  const phoneOk = digits.length === slots(country.mask);
  const valueOk = method === "email" ? emailOk : phoneOk;
  const display = method === "email" ? email.trim() : `${country.dial} ${applyMask(digits, country.mask)}`;
  const showFieldError = touched && !valueOk && (method === "email" ? email.length > 0 : digits.length > 0);

  /* verify */
  const [code, setCode] = React.useState("");
  const [codeError, setCodeError] = React.useState("");
  const [attempts, setAttempts] = React.useState(0);
  const [shake, setShake] = React.useState(0);
  const [left, setLeft] = React.useState(resendSeconds);
  const [help, setHelp] = React.useState(false);
  const [resent, setResent] = React.useState(false);
  const locked = attempts >= maxAttempts;

  /* password */
  const [pw, setPw] = React.useState("");
  const [showPw, setShowPw] = React.useState(false);
  const rules = [
    { label: "At least 8 characters", ok: pw.length >= 8 },
    { label: "One number", ok: /\d/.test(pw) },
    { label: "One uppercase letter", ok: /[A-Z]/.test(pw) },
  ];
  const pwOk = rules.every((r) => r.ok);

  /* resend countdown */
  React.useEffect(() => {
    if (step !== "verify" || left <= 0) return;
    const id = setTimeout(() => setLeft((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [step, left]);

  /* auto-focus the main field of each step */
  const startRef = React.useRef<HTMLInputElement>(null);
  const codeRef = React.useRef<HTMLInputElement>(null);
  const pwRef = React.useRef<HTMLInputElement>(null);
  const first = React.useRef(true);
  React.useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const el = step === "start" ? startRef.current : step === "verify" ? codeRef.current : step === "password" ? pwRef.current : null;
    el?.focus({ preventScroll: true });
  }, [step, method]);

  /* animated card height */
  const innerRef = React.useRef<HTMLDivElement>(null);
  const [h, setH] = React.useState<number | undefined>(undefined);
  React.useLayoutEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    setH(el.offsetHeight);
    const ro = new ResizeObserver(() => setH(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* actions */
  const send = async () => {
    setTouched(true);
    if (!valueOk || !agree || busy) return;
    setBusy(true);
    setStartError("");
    try {
      await (onSendCode ? onSendCode(method, display) : wait(800));
      setCode("");
      setCodeError("");
      setAttempts(0);
      setLeft(resendSeconds);
      setHelp(false);
      setResent(false);
      go("verify");
    } catch (e) {
      setStartError(e instanceof Error && e.message ? e.message : "Couldn't send the code. Try again.");
    } finally {
      setBusy(false);
    }
  };

  const verify = async (c: string) => {
    if (busy || locked) return;
    setBusy(true);
    try {
      const ok = await (onVerify ? onVerify(c, method, display) : wait(700).then(() => c === demoCode));
      if (ok) {
        setCodeError("");
        go("password");
      } else {
        const n = attempts + 1;
        setAttempts(n);
        setShake((s) => s + 1);
        setTimeout(() => {
          setCode("");
          codeRef.current?.focus({ preventScroll: true });
        }, 650);
        setCodeError(
          n >= maxAttempts
            ? "Too many attempts. For your security, try again in 30 minutes."
            : `That code isn't right. ${maxAttempts - n} ${maxAttempts - n === 1 ? "attempt" : "attempts"} left.`,
        );
      }
    } finally {
      setBusy(false);
    }
  };

  const resend = async () => {
    if (left > 0 || busy) return;
    setBusy(true);
    try {
      await (onSendCode ? onSendCode(method, display) : wait(600));
      setLeft(resendSeconds);
      setCode("");
      setCodeError("");
      setResent(true);
    } finally {
      setBusy(false);
    }
  };

  const create = async () => {
    if (!pwOk || busy) return;
    setBusy(true);
    try {
      await (onCreatePassword ? onCreatePassword(pw) : wait(800));
      go("done");
    } finally {
      setBusy(false);
    }
  };

  const reset = () => {
    setEmail("");
    setDigits("");
    setAgree(false);
    setTouched(false);
    setPw("");
    setShowPw(false);
    setCode("");
    setAttempts(0);
    setCodeError("");
    go("start", -1);
  };

  const filtered = countries.filter((c) => (c.name + c.dial + c.iso).toLowerCase().includes(query.trim().toLowerCase()));
  const mm = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`;

  /* ---------- views ---------- */

  const title = (text: string, sub?: React.ReactNode) => (
    <div className="mb-6">
      <h2 className="m-0 text-[28px] font-bold leading-[34px] tracking-[-0.02em]" style={{ color: t.label }}>
        {text}
      </h2>
      {sub && (
        <p className="m-0 mt-2 text-[15px] leading-[21px]" style={{ color: t.secondary }}>
          {sub}
        </p>
      )}
    </div>
  );

  const back = (to: SignUpStep, label = "Back") => (
    <button
      type="button"
      onClick={() => go(to, -1)}
      className="-ml-1.5 flex h-8 items-center gap-0.5 rounded-lg pr-2 text-[17px] outline-none focus-visible:ring-2"
      style={{ color: accent, ["--tw-ring-color" as string]: accent }}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 5l-7 7 7 7" />
      </svg>
      {label}
    </button>
  );

  let view: React.ReactNode = null;

  if (step === "start") {
    view = (
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
      >
        <div className="mb-7 flex h-8 items-center">{logo ?? <LogoPlaceholder t={t} />}</div>
        {title("Create your account", method === "email" ? "Enter your email and we'll send you a code." : "Enter your phone number and we'll text you a code.")}

        <Segmented
          value={method}
          onChange={(m) => {
            setMethod(m);
            setTouched(false);
            setMenu(false);
            setStartError("");
          }}
          t={t}
        />

        <div className="mt-4">
          {method === "email" ? (
            <div key="email" style={{ animation: "su-in .25s ease" }}>
              <Field t={t} accent={accent} focused={focus === "email"} error={showFieldError}>
                <input
                  ref={startRef}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  aria-label="Email"
                  aria-invalid={showFieldError}
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocus("email")}
                  onBlur={() => {
                    setFocus(null);
                    if (email) setTouched(true);
                  }}
                  className="h-full w-full bg-transparent px-4 text-[17px] outline-none placeholder:opacity-100"
                  style={{ color: t.label }}
                />
              </Field>
              {showFieldError && <ErrorText t={t}>Enter a valid email, like name@example.com.</ErrorText>}
            </div>
          ) : (
            <div key="phone" style={{ animation: "su-in .25s ease" }}>
              <Field t={t} accent={accent} focused={focus === "phone"} error={showFieldError}>
                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={menu}
                  aria-label={`Country: ${country.name} ${country.dial}`}
                  onClick={() => {
                    setMenu((m) => !m);
                    setQuery("");
                  }}
                  className="flex h-full shrink-0 items-center gap-1.5 rounded-l-[12px] pl-3.5 pr-2.5 text-[17px] outline-none focus-visible:ring-2"
                  style={{ color: t.label, ["--tw-ring-color" as string]: accent }}
                >
                  <span className="text-[20px] leading-none">{country.flag}</span>
                  <span className="tabular-nums">{country.dial}</span>
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke={t.secondary}
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ transform: menu ? "rotate(180deg)" : "none", transition: `transform .3s ${EASE}` }}
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <span className="h-6 w-px" style={{ background: t.separator }} />
                <input
                  ref={startRef}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-national"
                  aria-label="Phone number"
                  aria-invalid={showFieldError}
                  placeholder={country.mask.replace(/#/g, "0")}
                  value={applyMask(digits, country.mask)}
                  onChange={(e) => setDigits(e.target.value.replace(/\D/g, "").slice(0, slots(country.mask)))}
                  onFocus={() => {
                    setFocus("phone");
                    setMenu(false);
                  }}
                  onBlur={() => {
                    setFocus(null);
                    if (digits) setTouched(true);
                  }}
                  className="h-full min-w-0 flex-1 bg-transparent pl-3 pr-2 text-[17px] tabular-nums outline-none"
                  style={{ color: t.label }}
                />
                {digits && (
                  <button
                    type="button"
                    aria-label="Clear"
                    onClick={() => {
                      setDigits("");
                      startRef.current?.focus();
                    }}
                    className="mr-3 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full"
                    style={{ background: t.tertiary, animation: `su-pop .25s ${EASE}` }}
                  >
                    <svg viewBox="0 0 24 24" width="10" height="10" stroke={t.bg} strokeWidth="3.4" strokeLinecap="round" aria-hidden="true">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </button>
                )}
              </Field>

              {/* inline country list, the card grows to fit */}
              {menu && (
                <div className="mt-2 overflow-hidden rounded-[12px]" style={{ background: t.fill2, animation: "su-in .25s ease" }}>
                  <div className="p-2">
                    <div className="flex h-9 items-center gap-1.5 rounded-[10px] px-2.5" style={{ background: t.fill }}>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={t.secondary} strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                        <circle cx="11" cy="11" r="6.5" />
                        <path d="M16 16l4 4" />
                      </svg>
                      <input
                        autoFocus
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search"
                        aria-label="Search countries"
                        className="h-full min-w-0 flex-1 bg-transparent text-[16px] outline-none"
                        style={{ color: t.label }}
                      />
                    </div>
                  </div>
                  <ul role="listbox" aria-label="Countries" className="m-0 max-h-[200px] list-none overflow-y-auto p-0 pb-1 [scrollbar-width:thin]">
                    {filtered.map((c) => {
                      const sel = c.iso === country.iso;
                      return (
                        <li key={c.iso} role="option" aria-selected={sel}>
                          <button
                            type="button"
                            onClick={() => {
                              setCountry(c);
                              setDigits((d) => d.slice(0, slots(c.mask)));
                              setMenu(false);
                              requestAnimationFrame(() => startRef.current?.focus());
                            }}
                            className="flex h-11 w-full items-center gap-3 px-3.5 text-left text-[16px] outline-none transition-colors hover:bg-[rgba(118,118,128,.12)] focus-visible:bg-[rgba(118,118,128,.12)]"
                            style={{ color: t.label }}
                          >
                            <span className="text-[20px] leading-none">{c.flag}</span>
                            <span className="min-w-0 flex-1 truncate">{c.name}</span>
                            <span className="tabular-nums" style={{ color: t.secondary }}>
                              {c.dial}
                            </span>
                            <span className="w-4">
                              {sel && (
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={accent} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                                </svg>
                              )}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                    {filtered.length === 0 && (
                      <li className="px-3.5 py-3 text-[15px]" style={{ color: t.secondary }}>
                        No matches
                      </li>
                    )}
                  </ul>
                </div>
              )}
              {showFieldError && <ErrorText t={t}>{`Enter the full number for ${country.name}.`}</ErrorText>}
            </div>
          )}
        </div>

        <label className="mt-4 flex cursor-pointer items-start gap-3 text-[13px] leading-[18px]" style={{ color: t.secondary }}>
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="peer sr-only" />
          <span className="rounded-full peer-focus-visible:ring-2" style={{ ["--tw-ring-color" as string]: accent }}>
            <Check on={agree} color={accent} t={t} />
          </span>
          <span className="pt-0.5">
            I agree to the{" "}
            <a href={termsHref} onClick={(e) => e.stopPropagation()} className="no-underline" style={{ color: accent }}>
              Terms of Service
            </a>{" "}
            and{" "}
            <a href={privacyHref} onClick={(e) => e.stopPropagation()} className="no-underline" style={{ color: accent }}>
              Privacy Policy
            </a>
            .
          </span>
        </label>

        <div className="mt-5">
          <Button type="submit" t={t} accent={accent} disabled={!valueOk || !agree} loading={busy}>
            {method === "email" ? "Continue" : "Send code"}
          </Button>
          {startError && <ErrorText t={t}>{startError}</ErrorText>}
        </div>

        {providers.length > 0 && (
          <>
            <div className="my-5 flex items-center gap-3 text-[13px]" style={{ color: t.secondary }}>
              <span className="h-px flex-1" style={{ background: t.separator }} />
              or
              <span className="h-px flex-1" style={{ background: t.separator }} />
            </div>
            <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${providers.length}, minmax(0, 1fr))` }}>
              {providers.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  aria-label={`Continue with ${p.label}`}
                  title={`Continue with ${p.label}`}
                  onClick={() => onProvider?.(p.id)}
                  className="grid h-[46px] place-items-center rounded-[12px] outline-none transition-[transform,background-color] duration-200 hover:brightness-110 active:scale-[.96] focus-visible:ring-2"
                  style={{ background: t.fill, color: t.label, ["--tw-ring-color" as string]: accent }}
                >
                  {p.icon}
                </button>
              ))}
            </div>
          </>
        )}

        <p className="m-0 mt-5 text-center text-[15px]" style={{ color: t.secondary }}>
          Already have an account?{" "}
          <button type="button" onClick={onLogin} className="font-semibold outline-none" style={{ color: accent }}>
            Log in
          </button>
        </p>
      </form>
    );
  }

  if (step === "verify") {
    view = (
      <div>
        <div className="mb-5 flex h-8 items-center">{back("start")}</div>
        {title(
          method === "email" ? "Check your email" : "Check your messages",
          <>
            Enter the {codeLength}-digit code we sent to{" "}
            <span className="font-semibold" style={{ color: t.label }}>
              {display}
            </span>
            . It expires in 30 minutes.
          </>,
        )}

        <CodeInput
          length={codeLength}
          value={code}
          onChange={(v) => {
            setCode(v);
            if (codeError && !locked) setCodeError("");
            if (v.length === codeLength) verify(v);
          }}
          t={t}
          accent={accent}
          error={!!codeError}
          disabled={busy || locked}
          shakeKey={shake}
          inputRef={codeRef}
        />
        {codeError && <ErrorText t={t}>{codeError}</ErrorText>}
        {resent && !codeError && (
          <p className="m-0 mt-2 text-[13px]" style={{ color: t.green, animation: "su-in .25s ease" }}>
            New code sent.
          </p>
        )}

        <div className="mt-6">
          {locked ? (
            <Button t={t} accent={accent} onClick={reset}>
              Back to start
            </Button>
          ) : (
            <Button t={t} accent={accent} disabled={code.length < codeLength} loading={busy} onClick={() => verify(code)}>
              Verify
            </Button>
          )}
        </div>

        {!locked && (
          <div className="mt-4 flex items-center justify-between text-[15px]">
            <button
              type="button"
              onClick={resend}
              disabled={left > 0 || busy}
              className="font-medium tabular-nums outline-none transition-colors"
              style={{ color: left > 0 ? t.tertiary : accent }}
            >
              {left > 0 ? `Resend code in ${mm}` : "Resend code"}
            </button>
            <button type="button" aria-expanded={help} onClick={() => setHelp((x) => !x)} className="font-medium outline-none" style={{ color: accent }}>
              Didn't get it?
            </button>
          </div>
        )}

        {(help || locked) && (
          <div className="mt-4 rounded-[12px] p-1" style={{ background: t.fill2, animation: "su-in .3s ease" }}>
            {[
              method === "email" ? `Make sure ${display} is right.` : `Make sure ${display} is right.`,
              method === "email" ? "Look in Spam, Promotions or Updates." : "Check that your phone has signal and can receive texts.",
              "Wait a minute, then tap Resend code.",
              "Still nothing? Contact support.",
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3 px-3 py-2.5 text-[15px] leading-[20px]" style={{ color: t.label, borderTop: i ? `0.5px solid ${t.separator}` : "none" }}>
                <span className="mt-[1px] grid h-5 w-5 shrink-0 place-items-center rounded-full text-[12px] font-semibold" style={{ background: `${accent}22`, color: accent }}>
                  {i + 1}
                </span>
                {tip}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (step === "password") {
    view = (
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          create();
        }}
      >
        <div className="mb-5 flex h-8 items-center">{back("verify")}</div>
        {title("Create a password", "You'll use it to sign in on new devices.")}
        <input type="text" name="username" autoComplete="username" value={display} readOnly hidden />
        <Field t={t} accent={accent} focused={focus === "pw"}>
          <input
            ref={pwRef}
            id={`${uid}-pw`}
            type={showPw ? "text" : "password"}
            autoComplete="new-password"
            aria-label="Password"
            aria-describedby={`${uid}-rules`}
            placeholder="Password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            onFocus={() => setFocus("pw")}
            onBlur={() => setFocus(null)}
            className="h-full min-w-0 flex-1 bg-transparent px-4 text-[17px] outline-none"
            style={{ color: t.label, letterSpacing: showPw || !pw ? undefined : "0.12em" }}
          />
          <button
            type="button"
            aria-label={showPw ? "Hide password" : "Show password"}
            aria-pressed={showPw}
            onClick={() => setShowPw((s) => !s)}
            className="mr-1.5 grid h-10 w-10 place-items-center rounded-[10px] outline-none focus-visible:ring-2"
            style={{ color: t.secondary, ["--tw-ring-color" as string]: accent }}
          >
            <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
              <circle cx="12" cy="12" r="3" />
              <path d="M4 20L20 4" style={{ strokeDasharray: 23, strokeDashoffset: showPw ? 23 : 0, transition: `stroke-dashoffset .3s ${EASE}` }} />
            </svg>
          </button>
        </Field>

        <ul id={`${uid}-rules`} className="m-0 mt-4 list-none space-y-2.5 p-0">
          {rules.map((r) => (
            <li key={r.label} className="flex items-center gap-2.5 text-[15px] transition-colors duration-200" style={{ color: r.ok ? t.label : t.secondary }}>
              <Check on={r.ok} color={t.green} t={t} />
              {r.label}
              <span className="sr-only">{r.ok ? "met" : "not met"}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Button type="submit" t={t} accent={accent} disabled={!pwOk} loading={busy}>
            Create account
          </Button>
        </div>
      </form>
    );
  }

  if (step === "done") {
    view = (
      <div className="flex flex-col items-center pb-1 pt-4 text-center">
        <div className="grid h-[76px] w-[76px] place-items-center rounded-full" style={{ background: `${t.green}24`, animation: `su-ring .5s ${EASE}` }}>
          <svg viewBox="0 0 52 52" width="44" height="44" fill="none" aria-hidden="true">
            <circle cx="26" cy="26" r="22" fill={t.green} style={{ transformOrigin: "26px 26px", animation: `su-ring .45s ${SPRING} .05s both` }} />
            <path
              d="M16 27l7 7 13-15"
              stroke="#fff"
              strokeWidth="4.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ strokeDasharray: 40, strokeDashoffset: 40, animation: `su-draw .45s ${EASE} .35s forwards` }}
            />
          </svg>
        </div>
        <h2 className="m-0 mt-5 text-[28px] font-bold leading-[34px] tracking-[-0.02em]" style={{ color: t.label }}>
          You're all set
        </h2>
        <p className="m-0 mt-2 max-w-[280px] text-[15px] leading-[21px]" style={{ color: t.secondary }}>
          Your account for{" "}
          <span className="font-semibold" style={{ color: t.label }}>
            {display}
          </span>{" "}
          is ready.
        </p>
        <div className="mt-7 w-full">
          <Button t={t} accent={accent} onClick={() => onComplete?.({ method, value: display })}>
            Get started
          </Button>
        </div>
        <button type="button" onClick={reset} className="mt-3 h-9 text-[15px] font-medium outline-none" style={{ color: accent }}>
          Start over
        </button>
      </div>
    );
  }

  return (
    <div
      className={`w-full max-w-[400px] overflow-hidden rounded-[24px] ${className}`}
      style={{
        background: t.bg,
        boxShadow: t.shadow,
        fontFamily: FONT,
        WebkitFontSmoothing: "antialiased",
        height: h,
        transition: `height .45s ${EASE}`,
      }}
    >
      <style>{CSS}</style>
      <div ref={innerRef} className="px-6 pb-6 pt-6">
        <style>{`[data-su] input::placeholder{color:${t.tertiary}}`}</style>
        <div data-su key={step} style={{ animation: `${dir > 0 ? "su-next" : "su-prev"} .45s ${EASE}` }}>
          {view}
        </div>
      </div>
    </div>
  );
}

export default SignUpFlow;
