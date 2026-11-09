"use client";

import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
function ArrowLeft({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5m7 7-7-7 7-7" />
    </svg>
  );
}
function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  );
}
export interface CompareImage {
  src: string;
  alt: string;
  label: string;
  filter?: string;
}
export interface LenticularCompareProps {
  before: CompareImage;
  after: CompareImage;
  facets?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  aspectRatio?: number;
  /** Explicit accessibility/testing override; never disables the system preference. */
  forceReducedMotion?: boolean;
}
const clamp = (value: number) =>
  Number.isFinite(value) ? Math.max(0, Math.min(1, value)) : 0;
type ImageSize = { width: number; height: number };
/** Each slice is a physical two-face prism, not a crossfade or a split overlay. */
function Facet({
  i,
  count,
  progress,
  before,
  after,
  depth,
  stageWidth,
  stageHeight,
  beforeSize,
  afterSize,
}: {
  i: number;
  count: number;
  progress: MotionValue<number>;
  before: CompareImage;
  after: CompareImage;
  depth: number;
  stageWidth: number;
  stageHeight: number;
  beforeSize: ImageSize;
  afterSize: ImageSize;
}) {
  const angle = useTransform(
    progress,
    (value) => -90 * clamp(value * 1.16 - (i / (count - 1)) * 0.16),
  );
  const lightA = useTransform(
    angle,
    (a) =>
      `${before.filter ?? ""} brightness(${0.73 + 0.27 * Math.cos((a * Math.PI) / 180)})`,
  );
  const lightB = useTransform(
    angle,
    (a) =>
      `${after.filter ?? ""} brightness(${0.73 + 0.27 * Math.cos(((a + 90) * Math.PI) / 180)})`,
  );
  const crop = (size: ImageSize): CSSProperties => {
    const scale = Math.max(stageWidth / size.width, stageHeight / size.height);
    const imageWidth = size.width * scale,
      imageHeight = size.height * scale;
    return {
      backgroundSize: `${imageWidth}px ${imageHeight}px`,
      backgroundPosition: `${-(imageWidth - stageWidth) / 2 - (i * stageWidth) / count}px ${-(imageHeight - stageHeight) / 2}px`,
    };
  };
  return (
    <div
      className="facet-window"
      style={{
        left: `${(i / count) * 100}%`,
        width: `${100 / count + 0.035}%`,
      }}
      aria-hidden="true"
    >
      <motion.div
        className="facet-prism"
        style={{ rotateY: angle, z: -depth / 2 }}
      >
        <motion.div
          className="facet-face facet-original"
          style={{
            ...crop(beforeSize),
            backgroundImage: `url("${before.src}")`,
            transform: `translateZ(${depth / 2}px)`,
            filter: lightA,
          }}
        />
        <motion.div
          className="facet-face facet-grade"
          style={{
            ...crop(afterSize),
            backgroundImage: `url("${after.src}")`,
            transform: `rotateY(90deg) translateZ(${depth / 2}px)`,
            filter: lightB,
          }}
        />
      </motion.div>
    </div>
  );
}
function LenticularCompareView({
  before,
  after,
  facets = 24,
  defaultValue = 0.5,
  onValueChange,
  aspectRatio = 1.5,
  forceReducedMotion = false,
}: LenticularCompareProps) {
  const safeRatio =
    Number.isFinite(aspectRatio) && aspectRatio > 0 ? aspectRatio : 1.5;
  const count = Math.max(
      8,
      Math.min(40, Math.round(Number.isFinite(facets) ? facets : 24)),
    ),
    [value, setValue] = useState(clamp(defaultValue)),
    [width, setWidth] = useState(0),
    [dragging, setDragging] = useState(false),
    [loading, setLoading] = useState(true),
    [failed, setFailed] = useState(false),
    [retryKey, setRetryKey] = useState(0),
    [dimensions, setDimensions] = useState({
      before: { width: 3, height: 2 },
      after: { width: 3, height: 2 },
    });
  const stage = useRef<HTMLDivElement>(null),
    pointer = useRef<number | null>(null),
    inputId = useId();
  const systemReduced = useReducedMotion();
  const reduced = Boolean(systemReduced || forceReducedMotion);
  const target = useMotionValue(value),
    spring = useSpring(target, { stiffness: 265, damping: 34, mass: 0.72 });
  const progress = reduced ? target : spring;
  const beforeOpacity = useTransform(progress, (p) =>
      p < 0.012 ? 1 - p / 0.012 : 0,
    ),
    afterOpacity = useTransform(progress, (p) =>
      p > 0.988 ? (p - 0.988) / 0.012 : 0,
    );
  const facetsOpacity = useTransform(progress, (p) =>
    p <= 0.002 || p >= 0.998 ? 0 : 1,
  );
  useLayoutEffect(() => {
    if (!stage.current) return;
    const observer = new ResizeObserver((entries) =>
      setWidth(entries[0].contentRect.width),
    );
    observer.observe(stage.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    setLoading(true);
    setFailed(false);
    let cancelled = false;
    Promise.all(
      [before.src, after.src].map(
        (src) =>
          new Promise<ImageSize>((resolve, reject) => {
            const image = new Image();
            image.onload = () =>
              resolve({
                width: image.naturalWidth || 3,
                height: image.naturalHeight || 2,
              });
            image.onerror = () => reject();
            image.src = src;
          }),
      ),
    )
      .then(([beforeSize, afterSize]) => {
        if (!cancelled) {
          setDimensions({ before: beforeSize, after: afterSize });
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setLoading(false);
          setFailed(true);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [before.src, after.src, retryKey]);
  function update(next: number) {
    const normalized = reduced ? (clamp(next) < 0.5 ? 0 : 1) : clamp(next);
    setValue(normalized);
    target.set(normalized);
    onValueChange?.(normalized);
  }
  useEffect(() => {
    if (reduced) update(value < 0.5 ? 0 : 1);
  }, [reduced]);
  function fromPointer(clientX: number) {
    const bounds = stage.current?.getBoundingClientRect();
    if (bounds) update((clientX - bounds.left) / bounds.width);
  }
  return (
    <section
      className={`lenticular-compare ${dragging ? "dragging" : ""} ${reduced ? "reduced" : ""}`}
      aria-label={`${before.label} and ${after.label} image comparison`}
    >
      <div className="comparison-toolbar">
        <div className="comparison-labels">
          <button
            className={value === 0 ? "active" : ""}
            onClick={() => update(0)}
            aria-pressed={value === 0}
          >
            <span>A</span>
            {before.label}
          </button>
          <i />
          <button
            className={value === 1 ? "active" : ""}
            onClick={() => update(1)}
            aria-pressed={value === 1}
          >
            <span>B</span>
            {after.label}
          </button>
        </div>
        <span className="angle-readout" aria-hidden="true">
          {String(Math.round(value * 90)).padStart(2, "0")}
          <sup>°</sup>
        </span>
      </div>
      <div
        ref={stage}
        className="optical-stage"
        style={{ aspectRatio: safeRatio }}
        aria-busy={loading}
        onPointerDown={(e) => {
          if (e.button !== 0 || failed) return;
          pointer.current = e.pointerId;
          stage.current?.setPointerCapture(e.pointerId);
          setDragging(true);
          fromPointer(e.clientX);
        }}
        onPointerMove={(e) => {
          if (pointer.current === e.pointerId) fromPointer(e.clientX);
        }}
        onPointerUp={(e) => {
          if (pointer.current !== e.pointerId) return;
          pointer.current = null;
          setDragging(false);
          stage.current?.releasePointerCapture(e.pointerId);
        }}
        onPointerCancel={() => {
          pointer.current = null;
          setDragging(false);
        }}
        onLostPointerCapture={() => {
          pointer.current = null;
          setDragging(false);
        }}
      >
        <img
          className="comparison-underlay"
          src={before.src}
          alt={
            value === 0
              ? before.alt
              : value === 1
                ? after.alt
                : `Optical comparison: ${before.alt}; ${after.alt}`
          }
          draggable="false"
          style={{ filter: before.filter }}
        />
        {!reduced && !loading && !failed && (
          <motion.div className="facets" style={{ opacity: facetsOpacity }}>
            {Array.from({ length: count }, (_, i) => (
              <Facet
                key={i}
                i={i}
                count={count}
                progress={progress}
                before={before}
                after={after}
                depth={width / count}
                stageWidth={width}
                stageHeight={width / safeRatio}
                beforeSize={dimensions.before}
                afterSize={dimensions.after}
              />
            ))}
          </motion.div>
        )}
        {reduced ? (
          <img
            className="endpoint-image"
            src={value < 0.5 ? before.src : after.src}
            alt=""
            aria-hidden="true"
            style={{ filter: value < 0.5 ? before.filter : after.filter }}
            draggable="false"
          />
        ) : (
          <>
            <motion.img
              className="endpoint-image endpoint-original"
              src={before.src}
              alt=""
              aria-hidden="true"
              style={{ opacity: beforeOpacity, filter: before.filter }}
              draggable="false"
            />
            <motion.img
              className="endpoint-image endpoint-grade"
              src={after.src}
              alt=""
              aria-hidden="true"
              style={{ opacity: afterOpacity, filter: after.filter }}
              draggable="false"
            />
          </>
        )}
        {loading && (
          <div className="image-loading" role="status">
            Loading image
          </div>
        )}
        {failed && (
          <div className="image-loading error" role="alert">
            <p>Image unavailable</p>
            <button onClick={() => setRetryKey((value) => value + 1)}>
              Try again
            </button>
          </div>
        )}
        <span className="optical-edge" aria-hidden="true" />
      </div>
      <div className="comparison-controls">
        <span className="control-arrow" aria-hidden="true">
          <ArrowLeft size={14} />
        </span>
        <label className="sr-only" htmlFor={inputId}>
          Comparison angle
        </label>
        <input
          id={inputId}
          type="range"
          min="0"
          max="100"
          step={reduced ? 100 : 1}
          value={Math.round(value * 100)}
          aria-valuetext={
            reduced
              ? value < 0.5
                ? before.label
                : after.label
              : `${Math.round(value * 100)} percent ${after.label.toLowerCase()}`
          }
          onChange={(e) => update(Number(e.target.value) / 100)}
        />
        <span className="control-arrow" aria-hidden="true">
          <ArrowRight size={14} />
        </span>
        <span className="control-hint">
          {reduced ? "A / B" : "Drag to compare"}
        </span>
      </div>
    </section>
  );
}

const LENTICULAR_CSS =
  '.lp-root{box-sizing:border-box;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#edeee7;background:#111211;width:100%;}\n.lp-root * {\n  box-sizing: border-box;\n  scrollbar-width: none;\n}\n.lp-root *::-webkit-scrollbar {\n  display: none;\n}\n.lp-root button,.lp-root input {\n  font: inherit;\n}\n.lp-root button {\n  background: none;\n  border: 0;\n  color: inherit;\n  cursor: pointer;\n  padding: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n.lp-root button:focus-visible,.lp-root input:focus-visible {\n  outline: 2px solid #d1efaa;\n  outline-offset: 5px;\n}\n.lp-root button:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.lp-root h1,.lp-root p {\n  margin: 0;\n}\n.lp-root .sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.lp-root .comparison-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.lp-root .comparison-labels {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n.lp-root .comparison-labels > button {\n  min-height: 44px;\n  display: flex;\n  gap: 9px;\n  align-items: center;\n  font-size: 13px;\n  color: #a5ae98;\n  transition: color 0.2s;\n}\n.lp-root .comparison-labels > button > span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 19px;\n  height: 19px;\n  border: 1px solid #414c36;\n  color: #7e906d;\n  font:\n    9px ui-monospace,\n    monospace;\n  transition:\n    border-color 0.2s,\n    color 0.2s;\n}\n.lp-root .comparison-labels > button:hover,.lp-root .comparison-labels > button.active {\n  color: #f1f4ea;\n}\n.lp-root .comparison-labels > button.active > span {\n  border-color: #b8d49b;\n  color: #d9edbf;\n}\n.lp-root .comparison-labels > i {\n  height: 13px;\n  width: 1px;\n  background: #3a442f;\n}\n.lp-root .angle-readout {\n  font:\n    25px ui-monospace,\n    monospace;\n  letter-spacing: -1.3px;\n  color: #d4dfc5;\n}\n.lp-root .angle-readout sup {\n  font-size: 12px;\n  margin-left: 2px;\n  color: #7f916d;\n}\n.lp-root .optical-stage {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  width: 100%;\n  background: #23271e;\n  cursor: ew-resize;\n  touch-action: pan-y;\n  user-select: none;\n  contain: layout paint;\n}\n.lp-root .comparison-underlay,.lp-root .endpoint-image {\n  position: absolute;\n  inset: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  pointer-events: none;\n  user-select: none;\n}\n.lp-root .comparison-underlay {\n  z-index: 0;\n}\n.lp-root .facets {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  pointer-events: none;\n}\n.lp-root .facet-window {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  overflow: hidden;\n  perspective: 850px;\n  isolation: isolate;\n}\n.lp-root .facet-prism {\n  position: absolute;\n  inset: 0;\n  transform-style: preserve-3d;\n  will-change: transform;\n}\n.lp-root .facet-face {\n  position: absolute;\n  inset: 0;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  transform-origin: center center;\n  background-repeat: no-repeat;\n  will-change: filter;\n}\n.lp-root .facet-face:after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  border-left: 1px solid #f6f7dd13;\n  border-right: 1px solid #18241520;\n}\n.lp-root .endpoint-image {\n  z-index: 2;\n}\n.lp-root .optical-edge {\n  position: absolute;\n  inset: 0;\n  z-index: 5;\n  border: 1px solid #ffffff0d;\n  pointer-events: none;\n}\n.lp-root .comparison-controls {\n  display: flex;\n  align-items: center;\n  gap: 17px;\n  padding: 11px 0 12px;\n  border-bottom: 1px solid #343c2c;\n}\n.lp-root .comparison-controls input {\n  appearance: none;\n  flex: 1;\n  width: 100%;\n  min-width: 0;\n  height: 44px;\n  background: transparent;\n  cursor: ew-resize;\n  margin: 0;\n  touch-action: pan-y;\n  accent-color: #d3e8b7;\n}\n.lp-root .comparison-controls input::-webkit-slider-runnable-track {\n  height: 1px;\n  background: #4b583f;\n}\n.lp-root .comparison-controls input::-webkit-slider-thumb {\n  appearance: none;\n  width: 29px;\n  height: 15px;\n  border-radius: 2px;\n  background: #c9dfa8;\n  border: 1px solid #e6f2d5;\n  box-shadow:\n    inset 0 0 0 4px #c9dfa8,\n    inset 1px 0 #485b33;\n  margin-top: -7px;\n}\n.lp-root .comparison-controls input::-moz-range-track {\n  height: 1px;\n  background: #4b583f;\n}\n.lp-root .comparison-controls input::-moz-range-thumb {\n  width: 27px;\n  height: 13px;\n  border-radius: 2px;\n  background: #c9dfa8;\n  border: 1px solid #e6f2d5;\n}\n.lp-root .control-arrow {\n  display: flex;\n  align-items: center;\n  color: #81946b;\n}\n.lp-root .control-hint {\n  font:\n    10px ui-monospace,\n    monospace;\n  color: #a2b68c;\n  white-space: nowrap;\n  margin-left: 15px;\n}\n.lp-root .image-loading {\n  position: absolute;\n  inset: 0;\n  background: #23291ddb;\n  color: #d8e8c5;\n  z-index: 7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  backdrop-filter: blur(8px);\n}\n.lp-root .image-loading.error {\n  flex-direction: column;\n  gap: 15px;\n}\n.lp-root .image-loading button {\n  padding: 11px 16px;\n  border: 1px solid #8aa76b;\n  min-height: 44px;\n}\n.lp-root .dragging .optical-stage {\n  cursor: grabbing;\n}\n.lp-root .reduced .optical-stage {\n  cursor: ew-resize;\n}\n@media (min-width: 1600px) {\n  .lp-root .comparison-labels > button {\n    font-size: 14px;\n  }\n}\n@media (max-width: 1000px) {\n  .lp-root .control-hint {\n    font-size: 9px;\n  }\n}\n@media (max-width: 700px) {\n  .lp-root .comparison-toolbar {\n    margin-bottom: 12px;\n  }\n  .lp-root .comparison-labels {\n    gap: 13px;\n  }\n  .lp-root .comparison-labels > button {\n    font-size: 12px;\n    gap: 7px;\n  }\n  .lp-root .angle-readout {\n    font-size: 22px;\n  }\n  .lp-root .comparison-controls {\n    gap: 12px;\n    padding: 8px 0;\n  }\n  .lp-root .control-hint {\n    display: none;\n  }\n  .lp-root .facet-window {\n    perspective: 550px;\n  }\n  .lp-root .control-arrow {\n    color: #a2bb89;\n  }\n}\n@media (max-width: 360px) {\n  .lp-root .comparison-labels > button {\n    font-size: 11px;\n  }\n  .lp-root .angle-readout {\n    font-size: 20px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .lp-root *,.lp-root *:before,.lp-root *:after {\n    animation: none !important;\n    transition: none !important;\n    scroll-behavior: auto !important;\n  }\n  .lp-root .facet-prism,.lp-root .facet-face {\n    will-change: auto;\n  }\n}\n/* Optical imagery carries the color; the frame remains neutral. */\n.lp-root .comparison-labels > button {\n  color: #adb1a7;\n}\n.lp-root .comparison-labels > button > span {\n  border-color: #4b4f45;\n  color: #93998a;\n}\n.lp-root .comparison-labels > button.active > span {\n  border-color: #dde3d4;\n  color: #f0f3e9;\n}\n.lp-root .comparison-labels > i {\n  background: #41453b;\n}\n.lp-root .angle-readout {\n  color: #e1e5d9;\n}\n.lp-root .angle-readout sup {\n  color: #989e8d;\n}\n.lp-root .comparison-controls {\n  border-color: #3a3e34;\n}\n.lp-root .comparison-controls input::-webkit-slider-runnable-track,.lp-root .comparison-controls input::-moz-range-track {\n  background: #555b4b;\n}\n.lp-root .comparison-controls input::-webkit-slider-thumb {\n  background: #e1e8d6;\n  border-color: #f2f6ec;\n  box-shadow: none;\n}\n.lp-root .comparison-controls input::-moz-range-thumb {\n  background: #e1e8d6;\n  border-color: #f2f6ec;\n}\n.lp-root .control-arrow {\n  color: #adb7a0;\n}\n.lp-root .control-hint {\n  color: #b2bba6;\n}\n.lp-root button:focus-visible,.lp-root input:focus-visible {\n  outline-color: #e2ebd4;\n}\n/* Keep the complete optical interaction in a normal desktop viewport. */\n.lp-root .comparison-toolbar {\n  margin-bottom: 8px;\n}\n.lp-root .comparison-controls {\n  padding: 8px 0;\n}\n';

export function LenticularCompare(props: LenticularCompareProps) {
  return (
    <div className="lp-root">
      <style>{LENTICULAR_CSS}</style>
      <LenticularCompareView {...props} />
    </div>
  );
}
