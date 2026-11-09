// src/components/ui/kaleidoscopic-shader.tsx
"use client";

import React, { FC, useRef, useEffect, useState } from "react";

export interface KaleidoscopicTunnelProps {
  /** Number of mirrored segments */
  segments?: number;
  /** Animation speed multiplier */
  speed?: number;
  /** Extra wrapper CSS classes */
  className?: string;
  /** ARIA label for screen readers */
  ariaLabel?: string;
}

export const kaleidoscopicTunnelShader = `#version 300 es
precision highp float;

uniform float u_time;
uniform vec2  u_resolution;
uniform float u_segments;
uniform float u_speed;
out vec4 fragColor;

// High‐quality palette by Inigo Quilez
vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
  float angle  = atan(uv.y, uv.x);
  float radius = length(uv);

  float tc = 1.0 / max(radius, 0.0001);
  angle = fract(angle * u_segments / (2.0 * 3.14159));

  float pattern = tc + angle * 10.0 - u_time * u_speed;
  vec3 color = palette(
    pattern * 0.1,
    vec3(0.5), vec3(0.5), vec3(1.0),
    vec3(0.0, 0.33, 0.67)
  );

  color *= (1.0 - smoothstep(0.0, 1.5, radius));
  color += smoothstep(0.05, 0.0, radius);

  fragColor = vec4(color, 1.0);
}
`;

const KaleidoscopicTunnel: FC<KaleidoscopicTunnelProps> = ({
  segments = 8,
  speed = 2,
  className = "",
  ariaLabel = "Kaleidoscopic tunnel shader background",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2");
    if (!gl) {
      setError("WebGL2 not supported in this browser.");
      return;
    }

    // Helper: compile a WebGL2 shader
    const compileShader = (type: GLenum, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(sh));
        gl.deleteShader(sh);
        setError("Shader compile error. See console.");
        return null;
      }
      return sh;
    };

    // Vertex + fragment
    const vsSrc = `#version 300 es
    in vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }`;
    const vs = compileShader(gl.VERTEX_SHADER, vsSrc);
    const fs = compileShader(gl.FRAGMENT_SHADER, kaleidoscopicTunnelShader);
    if (!vs || !fs) return;

    // Link program
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(prog));
      setError("Program link error. See console.");
      return;
    }

    // Look up locations
    const posLoc = gl.getAttribLocation(prog, "a_position");
    const resLoc = gl.getUniformLocation(prog, "u_resolution")!;
    const timeLoc = gl.getUniformLocation(prog, "u_time")!;
    const segLoc = gl.getUniformLocation(prog, "u_segments")!;
    const speedLoc = gl.getUniformLocation(prog, "u_speed")!;

    // Full‐screen quad
    const quad = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]);
    const buf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

    // Handle resize
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener("resize", resize);
    resize();

    // Render loop
    let frameId: number;
    const render = (t: number) => {
      if (error) return;

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(prog);

      // Bind attributes + uniforms
      gl.enableVertexAttribArray(posLoc);
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, t * 0.001);
      gl.uniform1f(segLoc, segments);
      gl.uniform1f(speedLoc, speed);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frameId = requestAnimationFrame(render);
    };
    frameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, [segments, speed, error]);

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
      {error && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-white p-4 font-mono text-sm">
          {error}
        </div>
      )}
    </div>
  );
};

export default KaleidoscopicTunnel;
