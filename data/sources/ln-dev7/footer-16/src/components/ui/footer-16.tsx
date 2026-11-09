const navLinks = [
  { label: "Blocks", href: "#blocks" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "Changelog", href: "#changelog" },
  { label: "License", href: "#license" },
];

const socials = [
  {
    label: "X",
    href: "#x",
    path: "M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.5L4.7 21H1.5l7.5-8.5L1.1 3h6.5l4.5 6 5.4-6Zm-1.1 16h1.8L7.6 4.9H5.7L16.4 19Z",
  },
  {
    label: "BlueSky",
    href: "#bluesky",
    path: "M12 7c-1.6-2-4-4.4-7-4.4C3 2.6 2 4.2 2 6c0 2 1 6 7 6-6 0-7 4-7 6 0 1.8 1 3.4 3 3.4 3 0 5.4-2.4 7-4.4 1.6 2 4 4.4 7 4.4 2 0 3-1.6 3-3.4 0-2-1-6-7-6 6 0 7-4 7-6 0-1.8-1-3.4-3-3.4-3 0-5.4 2.4-7 4.4Z",
  },
  {
    label: "LinkedIn",
    href: "#linkedin",
    path: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8h4.56v15H.22V8Zm7.66 0h4.37v2.05h.06c.61-1.16 2.1-2.38 4.33-2.38 4.62 0 5.47 3.04 5.47 7v8.33h-4.56v-7.39c0-1.76-.03-4.03-2.46-4.03-2.46 0-2.84 1.92-2.84 3.9V23H7.88V8Z",
  },
];

export default function Footer16() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <div className="flex flex-col items-center gap-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-semibold tracking-tight"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwMCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgdmlld0JveD0iMCAwIDE1MDAgMTQ5OS45OTk5MzMiIGhlaWdodD0iMjAwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmVyc2lvbj0iMS4wIj48ZGVmcz48Y2xpcFBhdGggaWQ9IjJiNTYyM2E4MDIiPjxwYXRoIGQ9Ik0gMCAxNTAwIEMgMCAxMTA0Ljk1NzAzMSAxNjAuMDAzOTA2IDcxOC42NzU3ODEgNDM5LjMzOTg0NCA0MzkuMzM5ODQ0IEMgNzE4LjY3NTc4MSAxNjAuMDAzOTA2IDExMDQuOTU3MDMxIDAgMTUwMCAwIEwgMTUwMCAxNTAwIFogTSAwIDE1MDAgIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iYjI1NjYzNjQwMiI+PHBhdGggZD0iTSAwIDAgTCAxNTAwIDAgTCAxNTAwIDE1MDAgTCAwIDE1MDAgWiBNIDAgMCAiIGNsaXAtcnVsZT0ibm9uemVybyIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJiNjY1OWMzNjkxIj48cGF0aCBkPSJNIDAgMTUwMCBDIDAgMTEwNC45NTcwMzEgMTYwLjAwMzkwNiA3MTguNjc1NzgxIDQzOS4zMzk4NDQgNDM5LjMzOTg0NCBDIDcxOC42NzU3ODEgMTYwLjAwMzkwNiAxMTA0Ljk1NzAzMSAwIDE1MDAgMCBMIDE1MDAgMTUwMCBaIE0gMCAxNTAwICIgY2xpcC1ydWxlPSJub256ZXJvIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImRjMzNmYjgyMjQiPjxyZWN0IHg9IjAiIHdpZHRoPSIxNTAwIiB5PSIwIiBoZWlnaHQ9IjE1MDAiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGlwLXBhdGg9InVybCgjMmI1NjIzYTgwMikiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDAsIDAuMDAwMDAwMDAwMDAwMTEyODYxKSI+PGcgY2xpcC1wYXRoPSJ1cmwoI2RjMzNmYjgyMjQpIj48ZyBjbGlwLXBhdGg9InVybCgjYjI1NjYzNjQwMikiPjxnIGNsaXAtcGF0aD0idXJsKCNiNjY1OWMzNjkxKSI+PHJlY3QgeD0iLTMzMCIgd2lkdGg9IjIxNjAiIGZpbGw9IiMwMDAwMDAiIGhlaWdodD0iMjE1OS45OTk5MDQiIHk9Ii0zMjkuOTk5OTg1IiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=="
              alt="blockus"
              className="size-6 dark:invert"
            />
            <span className="text-base">blockus</span>
          </a>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid size-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" className="size-4 fill-current">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>

          <div className="h-px w-full bg-border" />

          <p className="text-center text-xs text-muted-foreground">
            &copy; {year} blockus. Made for builders who care about details.
          </p>
        </div>
      </div>
    </footer>
  );
}
