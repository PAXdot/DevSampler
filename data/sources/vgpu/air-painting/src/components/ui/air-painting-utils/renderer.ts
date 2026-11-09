import { init, surface, type Gpu, type Surface } from "vgpu";

import { createVisualPipeline, type VisualPipeline } from "./visual-pipeline";

interface RendererOptions {
  readonly canvas: HTMLCanvasElement;
  readonly brushSize?: number;
}

const SOURCE_WIDTH = 960;
const SOURCE_HEIGHT = 540;

function createScene(width: number, height: number): Uint8Array {
  const pixels = new Uint8Array(width * height * 4);
  const byte = (value: number) => Math.max(0, Math.min(255, Math.round(value)));
  for (let y = 0; y < height; y++) {
    const ny = y / Math.max(1, height - 1);
    for (let x = 0; x < width; x++) {
      const nx = x / Math.max(1, width - 1);
      const offset = (y * width + x) * 4;
      const glowA = Math.max(0, 1 - Math.hypot(nx - 0.24, ny - 0.35) * 2.3);
      const glowB = Math.max(0, 1 - Math.hypot(nx - 0.76, ny - 0.62) * 2.1);
      const waves = (Math.sin(nx * 22 + ny * 8) + 1) * 0.5;
      pixels[offset] = byte(24 + glowA * 190 + waves * 22);
      pixels[offset + 1] = byte(28 + glowB * 145 + glowA * 38);
      pixels[offset + 2] = byte(50 + glowB * 190 + waves * 35);
      pixels[offset + 3] = 255;
    }
  }
  return pixels;
}

export function createRenderer({ canvas, brushSize = 48 }: RendererOptions) {
  let disposed = false;
  let gpu: Gpu | undefined;
  let output: Surface | undefined;
  let pipeline: VisualPipeline | undefined;
  let frameId = 0;
  let activePointer: number | undefined;
  let previous = { x: 0.5, y: 0.5 };
  let radius = Math.max(12, Math.min(120, brushSize));

  const point = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: Math.max(0, Math.min(1, (event.clientX - rect.left) / Math.max(1, rect.width))),
      y: Math.max(0, Math.min(1, (event.clientY - rect.top) / Math.max(1, rect.height))),
    };
  };

  const paint = (event: PointerEvent, start = false) => {
    if (!pipeline || activePointer !== event.pointerId) return;
    const current = point(event);
    pipeline.paintPointer(start ? current : previous, current, radius);
    previous = current;
  };
  const onPointerDown = (event: PointerEvent) => {
    if (activePointer !== undefined) return;
    activePointer = event.pointerId;
    canvas.setPointerCapture(event.pointerId);
    paint(event, true);
  };
  const onPointerMove = (event: PointerEvent) => paint(event);
  const onPointerEnd = (event: PointerEvent) => {
    if (activePointer !== event.pointerId) return;
    activePointer = undefined;
    pipeline?.releasePointer();
  };

  canvas.addEventListener("pointerdown", onPointerDown);
  canvas.addEventListener("pointermove", onPointerMove);
  canvas.addEventListener("pointerup", onPointerEnd);
  canvas.addEventListener("pointercancel", onPointerEnd);

  const draw = () => {
    if (disposed || !pipeline || !output) return;
    pipeline.renderVisualFrame(output, {
      dpr: Math.min(2, Math.max(1, window.devicePixelRatio || 1)),
      hasFrame: true,
      showCursor: activePointer !== undefined,
    });
    frameId = requestAnimationFrame(draw);
  };

  const ready = (async () => {
    gpu = await init({ label: "air-painting" });
    if (disposed) {
      gpu.dispose();
      return;
    }
    output = surface(gpu, canvas, { autoResize: true });
    pipeline = createVisualPipeline(gpu, {
      sourceWidth: SOURCE_WIDTH,
      sourceHeight: SOURCE_HEIGHT,
    });
    pipeline.writeFrame(createScene(SOURCE_WIDTH, SOURCE_HEIGHT));
    frameId = requestAnimationFrame(draw);
  })();

  return {
    ready,
    setBrushSize(value: number) {
      radius = Math.max(12, Math.min(120, value));
    },
    clear() {
      pipeline?.clearMask();
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      if (frameId) cancelAnimationFrame(frameId);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerEnd);
      canvas.removeEventListener("pointercancel", onPointerEnd);
      pipeline?.dispose();
      gpu?.dispose();
    },
  };
}
