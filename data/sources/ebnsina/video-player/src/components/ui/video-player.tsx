import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ClosedCaptionIcon,
  DashboardSpeed01Icon,
  FullScreenIcon,
  MinimizeScreenIcon,
  PauseIcon,
  PictureInPictureOnIcon,
  PlayIcon,
  Tick02Icon,
  VolumeHighIcon,
  VolumeMute02Icon,
} from "@hugeicons/core-free-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const twoDigits = new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 });
const oneDigit = new Intl.NumberFormat(undefined);

/** Seconds as a clock: 75 -> "1:15", 3725 -> "1:02:05". Digits follow the reader's locale. */
export function clock(seconds: number) {
  const s = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0;
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const rest = twoDigits.format(s % 60);
  return h
    ? `${oneDigit.format(h)}:${twoDigits.format(m)}:${rest}`
    : `${oneDigit.format(m)}:${rest}`;
}

const RATES = [0.5, 0.75, 1, 1.25, 1.5, 2];
const rateFormat = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 2,
});

export interface VideoPlayerProps extends Omit<
  React.VideoHTMLAttributes<HTMLVideoElement>,
  "title" | "children" | "controls"
> {
  /** Names the player, and shows on the lock screen and in system media controls. */
  title?: string;
  artist?: string;
  /** Image for the lock screen / media controls (defaults to the poster). */
  artwork?: string;
  /** Width / height, e.g. "16 / 9". */
  aspectRatio?: string;
  /** Set to show your own message over the player (a stream that failed to load). */
  error?: string;
  /** <source> and <track> elements. */
  children?: React.ReactNode;
  /** Extra controls, placed before fullscreen (a quality menu). */
  controls?: React.ReactNode;
  className?: string;
}

interface BufferedRange {
  start: number;
  end: number;
}

function readBuffered(video: HTMLVideoElement): BufferedRange[] {
  const ranges: BufferedRange[] = [];
  for (let i = 0; i < video.buffered.length; i++) {
    ranges.push({ start: video.buffered.start(i), end: video.buffered.end(i) });
  }
  return ranges;
}

/**
 * Ported from Sina UI's Video.svelte (Svelte 5) by ebnsina, MIT licensed.
 * The `element` bindable prop of the source becomes a forwarded ref to the <video> element,
 * for libraries that attach to it (Shaka, hls.js). The source's custom speed-menu Dropdown
 * is replaced here with shadcn/ui's dropdown-menu (see component notes).
 */
const VideoPlayer = React.forwardRef<HTMLVideoElement, VideoPlayerProps>(
  function VideoPlayer(
    {
      title,
      artist,
      artwork,
      poster,
      aspectRatio = "16 / 9",
      error,
      children,
      controls,
      className,
      ...rest
    },
    forwardedRef,
  ) {
    const wrapRef = React.useRef<HTMLDivElement>(null);
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const timerRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(
      undefined,
    );

    React.useImperativeHandle(
      forwardedRef,
      () => videoRef.current as HTMLVideoElement,
      [],
    );

    const [paused, setPaused] = React.useState(true);
    const [time, setTime] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const [volume, setVolume] = React.useState(1);
    const [muted, setMuted] = React.useState(false);
    const [speed, setSpeed] = React.useState(1);
    const [buffered, setBuffered] = React.useState<BufferedRange[]>([]);
    const [started, setStarted] = React.useState(false);
    const [waiting, setWaiting] = React.useState(false);
    const [failed, setFailed] = React.useState(false);
    const [full, setFull] = React.useState(false);
    const [canPip, setCanPip] = React.useState(false);
    const [hasCaptions, setHasCaptions] = React.useState(false);
    const [captions, setCaptions] = React.useState(false);
    const [idle, setIdle] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);

    const message =
      error ?? (failed ? "This video couldn\u2019t be played." : undefined);
    const hidden = started && !paused && idle && !menuOpen;
    const played = duration ? (time / duration) * 100 : 0;
    const range = buffered.find((r) => r.start <= time && time <= r.end);
    const loaded = duration && range ? (range.end / duration) * 100 : played;

    /** Controls stay while the pointer moves or focus is inside; they fade after 2.5s idle. */
    function wake() {
      setIdle(false);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setIdle(true), 2500);
    }

    function toggle() {
      const video = videoRef.current;
      if (!video) return;
      if (video.paused) video.play().catch(() => {});
      else video.pause();
    }

    function seek(to: number) {
      const video = videoRef.current;
      if (!video) return;
      video.currentTime = Math.min(Math.max(0, to), duration || 0);
    }

    function toggleMute() {
      const video = videoRef.current;
      if (video) video.muted = !video.muted;
    }

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
      if (document.pictureInPictureElement) document.exitPictureInPicture();
      else videoRef.current?.requestPictureInPicture().catch(() => {});
    }

    function setCaptionsOn(on: boolean) {
      setCaptions(on);
      const video = videoRef.current;
      if (!video) return;
      for (const t of Array.from(video.textTracks)) {
        if (t.kind === "captions" || t.kind === "subtitles")
          t.mode = on ? "showing" : "hidden";
      }
    }

    function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
      const t = e.target as HTMLElement;
      if (
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        t.closest("[data-radix-popper-content-wrapper]")
      )
        return;
      const onButton = t.tagName === "BUTTON";
      const onScrub =
        t.classList.contains("sinaui-video-scrub") ||
        t.classList.contains("sinaui-video-volume");
      const key = e.key.toLowerCase();
      if ((key === " " && !onButton && !onScrub) || key === "k") toggle();
      else if (key === "j") seek(time - 10);
      else if (key === "l") seek(time + 10);
      else if (key === "m") toggleMute();
      else if (key === "f") fullscreen();
      else if (key === "c" && hasCaptions) setCaptionsOn(!captions);
      else if (!onScrub && (key === "arrowleft" || key === "arrowright"))
        seek(time + (key === "arrowleft" ? -5 : 5));
      else return;
      e.preventDefault();
      wake();
    }

    // The scrub bar moves 5s per arrow press, like the player; Page keys jump a tenth.
    function scrubKeys(e: React.KeyboardEvent<HTMLInputElement>) {
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
    function session() {
      if (!("mediaSession" in navigator)) return;
      const video = videoRef.current;
      const art = artwork ?? poster;
      if (title) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title,
          artist,
          artwork: art ? [{ src: art as string }] : [],
        });
      }
      const handlers: [MediaSessionAction, MediaSessionActionHandler][] = [
        ["play", () => video?.play()],
        ["pause", () => video?.pause()],
        ["seekbackward", (d) => seek(time - (d.seekOffset ?? 10))],
        ["seekforward", (d) => seek(time + (d.seekOffset ?? 10))],
        ["seekto", (d) => d.seekTime !== undefined && seek(d.seekTime)],
      ];
      for (const [action, handler] of handlers) {
        try {
          navigator.mediaSession.setActionHandler(action, handler);
        } catch {
          // Not every browser knows every action.
        }
      }
    }

    React.useEffect(() => {
      const video = videoRef.current;
      if (!video) return;
      setCanPip(
        document.pictureInPictureEnabled && !video.disablePictureInPicture,
      );
      const tracks = () =>
        setHasCaptions(
          Array.from(video.textTracks).some(
            (t) => t.kind === "captions" || t.kind === "subtitles",
          ),
        );
      tracks();
      video.textTracks.addEventListener("addtrack", tracks);
      const onFull = () =>
        setFull(document.fullscreenElement === wrapRef.current);
      document.addEventListener("fullscreenchange", onFull);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        video.textTracks.removeEventListener("addtrack", tracks);
        document.removeEventListener("fullscreenchange", onFull);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div
        ref={wrapRef}
        className={[
          "sinaui-video-player",
          hidden && "sinaui-video-faded",
          full && "sinaui-video-full",
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
          onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
          onDurationChange={(e) => setDuration(e.currentTarget.duration || 0)}
          onVolumeChange={(e) => {
            setVolume(e.currentTarget.volume);
            setMuted(e.currentTarget.muted);
          }}
          onRateChange={(e) => setSpeed(e.currentTarget.playbackRate)}
          onProgress={(e) => setBuffered(readBuffered(e.currentTarget))}
          onWaiting={() => setWaiting(true)}
          onPlaying={() => setWaiting(false)}
          onCanPlay={() => setWaiting(false)}
          onError={() => setFailed(true)}
        >
          {children}
        </video>

        {message ? (
          <p className="sinaui-video-message" role="alert">
            {message}
          </p>
        ) : waiting ? (
          <span className="sinaui-video-center">
            <span
              className="sinaui-video-spinner"
              role="progressbar"
              aria-label="Loading"
              style={{ "--size": "36px" } as React.CSSProperties}
            />
          </span>
        ) : !started ? (
          <button
            type="button"
            className="sinaui-video-big"
            aria-label={`Play ${title ?? "video"}`}
            onClick={() => {
              toggle();
              // The button goes once it plays: keep keyboard focus on the player, not the page.
              wrapRef.current?.focus({ preventScroll: true });
            }}
          >
            <HugeiconsIcon icon={PlayIcon} size={28} />
          </button>
        ) : null}

        <div className="sinaui-video-bar">
          <input
            className="sinaui-video-scrub"
            type="range"
            min={0}
            max={duration || 0}
            step="any"
            value={time}
            aria-label="Seek"
            aria-valuetext={`${clock(time)} of ${clock(duration)}`}
            style={
              {
                "--p": `${played}%`,
                "--b": `${loaded}%`,
              } as React.CSSProperties
            }
            onChange={(e) => seek(+e.currentTarget.value)}
            onKeyDown={scrubKeys}
          />
          <div className="sinaui-video-row">
            <button
              type="button"
              className="sinaui-video-ctl"
              aria-label={paused ? "Play" : "Pause"}
              aria-keyshortcuts="k"
              onClick={toggle}
            >
              <HugeiconsIcon icon={paused ? PlayIcon : PauseIcon} />
            </button>
            <button
              type="button"
              className="sinaui-video-ctl"
              aria-label={muted ? "Unmute" : "Mute"}
              aria-keyshortcuts="m"
              onClick={toggleMute}
            >
              <HugeiconsIcon
                icon={muted || volume === 0 ? VolumeMute02Icon : VolumeHighIcon}
              />
            </button>
            <input
              className="sinaui-video-volume"
              type="range"
              min={0}
              max={1}
              step={0.05}
              aria-label="Volume"
              aria-valuetext={`${Math.round((muted ? 0 : volume) * 100)}%`}
              value={muted ? 0 : volume}
              style={
                {
                  "--p": `${(muted ? 0 : volume) * 100}%`,
                  "--b": "0%",
                } as React.CSSProperties
              }
              onChange={(e) => {
                const v = +e.currentTarget.value;
                const video = videoRef.current;
                if (video) {
                  video.volume = v;
                  video.muted = v === 0;
                }
              }}
            />
            <span className="sinaui-video-time">
              <span>{clock(time)}</span> / <span>{clock(duration)}</span>
            </span>
            <span className="sinaui-video-spacer" />
            {controls}
            <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="sinaui-video-ctl"
                  aria-label="Playback speed"
                >
                  <HugeiconsIcon icon={DashboardSpeed01Icon} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {RATES.map((r) => (
                  <DropdownMenuItem
                    key={r}
                    onSelect={() => {
                      const video = videoRef.current;
                      if (video) video.playbackRate = r;
                    }}
                  >
                    <span className="sinaui-video-tick">
                      {r === speed ? (
                        <HugeiconsIcon icon={Tick02Icon} size={16} />
                      ) : null}
                    </span>
                    {r === 1 ? "Normal" : `${rateFormat.format(r)}\u00d7`}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {hasCaptions ? (
              <button
                type="button"
                className="sinaui-video-ctl"
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
                className="sinaui-video-ctl"
                aria-label="Picture in picture"
                onClick={pip}
              >
                <HugeiconsIcon icon={PictureInPictureOnIcon} />
              </button>
            ) : null}
            <button
              type="button"
              className="sinaui-video-ctl"
              aria-label={full ? "Exit full screen" : "Full screen"}
              aria-keyshortcuts="f"
              onClick={fullscreen}
            >
              <HugeiconsIcon
                icon={full ? MinimizeScreenIcon : FullScreenIcon}
              />
            </button>
          </div>
        </div>
      </div>
    );
  },
);

export default VideoPlayer;
