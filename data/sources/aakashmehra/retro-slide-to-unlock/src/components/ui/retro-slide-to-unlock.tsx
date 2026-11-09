"use client";

/**
 * Slide to Unlock. Designed & built by Aakash Mehra.
 * A faithful early-2010s lock screen: live clock, glossy bars, shimmering
 * "slide to unlock" track and a camera grabber you can peek with.
 * With `device="classic"` (the default) it sits inside an classic phone
 * frame from 640px up: Home (double press for music controls) and
 * Sleep/Wake work. Below 640px it fills its container.
 *
 * @example
 * <SlideToUnlock className="h-dvh w-full" onUnlock={() => router.push("/home")} />
 */

import { Lock, Wifi } from "lucide-react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type PanInfo,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Calm open water: horizontal wavelets with perspective (denser toward the top). */
function paintWater(c: HTMLCanvasElement) {
  const s = Math.min(window.devicePixelRatio || 1, 2);
  const W = (c.width = Math.round(c.clientWidth * s));
  const H = (c.height = Math.round(c.clientHeight * s));
  const ctx = c.getContext("2d");
  if (!ctx || !W || !H) return;
  const img = ctx.createImageData(W, H), d = img.data;
  const Hc = H / s, K = 0.95 * Hc;
  const stops = [[0, 99, 129, 156], [0.45, 74, 109, 140], [1, 44, 75, 101]];
  const hi = [150, 178, 199];
  const sm = (a: number, b: number, t: number) => { t = Math.min(1, Math.max(0, (t - a) / (b - a))); return t * t * (3 - 2 * t); };
  for (let y = 0; y < H; y++) {
    const v = y / H, z = K / (v + 0.6), sc = 1 / (v + 0.6);
    const j = v < 0.45 ? 0 : 1, a = stops[j], b = stops[j + 1], t = (v - a[0]) / (b[0] - a[0]);
    const base = [1, 2, 3].map((i) => a[i] + (b[i] - a[i]) * t);
    const fine = sm(0, 0.35, v); // fade the fine harmonic where it would alias
    for (let x = 0; x < W; x++) {
      const wx = (x / s - Hc * 0.3) * sc * 0.09;
      const wz = z * 0.12;
      const warp = 1.6 * Math.sin(wx * 0.55 + Math.sin(wz * 0.31) * 2.2) + 1.1 * Math.sin(wx * 0.23 - wz * 0.17 + 1.3);
      let h = 0.62 * Math.sin(z + warp * 2.4 + wx * 0.15)
            + 0.28 * fine * Math.sin(z * 1.9 + warp * 3.1 - wx * 0.6)
            + 0.22 * Math.sin(z * 0.47 + wx * 0.9 + warp);
      // break long crests into wavelets
      h *= 0.5 + 0.5 * Math.sin(wx * 2.1 + z * 0.23 + warp * 1.7) * Math.sin(wx * 0.8 - z * 0.11);
      h += 0.45 * Math.sin(z * 0.9 + warp * 2) * (0.5 + 0.5 * Math.sin(wx * 1.3 - z * 0.07));
      const crest = sm(0.45, 0.9, h) * 0.8, trough = sm(-0.2, -0.95, h) * 0.22, shade = 1 + h * 0.07;
      const i = (y * W + x) * 4;
      for (let k = 0; k < 3; k++) d[i + k] = (base[k] * shade * (1 - trough)) * (1 - crest) + hi[k] * crest;
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
}

const PAD = 3; // gap between track wall and knob

// early-2010s grey glass bar: lighter glossy top half, sharp midline, darker lower half.
const BAR_BG =
  "linear-gradient(to bottom, rgba(93,96,100,0.93) 0%, rgba(74,77,81,0.93) 50%, rgba(47,50,53,0.93) 50%, rgba(38,40,43,0.93) 100%)";

const css = `
@keyframes stu-shimmer { from { background-position: 100% 0 } to { background-position: 0% 0 } }
.stu-shimmer {
  background: linear-gradient(90deg, #6f6f6f 0%, #6f6f6f 42%, #fff 50%, #6f6f6f 58%, #6f6f6f 100%);
  background-size: 300% 100%;
  -webkit-background-clip: text; background-clip: text;
  color: transparent; -webkit-text-fill-color: transparent;
  animation: stu-shimmer 2.6s linear infinite;
}
@media (prefers-reduced-motion: reduce) { .stu-shimmer { animation: none; background-position: 0 0 } }
.stu-vol { -webkit-appearance: none; appearance: none; height: 5px; border-radius: 3px; outline: none;
  background: linear-gradient(to right, #3f7fd8, #6aa6f0 var(--v), #e4e4e4 var(--v));
  box-shadow: inset 0 1px 1px rgba(0,0,0,.6), 0 1px 0 rgba(255,255,255,.12); }
.stu-vol::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%;
  background: linear-gradient(#fff, #d6d6d6); box-shadow: 0 1px 3px rgba(0,0,0,.7); }
.stu-vol::-moz-range-thumb { width: 20px; height: 20px; border: 0; border-radius: 50%;
  background: linear-gradient(#fff, #d6d6d6); box-shadow: 0 1px 3px rgba(0,0,0,.7); }
.stu-vol:focus-visible::-webkit-slider-thumb { box-shadow: 0 0 0 2px rgba(125,211,252,.8); }
/* classic phone front (>=640px): screen 320x480 at ~6.56px/mm -> body 58.6x115.2mm */
@media (min-width: 640px) {
  .stu-body {
    position: relative; width: 384px; height: 756px; padding: 6px; border-radius: 60px;
    background: linear-gradient(135deg, #f6f6f6 0%, #a3a3a3 16%, #ececec 34%, #8a8a8a 52%, #d9d9d9 72%, #979797 100%);
    box-shadow: 0 0 0 1px rgba(0,0,0,.7), inset 0 0 0 1px rgba(255,255,255,.5), 0 30px 70px -12px rgba(0,0,0,.9), 0 0 50px rgba(0,0,0,.45);
  }
  .stu-glass {
    position: relative; height: 100%; border-radius: 54px;
    display: flex; align-items: center; justify-content: center;
    background: linear-gradient(160deg, #222326 0%, #0c0c0d 38%, #050505 100%);
    box-shadow: inset 0 0 0 1px #000, inset 0 0 0 2px rgba(255,255,255,.07);
  }
  .stu-glare {
    position: absolute; inset: 6px; border-radius: 54px; pointer-events: none; z-index: 20;
    background: linear-gradient(125deg, rgba(255,255,255,.14) 0%, rgba(255,255,255,.04) 36%, transparent 36.3%);
  }
  .stu-steel { background: linear-gradient(to right, #8d8d8d, #ededed 40%, #b5b5b5 70%, #7c7c7c); box-shadow: 0 0 0 .5px rgba(0,0,0,.6); }
  .stu-steel-v { background: linear-gradient(to bottom, #8d8d8d, #ededed 40%, #b5b5b5 70%, #7c7c7c); box-shadow: 0 0 0 .5px rgba(0,0,0,.6); }
}
`;

function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    const tick = () => {
      const d = new Date();
      setNow(d);
      id = setTimeout(tick, 60_000 - (d.getSeconds() * 1000 + d.getMilliseconds()));
    };
    tick();
    return () => clearTimeout(id);
  }, []);
  return now;
}

const fmtTime = (d: Date, hour12: boolean) =>
  `${hour12 ? d.getHours() % 12 || 12 : String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
const fmtDate = (d: Date) =>
  `${d.toLocaleDateString(undefined, { weekday: "long" })}, ${d.getDate()} ${d.toLocaleDateString(undefined, { month: "long" })}`;

export interface SlideToUnlockTrack {
  title: string;
  artist?: string;
}

export interface SlideToUnlockProps {
  /** Text inside the slider track. @default "slide to unlock" */
  label?: string;
  /** Carrier text on the left of the status bar. @default "SOS only" */
  carrier?: string;
  /** Now-playing track for the lock-screen music controls (double press Home). */
  track?: SlideToUnlockTrack;
  /**
   * `"classic"` draws the phone (bezels, Home, Sleep/Wake) from 640px up;
   * `"none"` renders only the screen, sized by `className`.
   * @default "classic"
   */
  device?: "classic" | "none";
  /** Wallpaper image URL. Omit for the built-in procedural water. */
  wallpaper?: string;
  /** 12-hour clock without am/pm (as early-2010s did); `false` for 24-hour. @default true */
  hour12?: boolean;
  /** Called when the knob reaches the end of the track. */
  onUnlock?: () => void;
  /** Called when the screen locks again (Lock button or Sleep/Wake). */
  onLock?: () => void;
  /** Size and placement of the root (e.g. `"h-dvh w-full"`). */
  className?: string;
}

const DEFAULT_TRACK: SlideToUnlockTrack = { title: "Slide to Unlock", artist: "Aakash Mehra" };

export function SlideToUnlock({
  label = "slide to unlock",
  carrier = "SOS only",
  track = DEFAULT_TRACK,
  device = "classic",
  wallpaper,
  hour12 = true,
  onUnlock,
  onLock,
  className,
}: SlideToUnlockProps) {
  const framed = device === "classic";
  const now = useNow();
  const reduce = useReducedMotion();
  const [unlocked, setUnlocked] = useState(false);
  // Bumped on re-lock to remount the knob: motion's drag kept stale state
  // after the unlock animation, so a second slide wouldn't start.
  const [round, setRound] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const knobRef = useRef<HTMLButtonElement>(null);
  const waterRef = useRef<HTMLCanvasElement>(null);

  // Painted once at mount size; a resize stretches it slightly.
  useEffect(() => {
    if (!wallpaper && waterRef.current) paintWater(waterRef.current);
  }, [wallpaper]);
  const x = useMotionValue(0);
  const lift = useMotionValue(0);
  const bounce = useMotionValue(1);
  const [asleep, setAsleep] = useState(false);
  const [music, setMusic] = useState(false);
  const [musicPoke, setMusicPoke] = useState(0); // any touch in the panel resets its idle timer
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [hint, setHint] = useState(0); // remounts the shimmer so it restarts
  const homeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(homeTimer.current), []);
  useEffect(() => {
    if (!music) return;
    const t = setTimeout(() => setMusic(false), 6000);
    return () => clearTimeout(t);
  }, [music, musicPoke]);
  const textOpacity = useTransform(x, [0, 110], [1, 0]);

  const slide = reduce
    ? { duration: 0 }
    : { type: "tween" as const, duration: 0.38, ease: [0.4, 0, 0.2, 1] as const };
  const spring = reduce
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 420, damping: 32 };

  const maxX = () =>
    (trackRef.current?.clientWidth ?? 0) - (knobRef.current?.offsetWidth ?? 0);

  const unlock = () => {
    animate(x, maxX(), { ...slide, duration: reduce ? 0 : 0.15 });
    setUnlocked(true);
    onUnlock?.();
  };

  const lockAgain = () => {
    setUnlocked(false);
    x.set(0);
    setRound((r) => r + 1);
    onLock?.();
  };

  const homeSingle = () => {
    if (unlocked) {
      // springboard bounce: we're already "home"
      if (!reduce) animate(bounce, [1, 0.97, 1], { duration: 0.36, ease: "easeInOut" });
    } else if (music) {
      setMusic(false);
    } else {
      setHint((h) => h + 1);
      if (!reduce) animate(x, [0, 18, 0], { duration: 0.5, ease: "easeOut" });
    }
  };

  // early-2010s waits out the double-press window before acting on a single press.
  const pressHome = () => {
    if (asleep) return setAsleep(false);
    if (homeTimer.current) {
      clearTimeout(homeTimer.current);
      homeTimer.current = undefined;
      if (unlocked) homeSingle();
      else setMusic((m) => !m);
      return;
    }
    homeTimer.current = setTimeout(() => {
      homeTimer.current = undefined;
      homeSingle();
    }, 350);
  };

  const pressSleep = () => {
    if (asleep) return setAsleep(false);
    setAsleep(true);
    setMusic(false);
    if (unlocked) lockAgain(); // wakes up locked, like the classic phones
  };

  const onKnobDragEnd = () => {
    if (x.get() >= maxX() - 6) unlock();
    else animate(x, 0, spring);
  };

  const onGrabberPan = (_: PointerEvent, info: PanInfo) =>
    lift.set(Math.max(-180, Math.min(0, info.offset.y)));

  return (
    <div className={cn(framed ? "stu-body" : "relative", "font-sans text-white select-none", className)}>
      <style>{css}</style>
      <p role="status" className="sr-only">
        {asleep ? "Screen off" : unlocked ? "Unlocked" : round > 0 ? "Locked" : ""}
      </p>
      {framed && <DeviceSides onSleep={pressSleep} />}
      <div className={cn(framed && "stu-glass", "h-full w-full")}>
        {framed && <Bezels />}
        {framed && <HomeButton onPress={pressHome} />}
        <div
          className={cn(
            "relative isolate h-full w-full overflow-clip bg-black",
            framed && "sm:h-[480px] sm:w-[320px] sm:shadow-[0_0_0_1px_#000,0_0_0_3px_#0a0a0a]",
          )}
        >

      {/* Everything but the status bar lifts with the camera grabber. */}
      <motion.div className="absolute inset-0" style={{ y: lift }} inert={asleep}>
        <motion.div className="absolute inset-0" style={{ scale: bounce }}>
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{ scale: unlocked ? 1.03 : 1.06, filter: unlocked ? "brightness(1)" : "brightness(0.94)" }}
          transition={reduce ? { duration: 0 } : { duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          {wallpaper ? (
            // eslint-disable-next-line @next/next/no-img-element -- user-supplied URL
            <img
              src={wallpaper}
              alt=""
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <canvas ref={waterRef} className="absolute inset-0 h-full w-full bg-[#4a6d8c]" />
          )}
        </motion.div>

        {/* Unlocked state */}
        <motion.div
          className="absolute inset-x-0 bottom-16 flex flex-col items-center gap-3"
          initial={false}
          animate={{ opacity: unlocked ? 1 : 0, y: unlocked ? 0 : 12 }}
          transition={reduce ? { duration: 0 } : { duration: 0.3, delay: unlocked ? 0.25 : 0 }}
          style={{ pointerEvents: unlocked ? "auto" : "none" }}
        >
          <p className="text-[15px] font-medium tracking-tight text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
            Unlocked
          </p>
          <button
            type="button"
            onClick={lockAgain}
            tabIndex={unlocked ? 0 : -1}
            className="flex items-center gap-1.5 rounded-full border border-black/50 px-4 py-1.5 text-[13px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_1px_2px_rgba(0,0,0,0.4)] outline-none [text-shadow:0_-1px_0_rgba(0,0,0,0.5)] focus-visible:ring-2 focus-visible:ring-white/80"
            style={{ background: BAR_BG }}
          >
            <Lock className="size-3.5" strokeWidth={2.5} />
            Lock
          </button>
        </motion.div>
        </motion.div>

        {/* Lock-screen music controls (home double press) */}
        {music && (
          <div className="absolute inset-0 z-[5]" onPointerDown={() => setMusic(false)} />
        )}
        <motion.div
          className="absolute inset-x-0 top-[134px] z-[6] flex flex-col items-center border-b border-black/70 px-6 pt-2 pb-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:top-[116px]"
          style={{
            background: "linear-gradient(to bottom, rgba(28,29,31,0.94), rgba(12,12,13,0.94))",
            pointerEvents: music ? "auto" : "none",
          }}
          initial={false}
          animate={{ y: music ? 0 : "-100%", opacity: music ? 1 : 0 }}
          transition={slide}
          inert={!music}
          onPointerDown={() => setMusicPoke((n) => n + 1)}
          onKeyDown={() => setMusicPoke((n) => n + 1)}
        >
          <p className="w-full truncate text-center text-[13px] leading-5 font-semibold [text-shadow:0_-1px_0_rgba(0,0,0,0.8)]">
            {track.title}
            {track.artist && <span className="font-normal text-white/60"> · {track.artist}</span>}
          </p>
          <div className="mt-1 flex items-center gap-10">
            <GlyphButton label="Previous track" d="M3 2h2.5v14H3zM15 2 6 9l9 7zM25 2l-9 7 9 7z" />
            <GlyphButton
              label={playing ? "Pause" : "Play"}
              d={playing ? "M8 2h4v14H8zM16 2h4v14h-4z" : "M9 1.5 22 9 9 16.5z"}
              onClick={() => setPlaying((v) => !v)}
            />
            <GlyphButton label="Next track" d="M25 2h-2.5v14H25zM13 2l9 7-9 7zM3 2l9 7-9 7z" />
          </div>
          <input
            type="range"
            aria-label="Volume"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(+e.target.value)}
            className="stu-vol mt-2 w-full"
            style={{ ["--v" as string]: `${volume}%` }}
          />
        </motion.div>

        {/* Clock bar */}
        <motion.div
          className="absolute inset-x-0 top-[22px] z-[7] flex h-[112px] flex-col sm:top-[20px] sm:h-[96px] items-center border-t border-white/30 border-b border-b-black/70"
          style={{ background: BAR_BG }}
          initial={false}
          animate={{ y: unlocked ? -150 : 0 }}
          transition={slide}
        >
          <div
            className="mt-[7px] h-[72px] text-[76px] leading-[72px] font-[200] sm:mt-[6px] sm:h-[60px] sm:text-[62px] sm:leading-[60px] tracking-[-0.02em] tabular-nums [text-shadow:0_-1px_1px_rgba(0,0,0,0.5)]"
            suppressHydrationWarning
          >
            {now ? fmtTime(now, hour12) : ""}
          </div>
          <div className="mt-[3px] text-[15px] leading-5 font-medium sm:mt-[2px] sm:text-[14px] tracking-[0.01em] text-white/95 [text-shadow:0_-1px_1px_rgba(0,0,0,0.6)]">
            {now ? fmtDate(now) : ""}
          </div>
        </motion.div>

        {/* Dock */}
        <motion.div
          className="absolute inset-x-0 bottom-0 flex h-[112px] items-center gap-4 border-t border-black/80 pr-5 pl-5 sm:h-[96px] sm:gap-3 sm:pr-3 sm:pl-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]"
          style={{ background: BAR_BG }}
          initial={false}
          animate={{ y: unlocked ? 140 : 0 }}
          transition={slide}
        >
          {/* Recessed track */}
          <div
            className="relative h-[56px] flex-1 rounded-[12px] sm:h-[48px] sm:rounded-[10px] border border-black/80 shadow-[inset_0_2px_5px_rgba(0,0,0,0.85),0_1px_0_rgba(255,255,255,0.22)]"
            style={{
              background: "linear-gradient(to bottom, #050505, #1b1b1b 55%, #232323)",
            }}
          >
            <motion.span
              key={hint}
              aria-hidden
              className="stu-shimmer pointer-events-none absolute inset-y-0 right-0 left-[85px] flex items-center justify-center text-[23px] font-normal tracking-[0.005em] sm:left-[73px] sm:text-[20px]"
              style={{ opacity: textOpacity }}
            >
              {label}
            </motion.span>

            <div ref={trackRef} className="absolute" style={{ inset: PAD }}>
              <motion.button
                key={round}
                ref={knobRef}
                type="button"
                role="slider"
                aria-label="Slide to unlock"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={unlocked ? 100 : 0}
                aria-valuetext={unlocked ? "Unlocked" : "Locked. Press Enter or Right Arrow to unlock"}
                drag="x"
                dragConstraints={trackRef}
                dragElastic={0}
                dragMomentum={false}
                onDragEnd={onKnobDragEnd}
                onKeyDown={(e) => {
                  if (["Enter", " ", "ArrowRight", "End"].includes(e.key)) {
                    e.preventDefault();
                    unlock();
                  }
                }}
                // Not `disabled`: toggling it mid-gesture left motion's drag
                // stuck, so the knob wouldn't slide after re-locking.
                aria-disabled={unlocked}
                tabIndex={unlocked ? -1 : 0}
                className="absolute top-0 left-0 flex h-full w-[82px] cursor-grab touch-none items-center justify-center rounded-[9px] sm:w-[70px] sm:rounded-[8px] border border-black/60 outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80 active:cursor-grabbing"
                style={{
                  x,
                  background:
                    "linear-gradient(to bottom, #ffffff 0%, #f4f4f4 48%, #dcdcdc 52%, #c9c9c9 100%)",
                  boxShadow:
                    "inset 0 1px 0 #fff, inset 0 -1px 1px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.6)",
                  pointerEvents: unlocked ? "none" : "auto",
                }}
              >
                <svg viewBox="0 0 30 26" aria-hidden className="h-[28px] w-[34px] sm:h-[24px] sm:w-[29px]">
                  <defs>
                    <linearGradient id="stu-arrow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#a9a9a9" />
                      <stop offset="1" stopColor="#6c6c6c" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M3 9.5h13V3.5l11 9.5-11 9.5v-6H3z"
                    fill="url(#stu-arrow)"
                    stroke="rgba(0,0,0,0.12)"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Camera grabber */}
          <motion.div
            role="button"
            tabIndex={unlocked ? -1 : 0}
            aria-label="Camera. Drag up to peek"
            onPan={onGrabberPan}
            onPanEnd={() => animate(lift, 0, spring)}
            onKeyDown={(e) => {
              if (["Enter", " ", "ArrowUp"].includes(e.key)) {
                e.preventDefault();
                if (!reduce) animate(lift, [0, -120, 0], { duration: 0.7, ease: "easeInOut" });
              }
            }}
            className="flex h-[56px] w-[46px] cursor-grab touch-none flex-col items-center justify-center gap-[6px] rounded-md outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80 sm:h-[48px] sm:w-[40px] sm:gap-[5px] active:cursor-grabbing"
          >
            <Grooves />
            <CameraGlyph />
            <Grooves />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Status bar */}
      <div className="absolute inset-x-0 top-0 z-10 flex h-[22px] items-center justify-between bg-[#111214] sm:h-[20px] px-[10px] text-[12px] leading-none font-bold tracking-[-0.01em] [text-shadow:0_-1px_0_rgba(0,0,0,0.8)]">
        <span className="flex items-center gap-1">
          {carrier}
          <Wifi className="size-[14px]" strokeWidth={3} />
        </span>
        <span role="img" aria-label="Battery full" className="flex items-center">
          <span className="h-[10px] w-[22px] rounded-[2px] border border-white p-[1px] shadow-[0_-1px_0_rgba(0,0,0,0.5)]">
            <span className="block h-full w-full rounded-[1px] bg-white" />
          </span>
          <span className="h-[4px] w-[2px] rounded-r-[1px] bg-white" />
        </span>
      </div>

      {/* Backlight */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-30 bg-black"
        initial={false}
        animate={{ opacity: asleep ? 1 : 0 }}
        transition={reduce ? { duration: 0 } : { duration: asleep ? 0.15 : 0.3, ease: "easeOut" }}
        style={{ pointerEvents: asleep ? "auto" : "none" }}
      />
        </div>
      </div>
      {framed && <div className="stu-glare hidden sm:block" />}
    </div>
  );
}

const Grooves = () => (
  <span className="flex flex-col gap-[3px]">
    {[0, 1].map((i) => (
      <span key={i} className="block h-px w-[20px] bg-black/75 sm:w-[17px] shadow-[0_1px_0_rgba(255,255,255,0.28)]" />
    ))}
  </span>
);

const CameraGlyph = () => (
  <svg viewBox="0 0 30 22" aria-hidden className="h-[22px] w-[30px] sm:h-[19px] sm:w-[26px] drop-shadow-[0_-1px_0_rgba(0,0,0,0.7)]">
    <defs>
      <linearGradient id="stu-cam" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="0.5" stopColor="#ececec" />
        <stop offset="0.51" stopColor="#d2d2d2" />
        <stop offset="1" stopColor="#bdbdbd" />
      </linearGradient>
    </defs>
    <path d="M10 2.5h10l2 3h5a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2h5z" fill="url(#stu-cam)" />
    <circle cx="15" cy="13" r="5.6" fill="#3a3c3f" />
    <circle cx="15" cy="13" r="3.6" fill="#8d9196" />
    <circle cx="13.8" cy="11.8" r="1.1" fill="#e8e8e8" />
    <rect x="4" y="8.5" width="3" height="1.6" rx="0.6" fill="#8d9196" />
  </svg>
);

/** Steel-band buttons (desktop frame only): mute + volume left, sleep/wake top. */
const DeviceSides = ({ onSleep }: { onSleep: () => void }) => (
  <div className="hidden sm:block">
    <span aria-hidden className="stu-steel absolute top-[104px] -left-[3px] h-[26px] w-[4px] rounded-l-[2px]" />
    <span aria-hidden className="stu-steel absolute top-[164px] -left-[3px] h-[38px] w-[4px] rounded-l-[3px]" />
    <span aria-hidden className="stu-steel absolute top-[222px] -left-[3px] h-[38px] w-[4px] rounded-l-[3px]" />
    {/* hit area is taller than the 4px protrusion */}
    <button
      type="button"
      aria-label="Sleep/Wake"
      onClick={onSleep}
      className="group absolute -top-[10px] right-[72px] h-[16px] w-[60px] cursor-pointer rounded-[3px] outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80"
    >
      <span className="stu-steel-v absolute top-[7px] left-0 h-[4px] w-full rounded-t-[2px] transition-transform duration-150 ease-[cubic-bezier(.3,1.6,.6,1)] group-active:translate-y-[2px] group-active:duration-75 motion-reduce:transition-none" />
    </button>
  </div>
);

const HomeButton = ({ onPress }: { onPress: () => void }) => (
  <button
    type="button"
    aria-label="Home"
    onClick={onPress}
    className="group absolute bottom-[33px] left-1/2 hidden size-[66px] -translate-x-1/2 cursor-pointer rounded-full bg-[linear-gradient(to_bottom,#4b4c4f,#151516)] p-[2px] shadow-[0_1px_0_rgba(255,255,255,0.08)] outline-none transition-[scale,filter] duration-200 ease-[cubic-bezier(.3,1.6,.6,1)] focus-visible:ring-2 focus-visible:ring-sky-300/70 active:scale-95 active:brightness-[0.7] active:duration-75 motion-reduce:transition-none sm:block"
  >
    <span className="flex size-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_30%,#1d1e20,#060606_70%)] shadow-[inset_0_2px_5px_rgba(0,0,0,0.95)] transition-shadow group-active:shadow-[inset_0_4px_10px_rgba(0,0,0,1)]">
      <span className="size-[17px] rounded-[4px] border-[1.5px] border-white/40" />
    </span>
  </button>
);

const GlyphButton = ({ label, d, onClick }: { label: string; d: string; onClick?: () => void }) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="flex h-9 w-10 items-center justify-center rounded-md outline-none transition-transform active:scale-90 focus-visible:ring-2 focus-visible:ring-sky-300/70 motion-reduce:transition-none"
  >
    <svg viewBox="0 0 28 18" aria-hidden className="h-[18px] w-[28px] drop-shadow-[0_-1px_0_rgba(0,0,0,0.9)]">
      <defs>
        <linearGradient id="stu-glyph" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#c4c4c4" />
        </linearGradient>
      </defs>
      <path d={d} fill="url(#stu-glyph)" />
    </svg>
  </button>
);

/** Earpiece + front camera (top bezel). */
const Bezels = () => (
  <div aria-hidden className="hidden sm:block">
    <div className="absolute top-[62px] left-1/2 flex -translate-x-1/2 items-center">
      <span className="absolute -left-[24px] size-[10px] rounded-full bg-[radial-gradient(circle_at_38%_38%,#51607e_0_1.2px,#151618_2.6px,#050505)] shadow-[0_0_0_1px_#1f2022]" />
      <span className="block h-[8px] w-[54px] rounded-full bg-[#0f0f10] bg-[radial-gradient(#3a3b3e_0.6px,transparent_0.9px)] bg-size-[3px_3px] shadow-[inset_0_1px_2px_#000,0_1px_0_rgba(255,255,255,0.09)]" />
    </div>
  </div>
);

export default SlideToUnlock;
