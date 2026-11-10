"use client";

import EZPZTypeTunnel from "@/components/ezpz-type-tunnel";
import { Mark } from "@/components/Marks";
import type { Counts, ShelfId } from "@/lib/shelves";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

const NAV: { id: string; href: string; label: string; icon: string; shelf?: ShelfId }[] = [
  { id: "components", href: "/", label: "Components", icon: "grid", shelf: "components" },
  { id: "themes", href: "/themes", label: "Themes", icon: "swatch", shelf: "themes" },
  { id: "templates", href: "/templates", label: "Templates", icon: "layout", shelf: "templates" },
  { id: "apps", href: "/apps", label: "Apps", icon: "box", shelf: "apps" },
  { id: "icons", href: "/icons", label: "Icons", icon: "icons", shelf: "icons" },
  { id: "video", href: "/video", label: "Video", icon: "play", shelf: "video" },
  { id: "saved", href: "/?saved=1", label: "Bookmarks", icon: "bookmark" },
];

export function LibraryShell({
  shelf,
  search,
  filters,
  children,
}: {
  shelf: ShelfId;
  counts?: Counts["shelves"];
  search?: ReactNode;
  filters?: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const params = useSearchParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname, params]);

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{".library-aside{width:300px}@media(min-width:768px){.library-main{padding-left:300px}}"}</style>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-30 flex items-center justify-between gap-2 border-b border-white/[0.06] bg-black px-3 py-2 md:hidden">
        <Link href="/" aria-label="EZPZ Components" className="block min-w-0 flex-1 overflow-hidden rounded-md outline-none focus-visible:outline-2 focus-visible:outline-white">
          <BrandLockup aspect={2.6} />
        </Link>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex size-8 items-center justify-center rounded-md text-white"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <MenuIcon open={open} />
        </button>
      </header>

      {open ? (
        <button type="button" aria-label="Close menu" className="fixed inset-0 z-40 bg-black/70 md:hidden" onClick={() => setOpen(false)} />
      ) : null}

      <aside
        className={`library-aside fixed top-0 bottom-0 left-0 z-50 flex flex-col border-r border-white/[0.06] bg-black px-2 py-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <Link href="/" aria-label="EZPZ Components" className="block overflow-hidden rounded-md px-1 py-1 outline-none focus-visible:outline-2 focus-visible:outline-white">
          <BrandLockup />
        </Link>
        <div className="px-1 pt-3">{search}</div>
        <nav aria-label="Library" className="mt-3 flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto pb-4 [scrollbar-width:thin]">
          {NAV.map((item) => {
            const active = item.id === "saved" ? params.get("saved") === "1" : item.id === "components" ? pathname === "/" && params.get("saved") !== "1" : item.shelf === shelf && pathname !== "/";
            const explore = item.id === "components";
            return (
              <div key={item.id}>
                {explore ? <p className="px-2 pt-4 pb-1 text-[11px] text-white/35">Explore</p> : null}
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex h-8 items-center gap-2 rounded-md px-2 text-[13px] outline-none focus-visible:outline-2 focus-visible:outline-white ${
                    active ? "bg-white/[0.08] text-white" : "text-white/55 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <Mark name={item.icon} className="size-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
                {active && filters ? (
                  <div
                    className="mt-1 mb-2 ml-4 border-l border-white/10 pl-1"
                    onClick={(event) => {
                      if ((event.target as HTMLElement).closest("button")) setOpen(false);
                    }}
                  >
                    {filters}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
      </aside>

      <div className="library-main">
        <main id="content" className="px-5 pt-5 pb-16 md:px-7 md:pt-6">
          {children}
        </main>
      </div>
    </div>
  );
}

function BrandLockup({ aspect = 2.2 }: { aspect?: number }) {
  return (
    <EZPZTypeTunnel
      text="EZPZ Components"
      rows={3}
      opening={0.28}
      depth={1}
      aspect={aspect}
      background="#2520d8"
      ink="#fff4cd"
      fontFamily='"Archivo Black", "Arial Black", "Helvetica Neue", Arial, sans-serif'
      resolution={1600}
      label="EZPZ Components"
      className="w-full rounded-md"
    />
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path d="M5 7h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={open ? "translate-y-[5px] rotate-45" : ""} />
      <path d="M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={open ? "opacity-0" : ""} />
      <path d="M5 17h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={open ? "-translate-y-[5px] -rotate-45" : ""} />
    </svg>
  );
}

export function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
