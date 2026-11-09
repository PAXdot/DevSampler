"use client";

import {
  type CSSProperties,
  type ComponentType,
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

export type SprayCap = "light" | "steady" | "heavy" | "drip";

export type SprayPaintColor = {
  name: string;
  color: string;
};

export type SprayGlassOptions = {
  enabled: boolean;
  refraction: number;
  topLight: number;
  blur: number;
};

export type SprayPaintProps = {
  open?: boolean;
  onClose?: () => void;
  onPointerStatusChange?: (status: string) => void;
  palette?: readonly SprayPaintColor[];
  initialCap?: SprayCap;
  initialSpread?: number;
  lockScroll?: boolean;
  className?: string;
  zIndex?: number;
  mode?: "overlay" | "inline";
  glass?: Partial<SprayGlassOptions>;
};

type SprayPreset = {
  name: string;
  particleSize: number;
  spread: number;
  opacity: number;
  buildup: number;
  flow: number;
  dwell: number;
  pathSmoothing: number;
  stampSpacing: number;
  particles: number;
  size: number;
  falloff: number;
};

const DEFAULT_PALETTE = [
  { name: "Banana", color: "#F9F996" },
  { name: "Light neutral", color: "#F2F1ED" },
  { name: "Dark", color: "#090A0B" },
] as const;

const DEFAULT_GLASS: SprayGlassOptions = {
  enabled: true,
  refraction: 46,
  topLight: 64,
  blur: 24,
};

// Red/green sample inward along the rounded bevel, never beyond the backdrop.
// Blue blends the clearer lens edge into the frosted center in the same filter.
function createGlassDisplacementMap(width: number, height: number) {
  const resolution = Math.min(1, 1024 / Math.max(width, height));
  const map = document.createElement("canvas");
  map.width = Math.max(1, Math.round(width * resolution));
  map.height = Math.max(1, Math.round(height * resolution));
  const context = map.getContext("2d");
  if (!context) return "";
  const pixels = context.createImageData(map.width, map.height);
  const radius = 20;
  const bevel = 36;
  for (let y = 0; y < map.height; y += 1) {
    for (let x = 0; x < map.width; x += 1) {
      const px = (x + 0.5) / resolution - width / 2;
      const py = (y + 0.5) / resolution - height / 2;
      const qx = Math.abs(px) - (width / 2 - radius);
      const qy = Math.abs(py) - (height / 2 - radius);
      const outsideX = Math.max(qx, 0);
      const outsideY = Math.max(qy, 0);
      const cornerDistance = Math.hypot(outsideX, outsideY);
      const depth = radius - cornerDistance - Math.min(Math.max(qx, qy), 0);
      // A monotonic sampling curve avoids the doubled, pinched folds a bell
      // profile produces at high refraction. The clearer rim is narrower.
      const strength = depth >= 0 && depth < bevel ? (1 - depth / bevel) ** 2 : 0;
      const edgeProgress = Math.max(0, Math.min(1, (depth - 2) / 20));
      const clarity = depth >= 0 ? 1 - edgeProgress * edgeProgress * (3 - 2 * edgeProgress) : 0;
      const nx = cornerDistance > 0 ? (outsideX / cornerDistance) * Math.sign(px) : qx > qy ? Math.sign(px) : 0;
      const ny = cornerDistance > 0 ? (outsideY / cornerDistance) * Math.sign(py) : qy >= qx ? Math.sign(py) : 0;
      const offset = (y * map.width + x) * 4;
      pixels.data[offset] = Math.round(128 - nx * strength * 127);
      pixels.data[offset + 1] = Math.round(128 - ny * strength * 127);
      pixels.data[offset + 2] = Math.round(clarity * 255);
      pixels.data[offset + 3] = 255;
    }
  }
  context.putImageData(pixels, 0, 0);
  return map.toDataURL();
}

const SURFACE_TEXTURE = {
  blendMode: "soft-light",
  amount: 0.46,
  scale: 1.2,
  fineGrit: 11,
  rollMarks: 3,
} as const;

const DRIP_RELEASE_GRACE_MS = 260;
// Keep the overspray close to the frame while preserving a visible offset.
const SPILL_EDGE_OFFSET = 4;
const DEFAULT_SPREAD_BY_CAP: Record<SprayCap, number> = {
  light: 70,
  steady: 42,
  heavy: 56,
  drip: 36,
};

const PRESETS: Record<SprayCap, SprayPreset> = {
  light: {
    name: "Light cap",
    particleSize: 0.5,
    spread: 70,
    opacity: 0.48,
    buildup: 5,
    flow: 28,
    dwell: 0.4,
    pathSmoothing: 0.34,
    particles: 1,
    size: 0.82,
    falloff: 1,
    stampSpacing: 6,
  },
  steady: {
    name: "Steady cap",
    particleSize: 0.5,
    spread: 36,
    opacity: 0.7,
    buildup: 64,
    flow: 64,
    dwell: 0.1,
    pathSmoothing: 0.34,
    particles: 1.35,
    size: 1.05,
    falloff: 1.1,
    stampSpacing: 5,
  },
  heavy: {
    name: "Heavy cap",
    particleSize: 0.5,
    spread: 56,
    opacity: 0.68,
    buildup: 32,
    flow: 36,
    dwell: 0.1,
    pathSmoothing: 0.34,
    particles: 1.65,
    size: 1.85,
    falloff: 0.36,
    stampSpacing: 7,
  },
  drip: {
    name: "Drip cap",
    particleSize: 0.5,
    spread: 36,
    opacity: 0.7,
    buildup: 64,
    flow: 64,
    dwell: 0.1,
    pathSmoothing: 0.34,
    particles: 1.35,
    size: 1.05,
    falloff: 1.1,
    stampSpacing: 5,
  },
};

const CAP_ORDER: SprayCap[] = ["light", "steady", "heavy", "drip"];

function clampSpread(value: number, cap: SprayCap) {
  const preset = PRESETS[cap];
  return Math.min(preset.spread * 1.4, Math.max(preset.spread * 0.6, value));
}

function createSurfaceTextureTile() {
  const size = 384;
  const tile = document.createElement("canvas");
  tile.width = size;
  tile.height = size;
  const context = tile.getContext("2d");
  if (!context) return tile;
  let seed = 61973;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const wrapped = (x: number, y: number, draw: (x: number, y: number) => void) => {
    for (const offsetX of [-size, 0, size]) {
      for (const offsetY of [-size, 0, size]) draw(x + offsetX, y + offsetY);
    }
  };
  for (let index = 0; index < 7; index += 1) {
    const x = -size * 0.2 + random() * size * 1.4;
    const y = random() * size;
    const length = size * (0.65 + random() * 0.6);
    const bend = (random() - 0.5) * size * 0.34;
    wrapped(x, y, (wrappedX, wrappedY) => {
      context.beginPath();
      context.strokeStyle = `rgba(200,200,200,${0.018 + random() * 0.026})`;
      context.lineWidth = 10 + random() * 24;
      context.moveTo(wrappedX, wrappedY);
      context.bezierCurveTo(wrappedX + length * 0.28, wrappedY + bend, wrappedX + length * 0.7, wrappedY - bend, wrappedX + length, wrappedY + (random() - 0.5) * 18);
      context.stroke();
    });
  }
  for (let index = 0; index < 700 + SURFACE_TEXTURE.fineGrit * 520; index += 1) {
    const alpha = 0.04 + random() * 0.2;
    context.fillStyle = random() > 0.54 ? `rgba(255,255,255,${alpha})` : `rgba(0,0,0,${alpha})`;
    context.fillRect(random() * size, random() * size, random() > 0.92 ? 2 : 1, 1);
  }
  for (let index = 0; index < 18; index += 1) {
    const x = random() * size;
    const y = random() * size;
    const radius = 24 + random() * 75;
    const light = random() > 0.52;
    wrapped(x, y, (wrappedX, wrappedY) => {
      const gradient = context.createRadialGradient(wrappedX, wrappedY, 0, wrappedX, wrappedY, radius);
      gradient.addColorStop(0, light ? `rgba(255,255,255,${0.025 + random() * 0.07})` : `rgba(0,0,0,${0.03 + random() * 0.08})`);
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      context.fillStyle = gradient;
      context.fillRect(wrappedX - radius, wrappedY - radius, radius * 2, radius * 2);
    });
  }
  for (let index = 0; index < SURFACE_TEXTURE.rollMarks * 3; index += 1) {
    const x = random() * size;
    const y = random() * size;
    const length = 18 + random() * 100;
    context.beginPath();
    context.strokeStyle = random() > 0.5 ? `rgba(255,255,255,${0.04 + random() * 0.09})` : `rgba(0,0,0,${0.05 + random() * 0.1})`;
    context.lineWidth = 0.35 + random() * 1.2;
    context.moveTo(x, y);
    context.lineTo(x + (random() - 0.5) * 18, y + length);
    context.stroke();
  }
  return tile;
}

const SPRAY_PAINT_STYLES = String.raw`
.spray-paint-root{--spray-paint-accent:#f9f996;--spray-paint-ink:#090a0b;--spray-paint-paper:#f2f1ed;--spray-paint-z:9000;inset:0;pointer-events:none;position:fixed;transition:visibility 0s linear 520ms;visibility:hidden;z-index:var(--spray-paint-z)}
.spray-paint-root.is-open{pointer-events:auto;transition-delay:0s;visibility:visible}
.spray-paint-spill{background:transparent;border:0;display:block;height:100vh;inset:0;outline:0;pointer-events:none;position:fixed;width:100vw;z-index:0}
.spray-paint-overlay{align-items:flex-end;box-sizing:border-box;display:flex;inset:0;justify-content:center;padding:8px 8px 0;position:fixed;z-index:1}
.spray-paint-frame{backdrop-filter:blur(12px) saturate(.85);background:linear-gradient(180deg,rgba(36,37,44,.68),rgba(11,9,16,.8)) padding-box,linear-gradient(180deg,rgba(200,200,200,.3),rgba(53,53,59,.55) 26%,rgba(11,9,16,.75)) border-box;border:1px solid transparent;border-bottom:0;border-radius:16px 16px 0 0;box-shadow:inset 0 1px 0 rgba(255,255,255,.05),0 2px 4px rgba(0,0,0,.5),0 20px 68px -12px rgba(0,0,0,.6);box-sizing:border-box;height:min(90dvh,calc(100dvh - 8px));max-width:calc(100vw - 16px);overflow:hidden;position:relative;transform:translate3d(0,calc(100% + 12px),0);transition:transform 520ms cubic-bezier(.16,1,.3,1);width:min(90vw,calc(100vw - 16px));will-change:transform}
.spray-paint-frame::before{background:linear-gradient(112deg,transparent 0 17%,rgba(255,255,255,.055) 18%,transparent 20% 48%,rgba(255,255,255,.035) 49%,transparent 51% 79%,rgba(0,0,0,.065) 80%,transparent 82%),radial-gradient(ellipse 54% 24% at 14% 12%,rgba(255,255,255,.07),transparent 70%),linear-gradient(90deg,rgba(255,255,255,.025),transparent 28% 72%,rgba(255,255,255,.035));background-size:180% 100%,100% 100%,100% 100%;content:"";inset:0;mix-blend-mode:screen;opacity:.28;pointer-events:none;position:absolute;z-index:0}
.spray-paint-frame::after{background:#f9f9fb;content:"";inset:0;opacity:0;pointer-events:none;position:absolute;transition:opacity 520ms cubic-bezier(.16,1,.3,1);z-index:1}
.spray-paint-root.is-open .spray-paint-frame::after{opacity:.12}
.spray-paint-root.is-open .spray-paint-frame{transform:translate3d(0,0,0)}
.spray-paint-canvas,.spray-paint-texture{cursor:crosshair;height:100%;inset:0;position:absolute;touch-action:none;width:100%}
.spray-paint-texture{mix-blend-mode:soft-light;opacity:.345;pointer-events:none;z-index:2}
.spray-paint-canvas{z-index:3}
.spray-paint-actions,.spray-paint-colors{align-items:center;display:flex;flex-direction:column;gap:8px;position:absolute;right:16px;width:40px;z-index:4}
.spray-paint-actions{top:16px}
.spray-paint-colors{bottom:16px;gap:5px}
.spray-paint-button{align-items:center;appearance:none;background:rgba(40,40,40,.2);border:0;border-radius:12px;box-shadow:none;color:#f9f9fb;cursor:pointer;display:inline-flex;flex:0 0 40px;height:40px;justify-content:center;padding:0;width:40px}
.spray-paint-button svg{display:block;height:20px;width:20px}
.spray-paint-button .spray-paint-close-icon,.spray-paint-button .spray-paint-clear-icon{display:block;height:16px;width:16px}
.spray-paint-button:hover,.spray-paint-button:focus-visible,.spray-paint-button:active{background:rgba(40,40,40,.44)}
.spray-paint-button:focus-visible,.spray-paint-color:focus-visible{outline:2px solid var(--spray-paint-accent);outline-offset:3px}
.spray-paint-divider{background:rgba(217,217,217,.2);flex:0 0 2px;height:2px;margin:8px 0;width:16px}
.spray-paint-cap.is-active,.spray-paint-cap:hover,.spray-paint-size-control:hover,.spray-paint-size-control:active,.spray-paint-color:hover,.spray-paint-color:focus-visible,.spray-paint-color:active,.spray-paint-color.is-active{background:rgba(40,40,40,.44)}
.spray-paint-color{align-items:center;appearance:none;background:rgba(40,40,40,.2);border:0;border-radius:50%;box-shadow:none;cursor:pointer;display:flex;flex:0 0 34px;height:34px;justify-content:center;padding:0;width:34px}
.spray-paint-color>span{border:0;border-radius:50%;display:block;height:12px;width:12px}
.spray-paint-color.is-active{box-shadow:inset 0 0 0 1px rgba(249,249,150,.72)}
.spray-paint-size-control{align-items:center;background:rgba(40,40,40,.2);border:0;border-radius:12px;box-shadow:none;display:flex;flex-direction:column;gap:.45rem;overflow:hidden;padding:16px .2rem .55rem;width:40px}
.spray-paint-size-slider{align-items:center;display:flex;height:80px;justify-content:center;width:100%}
.spray-paint-size-slider input{-webkit-appearance:none;appearance:none;background:linear-gradient(to right,var(--spray-paint-pigment,#f9f996) var(--spray-paint-size-fill,50%),rgba(255,255,255,.2) var(--spray-paint-size-fill,50%));border:0;border-radius:999px;cursor:default;height:2px;margin:0;transform:rotate(-90deg);width:80px}
.spray-paint-size-slider input::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:var(--spray-paint-pigment,#f9f996);border:0;border-radius:50%;cursor:pointer;height:8px;width:8px}
.spray-paint-size-slider input::-moz-range-thumb{background:var(--spray-paint-pigment,#f9f996);border:0;border-radius:50%;cursor:pointer;height:8px;width:8px}
.spray-paint-cap-preview{color:#f9f9fb;display:block;height:20px;pointer-events:none;transform-origin:center;width:20px;will-change:transform}
.spray-paint-cap-preview svg{display:block;height:20px;width:20px}
.spray-paint-preview{border:1px solid #9a9a94;border-radius:50%;mix-blend-mode:difference;pointer-events:none;position:absolute;transform:translate(-50%,-50%);transition:opacity 120ms ease;z-index:5}.spray-paint-preview.is-hidden{opacity:0}
.spray-paint-sr-only{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}
.spray-paint-root.is-inline{display:block;inset:auto;isolation:isolate;pointer-events:auto;position:relative;visibility:visible;z-index:0}
.spray-paint-root.is-inline:not(.is-open){pointer-events:none}
.spray-paint-root.is-inline .spray-paint-spill{position:fixed}
.spray-paint-root.is-inline .spray-paint-overlay{align-items:stretch;display:block;inset:auto;padding:0;position:relative}
.spray-paint-root.is-inline .spray-paint-frame{border-bottom:1px solid transparent;border-radius:20px;height:min(900px,75vw);max-height:900px;max-width:none;min-height:680px;transform:translate3d(0,calc(100% + 24px),0);transition:transform 520ms cubic-bezier(.16,1,.3,1);width:100%;aspect-ratio:auto}
.spray-paint-root.is-inline.is-open .spray-paint-frame{transform:translate3d(0,0,0)}
.spray-paint-root.is-inline .spray-paint-frame::after{display:none}
.spray-paint-root.is-glass .spray-paint-frame{backdrop-filter:saturate(.96) var(--spray-glass-filter);background:linear-gradient(180deg,rgba(255,255,255,.12),rgba(30,31,39,.14)) padding-box;border-color:transparent}
.spray-paint-root.is-glass .spray-paint-frame::before{opacity:0}
.spray-glass-defs{height:0;overflow:hidden;pointer-events:none;position:absolute;width:0}
.spray-glass-optics,.spray-glass-light,.spray-glass-bevel{border-radius:inherit;inset:0;pointer-events:none;position:absolute}
.spray-glass-optics{z-index:2}
.spray-glass-light{background:radial-gradient(ellipse 78% 32% at 42% -12%,rgba(255,255,255,.58),rgba(255,255,255,.14) 43%,transparent 76%),linear-gradient(118deg,transparent 10%,rgba(255,255,255,.02) 26%,rgba(255,255,255,.075) 30%,transparent 38%);opacity:var(--spray-glass-light,.38)}
.spray-glass-bevel{background:linear-gradient(155deg,rgba(255,255,255,.84),rgba(255,255,255,.24) 22%,rgba(255,255,255,.035) 48%,rgba(255,255,255,.12) 74%,rgba(255,255,255,.46));-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;opacity:var(--spray-glass-rim,.72);padding:1px}
.spray-glass-optics::before{border-radius:inherit;box-shadow:inset 0 1px 0 rgba(255,255,255,.5),inset 0 5px 8px -7px rgba(255,255,255,.8),inset 1px 0 0 rgba(255,255,255,.08),inset -1px 0 0 rgba(255,255,255,.06),inset 0 -1px 0 rgba(255,255,255,.22);content:"";inset:1px;opacity:var(--spray-glass-rim,.72);position:absolute}
.spray-paint-root.is-inline .spray-paint-actions,.spray-paint-root.is-inline .spray-paint-colors{right:20px}
.spray-paint-root.is-inline .spray-paint-actions{top:20px}
.spray-paint-root.is-inline .spray-paint-colors{bottom:20px}
@media(max-width:720px){.spray-paint-root.is-inline .spray-paint-actions,.spray-paint-root.is-inline .spray-paint-colors{right:14px}.spray-paint-root.is-inline .spray-paint-actions{top:14px}.spray-paint-root.is-inline .spray-paint-colors{bottom:14px}}
@media(max-width:479px){.spray-paint-frame{width:calc(100vw - 16px)}.spray-paint-actions{right:12px;top:12px}.spray-paint-colors{bottom:12px;right:12px}}
@media(max-height:620px) and (orientation:landscape){.spray-paint-actions{flex-direction:row;height:40px;right:12px;top:12px;width:auto}.spray-paint-divider{height:20px;margin:0 2px;width:2px}.spray-paint-colors{bottom:12px;right:12px}}
@media(prefers-reduced-motion:reduce){.spray-paint-frame{transition:none}}
`;

const ICON_PATHS = {
  light: "M6.76013 13.1045C7.07795 13.1047 7.33516 13.3619 7.33533 13.6797C7.33533 13.9977 7.07806 14.2556 6.76013 14.2559C6.44202 14.2559 6.18396 13.9978 6.18396 13.6797C6.18413 13.3617 6.44212 13.1045 6.76013 13.1045ZM13.5599 12.0801C13.9574 12.0802 14.2796 12.4023 14.2797 12.7998C14.2797 13.1974 13.9575 13.5194 13.5599 13.5195C13.1623 13.5195 12.8402 13.1974 12.8402 12.7998C12.8403 12.4023 13.1624 12.0801 13.5599 12.0801ZM9.55994 9.67969C10.0899 9.6798 10.5197 10.1097 10.5199 10.6396C10.5199 11.1698 10.09 11.5995 9.55994 11.5996C9.02974 11.5996 8.59998 11.1698 8.59998 10.6396C8.60017 10.1096 9.02986 9.67969 9.55994 9.67969ZM6.43982 7.16016C6.9037 7.1602 7.27966 7.53611 7.27966 8C7.27966 8.46389 6.9037 8.8398 6.43982 8.83984C5.9759 8.83984 5.59998 8.46392 5.59998 8C5.59998 7.53608 5.9759 7.16016 6.43982 7.16016ZM13.0795 6.63965C13.5653 6.63965 13.9591 7.03374 13.9594 7.51953C13.9594 8.00554 13.5655 8.40039 13.0795 8.40039C12.5936 8.40023 12.1996 8.00544 12.1996 7.51953C12.1998 7.03384 12.5938 6.63981 13.0795 6.63965ZM9.95935 4.16016C10.4012 4.16016 10.7601 4.51815 10.7601 4.95996C10.7601 5.40179 10.4012 5.75977 9.95935 5.75977C9.5177 5.75956 9.15955 5.40166 9.15955 4.95996C9.15957 4.51828 9.51771 4.16036 9.95935 4.16016Z",
  steady: "M12.2242 14.0963C12.5245 14.0964 12.7682 14.3398 12.7682 14.6402C12.768 14.9405 12.5245 15.184 12.2242 15.1841C11.9238 15.1841 11.6804 14.9405 11.6803 14.6402C11.6803 14.3398 11.9238 14.0963 12.2242 14.0963ZM9.02402 13.7437C9.38631 13.7437 9.68025 14.0377 9.68027 14.4C9.68027 14.7623 9.38631 15.0562 9.02402 15.0562C8.66172 15.0562 8.36777 14.7623 8.36777 14.4C8.36778 14.0377 8.66173 13.7437 9.02402 13.7437ZM6.06406 12.5757C6.40856 12.5758 6.68795 12.8553 6.68808 13.1998C6.68808 13.5444 6.40864 13.8237 6.06406 13.8238C5.71943 13.8238 5.44003 13.5444 5.44003 13.1998C5.44016 12.8553 5.71951 12.5757 6.06406 12.5757ZM13.984 10.9595C14.4258 10.9595 14.7838 11.3185 14.7838 11.7603C14.7836 12.202 14.4257 12.5601 13.984 12.5601C13.5423 12.5601 13.1843 12.202 13.1842 11.7603C13.1842 11.3185 13.5422 10.9595 13.984 10.9595ZM10.8639 9.88043C11.372 9.88043 11.7838 10.2923 11.7838 10.8004C11.7836 11.3083 11.3718 11.7203 10.8639 11.7203C10.3559 11.7202 9.94413 11.3082 9.94394 10.8004C9.94394 10.2923 10.3558 9.88051 10.8639 9.88043ZM7.66367 9.68024C8.10549 9.68024 8.46445 10.0382 8.46445 10.48C8.46443 10.9219 8.10548 11.2798 7.66367 11.2798C7.222 11.2797 6.86388 10.9217 6.86386 10.48C6.86386 10.0383 7.22198 9.68041 7.66367 9.68024ZM4.94394 9.45563C5.24424 9.45563 5.48765 9.69933 5.48788 9.99957C5.48788 10.3 5.24438 10.5445 4.94394 10.5445C4.64352 10.5445 4.39999 10.3 4.39999 9.99957C4.40023 9.69935 4.64367 9.45566 4.94394 9.45563ZM15.024 8.41559C15.4127 8.41561 15.728 8.73104 15.7281 9.11969C15.7281 9.50849 15.4128 9.82377 15.024 9.82379C14.6352 9.82379 14.3199 9.5085 14.3199 9.11969C14.3201 8.73102 14.6353 8.41559 15.024 8.41559ZM12.1441 6.80035C12.6301 6.80042 13.024 7.19427 13.024 7.68024C13.0239 8.1661 12.63 8.56005 12.1441 8.56012C11.6582 8.56012 11.2644 8.16614 11.2643 7.68024C11.2643 7.19423 11.6581 6.80035 12.1441 6.80035ZM8.86386 6.35992C9.3277 6.35992 9.70358 6.73596 9.7037 7.19977C9.7037 7.66369 9.32778 8.03961 8.86386 8.03961C8.40001 8.03953 8.02402 7.66364 8.02402 7.19977C8.02414 6.73601 8.40009 6.36001 8.86386 6.35992ZM5.74374 6.1441C6.10604 6.1441 6.39999 6.43806 6.39999 6.80035C6.3998 7.16249 6.10592 7.45563 5.74374 7.45563C5.38167 7.4555 5.08866 7.16241 5.08847 6.80035C5.08847 6.43813 5.38155 6.14423 5.74374 6.1441ZM14.0641 5.27985C14.4175 5.27989 14.7037 5.56703 14.7037 5.92047C14.7034 6.27369 14.4173 6.56008 14.0641 6.56012C13.7108 6.56012 13.4247 6.27372 13.4244 5.92047C13.4244 5.56701 13.7106 5.27985 14.0641 5.27985ZM7.66367 3.88043C7.99504 3.88043 8.26425 4.14867 8.26425 4.48004C8.26423 4.8114 7.99502 5.07965 7.66367 5.07965C7.33246 5.07947 7.06408 4.81129 7.06406 4.48004C7.06406 4.14878 7.33245 3.88061 7.66367 3.88043ZM11.1041 3.44C11.5016 3.44005 11.8237 3.76224 11.8238 4.15973C11.8238 4.55734 11.5017 4.88038 11.1041 4.88043C10.7065 4.88043 10.3844 4.55737 10.3844 4.15973C10.3845 3.76221 10.7065 3.44 11.1041 3.44Z",
  heavy: "M11.1843 14.8643C11.5464 14.8644 11.8403 15.1575 11.8406 15.5195C11.8406 15.8818 11.5465 16.1757 11.1843 16.1758C10.822 16.1758 10.5281 15.8818 10.5281 15.5195C10.5283 15.1574 10.8222 14.8643 11.1843 14.8643ZM8.38452 14.7197C8.78198 14.7199 9.10425 15.0429 9.10425 15.4404C9.10401 15.8377 8.78184 16.1599 8.38452 16.1602C7.98702 16.1602 7.66405 15.8379 7.66382 15.4404C7.66382 15.0428 7.98688 14.7197 8.38452 14.7197ZM13.824 14.2559C14.1244 14.2559 14.3678 14.4995 14.3679 14.7998C14.3679 15.1002 14.1244 15.3438 13.824 15.3438C13.5236 15.3437 13.28 15.1002 13.28 14.7998C13.2801 14.4995 13.5237 14.2559 13.824 14.2559ZM5.7439 13.9844C6.06187 13.9844 6.31984 14.2416 6.32007 14.5596C6.32007 14.8777 6.06201 15.1357 5.7439 15.1357C5.42587 15.1356 5.16772 14.8776 5.16772 14.5596C5.16795 14.2417 5.42601 13.9845 5.7439 13.9844ZM12.6238 12.2803C13.0877 12.2803 13.4646 12.6562 13.4646 13.1201C13.4645 13.584 13.0877 13.96 12.6238 13.96C12.1601 13.9598 11.784 13.5839 11.7839 13.1201C11.7839 12.6563 12.16 12.2805 12.6238 12.2803ZM9.90405 11.6641C10.443 11.6641 10.8794 12.1008 10.8796 12.6396C10.8796 13.1787 10.4431 13.6162 9.90405 13.6162C9.36504 13.6162 8.92847 13.1787 8.92847 12.6396C8.92866 12.1008 9.36516 11.6641 9.90405 11.6641ZM7.10425 11.3604C7.5902 11.3604 7.98413 11.7543 7.98413 12.2402C7.984 12.7261 7.59012 13.12 7.10425 13.1201C6.61832 13.1201 6.22449 12.7261 6.22437 12.2402C6.22437 11.7542 6.61824 11.3604 7.10425 11.3604ZM4.38452 11.3115C4.7643 11.3117 5.07202 11.6202 5.07202 12C5.07202 12.3798 4.7643 12.6883 4.38452 12.6885C4.00455 12.6885 3.69605 12.38 3.69604 12C3.69604 11.62 4.00455 11.3115 4.38452 11.3115ZM14.6238 10.4004C15.0656 10.4004 15.4246 10.7584 15.4246 11.2002C15.4245 11.6419 15.0655 12 14.6238 12C14.1822 11.9998 13.8241 11.6418 13.824 11.2002C13.824 10.7585 14.1821 10.4006 14.6238 10.4004ZM12.0642 8.94434C12.6032 8.94438 13.0398 9.38095 13.0398 9.91992C13.0398 10.4589 12.6032 10.8964 12.0642 10.8965C11.5252 10.8965 11.0886 10.459 11.0886 9.91992C11.0887 9.38093 11.5252 8.94434 12.0642 8.94434ZM9.18433 8.51953C9.73637 8.51963 10.1841 8.96752 10.1843 9.51953C10.1843 10.0718 9.73653 10.5194 9.18433 10.5195C8.63204 10.5195 8.18433 10.0718 8.18433 9.51953C8.18457 8.96746 8.63219 8.51953 9.18433 8.51953ZM6.38452 8.48047C6.87036 8.48067 7.2644 8.87446 7.2644 9.36035C7.26422 9.84608 6.87025 10.24 6.38452 10.2402C5.89862 10.2402 5.50482 9.84621 5.50464 9.36035C5.50464 8.87434 5.89851 8.48047 6.38452 8.48047ZM3.82397 8.49609C4.1686 8.49609 4.448 8.77549 4.448 9.12012C4.44794 9.46469 4.16856 9.74414 3.82397 9.74414C3.47946 9.74405 3.20001 9.46464 3.19995 9.12012C3.19995 8.77554 3.47942 8.49618 3.82397 8.49609ZM15.1843 8.03223C15.5641 8.03232 15.8717 8.33994 15.8718 8.71973C15.8718 9.09964 15.5642 9.40811 15.1843 9.4082C14.8044 9.4082 14.4958 9.0997 14.4958 8.71973C14.496 8.33988 14.8044 8.03223 15.1843 8.03223ZM13.0242 6.38379C13.519 6.38382 13.9197 6.78545 13.9197 7.28027C13.9195 7.77498 13.5189 8.17575 13.0242 8.17578C12.5294 8.17578 12.1278 7.775 12.1277 7.28027C12.1277 6.78543 12.5293 6.38379 13.0242 6.38379ZM10.2244 5.44043C10.7544 5.44057 11.1843 5.87029 11.1843 6.40039C11.1841 6.93032 10.7543 7.36021 10.2244 7.36035C9.6943 7.36035 9.26461 6.93041 9.2644 6.40039C9.2644 5.8702 9.69417 5.44043 10.2244 5.44043ZM7.2644 5.48047C7.77237 5.48062 8.18433 5.89238 8.18433 6.40039C8.18412 6.90822 7.77225 7.32016 7.2644 7.32031C6.75643 7.32031 6.34469 6.90832 6.34448 6.40039C6.34448 5.89229 6.7563 5.48047 7.2644 5.48047ZM4.5437 5.42383C4.906 5.42383 5.19995 5.71778 5.19995 6.08008C5.19991 6.44234 4.90597 6.73633 4.5437 6.73633C4.18162 6.7361 3.88847 6.4422 3.88843 6.08008C3.88843 5.71792 4.1816 5.42406 4.5437 5.42383ZM14.4646 5.24023C14.8399 5.24049 15.1442 5.54457 15.1443 5.91992C15.1443 6.29532 14.8399 6.59935 14.4646 6.59961C14.089 6.59961 13.7839 6.29548 13.7839 5.91992C13.784 5.54441 14.0891 5.24023 14.4646 5.24023ZM12.3845 3.42383C12.7908 3.42404 13.1199 3.7538 13.1199 4.16016C13.1198 4.56643 12.7908 4.8953 12.3845 4.89551C11.9781 4.89551 11.6483 4.56656 11.6482 4.16016C11.6482 3.75367 11.978 3.42383 12.3845 3.42383ZM6.5437 3.13574C6.93246 3.13574 7.24772 3.45111 7.2478 3.83984C7.2478 4.22865 6.93251 4.54395 6.5437 4.54395C6.1551 4.5437 5.84058 4.2285 5.84058 3.83984C5.84066 3.45126 6.15515 3.13598 6.5437 3.13574ZM9.42456 2.7998C9.86604 2.80006 10.2242 3.15812 10.2244 3.59961C10.2244 4.04128 9.86617 4.40013 9.42456 4.40039C8.98273 4.40039 8.62378 4.04144 8.62378 3.59961C8.62399 3.15796 8.98286 2.7998 9.42456 2.7998Z",
  drip: "M11.8242 13.1396C12.1002 13.1396 12.324 13.3637 12.3242 13.6396V18.04C12.3239 18.316 12.1002 18.54 11.8242 18.54C11.5483 18.5399 11.3244 18.3159 11.3242 18.04V13.6396C11.3243 13.3637 11.5482 13.1398 11.8242 13.1396ZM8.62396 13.7441C8.98626 13.7441 9.28021 14.0381 9.28021 14.4004C9.27999 14.7625 8.98613 15.0557 8.62396 15.0557C8.26199 15.0554 7.96891 14.7624 7.96869 14.4004C7.96869 14.0382 8.26186 13.7444 8.62396 13.7441ZM5.664 12.5762C6.00863 12.5762 6.28802 12.8556 6.28802 13.2002C6.28792 13.5447 6.00856 13.8242 5.664 13.8242C5.3196 13.824 5.04008 13.5446 5.03998 13.2002C5.03998 12.8557 5.31953 12.5764 5.664 12.5762ZM13.5839 10.96C14.0257 10.96 14.3846 11.318 14.3847 11.7598C14.3847 12.2016 14.0258 12.5596 13.5839 12.5596C13.1423 12.5593 12.7841 12.2014 12.7841 11.7598C12.7842 11.3182 13.1424 10.9602 13.5839 10.96ZM7.664 4.09961C7.94001 4.09961 8.16379 4.32365 8.164 4.59961V11.5996C8.164 11.8758 7.94014 12.0996 7.664 12.0996C7.38806 12.0994 7.164 11.8756 7.164 11.5996V4.59961C7.16422 4.32379 7.38819 4.09984 7.664 4.09961ZM10.4648 9.87988C10.9726 9.8801 11.3846 10.2919 11.3847 10.7998C11.3847 11.3078 10.9727 11.7195 10.4648 11.7197C9.95668 11.7197 9.54486 11.3079 9.54486 10.7998C9.54497 10.2918 9.95675 9.87988 10.4648 9.87988ZM4.54388 9.45605C4.84432 9.45605 5.0888 9.69956 5.08881 10C5.08881 10.3004 4.84433 10.5439 4.54388 10.5439C4.24366 10.5437 3.99994 10.3003 3.99994 10C3.99994 9.69972 4.24367 9.45631 4.54388 9.45605ZM14.624 8.41602C15.0128 8.41602 15.3281 8.73131 15.3281 9.12012C15.328 9.50887 15.0127 9.82422 14.624 9.82422C14.2354 9.82401 13.9209 9.50874 13.9208 9.12012C13.9208 8.73144 14.2353 8.41623 14.624 8.41602ZM11.7441 6.7998C12.23 6.7998 12.6238 7.19382 12.624 7.67969C12.624 8.1657 12.2301 8.55957 11.7441 8.55957C11.2582 8.55941 10.8642 8.1656 10.8642 7.67969C10.8644 7.19392 11.2583 6.79997 11.7441 6.7998ZM5.34467 6.14355C5.70679 6.14369 5.99983 6.43768 5.99994 6.7998C5.99994 7.16202 5.70685 7.45592 5.34467 7.45605C4.98237 7.45605 4.68842 7.1621 4.68842 6.7998C4.68852 6.43759 4.98243 6.14355 5.34467 6.14355ZM13.664 5.28027C14.0174 5.28027 14.3046 5.5665 14.3046 5.91992C14.3046 6.27338 14.0175 6.55957 13.664 6.55957C13.3107 6.55938 13.0244 6.27327 13.0244 5.91992C13.0244 5.56661 13.3107 5.28046 13.664 5.28027ZM10.704 3.44043C11.1017 3.44043 11.4247 3.76251 11.4247 4.16016C11.4247 4.55773 11.1016 4.87988 10.704 4.87988C10.3066 4.8797 9.9844 4.55762 9.98431 4.16016C9.98431 3.76262 10.3065 3.44061 10.704 3.44043Z",
} as const;

const CLOSE_ICON_DATA_URI = "data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiBvdmVyZmxvdz0idmlzaWJsZSIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGlkPSJYIj4KPHBhdGggaWQ9IlZlY3RvciIgZD0iTTEyLjg1MzggMTIuMTQ2M0MxMi45MDAyIDEyLjE5MjcgMTIuOTM3MSAxMi4yNDc5IDEyLjk2MjIgMTIuMzA4NkMxMi45ODczIDEyLjM2OTIgMTMuMDAwMyAxMi40MzQzIDEzLjAwMDMgMTIuNUMxMy4wMDAzIDEyLjU2NTcgMTIuOTg3MyAxMi42MzA4IDEyLjk2MjIgMTIuNjkxNEMxMi45MzcxIDEyLjc1MjEgMTIuOTAwMiAxMi44MDczIDEyLjg1MzggMTIuODUzOEMxMi44MDczIDEyLjkwMDIgMTIuNzUyMSAxMi45MzcxIDEyLjY5MTQgMTIuOTYyMkMxMi42MzA4IDEyLjk4NzMgMTIuNTY1NyAxMy4wMDAzIDEyLjUgMTMuMDAwM0MxMi40MzQzIDEzLjAwMDMgMTIuMzY5MiAxMi45ODczIDEyLjMwODYgMTIuOTYyMkMxMi4yNDc5IDEyLjkzNzEgMTIuMTkyNyAxMi45MDAyIDEyLjE0NjMgMTIuODUzOEw4IDguNzA2ODdMMy44NTM3NSAxMi44NTM4QzMuNzU5OTMgMTIuOTQ3NiAzLjYzMjY4IDEzLjAwMDMgMy41IDEzLjAwMDNDMy4zNjczMiAxMy4wMDAzIDMuMjQwMDcgMTIuOTQ3NiAzLjE0NjI1IDEyLjg1MzhDMy4wNTI0MyAxMi43NTk5IDIuOTk5NzIgMTIuNjMyNyAyLjk5OTcyIDEyLjVDMi45OTk3MiAxMi4zNjczIDMuMDUyNDMgMTIuMjQwMSAzLjE0NjI1IDEyLjE0NjNMNy4yOTMxMyA4TDMuMTQ2MjUgMy44NTM3NUMzLjA1MjQzIDMuNzU5OTMgMi45OTk3MiAzLjYzMjY4IDIuOTk5NzIgMy41QzIuOTk5NzIgMy4zNjczMiAzLjA1MjQzIDMuMjQwMDcgMy4xNDYyNSAzLjE0NjI1QzMuMjQwMDcgMy4wNTI0MyAzLjM2NzMyIDIuOTk5NzIgMy41IDIuOTk5NzJDMy42MzI2OCAyLjk5OTcyIDMuNzU5OTMgMy4wNTI0MyAzLjg1Mzc1IDMuMTQ2MjVMOCA3LjI5MzEzTDEyLjE0NjMgMy4xNDYyNUMxMi4yNDAxIDMuMDUyNDMgMTIuMzY3MyAyLjk5OTcyIDEyLjUgMi45OTk3MkMxMi42MzI3IDIuOTk5NzIgMTIuNzU5OSAzLjA1MjQzIDEyLjg1MzggMy4xNDYyNUMxMi45NDc2IDMuMjQwMDcgMTMuMDAwMyAzLjM2NzMyIDEzLjAwMDMgMy41QzEzLjAwMDMgMy42MzI2OCAxMi45NDc2IDMuNzU5OTMgMTIuODUzOCAzLjg1Mzc1TDguNzA2ODcgOEwxMi44NTM4IDEyLjE0NjNaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+Cjwvc3ZnPgo=";
const CLEAR_ICON_PATH = "M13.5 3H11V2.5C11 2.10218 10.842 1.72064 10.5607 1.43934C10.2794 1.15804 9.89782 1 9.5 1H6.5C6.10218 1 5.72064 1.15804 5.43934 1.43934C5.15804 1.72064 5 2.10218 5 2.5V3H2.5C2.36739 3 2.24021 3.05268 2.14645 3.14645C2.05268 3.24021 2 3.36739 2 3.5C2 3.63261 2.05268 3.75979 2.14645 3.85355C2.24021 3.94732 2.36739 4 2.5 4H3V13C3 13.2652 3.10536 13.5196 3.29289 13.7071C3.48043 13.8946 3.73478 14 4 14H12C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V4H13.5C13.6326 4 13.7598 3.94732 13.8536 3.85355C13.9473 3.75979 14 3.63261 14 3.5C14 3.36739 13.9473 3.24021 13.8536 3.14645C13.7598 3.05268 13.6326 3 13.5 3ZM6 2.5C6 2.36739 6.05268 2.24021 6.14645 2.14645C6.24021 2.05268 6.36739 2 6.5 2H9.5C9.63261 2 9.75979 2.05268 9.85355 2.14645C9.94732 2.24021 10 2.36739 10 2.5V3H6V2.5ZM12 13H4V4H12V13ZM7 6.5V10.5C7 10.6326 6.94732 10.7598 6.85355 10.8536C6.75979 10.9473 6.63261 11 6.5 11C6.36739 11 6.24021 10.9473 6.14645 10.8536C6.05268 10.7598 6 10.6326 6 10.5V6.5C6 6.36739 6.05268 6.24021 6.14645 6.14645C6.24021 6.05268 6.36739 6 6.5 6C6.63261 6 6.75979 6.05268 6.85355 6.14645C6.94732 6.24021 7 6.36739 7 6.5ZM10 6.5V10.5C10 10.6326 9.94732 10.7598 9.85355 10.8536C9.75979 10.9473 9.63261 11 9.5 11C9.36739 11 9.24021 10.9473 9.14645 10.8536C9.05268 10.7598 9 10.6326 9 10.5V6.5C9 6.36739 9.05268 6.24021 9.14645 6.14645C9.24021 6.05268 9.36739 6 9.5 6C9.63261 6 9.75979 6.05268 9.85355 6.14645C9.94732 6.24021 10 6.36739 10 6.5Z";

function ToolbarIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d={path} fill="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return <img className="spray-paint-close-icon" src={CLOSE_ICON_DATA_URI} alt="" aria-hidden="true" />;
}

function ClearIcon() {
  return (
    <svg className="spray-paint-clear-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d={CLEAR_ICON_PATH} fill="currentColor" />
    </svg>
  );
}

const CAP_ICONS: Record<SprayCap, ComponentType> = {
  light: () => <ToolbarIcon path={ICON_PATHS.light} />,
  steady: () => <ToolbarIcon path={ICON_PATHS.steady} />,
  heavy: () => <ToolbarIcon path={ICON_PATHS.heavy} />,
  drip: () => <ToolbarIcon path={ICON_PATHS.drip} />,
};

export function SprayPaint({
  open = true,
  onClose = () => {},
  onPointerStatusChange,
  palette = DEFAULT_PALETTE,
  initialCap = "steady",
  initialSpread,
  lockScroll = true,
  className = "",
  zIndex = 9000,
  mode = "overlay",
  glass,
}: SprayPaintProps) {
  const inline = mode === "inline";
  const spreadId = useId();
  const glassFilterId = `spray-glass-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const glassSettings = { ...DEFAULT_GLASS, ...glass };
  const glassMapRef = useRef<SVGFEImageElement>(null);
  const glassMapSizeRef = useRef("");
  const safePalette = palette.length ? palette : DEFAULT_PALETTE;
  const [cap, setCap] = useState<SprayCap>(initialCap);
  const [spread, setSpread] = useState(() => clampSpread(initialSpread ?? DEFAULT_SPREAD_BY_CAP[initialCap], initialCap));
  const [pigment, setPigment] = useState(safePalette[0].color);
  const frameRef = useRef<HTMLDivElement>(null);
  const paintRef = useRef<HTMLCanvasElement>(null);
  const textureRef = useRef<HTMLCanvasElement>(null);
  const spillRef = useRef<HTMLCanvasElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const textureContextRef = useRef<CanvasRenderingContext2D | null>(null);
  const spillContextRef = useRef<CanvasRenderingContext2D | null>(null);
  const textureTileRef = useRef<HTMLCanvasElement | null>(null);
  const scaleRef = useRef(1);
  const activePointerRef = useRef<number | null>(null);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const holdPointRef = useRef<{ x: number; y: number } | null>(null);
  const holdFrameRef = useRef(0);
  const textureFrameRef = useRef(0);
  const lastHoldRef = useRef(0);
  const holdStartedRef = useRef(0);
  const dripCountRef = useRef(0);
  const dripReleaseRef = useRef(0);
  const generationRef = useRef(0);
  const capRef = useRef(cap);
  const spreadRef = useRef(spread);
  const spreadSelectionsRef = useRef<Record<SprayCap, number>>({ ...DEFAULT_SPREAD_BY_CAP, [initialCap]: spread });
  const previewRef = useRef<HTMLDivElement>(null);
  const lastSurfacePointerRef = useRef<{ x: number; y: number } | null>(null);
  const pointerOnSurfaceRef = useRef(false);
  const pigmentRef = useRef(pigment);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  // Keep parent callback updates from re-running the canvas setup effect.
  // The demo changes theme without remounting, so painted pixels stay intact.
  const onCloseRef = useRef(onClose);
  const onPointerStatusChangeRef = useRef(onPointerStatusChange);
  const pointerStatusRef = useRef<string | null>(null);

  capRef.current = cap;
  spreadRef.current = spread;
  pigmentRef.current = pigment;
  onCloseRef.current = onClose;
  onPointerStatusChangeRef.current = onPointerStatusChange;

  const notifyPointerStatus = useCallback((status: string) => {
    if (pointerStatusRef.current === status) return;
    pointerStatusRef.current = status;
    onPointerStatusChangeRef.current?.(status);
  }, []);

  const stop = useCallback((pointerId?: number, status?: string) => {
    const paint = paintRef.current;
    if (pointerId !== undefined && pointerId !== activePointerRef.current) return;
    if (pointerId !== undefined && paint?.hasPointerCapture?.(pointerId)) {
      paint.releasePointerCapture(pointerId);
    }
    activePointerRef.current = null;
    lastPointRef.current = null;
    holdPointRef.current = null;
    dripReleaseRef.current = performance.now();
    if (holdFrameRef.current) cancelAnimationFrame(holdFrameRef.current);
    holdFrameRef.current = 0;
    if (status) notifyPointerStatus(status);
  }, [notifyPointerStatus]);

  const clear = useCallback(() => {
    generationRef.current += 1;
    const paint = paintRef.current;
    const spill = spillRef.current;
    const scale = scaleRef.current;
    if (paint && contextRef.current) {
      contextRef.current.clearRect(0, 0, paint.width / scale, paint.height / scale);
    }
    if (spill && spillContextRef.current) {
      spillContextRef.current.clearRect(0, 0, spill.width / scale, spill.height / scale);
    }
    stop();
    notifyPointerStatus("Pointer input ready");
  }, [notifyPointerStatus, stop]);

  const queueTexture = useCallback(() => {
    if (textureFrameRef.current) return;
    textureFrameRef.current = requestAnimationFrame(() => {
      textureFrameRef.current = 0;
      const paint = paintRef.current;
      const context = textureContextRef.current;
      const tile = textureTileRef.current;
      if (!paint || !context || !tile) return;
      const rect = paint.getBoundingClientRect();
      context.save();
      context.clearRect(0, 0, rect.width, rect.height);
      const pattern = context.createPattern(tile, "repeat");
      if (pattern?.setTransform && typeof DOMMatrix !== "undefined") pattern.setTransform(new DOMMatrix().scale(SURFACE_TEXTURE.scale));
      context.globalCompositeOperation = "source-over";
      context.globalAlpha = 1;
      context.fillStyle = pattern ?? "transparent";
      context.fillRect(0, 0, rect.width, rect.height);
      context.restore();
    });
  }, []);

  const dot = useCallback((context: CanvasRenderingContext2D, x: number, y: number, radius: number, alpha: number) => {
    context.globalAlpha = alpha;
    context.fillStyle = pigmentRef.current;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  }, []);

  const emit = useCallback((x: number, y: number, pressure = 1) => {
    const paint = paintRef.current;
    const context = contextRef.current;
    const spillContext = spillContextRef.current;
    if (!paint || !context || !spillContext) return;
    const preset = PRESETS[capRef.current];
    const rect = paint.getBoundingClientRect();
    const count = Math.round((9 + preset.buildup * 5 + preset.flow * 2) * preset.particles * pressure);
    const spread = spreadRef.current * preset.size;
    context.save();
    spillContext.save();
    context.globalCompositeOperation = "source-over";
    for (let index = 0; index < count; index += 1) {
      const angle = Math.random() * Math.PI * 2;
      const distance = spread * Math.pow(Math.random(), preset.falloff);
      const particleX = x + Math.cos(angle) * distance;
      const particleY = y + Math.sin(angle) * distance * 0.73;
      const size = (0.22 + Math.random() * preset.particleSize) * preset.size;
      const alpha = Math.max(0.012, preset.opacity * (0.17 + Math.random() * 0.58) * (1 - distance / (spread * 1.24)));
      dot(context, particleX, particleY, size, alpha);
      const outsideLeft = particleX < -size;
      const outsideRight = particleX > rect.width + size;
      const outsideTop = particleY < -size;
      const outsideBottom = particleY > rect.height + size;
      if (outsideLeft || outsideRight || outsideTop || outsideBottom) {
        // Keep the spill visibly offset from the frame edge, but push it away
        // from whichever edge it crossed so the illusion stays balanced.
        const offsetX = outsideLeft ? -SPILL_EDGE_OFFSET : outsideRight ? SPILL_EDGE_OFFSET : 0;
        const offsetY = outsideTop ? -SPILL_EDGE_OFFSET : outsideBottom ? SPILL_EDGE_OFFSET : 0;
        dot(spillContext, rect.left + particleX + offsetX, rect.top + particleY + offsetY, size, alpha);
      }
    }
    context.restore();
    spillContext.restore();
    queueTexture();
  }, [dot, queueTexture]);

  const animateDrip = useCallback((origin: { x: number; y: number }, preset: SprayPreset) => {
    const context = contextRef.current;
    if (!context) return;
    const spread = spreadRef.current * preset.size;
    const startX = origin.x + (Math.random() - 0.5) * spread * 0.7;
    const startY = origin.y + spread * 0.2;
    const length = 46 + Math.random() * 134;
    const duration = 620 + Math.random() * 460;
    const begun = performance.now();
    const generation = generationRef.current;
    const drawDrip = (now: number) => {
      if (generation !== generationRef.current || (dripReleaseRef.current && now - dripReleaseRef.current > DRIP_RELEASE_GRACE_MS)) return;
      const progress = Math.min(1, (now - begun) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      context.save();
      context.strokeStyle = pigmentRef.current;
      context.globalAlpha = preset.opacity * 0.74;
      context.lineCap = "round";
      context.lineWidth = Math.max(1.2, preset.particleSize * (1.1 + Math.random() * 0.9));
      context.beginPath();
      context.moveTo(startX, startY);
      context.bezierCurveTo(
        startX + (Math.random() - 0.5) * 3,
        startY + length * 0.28,
        startX + (Math.random() - 0.5) * 5,
        startY + length * 0.72,
        startX + (Math.random() - 0.5) * 6,
        startY + length * eased,
      );
      context.stroke();
      context.restore();
      queueTexture();
      if (progress < 1) requestAnimationFrame(drawDrip);
    };
    requestAnimationFrame(drawDrip);
  }, [queueTexture]);

  const hold = useCallback((now: number) => {
    holdFrameRef.current = 0;
    const holdPoint = holdPointRef.current;
    if (activePointerRef.current === null || !holdPoint) return;
    const preset = PRESETS[capRef.current];
    const interval = preset.dwell * 1000;
    if (now - lastHoldRef.current >= interval) {
      const passes = Math.max(1, Math.round(preset.buildup / 12));
      for (let index = 0; index < passes; index += 1) emit(holdPoint.x, holdPoint.y, 0.82);
      lastHoldRef.current = now;
    }
    if (capRef.current === "drip" && dripCountRef.current < 2 && now - holdStartedRef.current >= (dripCountRef.current ? 1000 : 500)) {
      animateDrip(holdPoint, preset);
      dripCountRef.current += 1;
    }
    holdFrameRef.current = requestAnimationFrame(hold);
  }, [animateDrip, emit]);

  const getPoint = useCallback((event: ReactPointerEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }, []);

  const draw = useCallback((event: ReactPointerEvent<HTMLCanvasElement>) => {
    const target = getPoint(event);
    const last = lastPointRef.current;
    const preset = PRESETS[capRef.current];
    const next = last
      ? (() => {
          const distance = Math.hypot(target.x - last.x, target.y - last.y);
          const response = Math.min(0.94, Math.max(0.22, 1 - preset.pathSmoothing * 0.65 + distance / 240));
          return { x: last.x + (target.x - last.x) * response, y: last.y + (target.y - last.y) * response };
        })()
      : target;
    if (!last) {
      emit(next.x, next.y, 0.9);
      lastPointRef.current = next;
      holdPointRef.current = next;
      return;
    }
    const deltaX = next.x - last.x;
    const deltaY = next.y - last.y;
    const distance = Math.hypot(deltaX, deltaY);
    const now = performance.now();
    if (distance >= 4) {
      holdStartedRef.current = now;
      dripCountRef.current = 0;
    }
    const steps = Math.max(1, Math.ceil(distance / preset.stampSpacing));
    for (let index = 1; index <= steps; index += 1) {
      emit(
        last.x + (deltaX * index) / steps,
        last.y + (deltaY * index) / steps,
        Math.min(1.2, 0.55 + distance / 48),
      );
    }
    lastPointRef.current = next;
    holdPointRef.current = next;
  }, [emit, getPoint]);

  const selectCap = useCallback((next: SprayCap) => {
    spreadSelectionsRef.current[capRef.current] = spreadRef.current;
    capRef.current = next;
    setCap(next);
    setSpread(clampSpread(spreadSelectionsRef.current[next] ?? DEFAULT_SPREAD_BY_CAP[next], next));
  }, []);

  const updateSpread = useCallback((next: number) => {
    const value = clampSpread(next, capRef.current);
    spreadSelectionsRef.current[capRef.current] = value;
    spreadRef.current = value;
    setSpread(value);
  }, []);

  const showSizePreview = useCallback(() => {
    const frame = frameRef.current;
    const preview = previewRef.current;
    if (!frame || !preview) return;
    const preset = PRESETS[capRef.current];
    const diameter = Math.max(16, spreadRef.current * preset.size * 2);
    preview.style.width = `${diameter}px`;
    preview.style.height = `${diameter}px`;
    if (pointerOnSurfaceRef.current && lastSurfacePointerRef.current) {
      preview.style.left = `${lastSurfacePointerRef.current.x}px`;
      preview.style.top = `${lastSurfacePointerRef.current.y}px`;
    } else {
      preview.style.left = `${frame.clientWidth / 2}px`;
      preview.style.top = `${frame.clientHeight / 2}px`;
    }
    preview.classList.remove("is-hidden");
  }, []);

  const resize = useCallback(() => {
    const frame = frameRef.current;
    const paint = paintRef.current;
    const texture = textureRef.current;
    const spill = spillRef.current;
    const context = contextRef.current;
    const textureContext = textureContextRef.current;
    const spillContext = spillContextRef.current;
    if (!frame || !paint || !texture || !spill || !context || !textureContext || !spillContext) return;
    const rect = frame.getBoundingClientRect();
    const mapSize = `${Math.round(rect.width)}:${Math.round(rect.height)}`;
    if (glassMapRef.current && mapSize !== glassMapSizeRef.current && rect.width > 0 && rect.height > 0) {
      glassMapSizeRef.current = mapSize;
      glassMapRef.current.setAttribute("href", createGlassDisplacementMap(rect.width, rect.height));
      glassMapRef.current.setAttribute("width", String(rect.width));
      glassMapRef.current.setAttribute("height", String(rect.height));
    }
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    scaleRef.current = scale;
    const canvases: Array<[HTMLCanvasElement, CanvasRenderingContext2D, number, number]> = [
      [paint, context, rect.width, rect.height],
      [texture, textureContext, rect.width, rect.height],
      [spill, spillContext, window.innerWidth, window.innerHeight],
    ];
    canvases.forEach(([canvas, canvasContext, width, height]) => {
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      canvasContext.setTransform(scale, 0, 0, scale, 0, 0);
    });
    clear();
    queueTexture();
  }, [clear, queueTexture]);

  useLayoutEffect(() => {
    const paint = paintRef.current;
    const texture = textureRef.current;
    const spill = spillRef.current;
    if (!paint || !texture || !spill) return;
    contextRef.current = paint.getContext("2d", { alpha: true, desynchronized: true });
    textureContextRef.current = texture.getContext("2d", { alpha: true, desynchronized: true });
    spillContextRef.current = spill.getContext("2d", { alpha: true, desynchronized: true });
    textureTileRef.current = createSurfaceTextureTile();
    queueTexture();
  }, [queueTexture]);

  useEffect(() => {
    if (!open) {
      clear();
      if (!inline) previousFocusRef.current?.focus();
      return;
    }
    if (!inline) previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    resize();
    if (!inline) closeRef.current?.focus();
    const handleResize = () => resize();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key === "[" || event.key === "]") {
        if (event.target instanceof HTMLInputElement) return;
        updateSpread(spreadRef.current + (event.key === "]" ? 10 : -10));
        showSizePreview();
        event.preventDefault();
        return;
      }
      if (!inline && event.target === document.body && [" ", "ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
      }
      if (!inline && event.key === "Tab") {
        const controls = frameRef.current?.querySelectorAll<HTMLElement>("button:not([disabled]), input:not([disabled])");
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("keydown", handleKeyDown, true);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [clear, inline, open, resize, showSizePreview, updateSpread]);

  useEffect(() => {
    if (inline || !open || !lockScroll) return;
    const { body, documentElement } = document;
    const scrollY = window.scrollY;
    const previous = {
      htmlOverflow: documentElement.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
    };
    documentElement.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    return () => {
      documentElement.style.overflow = previous.htmlOverflow;
      body.style.overflow = previous.bodyOverflow;
      body.style.position = previous.bodyPosition;
      body.style.top = previous.bodyTop;
      body.style.width = previous.bodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [inline, lockScroll, open]);

  useEffect(() => () => {
    generationRef.current += 1;
    if (holdFrameRef.current) cancelAnimationFrame(holdFrameRef.current);
    if (textureFrameRef.current) cancelAnimationFrame(textureFrameRef.current);
  }, []);

  if (typeof document === "undefined") return null;

  const spreadBounds = { min: PRESETS[cap].spread * 0.6, max: PRESETS[cap].spread * 1.4 };
  const spreadProgress = ((spread - spreadBounds.min) / Math.max(1, spreadBounds.max - spreadBounds.min)) * 100;
  const capPreviewScale = 0.9 + Math.min(1, Math.max(0, spreadProgress / 100)) * 0.2;
  const CapPreviewIcon = CAP_ICONS[cap];
  const rootStyle = {
    "--spray-paint-pigment": pigment,
    "--spray-paint-z": zIndex,
    "--spray-glass-blur": `${Math.max(0, Math.min(96, glassSettings.blur))}px`,
    "--spray-glass-light": Math.max(0, Math.min(100, glassSettings.topLight)) / 100,
    "--spray-glass-rim": 0.4 + Math.max(0, Math.min(100, glassSettings.topLight)) / 160,
    "--spray-glass-filter": `url("#${glassFilterId}")`,
  } as CSSProperties;

  const content = (
    <div className={`spray-paint-root${open ? " is-open" : ""}${inline ? " is-inline" : ""}${glassSettings.enabled ? " is-glass" : ""}${className ? ` ${className}` : ""}`} style={rootStyle} aria-hidden={!open}>
      <style>{SPRAY_PAINT_STYLES}</style>
      <svg className="spray-glass-defs" aria-hidden="true">
        <defs>
          <filter id={glassFilterId} x="-0.08" y="-0.08" width="1.16" height="1.16" filterUnits="objectBoundingBox" colorInterpolationFilters="sRGB">
            <feImage ref={glassMapRef} x="0" y="0" preserveAspectRatio="none" result="glass-map" />
            <feDisplacementMap in="SourceGraphic" in2="glass-map" scale={Math.max(0, Math.min(70, glassSettings.refraction)) * 0.45} xChannelSelector="R" yChannelSelector="G" result="glass-warp" />
            <feGaussianBlur in="glass-warp" stdDeviation={Math.max(0, Math.min(96, glassSettings.blur))} edgeMode="duplicate" result="glass-frost" />
            <feGaussianBlur in="glass-warp" stdDeviation="0.6" edgeMode="duplicate" result="glass-lens" />
            <feColorMatrix in="glass-map" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 1 0 0" result="glass-edge-mask" />
            <feComposite in="glass-lens" in2="glass-edge-mask" operator="in" result="glass-clear-edge" />
            <feComposite in="glass-frost" in2="glass-edge-mask" operator="out" result="glass-soft-center" />
            <feComposite in="glass-clear-edge" in2="glass-soft-center" operator="arithmetic" k2="1" k3="1" />
          </filter>
        </defs>
      </svg>
      <canvas ref={spillRef} className="spray-paint-spill" aria-hidden="true" />
      <div className="spray-paint-overlay" role={inline ? "group" : "dialog"} aria-modal={inline ? undefined : "true"} aria-label="Spray paint canvas">
        <div ref={frameRef} className="spray-paint-frame">
          {glassSettings.enabled ? (
            <div className="spray-glass-optics" aria-hidden="true">
              <span className="spray-glass-light" />
              <span className="spray-glass-bevel" />
            </div>
          ) : null}
          <canvas ref={textureRef} className="spray-paint-texture" aria-hidden="true" />
          <div ref={previewRef} className="spray-paint-preview is-hidden" aria-hidden="true" />
          <canvas
            ref={paintRef}
            className="spray-paint-canvas"
            aria-label="Interactive spray paint surface. Drag a pointer to paint."
            onContextMenu={(event) => event.preventDefault()}
            onPointerDown={(event) => {
              activePointerRef.current = event.pointerId;
              notifyPointerStatus(event.pointerType === "touch" ? "Touch spraying" : "Pointer spraying");
              previewRef.current?.classList.add("is-hidden");
              dripReleaseRef.current = 0;
              event.currentTarget.setPointerCapture?.(event.pointerId);
              lastPointRef.current = null;
              holdPointRef.current = getPoint(event);
              lastHoldRef.current = performance.now();
              holdStartedRef.current = lastHoldRef.current;
              dripCountRef.current = 0;
              draw(event);
              if (!holdFrameRef.current) holdFrameRef.current = requestAnimationFrame(hold);
            }}
            onPointerMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
              pointerOnSurfaceRef.current = inside;
              if (inside) {
                lastSurfacePointerRef.current = { x: event.clientX - rect.left, y: event.clientY - rect.top };
                if (activePointerRef.current === null) {
                  showSizePreview();
                  notifyPointerStatus("Pointer input ready");
                }
              }
              if (event.pointerId !== activePointerRef.current) return;
              if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
                stop(event.pointerId, "Pointer left surface. Press to spray again.");
                return;
              }
              draw(event);
            }}
            onPointerUp={(event) => stop(event.pointerId, "Pointer input ready")}
            onPointerCancel={(event) => stop(event.pointerId, "Pointer input ready")}
            onPointerLeave={(event) => {
              pointerOnSurfaceRef.current = false;
              if (activePointerRef.current !== null) stop(event.pointerId, "Pointer left surface. Press to spray again.");
              previewRef.current?.classList.add("is-hidden");
            }}
          />
          <div className="spray-paint-actions" aria-label="Paint surface controls">
            <button ref={closeRef} className="spray-paint-button" type="button" onClick={onClose} aria-label="Close paint mode and clear paint">
              <CloseIcon />
            </button>
            <span className="spray-paint-divider" aria-hidden="true" />
            {CAP_ORDER.map((capName) => {
              const Icon = CAP_ICONS[capName];
              const selected = cap === capName;
              return (
                <button
                  className={`spray-paint-button spray-paint-cap${selected ? " is-active" : ""}`}
                  type="button"
                  key={capName}
                  onClick={() => {
                    selectCap(capName);
                    requestAnimationFrame(showSizePreview);
                  }}
                  aria-label={`Select ${PRESETS[capName].name}`}
                  aria-pressed={selected}
                >
                  <Icon />
                </button>
              );
            })}
            <div className="spray-paint-size-control">
              <label className="spray-paint-size-slider" htmlFor={spreadId}>
                <span className="spray-paint-sr-only">Brush size</span>
                <input
                  id={spreadId}
                  type="range"
                  min={spreadBounds.min}
                  max={spreadBounds.max}
                  step="0.1"
                  value={spread}
                  aria-label="Brush size"
                  aria-valuetext={`${Math.round(spread)} pixels`}
                  style={{ "--spray-paint-size-fill": `${Math.round(spreadProgress)}%` } as CSSProperties}
                  onChange={(event) => {
                    updateSpread(Number(event.target.value));
                    showSizePreview();
                  }}
                />
              </label>
              <span className="spray-paint-cap-preview" style={{ transform: `scale(${capPreviewScale.toFixed(3)})` }} aria-hidden="true"><CapPreviewIcon /></span>
            </div>
            <button className="spray-paint-button" type="button" onClick={clear} aria-label="Clear paint">
              <ClearIcon />
            </button>
          </div>
          <div className="spray-paint-colors" role="radiogroup" aria-label="Paint color">
            {safePalette.map((color) => {
              const selected = pigment === color.color;
              return (
                <button
                  className={`spray-paint-color${selected ? " is-active" : ""}`}
                  type="button"
                  role="radio"
                  key={`${color.name}-${color.color}`}
                  onClick={() => setPigment(color.color)}
                  aria-label={`Select ${color.name.toLowerCase()} paint`}
                  aria-checked={selected}
                >
                  <span style={{ background: color.color }} aria-hidden="true" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  return inline ? content : createPortal(content, document.body);
}

export default SprayPaint;
