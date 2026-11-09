"use client";

import { SHELVES, formatCount, type Counts, type ShelfId } from "@/lib/shelves";
import Link from "next/link";
import type { ReactNode } from "react";

export function LibraryShell({
  shelf,
  eyebrow,
  title,
  lede,
  counts,
  search,
  filters,
  children,
}: {
  shelf: ShelfId;
  eyebrow: string;
  title: string;
  lede: string;
  counts?: Counts["shelves"];
  search?: ReactNode;
  filters?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex h-14 w-full max-w-[1152px] items-center px-6 max-md:px-4">
          <Link
            href="/"
            className="mr-5 flex shrink-0 items-center gap-2 rounded-md text-[15px] font-bold tracking-[-0.04em] outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <LogoMark />
            ANDA
          </Link>
          <span className="rounded-md bg-foreground/[0.06] px-1.5 py-0.5 text-[11px] font-medium text-muted">
            Local library
          </span>
          <button
            type="button"
            onClick={focusSearch}
            className="ml-auto inline-flex h-9 items-center gap-2 rounded-[10px] px-2.5 text-[14px] text-muted transition-colors hover:bg-foreground/[0.06] hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary"
          >
            <SearchIcon className="size-4" />
            <span className="hidden md:inline">Search</span>
            <kbd className="hidden h-5 items-center rounded-[5px] bg-foreground/[0.08] px-1.5 font-sans text-[11px] font-medium text-muted md:inline-flex">
              ⌘K
            </kbd>
          </button>
        </div>
      </header>
      <main className="mx-auto w-full max-w-[1152px] px-6 pt-16 pb-24 max-md:px-4 max-md:pt-10">
        <p className="mb-3 text-[13px] text-muted">{eyebrow}</p>
        <h1 className="text-[clamp(36px,4.2vw,58px)] leading-[1.02] font-bold tracking-[-0.045em] text-balance">
          {title}
        </h1>
        <p className="mt-4 max-w-[54ch] text-[17px] leading-[1.5] font-normal text-muted text-pretty">{lede}</p>
        <div className="mt-[52px] flex flex-wrap items-center gap-2 max-md:mt-8">
          <nav
            aria-label="Shelves"
            className="chip-row flex max-w-full items-center gap-0.5 overflow-x-auto rounded-xl bg-foreground/[0.06] p-[3px]"
          >
            {SHELVES.map((item) => {
              const active = item.id === shelf;
              const count = formatCount(counts?.[item.id]);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex h-8 shrink-0 items-center gap-1.5 rounded-[9px] px-3.5 text-[13px] font-medium transition-[background-color,color,scale] outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-[0.97] ${
                    active
                      ? "bg-foreground text-background"
                      : "text-muted hover:bg-foreground/[0.06] hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {count ? (
                    <span className={`tabular-nums ${active ? "text-background/60" : "text-muted/70"}`}>{count}</span>
                  ) : null}
                </Link>
              );
            })}
          </nav>
          {search}
        </div>
        {filters}
        <div className="mt-6">{children}</div>
      </main>
    </div>
  );
}

function focusSearch() {
  const input = document.getElementById("catalog-search");
  if (!input) return;
  input.scrollIntoView({ block: "center", behavior: "smooth" });
  input.focus({ preventScroll: true });
}

function LogoMark() {
  return (
    <svg viewBox="0 0 20 20" className="size-[18px]" aria-hidden="true">
      <rect width="20" height="20" rx="6" fill="currentColor" />
      <path d="M5.5 14.5 10 5l4.5 9.5M7.2 11h5.6" fill="none" stroke="var(--background)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
