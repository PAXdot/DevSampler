"use client";

import React, { FC, useRef, useEffect, useState } from "react";

export interface ShaderComponentProps {
  /** GLSL fragment shader source (WebGL2) */
  fragmentShader: string;
  /** Accessible label for screen readers */
  ariaLabel?: string;
  /** Extra CSS classes for the canvas wrapper */
  className?: string;
}

export const hexagonalPulseShader = `#version 300 es
precision highp float;

uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

const float HEX_DENSITY = 8.0;
const float PULSE_SPEED = 1.5;

vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

vec2 hexCoord(vec2 p) {
  p.x *= 1.73205;
  p.y += mod(floor(p.x), 2.0) * 0.5;
  return fract(p);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / resolution.y;
  vec2 hex_uv = uv * HEX_DENSITY;
  vec2 local_hex = hexCoord(hex_uv) - 0.5;
  float dist_to_center = length(local_hex);

  float pulse = sin(length(uv) * 10.0 - time * PULSE_SPEED);
  pulse = smoothstep(0.7, 1.0, pulse);

  vec3 color = palette(
    length(uv) + time * 0.2,
    vec3(0.5),
    vec3(0.5),
    vec3(1.0),
    vec3(0.0, 0.1, 0.2)
  );

  vec3 finalColor = color * pulse * (1.0 - smoothstep(0.0, 0.5, dist_to_center));
  float edge = abs(local_hex.y);
  finalColor += vec3(0.1) / edge * (1.0 - pulse);

  fragColor = vec4(finalColor, 1.0);
}`;

/**
 * ShaderComponent
 *
 * Renders a full-screen WebGL2 canvas using a custom fragment shader.
 */
const ShaderComponent: FC<ShaderComponentProps> = ({
  fragmentShader,
  ariaLabel = "Interactive shader background",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2");
    if (!gl) {
      setError("WebGL2 not supported");
      return;
    }

    // Minimal WebGL2 renderer class
    class Renderer {
      private gl: WebGL2RenderingContext;
      private program: WebGLProgram | null = null;
      private uTime: WebGLUniformLocation | null = null;
      private uRes: WebGLUniformLocation | null = null;
      private quadBuffer: WebGLBuffer;

      constructor(public canvas: HTMLCanvasElement) {
        this.gl = canvas.getContext("webgl2")!;
        // Full-screen quad
        this.quadBuffer = this.gl.createBuffer()!;
      }

      compile(type: GLenum, src: string) {
        const s = this.gl.createShader(type)!;
        this.gl.shaderSource(s, src);
        this.gl.compileShader(s);
        if (!this.gl.getShaderParameter(s, this.gl.COMPILE_STATUS)) {
          console.error(this.gl.getShaderInfoLog(s));
          this.gl.deleteShader(s);
          return null;
        }
        return s;
      }

      init(fragSrc: string) {
        const vsCode = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;
        const vs = this.compile(this.gl.VERTEX_SHADER, vsCode);
        const fs = this.compile(this.gl.FRAGMENT_SHADER, fragSrc);
        if (!vs || !fs) return false;

        const prog = this.gl.createProgram()!;
        this.gl.attachShader(prog, vs);
        this.gl.attachShader(prog, fs);
        this.gl.linkProgram(prog);
        if (!this.gl.getProgramParameter(prog, this.gl.LINK_STATUS)) {
          console.error(this.gl.getProgramInfoLog(prog));
          return false;
        }
        this.program = prog;

        // Setup quad buffer
        const quadVerts = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.quadBuffer);
        this.gl.bufferData(
          this.gl.ARRAY_BUFFER,
          quadVerts,
          this.gl.STATIC_DRAW,
        );
        const posLoc = this.gl.getAttribLocation(prog, "position");
        this.gl.enableVertexAttribArray(posLoc);
        this.gl.vertexAttribPointer(posLoc, 2, this.gl.FLOAT, false, 0, 0);

        this.uRes = this.gl.getUniformLocation(prog, "resolution");
        this.uTime = this.gl.getUniformLocation(prog, "time");
        return true;
      }

      render(timeMs: number) {
        if (!this.program) return;
        const w = this.canvas.width;
        const h = this.canvas.height;
        this.gl.viewport(0, 0, w, h);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.gl.useProgram(this.program);
        if (this.uTime) this.gl.uniform1f(this.uTime, timeMs * 0.001);
        if (this.uRes) this.gl.uniform2f(this.uRes, w, h);
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
      }
    }

    const renderer = new Renderer(canvas);
    if (!renderer.init(fragmentShader)) {
      setError("Shader compile/link error (see console)");
      return;
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };
    window.addEventListener("resize", resize);
    resize();

    let rafId: number;
    const loop = (t: number) => {
      renderer.render(t);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, [fragmentShader]);

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
      {error && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-white font-mono text-sm p-4">
          {error}
        </div>
      )}
    </div>
  );
};

export default ShaderComponent;
