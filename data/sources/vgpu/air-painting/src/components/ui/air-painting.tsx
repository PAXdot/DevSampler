"use client";

import { useEffect, useRef, useState } from "react";

import { createRenderer } from "./air-painting-utils/renderer";

export interface AirPaintingProps {
  readonly brushSize?: number;
}

export function Example({ brushSize = 48 }: AirPaintingProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<ReturnType<typeof createRenderer> | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const renderer = createRenderer({ canvas, brushSize });
    rendererRef.current = renderer;
    void renderer.ready.then(
      () => setStatus("ready"),
      () => setStatus("error"),
    );
    return () => {
      rendererRef.current = null;
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    rendererRef.current?.setBrushSize(brushSize);
  }, [brushSize]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        aria-label="Frosted glass canvas. Drag or touch to reveal the scene beneath."
        className="block h-full w-full touch-none bg-black"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 text-white">
        <div className="rounded-full border border-white/15 bg-black/45 px-4 py-2 text-sm backdrop-blur-md">
          {status === "loading"
            ? "Preparing GPU canvas..."
            : status === "error"
              ? "WebGPU is unavailable"
              : "Drag across the glass"}
        </div>
        <button
          type="button"
          onClick={() => rendererRef.current?.clear()}
          className="pointer-events-auto rounded-full border border-white/15 bg-black/45 px-4 py-2 text-sm backdrop-blur-md transition-colors hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          Reset frost
        </button>
      </div>
    </div>
  );
}

export default Example;
