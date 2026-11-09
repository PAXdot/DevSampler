// Built using Hyperiux Vault: https://vault.hyperiux.com

"use client";

import * as React from "react";
import * as THREE from "three";

export interface SplitCanvasItem {
  /** Image URL. Transparent PNGs sit directly on the grid; photos are fitted inside the square. */
  image: string;
  title: string;
  description?: string;
  /** Small label above the title, e.g. "01". */
  label?: string;
}

export interface SplitCanvasProps {
  /** One full-height section per item. The canvas transitions as each section's top edge scrolls through it. */
  items: SplitCanvasItem[];
  /** Pixel cell size of the grid and of the pixelated transition, in CSS px. */
  gridSize?: number;
  /** Number of horizontal blinds the transition is split into. */
  numSlices?: number;
  /** Maximum canvas size on large screens, in CSS px. Shrinks to fit smaller viewports. */
  canvasSize?: number;
  /** Opacity of the grid lines, 0–1. Lines use the theme's foreground color. */
  gridOpacity?: number;
  className?: string;
}

const TEXTURE_SIZE = 1024;
// Layout follows the component's own width (container queries), not the viewport.
// Stacked below 48rem; side by side above, where the canvas shrinks to leave two
// ~11rem text columns plus padding and gaps (30rem total, 34rem with wider padding).
const CANVAS_SIZE =
  "[--sc-size:min(var(--sc-max),82cqw,56vh)] @3xl:[--sc-size:min(var(--sc-max),56vh,calc(100cqw-30rem))] @5xl:[--sc-size:min(var(--sc-max),56vh,calc(100cqw-34rem))]";
// Half the width left beside the canvas, minus page padding and a 1.5rem gap.
const SIDE_COLUMN =
  "@3xl:max-w-[min(20rem,calc((100cqw-var(--sc-size))/2-4rem))] @5xl:max-w-[min(20rem,calc((100cqw-var(--sc-size))/2-5.5rem))]";

const VERTEX = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const FRAGMENT = /* glsl */ `
  uniform sampler2D u_from;
  uniform sampler2D u_to;
  uniform float u_progress;
  uniform float u_numSlices;
  uniform float u_gridSize;
  uniform vec2 u_resolution;
  uniform vec3 u_gridColor;
  uniform float u_gridOpacity;
  uniform float u_reducedMotion;
  varying vec2 vUv;

  vec2 cellSize() {
    vec2 count = max(floor(u_resolution / u_gridSize), vec2(1.0));
    return u_resolution / count;
  }

  vec2 pixelate(vec2 uv) {
    vec2 cell = cellSize();
    return (floor(uv * u_resolution / cell) + 0.5) * cell / u_resolution;
  }

  void main() {
    vec2 uv = vUv;
    vec2 cell = cellSize();
    vec2 px = uv * u_resolution;
    float line = max(step(mod(px.x, cell.x), 1.0), step(mod(px.y, cell.y), 1.0));
    vec4 grid = vec4(u_gridColor, line * u_gridOpacity);

    vec4 tex;
    if (u_reducedMotion > 0.5) {
      tex = mix(texture2D(u_from, uv), texture2D(u_to, uv), u_progress);
    } else {
      // Blinds: bottom slices go first; each collapses to reveal the next image.
      float sliceIndex = floor(uv.y * u_numSlices);
      float delay = (sliceIndex / u_numSlices) * 0.6;
      float t = smoothstep(delay, delay + 0.4, u_progress);
      float posInSlice = fract(uv.y * u_numSlices);
      if (posInSlice < t) {
        tex = texture2D(u_to, pixelate(uv));
      } else {
        vec2 shifted = vec2(uv.x, clamp(uv.y - t / u_numSlices, 0.0, 1.0));
        tex = texture2D(u_from, pixelate(shifted));
      }
    }

    gl_FragColor = vec4(mix(grid.rgb, tex.rgb, tex.a), max(grid.a, tex.a));
  }
`;

// Resolves any CSS color (including oklch) to sRGB via a 1px canvas.
function cssColorToRgb(color: string): [number, number, number] {
  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) return [0, 0, 0];
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
  return [r / 255, g / 255, b / 255];
}

function loadTexture(src: string): Promise<THREE.CanvasTexture> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = TEXTURE_SIZE;
      const ctx = canvas.getContext("2d")!;
      const scale = Math.min(TEXTURE_SIZE / img.width, TEXTURE_SIZE / img.height);
      const w = img.width * scale;
      const h = img.height * scale;
      ctx.drawImage(img, (TEXTURE_SIZE - w) / 2, (TEXTURE_SIZE - h) / 2, w, h);
      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = texture.magFilter = THREE.NearestFilter;
      texture.generateMipmaps = false;
      resolve(texture);
    };
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
    img.src = src;
  });
}

export default function SplitCanvas({
  items,
  gridSize = 16,
  numSlices = 32,
  canvasSize = 560,
  gridOpacity = 0.15,
  className,
}: SplitCanvasProps) {
  const canvasWrapRef = React.useRef<HTMLDivElement>(null);
  const sectionRefs = React.useRef<(HTMLElement | null)[]>([]);
  const sceneRef = React.useRef<{ material: THREE.ShaderMaterial; draw: () => void } | null>(null);
  const imagesKey = items.map((item) => item.image).join("|");

  React.useEffect(() => {
    const wrap = canvasWrapRef.current;
    if (!wrap || items.length === 0) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    } catch {
      return; // No WebGL: the text sections still render.
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = "block";
    wrap.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      transparent: true,
      uniforms: {
        u_from: { value: null },
        u_to: { value: null },
        u_progress: { value: 0 },
        u_numSlices: { value: 1 },
        u_gridSize: { value: 16 },
        u_resolution: { value: new THREE.Vector2(1, 1) },
        u_gridColor: { value: new THREE.Color() },
        u_gridOpacity: { value: 0.15 },
        u_reducedMotion: {
          value: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 0,
        },
      },
    });
    scene.add(new THREE.Mesh(geometry, material));

    let textures: THREE.CanvasTexture[] = [];
    let disposed = false;
    let frame = 0;

    const syncGridColor = () => {
      const [r, g, b] = cssColorToRgb(getComputedStyle(wrap).color);
      // Raw shader output isn't color-managed, so pass sRGB values through untouched.
      (material.uniforms.u_gridColor.value as THREE.Color).setRGB(r, g, b);
    };

    const syncSize = () => {
      const size = wrap.clientWidth;
      if (!size) return;
      renderer.setSize(size, size);
      material.uniforms.u_resolution.value.set(size, size);
    };

    // Map scroll position to "which image, how far through the transition":
    // a transition runs while the top edge of the next section crosses the canvas.
    const draw = () => {
      frame = 0;
      if (disposed || textures.length === 0) return;
      const canvas = wrap.getBoundingClientRect();
      let from = 0;
      let progress = 0;
      for (let i = 1; i < textures.length; i++) {
        const edge = sectionRefs.current[i]?.getBoundingClientRect().top ?? Infinity;
        if (edge <= canvas.top) {
          from = i;
        } else {
          if (edge < canvas.bottom) progress = (canvas.bottom - edge) / canvas.height;
          break;
        }
      }
      material.uniforms.u_from.value = textures[from];
      material.uniforms.u_to.value = textures[Math.min(from + 1, textures.length - 1)];
      material.uniforms.u_progress.value = progress;
      renderer.render(scene, camera);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };

    const resizeObserver = new ResizeObserver(() => {
      syncSize();
      schedule();
    });
    resizeObserver.observe(wrap);

    // Re-read the grid color when the theme flips (class/attribute on <html>, or OS scheme).
    const themeObserver = new MutationObserver(() => {
      syncGridColor();
      schedule();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style", "data-theme"],
    });
    const scheme = window.matchMedia("(prefers-color-scheme: dark)");
    const onScheme = () => {
      syncGridColor();
      schedule();
    };
    scheme.addEventListener("change", onScheme);
    window.addEventListener("scroll", schedule, { passive: true });

    syncSize();
    syncGridColor();
    sceneRef.current = { material, draw: schedule };

    Promise.all(items.map((item) => loadTexture(item.image)))
      .then((loaded) => {
        if (disposed) return loaded.forEach((t) => t.dispose());
        textures = loaded;
        schedule();
      })
      .catch((error) => console.error("[SplitCanvas]", error));

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      sceneRef.current = null;
      resizeObserver.disconnect();
      themeObserver.disconnect();
      scheme.removeEventListener("change", onScheme);
      window.removeEventListener("scroll", schedule);
      textures.forEach((t) => t.dispose());
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
    // Items are keyed by their image URLs so inline arrays don't reload textures every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesKey]);

  React.useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    scene.material.uniforms.u_gridSize.value = Math.max(2, gridSize);
    scene.material.uniforms.u_numSlices.value = Math.max(1, Math.round(numSlices));
    scene.material.uniforms.u_gridOpacity.value = Math.min(1, Math.max(0, gridOpacity));
    scene.draw();
  }, [gridSize, numSlices, gridOpacity, imagesKey]);

  const size = Math.max(160, canvasSize);

  return (
    <section
      className={["@container relative w-full bg-background text-foreground", className].filter(Boolean).join(" ")}
      style={{ height: `${items.length * 100}vh`, ["--sc-max" as string]: `${size}px` }}
    >
      <div className={`pointer-events-none sticky top-0 z-10 flex h-screen items-center justify-center @max-3xl:items-start @max-3xl:pt-[12vh] ${CANVAS_SIZE}`}>
        <div
          ref={canvasWrapRef}
          aria-hidden="true"
          className="aspect-square border-r border-t border-border @max-3xl:bg-background"
          style={{ width: "var(--sc-size)" }}
        />
      </div>

      <div className={`absolute inset-0 ${CANVAS_SIZE}`}>
        {items.map((item, i) => (
          <article
            key={`${item.image}-${i}`}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            className="flex h-screen flex-col justify-end gap-4 border-t border-border px-6 py-10 text-center @3xl:flex-row @3xl:justify-between @3xl:gap-0 @3xl:px-10 @3xl:py-16 @3xl:text-left @5xl:px-16"
          >
            <div className={`@3xl:self-start ${SIDE_COLUMN}`}>
              {item.label && (
                <span className="mb-2 block text-sm tracking-widest text-muted-foreground">
                  {item.label}
                </span>
              )}
              <h2 className="font-serif text-4xl font-normal leading-[1.05] tracking-tight @5xl:text-5xl">
                {item.title}
              </h2>
            </div>
            {item.description && (
              <p className={`mx-auto max-w-xs text-base leading-snug text-muted-foreground @3xl:mx-0 @3xl:self-end @3xl:text-right ${SIDE_COLUMN}`}>
                {item.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
