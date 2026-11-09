// Built using Hyperiux Vault: https://vault.hyperiux.com
"use client";

import { useEffect, useId, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return prefersReducedMotion;
}

interface PixelateSvgFilterProps {
  id?: string;
  size?: number;
  crossLayers?: boolean;
}

export function PixelateSvgFilter({ id: idProp, size: propSize = 16, crossLayers = false }: PixelateSvgFilterProps) {
  const generatedId = `pixelate-filter-${useId().replace(/:/g, "")}`;
  const id = idProp ?? generatedId;
  const size = Math.max(2, propSize);
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute h-0 w-0 overflow-hidden">
      <defs>
        <filter id={id} x="0" y="0" width="1" height="1">
          {/* Base pixelation */}
          <feConvolveMatrix
            kernelMatrix="1 1 1
 1 1 1
 1 1 1"
            result="AVG"
          />

          <feFlood x="1" y="1" width="1" height="1" />

          <feComposite operator="arithmetic" k1="0" k2="1" k3="0" k4="0" width={size} height={size} />

          <feTile result="TILE" />

          <feComposite in="AVG" in2="TILE" operator="in" />

          <feMorphology operator="dilate" radius={size / 2} result="NORMAL" />

          {crossLayers && (
            <>
              {/* Horizontal fallback */}
              <feConvolveMatrix
                kernelMatrix="1 1 1
 1 1 1
 1 1 1"
                result="AVG"
              />
              <feFlood x="1" y="1" width="1" height="1" />
              <feComposite in2="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="0" k4="0" width={size / 2} height={size} />
              <feTile result="TILE" />
              <feComposite in="AVG" in2="TILE" operator="in" />
              <feMorphology operator="dilate" radius={size / 2} result="FALLBACKX" />

              {/* Vertical fallback */}
              <feConvolveMatrix
                kernelMatrix="1 1 1
 1 1 1
 1 1 1"
                result="AVG"
              />
              <feFlood x="1" y="1" width="1" height="1" />
              <feComposite in2="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="0" k4="0" width={size} height={size / 2} />
              <feTile result="TILE" />
              <feComposite in="AVG" in2="TILE" operator="in" />
              <feMorphology operator="dilate" radius={size / 2} result="FALLBACKY" />

              <feMerge>
                <feMergeNode in="FALLBACKX" />
                <feMergeNode in="FALLBACKY" />
                <feMergeNode in="NORMAL" />
              </feMerge>
            </>
          )}

          {!crossLayers && <feMergeNode in="NORMAL" />}
        </filter>
      </defs>
    </svg>
  );
}

export interface PixelatedImageEffectProps {
  /** Image URL. */
  src?: string;
  /** Alt text for the image. */
  alt?: string;
  imageClassName?: string;
  /** Baseline pixel size for the SVG pixelation filter, in px. */
  pixelSize?: number;
  /** Smoothing duration for pixel-size changes, in seconds. */
  duration?: number;
  /** Strength of cursor-driven pixelation changes. */
  mouseReactivity?: number;
  /** Instruction heading shown above the image on desktop widths. */
  desktopHint?: string;
  /** Instruction heading shown above the image on narrow widths. */
  mobileHint?: string;
  /** Extra classes on the root container — use to size an instance for a side-by-side layout instead of the full-viewport default. */
  className?: string;
}

const DEFAULT_SRC = "https://cdn.21st.dev/assets/mirror/e9/e9e44c95f07aa428be0904d841dd9ce4ee2f0a6621d13883751ef98252522b00.jpg";

/**
 * An SVG filter-based image pixelation effect: pixel size tracks the
 * cursor's horizontal position across the image (clear on the left,
 * pixelated on the right), tweened toward the target each frame. Since the
 * whole effect IS motion, `prefers-reduced-motion` can't meaningfully change
 * its behavior — it shows an explanatory notice instead of pretending to.
 */
export default function PixelatedImageEffect({
  src = DEFAULT_SRC,
  alt = "",
  pixelSize = 16,
  duration = 0.25,
  mouseReactivity = 1,
  imageClassName = "",
  desktopHint = "Move cursor left in the image block for a clear image, right for more pixelation.",
  mobileHint = "Click left in image block for clear image, right for more pixelated",
  className = "",
}: PixelatedImageEffectProps) {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const isTouching = useRef(false);
  const animationRef = useRef<number | null>(null);
  const [renderedPixelSize, setRenderedPixelSize] = useState(pixelSize);
  const [targetPixelSize, setTargetPixelSize] = useState(pixelSize);
  const [prevResolvedPixelSize, setPrevResolvedPixelSize] = useState(pixelSize);
  const pixelateFilterId = `pixelate-filter-${useId().replace(/:/g, "")}`;
  const prefersReducedMotion = usePrefersReducedMotion();
  const resolvedSrc = typeof src === "string" && src.trim() ? src.trim() : DEFAULT_SRC;
  const resolvedPixelSize = Math.min(Math.max(Number(pixelSize) || 16, 1), 64);
  const resolvedDuration = Math.max(Number(duration) || 0, 0);
  const resolvedMouseReactivity = Math.min(Math.max(Number(mouseReactivity) || 0, 0), 2);

  // Reset the animation target whenever the resolved pixelSize prop changes,
  // without clobbering the interactive target set by pointer movement below.
  // This is pure derived state (no browser API), so it's adjusted directly
  // during render instead of via an effect.
  if (resolvedPixelSize !== prevResolvedPixelSize) {
    setPrevResolvedPixelSize(resolvedPixelSize);
    setTargetPixelSize(resolvedPixelSize);
  }

  useEffect(() => {
    if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);

    if (resolvedDuration === 0) {
      // Shares this effect with the rAF-driven tween below (same
      // cancelAnimationFrame bookkeeping) - keeping the instant-jump case
      // here preserves a single source of truth for animation timing.
      setRenderedPixelSize(targetPixelSize);
      return undefined;
    }

    const startValue = renderedPixelSize;
    const distance = targetPixelSize - startValue;
    const startTime = performance.now();
    const durationMs = resolvedDuration * 1000;

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setRenderedPixelSize(startValue + distance * eased);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    };
    // renderedPixelSize is only read here to snapshot the tween's starting
    // value, and this same effect updates it every animation frame (see
    // setRenderedPixelSize above). Depending on it would restart the tween
    // from scratch on every frame instead of animating smoothly.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedDuration, targetPixelSize]);

  const updatePixel = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;

    const pointerPixelSize = Math.min(Math.max(x / 30, 1), 64);
    const nextPixelSize = resolvedPixelSize + (pointerPixelSize - resolvedPixelSize) * resolvedMouseReactivity;
    setTargetPixelSize(Math.min(Math.max(nextPixelSize, 1), 64));
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    isTouching.current = true;
    updatePixel(event);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" && !isTouching.current) return;
    updatePixel(event);
  };

  const handlePointerUp = () => {
    isTouching.current = false;
  };

  return (
    <div className={`relative flex h-dvh w-full flex-col items-center justify-center gap-6 overflow-hidden px-4 pt-6 ${className}`.trim()}>
      <h1 className="w-[80%] text-center text-lg max-[1025px]:hidden">{desktopHint}</h1>

      <h2 className="mx-auto hidden w-[85%] text-center text-sm max-[1025px]:block">{mobileHint}</h2>

      <PixelateSvgFilter id={pixelateFilterId} size={renderedPixelSize} crossLayers />

      <div
        ref={imageRef}
        className="relative h-[55vh] w-full max-w-lg touch-none overflow-hidden max-md:max-w-[90%] max-[1025px]:max-w-[90%]"
        style={{ filter: `url(#${pixelateFilterId})` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <img src={resolvedSrc} alt={alt} className={`absolute inset-0 object-cover ${imageClassName}`.trim()} />
      </div>

      {prefersReducedMotion && (
        <div
          aria-live="polite"
          className="pointer-events-none fixed bottom-4 right-4 z-40 w-fit max-w-65 rounded-md border border-white/15 bg-white/5 p-3 text-center backdrop-blur-sm max-[1025px]:hidden"
        >
          <h2 className="text-sm leading-none text-white">The pixels keep shifting.</h2>
          <p className="mt-2 text-xs leading-5 text-white/65">
            Pixelated Image Effect changes pixelation based on cursor position in real time. Since the transition is
            driven entirely by motion, reduced motion can&apos;t be applied here.
          </p>
        </div>
      )}
    </div>
  );
}
