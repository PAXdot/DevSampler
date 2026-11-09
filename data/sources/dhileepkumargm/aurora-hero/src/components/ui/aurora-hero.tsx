import React, { useEffect, useMemo, useRef } from "react";

export interface AuroraHeroProps {
  ribbonCount?: number;
  speed?: number;
  complexity?: number;
  amplitude?: number;
  mouseIntensity?: number;
  pulseEffect?: boolean;
  palette?: string;
  theme?: "dark" | "light";
}

/**
 * AuroraHero
 *
 * A full-screen canvas hero with simplex-noise ribbons. Supports
 * light/dark themes and live interaction (move the cursor to shape the light).
 */
export default function AuroraHero({
  ribbonCount = 4,
  speed = 0.006,
  complexity = 0.012,
  amplitude = 250,
  mouseIntensity = 1,
  pulseEffect = true,
  palette = "Arctic Frost",
  theme = "dark",
}: AuroraHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>();

  // Static palettes
  const palettes = useMemo(
    () => ({
      "Arctic Frost": ["#00f2ff", "#00a2ff", "#7d00ff"],
      "Solar Flare": ["#ffbe0b", "#fb5607", "#ff006e"],
      Nebula: ["#ff00f5", "#a200ff", "#00a2ff"],
      "Forest Spirit": ["#2dc84d", "#00ff95", "#00b8a2"],
      Classic: ["#00ff6a", "#058c42", "#023020"],
    }),
    [],
  );

  const paletteColors =
    (palettes as Record<string, string[]>)[palette] || palettes["Arctic Frost"];

  // Theme-based class mapping
  const currentPalette = useMemo(
    () =>
      theme === "dark"
        ? {
            text: "text-white",
            textMuted: "text-slate-300",
            bg: "bg-[#010103]",
            buttonPrimary: "bg-white text-black",
            buttonSecondary: "bg-white/5 border-white/20 hover:bg-white/10",
          }
        : {
            text: "text-slate-900",
            textMuted: "text-slate-600",
            bg: "bg-[#f0f2f8]",
            buttonPrimary: "bg-black text-white",
            buttonSecondary: "bg-black/5 border-black/20 hover:bg-black/10",
          },
    [theme],
  );

  // Canvas animation effect
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let time = 0;
    let mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      active: false,
    };

    // Mouse tracking
    const onMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY, active: true };
    };
    window.addEventListener("mousemove", onMouseMove);

    // Resize handler
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Simplex noise implementation (self-contained)
    const simplex = (() => {
      const F2 = 0.5 * (Math.sqrt(3) - 1);
      const G2 = (3 - Math.sqrt(3)) / 6;
      const p = new Uint8Array(256);
      for (let i = 0; i < 256; i++) p[i] = i;
      for (let i = 255; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [p[i], p[j]] = [p[j], p[i]];
      }
      const perm = new Uint8Array(512);
      const perm12 = new Uint8Array(512);
      const grad3 = new Float32Array([
        1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1,
        0, -1, 0, 1, -1, 0, -1, 1, 0, 1, -1, 0, -1, 0, -1,
      ]);
      for (let i = 0; i < 512; i++) {
        perm[i] = p[i & 255];
        perm12[i] = perm[i] % 12;
      }
      return (xin: number, yin: number) => {
        let n0 = 0,
          n1 = 0,
          n2 = 0;
        const s = (xin + yin) * F2;
        const i = Math.floor(xin + s);
        const j = Math.floor(yin + s);
        const t = (i + j) * G2;
        const X0 = i - t;
        const Y0 = j - t;
        const x0 = xin - X0;
        const y0 = yin - Y0;
        const i1 = x0 > y0 ? 1 : 0;
        const j1 = x0 > y0 ? 0 : 1;
        const x1 = x0 - i1 + G2;
        const y1 = y0 - j1 + G2;
        const x2 = x0 - 1 + 2 * G2;
        const y2 = y0 - 1 + 2 * G2;
        const ii = i & 255;
        const jj = j & 255;
        let t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 >= 0) {
          const gi = perm12[ii + perm[jj]];
          t0 *= t0;
          n0 = t0 * t0 * (grad3[gi * 3] * x0 + grad3[gi * 3 + 1] * y0);
        }
        let t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 >= 0) {
          const gi = perm12[ii + i1 + perm[jj + j1]];
          t1 *= t1;
          n1 = t1 * t1 * (grad3[gi * 3] * x1 + grad3[gi * 3 + 1] * y1);
        }
        let t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 >= 0) {
          const gi = perm12[ii + 1 + perm[jj + 1]];
          t2 *= t2;
          n2 = t2 * t2 * (grad3[gi * 3] * x2 + grad3[gi * 3 + 1] * y2);
        }
        return 70 * (n0 + n1 + n2);
      };
    })();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += speed;

      for (let i = 0; i < ribbonCount; i++) {
        const color = paletteColors[i % paletteColors.length];
        ctx.beginPath();
        const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.5, color);
        grad.addColorStop(1, "transparent");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;

        for (let x = 0; x < canvas.width; x += 5) {
          const dx = x - mouse.x;
          const dy = canvas.height / 2 - mouse.y;
          const dist = Math.hypot(dx, dy);
          const m = mouse.active
            ? 1 + (1 - Math.min(1, dist / 400)) * mouseIntensity
            : 1;
          const noise = simplex(x * complexity * m, i * 1000 + time);
          const pulse = pulseEffect
            ? Math.sin(time * 0.5 + i * 1000) * 0.1 + 0.9
            : 1;
          const y = canvas.height / 2 + noise * amplitude * pulse * m;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(frameRef.current!);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, [
    ribbonCount,
    speed,
    complexity,
    amplitude,
    mouseIntensity,
    pulseEffect,
    paletteColors,
  ]);

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden ${currentPalette.bg} ${currentPalette.text}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-60 mix-blend-lighten"
      />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <header className="mb-10 fade-in-up">
          <h1 className="text-5xl font-bold sm:text-7xl md:text-8xl">
            Aurora Hero
          </h1>
          <p
            className={`mt-4 max-w-2xl text-lg md:text-xl ${currentPalette.textMuted}`}
          >
            A deeply interactive hero component powered by simplex noise. Move
            your cursor to shape the light.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-4 fade-in-up delay">
          <button
            className={`py-3 px-8 font-semibold rounded-lg shadow-lg transition-transform hover:scale-105 ${currentPalette.buttonPrimary}`}
          >
            Explore the Cosmos
          </button>
          <button
            className={`py-3 px-8 font-semibold rounded-lg border backdrop-blur-sm shadow-lg transition-transform hover:scale-105 ${currentPalette.buttonSecondary}`}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
