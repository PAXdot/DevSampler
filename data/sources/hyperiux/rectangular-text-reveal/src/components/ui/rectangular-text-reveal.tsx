// Built using Hyperiux Vault: https://vault.hyperiux.com

"use client";

import * as React from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, CustomEase, ScrollTrigger);

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

const EASE = "rectReveal";
const REDUCED_Y = 32;

export type RectangularTextRevealDirection = "left" | "right" | "top" | "bottom";

export interface RectangularTextRevealProps {
  /** Text to reveal. Lines are detected automatically and re-measured on resize. */
  children?: React.ReactNode;
  /** Element to render, e.g. "h1", "p". */
  as?: React.ElementType;
  className?: string;
  /** Main rectangle that covers each line before it appears. */
  baseColor?: string;
  /** Second rectangle that sweeps just ahead of the base one. Follows the theme foreground by default. */
  overlayColor?: string;
  /** Adds the overlay sweep in front of the base rectangle. */
  useOverlay?: boolean;
  /** Side the rectangles grow from. */
  direction?: RectangularTextRevealDirection;
  /** Seconds between each line starting. */
  stagger?: number;
  /** Seconds for the base rectangle to cover a line. */
  coverDuration?: number;
  /** Seconds for the base rectangle to slide away and uncover the line. */
  revealDuration?: number;
  /** Seconds for the overlay to cover a line. */
  overlayEnterDuration?: number;
  /** Seconds for the overlay to slide away. */
  overlayExitDuration?: number;
  /** Horizontal bleed of the rectangles past the text, any CSS length. */
  insetX?: string;
  /** Vertical bleed past the text, any CSS length. Blocks size to the text and never exceed the line spacing. */
  insetY?: string;
  /** Seconds to wait after the trigger fires. */
  delay?: number;
  /** ScrollTrigger start position. */
  triggerStart?: string;
  /** Play once and stay revealed, instead of resetting when scrolled back above. */
  once?: boolean;
  /** ScrollTrigger toggleActions, used when `once` is false. */
  toggleActions?: string;
}

const AXIS = { left: "scaleX", right: "scaleX", top: "scaleY", bottom: "scaleY" } as const;
const ENTER_ORIGIN = { left: "0% 50%", right: "100% 50%", top: "50% 0%", bottom: "50% 100%" };
const EXIT_ORIGIN = { left: "100% 50%", right: "0% 50%", top: "50% 100%", bottom: "50% 0%" };

function toPx(length: string, parent: HTMLElement) {
  const probe = document.createElement("span");
  probe.style.cssText = `position:absolute;visibility:hidden;height:${length}`;
  parent.append(probe);
  const px = probe.offsetHeight;
  probe.remove();
  return px;
}

// Vertical span of the glyphs (ascender top to descender bottom) relative to the
// line box, measured from the font itself so the block adapts to any typeface.
function glyphSpan(line: HTMLElement) {
  const cs = getComputedStyle(line);
  const ctx = document.createElement("canvas").getContext("2d")!;
  ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
  const m = ctx.measureText("Hg");
  // A zero-size inline-block's bottom edge sits exactly on the baseline. Prepended,
  // since after a trailing space it could wrap onto a phantom second line.
  const probe = document.createElement("span");
  probe.style.cssText = "display:inline-block;width:0;height:0";
  line.prepend(probe);
  const baseline = probe.getBoundingClientRect().bottom - line.getBoundingClientRect().top;
  probe.remove();
  return { top: baseline - m.actualBoundingBoxAscent, bottom: baseline + m.actualBoundingBoxDescent };
}

function makeRect(background: string, insetX: string, top: number, height: number, zIndex: number) {
  const rect = document.createElement("span");
  rect.setAttribute("aria-hidden", "true");
  Object.assign(rect.style, {
    position: "absolute",
    left: `-${insetX}`,
    right: `-${insetX}`,
    top: `${top}px`,
    height: `${height}px`,
    background,
    zIndex: String(zIndex),
    pointerEvents: "none",
    willChange: "transform",
  });
  return rect;
}

export default function RectangularTextReveal({
  children = "Rectangular text reveal in motion.",
  as: Tag = "div",
  className,
  baseColor = "#ea580c",
  overlayColor = "var(--color-foreground, #111111)",
  useOverlay = true,
  direction = "left",
  stagger = 0.2,
  coverDuration = 0.34,
  revealDuration = 0.42,
  overlayEnterDuration = 0.24,
  overlayExitDuration = 0.28,
  insetX = "0.08em",
  insetY = "0.08em",
  delay = 0,
  triggerStart = "top 85%",
  once = false,
  toggleActions = "play none none reset",
}: RectangularTextRevealProps) {
  const ref = React.useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const axis = AXIS[direction];
    const enter = ENTER_ORIGIN[direction];
    const exit = EXIT_ORIGIN[direction];
    CustomEase.create(EASE, "0.4,0,0.2,1");

    let tl: gsap.core.Timeline | null = null;
    let st: ScrollTrigger | null = null;

    // Runs on first split and again whenever fonts load or the width changes,
    // because SplitText reverts the DOM (removing our rects) before re-splitting.
    const build = (split: SplitText) => {
      const progress = tl?.progress() ?? 0;
      tl?.kill();
      st?.kill();

      const lines = split.lines as HTMLElement[];
      const masks = split.masks as HTMLElement[];
      tl = gsap.timeline({ paused: true, delay });

      if (reduced) {
        tl.fromTo(lines, { opacity: 0, y: REDUCED_Y }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12 });
      } else {
        const bleedY = toPx(insetY, masks[0] ?? el);

        lines.forEach((line, i) => {
          const mask = masks[i];
          // SplitText masks clip by default, which would cut off descenders under tight
          // line-heights and swallow the inset bleed.
          Object.assign(mask.style, { display: "block", position: "relative", width: "fit-content", maxWidth: "100%", overflow: "visible" });
          Object.assign(line.style, { display: "block", position: "relative", width: "fit-content", maxWidth: "100%", zIndex: "1" });
          gsap.set(line, { opacity: 0 });

          // Hug the glyphs plus the bleed, centred on them. Capping at the line
          // pitch means blocks on neighbouring lines can touch but never overlap.
          const glyphs = glyphSpan(line);
          const height = Math.min(line.offsetHeight, glyphs.bottom - glyphs.top + bleedY * 2);
          const top = (glyphs.top + glyphs.bottom - height) / 2;
          const base = makeRect(baseColor, insetX, top, height, 2);
          const overlay = useOverlay ? makeRect(overlayColor, insetX, top, height, 3) : null;
          mask.append(base, ...(overlay ? [overlay] : []));

          const at = i * stagger;
          const uncoverAt = at + coverDuration + 0.1;

          tl!.fromTo(base, { [axis]: 0, transformOrigin: enter }, { [axis]: 1, duration: coverDuration, ease: EASE }, at);
          tl!.set(line, { opacity: 1 }, at + coverDuration);
          tl!.to(base, { [axis]: 0, transformOrigin: exit, duration: revealDuration, ease: EASE }, uncoverAt + (overlay ? 0.2 : 0.12));

          if (overlay) {
            tl!.fromTo(overlay, { [axis]: 0, transformOrigin: enter }, { [axis]: 1, duration: overlayEnterDuration, ease: EASE }, at + 0.1);
            tl!.to(overlay, { [axis]: 0, transformOrigin: exit, duration: overlayExitDuration, ease: EASE }, uncoverAt + 0.15);
          }
        });
      }

      if (progress) tl.progress(progress);
      gsap.set(el, { autoAlpha: 1 });

      st = ScrollTrigger.create({
        trigger: el,
        start: triggerStart,
        once,
        animation: tl,
        toggleActions: once ? "play none none none" : toggleActions,
        onLeaveBack: once ? undefined : () => tl!.pause(0),
      });
    };

    const split = SplitText.create(el, {
      type: "lines",
      mask: "lines",
      tag: "span",
      linesClass: "rtr-line",
      autoSplit: true,
      onSplit: build,
    });

    return () => {
      tl?.kill();
      st?.kill();
      split.revert();
    };
  }, [
    baseColor,
    overlayColor,
    useOverlay,
    direction,
    stagger,
    coverDuration,
    revealDuration,
    overlayEnterDuration,
    overlayExitDuration,
    insetX,
    insetY,
    delay,
    triggerStart,
    once,
    toggleActions,
  ]);

  const Component = Tag as React.ComponentType<
    React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
  >;

  return (
    <Component ref={ref} className={className} style={{ visibility: "hidden" }}>
      {children}
    </Component>
  );
}
