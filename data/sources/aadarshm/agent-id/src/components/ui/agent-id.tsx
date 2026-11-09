"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

const DEFAULT_AVATAR_SRC = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" fill="none" shape-rendering="auto"><defs><g id="b"><path d="M119 47q15-1 29 3t23 18q5 12-6 20-11 4-23 2-31-6-61-14l-20-4-10-3q-2 0-3-4 2-5 9-7l20-7 18-3zm176 5q12 2 23 7l8 5q4 3 1 7-4 4-9 5-26 8-52 12l-9 1-8-4q-4-4-4-10 0-12 8-20 8-4 16-4 14-2 26 1" fill="#000"/></g><g id="e"><path d="M327 4q12 10 13 25 1 9-2 16c-3 5-10 5-13 0q-2-7-2-15-2-7-8-13-5-2-11 0c10 13 9 30 5 45q-3 9-10 16l-11 8q-8 3-14-2-7-7-7-18-2 8-6 13l-4-6q-1-10 2-21 6-20 21-35 10-11 25-16 12-3 22 3M123 9q29 12 41 41 5 10 4 22 0 4-3 4l-7-9q-7-13-16-25-12-15-30-19 9 15 9 34-2 16-12 30-8 10-20 10-9 0-16-5-13-11-14-28-2-12 1-22-2 5-6 8-7 6-13-1-4-5 0-12Q57 15 83 7q20-4 40 2" fill="#000"/></g><g id="m"><path d="M196 21c2 0 8 1 7 4q-3 4-9 5-24 4-49 11 0 9-3 17-8 19-24 33-12 9-26 8-10-2-15-11-6-9-4-19L54 80l-4 1 2-4q5-7 15-13a308 308 0 0 1 84-35q22-7 45-8m-63 24-27 9q-2 12-7 21-2-3-1-7l2-12-23 11q3 10 8 19 8 6 17 2 11-4 17-14 9-14 14-29" fill="#000"/></g><g id="n"><path d="M48 108v1q-6 13-20 18-5 2-9-1v-4q10-8 24-12z" fill="#000"/></g></defs><rect width="600" height="600" fill="#edf5fb"/><use transform="translate(115 124)" href="#b"/><use transform="translate(109 229)" href="#e"/><use transform="translate(173 400)" href="#m"/><use transform="translate(309 271)" href="#n"/></svg>',
)}`;

const CARD_TOP = 146;
const MAX_X = 154;
const MAX_Y = 282;
const GRAVITY = 690;
const VERTICAL_SPRING = 124;
const REST_Y = GRAVITY / VERTICAL_SPRING;

export type AgentIdProps = {
  agentName?: string;
  modelId?: string;
  reasoningEffort?: string;
  avatarSeed?: string;
  barcodeValue?: string;
  className?: string;
};

type MotionState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  dragging: boolean;
  keyboardGrabbed: boolean;
  pointerId: number | null;
  pointerOffsetX: number;
  pointerOffsetY: number;
};

type LayoutState = {
  width: number;
  height: number;
};

type RibbonPaths = {
  left: string;
  right: string;
};

const INITIAL_LAYOUT: LayoutState = { width: 560, height: 672 };

function createInitialMotion(): MotionState {
  return {
    x: 0,
    y: REST_Y,
    vx: 0,
    vy: 0,
    dragging: false,
    keyboardGrabbed: false,
    pointerId: null,
    pointerOffsetX: 0,
    pointerOffsetY: 0,
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function randomToken(prefix: string) {
  const randomValues = new Uint32Array(3);

  if (typeof crypto !== "undefined" && "getRandomValues" in crypto) {
    crypto.getRandomValues(randomValues);
  } else {
    randomValues[0] = Math.floor(Math.random() * 0xffffffff);
    randomValues[1] = Math.floor(Math.random() * 0xffffffff);
    randomValues[2] = Math.floor(Math.random() * 0xffffffff);
  }

  return `${prefix}-${Array.from(randomValues, (value) => value.toString(36)).join("")}`;
}

function randomBarcode() {
  const token = randomToken("id").replace(/[^a-z0-9]/gi, "").toUpperCase();
  return token.slice(0, 12).padEnd(12, "0");
}

function createBarcodeBars(value: string) {
  let state = 19;
  const bars: Array<{ dark: boolean; width: number }> = [
    { dark: true, width: 2 },
    { dark: false, width: 1 },
    { dark: true, width: 1 },
  ];

  for (const [index, character] of Array.from(value).entries()) {
    state = (state * 31 + character.charCodeAt(0) + index * 17) % 997;
    bars.push({ dark: true, width: 1 + (state % 3) });
    bars.push({ dark: false, width: 1 + ((state >> 2) % 2) });
    bars.push({ dark: true, width: 1 + ((state >> 4) % 3) });
    bars.push({ dark: false, width: 1 });
  }

  bars.push(
    { dark: true, width: 1 },
    { dark: false, width: 1 },
    { dark: true, width: 2 },
  );

  return bars;
}

function getRibbonPaths(layout: LayoutState, motion: MotionState): RibbonPaths {
  const apexX = layout.width / 2 + motion.x;
  const apexY = CARD_TOP + motion.y + 6;
  const offscreenY = -360;
  const leftExitX = layout.width * 0.32;
  const rightExitX = layout.width * 0.68;

  return {
    left: `M ${apexX} ${apexY} L ${leftExitX} ${offscreenY}`,
    right: `M ${apexX} ${apexY} L ${rightExitX} ${offscreenY}`,
  };
}

export default function AgentId({
  agentName = "Astra Vale",
  modelId = "Gpt 5.6 Sol",
  reasoningEffort = "Ultra",
  avatarSeed,
  barcodeValue,
  className,
}: AgentIdProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const motionRef = useRef<MotionState>(createInitialMotion());
  const layoutRef = useRef<LayoutState>(INITIAL_LAYOUT);
  const reducedMotionRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const renderMotionRef = useRef({ x: 0, y: REST_Y });
  const [motion, setMotion] = useState(renderMotionRef.current);
  const [layout, setLayout] = useState(INITIAL_LAYOUT);
  const [isDragging, setIsDragging] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [avatarFailed, setAvatarFailed] = useState(false);
  const [status, setStatus] = useState("Card is resting. Drag it and release to feel the elastic return.");
  const [resolvedBarcode, setResolvedBarcode] = useState(barcodeValue ?? "A5R7K2N9Q4V1");
  const id = useId();
  const instructionId = `agent-id-instructions-${id}`;
  const gradientId = `agent-id-ribbon-${id.replace(/:/g, "")}`;

  useEffect(() => {
    setResolvedBarcode(barcodeValue ?? randomBarcode());
    setAvatarFailed(false);
  }, [avatarSeed, barcodeValue]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReducedMotion = () => {
      reducedMotionRef.current = mediaQuery.matches;
      setReducedMotion(mediaQuery.matches);

      if (mediaQuery.matches) {
        const nextMotion = motionRef.current;
        nextMotion.x = 0;
        nextMotion.y = REST_Y;
        nextMotion.vx = 0;
        nextMotion.vy = 0;
        renderMotionRef.current = { x: 0, y: REST_Y };
        setMotion(renderMotionRef.current);
      }
    };

    syncReducedMotion();
    mediaQuery.addEventListener("change", syncReducedMotion);

    return () => mediaQuery.removeEventListener("change", syncReducedMotion);
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    const card = cardRef.current;

    if (!scene || !card) return;

    let animationFrame: number | null = null;
    let lastFrameTime = performance.now();

    const render = () => {
      const nextRender = {
        x: motionRef.current.x,
        y: motionRef.current.y,
      };

      renderMotionRef.current = nextRender;
      setMotion(nextRender);
    };

    const stopAnimation = () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }

      frameRef.current = null;
    };

    const isSettled = () => {
      const nextMotion = motionRef.current;
      return (
        Math.abs(nextMotion.x) < 0.08 &&
        Math.abs(nextMotion.y - REST_Y) < 0.08 &&
        Math.abs(nextMotion.vx) < 0.08 &&
        Math.abs(nextMotion.vy) < 0.08
      );
    };

    const animate = (now: number) => {
      animationFrame = null;
      frameRef.current = null;

      const nextMotion = motionRef.current;

      if (nextMotion.dragging || reducedMotionRef.current) {
        render();
        return;
      }

      const deltaTime = Math.min((now - lastFrameTime) / 1000, 0.032);
      lastFrameTime = now;

      const springX = -128 * nextMotion.x - 18 * nextMotion.vx;
      const springY = GRAVITY - VERTICAL_SPRING * nextMotion.y - 19 * nextMotion.vy;
      nextMotion.vx += springX * deltaTime;
      nextMotion.vy += springY * deltaTime;
      nextMotion.x += nextMotion.vx * deltaTime;
      nextMotion.y += nextMotion.vy * deltaTime;

      if (isSettled()) {
        nextMotion.x = 0;
        nextMotion.y = REST_Y;
        nextMotion.vx = 0;
        nextMotion.vy = 0;
        render();
        return;
      }

      render();
      animationFrame = requestAnimationFrame(animate);
      frameRef.current = animationFrame;
    };

    const startAnimation = () => {
      if (reducedMotionRef.current || motionRef.current.dragging || animationFrame !== null) return;
      lastFrameTime = performance.now();
      animationFrame = requestAnimationFrame(animate);
      frameRef.current = animationFrame;
    };

    const syncLayout = () => {
      const bounds = scene.getBoundingClientRect();
      const nextLayout = { width: bounds.width, height: bounds.height };
      layoutRef.current = nextLayout;
      setLayout(nextLayout);
    };

    const resizeObserver = new ResizeObserver(syncLayout);
    resizeObserver.observe(scene);
    syncLayout();

    const resetToRest = (message = "Card reset to its resting position.") => {
      const nextMotion = motionRef.current;
      nextMotion.dragging = false;
      nextMotion.keyboardGrabbed = false;
      nextMotion.pointerId = null;
      nextMotion.x = 0;
      nextMotion.y = REST_Y;
      nextMotion.vx = 0;
      nextMotion.vy = 0;
      setIsDragging(false);
      setStatus(message);
      render();
      stopAnimation();
    };

    const releaseCard = (message = "Released. The elastic ribbon is bringing the card back.") => {
      const nextMotion = motionRef.current;
      nextMotion.dragging = false;
      nextMotion.keyboardGrabbed = false;
      nextMotion.pointerId = null;
      setIsDragging(false);

      if (reducedMotionRef.current) {
        resetToRest("Released. Motion is reduced, so the card returned without bouncing.");
        return;
      }

      setStatus(message);
      startAnimation();
    };

    const beginKeyboardGrab = () => {
      const nextMotion = motionRef.current;
      nextMotion.dragging = true;
      nextMotion.keyboardGrabbed = true;
      nextMotion.vx = 0;
      nextMotion.vy = 0;
      setIsDragging(true);
      setStatus("Card grabbed with the keyboard. Use arrow keys to pull it, then press Space or Enter to release.");
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;

      event.preventDefault();
      const nextMotion = motionRef.current;
      const cardBounds = card.getBoundingClientRect();

      nextMotion.dragging = true;
      nextMotion.keyboardGrabbed = false;
      nextMotion.pointerId = event.pointerId;
      nextMotion.pointerOffsetX = event.clientX - (cardBounds.left + cardBounds.width / 2);
      nextMotion.pointerOffsetY = event.clientY - (cardBounds.top + cardBounds.height / 2);
      nextMotion.vx = 0;
      nextMotion.vy = 0;
      setIsDragging(true);
      setStatus("Card grabbed. Pull it away from the anchor and release to watch it bounce back.");
      card.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      const nextMotion = motionRef.current;
      if (!nextMotion.dragging || nextMotion.pointerId !== event.pointerId) return;

      const sceneBounds = scene.getBoundingClientRect();
      const cardBounds = card.getBoundingClientRect();
      const sceneCenterX = sceneBounds.left + sceneBounds.width / 2;
      const baseCardCenterY = sceneBounds.top + CARD_TOP + REST_Y + cardBounds.height / 2;

      const nextX = event.clientX - sceneCenterX - nextMotion.pointerOffsetX;
      const nextY = event.clientY - baseCardCenterY - nextMotion.pointerOffsetY;

      nextMotion.x = clamp(nextX, -MAX_X, MAX_X);
      nextMotion.y = clamp(nextY, -72, MAX_Y);
      nextMotion.vx = 0;
      nextMotion.vy = 0;
      render();
    };

    const onPointerUp = (event: PointerEvent) => {
      const nextMotion = motionRef.current;
      if (nextMotion.pointerId !== event.pointerId) return;

      if (card.hasPointerCapture(event.pointerId)) {
        card.releasePointerCapture(event.pointerId);
      }

      releaseCard();
    };

    const onPointerCancel = (event: PointerEvent) => {
      const nextMotion = motionRef.current;
      if (nextMotion.pointerId !== event.pointerId) return;

      if (card.hasPointerCapture(event.pointerId)) {
        card.releasePointerCapture(event.pointerId);
      }

      releaseCard("Drag cancelled. The card is returning to rest.");
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const nextMotion = motionRef.current;

      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();

        if (nextMotion.keyboardGrabbed) {
          releaseCard("Released with the keyboard. The elastic ribbon is bringing the card back.");
        } else {
          beginKeyboardGrab();
        }

        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        resetToRest();
        return;
      }

      const direction = {
        ArrowLeft: [-1, 0],
        ArrowRight: [1, 0],
        ArrowUp: [0, -1],
        ArrowDown: [0, 1],
      }[event.key];

      if (!direction) return;
      event.preventDefault();

      if (!nextMotion.keyboardGrabbed) beginKeyboardGrab();

      const step = event.shiftKey ? 28 : 12;
      nextMotion.x = clamp(nextMotion.x + direction[0] * step, -MAX_X, MAX_X);
      nextMotion.y = clamp(nextMotion.y + direction[1] * step, -72, MAX_Y);
      render();
    };

    const onBlur = () => {
      if (motionRef.current.keyboardGrabbed) {
        releaseCard("Focus left the card. It is returning to rest.");
      }
    };

    card.addEventListener("pointerdown", onPointerDown);
    card.addEventListener("pointermove", onPointerMove);
    card.addEventListener("pointerup", onPointerUp);
    card.addEventListener("pointercancel", onPointerCancel);
    card.addEventListener("keydown", onKeyDown);
    card.addEventListener("blur", onBlur);

    return () => {
      card.removeEventListener("pointerdown", onPointerDown);
      card.removeEventListener("pointermove", onPointerMove);
      card.removeEventListener("pointerup", onPointerUp);
      card.removeEventListener("pointercancel", onPointerCancel);
      card.removeEventListener("keydown", onKeyDown);
      card.removeEventListener("blur", onBlur);
      resizeObserver.disconnect();
      stopAnimation();
    };
  }, []);

  const ribbonPaths = useMemo(() => getRibbonPaths(layout, { ...motionRef.current, ...motion }), [layout, motion]);
  const avatarUrl = useMemo(
    () =>
      avatarSeed
        ? `https://api.dicebear.com/10.x/lorelei-neutral/svg?seed=${encodeURIComponent(avatarSeed)}&backgroundColor=edf5fb`
        : DEFAULT_AVATAR_SRC,
    [avatarSeed],
  );
  const barcodeBars = useMemo(() => createBarcodeBars(resolvedBarcode), [resolvedBarcode]);

  return (
    <div
      ref={sceneRef}
      className={cn("relative isolate h-[42rem] w-full max-w-[35rem] overflow-visible", className)}
      data-agent-id-scene
    >
      <style>{`
        @font-face {
          font-family: "Louize";
          src: url("https://cdn.21st.dev/assets/mirror/31/31a5a75fe4ab8b05c7013ee0f0548fe2472cb133789c37e70313f005efbf8210.woff") format("woff2");
          font-display: swap;
          font-style: normal;
          font-weight: 400;
        }
        @font-face {
          font-family: "Geist Pixel";
          src: url("https://cdn.21st.dev/assets/mirror/2e/2ed63dce777ba4093eb48c7f3f0d8f13b1ab38d6b450bba80f848903926447a6.ttf") format("truetype");
          font-display: swap;
          font-style: normal;
          font-weight: 400;
        }
        [data-agent-id-card] {
          color: #000000;
          font-family: "Louize";
        }
        [data-agent-id-card] .agent-id-pixel {
          font-family: "Geist Pixel";
        }
      `}</style>

      <div className="pointer-events-none absolute inset-x-0 bottom-12 z-0 h-20 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.18),transparent_68%)] blur-2xl" />

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
        preserveAspectRatio="none"
        viewBox={`0 0 ${layout.width} ${layout.height}`}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#d8ecfb" />
            <stop offset="0.52" stopColor="#a4cae4" />
            <stop offset="1" stopColor="#7da8c6" />
          </linearGradient>
          <filter id={`${gradientId}-shadow`} height="180%" width="180%" x="-40%" y="-40%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        <path d={ribbonPaths.left} fill="none" filter={`url(#${gradientId}-shadow)`} opacity="0.2" stroke="#000000" strokeLinecap="round" strokeWidth="64" />
        <path d={ribbonPaths.right} fill="none" filter={`url(#${gradientId}-shadow)`} opacity="0.2" stroke="#000000" strokeLinecap="round" strokeWidth="64" />
        <path d={ribbonPaths.left} fill="none" opacity="0.98" stroke={`url(#${gradientId})`} strokeLinecap="round" strokeWidth="48" />
        <path d={ribbonPaths.right} fill="none" opacity="0.98" stroke={`url(#${gradientId})`} strokeLinecap="round" strokeWidth="48" />
      </svg>

      <article
        ref={cardRef}
        aria-describedby={instructionId}
        aria-label={`${agentName} agent identity card`}
        className={cn(
          "absolute left-1/2 top-0 z-30 h-[25.125rem] w-[min(17.625rem,82vw)] origin-top cursor-grab touch-none select-none overflow-hidden rounded-[1rem] bg-[#fafaf7] text-black shadow-[0_28px_34px_-22px_rgba(0,0,0,0.48)] outline-none transition-[box-shadow] duration-200 active:cursor-grabbing focus-visible:ring-2 focus-visible:ring-black/80 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent",
          isDragging && "shadow-[0_36px_44px_-20px_rgba(0,0,0,0.56)]",
        )}
        data-agent-id-card
        role="group"
        style={{
          transform: `translate3d(calc(-50% + ${motion.x}px), ${CARD_TOP + motion.y}px, 0)`,
        }}
        tabIndex={0}
      >
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 z-40 h-3.5 w-16 -translate-x-1/2 rounded-b-full bg-[#d9d9d5] shadow-[inset_0_1px_0_#ffffff,0_2px_5px_rgba(0,0,0,0.16)]">
          <span className="absolute left-1/2 -top-1 h-4 w-[3px] -translate-x-1/2 rounded-b-full bg-[#777773]" />
        </div>

        <div className="relative flex h-full flex-col items-center px-8 pb-6 pt-8">
          <div className="relative aspect-square h-28 w-28 shrink-0 overflow-hidden rounded-full bg-[#ededeb] shadow-[0_10px_18px_-12px_rgba(0,0,0,0.58)]">
            {avatarSeed && !avatarFailed ? (
              <img
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                src={DEFAULT_AVATAR_SRC}
              />
            ) : null}
            {avatarFailed ? (
              <div className="agent-id-pixel flex h-full w-full items-center justify-center text-3xl tracking-[0.16em] text-black">
                {agentName.slice(0, 2).toUpperCase()}
              </div>
            ) : (
              <img
                alt={`${agentName} profile portrait`}
                className={cn("h-full w-full object-cover", avatarSeed && "relative z-10")}
                decoding="async"
                fetchPriority="high"
                onError={() => setAvatarFailed(true)}
                referrerPolicy="no-referrer"
                src={avatarUrl}
              />
            )}
          </div>

          <h2 className="mt-5 max-w-full shrink-0 truncate text-center text-[2rem] leading-[1.05]">{agentName}</h2>

          <dl className="agent-id-pixel mt-5 flex w-full shrink-0 flex-col items-center gap-4 text-center">
            <div>
              <dt className="text-[0.55rem] uppercase tracking-[0.22em]">MODEL ID</dt>
              <dd className="mt-1 text-[0.92rem] leading-tight">{modelId}</dd>
            </div>
            <div>
              <dt className="text-[0.55rem] uppercase tracking-[0.22em]">REASONING EFFORT</dt>
              <dd className="mt-1 text-[0.92rem] leading-tight">{reasoningEffort}</dd>
            </div>
          </dl>

          <div aria-label={`Agent barcode ${resolvedBarcode}`} className="mt-auto flex w-full shrink-0 flex-col items-center pt-4" role="img">
            <div className="flex h-14 w-full items-stretch justify-center gap-[2px]">
              {barcodeBars.map((bar, index) => (
                <span
                  aria-hidden="true"
                  className={bar.dark ? "bg-black" : "bg-transparent"}
                  key={`${index}-${bar.width}`}
                  style={{ width: `${bar.width}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </article>

      <p className="sr-only" id={instructionId}>
        Drag this agent card with a pointer and release it to watch the elastic ribbon bounce it back. With the card focused, press Space or Enter to grab it, use arrow keys to pull it, and press Space or Enter to release it. Press Escape to reset it. {reducedMotion ? "Reduced motion is enabled, so the card returns without animation." : ""}
      </p>
      <p aria-live="polite" className="sr-only">{status}</p>
    </div>
  );
}
