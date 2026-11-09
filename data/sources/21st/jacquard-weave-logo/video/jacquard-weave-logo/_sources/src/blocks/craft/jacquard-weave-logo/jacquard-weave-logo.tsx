// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useRef, useState } from "react";
import { AbsoluteFill, cancelRender, continueRender, delayRender, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, fitFontSize, useLayout, withAlpha } from "../../../kit/index";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./jacquard-weave-logo.schema";

const smooth = (x: number) => { const t = Math.max(0, Math.min(1, x)); return t * t * (3 - 2 * t); };
export const Component: React.FC<z.infer<typeof schema>> = ({ logo, caption, primary, secondary, color, background, fontFamily }) => {
  const frame = useCurrentFrame();
  const { width: w, height: h, portrait } = useLayout();
  const canvas = useRef<HTMLCanvasElement>(null);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [handle] = useState(() => delayRender("weave: logo pixels"));
  const released = useRef(false);
  useLayoutEffect(() => {
    let alive = true;
    const img = new Image(); img.crossOrigin = "anonymous";
    img.onload = () => { if (alive) setImage(img); if (!released.current) { released.current = true; continueRender(handle); } };
    img.onerror = () => cancelRender(new Error("Unable to load the woven logo"));
    img.src = logo || SAMPLE_LOGO;
    return () => { alive = false; };
  }, [logo, handle]);
  const x = w * .09, y = h * .12, fw = w * .82, fh = h * (portrait ? .64 : .65);
  const cols = portrait ? 112 : 174, rows = portrait ? 180 : 100;
  const mask = useRef<{ key: string; data: Uint8ClampedArray } | null>(null);
  const progress = smooth((frame - 12) / 116), landed = smooth((frame - 128) / 17);
  useLayoutEffect(() => {
    const ctx = canvas.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx || !image) return;
    const key = `${image.src}:${cols}:${rows}`;
    if (mask.current?.key !== key) {
      const c = document.createElement("canvas"); c.width = cols; c.height = rows;
      const mc = c.getContext("2d", { willReadFrequently: true })!;
      const k = Math.min(cols * .87 / image.naturalWidth, rows * .88 / image.naturalHeight);
      const iw = image.naturalWidth * k, ih = image.naturalHeight * k;
      mc.drawImage(image, (cols - iw) / 2, (rows - ih) / 2, iw, ih);
      mask.current = { key, data: mc.getImageData(0, 0, cols, rows).data };
    }
    ctx.clearRect(0, 0, w, h);
    const cellW = fw / cols, cellH = fh / rows, front = progress * rows;
    ctx.fillStyle = background === "transparent" ? withAlpha(color, .09) : background;
    ctx.fillRect(x, y, fw, fh);
    // Every crossing obeys the same two-over/two-under twill. The logo changes
    // which yarn passes over, rather than appearing as a printed image on top.
    for (let row = 0; row < rows; row++) {
      const woven = smooth(front - row);
      const fold = Math.sin(row / rows * Math.PI * 2.2) * (1 - landed) * h * .006;
      for (let col = 0; col < cols; col++) {
        const inside = mask.current!.data[(row * cols + col) * 4 + 3]! / 255;
        const warp = ((col + row) % 4 < 2) !== (inside > .3 && woven > .5);
        const px = x + col * cellW, py = y + row * cellH + fold;
        const index = (row * cols + col) * 4;
        const darkYarn = mask.current!.data[index]! < 125;
        const thread = inside > .3 && woven > .5 ? (darkYarn ? secondary : primary) : withAlpha(color, .055);
        ctx.fillStyle = warp ? withAlpha(color, inside > .3 ? .14 : .045) : withAlpha(secondary, inside > .3 ? .2 : .055);
        ctx.fillRect(px + cellW * .14, py, cellW * .7, cellH);
        ctx.fillStyle = thread;
        if (warp) ctx.fillRect(px + cellW * .13, py + cellH * .12, cellW * .74, cellH * .78);
        else ctx.fillRect(px, py + cellH * .19, cellW, cellH * .62);
        ctx.fillStyle = withAlpha(secondary, inside > .3 && woven > .5 ? .48 : .05);
        if (warp) ctx.fillRect(px + cellW * .22, py + cellH * .15, cellW * .12, cellH * .68);
        else ctx.fillRect(px, py + cellH * .2, cellW * .9, cellH * .12);
      }
    }
    // Selvedges and frayed thread ends keep the textile a bounded object.
    ctx.strokeStyle = withAlpha(color, .22); ctx.lineWidth = Math.max(1, w * .001);
    for (let col = 0; col < cols; col += 2) {
      const px = x + (col + .5) * cellW;
      ctx.beginPath(); ctx.moveTo(px, y - cellH * (1 + (col % 5) * .2)); ctx.lineTo(px, y);
      ctx.moveTo(px, y + fh); ctx.lineTo(px + cellW * .25, y + fh + cellH * (1 + (col % 7) * .16)); ctx.stroke();
    }
    const shine = ctx.createLinearGradient(x, y, x + fw, y + fh);
    shine.addColorStop(0, withAlpha(color, .02)); shine.addColorStop(.3, withAlpha(secondary, .07));
    shine.addColorStop(.55, withAlpha(color, .06)); shine.addColorStop(1, withAlpha(color, .015));
    ctx.fillStyle = shine; ctx.fillRect(x, y, fw, fh);
    if (progress > 0 && progress < 1) {
      const py = y + front * cellH;
      ctx.fillStyle = withAlpha(primary, .7); ctx.fillRect(x, py, fw, cellH * .8);
      const t = (front % 2 < 1 ? front % 1 : 1 - front % 1);
      ctx.fillStyle = secondary; ctx.fillRect(x + (fw - cellW * 8) * t, py - cellH * 1.5, cellW * 8, cellH * 3);
    }
  }, [frame, image, w, h, x, y, fw, fh, cols, rows, primary, secondary, color, background, progress, landed]);
  const font = fitFontSize({ chars: caption.length, boxW: w * .78, boxH: h * .12, lines: portrait ? 2 : 1, max: h * (portrait ? .039 : .043), min: h * (portrait ? .031 : .019), lineHeight: 1.25 });
  return <AbsoluteFill style={{ background: background === "transparent" ? undefined : background }}>
    <canvas ref={canvas} width={w} height={h} style={{ position: "absolute", inset: 0, width: w, height: h }} />
    {caption && <div data-21st-slot="caption" style={{ position: "absolute", left: w * .11, top: h * .82, width: w * .78, fontFamily: brandFontStack(fontFamily), fontSize: font, lineHeight: 1.25, color, textAlign: "center", opacity: smooth((frame - 125) / 20) }}>{caption}</div>}
  </AbsoluteFill>;
};
