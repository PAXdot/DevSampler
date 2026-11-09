"use client";

import { forwardRef, useEffect, useRef, type CSSProperties } from "react";
import * as THREE from "three";

/* ==========================================================================
 * Symbols Effect — a GPU halftone that rebuilds a photo or video out of little
 * marks. The frame is pixelated into cells; each cell's luminance is bucketed
 * into one of four brightness bands; and that band's symbol glyph (tiled once
 * per cell) is stamped, tinted with the band's colour over a white ground.
 *
 * Self-contained: the glyph set (2D-canvas paths), the GLSL shaders, the WebGL
 * renderer, and a thin React wrapper all live here. Only dependency: three.
 * ======================================================================== */

/* ----------------------------- glyphs ----------------------------------- */

type GlyphDraw = (ctx: CanvasRenderingContext2D) => void;
const C = 16; // centre of the 32-unit design grid

export const GLYPHS: { name: string; draw: GlyphDraw }[] = [
  { name: "empty", draw: () => {} },
  {
    name: "dot",
    draw: (c) => {
      c.beginPath();
      c.arc(C, C, 5, 0, Math.PI * 2);
      c.fill();
    },
  },
  {
    name: "ring",
    draw: (c) => {
      c.beginPath();
      c.arc(C, C, 9, 0, Math.PI * 2);
      c.arc(C, C, 5.5, 0, Math.PI * 2, true);
      c.fill("evenodd");
    },
  },
  {
    name: "square",
    draw: (c) => {
      c.fillRect(C - 7, C - 7, 14, 14);
    },
  },
  {
    name: "frame",
    draw: (c) => {
      c.beginPath();
      c.rect(C - 9, C - 9, 18, 18);
      c.rect(C - 5, C - 5, 10, 10);
      c.fill("evenodd");
    },
  },
  {
    name: "diagonal",
    draw: (c) => {
      c.lineWidth = 5;
      c.lineCap = "round";
      c.beginPath();
      c.moveTo(6, 26);
      c.lineTo(26, 6);
      c.stroke();
    },
  },
  {
    name: "cross",
    draw: (c) => {
      c.lineWidth = 5;
      c.lineCap = "round";
      c.beginPath();
      c.moveTo(7, 7);
      c.lineTo(25, 25);
      c.moveTo(25, 7);
      c.lineTo(7, 25);
      c.stroke();
    },
  },
  {
    name: "plus",
    draw: (c) => {
      c.fillRect(C - 2.5, 5, 5, 22);
      c.fillRect(5, C - 2.5, 22, 5);
    },
  },
  {
    name: "chevron",
    draw: (c) => {
      c.lineWidth = 5;
      c.lineJoin = "round";
      c.lineCap = "round";
      c.beginPath();
      c.moveTo(8, 10);
      c.lineTo(C, 22);
      c.lineTo(24, 10);
      c.stroke();
    },
  },
  {
    name: "triangle",
    draw: (c) => {
      c.beginPath();
      c.moveTo(C, 6);
      c.lineTo(26, 25);
      c.lineTo(6, 25);
      c.closePath();
      c.fill();
    },
  },
  {
    name: "diamond",
    draw: (c) => {
      c.beginPath();
      c.moveTo(C, 5);
      c.lineTo(27, C);
      c.lineTo(C, 27);
      c.lineTo(5, C);
      c.closePath();
      c.fill();
    },
  },
  {
    name: "bars",
    draw: (c) => {
      c.fillRect(7, 6, 4, 20);
      c.fillRect(14, 6, 4, 20);
      c.fillRect(21, 6, 4, 20);
    },
  },
  {
    name: "hexagon",
    draw: (c) => {
      c.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        const x = C + Math.cos(a) * 11;
        const y = C + Math.sin(a) * 11;
        i === 0 ? c.moveTo(x, y) : c.lineTo(x, y);
      }
      c.closePath();
      c.fill();
    },
  },
  {
    name: "star",
    draw: (c) => {
      c.beginPath();
      for (let i = 0; i < 10; i++) {
        const r = i % 2 === 0 ? 12 : 5;
        const a = (Math.PI / 5) * i - Math.PI / 2;
        const x = C + Math.cos(a) * r;
        const y = C + Math.sin(a) * r;
        i === 0 ? c.moveTo(x, y) : c.lineTo(x, y);
      }
      c.closePath();
      c.fill();
    },
  },
  {
    name: "heart",
    draw: (c) => {
      c.beginPath();
      c.moveTo(16, 26);
      c.bezierCurveTo(2, 16, 6, 6, 16, 12);
      c.bezierCurveTo(26, 6, 30, 16, 16, 26);
      c.closePath();
      c.fill();
    },
  },
  {
    name: "drop",
    draw: (c) => {
      c.beginPath();
      c.moveTo(16, 5);
      c.bezierCurveTo(24, 15, 26, 20, 16, 27);
      c.bezierCurveTo(6, 20, 8, 15, 16, 5);
      c.closePath();
      c.fill();
    },
  },
  {
    name: "flower",
    draw: (c) => {
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i;
        c.beginPath();
        c.ellipse(
          C + Math.cos(a) * 7,
          C + Math.sin(a) * 7,
          4.5,
          4.5,
          0,
          0,
          Math.PI * 2,
        );
        c.fill();
      }
    },
  },
  {
    name: "asterisk",
    draw: (c) => {
      c.lineWidth = 4;
      c.lineCap = "round";
      for (let i = 0; i < 3; i++) {
        const a = (Math.PI / 3) * i;
        c.beginPath();
        c.moveTo(C - Math.cos(a) * 11, C - Math.sin(a) * 11);
        c.lineTo(C + Math.cos(a) * 11, C + Math.sin(a) * 11);
        c.stroke();
      }
    },
  },
  {
    name: "spark",
    draw: (c) => {
      c.beginPath();
      const pts = [
        [16, 3],
        [19, 13],
        [29, 16],
        [19, 19],
        [16, 29],
        [13, 19],
        [3, 16],
        [13, 13],
      ];
      pts.forEach(([x, y], i) => (i === 0 ? c.moveTo(x, y) : c.lineTo(x, y)));
      c.closePath();
      c.fill();
    },
  },
  {
    name: "pentagon",
    draw: (c) => {
      c.beginPath();
      for (let i = 0; i < 5; i++) {
        const a = ((Math.PI * 2) / 5) * i - Math.PI / 2;
        const x = C + Math.cos(a) * 11;
        const y = C + Math.sin(a) * 11;
        i === 0 ? c.moveTo(x, y) : c.lineTo(x, y);
      }
      c.closePath();
      c.fill();
    },
  },
  {
    name: "donut",
    draw: (c) => {
      c.beginPath();
      c.arc(C, C, 11, 0, Math.PI * 2);
      c.arc(C, C, 4, 0, Math.PI * 2, true);
      c.fill("evenodd");
    },
  },
  {
    name: "halfmoon",
    draw: (c) => {
      c.beginPath();
      c.arc(C, C, 11, 0, Math.PI * 2);
      c.arc(C + 6, C - 3, 10, 0, Math.PI * 2, true);
      c.fill("evenodd");
    },
  },
  {
    name: "arrow",
    draw: (c) => {
      c.lineWidth = 4;
      c.lineJoin = "round";
      c.lineCap = "round";
      c.beginPath();
      c.moveTo(7, 16);
      c.lineTo(23, 16);
      c.moveTo(16, 9);
      c.lineTo(23, 16);
      c.lineTo(16, 23);
      c.stroke();
    },
  },
  {
    name: "wave",
    draw: (c) => {
      c.lineWidth = 4;
      c.lineCap = "round";
      c.beginPath();
      c.moveTo(5, 16);
      c.quadraticCurveTo(11, 7, 16, 16);
      c.quadraticCurveTo(21, 25, 27, 16);
      c.stroke();
    },
  },
];

/** Render a glyph to an offscreen canvas (black shape, transparent ground). */
export function glyphCanvas(index: number, size = 64): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;
  ctx.clearRect(0, 0, size, size);
  const g = GLYPHS[index];
  if (g) {
    ctx.save();
    ctx.scale(size / 32, size / 32);
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "#000";
    g.draw(ctx);
    ctx.restore();
  }
  return c;
}

/* ----------------------------- shaders ---------------------------------- */

const VERT = /* glsl */ `
precision highp float;
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;

const FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;

uniform sampler2D src;
uniform vec2 resolution;
uniform vec2 srcScale;     // cover-crop of the source (<=1 on the cropped axis)
uniform float zoom;        // user zoom: >1 scales the source up, <1 shrinks it
uniform vec3 bgColor;      // colour shown around a shrunk source (the background)
uniform float cell;        // pixel cell size (px)

uniform vec3 bandColor[4];  // current colour per brightness band (the "to" preset)
uniform vec3 bandColorB[4]; // previous colour per band (the "from" preset)
uniform float bandLo[4];    // band lower bound (inclusive)
uniform float bandHi[4];    // band upper bound (inclusive)
uniform sampler2D glyph[4];  // current symbol per band
uniform sampler2D glyphB[4]; // previous symbol per band
uniform float morphT;        // 0 = fully previous, 1 = fully current (crossfade)

float lum(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

// map a full-frame uv into the COVER-cropped + user-zoomed source (centred). zoom
// >1 magnifies; zoom <1 shrinks the source so background shows around it.
vec2 cover(vec2 uv) {
  return (uv - 0.5) * srcScale / zoom + 0.5;
}

// snap a uv to the centre of its cell, so a whole cell reads one source colour
vec2 cellUV(vec2 step) {
  return floor(vUv / step) * step + step * 0.5;
}

vec4 sampleGlyph(int i, vec2 uv) {
  if (i == 0) return texture2D(glyph[0], uv);
  if (i == 1) return texture2D(glyph[1], uv);
  if (i == 2) return texture2D(glyph[2], uv);
  return texture2D(glyph[3], uv);
}
vec4 sampleGlyphB(int i, vec2 uv) {
  if (i == 0) return texture2D(glyphB[0], uv);
  if (i == 1) return texture2D(glyphB[1], uv);
  if (i == 2) return texture2D(glyphB[2], uv);
  return texture2D(glyphB[3], uv);
}

void main() {
  vec3 paper = vec3(1.0);
  vec2 step = vec2(cell) / resolution;

  // sample the source at this cell's centre. If the sample falls outside the source
  // — including a 1px inset to avoid the clamped edge column that smears into a thin
  // line, and the area around a shrunk/zoomed source — fill with the background
  // colour instead of black, so a scaled-down video sits on a clean ground.
  vec2 suv = cover(cellUV(step));
  vec2 inset = 1.0 / resolution;
  if (suv.x < inset.x || suv.x > 1.0 - inset.x ||
      suv.y < inset.y || suv.y > 1.0 - inset.y) {
    gl_FragColor = vec4(bgColor, 1.0);
    return;
  }
  float l = lum(texture2D(src, suv).rgb);

  gl_FragColor = vec4(paper, 1.0);
  for (int i = 0; i < 4; i++) {
    if (l >= bandLo[i] && l <= bandHi[i]) {
      vec2 gUv = mod(vUv / step, vec2(1.0));   // glyph repeats once per cell
      // crossfade the glyph alpha AND the band colour from the previous preset
      // (B) to the current one, by morphT — so a remix dissolves smoothly.
      vec4 gA = sampleGlyph(i, gUv);
      vec4 gB = sampleGlyphB(i, gUv);
      float a = mix(gB.a, gA.a, morphT);
      vec3 gcol = mix(gB.rgb, gA.rgb, morphT);
      vec3 col = mix(bandColorB[i], bandColor[i], morphT);
      vec3 sym = mix(paper, gcol, a);          // glyph over paper
      float k = smoothstep(0.0, 1.0, lum(sym));
      gl_FragColor = vec4(mix(col, paper, k), 1.0);
    }
  }
}
`;

/* ----------------------------- renderer --------------------------------- */

export interface SymbolsLook {
  colors: string[];
  glyphs: number[];
  zoom?: number;
}

export interface SymbolsParams {
  cell: number;
  bandColors: string[]; // 4 hex colours, dark band → light band
  bandStops: number[]; // 5 stops (0..1) → 4 luminance bands
  bandGlyphs: number[]; // 4 glyph indices (0 = empty)
  zoom?: number;
  bg?: string;
}

interface PooledVideo {
  video: HTMLVideoElement;
  tex: THREE.VideoTexture;
  aspect: number;
  ready: boolean;
}

export class SymbolsRenderer {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private quad: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  private uniforms: Record<string, { value: unknown }>;
  private canvas: HTMLCanvasElement;
  private srcAspect = 1;
  private video: HTMLVideoElement | null = null;
  private raf = 0;
  private playing = false;
  private pool = new Map<string, PooledVideo>();
  private curUrl: string | null = null;
  private pendingSwap = false;
  private glyphIdx: number[];
  private reqCell: number;
  private morphRaf = 0;

  constructor(canvas: HTMLCanvasElement, p: SymbolsParams) {
    this.glyphIdx = [...p.bandGlyphs];
    this.reqCell = p.cell;
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      preserveDrawingBuffer: true,
    });
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    this.renderer.setClearColor(new THREE.Color(p.bg ?? "#ffffff"), 1);

    // Neutral grey placeholder so the first paint shows a soft mid-band field
    // instead of black while the real source loads.
    const placeholder = (() => {
      const c = document.createElement("canvas");
      c.width = c.height = 4;
      const ctx = c.getContext("2d")!;
      ctx.fillStyle = "#9a9a9a";
      ctx.fillRect(0, 0, 4, 4);
      return new THREE.CanvasTexture(c);
    })();

    const glyphs = p.bandGlyphs.map((i) => this.makeGlyph(i));
    const colors = p.bandColors.map((h) => new THREE.Color(h));

    this.uniforms = {
      src: { value: placeholder },
      resolution: { value: new THREE.Vector2(1, 1) },
      srcScale: { value: new THREE.Vector2(1, 1) },
      zoom: { value: p.zoom ?? 1 },
      bgColor: { value: new THREE.Color(p.bg ?? "#ffffff") },
      cell: { value: p.cell },
      bandColor: { value: colors },
      bandColorB: { value: colors.map((c) => c.clone()) },
      bandLo: {
        value: [p.bandStops[0], p.bandStops[1], p.bandStops[2], p.bandStops[3]],
      },
      bandHi: {
        value: [p.bandStops[1], p.bandStops[2], p.bandStops[3], p.bandStops[4]],
      },
      glyph: { value: glyphs },
      glyphB: { value: p.bandGlyphs.map((i) => this.makeGlyph(i)) },
      morphT: { value: 1 },
    };

    const mat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms: this.uniforms,
    });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    this.scene.add(this.quad);
    this.resize();
    this.render();
  }

  private makeGlyph(i: number) {
    const t = new THREE.CanvasTexture(glyphCanvas(i));
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    return t;
  }

  render = () => this.renderer.render(this.scene, this.camera);

  resize = () => {
    const r = this.canvas.getBoundingClientRect();
    const w = Math.max(1, r.width);
    const h = Math.max(1, r.height);
    this.renderer.setSize(w, h, false);
    (this.uniforms.resolution.value as THREE.Vector2).set(w, h);
    this.applyCell();
    this.fit();
    this.render();
  };

  // Cell size is authored against a 600px-wide reference canvas and scales with
  // the actual width, so "8px" reads the same at any rendered size.
  private applyCell() {
    const w = Math.max(1, this.canvas.getBoundingClientRect().width);
    this.uniforms.cell.value = Math.max(2, this.reqCell * (w / 600));
  }

  private fit() {
    this.quad.scale.set(1, 1, 1);
    const r = this.canvas.getBoundingClientRect();
    const ca = r.width / Math.max(1, r.height);
    let ux = 1;
    let uy = 1;
    if (this.srcAspect > ca) ux = ca / this.srcAspect;
    else uy = this.srcAspect / ca;
    (this.uniforms.srcScale.value as THREE.Vector2).set(ux, uy);
  }

  private morphing() {
    return (this.uniforms.morphT.value as number) < 1;
  }

  setCellStops(cell: number, stops: number[]) {
    this.reqCell = cell;
    this.applyCell();
    this.uniforms.bandLo.value = [stops[0], stops[1], stops[2], stops[3]];
    this.uniforms.bandHi.value = [stops[1], stops[2], stops[3], stops[4]];
    this.render();
  }

  // Zoom edits are ignored while a source swap is in flight — the new source
  // arrives with its own zoom (committed in setLook).
  setZoom(n: number) {
    if (this.pendingSwap) return;
    this.uniforms.zoom.value = n;
    this.render();
  }

  private commitZoom(n: number) {
    this.uniforms.zoom.value = n;
  }

  setBg(hex: string) {
    (this.uniforms.bgColor.value as THREE.Color).set(hex);
    this.renderer.setClearColor(hex, 1);
    this.render();
  }

  setColors(hexes: string[]) {
    if (this.morphing() || this.pendingSwap) return;
    (this.uniforms.bandColor.value as THREE.Color[]).forEach((c, i) =>
      c.set(hexes[i]),
    );
    (this.uniforms.bandColorB.value as THREE.Color[]).forEach((c, i) =>
      c.set(hexes[i]),
    );
    this.uniforms.morphT.value = 1;
    this.render();
  }

  // Apply colours + glyphs instantly (both A and B sides), e.g. when a new
  // source lands and brings its own look.
  private setLook(colors: string[], glyphs: number[]) {
    cancelAnimationFrame(this.morphRaf);
    const gA = this.uniforms.glyph.value as THREE.Texture[];
    const gB = this.uniforms.glyphB.value as THREE.Texture[];
    const cA = this.uniforms.bandColor.value as THREE.Color[];
    const cB = this.uniforms.bandColorB.value as THREE.Color[];
    for (let i = 0; i < 4; i++) {
      gA[i].dispose();
      gB[i].dispose();
      gA[i] = this.makeGlyph(glyphs[i]);
      gB[i] = this.makeGlyph(glyphs[i]);
      cA[i].set(colors[i]);
      cB[i].set(colors[i]);
    }
    this.glyphIdx = [...glyphs];
    this.uniforms.morphT.value = 1;
    this.render();
  }

  setGlyph(band: number, glyph: number) {
    if (this.pendingSwap) return;
    this.glyphIdx[band] = glyph;
    const gA = this.uniforms.glyph.value as THREE.Texture[];
    const gB = this.uniforms.glyphB.value as THREE.Texture[];
    gA[band].dispose();
    gB[band].dispose();
    gA[band] = this.makeGlyph(glyph);
    gB[band] = this.makeGlyph(glyph);
    this.render();
  }

  // Springy dissolve from the current look to a new one (colours + glyphs).
  morphTo(colors: string[], glyphs: number[], duration = 700) {
    cancelAnimationFrame(this.morphRaf);
    const gA = this.uniforms.glyph.value as THREE.Texture[];
    const gB = this.uniforms.glyphB.value as THREE.Texture[];
    const cA = this.uniforms.bandColor.value as THREE.Color[];
    const cB = this.uniforms.bandColorB.value as THREE.Color[];
    for (let i = 0; i < 4; i++) {
      gB[i].dispose();
      gB[i] = this.makeGlyph(this.glyphIdx[i]);
      cB[i].copy(cA[i]);
      gA[i].dispose();
      gA[i] = this.makeGlyph(glyphs[i]);
      cA[i].set(colors[i]);
    }
    this.glyphIdx = [...glyphs];
    const t0 = performance.now();
    const tick = () => {
      const e = Math.min(1, (performance.now() - t0) / duration);
      this.uniforms.morphT.value =
        e >= 1 ? 1 : 1 - Math.exp(-7.5 * e) * Math.cos(5.2 * e);
      this.render();
      if (e < 1) this.morphRaf = requestAnimationFrame(tick);
      else this.uniforms.morphT.value = 1;
    };
    this.uniforms.morphT.value = 0;
    this.morphRaf = requestAnimationFrame(tick);
  }

  // Videos are pooled and kept warm so switching sources is instant.
  private ensurePooled(url: string): PooledVideo {
    const hit = this.pool.get(url);
    if (hit) return hit;
    const v = document.createElement("video");
    v.src = url.startsWith("blob:") ? url : encodeURI(url);
    v.loop = v.muted = v.playsInline = true;
    v.preload = "auto";
    v.crossOrigin = "anonymous";
    const tex = new THREE.VideoTexture(v);
    tex.colorSpace = THREE.SRGBColorSpace;
    const entry: PooledVideo = { video: v, tex, aspect: 1, ready: false };
    v.addEventListener("loadeddata", () => {
      entry.aspect = v.videoWidth / v.videoHeight || 1;
      entry.ready = true;
    });
    v.load();
    this.pool.set(url, entry);
    return entry;
  }

  preload(urls: string[]) {
    for (const u of urls) this.ensurePooled(u);
  }

  setImage(url: string, look?: SymbolsLook) {
    this.curUrl = url;
    if (look) this.pendingSwap = true;
    const safe = url.startsWith("blob:") ? url : encodeURI(url);
    new THREE.TextureLoader().load(safe, (tex) => {
      if (this.curUrl !== url) return;
      tex.colorSpace = THREE.SRGBColorSpace;
      this.pendingSwap = false;
      if (look) {
        this.setLook(look.colors, look.glyphs);
        if (look.zoom !== undefined) this.commitZoom(look.zoom);
      }
      this.video?.pause();
      this.stopLoop();
      this.uniforms.src.value = tex;
      this.srcAspect = tex.image.width / tex.image.height;
      this.video = null;
      this.fit();
      this.render();
    });
  }

  setVideo(url: string, look?: SymbolsLook) {
    this.curUrl = url;
    if (look) this.pendingSwap = true;
    const entry = this.ensurePooled(url);
    const swap = () => {
      if (this.curUrl !== url) return;
      if (this.video && this.video !== entry.video) this.video.pause();
      this.pendingSwap = false;
      if (look) {
        this.setLook(look.colors, look.glyphs);
        if (look.zoom !== undefined) this.commitZoom(look.zoom);
      }
      this.uniforms.src.value = entry.tex;
      this.video = entry.video;
      this.srcAspect = entry.aspect;
      this.fit();
      this.startLoop();
      this.render();
    };
    // Swap only once the new video has painted a real frame (plus a beat), so
    // the old picture never mixes with the new look.
    const armed = () => {
      if (this.curUrl !== url) return;
      const t0 = performance.now();
      const onFrame = () => {
        if (this.curUrl !== url) return;
        const wait = Math.max(0, 100 - (performance.now() - t0));
        window.setTimeout(swap, wait);
      };
      const v = entry.video as HTMLVideoElement & {
        requestVideoFrameCallback?: (cb: () => void) => void;
      };
      if (typeof v.requestVideoFrameCallback === "function")
        v.requestVideoFrameCallback(onFrame);
      else window.setTimeout(swap, 100);
      this.startLoop();
    };
    entry.video
      .play()
      .then(armed)
      .catch(() => swap());
  }

  hasVideo() {
    return !!this.video;
  }

  setPaused(b: boolean) {
    if (!this.video) return;
    if (b) {
      this.video.pause();
      this.stopLoop();
      this.render();
    } else {
      this.video.play().catch(() => {});
      this.startLoop();
    }
  }

  private loop = () => {
    if (!this.playing) return;
    this.render();
    this.raf = requestAnimationFrame(this.loop);
  };

  private startLoop() {
    if (this.playing) return;
    this.playing = true;
    this.raf = requestAnimationFrame(this.loop);
  }

  private stopLoop() {
    this.playing = false;
    cancelAnimationFrame(this.raf);
  }

  dispose() {
    this.stopLoop();
    cancelAnimationFrame(this.morphRaf);
    for (const { video, tex } of this.pool.values()) {
      video.pause();
      video.src = "";
      video.load();
      tex.dispose();
    }
    this.pool.clear();
    this.video = null;
    (this.uniforms.glyph.value as THREE.Texture[]).forEach((t) => t.dispose());
    (this.uniforms.glyphB.value as THREE.Texture[]).forEach((t) => t.dispose());
    this.quad.material.dispose();
    this.quad.geometry.dispose();
    this.renderer.dispose();
  }
}

/* ----------------------------- React wrapper ---------------------------- */

const DEFAULT_COLORS = ["#241452", "#6d3bf5", "#a9c2ff", "#ffffff"];
const DEFAULT_STOPS = [0, 0.25, 0.5, 0.75, 1];
const DEFAULT_GLYPHS = [4, 2, 1, 0]; // frame, ring, dot, empty

export interface SymbolsEffectProps {
  /** Image or video URL. `.mp4/.webm/.mov` are treated as video (played live). */
  src: string;
  /** Force how `src` is treated — needed for `blob:` URLs with no extension. */
  srcType?: "auto" | "video" | "image";
  /** Extra video URLs to warm up in the pool so switching to them is instant. */
  preloadSrcs?: string[];
  /** Pixel cell size at a 600px reference width. Default 8. */
  cell?: number;
  /** Source zoom. >1 magnifies, <1 shrinks (background shows around it). Default 1. */
  zoom?: number;
  /** Background colour around a shrunk source. Default "#ffffff". */
  bg?: string;
  /** 4 hex band colours, dark → light. */
  bandColors?: string[];
  /** 5 luminance stops (0..1) → 4 bands. */
  bandStops?: number[];
  /** 4 glyph indices (0 = empty) into GLYPHS. */
  bandGlyphs?: number[];
  /** Freeze the live video on its current frame. Default false. */
  paused?: boolean;
  className?: string;
  style?: CSSProperties;
}

const isVideoUrl = (url: string) =>
  /\.(mp4|webm|mov|ogv|m4v)(\?|#|$)/i.test(url);

export const SymbolsEffect = forwardRef<HTMLCanvasElement, SymbolsEffectProps>(
  function SymbolsEffect(
    {
      src,
      srcType = "auto",
      preloadSrcs,
      cell = 8,
      zoom = 1,
      bg = "#ffffff",
      bandColors = DEFAULT_COLORS,
      bandStops = DEFAULT_STOPS,
      bandGlyphs = DEFAULT_GLYPHS,
      paused = false,
      className,
      style,
    },
    ref,
  ) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const fxRef = useRef<SymbolsRenderer | null>(null);
    const lookRef = useRef({ bandColors, bandGlyphs, zoom });
    lookRef.current = { bandColors, bandGlyphs, zoom };
    const setRef = (el: HTMLCanvasElement | null) => {
      canvasRef.current = el;
      if (typeof ref === "function") ref(el);
      else if (ref) (ref as { current: HTMLCanvasElement | null }).current = el;
    };

    // Create the renderer once.
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const fx = new SymbolsRenderer(canvas, {
        cell,
        zoom,
        bg,
        bandColors,
        bandStops,
        bandGlyphs,
      });
      fxRef.current = fx;
      const ro = new ResizeObserver(() => fx.resize());
      ro.observe(canvas);
      return () => {
        ro.disconnect();
        fx.dispose();
        fxRef.current = null;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Warm up the pool.
    useEffect(() => {
      if (preloadSrcs?.length) fxRef.current?.preload(preloadSrcs);
    }, [preloadSrcs]);

    // Source (image / video). The current look travels with the swap so the new
    // colours/glyphs/zoom appear exactly when the new picture does — never on
    // the old one.
    useEffect(() => {
      const fx = fxRef.current;
      if (!fx) return;
      const look = {
        colors: lookRef.current.bandColors,
        glyphs: lookRef.current.bandGlyphs,
        zoom: lookRef.current.zoom,
      };
      const video =
        srcType === "video" || (srcType === "auto" && isVideoUrl(src));
      video ? fx.setVideo(src, look) : fx.setImage(src, look);
    }, [src, srcType]);

    // Live parameter updates (colour/zoom edits are ignored mid-swap — the look
    // that travels with the swap wins).
    useEffect(() => {
      fxRef.current?.setCellStops(cell, bandStops);
    }, [cell, bandStops]);
    useEffect(() => {
      fxRef.current?.setZoom(zoom);
    }, [zoom]);
    useEffect(() => {
      fxRef.current?.setBg(bg);
    }, [bg]);
    useEffect(() => {
      fxRef.current?.setColors(bandColors);
    }, [bandColors]);
    useEffect(() => {
      bandGlyphs.forEach((g, i) => fxRef.current?.setGlyph(i, g));
    }, [bandGlyphs]);
    useEffect(() => {
      fxRef.current?.setPaused(paused);
    }, [paused]);

    return (
      <canvas
        ref={setRef}
        className={className}
        style={{ display: "block", width: "100%", height: "100%", ...style }}
      />
    );
  },
);

export default SymbolsEffect;
