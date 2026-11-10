// src/components/WavesText.tsx

import React, { FC, useRef, useEffect } from "react";

export interface WavesTextProps {
  /** Text to render with the wave effect */
  text?: string;
  /** Base font size in pixels */
  fontSize?: number;
  /** CSS font-family stack */
  fontFamily?: string;
  /** Maximum wave amplitude in pixels */
  amplitude?: number;
  /** Wave frequency factor */
  frequency?: number;
  /** Animation speed factor */
  speed?: number;
  /** Empty space around text in pixels */
  margin?: number;
  /** Horizontal sampling step in pixels */
  spacingX?: number;
  /** Stroke color outside the text mask */
  outsideColor?: string;
  /** Stroke color inside the text mask */
  insideColor?: string;
  /** ARIA label for screen readers */
  ariaLabel?: string;
  /** Extra CSS class for the canvas element */
  className?: string;
}

const WavesText: FC<WavesTextProps> = ({
  text = "EZPZ Components",
  fontSize = 300,
  fontFamily = "Arial Black, Arial, system-ui, sans-serif",
  amplitude = 30,
  frequency = 0.03,
  speed = 0.003,
  margin = 200,
  spacingX = 6,
  outsideColor = "rgba(0, 255, 255, 0.3)",
  insideColor = "rgba(255, 0, 255, 1)",
  ariaLabel = "Animated wavy text",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    // 1. Measure text dimensions offscreen
    const measure =
      typeof OffscreenCanvas === "function"
        ? new OffscreenCanvas(1, 1)
        : document.createElement("canvas");
    const mctx = measure.getContext("2d")!;
    mctx.font = `bold ${fontSize}px ${fontFamily}`;
    const metrics = mctx.measureText(text);
    const textW = Math.ceil(metrics.width);
    const textH = Math.ceil(
      (metrics.actualBoundingBoxAscent || fontSize * 0.8) +
        (metrics.actualBoundingBoxDescent || fontSize * 0.2),
    );

    // 2. Resize canvas
    const width = textW + margin * 2;
    const height = textH + margin * 2;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    // 3. Render text mask
    const maskCanvas =
      typeof OffscreenCanvas === "function"
        ? new OffscreenCanvas(width, height)
        : document.createElement("canvas");
    maskCanvas.width = width;
    maskCanvas.height = height;
    const maskCtx = maskCanvas.getContext("2d")!;
    maskCtx.fillStyle = "#fff";
    maskCtx.font = `bold ${fontSize}px ${fontFamily}`;
    maskCtx.textAlign = "center";
    maskCtx.textBaseline = "middle";
    maskCtx.fillText(text, width / 2, height / 2);
    const maskData = maskCtx.getImageData(0, 0, width, height).data;

    // 4. Precompute center & max distance
    const cx = width / 2;
    const cy = height / 2;
    const maxDist = Math.hypot(cx, cy);

    // 5. Wave function
    function wave(x: number, y: number, t: number) {
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.hypot(dx, dy);
      const phase = (t - dist * 0.002) * speed;
      const amp = amplitude * (1 - dist / maxDist) * (y / height);
      return Math.sin(phase + dist * frequency) * amp;
    }

    // 6. Draw loop
    function draw(time: number) {
      ctx.clearRect(0, 0, width, height);

      for (let x = 0; x < width; x += spacingX) {
        ctx.beginPath();
        let insideState = false;

        for (let y = 0; y < height; y++) {
          const idx = (y * width + x) * 4 + 3;
          const inside = maskData[idx] > 128;
          const dx = inside ? wave(x, y, time) : 0;
          const drawX = (x + dx) * dpr;
          const drawY = y * dpr;

          if (y === 0 || inside !== insideState) {
            if (y > 0) ctx.stroke();
            insideState = inside;
            ctx.beginPath();
            ctx.lineWidth = inside ? 4 * dpr : 1.5 * dpr;
            ctx.strokeStyle = inside ? insideColor : outsideColor;
            ctx.moveTo(drawX, drawY);
          } else {
            ctx.lineTo(drawX, drawY);
          }
        }

        ctx.stroke();
      }

      frameRef.current = requestAnimationFrame(draw);
    }

    draw(0);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [
    text,
    fontSize,
    fontFamily,
    amplitude,
    frequency,
    speed,
    margin,
    spacingX,
    insideColor,
    outsideColor,
  ]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={ariaLabel}
      className={className}
      style={{ display: "block", background: "transparent" }}
    />
  );
};

export default WavesText;
