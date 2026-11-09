import React, { useEffect, useRef, useState, useCallback } from "react";
import "../../index.css";

const VERT_SHADER = `#version 300 es
precision highp float;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}
`.trimStart();

const FRAG_SHADER = `#version 300 es
precision highp float;

out vec4 outColor;

uniform vec2 uRes;
uniform float uDpr;
uniform float uTime;
uniform vec2 uMouse;
uniform float uHover;
uniform float uPress;
uniform float uLoading;
uniform float uSuccess;
uniform float uDisabled;
uniform vec3 uClick; // xy = origin in bottom-left device px, z = age in seconds (<0 = inactive)

// Pill Signed Distance Field
float sdRoundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

// Pseudo-random hash for value noise
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

// 2D Value Noise with Hermite interpolation
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

// Fixed rotation matrix between octaves
const mat2 mRot = mat2(1.6, 1.2, -1.2, 1.6);

// 4-octave Fractional Brownian Motion
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * vnoise(p);
    p = mRot * p;
    a *= 0.5;
  }
  return v;
}

// Cyclic 5-stop thin-film iridescent color ramp
// #34d399 (teal) -> #60a5fa (blue) -> #8b5cf6 (violet) -> #ec4899 (magenta) -> #fbbf24 (amber) -> #34d399
vec3 ramp(float t) {
  t = fract(t);
  float x = t * 5.0;
  float idx = floor(x);
  float f = fract(x);
  vec3 c0 = vec3(0.204, 0.827, 0.600); // Teal
  vec3 c1 = vec3(0.376, 0.647, 0.980); // Blue
  vec3 c2 = vec3(0.545, 0.361, 0.965); // Violet
  vec3 c3 = vec3(0.925, 0.282, 0.600); // Magenta
  vec3 c4 = vec3(0.984, 0.749, 0.141); // Amber
  if (idx < 1.0) return mix(c0, c1, f);
  if (idx < 2.0) return mix(c1, c2, f);
  if (idx < 3.0) return mix(c2, c3, f);
  if (idx < 4.0) return mix(c3, c4, f);
  return mix(c4, c0, f);
}

// High-frequency dither hash to eliminate dark gradient banding
float hash21(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 px = gl_FragCoord.xy;
  vec2 p = px - uRes * 0.5;
  float H = uRes.y;

  // Geometry: Exact pill SDF and 1px antialiased boundary coverage
  float d = sdRoundBox(p, uRes * 0.5, H * 0.5);
  float edge = -d;
  float cover = clamp(edge + 0.5, 0.0, 1.0);
  if (cover <= 0.0) {
    discard;
  }

  vec2 uv = p / H;

  // 1. Body: Obsidian glass bead lit softly from below
  vec3 base = mix(vec3(0.059, 0.059, 0.071), vec3(0.114, 0.114, 0.133), smoothstep(-0.5, 0.5, p.y / H));
  base *= (1.0 - 0.10 * uPress);
  vec3 col = base;

  // 2. Ripple refraction: Expands outward from click origin, distorting flow coords
  float age = uClick.z;
  float ring = 0.0;
  vec2 wuv = uv;
  if (age >= 0.0) {
    float R = age * H * 2.6;
    float w = H * 0.22;
    float dist = length(px - uClick.xy);
    ring = exp(-pow((dist - R) / w, 2.0)) * exp(-age * 2.4);
    vec2 dir = (dist > 0.001) ? (px - uClick.xy) / dist : vec2(0.0);
    wuv += dir * ring * 0.10;
  }

  // 3. Flow field: 3-level domain-warped FBM
  vec2 q = vec2(
    fbm(wuv + vec2(0.0, 0.0) + 0.05 * uTime),
    fbm(wuv + vec2(5.2, 1.3) + 0.06 * uTime)
  );
  vec2 r = vec2(
    fbm(wuv + 4.0 * q + vec2(1.7, 9.2) + 0.07 * uTime),
    fbm(wuv + 4.0 * q + vec2(8.3, 2.8) + 0.04 * uTime)
  );
  float f = fbm(wuv + 4.0 * r + 0.08 * uTime);

  // 4. Iridescent ramp: Thin-film spectral hue mapping
  float hue = f * 1.15 + r.x * 0.6 + uTime * 0.03;
  if (uSuccess > 0.0001) {
    hue = mix(hue, floor(hue) + 0.06 * f, uSuccess);
  }
  vec3 iri = ramp(hue);

  // 5. Rim light: Flowing liquid along the inside perimeter, calm dark interior
  float rimW = H * mix(0.34, 0.56, uHover) * (1.0 - 0.22 * uPress) * (1.0 + 0.25 * uSuccess);
  float rim = pow(1.0 - smoothstep(0.0, rimW, edge), 1.7);
  float bias = mix(0.55, 1.0, smoothstep(0.45, -0.55, p.y / H));
  float breathe = 0.5 + 0.5 * sin(uTime * 1.5708);
  float k = rim * bias * (0.55 + 0.45 * smoothstep(0.25, 0.75, f)) * mix(0.62, 1.0, uHover) * (0.92 + 0.08 * breathe);
  col += iri * k * 0.95;
  // Subdued interior haze (stays strictly below 0.16 luminance behind the label)
  col += iri * 0.035 * smoothstep(0.2, 0.8, f) * (0.4 + 0.6 * uHover);

  // 6. 1px conic ring & crisp top inner glass highlight
  float line = 1.0 - smoothstep(0.0, 1.25 * uDpr, abs(edge - 0.75 * uDpr));
  float angle = atan(p.y, p.x) / 6.2831853 + uTime * 0.05;
  vec3 lineColor = mix(vec3(1.0), ramp(angle), 0.65);
  float lineAlpha = mix(0.22, 0.85, uHover) + 0.25 * uSuccess;
  col += lineColor * line * lineAlpha;
  col += vec3(1.0) * (line * smoothstep(0.0, 0.6, p.y / H) * 0.18);

  // 7. Spotlight & Gloss: Responsive cursor lighting and liquid specular
  vec2 m = uMouse - px;
  float sp = exp(-dot(m, m) / pow(H * 0.9, 2.0)) * uHover;
  col += mix(vec3(1.0), iri, 0.5) * sp * 0.10;

  // Screen-space derivatives for fluid normal and specular reflection
  vec2 grad = vec2(dFdx(f), dFdy(f));
  vec3 n = normalize(vec3(-grad * 40.0, 1.0));
  vec3 L = normalize(vec3((uMouse - px) / H, 0.6));
  vec3 H_vec = normalize(L + vec3(0.0, 0.0, 1.0));
  float spec = pow(max(dot(n, H_vec), 0.0), 48.0);
  col += spec * 0.22 * (0.25 + 0.75 * uHover) * (0.4 + 0.6 * rim);

  // 8. Ripple light & rim arrival flash
  if (age >= 0.0) {
    col += iri * ring * 0.35;
    float flash = exp(-pow((age - 0.42) / 0.22, 2.0));
    col += iri * rim * flash * 0.9;
  }

  // 9. Comet arc: Orbital rim beam during loading state
  if (uLoading > 0.001) {
    float comet = pow(0.5 + 0.5 * cos(atan(p.y, p.x) - uTime * 2.4), 10.0) * uLoading;
    col += ramp(hue + 0.15) * comet * rim * 1.1;
  }

  // 10. Finish: Shoulder tonemapping, dithering, and disabled desaturation
  col = 1.0 - exp(-col * 1.6);
  col += (hash21(px + fract(uTime) * 91.0) - 0.5) / 255.0;

  if (uDisabled > 0.001) {
    float gray = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(col, vec3(gray), uDisabled * 0.8) * mix(1.0, 0.6, uDisabled);
  }

  // Output premultiplied alpha for clean compositing
  outColor = vec4(col * cover, cover);
}
`.trimStart();

export interface ShaderButtonProps {
  children?: React.ReactNode;
  status?: "idle" | "loading" | "success";
  labels?: {
    loading?: string;
    success?: string;
  };
  size?: "lg" | "md";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  magnetic?: boolean;
  className?: string;
}

export function ShaderButton({
  children = "Continue",
  status = "idle",
  labels,
  size = "lg",
  disabled = false,
  onClick,
  magnetic = true,
  className = "",
}: ShaderButtonProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [noGl, setNoGl] = useState(false);

  // Cached state strings
  const idleLabel = typeof children === "string" ? children : "Continue";
  const loadingLabel = labels?.loading ?? "Working…";
  const successLabel = labels?.success ?? "Done";

  // Target values driven by props / user actions
  const statusRef = useRef(status);
  statusRef.current = status;
  const disabledRef = useRef(disabled);
  disabledRef.current = disabled;
  const magneticRef = useRef(magnetic);
  magneticRef.current = magnetic;

  // Smoothed animation variables
  const animRef = useRef({
    time: 0,
    hover: 0,
    hoverTarget: 0,
    press: 0,
    pressTarget: 0,
    loading: status === "loading" ? 1 : 0,
    loadingTarget: status === "loading" ? 1 : 0,
    success: status === "success" ? 1 : 0,
    successTarget: status === "success" ? 1 : 0,
    disabledVal: disabled ? 1 : 0,
    disabledTarget: disabled ? 1 : 0,
    mouseX: 100,
    mouseY: 28,
    targetMouseX: 100,
    targetMouseY: 28,
    clickX: 0,
    clickY: 0,
    clickAge: -1.0,
    // Magnetic offsets
    tx: 0,
    ty: 0,
    targetTx: 0,
    targetTy: 0,
    // Scale spring
    scaleX: 1,
    scaleV: 0,
    scaleTarget: 1,
    // Canvas dimensions
    width: 200,
    height: 56,
    dpr: 1,
    isHovered: false,
    isVisible: true,
  });

  // GL resources
  const glRef = useRef<{
    gl: WebGL2RenderingContext | null;
    program: WebGLProgram | null;
    uniforms: Record<string, WebGLUniformLocation | null>;
  }>({
    gl: null,
    program: null,
    uniforms: {},
  });

  // Track status changes for triggers (e.g. shockwave on success)
  const prevStatusRef = useRef(status);
  useEffect(() => {
    const prev = prevStatusRef.current;
    prevStatusRef.current = status;

    if (status === "loading") {
      animRef.current.loadingTarget = 1.0;
      animRef.current.successTarget = 0.0;
    } else if (status === "success") {
      animRef.current.loadingTarget = 0.0;
      animRef.current.successTarget = 1.0;
      // Trigger center shockwave ripple on entering success
      const { width, height } = animRef.current;
      animRef.current.clickX = width * 0.5;
      animRef.current.clickY = height * 0.5;
      animRef.current.clickAge = 0.0;
    } else {
      animRef.current.loadingTarget = 0.0;
      animRef.current.successTarget = 0.0;
    }

    animRef.current.disabledTarget = disabled ? 1.0 : 0.0;
  }, [status, disabled]);

  // WebGL initialization & lifecycle
  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = btnRef.current;
    if (!canvas || !btn) return;

    let gl: WebGL2RenderingContext | null = null;
    try {
      gl = canvas.getContext("webgl2", {
        alpha: true,
        premultipliedAlpha: true,
        antialias: false,
        powerPreference: "low-power",
      });
    } catch {
      gl = null;
    }

    if (!gl) {
      console.error("[Lumen] WebGL2 not supported. Activating fallback.");
      setNoGl(true);
      return;
    }

    function createShader(glCtx: WebGL2RenderingContext, type: number, src: string): WebGLShader | null {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, src);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error("[Lumen] Shader compile error:", glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    function buildProgram(glCtx: WebGL2RenderingContext): boolean {
      const vs = createShader(glCtx, glCtx.VERTEX_SHADER, VERT_SHADER);
      const fs = createShader(glCtx, glCtx.FRAGMENT_SHADER, FRAG_SHADER);
      if (!vs || !fs) return false;

      const program = glCtx.createProgram();
      if (!program) return false;
      glCtx.attachShader(program, vs);
      glCtx.attachShader(program, fs);
      glCtx.linkProgram(program);

      if (!glCtx.getProgramParameter(program, glCtx.LINK_STATUS)) {
        console.error("[Lumen] Program link error:", glCtx.getProgramInfoLog(program));
        glCtx.deleteProgram(program);
        return false;
      }

      glCtx.deleteShader(vs);
      glCtx.deleteShader(fs);

      glRef.current.program = program;
      glRef.current.gl = glCtx;

      // Cache uniform locations
      const uniforms: Record<string, WebGLUniformLocation | null> = {};
      const uniformNames = [
        "uRes",
        "uDpr",
        "uTime",
        "uMouse",
        "uHover",
        "uPress",
        "uLoading",
        "uSuccess",
        "uDisabled",
        "uClick",
      ];
      for (const name of uniformNames) {
        uniforms[name] = glCtx.getUniformLocation(program, name);
      }
      glRef.current.uniforms = uniforms;
      return true;
    }

    if (!buildProgram(gl)) {
      setNoGl(true);
      return;
    }

    // Resize handling with DPR capping
    const isHeadless =
      typeof navigator !== "undefined" &&
      (navigator.webdriver || /HeadlessChrome/i.test(navigator.userAgent));

    const updateSize = () => {
      if (!btn || !canvas) return;
      const rect = btn.getBoundingClientRect();
      const rawDpr = window.devicePixelRatio || 1;
      const dpr = isHeadless ? 1 : Math.min(rawDpr, 2);
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }

      animRef.current.width = w;
      animRef.current.height = h;
      animRef.current.dpr = dpr;

      if (glRef.current.gl) {
        glRef.current.gl.viewport(0, 0, w, h);
      }
    };

    updateSize();
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(btn);

    // Pause rendering when button is offscreen
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      animRef.current.isVisible = entry.isIntersecting;
    });
    intersectionObserver.observe(btn);

    // Context loss / restoration
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      glRef.current.gl = null;
      glRef.current.program = null;
    };

    const handleContextRestored = () => {
      if (!canvas) return;
      const newGl = canvas.getContext("webgl2", {
        alpha: true,
        premultipliedAlpha: true,
        antialias: false,
        powerPreference: "low-power",
      });
      if (newGl && buildProgram(newGl)) {
        updateSize();
      } else {
        setNoGl(true);
      }
    };

    canvas.addEventListener("webglcontextlost", handleContextLost);
    canvas.addEventListener("webglcontextrestored", handleContextRestored);

    // Main requestAnimationFrame render loop
    let rafId: number;
    let lastTime = performance.now();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const smooth = (v: number, target: number, tau: number, dt: number) => {
      return v + (target - v) * (1.0 - Math.exp(-dt / tau));
    };

    const spring = (
      s: { scaleX: number; scaleV: number },
      target: number,
      k: number,
      c: number,
      dt: number
    ) => {
      s.scaleV += ((target - s.scaleX) * k - s.scaleV * c) * dt;
      s.scaleX += s.scaleV * dt;
    };

    const tick = (now: number) => {
      rafId = requestAnimationFrame(tick);

      if (document.hidden || !animRef.current.isVisible) {
        lastTime = now;
        return;
      }

      const rawDt = (now - lastTime) / 1000.0;
      lastTime = now;
      const dt = Math.min(rawDt, 0.05);

      const anim = animRef.current;
      const glCtx = glRef.current.gl;
      const program = glRef.current.program;

      // Update physics & smooth state transitions
      anim.hover = smooth(anim.hover, anim.hoverTarget, 0.18, dt);
      const pressTau = anim.pressTarget > anim.press ? 0.06 : 0.22;
      anim.press = smooth(anim.press, anim.pressTarget, pressTau, dt);

      anim.loading = smooth(anim.loading, anim.loadingTarget, 0.25, dt);
      const successTau = anim.successTarget > anim.success ? 0.22 : 0.7;
      anim.success = smooth(anim.success, anim.successTarget, successTau, dt);
      anim.disabledVal = smooth(anim.disabledVal, anim.disabledTarget, 0.2, dt);

      // Mouse smoothing
      const mouseTau = anim.isHovered ? 0.08 : 0.6;
      anim.mouseX = smooth(anim.mouseX, anim.targetMouseX, mouseTau, dt);
      anim.mouseY = smooth(anim.mouseY, anim.targetMouseY, mouseTau, dt);

      // Magnetic pull smoothing (disabled under prefers-reduced-motion)
      if (prefersReducedMotion || !magneticRef.current || disabledRef.current) {
        anim.tx = 0;
        anim.ty = 0;
      } else {
        const magTau = anim.isHovered ? 0.12 : 0.35;
        anim.tx = smooth(anim.tx, anim.targetTx, magTau, dt);
        anim.ty = smooth(anim.ty, anim.targetTy, magTau, dt);
      }

      // Scale spring (k=420, c=16)
      spring(anim, anim.scaleTarget, 420, 16, dt);
      // Hard clamp scale to never exceed 1.02
      anim.scaleX = Math.min(anim.scaleX, 1.02);

      // Apply CSS transforms
      btn.style.setProperty("--tx", `${anim.tx.toFixed(2)}px`);
      btn.style.setProperty("--ty", `${anim.ty.toFixed(2)}px`);
      btn.style.setProperty("--s", anim.scaleX.toFixed(4));

      // Ripple age accumulation
      if (anim.clickAge >= 0.0) {
        anim.clickAge += dt;
        if (anim.clickAge > 1.2) {
          anim.clickAge = -1.0;
        }
      }

      // Time accumulation based on speed factors
      if (!prefersReducedMotion) {
        const speed =
          (1.0 + 0.9 * anim.hover + 1.2 * anim.loading) * (disabledRef.current ? 0.3 : 1.0);
        anim.time += dt * speed;
      } else {
        anim.time = 2.3;
      }

      // Render WebGL frame
      if (glCtx && program) {
        glCtx.useProgram(program);

        const u = glRef.current.uniforms;
        if (u.uRes) glCtx.uniform2f(u.uRes, anim.width, anim.height);
        if (u.uDpr) glCtx.uniform1f(u.uDpr, anim.dpr);
        if (u.uTime) glCtx.uniform1f(u.uTime, anim.time);
        if (u.uMouse) glCtx.uniform2f(u.uMouse, anim.mouseX, anim.mouseY);
        if (u.uHover) glCtx.uniform1f(u.uHover, anim.hover);
        if (u.uPress) glCtx.uniform1f(u.uPress, anim.press);
        if (u.uLoading) glCtx.uniform1f(u.uLoading, anim.loading);
        if (u.uSuccess) glCtx.uniform1f(u.uSuccess, anim.success);
        if (u.uDisabled) glCtx.uniform1f(u.uDisabled, anim.disabledVal);
        if (u.uClick) glCtx.uniform3f(u.uClick, anim.clickX, anim.clickY, anim.clickAge);

        glCtx.disable(glCtx.BLEND);
        glCtx.drawArrays(glCtx.TRIANGLES, 0, 3);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      canvas.removeEventListener("webglcontextrestored", handleContextRestored);

      if (gl) {
        if (glRef.current.program) {
          gl.deleteProgram(glRef.current.program);
        }
        const ext = gl.getExtension("WEBGL_lose_context");
        if (ext) ext.loseContext();
      }
    };
  }, []);

  // Pointer & Interaction Handlers
  const handlePointerEnter = useCallback((e: React.PointerEvent<HTMLButtonElement>) => {
    if (disabledRef.current) return;
    animRef.current.isHovered = true;
    animRef.current.hoverTarget = 1.0;
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLButtonElement>) => {
    if (disabledRef.current || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const cssX = e.clientX - rect.left;
    const cssY = e.clientY - rect.top;

    // Label sheen follows pointer in CSS px
    btnRef.current.style.setProperty("--mx", `${cssX.toFixed(1)}px`);

    // WebGL coordinates: bottom-left origin in device px
    const dpr = animRef.current.dpr;
    animRef.current.targetMouseX = cssX * dpr;
    animRef.current.targetMouseY = (rect.height - cssY) * dpr;

    // Magnetic pull: 0.18 * offset from center, clamped to ±5px
    if (magneticRef.current) {
      const centerX = rect.width * 0.5;
      const centerY = rect.height * 0.5;
      const rawTx = (cssX - centerX) * 0.18;
      const rawTy = (cssY - centerY) * 0.18;
      animRef.current.targetTx = Math.max(-5, Math.min(5, rawTx));
      animRef.current.targetTy = Math.max(-5, Math.min(5, rawTy));
    }
  }, []);

  const handlePointerLeave = useCallback(() => {
    animRef.current.isHovered = false;
    animRef.current.hoverTarget = 0.0;
    animRef.current.pressTarget = 0.0;
    animRef.current.scaleTarget = 1.0;
    animRef.current.targetTx = 0;
    animRef.current.targetTy = 0;

    // Center the mouse smoothly on leave
    animRef.current.targetMouseX = animRef.current.width * 0.5;
    animRef.current.targetMouseY = animRef.current.height * 0.5;
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLButtonElement>) => {
    if (disabledRef.current || statusRef.current !== "idle" || !btnRef.current) return;
    animRef.current.pressTarget = 1.0;
    animRef.current.scaleTarget = 0.965;

    // Launch ripple shockwave from exact click point
    const rect = btnRef.current.getBoundingClientRect();
    const cssX = e.clientX - rect.left;
    const cssY = e.clientY - rect.top;
    const dpr = animRef.current.dpr;

    animRef.current.clickX = cssX * dpr;
    animRef.current.clickY = (rect.height - cssY) * dpr;
    animRef.current.clickAge = 0.0;
  }, []);

  const handlePointerUp = useCallback(() => {
    animRef.current.pressTarget = 0.0;
    animRef.current.scaleTarget = 1.0;
  }, []);

  const handleFocus = useCallback(() => {
    if (disabledRef.current) return;
    animRef.current.hoverTarget = 0.6;
    animRef.current.targetMouseX = animRef.current.width * 0.5;
    animRef.current.targetMouseY = animRef.current.height * 0.5;
  }, []);

  const handleBlur = useCallback(() => {
    if (!animRef.current.isHovered) {
      animRef.current.hoverTarget = 0.0;
      animRef.current.pressTarget = 0.0;
      animRef.current.scaleTarget = 1.0;
    }
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.repeat || disabledRef.current || statusRef.current !== "idle") return;
    if (e.key === "Enter" || e.key === " ") {
      animRef.current.pressTarget = 1.0;
      animRef.current.scaleTarget = 0.965;

      // Ripple origin is center on keyboard trigger
      animRef.current.clickX = animRef.current.width * 0.5;
      animRef.current.clickY = animRef.current.height * 0.5;
      animRef.current.clickAge = 0.0;
    }
  }, []);

  const handleKeyUp = useCallback((e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      animRef.current.pressTarget = 0.0;
      animRef.current.scaleTarget = 1.0;
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || status !== "idle") {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const isBusy = status === "loading" || status === "success";
  const statusAnnouncement =
    status === "loading" ? loadingLabel : status === "success" ? successLabel : "";

  return (
    <div ref={wrapRef} className="sb-wrap">
      <button
        ref={btnRef}
        type="button"
        className={`sb sb--${size} ${disabled ? "sb--disabled" : ""} ${noGl ? "sb--nogl" : ""} ${className}`}
        data-status={status}
        aria-disabled={disabled || isBusy ? "true" : undefined}
        aria-busy={status === "loading" ? "true" : undefined}
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onClick={handleClick}
      >
        {/* WebGL2 Hardware Canvas */}
        <canvas ref={canvasRef} className="sb__gl" aria-hidden="true" />

        {/* Graceful CSS Fallback */}
        <span className="sb__fallback" aria-hidden="true" />

        {/* Content Container (DOM Text is never drawn into canvas) */}
        <span className="sb__content">
          <span className="sb__labels">
            <span className="sb__label sb__label--idle" aria-hidden={status !== "idle"}>
              {idleLabel}
            </span>
            <span className="sb__label sb__label--loading" aria-hidden={status !== "loading"}>
              {loadingLabel}
            </span>
            <span className="sb__label sb__label--success" aria-hidden={status !== "success"}>
              {successLabel}
            </span>
          </span>

          <span className="sb__icons" aria-hidden="true">
            {/* Arrow Icon */}
            <svg className="sb__icon sb__icon--arrow" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            {/* Check Icon */}
            <svg className="sb__icon sb__icon--check" viewBox="0 0 24 24">
              <path d="M5 12.5l4.5 4.5L19 7.5" pathLength={1} />
            </svg>
          </span>
        </span>
      </button>

      {/* Screen Reader Announcements */}
      <span className="sr-only" role="status" aria-live="polite">
        {statusAnnouncement}
      </span>
    </div>
  );
}

/**
 * Showcase Page
 */
export default function App() {
  const [heroStatus, setHeroStatus] = useState<"idle" | "loading" | "success">("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const handleHeroClick = () => {
    if (heroStatus !== "idle") return;
    clearTimers();
    setHeroStatus("loading");

    const t1 = setTimeout(() => {
      setHeroStatus("success");
      const t2 = setTimeout(() => {
        setHeroStatus("idle");
      }, 1500);
      timerRef.current.push(t2);
    }, 1600);
    timerRef.current.push(t1);
  };

  const handleForceStatus = (st: "idle" | "loading" | "success") => {
    clearTimers();
    setHeroStatus(st);
  };

  // Segmented control indicator offset
  const segIndex = heroStatus === "idle" ? 0 : heroStatus === "loading" ? 1 : 2;
  const segOffset = segIndex * 66;

  return (
    <main className="lumen-app">
      <header className="lumen-header">
        <div className="lumen-badge">
          <span className="lumen-badge__dot" />
          <span>WebGL2</span>
        </div>
        <h1 className="lumen-title">Lumen — Obsidian Glass</h1>
        <p className="lumen-subtitle">
          Liquid thin-film iridescence leaking from the rim of a dark glass bead. Click to trigger the
          refractive shockwave and orbital comet.
        </p>
      </header>

      {/* Main Glass Panel */}
      <section className="lumen-panel" aria-label="Button Interactive Showcase">
        <div className="lumen-panel__grid" />

        <div className="lumen-panel__center">
          <ShaderButton
            size="lg"
            status={heroStatus}
            onClick={handleHeroClick}
            labels={{ loading: "Working…", success: "Done" }}
          >
            Continue
          </ShaderButton>
        </div>

        {/* Panel Footer */}
        <footer className="lumen-panel__footer">
          <p className="lumen-panel__caption">Hover · Press · Tab</p>

          {/* State Switcher Segmented Control */}
          <div className="lumen-seg" role="group" aria-label="Button State Preview">
            <div
              className="lumen-seg__indicator"
              style={{
                width: "64px",
                transform: `translateX(${segOffset}px)`,
              }}
            />
            <button
              type="button"
              className={`lumen-seg__btn ${heroStatus === "idle" ? "lumen-seg__btn--active" : ""}`}
              onClick={() => handleForceStatus("idle")}
            >
              Idle
            </button>
            <button
              type="button"
              className={`lumen-seg__btn ${heroStatus === "loading" ? "lumen-seg__btn--active" : ""}`}
              onClick={() => handleForceStatus("loading")}
            >
              Loading
            </button>
            <button
              type="button"
              className={`lumen-seg__btn ${heroStatus === "success" ? "lumen-seg__btn--active" : ""}`}
              onClick={() => handleForceStatus("success")}
            >
              Success
            </button>
          </div>
        </footer>
      </section>

      {/* Secondary Button Row Below Panel */}
      <nav className="lumen-secondary-row" aria-label="Button Variants">
        <ShaderButton size="md">Save Changes</ShaderButton>
        <ShaderButton size="md" disabled>
          Locked
        </ShaderButton>
      </nav>
    </main>
  );
}
