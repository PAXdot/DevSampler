"use client";

import { useEffect, useRef } from "react";

const VERT = `
  attribute vec2 a_pos;
  void main() {
    gl_Position = vec4(a_pos, 0.0, 1.0);
  }
`;

const FRAG = `
  precision highp float;
  uniform vec2 u_res;
  uniform float u_time;

  // Polynomial Smooth Minimum
  float smin(float a, float b, float k) {
      float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
      return mix(b, a, h) - k * h * (1.0 - h);
  }

  // 3D Hash for deterministic randomness
  vec3 hash3(float n) {
      return fract(sin(vec3(n * 12.9898, n * 78.233, n * 39.346)) * 43758.5453);
  }

  // 2D Rotation Matrix
  mat2 rot(float a) {
      float s = sin(a), c = cos(a);
      return mat2(c, -s, s, c);
  }

  // Global Distance Field
  float map(vec3 p) {
      // 1. Primary Central Mass
      float d = length(p) - 1.4;
      
      // Gentle geometric displacement (wobble)
      float wobble = sin(p.x * 2.0 + u_time * 0.8) * 
                     sin(p.y * 2.0 - u_time * 0.6) * 
                     sin(p.z * 2.0 + u_time * 0.7) * 0.05;
      d -= wobble;

      // 2. Center-to-Outside Bouncing & Merging System
      for(float i = 0.0; i < 25.0; i++) {
          vec3 h = hash3(i * 1.234);
          
          // Independent timeline for each bubble
          float t = u_time * (0.35 + h.x * 0.3) + h.y * 100.0;
          
          // Bouncing logic: abs(sin(t)) makes the bubble shoot from 0 (center) to 1 (peak) and fall back
          float bounce = abs(sin(t));
          // Ease the motion so it hangs slightly at the outside peak
          bounce = smoothstep(0.0, 1.0, bounce);
          
          // Max travel distance (pushes well outside the 1.4 radius main bubble)
          float maxDist = 2.2 + h.z * 1.8; 
          float dist = bounce * maxDist;
          
          // Base random direction
          vec3 dir = normalize(h - 0.5);
          
          // Float and drift around the center while moving outward
          float angle = u_time * 0.15 + h.x * 6.283;
          dir.xz *= rot(angle);
          dir.xy *= rot(angle * 0.5);
          
          vec3 pos = dir * dist;
          float radius = 0.08 + h.x * 0.25;
          float dBubble = length(p - pos) - radius;
          
          // Lower smin factor (0.15) for clean detachment and sharp snap-merging
          d = smin(d, dBubble, 0.15);
      }
      
      return d;
  }

  // Calculate geometric normals
  vec3 calcNormal(vec3 p) {
      const vec2 e = vec2(0.005, 0.0);
      return normalize(vec3(
          map(p + e.xyy) - map(p - e.xyy),
          map(p + e.yxy) - map(p - e.yxy),
          map(p + e.yyx) - map(p - e.yyx)
      ));
  }

  // Soft Studio Background (Light grey/white)
  vec3 getBg(vec2 uv) {
      return mix(vec3(0.96, 0.95, 0.94), vec3(0.82, 0.81, 0.80), length(uv) * 0.8);
  }

  // Fake Studio Environment Map (Simulates bright softbox lights)
  vec3 getEnv(vec3 ref) {
      float l1 = smoothstep(0.85, 0.98, dot(ref, normalize(vec3(1.0, 0.8, 0.5))));
      float l2 = smoothstep(0.9, 0.99, dot(ref, normalize(vec3(-1.0, 1.0, 1.0))));
      float l3 = smoothstep(0.8, 0.95, dot(ref, normalize(vec3(0.0, -1.0, 0.5)))) * 0.5;
      return vec3(l1 + l2 + l3) * 1.2; 
  }

  void main() {
      vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);

      // Render Background
      vec3 bg = getBg(uv);
      vec3 col = bg;

      // Camera
      vec3 ro = vec3(0.0, 0.0, 7.5);
      vec3 rd = normalize(vec3(uv, -1.0));

      float t = 0.0;
      const float max_t = 15.0;
      bool hit = false;
      vec3 p;
      
      // Raymarching Loop
      for(int i = 0; i < 150; i++) {
          p = ro + rd * t;
          float d = map(p);
          if(abs(d) < 0.001) {
              hit = true;
              break;
          }
          if(t > max_t) break;
          t += d * 0.4; 
      }

      // Lighting and Optics
      if(hit) {
          vec3 n = calcNormal(p);
          vec3 v = -rd;
          vec3 ref = reflect(rd, n);
          float ndotv = clamp(dot(n, v), 0.0, 1.0);
          
          // 1. Refraction (Transparent Glass/Soap Core)
          vec2 ref_uv = uv + n.xy * 0.06 * (1.0 - ndotv);
          vec3 refractedBg = getBg(ref_uv);
          
          // 2. Thin-Film Iridescence (Vibrant, ethereal pastels matching Video 2)
          float swirl = sin(p.x * 2.0 + u_time) * cos(p.y * 2.0 - u_time) * 0.5;
          float phase = ndotv * 1.2 + swirl + u_time * 0.15;
          vec3 iri = 0.5 + 0.5 * cos(6.28318 * (phase * vec3(1.0, 0.8, 0.6) + vec3(0.0, 0.33, 0.67)));
          iri = smoothstep(0.0, 1.0, iri); // Boost vibrancy and contrast
          
          // 3. Fresnel Edge Masking 
          float f0 = 0.02; 
          float fresnel = f0 + (1.0 - f0) * pow(1.0 - ndotv, 3.0);
          
          // Distinct sharp edge reflection
          float edge = pow(1.0 - ndotv, 5.0) * 0.7;
          
          // 4. Studio Specular Lighting
          vec3 envLight = getEnv(ref);
          float spec1 = pow(max(dot(ref, normalize(vec3(1.0, 1.5, 1.0))), 0.0), 128.0) * 1.5;
          float spec2 = pow(max(dot(ref, normalize(vec3(-1.0, -0.5, 1.2))), 0.0), 64.0) * 0.8;
          
          // 5. Final Material Composite
          col = refractedBg; // Base is purely transparent
          col = mix(col, iri * 1.8, fresnel); // Blend in iridescence via fresnel
          col += vec3(1.0) * edge; // Bright rim outline
          col += envLight; // Environment reflections
          col += (spec1 + spec2) * vec3(1.0); // Sharp pinpoint specular highlights
      }

      // Dithering to prevent gradient banding
      float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
      col += (dither - 0.5) * 0.015;

      gl_FragColor = vec4(col, 1.0);
  }
`;

export function Component() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, VERT);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, FRAG);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
      -1.0,  1.0,
       1.0, -1.0,
       1.0,  1.0,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uResLocation = gl.getUniformLocation(program, "u_res");
    const uTimeLocation = gl.getUniformLocation(program, "u_time");

    let animationFrameId: number;
    const startTime = performance.now();

    const resize = () => {
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      }
    };

    const render = (time: number) => {
      resize();
      gl.uniform2f(uResLocation, gl.canvas.width, gl.canvas.height);
      gl.uniform1f(uTimeLocation, (time - startTime) * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        backgroundColor: "#f0eeec",
      }}
    />
  );
}

export default Component;