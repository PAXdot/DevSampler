// This is file of your component
// You can use any dependencies from npm; we import them automatically in package.json

import { useEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";

/* ==========================================================================
   Types
   ========================================================================== */

interface DockItem {
  id: string;
  label: string;
  icon: ReactNode;
  gradient: string; // Tailwind gradient classes for the icon tile
}

interface MacFloatingDockProps {
  items?: DockItem[];
  defaultActive?: string;
  onSelect?: (id: string) => void;
}

// end of types


/* ==========================================================================
   Magnification settings
   ========================================================================== */

const BASE = 52; // icon size at rest, in px
const GAP = 12; // space between icons, in px
const PAD = 14; // padding between the icons and the glass edge, in px
const MAX_SCALE = 1.85; // how big the icon under the cursor gets
const SPREAD = 62; // how far the effect reaches, in px (bigger = more neighbors grow)

// end of magnification settings


/* ==========================================================================
   Inline SVG icons (no icon library needed)
   ========================================================================== */

// Shared wrapper so every icon has the same size and stroke
function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const HomeIcon = (
  <Svg>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M9 22V12h6v10" />
  </Svg>
);

const SearchIcon = (
  <Svg>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Svg>
);

const MailIcon = (
  <Svg>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Svg>
);

const ProfileIcon = (
  <Svg>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </Svg>
);

const SettingsIcon = (
  <Svg>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </Svg>
);

// end of icons


/* ==========================================================================
   Default items
   ========================================================================== */

const DEFAULT_ITEMS: DockItem[] = [
  { id: "home", label: "Home", icon: HomeIcon, gradient: "from-sky-400 to-blue-600" },
  { id: "search", label: "Search", icon: SearchIcon, gradient: "from-violet-400 to-indigo-600" },
  { id: "mail", label: "Mail", icon: MailIcon, gradient: "from-rose-400 to-pink-600" },
  { id: "profile", label: "Profile", icon: ProfileIcon, gradient: "from-amber-300 to-orange-500" },
  { id: "settings", label: "Settings", icon: SettingsIcon, gradient: "from-slate-400 to-slate-600" },
];

// end of default items


/* ==========================================================================
   Main component
   ========================================================================== */

export default function MacFloatingDock({
  items = DEFAULT_ITEMS,
  defaultActive = "home",
  onSelect,
}: MacFloatingDockProps) {
  // ---- State ----
  const [mouseX, setMouseX] = useState<number | null>(null); // cursor x, measured inside the icon row
  const [active, setActive] = useState(defaultActive);
  const [bouncing, setBouncing] = useState<string | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  // end of state

  // ---- Refs ----
  const rowRef = useRef<HTMLUListElement>(null);
  // end of refs

  // ---- Respect the reduced-motion setting ----
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);

    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  // end of reduced-motion check

  // ---- The fisheye math ----
  // Each icon has a fixed "slot" in the resting layout. We measure the cursor
  // against those slot centers, so the numbers stay stable while icons grow.
  const pitch = BASE + GAP;
  const rowWidth = items.length * BASE + (items.length - 1) * GAP;
  const centers = items.map((_, i) => i * pitch + BASE / 2);

  // Scale follows a bell curve: biggest at the cursor, fading out with distance
  const scales = items.map((_, i) => {
    if (mouseX === null || reduceMotion) return 1;
    const distance = mouseX - centers[i];
    return 1 + (MAX_SCALE - 1) * Math.exp(-(distance * distance) / (2 * SPREAD * SPREAD));
  });

  // Growing icons need room, so we push neighbors apart. extra[i] is how much
  // wider icon i has become, and the shift keeps the whole dock centered.
  const extra = scales.map((s) => (s - 1) * BASE);
  const totalExtra = extra.reduce((sum, e) => sum + e, 0);
  const shifts = extra.map((_, i) => {
    const before = extra.slice(0, i).reduce((sum, e) => sum + e, 0);
    return before + extra[i] / 2 - totalExtra / 2;
  });

  // The icon closest to the cursor gets its name tooltip
  const nearest = scales.reduce((best, s, i) => (s > scales[best] ? i : best), 0);
  const showLabel = mouseX !== null && scales[nearest] > 1.3;
  // end of fisheye math

  // ---- Handlers ----
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const row = rowRef.current;
    if (!row) return;
    setMouseX(e.clientX - row.getBoundingClientRect().left);
  };

  const handleMouseLeave = () => setMouseX(null);

  const handleSelect = (id: string) => {
    setActive(id);
    setBouncing(id);
    onSelect?.(id);
  };
  // end of handlers

  return (
    <>
      {/* Component-scoped CSS so no tailwind.config changes are needed */}
      <style>{`
        /* Icon hop when clicked */
        @keyframes dock-bounce {
          0%, 100% { transform: translateY(0); }
          30% { transform: translateY(-22px); }
          55% { transform: translateY(0); }
          75% { transform: translateY(-9px); }
        }
        .dock-bounce { animation: dock-bounce 0.7s cubic-bezier(0.3, 0, 0.3, 1); }

        /* Reduced motion: no hop, no sliding transitions */
        @media (prefers-reduced-motion: reduce) {
          .dock-bounce { animation: none; }
        }
      `}</style>

      {/* Floats above everything at the bottom center. Only the dock itself catches the mouse. */}
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center">
        {/* Hit zone: padded so the effect starts a little before the cursor reaches the dock */}
        <div
          className="pointer-events-auto px-10 pb-1 pt-20"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <nav aria-label="Dock" className="relative">
            {/* Glass panel. It widens as icons grow, so it always hugs them. */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 -translate-x-1/2 rounded-[26px] border border-white/15 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-2xl backdrop-saturate-150 transition-[width] duration-200 ease-out"
              style={{
                width: rowWidth + PAD * 2 + totalExtra,
                top: -PAD,
                bottom: -PAD,
              }}
            >
              {/* Soft sheen along the top edge of the glass */}
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            </div>

            {/* Icon row. Its size never changes, which keeps the cursor math stable. */}
            <ul
              ref={rowRef}
              className="relative flex"
              style={{ width: rowWidth, height: BASE, gap: GAP }}
            >
              {items.map((item, i) => {
                const scale = scales[i];
                const isActive = active === item.id;

                return (
                  <li key={item.id} className="relative" style={{ width: BASE, height: BASE }}>
                    {/* Slides sideways to make room for neighbors that are growing */}
                    <div
                      className="absolute inset-0 transition-transform duration-200 ease-out"
                      style={{ transform: `translateX(${shifts[i]}px)` }}
                    >
                      {/* Name tooltip above the icon the cursor is closest to */}
                      <span
                        aria-hidden="true"
                        className={[
                          "pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/15 bg-black/60 px-2.5 py-1 text-xs font-medium text-white shadow-lg backdrop-blur-md transition-opacity duration-200",
                          showLabel && nearest === i ? "opacity-100" : "opacity-0",
                        ].join(" ")}
                        style={{ bottom: BASE * scale + 10 }}
                      >
                        {item.label}
                      </span>

                      {/* The icon itself, scaled up from its bottom edge */}
                      <button
                        type="button"
                        aria-label={item.label}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => handleSelect(item.id)}
                        onFocus={() => setMouseX(centers[i])}
                        onBlur={() => setMouseX(null)}
                        className="absolute inset-0 origin-bottom rounded-[14px] outline-none transition-transform duration-200 ease-out focus-visible:ring-2 focus-visible:ring-white/80"
                        style={{ transform: `scale(${scale})` }}
                      >
                        <span
                          className={[
                            "relative flex h-full w-full items-center justify-center rounded-[14px] bg-gradient-to-br text-white shadow-lg shadow-black/30 ring-1 ring-inset ring-white/25",
                            item.gradient,
                            bouncing === item.id ? "dock-bounce" : "",
                          ].join(" ")}
                          onAnimationEnd={() => setBouncing(null)}
                        >
                          {item.icon}
                          {/* Glossy highlight on the top half of the tile */}
                          <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-[14px] bg-gradient-to-b from-white/30 to-transparent" />
                        </span>
                      </button>

                      {/* Dot under the app that is currently selected */}
                      <span
                        aria-hidden="true"
                        className={[
                          "absolute left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white/80 transition-opacity duration-300",
                          isActive ? "opacity-100" : "opacity-0",
                        ].join(" ")}
                        style={{ bottom: -PAD + 4 }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

// end of main component
