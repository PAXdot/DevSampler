"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
  type VideoHTMLAttributes,
} from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ClosedCaptionIcon,
  DashboardSpeed01Icon,
  FullScreenIcon,
  MinimizeScreenIcon,
  PauseIcon,
  PictureInPictureOnIcon,
  PlayIcon,
  SlidersHorizontalIcon,
  Tick02Icon,
  VolumeHighIcon,
  VolumeMute02Icon,
} from "@hugeicons/core-free-icons";
import type shaka from "shaka-player";

/* Seconds as a clock: 75 -> "1:15", 3725 -> "1:02:05". Digits follow the reader's locale. */
const twoDigits = new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 });
const oneDigit = new Intl.NumberFormat(undefined);
function clock(seconds: number) {
  const s = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0;
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const rest = twoDigits.format(s % 60);
  return h
    ? `${oneDigit.format(h)}:${twoDigits.format(m)}:${rest}`
    : `${oneDigit.format(m)}:${rest}`;
}

/** Shaka's error categories, in words a viewer can act on. */
function explain(e: unknown) {
  const category = (e as { category?: number })?.category;
  if (category === 1)
    return "The video couldn\u2019t be reached. Check your connection and try again.";
  if (category === 6)
    return "This video is protected and can\u2019t be played in this browser.";
  if (category === 4) return "The video stream couldn\u2019t be read.";
  if (category === 3)
    return "This video\u2019s format isn\u2019t supported on this device.";
  return "This video couldn\u2019t be played.";
}

type Track = shaka.extern.VideoTrack;

function Spinner({ size = 36, label }: { size?: number; label?: string }) {
  return (
    <span
      className="spinner"
      role={label ? "progressbar" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : "true"}
      style={{ ["--size" as any]: `${size}px` }}
    />
  );
}

interface MenuItemDef {
  key: string;
  label: ReactNode;
  active: boolean;
  onSelect: () => void;
}

/** A control-bar button that opens a small menu above it: quality / speed. */
function ControlMenu({
  label,
  icon,
  items,
  menuLabel,
  onOpenChange,
}: {
  label: string;
  icon: typeof PlayIcon;
  items: MenuItemDef[];
  menuLabel: string;
  onOpenChange?: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus && menuRef.current?.contains(document.activeElement)) {
      buttonRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    onOpenChange?.(open);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!open) return;
    const list = [
      ...(menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ??
        []),
    ];
    list[0]?.focus({ preventScroll: true });

    function onPointerDown(e: PointerEvent) {
      const t = e.target as Node;
      if (menuRef.current?.contains(t) || buttonRef.current?.contains(t))
        return;
      close(false);
    }
    document.addEventListener("pointerdown", onPointerDown, true);
    return () =>
      document.removeEventListener("pointerdown", onPointerDown, true);
  }, [open, close]);

  function onMenuKeyDown(e: ReactKeyboardEvent) {
    const menu = menuRef.current;
    if (!menu) return;
    const list = [...menu.querySelectorAll<HTMLElement>('[role="menuitem"]')];
    const i = list.indexOf(document.activeElement as HTMLElement);
    const n = list.length;
    let next: HTMLElement | undefined;
    if (e.key === "ArrowDown") next = list[(i + 1) % n];
    else if (e.key === "ArrowUp") next = list[i < 0 ? n - 1 : (i - 1 + n) % n];
    else if (e.key === "Home") next = list[0];
    else if (e.key === "End") next = list[n - 1];
    else if (e.key === "Escape" || e.key === "Tab") {
      e.preventDefault();
      close();
      return;
    }
    if (!next) return;
    e.preventDefault();
    next.focus();
  }

  return (
    <div className="menu-wrap">
      <button
        ref={buttonRef}
        type="button"
        className="ctl"
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <HugeiconsIcon icon={icon} />
      </button>
      {open ? (
        <div
          ref={menuRef}
          role="menu"
          tabIndex={-1}
          aria-label={menuLabel}
          className="menu"
          onKeyDown={onMenuKeyDown}
        >
          {items.map((item) => (
            <button
              key={item.key}
              type="button"
              role="menuitem"
              tabIndex={-1}
              className="item"
              onClick={() => {
                item.onSelect();
                close();
              }}
            >
              <span className="tick">
                {item.active ? (
                  <HugeiconsIcon icon={Tick02Icon} size={16} />
                ) : null}
              </span>
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

interface ShakaVideoProps extends Omit<
  VideoHTMLAttributes<HTMLVideoElement>,
  "title" | "children" | "controls" | "src"
> {
  /** A DASH (.mpd) or HLS (.m3u8) manifest. */
  manifest: string;
  /** Names the player, and shows on the lock screen and in system media controls. */
  title?: string;
  artist?: string;
  /** Image for the lock screen / media controls (defaults to the poster). */
  artwork?: string;
  /** Width / height, e.g. "16 / 9". */
  aspectRatio?: string;
  className?: string;
  /** <track> elements (captions). */
  children?: ReactNode;
}

export default function ShakaVideo({
  manifest,
  title,
  artist,
  artwork,
  poster,
  aspectRatio = "16 / 9",
  className,
  children,
  ...rest
}: ShakaVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<shaka.Player | undefined>(undefined);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const [paused, setPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [buffered, setBuffered] = useState<{ start: number; end: number }[]>(
    [],
  );
  const [started, setStarted] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [failed, setFailed] = useState(false);
  const [full, setFull] = useState(false);
  const [canPip, setCanPip] = useState(false);
  const [hasCaptions, setHasCaptions] = useState(false);
  const [captions, setCaptions] = useState(false);
  const [idle, setIdle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [playerError, setPlayerError] = useState<string | undefined>(undefined);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [auto, setAuto] = useState(true);

  const rates = [0.5, 0.75, 1, 1.25, 1.5, 2];
  const rateFormat = useMemo(
    () => new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 }),
    [],
  );

  // Highest first, one entry per height: "1080p", "720p"...
  const qualities = useMemo(
    () =>
      [...tracks]
        .sort((a, b) => (b.height ?? 0) - (a.height ?? 0))
        .filter(
          (t, i, all) =>
            t.height && all.findIndex((u) => u.height === t.height) === i,
        ),
    [tracks],
  );
  const active = tracks.find((t) => t.active);

  const message =
    playerError ?? (failed ? "This video couldn\u2019t be played." : undefined);
  const hidden = started && !paused && idle && !menuOpen;
  const played = duration ? (time / duration) * 100 : 0;
  const loaded = (() => {
    const range = buffered.find((r) => r.start <= time && time <= r.end);
    return duration && range ? (range.end / duration) * 100 : played;
  })();

  const wake = useCallback(() => {
    setIdle(false);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setIdle(true), 2500);
  }, []);

  const toggle = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  }, []);

  const seek = useCallback(
    (to: number) => {
      const v = videoRef.current;
      if (!v) return;
      v.currentTime = Math.min(Math.max(0, to), duration || 0);
    },
    [duration],
  );

  function fullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }
    const wrap = wrapRef.current;
    if (wrap?.requestFullscreen) {
      wrap.requestFullscreen().catch(() => {});
      return;
    }
    // iPhone: only the video itself can go fullscreen, with the system controls.
    (
      videoRef.current as
        (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null
    )?.webkitEnterFullscreen?.();
  }

  function pip() {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
      return;
    }
    videoRef.current?.requestPictureInPicture().catch(() => {});
  }

  function setCaptionsOn(on: boolean) {
    setCaptions(on);
    const v = videoRef.current;
    if (!v) return;
    for (const t of Array.from(v.textTracks)) {
      if (t.kind === "captions" || t.kind === "subtitles")
        t.mode = on ? "showing" : "hidden";
    }
  }

  function choose(track?: Track) {
    const player = playerRef.current;
    if (!player) return;
    setAuto(!track);
    player.configure({ abr: { enabled: !track } });
    if (track) player.selectVideoTrack(track, true);
  }

  function onKeyDown(e: ReactKeyboardEvent) {
    const t = e.target as HTMLElement;
    if (e.metaKey || e.ctrlKey || e.altKey || t.closest('[role="menu"]'))
      return;
    const onButton = t.tagName === "BUTTON";
    const onScrub =
      t.classList.contains("scrub") || t.classList.contains("volume");
    const key = e.key.toLowerCase();
    if ((key === " " && !onButton && !onScrub) || key === "k") toggle();
    else if (key === "j") seek(time - 10);
    else if (key === "l") seek(time + 10);
    else if (key === "m") setMuted((m) => !m);
    else if (key === "f") fullscreen();
    else if (key === "c" && hasCaptions) setCaptionsOn(!captions);
    else if (!onScrub && (key === "arrowleft" || key === "arrowright"))
      seek(time + (key === "arrowleft" ? -5 : 5));
    else return;
    e.preventDefault();
    wake();
  }

  // The scrub bar moves 5s per arrow press, like the player; Page keys jump a tenth.
  function scrubKeys(e: ReactKeyboardEvent<HTMLInputElement>) {
    const jumps: Record<string, number> = {
      ArrowLeft: time - 5,
      ArrowDown: time - 5,
      ArrowRight: time + 5,
      ArrowUp: time + 5,
      PageDown: time - duration / 10,
      PageUp: time + duration / 10,
      Home: 0,
      End: duration,
    };
    if (!(e.key in jumps)) return;
    e.preventDefault();
    e.stopPropagation();
    seek(jumps[e.key]);
  }

  // Lock screen, headset buttons and the OS media panel drive this player while it plays.
  const session = useCallback(() => {
    const nav = navigator as any;
    if (!("mediaSession" in nav)) return;
    const art = artwork ?? poster;
    if (title && typeof (window as any).MediaMetadata !== "undefined") {
      nav.mediaSession.metadata = new (window as any).MediaMetadata({
        title,
        artist,
        artwork: art ? [{ src: art }] : [],
      });
    }
    const handlers: [string, (details: any) => void][] = [
      ["play", () => videoRef.current?.play()],
      ["pause", () => videoRef.current?.pause()],
      ["seekbackward", (d) => seek(time - (d.seekOffset ?? 10))],
      ["seekforward", (d) => seek(time + (d.seekOffset ?? 10))],
      ["seekto", (d) => d.seekTime !== undefined && seek(d.seekTime)],
    ];
    for (const [action, handler] of handlers) {
      try {
        nav.mediaSession.setActionHandler(action, handler);
      } catch {
        // Not every browser knows every action.
      }
    }
  }, [artwork, poster, title, artist, seek, time]);

  // Attach + load Shaka once, mirroring the source's onMount.
  useEffect(() => {
    let gone = false;
    (async () => {
      const { default: lib } = await import("shaka-player");
      if (gone) return;
      lib.polyfill.installAll();
      if (!lib.Player.isBrowserSupported()) {
        setPlayerError(
          "This browser can\u2019t play streaming video. Try a recent Chrome, Safari or Firefox.",
        );
        return;
      }
      const p = new lib.Player();
      playerRef.current = p;
      p.addEventListener("error", (ev) =>
        setPlayerError(explain((ev as unknown as CustomEvent).detail)),
      );
      const refresh = () => setTracks(p.getVideoTracks());
      p.addEventListener("trackschanged", refresh);
      p.addEventListener("variantchanged", refresh);
      p.addEventListener("adaptation", refresh);
      try {
        await p.attach(videoRef.current!);
        await p.load(manifest);
        refresh();
      } catch (e) {
        if (!gone) setPlayerError(explain(e));
      }
    })();
    return () => {
      gone = true;
      playerRef.current?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manifest]);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;
    setCanPip(
      document.pictureInPictureEnabled && !video.disablePictureInPicture,
    );
    const checkTracks = () =>
      setHasCaptions(
        Array.from(video.textTracks).some(
          (t) => t.kind === "captions" || t.kind === "subtitles",
        ),
      );
    checkTracks();
    video.textTracks.addEventListener("addtrack", checkTracks);
    const onFull = () => setFull(document.fullscreenElement === wrap);
    document.addEventListener("fullscreenchange", onFull);
    return () => {
      clearTimeout(timerRef.current);
      video.textTracks.removeEventListener("addtrack", checkTracks);
      document.removeEventListener("fullscreenchange", onFull);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.playbackRate = speed;
  }, [speed]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.muted = muted;
  }, [muted]);

  function onTimeUpdate() {
    setTime(videoRef.current?.currentTime ?? 0);
  }
  function onDurationChange() {
    setDuration(videoRef.current?.duration || 0);
  }
  function onVolumeChange() {
    const v = videoRef.current;
    if (!v) return;
    setVolume(v.volume);
    setMuted(v.muted);
  }
  function onProgress() {
    const v = videoRef.current;
    if (!v) return;
    const ranges: { start: number; end: number }[] = [];
    for (let i = 0; i < v.buffered.length; i++)
      ranges.push({ start: v.buffered.start(i), end: v.buffered.end(i) });
    setBuffered(ranges);
  }

  return (
    <div
      ref={wrapRef}
      className={[
        "shaka-video",
        "player",
        hidden && "faded",
        full && "full",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ aspectRatio }}
      role="region"
      aria-label={title ?? "Video player"}
      aria-keyshortcuts="k j l m f c"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onPointerMove={wake}
      onFocus={wake}
    >
      <video
        ref={videoRef}
        poster={poster}
        playsInline
        preload="metadata"
        {...rest}
        onClick={toggle}
        onPlay={() => {
          setStarted(true);
          setFailed(false);
          setPaused(false);
          session();
          wake();
        }}
        onPause={() => setPaused(true)}
        onPlaying={() => {
          setPaused(false);
          setWaiting(false);
        }}
        onWaiting={() => setWaiting(true)}
        onCanPlay={() => setWaiting(false)}
        onError={() => setFailed(true)}
        onTimeUpdate={onTimeUpdate}
        onDurationChange={onDurationChange}
        onVolumeChange={onVolumeChange}
        onProgress={onProgress}
      >
        {children}
      </video>

      {message ? (
        <p className="message" role="alert">
          {message}
        </p>
      ) : waiting ? (
        <span className="center">
          <Spinner size={36} label="Loading" />
        </span>
      ) : !started ? (
        <button
          type="button"
          className="big"
          aria-label={`Play ${title ?? "video"}`}
          onClick={() => {
            toggle();
            wrapRef.current?.focus({ preventScroll: true });
          }}
        >
          <HugeiconsIcon icon={PlayIcon} size={28} />
        </button>
      ) : null}

      <div className="bar">
        <input
          className="scrub"
          type="range"
          min={0}
          max={duration || 0}
          step="any"
          value={time}
          aria-label="Seek"
          aria-valuetext={`${clock(time)} of ${clock(duration)}`}
          style={{ ["--p" as any]: `${played}%`, ["--b" as any]: `${loaded}%` }}
          onChange={(e) => seek(+e.currentTarget.value)}
          onKeyDown={scrubKeys}
        />
        <div className="row">
          <button
            type="button"
            className="ctl"
            aria-label={paused ? "Play" : "Pause"}
            aria-keyshortcuts="k"
            onClick={toggle}
          >
            <HugeiconsIcon icon={paused ? PlayIcon : PauseIcon} />
          </button>
          <button
            type="button"
            className="ctl"
            aria-label={muted ? "Unmute" : "Mute"}
            aria-keyshortcuts="m"
            onClick={() => setMuted((m) => !m)}
          >
            <HugeiconsIcon
              icon={muted || volume === 0 ? VolumeMute02Icon : VolumeHighIcon}
            />
          </button>
          <input
            className="volume"
            type="range"
            min={0}
            max={1}
            step={0.05}
            aria-label="Volume"
            aria-valuetext={`${Math.round((muted ? 0 : volume) * 100)}%`}
            value={muted ? 0 : volume}
            style={{
              ["--p" as any]: `${(muted ? 0 : volume) * 100}%`,
              ["--b" as any]: "0%",
            }}
            onChange={(e) => {
              const v = +e.currentTarget.value;
              setVolume(v);
              setMuted(v === 0);
              const el = videoRef.current;
              if (el) el.volume = v;
            }}
          />
          <span className="time">
            <span>{clock(time)}</span> / <span>{clock(duration)}</span>
          </span>
          <span className="spacer" />

          {qualities.length > 1 ? (
            <ControlMenu
              label="Quality"
              icon={SlidersHorizontalIcon}
              menuLabel="Quality"
              items={[
                {
                  key: "auto",
                  active: auto,
                  onSelect: () => choose(),
                  label: `Auto${auto && active?.height ? ` (${active.height}p)` : ""}`,
                },
                ...qualities.map((q) => ({
                  key: String(q.height),
                  active: !auto && active?.height === q.height,
                  onSelect: () => choose(q),
                  label: `${q.height}p`,
                })),
              ]}
            />
          ) : null}

          <ControlMenu
            label="Playback speed"
            icon={DashboardSpeed01Icon}
            menuLabel="Playback speed"
            onOpenChange={setMenuOpen}
            items={rates.map((r) => ({
              key: String(r),
              active: r === speed,
              onSelect: () => setSpeed(r),
              label: r === 1 ? "Normal" : `${rateFormat.format(r)}\u00d7`,
            }))}
          />

          {hasCaptions ? (
            <button
              type="button"
              className="ctl"
              aria-label="Captions"
              aria-pressed={captions}
              aria-keyshortcuts="c"
              onClick={() => setCaptionsOn(!captions)}
            >
              <HugeiconsIcon icon={ClosedCaptionIcon} />
            </button>
          ) : null}

          {canPip ? (
            <button
              type="button"
              className="ctl"
              aria-label="Picture in picture"
              onClick={pip}
            >
              <HugeiconsIcon icon={PictureInPictureOnIcon} />
            </button>
          ) : null}

          <button
            type="button"
            className="ctl"
            aria-label={full ? "Exit full screen" : "Full screen"}
            aria-keyshortcuts="f"
            onClick={fullscreen}
          >
            <HugeiconsIcon icon={full ? MinimizeScreenIcon : FullScreenIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
