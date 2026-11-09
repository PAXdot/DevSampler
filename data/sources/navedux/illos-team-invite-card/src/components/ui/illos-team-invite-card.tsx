"use client";

// Onboarding step for inviting teammates: an email field that takes several addresses, a role picker and a list of
// pending invites you can resend or revoke.
// The illustration is Team invite (Interface) from Illos (https://illos.dev).
// It loops while it is on screen, pauses off screen, and stays still for prefers-reduced-motion.
//
// License
// The component code in this file (layout, props, play logic) is free to use, change and share under the MIT license.
// The illustration inside it (the SVG markup and its animation) is not covered by MIT. It belongs to Illos and is
// licensed under the Illos free license, https://illos.dev/license: you can use it in personal and commercial work,
// including client projects, with no credit needed, and you may modify it. Not allowed: redistributing or selling it
// as an asset (packs, illustration or icon sites, or other libraries), or using it to build a competing illustration
// library.
import { useEffect, useId, useRef, useState, type CSSProperties, type FormEvent, type KeyboardEvent } from "react";

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

export type InviteRole = { value: string; label: string; description: string };
export type Invite = { email: string; role: string };

export type IllosTeamInviteCardProps = {
  title?: string;
  description?: string;
  /** Where this card sits in your onboarding, shown as "Step 2 of 3". Set `steps` to 0 to hide it. */
  step?: number;
  steps?: number;
  roles?: InviteRole[];
  defaultRole?: string;
  defaultInvites?: Invite[];
  /** Sends the invites. Return a promise to show the sending state until it settles; a rejection keeps the addresses. */
  onInvite?: (emails: string[], role: string) => void | Promise<void>;
  onResend?: (invite: Invite) => void;
  onRevoke?: (invite: Invite) => void;
  onContinue?: (invites: Invite[]) => void;
  /** The illustration's accent and the glow around it, Illos teal by default. Any colour, e.g. "var(--color-primary)". */
  accent?: string;
  className?: string;
};

const ROLES: InviteRole[] = [
  { value: "member", label: "Member", description: "Can create and edit projects." },
  { value: "admin", label: "Admin", description: "Can also manage billing and people." },
  { value: "viewer", label: "Viewer", description: "Can view and comment, nothing more." },
];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function IllosTeamInviteCard({
  title = "Invite your team",
  description = "Projects move faster with everyone in one place. Each teammate gets an email with a link to join.",
  step = 2,
  steps = 3,
  roles = ROLES,
  defaultRole = roles[0]?.value ?? "",
  defaultInvites = [{ email: "design@example.com", role: "admin" }],
  onInvite,
  onResend,
  onRevoke,
  onContinue,
  accent,
  className,
}: IllosTeamInviteCardProps) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [drafts, setDrafts] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [role, setRole] = useState(defaultRole);
  const [invites, setInvites] = useState(defaultInvites);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [resent, setResent] = useState<string | null>(null);
  const [announce, setAnnounce] = useState("");

  useEffect(() => {
    if (!resent) return;
    const t = setTimeout(() => setResent(null), 2000);
    return () => clearTimeout(t);
  }, [resent]);

  const roleOf = (value: string) => roles.find((r) => r.value === value);

  // Moves every address typed or pasted into `raw` onto the list. Anything that is not an address stays in the field
  // with a message. Returns the full list, or null when something was left behind.
  const commit = (raw: string): string[] | null => {
    const next = [...drafts];
    const bad: string[] = [];
    const taken: string[] = [];
    for (const part of raw
      .split(/[\s,;]+/)
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean)) {
      if (!EMAIL.test(part)) bad.push(part);
      else if (invites.some((i) => i.email === part)) taken.push(part);
      else if (!next.includes(part)) next.push(part);
    }
    setDrafts(next);
    setText(bad.join(", "));
    setError(
      bad.length
        ? `${bad.length > 1 ? "These aren't" : `“${bad[0]}” isn't`} a full email address.`
        : taken.length
          ? `${taken.join(", ")} already ${taken.length > 1 ? "have" : "has"} an invite.`
          : "",
    );
    return bad.length ? null : next;
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === "," || e.key === ";" || e.key === " ") && text.trim()) {
      e.preventDefault();
      commit(text);
    } else if (e.key === "Backspace" && !text && drafts.length) {
      setDrafts(drafts.slice(0, -1));
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    const list = text.trim() ? commit(text) : drafts;
    if (!list) return inputRef.current?.focus();
    if (!list.length) {
      setError("Add at least one email address.");
      return inputRef.current?.focus();
    }
    setSending(true);
    try {
      await onInvite?.(list, role);
    } catch {
      setError("The invites didn't send. Check your connection and try again.");
      setSending(false);
      return;
    }
    setInvites((prev) => [...list.map((email) => ({ email, role })), ...prev]);
    setDrafts([]);
    setSending(false);
    setAnnounce(`${list.length} ${list.length === 1 ? "invite" : "invites"} sent`);
  };

  const revoke = (invite: Invite) => {
    setInvites((prev) => prev.filter((i) => i.email !== invite.email));
    setAnnounce(`Invite for ${invite.email} revoked`);
    onRevoke?.(invite);
  };

  const count = drafts.length;
  return (
    <div
      style={accent ? ({ "--illos-accent": accent } as CSSProperties) : undefined}
      className={cx(
        ROLE_VARS,
        "grid w-full max-w-[960px] overflow-hidden rounded-[20px] bg-card p-2 text-card-foreground md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]",
        "shadow-[0_0_0_1px_rgb(0_0_0/0.06),0_1px_2px_rgb(0_0_0/0.04),0_16px_40px_-16px_rgb(0_0_0/0.18)] dark:shadow-[0_0_0_1px_rgb(255_255_255/0.09)]",
        className,
      )}
    >
      <div className="relative isolate aspect-[16/11] overflow-hidden rounded-xl md:aspect-auto" style={WELL}>
        <IllosArt svg={TEAM_INVITE_SVG} className="absolute inset-0 grid place-items-center p-2 md:p-0" />
      </div>

      <div className="flex min-w-0 flex-col gap-6 px-3 pt-6 pb-3 sm:px-6 md:px-8 md:pt-8 md:pb-6">
        <header className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold tracking-tight text-balance">{title}</h2>
          <p className="max-w-[46ch] text-sm leading-relaxed text-muted-foreground text-pretty">{description}</p>
        </header>

        <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-email`} className="text-sm font-medium">
              Email addresses
            </label>
            <div
              onMouseDown={(e) => {
                if (e.target === e.currentTarget) {
                  e.preventDefault();
                  inputRef.current?.focus();
                }
              }}
              className={cx(
                "flex min-h-11 cursor-text flex-wrap items-center gap-1.5 rounded-lg border bg-background px-2 py-1.5 transition-[border-color,box-shadow] duration-150",
                "focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/25",
                error ? "border-[var(--destructive,oklch(0.577_0.245_27.325))]" : "border-border",
              )}
            >
              {drafts.map((email) => (
                <span
                  key={email}
                  className="inline-flex h-7 max-w-full items-center gap-1 rounded-md bg-muted pr-1 pl-2 text-sm"
                >
                  <span className="truncate">{email}</span>
                  <button
                    type="button"
                    aria-label={`Remove ${email}`}
                    onClick={() => {
                      setDrafts(drafts.filter((d) => d !== email));
                      inputRef.current?.focus();
                    }}
                    className="relative grid size-5 place-items-center rounded text-muted-foreground transition-colors duration-150 before:absolute before:-inset-1.5 hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    <Icon name="Cancel01" className="size-3.5" />
                  </button>
                </span>
              ))}
              <input
                ref={inputRef}
                id={`${id}-email`}
                type="text"
                inputMode="email"
                autoComplete="off"
                spellCheck={false}
                placeholder={count ? "Add another" : "name@company.com"}
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  if (error) setError("");
                }}
                onKeyDown={onKeyDown}
                onBlur={() => text.trim() && commit(text)}
                onPaste={(e) => {
                  const pasted = e.clipboardData.getData("text");
                  if (/[\s,;]/.test(pasted.trim())) {
                    e.preventDefault();
                    commit(text + " " + pasted);
                  }
                }}
                aria-invalid={!!error}
                aria-describedby={`${id}-hint`}
                className="h-7 min-w-[9rem] flex-1 bg-transparent px-1 text-base outline-none placeholder:text-muted-foreground md:text-sm"
              />
            </div>
            <p
              id={`${id}-hint`}
              className={cx(
                "flex items-center gap-1.5 text-xs text-pretty",
                error ? "text-[var(--destructive,oklch(0.577_0.245_27.325))]" : "text-muted-foreground",
              )}
            >
              {error && <Icon name="Alert01" className="size-3.5" />}
              {error || "Press Enter or a comma after each address, or paste a list."}
            </p>
          </div>

          <fieldset className="flex min-w-0 flex-col gap-2" aria-describedby={`${id}-role`}>
            <legend className="mb-2 text-sm font-medium">Role</legend>
            <div className="inline-flex self-start rounded-[10px] bg-muted p-1">
              {roles.map((r) => (
                <label
                  key={r.value}
                  className={cx(
                    "relative cursor-pointer rounded-md px-3 py-1.5 text-sm transition-[color,background-color,box-shadow] duration-150",
                    "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-1 has-[:focus-visible]:outline-ring",
                    role === r.value
                      ? "bg-card font-medium text-foreground shadow-[0_0_0_1px_rgb(0_0_0/0.05),0_1px_2px_rgb(0_0_0/0.08)] dark:bg-background dark:shadow-[0_0_0_1px_rgb(255_255_255/0.09)]"
                      : "font-medium text-muted-foreground hover:text-foreground",
                  )}
                >
                  <input
                    type="radio"
                    name={`${id}-role`}
                    value={r.value}
                    checked={role === r.value}
                    onChange={() => setRole(r.value)}
                    className="sr-only"
                  />
                  {r.label}
                </label>
              ))}
            </div>
            <p id={`${id}-role`} className="text-xs text-muted-foreground">
              {roleOf(role)?.description}
            </p>
          </fieldset>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex h-9 items-center justify-center gap-2 self-start rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-[background-color,scale,opacity] duration-150 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-[0.97] disabled:opacity-70"
          >
            {sending ? (
              <>
                <Icon name="Loading03" className="animate-spin motion-reduce:animate-none" />
                Sending
              </>
            ) : (
              <>
                <Icon name="MailSend01" />
                {count > 1 ? `Send ${count} invites` : "Send invite"}
              </>
            )}
          </button>
        </form>

        <section aria-labelledby={`${id}-pending`} className="flex flex-col gap-2">
          <h3 id={`${id}-pending`} className="flex items-center gap-2 text-sm font-medium">
            Pending invites
            <span className="rounded-full bg-muted px-1.5 text-xs leading-5 font-medium text-muted-foreground tabular-nums">
              {invites.length}
            </span>
          </h3>
          {invites.length ? (
            <ul className="-mx-2 flex max-h-[13.5rem] flex-col overflow-y-auto">
              {invites.map((invite) => (
                <li key={invite.email} className="flex items-center gap-3 rounded-lg px-2 py-2">
                  <span
                    aria-hidden="true"
                    className="grid size-8 shrink-0 place-items-center rounded-full bg-muted text-xs font-medium uppercase"
                  >
                    {invite.email[0]}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-sm">{invite.email}</span>
                    <span className="text-xs text-muted-foreground">{roleOf(invite.role)?.label ?? invite.role}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setResent(invite.email);
                      setAnnounce(`Invite resent to ${invite.email}`);
                      onResend?.(invite);
                    }}
                    disabled={resent === invite.email}
                    className="relative inline-flex h-8 min-w-[4.75rem] items-center justify-center gap-1.5 rounded-md px-2 text-xs font-medium text-muted-foreground transition-colors duration-150 before:absolute before:-inset-1.5 hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring disabled:text-foreground"
                  >
                    <Icon name={resent === invite.email ? "Tick02" : "Refresh"} className="size-3.5" />
                    {resent === invite.email ? "Sent" : "Resend"}
                  </button>
                  <button
                    type="button"
                    aria-label={`Revoke invite for ${invite.email}`}
                    onClick={() => revoke(invite)}
                    className="relative grid size-8 place-items-center rounded-md text-muted-foreground transition-colors duration-150 before:absolute before:-inset-1.5 hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    <Icon name="Cancel01" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">
              No one yet. Invites you send show up here until they're accepted.
            </p>
          )}
        </section>

        <footer className="mt-auto flex items-center justify-between gap-4 pt-2">
          {steps > 0 ? (
            <div className="flex items-center gap-3">
              <span className="flex gap-1" aria-hidden="true">
                {Array.from({ length: steps }, (_, i) => (
                  <span key={i} className={cx("h-1 w-5 rounded-full", i < step ? "bg-foreground" : "bg-border")} />
                ))}
              </span>
              <span className="text-xs text-muted-foreground tabular-nums">
                Step {step} of {steps}
              </span>
            </div>
          ) : (
            <span />
          )}
          <button
            type="button"
            onClick={() => onContinue?.(invites)}
            className="inline-flex h-9 items-center rounded-lg px-3 text-sm font-medium transition-[background-color,scale] duration-150 hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-[0.97]"
          >
            {invites.length ? "Continue" : "Skip for now"}
          </button>
        </footer>
        <p role="status" className="sr-only">
          {announce}
        </p>
      </div>
    </div>
  );
}

export default IllosTeamInviteCard;

/** The illustration's colour roles, taken from your theme tokens so it follows light and dark. `--illos-accent` is
 * its one colour of its own (teal): the `accent` prop recolours the illustration and
 * the glow around it. */
const ROLE_VARS =
  "[--illos-accent:#1daf9c] dark:[--illos-accent:#3fdec9] [--illos-ground:var(--color-card)] [--illos-ink:var(--color-card-foreground)] [--illos-if-raised:var(--color-card)] [--illos-if-surface:color-mix(in_oklab,var(--color-muted)_70%,var(--color-card))] [--illos-if-line:color-mix(in_oklab,var(--color-foreground)_16%,var(--color-card))] [--illos-if-muted:color-mix(in_oklab,var(--color-muted-foreground)_85%,var(--color-card))] [--illos-if-bar:color-mix(in_oklab,var(--color-foreground)_8%,var(--color-card))] [--illos-if-cursor:var(--color-card)] [--illos-if-cursor-edge:var(--color-foreground)] dark:[--illos-if-cursor:var(--color-foreground)] dark:[--illos-if-cursor-edge:var(--color-background)] [--well-glow:34%] dark:[--well-glow:16%]";

/** The well the illustration sits in: two soft accent glows over the muted surface, with a fine grain on top. */
const WELL: CSSProperties = {
  backgroundImage: [
    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 .2 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    "radial-gradient(75% 65% at 12% 8%, color-mix(in oklab, var(--illos-accent) var(--well-glow), transparent), transparent 72%)",
    "radial-gradient(60% 60% at 92% 96%, color-mix(in oklab, var(--illos-accent) calc(var(--well-glow) * 0.6), transparent), transparent 70%)",
    "linear-gradient(160deg, color-mix(in oklab, var(--color-muted) 55%, var(--color-card)), var(--color-muted))",
  ].join(", "),
  boxShadow: "inset 0 0 0 1px color-mix(in oklab, var(--color-foreground) 6%, transparent)",
};

// Icons from the Hugeicons free set (MIT), stroke-rounded.
const ICONS = {
  Cancel01: `<path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085"/>`,
  Tick02: `<path d="M5 14L8.5 17.5L19 6.5"/>`,
  Refresh: `<path d="M20.0092 2V5.13219C20.0092 5.42605 19.6418 5.55908 19.4537 5.33333C17.6226 3.2875 14.9617 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12"/>`,
  Alert01: `<path d="M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z"/><path d="M12 17V13"/><path d="M12 9.25H12.125M12.25 9.25C12.25 9.11193 12.1381 9 12 9C11.8619 9 11.75 9.11193 11.75 9.25C11.75 9.38807 11.8619 9.5 12 9.5C12.1381 9.5 12.25 9.38807 12.25 9.25Z"/>`,
  Loading03: `<path d="M12 3V6"/><path d="M12 18V21"/><path d="M21 12L18 12"/><path d="M6 12L3 12"/><path d="M18.3635 5.63672L16.2422 7.75804"/><path d="M7.75804 16.2422L5.63672 18.3635"/><path d="M18.3635 18.3635L16.2422 16.2422"/><path d="M7.75804 7.75804L5.63672 5.63672"/>`,
  MailSend01: `<path d="M22 12.5C22 12.0086 21.9947 11.0172 21.9842 10.5244C21.9189 7.45883 21.8862 5.92606 20.7551 4.79063C19.6239 3.6552 18.0497 3.61565 14.9012 3.53654C12.9607 3.48778 11.0393 3.48778 9.09882 3.53653C5.95033 3.61563 4.37608 3.65518 3.24495 4.79062C2.11382 5.92605 2.08114 7.45882 2.01576 10.5243C1.99474 11.51 1.99475 12.4899 2.01577 13.4756C2.08114 16.5411 2.11383 18.0739 3.24496 19.2093C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C9.90159 20.4836 10.7011 20.4954 11.5 20.4989"/><path d="M2 6L8.91302 9.92462C11.4387 11.3585 12.5613 11.3585 15.087 9.92462L22 6"/><path d="M22 17.5L14 17.5M22 17.5C22 16.7998 20.0057 15.4915 19.5 15M22 17.5C22 18.2002 20.0057 19.5085 19.5 20"/>`,
} as const;

function Icon({ name, className }: { name: keyof typeof ICONS; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cx("size-4 shrink-0", className)}
      dangerouslySetInnerHTML={{ __html: ICONS[name] }}
    />
  );
}

/** The illustration, inline. Decorative here: the card's own text says what it means. */
function IllosArt({ svg, className }: { svg: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    // The animation loops on its own; this only pauses it while less than a quarter of it is on screen.
    const io = new IntersectionObserver(
      ([entry]) => host.style.setProperty("--illos-play", entry.isIntersecting ? "running" : "paused"),
      { threshold: 0.25 },
    );
    io.observe(host);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cx("pointer-events-none select-none [&>svg]:h-auto [&>svg]:w-full [&>svg]:max-w-[640px]", className)}
      style={{ "--illos-play": "paused" } as CSSProperties}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

const TEAM_INVITE_SVG = `<svg class="if-team-invite" xmlns="http://www.w3.org/2000/svg" width="720" height="460" viewBox="0 0 720 460" fill="none" stroke="#d6d6d9" role="img" aria-labelledby="if-team-invite-t" aria-describedby="if-team-invite-d">
<title id="if-team-invite-t">Team invite</title>
<desc id="if-team-invite-d">An Invite people panel with an email field and a team list. A teammate's address is typed in and a cursor clicks Invite: the field clears and a new row with a teal Invited chip appears above the Admin.</desc>
<style>@scope (svg.if-team-invite) {
:scope{--_ground:#ffffff;--_ink:#2a2a2a;--_accent:#1daf9c;--_if-surface:#f7f7f8;--_if-raised:#ffffff;--_if-line:#d6d6d9;--_if-muted:#9a9aa0;--_if-bar:#e6e6e8;--_if-accent-fill:#e4fbf8;--_if-accent-mid:#84ebdd;--_if-cursor:#ffffff;--_if-cursor-edge:#2a2a2a;--_if-shadow:#2a2a2a}
@media (prefers-color-scheme: dark){:scope{--_ground:#101112;--_ink:#dadadc;--_accent:#3fdec9;--_if-surface:#1a1b1d;--_if-raised:#1f2023;--_if-line:#34363b;--_if-muted:#7c7d84;--_if-bar:#2a2b2f;--_if-accent-fill:#0f2e2a;--_if-accent-mid:#178c7d;--_if-cursor:#e9e9ea;--_if-cursor-edge:#101112;--_if-shadow:#101112}}
:scope{--_if-accent-auto-fill:color-mix(in oklab, var(--illos-accent) 12%, var(--illos-ground, var(--_ground)));--_if-accent-auto-mid:color-mix(in oklab, var(--illos-accent) 55%, var(--illos-ground, var(--_ground)))}
:scope{stroke:none}
@keyframes if-team-invite_cursor{0%{transform:translate(430px,394px)}5%{transform:translate(430px,394px);animation-timing-function:cubic-bezier(0.77,0,0.175,1)}16.25%{transform:translate(612px,248px)}25%{transform:translate(612px,248px);animation-timing-function:cubic-bezier(0.77,0,0.175,1)}42.5%{transform:translate(612px,134px)}61.25%{transform:translate(612px,134px);animation-timing-function:cubic-bezier(0.77,0,0.175,1)}93.75%{transform:translate(430px,394px)}100%{transform:translate(430px,394px)}}
.cur-move{transform:translate(430px,394px);animation:if-team-invite_cursor 4s linear}
@keyframes if-team-invite_press{0%{transform:scale(1)}16.25%{transform:scale(1);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}18.25%{transform:scale(0.88);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}23.25%{transform:scale(1)}56.25%{transform:scale(1);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}58.25%{transform:scale(0.88);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}63.25%{transform:scale(1)}100%{transform:scale(1)}}
.cur-press{transform:scale(1);animation:if-team-invite_press 4s linear}
@keyframes if-team-invite_mark{0%{transform:scale(1)}16.25%{transform:scale(1);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}18.25%{transform:scale(0.9);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}23.75%{transform:scale(1)}100%{transform:scale(1)}}
.mark{transform-box:fill-box;transform-origin:50% 50%;transform:scale(1);animation:if-team-invite_mark 4s linear}
@keyframes if-team-invite_btn{0%{transform:scale(1)}56.25%{transform:scale(1);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}58.25%{transform:scale(0.97);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}64.5%{transform:scale(1)}100%{transform:scale(1)}}
.btn{transform-box:fill-box;transform-origin:50% 50%;transform:scale(1);animation:if-team-invite_btn 4s linear}
@keyframes if-team-invite_pending{0%{opacity:1;transform:translateX(0px)}18.75%{opacity:1;transform:translateX(0px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}26.25%{opacity:0;transform:translateX(40px)}27.5%{opacity:0;transform:translateY(-24px)}60%{opacity:0;transform:translateY(-24px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}70%{opacity:1;transform:translateY(0px)}100%{opacity:1;transform:translateX(0px)}}
.pending{opacity:1;transform:translateX(0px);animation:if-team-invite_pending 4s linear}
@keyframes if-team-invite_invited{0%{opacity:1;transform:scale(1)}26.25%{opacity:1;transform:scale(1)}26.75%{opacity:0;transform:scale(0.92)}68.75%{opacity:0;transform:scale(0.92);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}76.25%{opacity:1;transform:scale(1)}100%{opacity:1;transform:scale(1)}}
.invited{transform-box:fill-box;transform-origin:50% 50%;opacity:1;transform:scale(1);animation:if-team-invite_invited 4s linear}
@keyframes if-team-invite_older{0%{transform:translateY(0px)}23.75%{transform:translateY(0px);animation-timing-function:cubic-bezier(0.32,0.72,0,1)}33.75%{transform:translateY(-115px)}58.75%{transform:translateY(-115px);animation-timing-function:cubic-bezier(0.32,0.72,0,1)}68.75%{transform:translateY(0px)}100%{transform:translateY(0px)}}
.older{transform:translateY(0px);animation:if-team-invite_older 4s linear}
@keyframes if-team-invite_edge{0%{transform:translateY(0px)}23.75%{transform:translateY(0px);animation-timing-function:cubic-bezier(0.32,0.72,0,1)}33.75%{transform:translateY(-115px)}58.75%{transform:translateY(-115px);animation-timing-function:cubic-bezier(0.32,0.72,0,1)}68.75%{transform:translateY(0px)}100%{transform:translateY(0px)}}
.edge{transform:translateY(0px);animation:if-team-invite_edge 4s linear}
@keyframes if-team-invite_cover{0%{transform:scaleX(1)}30%{transform:scaleX(1)}30.25%{transform:scaleX(0.97)}31.25%{transform:scaleX(0.97)}31.5%{transform:scaleX(0.93)}32.5%{transform:scaleX(0.93)}32.75%{transform:scaleX(0.88)}33.75%{transform:scaleX(0.88)}34%{transform:scaleX(0.81)}35%{transform:scaleX(0.81)}35.25%{transform:scaleX(0.74)}36.25%{transform:scaleX(0.74)}36.5%{transform:scaleX(0.69)}37.5%{transform:scaleX(0.69)}37.75%{transform:scaleX(0.66)}38.75%{transform:scaleX(0.66)}39%{transform:scaleX(0.62)}40%{transform:scaleX(0.62)}40.25%{transform:scaleX(0.54)}41.25%{transform:scaleX(0.54)}41.5%{transform:scaleX(0.49)}42.5%{transform:scaleX(0.49)}42.75%{transform:scaleX(0.45)}43.75%{transform:scaleX(0.45)}44%{transform:scaleX(0.4)}45%{transform:scaleX(0.4)}45.25%{transform:scaleX(0.33)}46.25%{transform:scaleX(0.33)}46.5%{transform:scaleX(0.28)}47.5%{transform:scaleX(0.28)}47.75%{transform:scaleX(0.26)}48.75%{transform:scaleX(0.26)}49%{transform:scaleX(0.21)}50%{transform:scaleX(0.21)}50.25%{transform:scaleX(0.19)}51.25%{transform:scaleX(0.19)}51.5%{transform:scaleX(0.14)}52.5%{transform:scaleX(0.14)}52.75%{transform:scaleX(0.09)}53.75%{transform:scaleX(0.09)}54%{transform:scaleX(0.02)}62.5%{transform:scaleX(0.02)}63%{transform:scaleX(1)}100%{transform:scaleX(1)}}
.cover{transform-box:fill-box;transform-origin:100% 50%;transform:scaleX(1);animation:if-team-invite_cover 4s linear}
@keyframes if-team-invite_caret{0%{transform:translateX(0px)}30%{transform:translateX(0px)}30.25%{transform:translateX(10.51px)}31.25%{transform:translateX(10.51px)}31.5%{transform:translateX(25.41px)}32.5%{transform:translateX(25.41px)}32.75%{transform:translateX(40.26px)}33.75%{transform:translateX(40.26px)}34%{transform:translateX(63.04px)}35%{transform:translateX(63.04px)}35.25%{transform:translateX(85.81px)}36.25%{transform:translateX(85.81px)}36.5%{transform:translateX(100.41px)}37.5%{transform:translateX(100.41px)}37.75%{transform:translateX(108.92px)}38.75%{transform:translateX(108.92px)}39%{transform:translateX(123.82px)}40%{transform:translateX(123.82px)}40.25%{transform:translateX(148.94px)}41.25%{transform:translateX(148.94px)}41.5%{transform:translateX(164.09px)}42.5%{transform:translateX(164.09px)}42.75%{transform:translateX(177.7px)}43.75%{transform:translateX(177.7px)}44%{transform:translateX(192.3px)}45%{transform:translateX(192.3px)}45.25%{transform:translateX(215.08px)}46.25%{transform:translateX(215.08px)}46.5%{transform:translateX(231px)}47.5%{transform:translateX(231px)}47.75%{transform:translateX(237.29px)}48.75%{transform:translateX(237.29px)}49%{transform:translateX(252.45px)}50%{transform:translateX(252.45px)}50.25%{transform:translateX(259.94px)}51.25%{transform:translateX(259.94px)}51.5%{transform:translateX(274.8px)}52.5%{transform:translateX(274.8px)}52.75%{transform:translateX(290.39px)}53.75%{transform:translateX(290.39px)}54%{transform:translateX(313.16px)}59%{transform:translateX(313.16px)}59.25%{transform:translateX(0px)}100%{transform:translateX(0px)}}
.caret{transform:translateX(0px);animation:if-team-invite_caret 4s linear}
@keyframes if-team-invite_typed{0%{opacity:1}58.25%{opacity:1;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}61.25%{opacity:0}63.25%{opacity:0}63.75%{opacity:1}100%{opacity:1}}
.typed{opacity:1;animation:if-team-invite_typed 4s linear}
@keyframes if-team-invite_hint{0%{opacity:1}27.5%{opacity:1}28.75%{opacity:0}60%{opacity:0;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}65%{opacity:1}100%{opacity:1}}
.hint{opacity:1;animation:if-team-invite_hint 4s linear}
*{animation-iteration-count:infinite!important;animation-play-state:var(--illos-play,running)!important}
@media (prefers-reduced-motion: reduce){*{animation:none!important}}
}
</style>
<path d="M60 210V80.4C60 35.25 69.25 26 114.4 26H605.6C650.75 26 660 35.25 660 80.4V210" fill="var(--illos-if-raised,var(--_if-raised))" stroke="var(--illos-if-line,var(--_if-line))" stroke-width="2"/><g class="edge"><path d="M60 200V327.6C60 372.75 69.25 382 114.4 382H605.6C650.75 382 660 372.75 660 327.6V200" fill="var(--illos-if-raised,var(--_if-raised))" stroke="var(--illos-if-line,var(--_if-line))" stroke-width="2"/></g><g data-icon="UserAdd01" transform="translate(100,52) scale(1.4167)" fill="none"><path d="M3 20.5002C3.28417 16.8058 6.3 13.7193 10.0008 13.5379C10.3134 13.5226 10.6446 13.5097 11 13.5L11.995 13.5663C12.6939 13.6129 13.3665 13.7543 14 13.9777" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/><path d="M18 15.5V21.5M21 18.5L15 18.5" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/><circle cx="11" cy="6.5" r="4" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/></g><path fill="var(--illos-if-muted,var(--_if-muted))" stroke="none" d="M148.3 59.6l2.4 0l0 18.9l-2.4 0zm9 10.4l0 8.5l-2.3 0l0-14.2l2.2 0l0 2.6q0.6-1.3 1.6-1.9q1.1-0.9 2.8-0.9q1.4 0 2.5 0.6q1 0.6 1.7 1.8q0.6 1.2 0.6 3l0 9l-2.3 0l0-8.8q0-1.7-0.9-2.6q-0.8-0.9-2.3-0.9q-1 0-1.9 0.4q-0.8 0.5-1.2 1.3q-0.5 0.9-0.5 2.1zm19.2 8.5l-2.4 0l-5.4-14.2l2.5 0l3 8.4q0.5 1.3 0.8 2.6q0.2 0.6 0.3 1.1q0.2-0.5 0.3-1.1q0.3-1.3 0.8-2.6l3-8.4l2.5 0zm10.4 0l-2.3 0l0-14.2l2.3 0l0 14.2zm-1.1-16.5q-0.7 0-1.2-0.5q-0.4-0.4-0.4-1q0-0.7 0.4-1.1q0.5-0.4 1.2-0.4q0.6 0 1.1 0.4q0.5 0.4 0.5 1.1q0 0.6-0.5 1q-0.5 0.5-1.1 0.5zm7.8 2.3l2.9 0l0 2l-2.9 0l0 8.5q0 1 0.4 1.4q0.3 0.4 1.2 0.4q0.3 0 0.6 0q0.3-0.1 0.6-0.1l0.5 1.9q-0.4 0.2-0.8 0.2q-0.5 0.1-0.9 0.1q-1.9 0-2.9-1q-1-1-1-2.7l0-8.7l-2.1 0l0-2l2.1 0l0-3.4l2.3 0zm11.5 14.5q-2.1 0-3.6-0.9q-1.5-0.9-2.3-2.6q-0.8-1.6-0.8-3.8q0-2.2 0.8-3.8q0.8-1.7 2.2-2.6q1.5-1 3.4-1q1.1 0 2.2 0.4q1.1 0.4 2 1.2q0.9 0.8 1.5 2.2q0.5 1.4 0.5 3.3l0 1l-10.3 0q0.1 1.3 0.6 2.3q0.5 1.1 1.5 1.7q1 0.6 2.3 0.6q0.8 0 1.5-0.3q0.7-0.2 1.2-0.7q0.5-0.5 0.8-1.2l2.2 0.6q-0.4 1.1-1.2 1.9q-0.7 0.8-1.9 1.2q-1.2 0.5-2.6 0.5zm-4.4-8.6l8 0q-0.1-0.9-0.4-1.7q-0.5-1.1-1.3-1.7q-0.9-0.6-2.2-0.6q-1.3 0-2.2 0.6q-0.9 0.6-1.4 1.6q-0.4 0.9-0.5 1.8zm23.2 13.6l-2.3 0l0-19.5l2.2 0l0 2.3l0.3 0q0.2-0.4 0.6-1q0.5-0.6 1.3-1q0.8-0.5 2.2-0.5q1.8 0 3.1 0.9q1.4 0.9 2.1 2.5q0.8 1.7 0.8 3.9q0 2.3-0.8 4q-0.7 1.6-2.1 2.5q-1.3 0.9-3.1 0.9q-1.4 0-2.2-0.5q-0.8-0.4-1.2-1q-0.5-0.6-0.7-1l-0.2 0l0 7.5zm4-7q1.3 0 2.2-0.8q0.9-0.7 1.3-1.9q0.5-1.2 0.5-2.7q0-1.5-0.5-2.6q-0.4-1.2-1.3-1.9q-0.9-0.7-2.2-0.7q-1.4 0-2.2 0.6q-0.9 0.7-1.4 1.9q-0.4 1.1-0.4 2.7q0 1.6 0.4 2.8q0.5 1.2 1.4 1.9q0.9 0.7 2.2 0.7zm15.6 2q-2.1 0-3.6-0.9q-1.5-0.9-2.3-2.6q-0.8-1.6-0.8-3.8q0-2.2 0.8-3.8q0.8-1.7 2.2-2.6q1.5-1 3.4-1q1.1 0 2.2 0.4q1.1 0.4 2 1.2q0.9 0.8 1.5 2.2q0.5 1.4 0.5 3.3l0 1l-10.3 0q0.1 1.3 0.6 2.3q0.5 1.1 1.5 1.7q1 0.6 2.3 0.6q0.8 0 1.5-0.3q0.7-0.2 1.2-0.7q0.5-0.5 0.8-1.2l2.2 0.6q-0.4 1.1-1.2 1.9q-0.7 0.8-1.9 1.2q-1.2 0.5-2.6 0.5zm-4.4-8.6l8 0q-0.1-0.9-0.4-1.7q-0.5-1.1-1.3-1.7q-0.9-0.6-2.2-0.6q-1.3 0-2.2 0.6q-0.9 0.6-1.4 1.6q-0.4 0.9-0.5 1.8zm19.4 8.6q-1.9 0-3.4-0.9q-1.5-0.9-2.3-2.6q-0.8-1.6-0.8-3.8q0-2.2 0.8-3.9q0.8-1.6 2.3-2.6q1.5-0.9 3.4-0.9q1.9 0 3.4 0.9q1.4 1 2.3 2.6q0.8 1.7 0.8 3.9q0 2.2-0.8 3.8q-0.9 1.7-2.3 2.6q-1.5 0.9-3.4 0.9zm0-2q1.4 0 2.3-0.8q1-0.7 1.4-1.9q0.5-1.2 0.5-2.6q0-1.4-0.5-2.6q-0.4-1.2-1.4-2q-0.9-0.7-2.3-0.7q-1.4 0-2.4 0.7q-0.9 0.8-1.3 2q-0.5 1.2-0.5 2.6q0 1.4 0.5 2.6q0.4 1.2 1.3 1.9q1 0.8 2.4 0.8zm12.1 7l-2.3 0l0-19.5l2.2 0l0 2.3l0.3 0q0.2-0.4 0.6-1q0.5-0.6 1.3-1q0.8-0.5 2.2-0.5q1.8 0 3.1 0.9q1.4 0.9 2.1 2.5q0.8 1.7 0.8 3.9q0 2.3-0.8 4q-0.7 1.6-2.1 2.5q-1.3 0.9-3.1 0.9q-1.4 0-2.2-0.5q-0.8-0.4-1.2-1q-0.5-0.6-0.7-1l-0.2 0l0 7.5zm4-7q1.3 0 2.2-0.8q0.9-0.7 1.3-1.9q0.5-1.2 0.5-2.7q0-1.5-0.5-2.6q-0.4-1.2-1.3-1.9q-0.9-0.7-2.2-0.7q-1.4 0-2.2 0.6q-0.9 0.7-1.4 1.9q-0.4 1.1-0.4 2.7q0 1.6 0.4 2.8q0.5 1.2 1.4 1.9q0.9 0.7 2.2 0.7zm9.6-17.2l2.3 0l0 18.9l-2.3 0zm12.3 19.2q-2.1 0-3.6-0.9q-1.5-0.9-2.3-2.6q-0.8-1.6-0.8-3.8q0-2.2 0.8-3.8q0.8-1.7 2.2-2.6q1.5-1 3.4-1q1.1 0 2.2 0.4q1.1 0.4 2 1.2q0.9 0.8 1.5 2.2q0.5 1.4 0.5 3.3l0 1l-10.3 0q0.1 1.3 0.6 2.3q0.5 1.1 1.5 1.7q1 0.6 2.3 0.6q0.8 0 1.5-0.3q0.7-0.2 1.2-0.7q0.5-0.5 0.8-1.2l2.2 0.6q-0.4 1.1-1.2 1.9q-0.7 0.8-1.9 1.2q-1.2 0.5-2.6 0.5zm-4.4-8.6l8 0q-0.1-0.9-0.4-1.7q-0.5-1.1-1.3-1.7q-0.9-0.6-2.2-0.6q-1.3 0-2.2 0.6q-0.9 0.6-1.4 1.6q-0.4 0.9-0.5 1.8z"/><path d="M127.2,96 H471.8 C494.38,96 499,100.62 499,123.2 V126.8 C499,149.38 494.38,154 471.8,154 H127.2 C104.62,154 100,149.38 100,126.8 V123.2 C100,100.62 104.62,96 127.2,96 Z" fill="var(--illos-if-raised,var(--_if-raised))" stroke="var(--illos-if-line,var(--_if-line))" stroke-width="2"/><g class="typed"><path fill="var(--illos-ink,var(--_ink))" stroke="none" d="M120.7 120.3l2.9 0l0 2l-2.9 0l0 8.5q0 1 0.4 1.4q0.3 0.4 1.2 0.4q0.3 0 0.6 0q0.3-0.1 0.6-0.1l0.5 1.9q-0.4 0.2-0.8 0.2q-0.5 0.1-0.9 0.1q-1.9 0-2.9-1q-1-1-1-2.7l0-8.7l-2.1 0l0-2l2.1 0l0-3.4l2.3 0zm11.6 14.5q-2.1 0-3.6-0.9q-1.5-0.9-2.3-2.6q-0.8-1.6-0.8-3.8q0-2.2 0.8-3.8q0.8-1.7 2.2-2.6q1.5-1 3.4-1q1.1 0 2.2 0.4q1.1 0.4 2 1.2q0.9 0.8 1.5 2.2q0.5 1.4 0.5 3.3l0 1l-10.3 0q0.1 1.3 0.6 2.3q0.5 1.1 1.5 1.7q1 0.6 2.3 0.6q0.8 0 1.5-0.3q0.7-0.2 1.2-0.7q0.5-0.5 0.8-1.2l2.2 0.6q-0.4 1.1-1.2 1.9q-0.7 0.8-1.9 1.2q-1.2 0.5-2.6 0.5zm-4.4-8.6l8 0q-0.1-0.9-0.4-1.7q-0.5-1.1-1.3-1.7q-0.9-0.6-2.2-0.6q-1.3 0-2.2 0.6q-0.9 0.6-1.4 1.6q-0.4 0.9-0.5 1.8zm17.8 8.6q-1.4 0-2.5-0.5q-1.1-0.5-1.7-1.5q-0.7-0.9-0.7-2.3q0-1.3 0.5-2q0.5-0.8 1.3-1.2q0.8-0.5 1.8-0.7q1-0.2 2-0.3q1.2-0.2 2-0.3q0.8-0.1 1.2-0.3q0.4-0.2 0.4-0.7l0-0.1q0-0.9-0.3-1.5q-0.4-0.6-1-0.9q-0.7-0.4-1.7-0.4q-1 0-1.7 0.4q-0.7 0.3-1.2 0.7q-0.4 0.5-0.7 1l-2.2-0.7q0.6-1.3 1.5-2q0.9-0.8 2.1-1.1q1.1-0.3 2.2-0.3q0.7 0 1.6 0.2q0.9 0.2 1.8 0.7q0.8 0.5 1.3 1.5q0.6 1 0.6 2.6l0 9.4l-2.3 0l0-1.9l-0.1 0q-0.2 0.5-0.8 1q-0.5 0.5-1.4 0.9q-0.8 0.3-2 0.3zm0.4-2q1.2 0 2.1-0.5q0.9-0.5 1.4-1.3q0.4-0.8 0.4-1.6l0-2q-0.1 0.2-0.6 0.3q-0.5 0.1-1.1 0.2q-0.6 0.1-1.1 0.2q-0.6 0.1-0.9 0.1q-0.9 0.1-1.6 0.4q-0.7 0.2-1.1 0.7q-0.5 0.5-0.5 1.3q0 0.7 0.4 1.2q0.4 0.5 1.1 0.8q0.6 0.2 1.5 0.2zm12.5 1.7l-2.3 0l0-14.2l2.2 0l0 2.6q0.3-0.8 0.8-1.3q0.6-0.8 1.5-1.2q0.8-0.3 1.7-0.3q1.6 0 2.5 0.9q0.8 0.8 1.1 1.9q0.3-0.7 0.8-1.2q0.7-0.8 1.6-1.2q1-0.4 2.1-0.4q1.2 0 2.2 0.5q1.1 0.5 1.7 1.6q0.6 1.1 0.6 2.7l0 9.6l-2.3 0l0-9.5q0-1.5-0.9-2.2q-0.8-0.7-2-0.7q-0.9 0-1.6 0.4q-0.7 0.4-1.1 1.1q-0.4 0.7-0.4 1.6l0 9.3l-2.3 0l0-9.7q0-1.2-0.7-1.9q-0.8-0.8-2-0.8q-0.9 0-1.6 0.4q-0.7 0.4-1.2 1.2q-0.4 0.7-0.4 1.9zm22.7 0l-2.3 0l0-14.2l2.2 0l0 2.6q0.3-0.8 0.8-1.3q0.6-0.8 1.5-1.2q0.8-0.3 1.7-0.3q1.6 0 2.5 0.9q0.8 0.8 1.1 1.9q0.3-0.7 0.8-1.2q0.7-0.8 1.6-1.2q1-0.4 2.1-0.4q1.2 0 2.2 0.5q1.1 0.5 1.7 1.6q0.6 1.1 0.6 2.7l0 9.6l-2.3 0l0-9.5q0-1.5-0.9-2.2q-0.8-0.7-2-0.7q-0.9 0-1.6 0.4q-0.7 0.4-1.1 1.1q-0.4 0.7-0.4 1.6l0 9.3l-2.3 0l0-9.7q0-1.2-0.7-1.9q-0.8-0.8-2-0.8q-0.9 0-1.6 0.4q-0.7 0.4-1.2 1.2q-0.4 0.7-0.4 1.9zm24.5 0.3q-1.4 0-2.5-0.5q-1.1-0.5-1.7-1.5q-0.7-0.9-0.7-2.3q0-1.3 0.5-2q0.5-0.8 1.3-1.2q0.8-0.5 1.8-0.7q1-0.2 2-0.3q1.2-0.2 2-0.3q0.8-0.1 1.2-0.3q0.4-0.2 0.4-0.7l0-0.1q0-0.9-0.3-1.5q-0.4-0.6-1-0.9q-0.7-0.4-1.7-0.4q-1 0-1.7 0.4q-0.7 0.3-1.2 0.7q-0.4 0.5-0.7 1l-2.2-0.7q0.6-1.3 1.5-2q0.9-0.8 2.1-1.1q1.1-0.3 2.2-0.3q0.7 0 1.6 0.2q0.9 0.2 1.8 0.7q0.8 0.5 1.3 1.5q0.6 1 0.6 2.6l0 9.4l-2.3 0l0-1.9l-0.1 0q-0.2 0.5-0.8 1q-0.5 0.5-1.4 0.9q-0.8 0.3-2 0.3zm0.4-2q1.2 0 2.1-0.5q0.9-0.5 1.4-1.3q0.4-0.8 0.4-1.6l0-2q-0.1 0.2-0.6 0.3q-0.5 0.1-1.1 0.2q-0.6 0.1-1.1 0.2q-0.6 0.1-0.9 0.1q-0.9 0.1-1.6 0.4q-0.7 0.2-1.1 0.7q-0.5 0.5-0.5 1.3q0 0.7 0.4 1.2q0.4 0.5 1.1 0.8q0.6 0.2 1.5 0.2zm12.9-12.5l2.9 0l0 2l-2.9 0l0 8.5q0 1 0.4 1.4q0.3 0.4 1.2 0.4q0.3 0 0.6 0q0.3-0.1 0.6-0.1l0.5 1.9q-0.4 0.2-0.8 0.2q-0.5 0.1-0.9 0.1q-1.9 0-2.9-1q-1-1-1-2.7l0-8.7l-2.1 0l0-2l2.1 0l0-3.4l2.3 0zm11.6 14.5q-2.1 0-3.6-0.9q-1.5-0.9-2.3-2.6q-0.8-1.6-0.8-3.8q0-2.2 0.8-3.8q0.8-1.7 2.2-2.6q1.5-1 3.4-1q1.1 0 2.2 0.4q1.1 0.4 2 1.2q0.9 0.8 1.5 2.2q0.5 1.4 0.5 3.3l0 1l-10.3 0q0.1 1.3 0.6 2.3q0.5 1.1 1.5 1.7q1 0.6 2.3 0.6q0.8 0 1.5-0.3q0.7-0.2 1.2-0.7q0.5-0.5 0.8-1.2l2.2 0.6q-0.4 1.1-1.2 1.9q-0.7 0.8-1.9 1.2q-1.2 0.5-2.6 0.5zm-4.4-8.6l8 0q-0.1-0.9-0.4-1.7q-0.5-1.1-1.3-1.7q-0.9-0.6-2.2-0.6q-1.3 0-2.2 0.6q-0.9 0.6-1.4 1.6q-0.4 0.9-0.5 1.8zm24.8 13.3q-2.9 0-5.1-0.8q-2.1-0.7-3.6-2.2q-1.5-1.5-2.3-3.7q-0.8-2.2-0.8-5q0-2.7 0.8-4.8q0.8-2.2 2.3-3.7q1.5-1.5 3.6-2.3q2.1-0.8 4.8-0.8q2.6 0 4.6 0.9q2 0.8 3.3 2.3q1.3 1.4 2 3.2q0.7 1.8 0.7 3.8q0 1.3-0.2 2.7q-0.1 1.4-0.5 2.5q-0.5 1.1-1.4 1.8q-0.8 0.7-2.3 0.7q-0.7 0-1.4-0.2q-0.8-0.2-1.4-0.7q-0.6-0.4-0.7-1.2l-0.1 0q-0.3 0.8-1.2 1.4q-0.8 0.6-2.3 0.6q-1.7 0-2.8-0.8q-1.1-0.8-1.7-2.3q-0.6-1.4-0.6-3.2q0-1.7 0.7-3q0.7-1.4 1.9-2.2q1.1-0.7 2.7-0.7q1.2 0 2 0.4q0.8 0.4 1.2 0.9l0.1 0l0-1l2 0l0 8.3q0 0.8 0.4 1.4q0.4 0.5 1.2 0.5q1 0 1.5-0.6q0.5-0.6 0.7-2q0.1-1.3 0.1-3.4q0-1.5-0.5-3q-0.5-1.5-1.6-2.7q-1-1.1-2.7-1.8q-1.6-0.7-3.8-0.7q-2.2 0-3.9 0.6q-1.7 0.7-2.9 2q-1.2 1.2-1.8 3.1q-0.6 1.8-0.6 4.1q0 2.3 0.6 4.1q0.6 1.9 1.8 3.1q1.3 1.3 3.1 1.9q1.8 0.7 4.1 0.7q1.1 0 2-0.2q1-0.2 1.8-0.4q0.7-0.3 1.1-0.4l0.5 1.8q-0.5 0.2-1.5 0.5q-0.9 0.2-1.9 0.3q-1.1 0.2-2 0.2zm-1.1-7.4q1.2 0 2-0.5q0.8-0.5 1.1-1.5q0.4-1 0.4-2.5q0-1.5-0.4-2.4q-0.4-0.8-1.2-1.2q-0.7-0.3-1.8-0.3q-1.1 0-1.8 0.5q-0.7 0.6-1.1 1.4q-0.4 0.9-0.4 2q0 1.2 0.3 2.2q0.3 1 1 1.7q0.7 0.6 1.9 0.6zm20.9 2.7q-2.1 0-3.6-0.9q-1.5-0.9-2.3-2.6q-0.8-1.6-0.8-3.8q0-2.2 0.8-3.8q0.8-1.7 2.2-2.6q1.5-1 3.4-1q1.1 0 2.2 0.4q1.1 0.4 2 1.2q0.9 0.8 1.5 2.2q0.5 1.4 0.5 3.3l0 1l-10.3 0q0.1 1.3 0.6 2.3q0.5 1.1 1.5 1.7q1 0.6 2.3 0.6q0.8 0 1.5-0.3q0.7-0.2 1.2-0.7q0.5-0.5 0.8-1.2l2.2 0.6q-0.4 1.1-1.2 1.9q-0.7 0.8-1.9 1.2q-1.2 0.5-2.6 0.5zm-4.4-8.6l8 0q-0.1-0.9-0.4-1.7q-0.5-1.1-1.3-1.7q-0.9-0.6-2.2-0.6q-1.3 0-2.2 0.6q-0.9 0.6-1.4 1.6q-0.4 0.9-0.5 1.8zm14.5 8.3l-2.7 0l5-7.3l-4.7-6.9l2.7 0l1.7 2.8q0.7 1 1.2 2q0.2 0.3 0.5 0.7q0.2-0.4 0.4-0.7q0.4-1 1.1-2l1.8-2.8l2.6 0l-4.7 7l5 7.2l-2.7 0l-2.1-3.2q-0.6-1-1.1-1.9q-0.2-0.4-0.4-0.7q-0.2 0.3-0.4 0.7q-0.4 0.9-1.1 1.9zm16.7 0.3q-1.4 0-2.5-0.5q-1.1-0.5-1.7-1.5q-0.7-0.9-0.7-2.3q0-1.3 0.5-2q0.5-0.8 1.3-1.2q0.8-0.5 1.8-0.7q1-0.2 2-0.3q1.2-0.2 2-0.3q0.8-0.1 1.2-0.3q0.4-0.2 0.4-0.7l0-0.1q0-0.9-0.3-1.5q-0.4-0.6-1-0.9q-0.7-0.4-1.7-0.4q-1 0-1.7 0.4q-0.7 0.3-1.2 0.7q-0.4 0.5-0.7 1l-2.2-0.7q0.6-1.3 1.5-2q0.9-0.8 2.1-1.1q1.1-0.3 2.2-0.3q0.7 0 1.6 0.2q0.9 0.2 1.8 0.7q0.8 0.5 1.3 1.5q0.6 1 0.6 2.6l0 9.4l-2.3 0l0-1.9l-0.1 0q-0.2 0.5-0.8 1q-0.5 0.5-1.4 0.9q-0.8 0.3-2 0.3zm0.4-2q1.2 0 2.1-0.5q0.9-0.5 1.4-1.3q0.4-0.8 0.4-1.6l0-2q-0.1 0.2-0.6 0.3q-0.5 0.1-1.1 0.2q-0.6 0.1-1.1 0.2q-0.6 0.1-0.9 0.1q-0.9 0.1-1.6 0.4q-0.7 0.2-1.1 0.7q-0.5 0.5-0.5 1.3q0 0.7 0.4 1.2q0.4 0.5 1.1 0.8q0.6 0.2 1.5 0.2zm12.5 1.7l-2.3 0l0-14.2l2.2 0l0 2.6q0.3-0.8 0.8-1.3q0.6-0.8 1.5-1.2q0.8-0.3 1.7-0.3q1.6 0 2.5 0.9q0.8 0.8 1.1 1.9q0.3-0.7 0.8-1.2q0.7-0.8 1.6-1.2q1-0.4 2.1-0.4q1.2 0 2.2 0.5q1.1 0.5 1.7 1.6q0.6 1.1 0.6 2.7l0 9.6l-2.3 0l0-9.5q0-1.5-0.9-2.2q-0.8-0.7-2-0.7q-0.9 0-1.6 0.4q-0.7 0.4-1.1 1.1q-0.4 0.7-0.4 1.6l0 9.3l-2.3 0l0-9.7q0-1.2-0.7-1.9q-0.8-0.8-2-0.8q-0.9 0-1.6 0.4q-0.7 0.4-1.2 1.2q-0.4 0.7-0.4 1.9zm22.8 5.3l-2.3 0l0-19.5l2.2 0l0 2.3l0.3 0q0.2-0.4 0.6-1q0.5-0.6 1.3-1q0.8-0.5 2.2-0.5q1.8 0 3.1 0.9q1.4 0.9 2.1 2.5q0.8 1.7 0.8 3.9q0 2.3-0.8 4q-0.7 1.6-2.1 2.5q-1.3 0.9-3.1 0.9q-1.4 0-2.2-0.5q-0.8-0.4-1.2-1q-0.5-0.6-0.7-1l-0.2 0l0 7.5zm4-7q1.3 0 2.2-0.8q0.9-0.7 1.3-1.9q0.5-1.2 0.5-2.7q0-1.5-0.5-2.6q-0.4-1.2-1.3-1.9q-0.9-0.7-2.2-0.7q-1.4 0-2.2 0.6q-0.9 0.7-1.4 1.9q-0.4 1.1-0.4 2.7q0 1.6 0.4 2.8q0.5 1.2 1.4 1.9q0.9 0.7 2.2 0.7zm9.6-17.2l2.3 0l0 18.9l-2.3 0zm12.3 19.2q-2.1 0-3.6-0.9q-1.5-0.9-2.3-2.6q-0.8-1.6-0.8-3.8q0-2.2 0.8-3.8q0.8-1.7 2.2-2.6q1.5-1 3.4-1q1.1 0 2.2 0.4q1.1 0.4 2 1.2q0.9 0.8 1.5 2.2q0.5 1.4 0.5 3.3l0 1l-10.3 0q0.1 1.3 0.6 2.3q0.5 1.1 1.5 1.7q1 0.6 2.3 0.6q0.8 0 1.5-0.3q0.7-0.2 1.2-0.7q0.5-0.5 0.8-1.2l2.2 0.6q-0.4 1.1-1.2 1.9q-0.7 0.8-1.9 1.2q-1.2 0.5-2.6 0.5zm-4.4-8.6l8 0q-0.1-0.9-0.4-1.7q-0.5-1.1-1.3-1.7q-0.9-0.6-2.2-0.6q-1.3 0-2.2 0.6q-0.9 0.6-1.4 1.6q-0.4 0.9-0.5 1.8zm15.3 8.5q-0.7 0-1.2-0.5q-0.5-0.5-0.5-1.2q0-0.8 0.5-1.3q0.5-0.5 1.2-0.5q0.8 0 1.3 0.5q0.5 0.5 0.5 1.3q0 0.7-0.5 1.2q-0.5 0.5-1.3 0.5zm11.5 0.1q-1.9 0-3.4-0.9q-1.5-0.9-2.3-2.6q-0.8-1.6-0.8-3.8q0-2.2 0.8-3.9q0.8-1.6 2.3-2.6q1.5-0.9 3.4-0.9q1 0 1.9 0.3q0.9 0.3 1.7 0.8q0.7 0.5 1.3 1.2q0.5 0.7 0.8 1.7l-2.2 0.6q-0.1-0.6-0.4-1q-0.4-0.5-0.8-0.8q-0.5-0.4-1-0.5q-0.6-0.2-1.3-0.2q-1.4 0-2.4 0.7q-0.9 0.8-1.3 2q-0.5 1.2-0.5 2.6q0 1.4 0.5 2.6q0.4 1.2 1.3 1.9q1 0.8 2.4 0.8q0.7 0 1.3-0.2q0.6-0.2 1.1-0.6q0.4-0.3 0.7-0.8q0.3-0.5 0.5-1.1l2.2 0.7q-0.3 0.9-0.8 1.7q-0.6 0.7-1.4 1.2q-0.7 0.6-1.6 0.8q-1 0.3-2 0.3zm14.9 0q-1.9 0-3.4-0.9q-1.5-0.9-2.3-2.6q-0.8-1.6-0.8-3.8q0-2.2 0.8-3.9q0.8-1.6 2.3-2.6q1.5-0.9 3.4-0.9q1.9 0 3.4 0.9q1.4 1 2.3 2.6q0.8 1.7 0.8 3.9q0 2.2-0.8 3.8q-0.9 1.7-2.3 2.6q-1.5 0.9-3.4 0.9zm0-2q1.4 0 2.3-0.8q1-0.7 1.4-1.9q0.5-1.2 0.5-2.6q0-1.4-0.5-2.6q-0.4-1.2-1.4-2q-0.9-0.7-2.3-0.7q-1.4 0-2.4 0.7q-0.9 0.8-1.3 2q-0.5 1.2-0.5 2.6q0 1.4 0.5 2.6q0.4 1.2 1.3 1.9q1 0.8 2.4 0.8zm12.1 1.7l-2.3 0l0-14.2l2.2 0l0 2.6q0.3-0.8 0.8-1.3q0.6-0.8 1.5-1.2q0.8-0.3 1.7-0.3q1.6 0 2.5 0.9q0.8 0.8 1.1 1.9q0.3-0.7 0.8-1.2q0.7-0.8 1.6-1.2q1-0.4 2.1-0.4q1.2 0 2.2 0.5q1.1 0.5 1.7 1.6q0.6 1.1 0.6 2.7l0 9.6l-2.3 0l0-9.5q0-1.5-0.9-2.2q-0.8-0.7-2-0.7q-0.9 0-1.6 0.4q-0.7 0.4-1.1 1.1q-0.4 0.7-0.4 1.6l0 9.3l-2.3 0l0-9.7q0-1.2-0.7-1.9q-0.8-0.8-2-0.8q-0.9 0-1.6 0.4q-0.7 0.4-1.2 1.2q-0.4 0.7-0.4 1.9z"/></g><path d="M114,106 H431.16 C431.16,106 431.16,106 431.16,106 V144 C431.16,144 431.16,144 431.16,144 H114 C114,144 114,144 114,144 V106 C114,106 114,106 114,106 Z" fill="var(--illos-if-raised,var(--_if-raised))" stroke="none" stroke-width="2" class="cover"/><g class="hint"><path fill="var(--illos-if-muted,var(--_if-muted))" stroke="none" d="M125.2 134.5l-2.5 0l6.8-18.9l2.8 0l7 18.9l-2.6 0l-1.9-5.3l-7.7 0l-1.9 5.3zm2.6-7.4l6.3 0l-1.4-3.8q-0.3-1.1-0.8-2.6q-0.4-1.3-1-3.2q-0.5 1.9-0.9 3.2q-0.5 1.6-0.9 2.6zm19.4 7.7q-1.7 0-3.1-0.9q-1.4-0.9-2.1-2.5q-0.8-1.7-0.8-4q0-2.2 0.8-3.9q0.8-1.6 2.1-2.5q1.4-0.9 3.1-0.9q1.4 0 2.2 0.5q0.8 0.4 1.3 1q0.4 0.6 0.7 1l0.1 0l0-7l2.3 0l0 18.9l-2.2 0l0-2.2l-0.2 0q-0.3 0.4-0.7 1q-0.5 0.6-1.3 1q-0.8 0.5-2.2 0.5zm0.4-2q1.3 0 2.2-0.7q0.8-0.7 1.3-1.9q0.5-1.2 0.5-2.8q0-1.6-0.5-2.7q-0.4-1.2-1.3-1.9q-0.9-0.6-2.2-0.6q-1.4 0-2.3 0.7q-0.9 0.7-1.3 1.9q-0.5 1.1-0.5 2.6q0 1.5 0.5 2.7q0.4 1.2 1.3 1.9q0.9 0.8 2.3 0.8zm15.6 2q-1.7 0-3.1-0.9q-1.4-0.9-2.1-2.5q-0.8-1.7-0.8-4q0-2.2 0.8-3.9q0.8-1.6 2.1-2.5q1.4-0.9 3.1-0.9q1.4 0 2.2 0.5q0.8 0.4 1.3 1q0.4 0.6 0.7 1l0.1 0l0-7l2.3 0l0 18.9l-2.2 0l0-2.2l-0.2 0q-0.3 0.4-0.7 1q-0.5 0.6-1.3 1q-0.8 0.5-2.2 0.5zm0.4-2q1.3 0 2.2-0.7q0.8-0.7 1.3-1.9q0.5-1.2 0.5-2.8q0-1.6-0.5-2.7q-0.4-1.2-1.3-1.9q-0.9-0.6-2.2-0.6q-1.4 0-2.3 0.7q-0.9 0.7-1.3 1.9q-0.5 1.1-0.5 2.6q0 1.5 0.5 2.7q0.4 1.2 1.3 1.9q0.9 0.8 2.3 0.8zm21.5 2q-1.4 0-2.5-0.5q-1.1-0.5-1.7-1.5q-0.7-0.9-0.7-2.3q0-1.3 0.5-2q0.5-0.8 1.3-1.2q0.8-0.5 1.8-0.7q1-0.2 2-0.3q1.2-0.2 2-0.3q0.8-0.1 1.2-0.3q0.4-0.2 0.4-0.7l0-0.1q0-0.9-0.3-1.5q-0.4-0.6-1-0.9q-0.7-0.4-1.7-0.4q-1 0-1.7 0.4q-0.7 0.3-1.2 0.7q-0.4 0.5-0.7 1l-2.2-0.7q0.6-1.3 1.5-2q0.9-0.8 2.1-1.1q1.1-0.3 2.2-0.3q0.7 0 1.6 0.2q0.9 0.2 1.8 0.7q0.8 0.5 1.3 1.5q0.6 1 0.6 2.6l0 9.4l-2.3 0l0-1.9l-0.1 0q-0.2 0.5-0.8 1q-0.5 0.5-1.4 0.9q-0.8 0.3-2 0.3zm0.4-2q1.2 0 2.1-0.5q0.9-0.5 1.4-1.3q0.4-0.8 0.4-1.6l0-2q-0.1 0.2-0.6 0.3q-0.5 0.1-1.1 0.2q-0.6 0.1-1.1 0.2q-0.6 0.1-0.9 0.1q-0.9 0.1-1.6 0.4q-0.7 0.2-1.1 0.7q-0.5 0.5-0.5 1.3q0 0.7 0.4 1.2q0.4 0.5 1.1 0.8q0.6 0.2 1.5 0.2zm12.5-6.8l0 8.5l-2.3 0l0-14.2l2.2 0l0 2.6q0.6-1.3 1.6-1.9q1.1-0.9 2.8-0.9q1.4 0 2.5 0.6q1 0.6 1.7 1.8q0.6 1.2 0.6 3l0 9l-2.3 0l0-8.8q0-1.7-0.9-2.6q-0.8-0.9-2.3-0.9q-1 0-1.9 0.4q-0.8 0.5-1.2 1.3q-0.5 0.9-0.5 2.1zm26.4 8.8q-2.1 0-3.6-0.9q-1.5-0.9-2.3-2.6q-0.8-1.6-0.8-3.8q0-2.2 0.8-3.8q0.8-1.7 2.2-2.6q1.5-1 3.4-1q1.1 0 2.2 0.4q1.1 0.4 2 1.2q0.9 0.8 1.5 2.2q0.5 1.4 0.5 3.3l0 1l-10.3 0q0.1 1.3 0.6 2.3q0.5 1.1 1.5 1.7q1 0.6 2.3 0.6q0.8 0 1.5-0.3q0.7-0.2 1.2-0.7q0.5-0.5 0.8-1.2l2.2 0.6q-0.4 1.1-1.2 1.9q-0.7 0.8-1.9 1.2q-1.2 0.5-2.6 0.5zm-4.4-8.6l8 0q-0.1-0.9-0.4-1.7q-0.5-1.1-1.3-1.7q-0.9-0.6-2.2-0.6q-1.3 0-2.2 0.6q-0.9 0.6-1.4 1.6q-0.4 0.9-0.5 1.8zm15.8 8.3l-2.3 0l0-14.2l2.2 0l0 2.6q0.3-0.8 0.8-1.3q0.6-0.8 1.5-1.2q0.8-0.3 1.7-0.3q1.6 0 2.5 0.9q0.8 0.8 1.1 1.9q0.3-0.7 0.8-1.2q0.7-0.8 1.6-1.2q1-0.4 2.1-0.4q1.2 0 2.2 0.5q1.1 0.5 1.7 1.6q0.6 1.1 0.6 2.7l0 9.6l-2.3 0l0-9.5q0-1.5-0.9-2.2q-0.8-0.7-2-0.7q-0.9 0-1.6 0.4q-0.7 0.4-1.1 1.1q-0.4 0.7-0.4 1.6l0 9.3l-2.3 0l0-9.7q0-1.2-0.7-1.9q-0.8-0.8-2-0.8q-0.9 0-1.6 0.4q-0.7 0.4-1.2 1.2q-0.4 0.7-0.4 1.9zm24.5 0.3q-1.4 0-2.5-0.5q-1.1-0.5-1.7-1.5q-0.7-0.9-0.7-2.3q0-1.3 0.5-2q0.5-0.8 1.3-1.2q0.8-0.5 1.8-0.7q1-0.2 2-0.3q1.2-0.2 2-0.3q0.8-0.1 1.2-0.3q0.4-0.2 0.4-0.7l0-0.1q0-0.9-0.3-1.5q-0.4-0.6-1-0.9q-0.7-0.4-1.7-0.4q-1 0-1.7 0.4q-0.7 0.3-1.2 0.7q-0.4 0.5-0.7 1l-2.2-0.7q0.6-1.3 1.5-2q0.9-0.8 2.1-1.1q1.1-0.3 2.2-0.3q0.7 0 1.6 0.2q0.9 0.2 1.8 0.7q0.8 0.5 1.3 1.5q0.6 1 0.6 2.6l0 9.4l-2.3 0l0-1.9l-0.1 0q-0.2 0.5-0.8 1q-0.5 0.5-1.4 0.9q-0.8 0.3-2 0.3zm0.4-2q1.2 0 2.1-0.5q0.9-0.5 1.4-1.3q0.4-0.8 0.4-1.6l0-2q-0.1 0.2-0.6 0.3q-0.5 0.1-1.1 0.2q-0.6 0.1-1.1 0.2q-0.6 0.1-0.9 0.1q-0.9 0.1-1.6 0.4q-0.7 0.2-1.1 0.7q-0.5 0.5-0.5 1.3q0 0.7 0.4 1.2q0.4 0.5 1.1 0.8q0.6 0.2 1.5 0.2zm12.5 1.7l-2.3 0l0-14.2l2.3 0l0 14.2zm-1.1-16.5q-0.7 0-1.2-0.5q-0.4-0.4-0.4-1q0-0.7 0.4-1.1q0.5-0.4 1.2-0.4q0.6 0 1.1 0.4q0.5 0.4 0.5 1.1q0 0.6-0.5 1q-0.5 0.5-1.1 0.5zm5.1-2.4l2.3 0l0 18.9l-2.3 0z"/></g><path class="caret" d="M117 111V139" stroke="var(--illos-ink,var(--_ink))" stroke-width="2" stroke-linecap="round"/><g class="btn"><path d="M538.2,96 H592.8 C615.38,96 620,100.62 620,123.2 V126.8 C620,149.38 615.38,154 592.8,154 H538.2 C515.62,154 511,149.38 511,126.8 V123.2 C511,100.62 515.62,96 538.2,96 Z" fill="var(--illos-if-raised,var(--_if-raised))" stroke="var(--illos-if-line,var(--_if-line))" stroke-width="2"/><path fill="var(--illos-ink,var(--_ink))" stroke="none" d="M533.8 115.6l2.9 0l0 18.9l-2.9 0zm9.6 10.5l0 8.4l-2.8 0l0-14.2l2.6 0l0.1 2.7q0.6-1.3 1.5-2q1.2-0.9 2.8-0.9q1.5 0 2.6 0.6q1 0.6 1.7 1.8q0.6 1.2 0.6 3l0 9l-2.8 0l0-8.7q0-1.5-0.8-2.4q-0.8-0.8-2.2-0.8q-1 0-1.7 0.4q-0.8 0.4-1.2 1.2q-0.4 0.8-0.4 1.9zm19.6 8.4l-3.1 0l-5.3-14.2l3 0l2.8 8.1q0.5 1.3 0.8 2.6q0.2 0.6 0.3 1.1q0.1-0.5 0.3-1.1q0.3-1.3 0.7-2.6l2.8-8.1l3 0zm10.6 0l-2.8 0l0-14.2l2.8 0l0 14.2zm-1.4-16.4q-0.7 0-1.2-0.4q-0.6-0.5-0.6-1.2q0-0.7 0.6-1.2q0.5-0.5 1.2-0.5q0.7 0 1.2 0.5q0.6 0.5 0.6 1.2q0 0.7-0.6 1.2q-0.5 0.4-1.2 0.4zm8.4 2.2l2.8 0l0 2.3l-2.8 0l0 8.1q0 0.8 0.4 1.2q0.3 0.4 1.2 0.4q0.2 0 0.5 0q0.4-0.1 0.6-0.1l0.5 2.2q-0.4 0.2-0.9 0.2q-0.5 0.1-1 0.1q-1.9 0-3-1q-1.1-1-1.1-2.8l0-8.3l-2 0l0-2.3l2 0l0-3.4l2.8 0zm11.5 14.5q-2.1 0-3.6-0.9q-1.5-0.9-2.4-2.5q-0.8-1.7-0.8-3.9q0-2.2 0.8-3.8q0.8-1.7 2.3-2.6q1.5-1 3.5-1q1.2 0 2.3 0.4q1.1 0.4 2 1.3q0.9 0.8 1.5 2.2q0.5 1.3 0.5 3.3l0 1l-10.1 0q0.1 1.2 0.5 2.1q0.5 1.1 1.4 1.6q0.9 0.5 2.1 0.5q0.8 0 1.4-0.2q0.7-0.3 1.1-0.7q0.5-0.5 0.7-1.1l2.7 0.6q-0.4 1.1-1.2 1.9q-0.8 0.9-2 1.3q-1.2 0.5-2.7 0.5zm-4-8.6l7.3 0q-0.1-0.9-0.4-1.7q-0.4-0.9-1.1-1.5q-0.8-0.6-2-0.6q-1.2 0-2.1 0.6q-0.8 0.6-1.2 1.5q-0.4 0.8-0.5 1.7z"/></g><g class="pending"><circle cx="136" cy="220.5" r="36" fill="var(--illos-if-surface,var(--_if-surface))" stroke="var(--illos-if-line,var(--_if-line))" stroke-width="2"/><path fill="var(--illos-ink,var(--_ink))" stroke="none" d="M134.5 213.6l-5.9 0l0-2.5l14.7 0l0 2.5l-5.8 0l0 16.4l-3 0z"/><path fill="var(--illos-ink,var(--_ink))" stroke="none" d="M197.1 176.8l2.8 0l0 2.3l-2.8 0l0 8.1q0 0.8 0.4 1.2q0.3 0.4 1.2 0.4q0.2 0 0.5 0q0.4-0.1 0.6-0.1l0.5 2.2q-0.4 0.2-0.9 0.2q-0.5 0.1-1 0.1q-1.9 0-3-1q-1.1-1-1.1-2.8l0-8.3l-2 0l0-2.3l2 0l0-3.4l2.8 0zm11.5 14.5q-2.1 0-3.6-0.9q-1.5-0.9-2.4-2.5q-0.8-1.7-0.8-3.9q0-2.2 0.8-3.8q0.8-1.7 2.3-2.6q1.5-1 3.5-1q1.2 0 2.3 0.4q1.1 0.4 2 1.3q0.9 0.8 1.5 2.2q0.5 1.3 0.5 3.3l0 1l-10.1 0q0.1 1.2 0.5 2.1q0.5 1.1 1.4 1.6q0.9 0.5 2.1 0.5q0.8 0 1.4-0.2q0.7-0.3 1.1-0.7q0.5-0.5 0.7-1.1l2.7 0.6q-0.4 1.1-1.2 1.9q-0.8 0.9-2 1.3q-1.2 0.5-2.7 0.5zm-4-8.6l7.3 0q-0.1-0.9-0.4-1.7q-0.4-0.9-1.1-1.5q-0.8-0.6-2-0.6q-1.2 0-2.1 0.6q-0.8 0.6-1.2 1.5q-0.4 0.8-0.5 1.7zm17.4 8.6q-1.4 0-2.5-0.5q-1.1-0.5-1.7-1.5q-0.6-0.9-0.6-2.3q0-1.2 0.4-2q0.5-0.8 1.3-1.2q0.8-0.5 1.7-0.7q1-0.2 2-0.4q1.3-0.1 2.1-0.2q0.7-0.1 1.1-0.3q0.4-0.2 0.4-0.7l0-0.1q0-0.8-0.3-1.4q-0.3-0.5-0.9-0.8q-0.6-0.3-1.5-0.3q-1 0-1.6 0.3q-0.7 0.3-1.1 0.7q-0.4 0.5-0.6 0.9l-2.6-0.6q0.4-1.3 1.3-2.1q0.9-0.8 2.1-1.1q1.2-0.4 2.4-0.4q0.9 0 1.9 0.2q0.9 0.2 1.8 0.8q0.8 0.5 1.4 1.5q0.5 0.9 0.5 2.5l0 9.4l-2.7 0l0-1.9l-0.2 0q-0.2 0.5-0.8 1q-0.5 0.5-1.4 0.9q-0.8 0.3-1.9 0.3zm0.6-2.2q1.1 0 1.9-0.5q0.8-0.4 1.3-1.2q0.4-0.7 0.4-1.5l0-1.8q-0.1 0.1-0.6 0.2q-0.4 0.2-0.9 0.3q-0.6 0.1-1.1 0.1q-0.5 0.1-0.8 0.1q-0.8 0.1-1.5 0.4q-0.6 0.2-1 0.6q-0.4 0.5-0.4 1.2q0 0.7 0.4 1.2q0.3 0.4 0.9 0.6q0.6 0.3 1.4 0.3zm13 1.9l-2.8 0l0-14.2l2.6 0l0.1 2.6q0.3-0.7 0.7-1.3q0.7-0.8 1.5-1.2q0.9-0.3 1.8-0.3q1.5 0 2.5 0.9q0.8 0.8 1.1 2q0.3-0.7 0.8-1.3q0.7-0.8 1.7-1.2q0.9-0.4 2-0.4q1.3 0 2.3 0.5q1 0.6 1.6 1.6q0.6 1.1 0.6 2.7l0 9.6l-2.8 0l0-9.3q0-1.4-0.8-2q-0.8-0.7-1.8-0.7q-0.9 0-1.6 0.4q-0.6 0.4-0.9 1q-0.4 0.7-0.4 1.5l0 9.1l-2.7 0l0-9.5q0-1.1-0.8-1.8q-0.7-0.7-1.8-0.7q-0.8 0-1.5 0.4q-0.6 0.3-1 1q-0.4 0.7-0.4 1.8zm23.1 0l-2.8 0l0-14.2l2.6 0l0.1 2.6q0.3-0.7 0.7-1.3q0.7-0.8 1.5-1.2q0.9-0.3 1.8-0.3q1.5 0 2.5 0.9q0.8 0.8 1.1 2q0.3-0.7 0.8-1.3q0.7-0.8 1.7-1.2q0.9-0.4 2-0.4q1.3 0 2.3 0.5q1 0.6 1.6 1.6q0.6 1.1 0.6 2.7l0 9.6l-2.8 0l0-9.3q0-1.4-0.8-2q-0.8-0.7-1.8-0.7q-0.9 0-1.6 0.4q-0.6 0.4-0.9 1q-0.4 0.7-0.4 1.5l0 9.1l-2.7 0l0-9.5q0-1.1-0.8-1.8q-0.7-0.7-1.8-0.7q-0.8 0-1.5 0.4q-0.6 0.3-1 1q-0.4 0.7-0.4 1.8zm24.3 0.3q-1.4 0-2.5-0.5q-1.1-0.5-1.7-1.5q-0.6-0.9-0.6-2.3q0-1.2 0.4-2q0.5-0.8 1.3-1.2q0.8-0.5 1.7-0.7q1-0.2 2-0.4q1.3-0.1 2.1-0.2q0.7-0.1 1.1-0.3q0.4-0.2 0.4-0.7l0-0.1q0-0.8-0.3-1.4q-0.3-0.5-0.9-0.8q-0.6-0.3-1.5-0.3q-1 0-1.6 0.3q-0.7 0.3-1.1 0.7q-0.4 0.5-0.6 0.9l-2.6-0.6q0.4-1.3 1.3-2.1q0.9-0.8 2.1-1.1q1.2-0.4 2.4-0.4q0.9 0 1.9 0.2q0.9 0.2 1.8 0.8q0.8 0.5 1.4 1.5q0.5 0.9 0.5 2.5l0 9.4l-2.7 0l0-1.9l-0.2 0q-0.2 0.5-0.8 1q-0.5 0.5-1.4 0.9q-0.8 0.3-1.9 0.3zm0.6-2.2q1.1 0 1.9-0.5q0.8-0.4 1.3-1.2q0.4-0.7 0.4-1.5l0-1.8q-0.1 0.1-0.6 0.2q-0.4 0.2-0.9 0.3q-0.6 0.1-1.1 0.1q-0.5 0.1-0.8 0.1q-0.8 0.1-1.5 0.4q-0.6 0.2-1 0.6q-0.4 0.5-0.4 1.2q0 0.7 0.4 1.2q0.3 0.4 0.9 0.6q0.6 0.3 1.4 0.3zm13.3-12.3l2.8 0l0 2.3l-2.8 0l0 8.1q0 0.8 0.4 1.2q0.3 0.4 1.2 0.4q0.2 0 0.5 0q0.4-0.1 0.6-0.1l0.5 2.2q-0.4 0.2-0.9 0.2q-0.5 0.1-1 0.1q-1.9 0-3-1q-1.1-1-1.1-2.8l0-8.3l-2 0l0-2.3l2 0l0-3.4l2.8 0zm11.5 14.5q-2.1 0-3.6-0.9q-1.5-0.9-2.4-2.5q-0.8-1.7-0.8-3.9q0-2.2 0.8-3.8q0.8-1.7 2.3-2.6q1.5-1 3.5-1q1.2 0 2.3 0.4q1.1 0.4 2 1.3q0.9 0.8 1.5 2.2q0.5 1.3 0.5 3.3l0 1l-10.1 0q0.1 1.2 0.5 2.1q0.5 1.1 1.4 1.6q0.9 0.5 2.1 0.5q0.8 0 1.4-0.2q0.7-0.3 1.1-0.7q0.5-0.5 0.7-1.1l2.7 0.6q-0.4 1.1-1.2 1.9q-0.8 0.9-2 1.3q-1.2 0.5-2.7 0.5zm-4-8.6l7.3 0q-0.1-0.9-0.4-1.7q-0.4-0.9-1.1-1.5q-0.8-0.6-2-0.6q-1.2 0-2.1 0.6q-0.8 0.6-1.2 1.5q-0.4 0.8-0.5 1.7zm24.6 13.5q-2.8 0-5-0.8q-2.3-0.8-3.8-2.3q-1.5-1.5-2.3-3.7q-0.8-2.2-0.8-5q0-2.7 0.8-4.9q0.8-2.2 2.3-3.7q1.5-1.6 3.7-2.4q2.1-0.8 4.9-0.8q2.7 0 4.7 0.8q2.1 0.8 3.5 2.3q1.4 1.4 2.1 3.3q0.7 1.9 0.7 4q0 1.4-0.2 2.8q-0.2 1.3-0.7 2.4q-0.5 1.1-1.4 1.8q-0.9 0.6-2.4 0.6q-0.7 0-1.4-0.2q-0.8-0.2-1.3-0.7q-0.6-0.4-0.7-1.2l-0.1 0q-0.4 0.9-1.2 1.5q-1 0.6-2.4 0.6q-1.7 0-2.9-0.8q-1.1-0.9-1.7-2.3q-0.6-1.4-0.6-3.3q0-1.7 0.6-3.1q0.7-1.4 1.9-2.1q1.2-0.8 2.8-0.8q1.2 0 2.1 0.4q0.8 0.5 1.2 1l0.1 0l0-1.1l2.2 0l0 8.4q0 0.7 0.4 1.2q0.4 0.5 1.1 0.5q0.9 0 1.4-0.6q0.5-0.6 0.7-1.8q0.1-1.2 0.1-3.2q0-1.6-0.5-3.1q-0.5-1.5-1.6-2.7q-1.1-1.1-2.7-1.8q-1.6-0.6-3.8-0.6q-2.2 0-3.9 0.6q-1.7 0.7-2.9 1.9q-1.2 1.2-1.8 3q-0.6 1.8-0.6 4.1q0 2.3 0.6 4.1q0.6 1.8 1.9 3q1.2 1.2 3 1.8q1.7 0.7 4.1 0.7q1 0 2-0.2q0.9-0.2 1.7-0.4q0.8-0.3 1.2-0.4l0.7 2q-0.6 0.3-1.5 0.6q-1 0.2-2.1 0.4q-1.1 0.2-2.2 0.2zm-0.8-7.8q1.1 0 1.9-0.5q0.7-0.5 1.1-1.4q0.3-0.9 0.3-2.3q0-1.5-0.4-2.3q-0.3-0.8-1.1-1.2q-0.7-0.3-1.8-0.3q-1 0-1.7 0.5q-0.7 0.5-1.1 1.4q-0.4 0.8-0.4 1.9q0 1.1 0.3 2.1q0.4 0.9 1.1 1.5q0.6 0.6 1.8 0.6zm21 2.9q-2.1 0-3.6-0.9q-1.5-0.9-2.4-2.5q-0.8-1.7-0.8-3.9q0-2.2 0.8-3.8q0.8-1.7 2.3-2.6q1.5-1 3.5-1q1.2 0 2.3 0.4q1.1 0.4 2 1.3q0.9 0.8 1.5 2.2q0.5 1.3 0.5 3.3l0 1l-10.1 0q0.1 1.2 0.5 2.1q0.5 1.1 1.4 1.6q0.9 0.5 2.1 0.5q0.8 0 1.4-0.2q0.7-0.3 1.1-0.7q0.5-0.5 0.7-1.1l2.7 0.6q-0.4 1.1-1.2 1.9q-0.8 0.9-2 1.3q-1.2 0.5-2.7 0.5zm-4-8.6l7.3 0q-0.1-0.9-0.4-1.7q-0.4-0.9-1.1-1.5q-0.8-0.6-2-0.6q-1.2 0-2.1 0.6q-0.8 0.6-1.2 1.5q-0.4 0.8-0.5 1.7zm14.6 8.3l-3.1 0l4.9-7.3l-4.6-6.9l3.2 0l1.6 2.6q0.6 1.1 1.1 2q0.2 0.4 0.4 0.8q0.2-0.4 0.4-0.8q0.4-0.9 1.1-2l1.6-2.6l3.1 0l-4.6 7l4.9 7.2l-3.2 0l-1.9-3q-0.6-1.1-1.1-2q-0.2-0.4-0.4-0.7q-0.2 0.3-0.3 0.7q-0.5 0.9-1.1 2zm16.5 0.3q-1.4 0-2.5-0.5q-1.1-0.5-1.7-1.5q-0.6-0.9-0.6-2.3q0-1.2 0.4-2q0.5-0.8 1.3-1.2q0.8-0.5 1.7-0.7q1-0.2 2-0.4q1.3-0.1 2.1-0.2q0.7-0.1 1.1-0.3q0.4-0.2 0.4-0.7l0-0.1q0-0.8-0.3-1.4q-0.3-0.5-0.9-0.8q-0.6-0.3-1.5-0.3q-1 0-1.6 0.3q-0.7 0.3-1.1 0.7q-0.4 0.5-0.6 0.9l-2.6-0.6q0.4-1.3 1.3-2.1q0.9-0.8 2.1-1.1q1.2-0.4 2.4-0.4q0.9 0 1.9 0.2q0.9 0.2 1.8 0.8q0.8 0.5 1.4 1.5q0.5 0.9 0.5 2.5l0 9.4l-2.7 0l0-1.9l-0.2 0q-0.2 0.5-0.8 1q-0.5 0.5-1.4 0.9q-0.8 0.3-1.9 0.3zm0.6-2.2q1.1 0 1.9-0.5q0.8-0.4 1.3-1.2q0.4-0.7 0.4-1.5l0-1.8q-0.1 0.1-0.6 0.2q-0.4 0.2-0.9 0.3q-0.6 0.1-1.1 0.1q-0.5 0.1-0.8 0.1q-0.8 0.1-1.5 0.4q-0.6 0.2-1 0.6q-0.4 0.5-0.4 1.2q0 0.7 0.4 1.2q0.3 0.4 0.9 0.6q0.6 0.3 1.4 0.3zm13 1.9l-2.8 0l0-14.2l2.6 0l0.1 2.6q0.3-0.7 0.7-1.3q0.7-0.8 1.5-1.2q0.9-0.3 1.8-0.3q1.5 0 2.5 0.9q0.8 0.8 1.1 2q0.3-0.7 0.8-1.3q0.7-0.8 1.7-1.2q0.9-0.4 2-0.4q1.3 0 2.3 0.5q1 0.6 1.6 1.6q0.6 1.1 0.6 2.7l0 9.6l-2.8 0l0-9.3q0-1.4-0.8-2q-0.8-0.7-1.8-0.7q-0.9 0-1.6 0.4q-0.6 0.4-0.9 1q-0.4 0.7-0.4 1.5l0 9.1l-2.7 0l0-9.5q0-1.1-0.8-1.8q-0.7-0.7-1.8-0.7q-0.8 0-1.5 0.4q-0.6 0.3-1 1q-0.4 0.7-0.4 1.8zm23.1 5.3l-2.8 0l0-19.5l2.7 0l0 2.3l0.2 0q0.3-0.4 0.7-1q0.5-0.6 1.3-1q0.8-0.5 2.1-0.5q1.7 0 3.1 0.9q1.3 0.9 2.1 2.5q0.8 1.6 0.8 3.9q0 2.3-0.8 4q-0.8 1.6-2.1 2.5q-1.3 0.9-3.1 0.9q-1.3 0-2.1-0.5q-0.8-0.4-1.3-1q-0.4-0.6-0.7-1l-0.1 0l0 7.5zm3.6-7.4q1.2 0 2-0.7q0.9-0.6 1.3-1.7q0.4-1.2 0.4-2.6q0-1.4-0.4-2.5q-0.4-1.1-1.2-1.7q-0.9-0.7-2.1-0.7q-1.2 0-2 0.6q-0.8 0.6-1.3 1.7q-0.4 1.1-0.4 2.6q0 1.5 0.5 2.6q0.4 1.1 1.2 1.8q0.8 0.6 2 0.6zm9.7-16.8l2.8 0l0 18.9l-2.8 0zm12.6 19.2q-2.1 0-3.6-0.9q-1.5-0.9-2.4-2.5q-0.8-1.7-0.8-3.9q0-2.2 0.8-3.8q0.8-1.7 2.3-2.6q1.5-1 3.5-1q1.2 0 2.3 0.4q1.1 0.4 2 1.3q0.9 0.8 1.5 2.2q0.5 1.3 0.5 3.3l0 1l-10.1 0q0.1 1.2 0.5 2.1q0.5 1.1 1.4 1.6q0.9 0.5 2.1 0.5q0.8 0 1.4-0.2q0.7-0.3 1.1-0.7q0.5-0.5 0.7-1.1l2.7 0.6q-0.4 1.1-1.2 1.9q-0.8 0.9-2 1.3q-1.2 0.5-2.7 0.5zm-4-8.6l7.3 0q-0.1-0.9-0.4-1.7q-0.4-0.9-1.1-1.5q-0.8-0.6-2-0.6q-1.2 0-2.1 0.6q-0.8 0.6-1.2 1.5q-0.4 0.8-0.5 1.7zm15.2 8.5q-0.7 0-1.3-0.6q-0.5-0.5-0.5-1.3q0-0.8 0.5-1.3q0.6-0.5 1.3-0.5q0.8 0 1.4 0.5q0.5 0.5 0.5 1.3q0 0.8-0.5 1.3q-0.6 0.6-1.4 0.6zm11.8 0.1q-2 0-3.4-0.9q-1.5-0.9-2.4-2.6q-0.8-1.6-0.8-3.8q0-2.2 0.8-3.9q0.9-1.6 2.4-2.6q1.4-0.9 3.4-0.9q1.2 0 2.1 0.3q1 0.3 1.8 0.8q0.7 0.6 1.3 1.4q0.5 0.7 0.8 1.7l-2.7 0.7q-0.1-0.6-0.4-1q-0.3-0.5-0.7-0.8q-0.4-0.4-0.9-0.5q-0.6-0.2-1.2-0.2q-1.3 0-2.2 0.7q-0.8 0.6-1.2 1.8q-0.4 1.1-0.4 2.5q0 1.3 0.4 2.5q0.4 1.1 1.2 1.8q0.9 0.6 2.2 0.6q0.6 0 1.2-0.2q0.5-0.1 0.9-0.5q0.5-0.3 0.8-0.8q0.3-0.5 0.4-1l2.6 0.6q-0.2 1-0.8 1.8q-0.5 0.8-1.3 1.3q-0.8 0.6-1.8 0.9q-0.9 0.3-2.1 0.3zm15 0q-1.9 0-3.4-0.9q-1.5-0.9-2.4-2.6q-0.8-1.6-0.8-3.8q0-2.2 0.8-3.9q0.9-1.6 2.4-2.6q1.5-0.9 3.4-0.9q2.1 0 3.5 0.9q1.5 1 2.4 2.6q0.8 1.7 0.8 3.9q0 2.2-0.8 3.8q-0.9 1.7-2.4 2.6q-1.4 0.9-3.5 0.9zm0-2.4q1.3 0 2.2-0.7q0.8-0.6 1.2-1.8q0.5-1.1 0.5-2.4q0-1.4-0.5-2.5q-0.4-1.2-1.2-1.8q-0.9-0.7-2.2-0.7q-1.2 0-2.1 0.7q-0.8 0.6-1.2 1.8q-0.4 1.1-0.4 2.5q0 1.3 0.4 2.4q0.4 1.2 1.2 1.8q0.9 0.7 2.1 0.7zm12.6 2.1l-2.8 0l0-14.2l2.6 0l0.1 2.6q0.3-0.7 0.7-1.3q0.7-0.8 1.5-1.2q0.9-0.3 1.8-0.3q1.5 0 2.5 0.9q0.8 0.8 1.1 2q0.3-0.7 0.8-1.3q0.7-0.8 1.7-1.2q0.9-0.4 2-0.4q1.3 0 2.3 0.5q1 0.6 1.6 1.6q0.6 1.1 0.6 2.7l0 9.6l-2.8 0l0-9.3q0-1.4-0.8-2q-0.8-0.7-1.8-0.7q-0.9 0-1.6 0.4q-0.6 0.4-0.9 1q-0.4 0.7-0.4 1.5l0 9.1l-2.7 0l0-9.5q0-1.1-0.8-1.8q-0.7-0.7-1.8-0.7q-0.8 0-1.5 0.4q-0.6 0.3-1 1q-0.4 0.7-0.4 1.8z"/><g class="mark"><g data-icon="Cancel01" transform="translate(592,226) scale(1.1667)" fill="none"><path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.714"/></g></g><path fill="var(--illos-if-muted,var(--_if-muted))" stroke="none" d="M200.2 249.5l-5.9 0l0-18.9l6.1 0q2.8 0 4.8 1.1q1.9 1.1 3 3.3q1 2.1 1 5q0 3-1 5.1q-1.1 2.1-3.1 3.3q-2 1.1-4.9 1.1zm-3.5-16.8l0 14.7l3.3 0q2.3 0 3.9-0.9q1.5-0.9 2.2-2.5q0.8-1.7 0.8-4q0-2.3-0.8-3.9q-0.7-1.6-2.2-2.5q-1.4-0.9-3.6-0.9zm22.1 17.1q-2.1 0-3.6-0.9q-1.5-0.9-2.3-2.6q-0.8-1.6-0.8-3.8q0-2.2 0.8-3.8q0.8-1.7 2.2-2.6q1.5-1 3.4-1q1.1 0 2.2 0.4q1.1 0.4 2 1.2q0.9 0.8 1.5 2.2q0.5 1.4 0.5 3.3l0 1l-10.3 0q0.1 1.3 0.6 2.3q0.5 1.1 1.5 1.7q1 0.6 2.3 0.6q0.8 0 1.5-0.3q0.7-0.2 1.2-0.7q0.5-0.5 0.8-1.2l2.2 0.6q-0.4 1.1-1.2 1.9q-0.7 0.8-1.9 1.2q-1.2 0.5-2.6 0.5zm-4.4-8.6l8 0q-0.1-0.9-0.4-1.7q-0.5-1.1-1.3-1.7q-0.9-0.6-2.2-0.6q-1.3 0-2.2 0.6q-0.9 0.6-1.4 1.6q-0.4 0.9-0.5 1.8zm18.3 8.6q-1.4 0-2.6-0.4q-1.1-0.4-1.8-1.3q-0.8-0.8-1-2l2.1-0.6q0.3 1.2 1.2 1.8q0.8 0.5 2.1 0.5q1.5 0 2.4-0.6q0.9-0.7 0.9-1.5q0-0.8-0.6-1.3q-0.5-0.5-1.5-0.7l-2.4-0.6q-1.9-0.4-2.9-1.4q-0.9-0.9-0.9-2.4q0-1.3 0.7-2.2q0.7-0.9 1.9-1.5q1.1-0.5 2.7-0.5q1.4 0 2.4 0.5q1.1 0.4 1.7 1.2q0.6 0.7 1 1.7l-2.1 0.6q-0.3-0.8-1-1.4q-0.7-0.6-2-0.6q-1.3 0-2.1 0.6q-0.9 0.5-0.9 1.4q0 0.8 0.6 1.3q0.6 0.5 1.8 0.8l2.1 0.5q2 0.4 2.9 1.4q0.9 0.9 0.9 2.4q0 1.2-0.7 2.2q-0.7 1-1.9 1.5q-1.3 0.6-3 0.6zm11.2-0.3l-2.3 0l0-14.2l2.3 0l0 14.2zm-1.1-16.5q-0.7 0-1.2-0.5q-0.4-0.4-0.4-1q0-0.7 0.4-1.1q0.5-0.4 1.2-0.4q0.6 0 1.1 0.4q0.5 0.4 0.5 1.1q0 0.6-0.5 1q-0.5 0.5-1.1 0.5zm10.9 22.1q-1.6 0-2.8-0.4q-1.1-0.4-1.9-1q-0.7-0.7-1.2-1.5l1.9-1.2q0.3 0.4 0.7 0.9q0.5 0.5 1.3 0.9q0.7 0.3 2 0.3q1.7 0 2.8-0.8q1.1-0.8 1.1-2.6l0-2.8l-0.3 0q-0.2 0.4-0.6 1q-0.5 0.5-1.3 0.9q-0.8 0.5-2.2 0.5q-1.7 0-3-0.8q-1.4-0.8-2.2-2.4q-0.8-1.5-0.8-3.8q0-2.2 0.8-3.8q0.8-1.6 2.1-2.5q1.4-0.9 3.2-0.9q1.3 0 2.2 0.5q0.8 0.4 1.2 1q0.5 0.6 0.7 1l0.2 0l0-2.3l2.2 0l0 14.6q0 1.8-0.8 3q-0.8 1.1-2.2 1.7q-1.4 0.5-3.1 0.5zm-0.1-7.9q1.3 0 2.2-0.6q0.9-0.5 1.3-1.7q0.5-1.1 0.5-2.6q0-1.5-0.5-2.7q-0.4-1.1-1.3-1.8q-0.9-0.6-2.2-0.6q-1.4 0-2.3 0.7q-0.9 0.7-1.3 1.8q-0.5 1.2-0.5 2.6q0 1.4 0.5 2.6q0.5 1.1 1.4 1.7q0.9 0.6 2.2 0.6zm12.6-6.2l0 8.5l-2.3 0l0-14.2l2.2 0l0 2.6q0.6-1.3 1.6-1.9q1.1-0.9 2.8-0.9q1.4 0 2.5 0.6q1 0.6 1.7 1.8q0.6 1.2 0.6 3l0 9l-2.3 0l0-8.8q0-1.7-0.9-2.6q-0.8-0.9-2.3-0.9q-1 0-1.9 0.4q-0.8 0.5-1.2 1.3q-0.5 0.9-0.5 2.1zm19 8.8q-2.1 0-3.6-0.9q-1.5-0.9-2.3-2.6q-0.8-1.6-0.8-3.8q0-2.2 0.8-3.8q0.8-1.7 2.2-2.6q1.5-1 3.4-1q1.1 0 2.2 0.4q1.1 0.4 2 1.2q0.9 0.8 1.5 2.2q0.5 1.4 0.5 3.3l0 1l-10.3 0q0.1 1.3 0.6 2.3q0.5 1.1 1.5 1.7q1 0.6 2.3 0.6q0.8 0 1.5-0.3q0.7-0.2 1.2-0.7q0.5-0.5 0.8-1.2l2.2 0.6q-0.4 1.1-1.2 1.9q-0.7 0.8-1.9 1.2q-1.2 0.5-2.6 0.5zm-4.4-8.6l8 0q-0.1-0.9-0.4-1.7q-0.5-1.1-1.3-1.7q-0.9-0.6-2.2-0.6q-1.3 0-2.2 0.6q-0.9 0.6-1.4 1.6q-0.4 0.9-0.5 1.8zm15.9 8.3l-2.3 0l0-14.2l2.2 0l0 2.2l0.2 0q0.4-1.1 1.4-1.7q1-0.7 2.2-0.7q0.3 0 0.7 0q0.3 0 0.5 0l0 2.3q-0.1 0-0.5 0q-0.4-0.1-0.9-0.1q-1 0-1.8 0.4q-0.8 0.5-1.3 1.2q-0.4 0.7-0.4 1.7z"/><g data-icon="ChevronDown" transform="translate(308.2,226) scale(1.1667)" fill="none"><path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.714"/></g><g class="invited"><rect data-pill="" x="396.74" y="211" width="173.75" height="58" rx="29" fill="var(--illos-if-accent-fill,var(--_if-accent-auto-fill,var(--_if-accent-fill)))" stroke="none" stroke-width="2"/><g data-icon="MailSend01" transform="translate(418.74,223) scale(1.4167)" fill="none"><path d="M22 12.5C22 12.0086 21.9947 11.0172 21.9842 10.5244C21.9189 7.45883 21.8862 5.92606 20.7551 4.79063C19.6239 3.6552 18.0497 3.61565 14.9012 3.53654C12.9607 3.48778 11.0393 3.48778 9.09882 3.53653C5.95033 3.61563 4.37608 3.65518 3.24495 4.79062C2.11382 5.92605 2.08114 7.45882 2.01576 10.5243C1.99474 11.51 1.99475 12.4899 2.01577 13.4756C2.08114 16.5411 2.11383 18.0739 3.24496 19.2093C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C9.90159 20.4836 10.7011 20.4954 11.5 20.4989" stroke="var(--illos-accent,var(--_accent))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/><path d="M2 6L8.91302 9.92462C11.4387 11.3585 12.5613 11.3585 15.087 9.92462L22 6" stroke="var(--illos-accent,var(--_accent))" stroke-linejoin="round" stroke-width="1.412"/><path d="M22 17.5L14 17.5M22 17.5C22 16.7998 20.0057 15.4915 19.5 15M22 17.5C22 18.2002 20.0057 19.5085 19.5 20" stroke="var(--illos-accent,var(--_accent))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/></g><path fill="var(--illos-accent,var(--_accent))" stroke="none" d="M466.8 230.6l2.9 0l0 18.9l-2.9 0zm9.7 10.5l0 8.4l-2.8 0l0-14.2l2.6 0l0.1 2.7q0.6-1.3 1.5-2q1.2-0.9 2.8-0.9q1.5 0 2.6 0.6q1 0.6 1.7 1.8q0.6 1.2 0.6 3l0 9l-2.8 0l0-8.7q0-1.5-0.8-2.4q-0.8-0.8-2.2-0.8q-1 0-1.7 0.4q-0.8 0.4-1.2 1.2q-0.4 0.8-0.4 1.9zm19.6 8.4l-3.1 0l-5.3-14.2l3 0l2.8 8.1q0.5 1.3 0.8 2.6q0.2 0.6 0.3 1.1q0.1-0.5 0.3-1.1q0.3-1.3 0.7-2.6l2.8-8.1l3 0zm10.6 0l-2.8 0l0-14.2l2.8 0l0 14.2zm-1.4-16.4q-0.7 0-1.2-0.4q-0.6-0.5-0.6-1.2q0-0.7 0.6-1.2q0.5-0.5 1.2-0.5q0.7 0 1.2 0.5q0.6 0.5 0.6 1.2q0 0.7-0.6 1.2q-0.5 0.4-1.2 0.4zm8.4 2.2l2.8 0l0 2.3l-2.8 0l0 8.1q0 0.8 0.4 1.2q0.3 0.4 1.2 0.4q0.2 0 0.5 0q0.4-0.1 0.6-0.1l0.5 2.2q-0.4 0.2-0.9 0.2q-0.5 0.1-1 0.1q-1.9 0-3-1q-1.1-1-1.1-2.8l0-8.3l-2 0l0-2.3l2 0l0-3.4l2.8 0zm11.4 14.5q-2.1 0-3.6-0.9q-1.5-0.9-2.4-2.5q-0.8-1.7-0.8-3.9q0-2.2 0.8-3.8q0.8-1.7 2.3-2.6q1.5-1 3.5-1q1.2 0 2.3 0.4q1.1 0.4 2 1.3q0.9 0.8 1.5 2.2q0.5 1.3 0.5 3.3l0 1l-10.1 0q0.1 1.2 0.5 2.1q0.5 1.1 1.4 1.6q0.9 0.5 2.1 0.5q0.8 0 1.4-0.2q0.7-0.3 1.1-0.7q0.5-0.5 0.7-1.1l2.7 0.6q-0.4 1.1-1.2 1.9q-0.8 0.9-2 1.3q-1.2 0.5-2.7 0.5zm-4-8.6l7.3 0q-0.1-0.9-0.4-1.7q-0.4-0.9-1.1-1.5q-0.8-0.6-2-0.6q-1.2 0-2.1 0.6q-0.8 0.6-1.2 1.5q-0.4 0.8-0.5 1.7zm18.5 8.6q-1.8 0-3.1-0.9q-1.4-0.9-2.1-2.5q-0.8-1.7-0.8-4q0-2.3 0.8-3.9q0.8-1.6 2.1-2.5q1.4-0.9 3.1-0.9q1.3 0 2.1 0.5q0.8 0.4 1.2 1q0.5 0.6 0.7 1l0.2 0l0-7l2.8 0l0 18.9l-2.7 0l0-2.2l-0.3 0q-0.2 0.4-0.7 1q-0.4 0.6-1.2 1q-0.9 0.5-2.1 0.5zm0.6-2.4q1.2 0 2-0.6q0.8-0.7 1.2-1.8q0.5-1.1 0.5-2.6q0-1.5-0.5-2.6q-0.4-1.1-1.2-1.7q-0.8-0.6-2-0.6q-1.3 0-2.1 0.7q-0.8 0.6-1.2 1.7q-0.4 1.1-0.4 2.5q0 1.4 0.4 2.6q0.4 1.1 1.2 1.7q0.9 0.7 2.1 0.7z"/></g></g><g class="older"><circle cx="136" cy="323.5" r="36" fill="var(--illos-if-surface,var(--_if-surface))" stroke="var(--illos-if-line,var(--_if-line))" stroke-width="2"/><path fill="var(--illos-ink,var(--_ink))" stroke="none" d="M121.6 333l-3.2 0l6.8-18.9l3.5 0l6.9 18.9l-3.1 0l-1.8-5l-7.4 0l-1.7 5zm2.5-7.4l5.8 0l-1.1-3.1q-0.5-1.3-1-3q-0.4-1.4-0.9-3.1q-0.4 1.7-0.8 3.1q-0.6 1.8-0.9 3zm17.2 7.4l-2.9 0l0-18.9l2.9 0l0 6l-0.1 3.8q0.3-0.3 0.5-0.6q0.6-0.8 1.3-1.7q0.7-0.8 1.4-1.6l5.3-5.9l3.7 0l-7.4 8.2l7.5 10.7l-3.5 0l-6.1-8.8l-2.6 2.9z"/><rect data-pill="" x="192" y="287" width="150" height="14" rx="7" fill="var(--illos-if-bar,var(--_if-bar))" stroke="none"/><path fill="var(--illos-if-muted,var(--_if-muted))" stroke="none" d="M195.2 340.5l-2.5 0l6.8-18.9l2.8 0l7 18.9l-2.6 0l-1.9-5.3l-7.7 0l-1.9 5.3zm2.6-7.4l6.3 0l-1.4-3.8q-0.3-1.1-0.8-2.6q-0.4-1.3-1-3.2q-0.5 1.9-0.9 3.2q-0.5 1.6-0.9 2.6zm19.4 7.7q-1.7 0-3.1-0.9q-1.4-0.9-2.1-2.5q-0.8-1.7-0.8-4q0-2.2 0.8-3.9q0.8-1.6 2.1-2.5q1.4-0.9 3.1-0.9q1.4 0 2.2 0.5q0.8 0.4 1.3 1q0.4 0.6 0.7 1l0.1 0l0-7l2.3 0l0 18.9l-2.2 0l0-2.2l-0.2 0q-0.3 0.4-0.7 1q-0.5 0.6-1.3 1q-0.8 0.5-2.2 0.5zm0.4-2q1.3 0 2.2-0.7q0.8-0.7 1.3-1.9q0.5-1.2 0.5-2.8q0-1.6-0.5-2.7q-0.4-1.2-1.3-1.9q-0.9-0.6-2.2-0.6q-1.4 0-2.3 0.7q-0.9 0.7-1.3 1.9q-0.5 1.1-0.5 2.6q0 1.5 0.5 2.7q0.4 1.2 1.3 1.9q0.9 0.8 2.3 0.8zm12.6 1.7l-2.3 0l0-14.2l2.2 0l0 2.6q0.3-0.8 0.8-1.3q0.6-0.8 1.5-1.2q0.8-0.3 1.7-0.3q1.6 0 2.5 0.9q0.8 0.8 1.1 1.9q0.3-0.7 0.8-1.2q0.7-0.8 1.6-1.2q1-0.4 2.1-0.4q1.2 0 2.2 0.5q1.1 0.5 1.7 1.6q0.6 1.1 0.6 2.7l0 9.6l-2.3 0l0-9.5q0-1.5-0.9-2.2q-0.8-0.7-2-0.7q-0.9 0-1.6 0.4q-0.7 0.4-1.1 1.1q-0.4 0.7-0.4 1.6l0 9.3l-2.3 0l0-9.7q0-1.2-0.7-1.9q-0.8-0.8-2-0.8q-0.9 0-1.6 0.4q-0.7 0.4-1.2 1.2q-0.4 0.7-0.4 1.9zm22.7 0l-2.3 0l0-14.2l2.3 0l0 14.2zm-1.1-16.5q-0.7 0-1.2-0.5q-0.4-0.4-0.4-1q0-0.7 0.4-1.1q0.5-0.4 1.2-0.4q0.6 0 1.1 0.4q0.5 0.4 0.5 1.1q0 0.6-0.5 1q-0.5 0.5-1.1 0.5zm7.4 8l0 8.5l-2.3 0l0-14.2l2.2 0l0 2.6q0.6-1.3 1.6-1.9q1.1-0.9 2.8-0.9q1.4 0 2.5 0.6q1 0.6 1.7 1.8q0.6 1.2 0.6 3l0 9l-2.3 0l0-8.8q0-1.7-0.9-2.6q-0.8-0.9-2.3-0.9q-1 0-1.9 0.4q-0.8 0.5-1.2 1.3q-0.5 0.9-0.5 2.1z"/><g data-icon="ChevronDown" transform="translate(276.29,317) scale(1.1667)" fill="none"><path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.714"/></g><rect data-pill="" x="377.31" y="302" width="193.49" height="58" rx="29" fill="var(--illos-if-surface,var(--_if-surface))" stroke="var(--illos-if-line,var(--_if-line))" stroke-width="2"/><g data-icon="Tick02" transform="translate(399.31,314) scale(1.4167)" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/></g><path fill="var(--illos-if-muted,var(--_if-muted))" stroke="none" d="M450.2 340.5l-2.8 0l0-18.9l4.3 0l4.1 10.8q0.2 0.5 0.4 1.3q0.2 0.7 0.4 1.6q0.3 0.8 0.5 1.7q0 0.1 0.1 0.3q0-0.2 0.1-0.3q0.2-0.8 0.4-1.7q0.3-0.9 0.5-1.6q0.2-0.8 0.4-1.3l4.1-10.8l4.2 0l0 18.9l-2.8 0l0-10.2q0-0.6 0-1.4q0-0.8 0-1.7q0-0.9 0.1-1.8q0-0.5 0-1q-0.2 0.5-0.4 1.1q-0.3 1-0.5 1.9q-0.3 0.9-0.6 1.7q-0.2 0.7-0.4 1.2l-3.9 10.2l-2.5 0l-3.9-10.2q-0.2-0.5-0.4-1.2q-0.3-0.7-0.6-1.7q-0.3-0.9-0.6-1.9q-0.1-0.5-0.3-1q0 0.4 0 0.8q0 0.9 0.1 1.8q0 0.9 0 1.8q0 0.8 0 1.4zm26.8 0.3q-2.1 0-3.6-0.9q-1.5-0.9-2.4-2.5q-0.8-1.7-0.8-3.9q0-2.2 0.8-3.8q0.8-1.7 2.3-2.6q1.5-1 3.5-1q1.2 0 2.3 0.4q1.1 0.4 2 1.3q0.9 0.8 1.5 2.2q0.5 1.3 0.5 3.3l0 1l-10.1 0q0.1 1.2 0.5 2.1q0.5 1.1 1.4 1.6q0.9 0.5 2.1 0.5q0.8 0 1.4-0.2q0.7-0.3 1.1-0.7q0.5-0.5 0.7-1.1l2.7 0.6q-0.4 1.1-1.2 1.9q-0.8 0.9-2 1.3q-1.2 0.5-2.7 0.5zm-4-8.6l7.3 0q-0.1-0.9-0.4-1.7q-0.4-0.9-1.1-1.5q-0.8-0.6-2-0.6q-1.2 0-2.1 0.6q-0.8 0.6-1.2 1.5q-0.4 0.8-0.5 1.7zm16 8.3l-2.8 0l0-14.2l2.6 0l0.1 2.6q0.3-0.7 0.7-1.3q0.7-0.8 1.5-1.2q0.9-0.3 1.8-0.3q1.5 0 2.5 0.9q0.8 0.8 1.1 2q0.3-0.7 0.8-1.3q0.7-0.8 1.7-1.2q0.9-0.4 2-0.4q1.3 0 2.3 0.5q1 0.6 1.6 1.6q0.6 1.1 0.6 2.7l0 9.6l-2.8 0l0-9.3q0-1.4-0.8-2q-0.8-0.7-1.8-0.7q-0.9 0-1.6 0.4q-0.6 0.4-0.9 1q-0.4 0.7-0.4 1.5l0 9.1l-2.7 0l0-9.5q0-1.1-0.8-1.8q-0.7-0.7-1.8-0.7q-0.8 0-1.5 0.4q-0.6 0.3-1 1q-0.4 0.7-0.4 1.8zm27.3 0.3q-1.3 0-2.1-0.5q-0.8-0.4-1.3-1q-0.4-0.6-0.7-1l-0.2 0l0 2.2l-2.7 0l0-18.9l2.8 0l0 7l0.1 0q0.3-0.4 0.7-1q0.5-0.6 1.3-1q0.8-0.5 2.1-0.5q1.7 0 3.1 0.9q1.3 0.9 2.1 2.5q0.8 1.6 0.8 3.9q0 2.3-0.8 4q-0.8 1.6-2.1 2.5q-1.3 0.9-3.1 0.9zm-0.6-2.4q1.2 0 2-0.7q0.9-0.6 1.3-1.7q0.4-1.2 0.4-2.6q0-1.4-0.4-2.5q-0.4-1.1-1.2-1.7q-0.9-0.7-2.1-0.7q-1.2 0-2 0.6q-0.8 0.6-1.3 1.7q-0.4 1.1-0.4 2.6q0 1.5 0.5 2.6q0.4 1.1 1.2 1.8q0.8 0.6 2 0.6zm15.8 2.4q-2.1 0-3.6-0.9q-1.5-0.9-2.4-2.5q-0.8-1.7-0.8-3.9q0-2.2 0.8-3.8q0.8-1.7 2.3-2.6q1.5-1 3.5-1q1.2 0 2.3 0.4q1.1 0.4 2 1.3q0.9 0.8 1.5 2.2q0.5 1.3 0.5 3.3l0 1l-10.1 0q0.1 1.2 0.5 2.1q0.5 1.1 1.4 1.6q0.9 0.5 2.1 0.5q0.8 0 1.4-0.2q0.7-0.3 1.1-0.7q0.5-0.5 0.7-1.1l2.7 0.6q-0.4 1.1-1.2 1.9q-0.8 0.9-2 1.3q-1.2 0.5-2.7 0.5zm-4-8.6l7.3 0q-0.1-0.9-0.4-1.7q-0.4-0.9-1.1-1.5q-0.8-0.6-2-0.6q-1.2 0-2.1 0.6q-0.8 0.6-1.2 1.5q-0.4 0.8-0.5 1.7zm15.9 8.3l-2.8 0l0-14.2l2.7 0l0 2.3l0.1 0q0.4-1.2 1.4-1.8q1-0.7 2.2-0.7q0.3 0 0.6 0q0.4 0 0.6 0.1l0 2.6q-0.1 0-0.6-0.1q-0.4 0-0.9 0q-0.9 0-1.7 0.4q-0.8 0.4-1.2 1.1q-0.4 0.7-0.4 1.7z"/></g><g class="cur-move"><g class="cur-press"><g data-icon="Cursor01" transform="translate(-15.19,-4) scale(2)" fill="var(--illos-if-cursor,var(--_if-cursor))"><path d="M5.10772 14.3857L5.58594 7.91256C5.61875 7.46854 5.64642 7.05187 5.67232 6.66186C5.85017 3.98379 5.94481 2.55876 7.04807 2.10979C8.15132 1.66082 9.2022 2.61969 11.1771 4.42168C11.4647 4.68413 11.772 4.96446 12.1018 5.26093L16.9102 9.58273C18.2626 10.7983 18.9389 11.4062 18.9934 11.9885C19.0309 12.3882 18.9067 12.7862 18.6489 13.0924C18.2733 13.5385 17.3734 13.6473 15.5737 13.8647C14.8156 13.9563 14.4365 14.0021 14.2073 14.2038C14.0479 14.344 13.9376 14.5321 13.8925 14.7404C13.8277 15.0399 13.9707 15.3964 14.2567 16.1095L15.7394 19.8058C15.9107 20.2328 15.9963 20.4464 15.995 20.6429C15.9932 20.9078 15.8865 21.1609 15.6986 21.3462C15.5591 21.4837 15.3471 21.57 14.9232 21.7425C14.4993 21.915 14.2873 22.0013 14.0921 22C13.8292 21.9982 13.5778 21.8907 13.3939 21.7015C13.2574 21.561 13.1717 21.3475 13.0004 20.9204L11.5177 17.2241C11.2317 16.5111 11.0887 16.1545 10.8355 15.9844C10.6595 15.8662 10.4503 15.8081 10.239 15.8187C9.935 15.834 9.63074 16.0663 9.02224 16.5308C7.57763 17.6337 6.85532 18.1851 6.27746 18.1269C5.88085 18.0871 5.51701 17.8877 5.26831 17.574C4.90595 17.1169 4.9732 16.2065 5.10772 14.3857Z" stroke="var(--illos-if-cursor-edge,var(--_if-cursor-edge))" stroke-linejoin="round" stroke-width="1"/></g></g></g>
</svg>`;
