"use client";

import React, { FC, useRef, useEffect, useState } from "react";

export interface WarpTunnelProps {
  /** Number of mirrored segments (default: 8) */
  segments?: number;
  /** Speed multiplier for the animation (default: 1.5) */
  speed?: number;
  /** Additional CSS classes on the wrapper */
  className?: string;
  /** Accessible label for screen readers */
  ariaLabel?: string;
}

const vertexShaderSource = `#version 300 es
in vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const fragmentShaderSource = `#version 300 es
precision highp float;

uniform float u_time;
uniform vec2  u_resolution;
uniform float u_segments;
uniform float u_speed;

// Inigo Quilez palette
vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

out vec4 fragColor;

void main() {
  // normalize coordinates
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy)
            / u_resolution.y;

  // polar coords
  float angle  = atan(uv.y, uv.x);
  float radius = length(uv);

  // tunnel coordinate
  float tc = 1.0 / max(radius, 0.0001);

  // swirl + time
  float pattern = tc + angle * u_segments
                  + u_time * u_speed;

  // color lookup
  vec3 color = palette(
    pattern * 0.1 + u_time * 0.1,
    vec3(0.5),
    vec3(0.5),
    vec3(1.0),
    vec3(0.0, 0.1, 0.2)
  );

  // fade edges
  color *= (1.0 - smoothstep(0.0, 2.0, radius));

  fragColor = vec4(color, 1.0);
}
`;

const WarpTunnel: FC<WarpTunnelProps> = ({
  segments = 8,
  speed = 1.5,
  className = "",
  ariaLabel = "Warp tunnel shader background",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string | null>(null);
  const frameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Try WebGL2 first for #version 300 es
    const gl =
      (canvas.getContext("webgl2") as WebGL2RenderingContext) ||
      (canvas.getContext("webgl") as WebGLRenderingContext);
    if (!gl) {
      setError("WebGL not supported");
      return;
    }

    // Shader compile helper
    function compileShader(type: GLenum, src: string): WebGLShader | null {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(sh));
        gl.deleteShader(sh);
        setError("Shader compile error (see console)");
        return null;
      }
      return sh;
    }

    // Compile shaders
    const vs = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vs || !fs) return;

    // Link program
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
      setError("Program link error (see console)");
      return;
    }

    // Look up locations
    const posLoc = gl.getAttribLocation(prog, "a_position");
    const resLoc = gl.getUniformLocation(prog, "u_resolution")!;
    const timeLoc = gl.getUniformLocation(prog, "u_time")!;
    const segLoc = gl.getUniformLocation(prog, "u_segments")!;
    const speedLoc = gl.getUniformLocation(prog, "u_speed")!;

    // Full-screen quad
    const quad = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]);
    const buf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

    // Resize handler
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener("resize", resize);
    resize();

    // Render loop
    const render = (t: number) => {
      if (error) return;

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(prog);

      // Bind attributes
      gl.enableVertexAttribArray(posLoc);
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

      // Set uniforms
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, t * 0.001);
      gl.uniform1f(segLoc, segments);
      gl.uniform1f(speedLoc, speed);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frameId.current = requestAnimationFrame(render);
    };
    frameId.current = requestAnimationFrame(render);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId.current!);
      window.removeEventListener("resize", resize);
    };
  }, [segments, speed, error]);

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      {error && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-white font-mono p-4">
          {error}
        </div>
      )}
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default WarpTunnel;
