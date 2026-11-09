// src/components/aurora-curtains.tsx
import React, { useRef, useEffect } from "react";

export interface AuroraCurtainsProps {
  /** Number of stars to render */
  starCount?: number;
  /** Number of flowing ribbons */
  ribbonCount?: number;
  /** Speed at which ribbons evolve */
  ribbonSpeed?: number;
  /** Amplitude of ribbon sway */
  swayAmplitude?: number;
  /** Trail overlay opacity (0–1) */
  trailOpacity?: number;
  /** Width range for ribbons [min, max] */
  ribbonWidthRange?: [number, number];
  /** Height segments per ribbon */
  ribbonSegments?: number;
  /** Canvas width in px or full viewport */
  width?: number;
  /** Canvas height in px or full viewport */
  height?: number;
  /** ARIA label for the animation */
  ariaLabel?: string;
  /** Extra container classes */
  className?: string;
}

const AuroraCurtains: React.FC<AuroraCurtainsProps> = ({
  starCount = 200,
  ribbonCount = 5,
  ribbonSpeed = 0.05,
  swayAmplitude = 0.5,
  trailOpacity = 0,
  ribbonWidthRange = [50, 150],
  ribbonSegments = 20,
  width,
  height,
  ariaLabel = "Animated aurora curtains",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = width ?? window.innerWidth);
    let h = (canvas.height = height ?? window.innerHeight);

    // Simplex noise utility
    const simplex = new (function () {
      const F2 = 0.5 * (Math.sqrt(3) - 1);
      const G2 = (3 - Math.sqrt(3)) / 6;
      const grad3 = [
        [1, 1, 0],
        [-1, 1, 0],
        [1, -1, 0],
        [-1, -1, 0],
        [1, 0, 1],
        [-1, 0, 1],
        [1, 0, -1],
        [-1, 0, -1],
        [0, 1, 1],
        [0, -1, 1],
        [0, 1, -1],
        [0, -1, -1],
      ];
      const perm = Array.from({ length: 512 }, (_, i) => i & 255);

      this.noise = (xin: number, yin: number) => {
        let n0 = 0,
          n1 = 0,
          n2 = 0;
        const s = (xin + yin) * F2;
        const i = Math.floor(xin + s);
        const j = Math.floor(yin + s);
        const t = (i + j) * G2;
        const X0 = i - t,
          Y0 = j - t;
        const x0 = xin - X0,
          y0 = yin - Y0;
        const i1 = x0 > y0 ? 1 : 0,
          j1 = x0 > y0 ? 0 : 1;
        const x1 = x0 - i1 + G2,
          y1 = y0 - j1 + G2;
        const x2 = x0 - 1 + 2 * G2,
          y2 = y0 - 1 + 2 * G2;
        const ii = i & 255,
          jj = j & 255;
        const gi0 = perm[ii + perm[jj]] % 12;
        const gi1 = perm[ii + i1 + perm[jj + j1]] % 12;
        const gi2 = perm[ii + 1 + perm[jj + 1]] % 12;

        const calc = (u: number, v: number, gi: number) => {
          let t = 0.5 - u * u - v * v;
          if (t < 0) return 0;
          t *= t;
          return t * t * (grad3[gi][0] * u + grad3[gi][1] * v);
        };

        n0 = calc(x0, y0, gi0);
        n1 = calc(x1, y1, gi1);
        n2 = calc(x2, y2, gi2);
        return 70 * (n0 + n1 + n2);
      };
    })();

    // Star class
    class Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      draw() {
        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Ribbon class
    class Ribbon {
      x: number;
      width: number;
      hue: number;
      seedX: number;
      seedY: number;
      constructor() {
        this.x = Math.random() * w;
        this.width =
          Math.random() * (ribbonWidthRange[1] - ribbonWidthRange[0]) +
          ribbonWidthRange[0];
        this.hue = 180 + Math.random() * 60;
        this.seedX = Math.random() * 10;
        this.seedY = Math.random() * 10;
      }
      draw(t: number) {
        const grad = ctx.createLinearGradient(this.x, 0, this.x, h);
        const c1 = `hsla(${this.hue + Math.sin(t * 0.05) * 10},80%,60%,0)`;
        const c2 = `hsla(${this.hue},80%,60%,0.4)`;
        const c3 = `hsla(${this.hue + Math.cos(t * 0.03) * 10},80%,60%,0)`;
        grad.addColorStop(0, c1);
        grad.addColorStop(0.5, c2);
        grad.addColorStop(1, c3);
        ctx.fillStyle = grad;

        ctx.beginPath();
        ctx.moveTo(this.x - this.width / 2, h);
        for (let i = 0; i <= ribbonSegments; i++) {
          const y = h - (h / ribbonSegments) * i;
          const sway =
            simplex.noise(this.seedX + t * ribbonSpeed, y * 0.01) *
            this.width *
            swayAmplitude;
          const curve =
            simplex.noise(this.seedY + t * ribbonSpeed * 1.2, y * 0.02) * 50;
          ctx.lineTo(this.x + sway, y - curve);
        }
        ctx.lineTo(this.x + this.width / 2, h);
        ctx.closePath();
        ctx.fill();
      }
    }

    // initialize
    let stars: Star[] = [];
    let ribbons: Ribbon[] = [];
    const setup = () => {
      w = canvas.width = width ?? window.innerWidth;
      h = canvas.height = height ?? window.innerHeight;
      stars = Array.from({ length: starCount }, () => new Star());
      ribbons = Array.from({ length: ribbonCount }, () => new Ribbon());
    };

    // animation
    const animate = () => {
      ctx.fillStyle = `rgba(0,0,0,${trailOpacity})`;
      ctx.fillRect(0, 0, w, h);
      stars.forEach((s) => s.draw());
      ctx.globalCompositeOperation = "lighter";
      const t = (timeRef.current += 1);
      ribbons.forEach((r) => r.draw(t));
      ctx.globalCompositeOperation = "source-over";
      frameRef.current = requestAnimationFrame(animate);
    };

    // events
    const onResize = () => {
      cancelAnimationFrame(frameRef.current!);
      setup();
      animate();
    };

    window.addEventListener("resize", onResize);
    setup();
    animate();

    return () => {
      cancelAnimationFrame(frameRef.current!);
      window.removeEventListener("resize", onResize);
    };
  }, [
    starCount,
    ribbonCount,
    ribbonSpeed,
    swayAmplitude,
    trailOpacity,
    ribbonWidthRange,
    ribbonSegments,
    width,
    height,
  ]);

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={`relative overflow-hidden bg-[hsl(var(--background))] ${className}`}
      style={{ width: width ?? "100vw", height: height ?? "100vh" }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="block w-full h-full"
      />
    </div>
  );
};

export default AuroraCurtains;
