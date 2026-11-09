"use client";

// An ASCII vortex field: a grid of monospace glyphs swirls around the centre,
// their brightness driven by a rotating polar field, then settles into a word.
// Pure canvas 2D, no dependencies. The renderer reads a mutable config every
// frame, so props update the effect live.

import { useEffect, useRef, useState } from "react";

const GLYPHS = " .:-=+*#%@";

export type StageConfig = {
  rows: number;
  ink: string;
  logoColor: string;
  bg: string;
  text: string;
  speed: number;
  swirl: number;
  density: number;
  zoom: number;
};

export type StageEvents = {
  onReady?: () => void;
};

export const DEFAULT_STAGE: StageConfig = {
  rows: 44,
  ink: "#8b5cf6",
  logoColor: "#ffffff",
  bg: "#08070d",
  text: "MIDJOURNEY",
  speed: 1,
  swirl: 1,
  density: 0.6,
  zoom: 1,
};

// A minimal 5x7 block font so the settled word is drawn from real cells.
const FONT: Record<string, string[]> = {
  A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  B: ["11110", "10001", "11110", "10001", "10001", "10001", "11110"],
  C: ["01111", "10000", "10000", "10000", "10000", "10001", "01110"],
  D: ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
  E: ["11111", "10000", "11110", "10000", "10000", "10000", "11111"],
  G: ["01110", "10001", "10000", "10111", "10001", "10001", "01110"],
  I: ["11111", "00100", "00100", "00100", "00100", "00100", "11111"],
  J: ["00111", "00010", "00010", "00010", "10010", "10010", "01100"],
  M: ["10001", "11011", "10101", "10101", "10001", "10001", "10001"],
  N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
  O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
  U: ["10001", "10001", "10001", "10001", "10001", "10001", "01110"],
  Y: ["10001", "10001", "01010", "00100", "00100", "00100", "00100"],
  " ": ["00000", "00000", "00000", "00000", "00000", "00000", "00000"],
};

function wordMask(text: string, cols: number, rows: number) {
  const letters = text.toUpperCase().split("");
  const glyphW = 5;
  const glyphH = 7;
  const gap = 1;
  const totalW = letters.length * (glyphW + gap) - gap;
  const scale = Math.max(1, Math.floor((cols * 0.8) / totalW));
  const pxW = totalW * scale;
  const pxH = glyphH * scale;
  const ox = Math.floor((cols - pxW) / 2);
  const oy = Math.floor((rows - pxH) / 2);
  const mask = new Set<string>();
  letters.forEach((ch, li) => {
    const g = FONT[ch] ?? FONT[" "];
    for (let y = 0; y < glyphH; y++) {
      for (let x = 0; x < glyphW; x++) {
        if (g[y][x] === "1") {
          for (let sy = 0; sy < scale; sy++) {
            for (let sx = 0; sx < scale; sx++) {
              const cx = ox + li * (glyphW + gap) * scale + x * scale + sx;
              const cy = oy + y * scale + sy;
              mask.add(`${cx},${cy}`);
            }
          }
        }
      }
    }
  });
  return mask;
}

// The core hook: drives a canvas from a mutable config ref.
export function useSwirlStage(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  cfg: React.MutableRefObject<StageConfig>,
  onFail?: () => void,
) {
  const api = useRef({ replay: () => {} });
  const startRef = useRef(performance.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      onFail?.();
      return;
    }

    api.current.replay = () => {
      startRef.current = performance.now();
    };

    let raf = 0;
    let running = true;

    const render = (now: number) => {
      if (!running) return;
      const c = cfg.current;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = c.bg;
      ctx.fillRect(0, 0, w, h);

      const rows = c.rows;
      const cell = (h / rows) * c.zoom;
      const cols = Math.ceil(w / cell) + 2;
      const fontSize = cell * 1.2;
      ctx.font = `${fontSize}px ui-monospace, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const t = ((now - startRef.current) / 1000) * c.speed;
      const settle = Math.min(1, Math.max(0, (t - 2.5) / 2.5));
      const mask = wordMask(c.text, cols, rows);

      const cx = cols / 2;
      const cy = rows / 2;

      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          const dx = gx - cx;
          const dy = gy - cy;
          const r = Math.sqrt(dx * dx + dy * dy);
          const ang = Math.atan2(dy, dx);
          const field =
            Math.sin(ang * 3 * c.swirl + r * 0.35 - t * 2) *
            Math.cos(r * 0.25 - t);
          const swirlBright = (field + 1) / 2;

          const inWord = mask.has(`${gx},${gy}`);
          const bright = inWord
            ? Math.max(swirlBright * (1 - settle), settle)
            : swirlBright * (1 - settle * 0.85);

          if (bright < c.density * 0.4) continue;

          const gi = Math.min(
            GLYPHS.length - 1,
            Math.floor(bright * GLYPHS.length),
          );
          const glyph = GLYPHS[gi];
          if (glyph === " ") continue;

          ctx.fillStyle = inWord && settle > 0.2 ? c.logoColor : c.ink;
          ctx.globalAlpha = Math.min(1, bright * (0.5 + c.density));
          ctx.fillText(glyph, gx * cell + cell / 2, gy * cell + cell / 2);
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
    };
  }, [canvasRef, cfg, onFail]);

  return api;
}

export type SwirlPlaygroundProps = Partial<StageConfig>;

export function SwirlPlayground(props: SwirlPlaygroundProps = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);
  const cfg = useRef<StageConfig>({ ...DEFAULT_STAGE, ...props });

  useEffect(() => {
    cfg.current = { ...DEFAULT_STAGE, ...props };
  });

  useSwirlStage(canvasRef, cfg, () => setFailed(true));

  return (
    <div
      className="relative z-10 h-full w-full overflow-hidden"
      style={{ backgroundColor: cfg.current.bg }}
    >
      {failed ? (
        <div className="flex h-full w-full items-center justify-center px-6 text-center text-[13px] text-white/60">
          Your browser can&apos;t run the canvas playground here.
        </div>
      ) : (
        <canvas ref={canvasRef} className="block h-full w-full" />
      )}
    </div>
  );
}

// Experiment variants ride the same engine with different presets.
export function LogoGenerator(props: SwirlPlaygroundProps = {}) {
  return (
    <SwirlPlayground
      text="LUMEN"
      ink="#22d3ee"
      logoColor="#ffffff"
      {...props}
    />
  );
}
export function SoundSwirl(props: SwirlPlaygroundProps = {}) {
  return <SwirlPlayground swirl={2.2} speed={1.6} ink="#f472b6" {...props} />;
}
export function CursorTrail(props: SwirlPlaygroundProps = {}) {
  return (
    <SwirlPlayground density={0.9} ink="#34d399" bg="#04120c" {...props} />
  );
}
export function GradientInk(props: SwirlPlaygroundProps = {}) {
  return (
    <SwirlPlayground
      ink="#fbbf24"
      logoColor="#fb7185"
      bg="#140a02"
      {...props}
    />
  );
}
export function ClickShock(props: SwirlPlaygroundProps = {}) {
  return (
    <SwirlPlayground
      swirl={3.2}
      speed={2}
      density={0.4}
      ink="#60a5fa"
      {...props}
    />
  );
}
export function SwirlExperiments(props: SwirlPlaygroundProps = {}) {
  return <SwirlPlayground {...props} />;
}
export function ExperimentStage(props: SwirlPlaygroundProps = {}) {
  return <SwirlPlayground {...props} />;
}

export default SwirlPlayground;
