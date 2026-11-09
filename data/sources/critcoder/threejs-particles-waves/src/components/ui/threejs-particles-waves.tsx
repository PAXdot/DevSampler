"use client";

import { useEffect, useRef } from "react";

export interface ParticlesWavesProps {
  /** number of particles per row / column */
  density?: number;
  /** animation speed */
  speed?: number;
  /** vertical wave amplitude */
  amplitude?: number;
  /** distance between particles */
  separation?: number;
  /** color of the particles */
  particleColor?: string;
  /** background color of the scene */
  bgColor?: string;
}

/**
 * A canvas port of the classic three.js "particles waves" demo.
 * A grid of dots rides two overlapping sine waves; dot size and
 * brightness follow the wave height so the field looks like a
 * breathing sheet of light.
 */
export const ParticlesWaves = ({
  density = 50,
  speed = 1,
  amplitude = 50,
  separation = 100,
  particleColor = "#ffffff",
  bgColor = "#000000",
}: ParticlesWavesProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const amountX = Math.max(4, Math.round(density));
    const amountY = Math.max(4, Math.round(density));

    let count = 0;
    let raf = 0;

    const render = () => {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      const spread = separation * 0.7;
      const gridW = amountX * spread;
      const gridH = amountY * spread;
      const startX = width / 2 - gridW / 2;
      const startY = height / 2 - gridH / 2;

      for (let ix = 0; ix < amountX; ix++) {
        for (let iy = 0; iy < amountY; iy++) {
          const wave =
            Math.sin((ix + count) * 0.3) + Math.sin((iy + count) * 0.5);

          const px = startX + ix * spread;
          const py = startY + iy * spread * 0.6 + wave * amplitude * 0.5;

          const scale = (Math.sin((ix + count) * 0.3) + 1) * 0.5;
          const size = 1 + scale * 4;
          const alpha = 0.3 + scale * 0.7;

          ctx.globalAlpha = alpha;
          ctx.fillStyle = particleColor;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      count += 0.05 * speed;
      raf = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density, speed, amplitude, separation, particleColor, bgColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
};

export default ParticlesWaves;
