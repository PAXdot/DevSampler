"use client";

import { useEffect, useRef } from "react";
import type { ElementType } from "react";

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Runs `frame` on every animation frame while the element is on screen; `frame` returns false to stop until the next `wake`. */
function useVisibleLoop(
  element: { current: Element | null },
  frame: (time: number) => boolean | void,
) {
  const step = useRef(frame);
  step.current = frame;
  const wake = useRef(() => {});
  useEffect(() => {
    const target = element.current;
    if (!target) return;
    let id = 0,
      visible = false;
    const tick = (time: number) => {
      id =
        step.current(time) === false || !visible
          ? 0
          : requestAnimationFrame(tick);
    };
    wake.current = () => {
      if (visible && !id) id = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = !!entry?.isIntersecting;
      if (visible) wake.current();
      else {
        cancelAnimationFrame(id);
        id = 0;
      }
    });
    observer.observe(target);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(id);
    };
  }, [element]);
  return wake;
}

/**
 * A big headline with a video playing inside its letters. The text stays real: selectable, and read by screen readers.
 * Until the video can draw, without JavaScript, and under reduced motion (which shows the first frame), it is ordinary type.
 */
export function VideoText({
  text,
  src,
  as: Tag = "h2",
  className = "",
}: {
  text: string;
  src: string;
  as?: ElementType;
  className?: string;
}) {
  const root = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const draw = () => {
    const element = root.current,
      surface = canvas.current,
      clip = video.current;
    const context = surface?.getContext("2d");
    if (!element || !surface || !clip || !context || clip.readyState < 2)
      return false;
    const box = element.getBoundingClientRect(),
      scale = Math.min(devicePixelRatio || 1, 2);
    const width = Math.round(box.width * scale),
      height = Math.round(box.height * scale);
    if (surface.width !== width || surface.height !== height) {
      surface.width = width;
      surface.height = height;
    }
    const style = getComputedStyle(element);
    context.setTransform(scale, 0, 0, scale, 0, 0);
    context.clearRect(0, 0, box.width, box.height);
    context.globalCompositeOperation = "source-over";
    context.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    context.letterSpacing =
      style.letterSpacing === "normal" ? "0px" : style.letterSpacing;
    context.textBaseline = "alphabetic";
    context.fillStyle = "#000";
    // Paint each word where the browser laid it out, so wrapping, alignment and spacing match the real text.
    const words = element.querySelector(".bs-videotext__text")!;
    const range = document.createRange();
    for (const node of words.childNodes) {
      const content = node.textContent ?? "";
      for (const match of content.matchAll(/\S+/g)) {
        range.setStart(node, match.index!);
        range.setEnd(node, match.index! + match[0].length);
        const rect = range.getClientRects()[0];
        if (!rect) continue;
        const metrics = context.measureText(match[0]);
        context.fillText(
          match[0],
          rect.left - box.left,
          rect.top -
            box.top +
            (rect.height -
              metrics.fontBoundingBoxAscent -
              metrics.fontBoundingBoxDescent) /
              2 +
            metrics.fontBoundingBoxAscent,
        );
      }
    }
    context.globalCompositeOperation = "source-in";
    const ratio = Math.max(
      box.width / clip.videoWidth,
      box.height / clip.videoHeight,
    );
    context.drawImage(
      clip,
      (box.width - clip.videoWidth * ratio) / 2,
      (box.height - clip.videoHeight * ratio) / 2,
      clip.videoWidth * ratio,
      clip.videoHeight * ratio,
    );
    element.dataset.ready = "";
    return !clip.paused;
  };
  const wake = useVisibleLoop(root, draw);
  useEffect(() => {
    const clip = video.current,
      element = root.current;
    if (!clip || !element) return;
    const still = reducedMotion();
    const start = () => {
      if (still) draw();
      else
        clip.play().then(
          () => wake.current(),
          () => draw(),
        );
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) start();
      else clip.pause();
    });
    clip.addEventListener(
      "loadeddata",
      () => {
        if (still) draw();
      },
      { once: true },
    );
    const redraw = () => {
      if (clip.paused) draw();
    };
    window.addEventListener("resize", redraw);
    document.fonts?.ready.then(redraw);
    observer.observe(element);
    return () => {
      observer.disconnect();
      clip.pause();
      window.removeEventListener("resize", redraw);
    };
  }, [src]);
  return (
    <Tag ref={root} className={`bs-videotext ${className}`}>
      <span className="bs-videotext__text">{text}</span>
      <canvas
        ref={canvas}
        className="bs-videotext__canvas"
        aria-hidden="true"
      />
      <video
        ref={video}
        src={src}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        className="bs-videotext__video"
      />
    </Tag>
  );
}

export default VideoText;
