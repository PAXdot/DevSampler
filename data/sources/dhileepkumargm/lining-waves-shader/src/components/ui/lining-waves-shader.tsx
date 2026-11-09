"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export interface LiningWavesShaderProps {
  hasActiveReminders?: boolean;
  hasUpcomingReminders?: boolean;
  disableCenterDimming?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Full-screen “lining waves” shader background.
 * Props drive three GLSL uniforms—no UI or controls here.
 */
export default function LiningWavesShader({
  hasActiveReminders = false,
  hasUpcomingReminders = false,
  disableCenterDimming = false,
  className = "",
  style = {},
}: LiningWavesShaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<THREE.ShaderMaterial>();

  // Sync props into shader uniforms
  useEffect(() => {
    const mat = materialRef.current;
    if (mat) {
      mat.uniforms.hasActiveReminders.value = hasActiveReminders;
      mat.uniforms.hasUpcomingReminders.value = hasUpcomingReminders;
      mat.uniforms.disableCenterDimming.value = disableCenterDimming;
    }
  }, [hasActiveReminders, hasUpcomingReminders, disableCenterDimming]);

  // Three.js setup & render loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Scene, camera, clock
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    // GLSL shaders
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform bool hasActiveReminders;
      uniform bool hasUpcomingReminders;
      uniform bool disableCenterDimming;
      varying vec2 vUv;

      // Simple hash-based noise
      float hash(float n) {
        return fract(sin(n) * 43758.5453);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f*f*(3.0-2.0*f);
        float a = hash(i.x + i.y*57.0);
        float b = hash(i.x+1.0 + i.y*57.0);
        float c = hash(i.x + (i.y+1.0)*57.0);
        float d = hash(i.x+1.0 + (i.y+1.0)*57.0);
        return mix(mix(a,b,f.x), mix(c,d,f.x), f.y);
      }

      // Fractal Brownian Motion
      float fbm(vec2 p) {
        float sum = 0.0, amp = 0.5, freq = 1.0;
        for(int i=0;i<6;i++){
          sum += amp * noise(p*freq);
          amp *= 0.5;
          freq *= 2.0;
        }
        return sum;
      }

      // Generate wavy lines pattern
      float lines(vec2 uv, float thickness, float distortion) {
        float y = uv.y + distortion * fbm(uv*2.0 + iTime*0.1);
        float pattern = fract(y * 20.0);
        return smoothstep(0.5-thickness, 0.5, pattern)
             - smoothstep(0.5,       0.5+thickness, pattern);
      }

      void mainImage(out vec4 O, in vec2 fragCoord) {
        vec2 uv = fragCoord.xy / iResolution;
        uv.x *= iResolution.x / iResolution.y;

        // Mouse influence (optional)
        vec2 mp = vec2(0.0);
        // omitted for pure shader

        // Base parameters
        float thickness = 0.02;
        float distortion = 0.1;
        float wave = lines(uv, thickness, distortion);

        // Color by state
        vec3 baseColor = hasActiveReminders
          ? vec3(0.2,0.4,1.0)
          : hasUpcomingReminders
          ? vec3(0.2,1.0,0.4)
          : vec3(1.0);

        vec3 col = mix(vec3(0.0), baseColor, wave);

        // Center dimming
        float dist = distance(fragCoord, iResolution*0.5);
        float radius = min(iResolution.x, iResolution.y)*0.5;
        float dim = disableCenterDimming
          ? 1.0
          : smoothstep(radius*0.3, radius*0.5, dist);
        if (!disableCenterDimming) {
          col = mix(col*0.3, col, dim);
        }

        O = vec4(col, 1.0);
      }

      void main() {
        mainImage(gl_FragColor, vUv * iResolution);
      }
    `;

    // Uniforms
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      hasActiveReminders: { value: hasActiveReminders },
      hasUpcomingReminders: { value: hasUpcomingReminders },
      disableCenterDimming: { value: disableCenterDimming },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w, h);
    };
    window.addEventListener("resize", onResize);
    onResize();

    // Render loop
    renderer.setAnimationLoop(() => {
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    // Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      renderer.setAnimationLoop(null);
      container.removeChild(renderer.domElement);
      material.dispose();
      mesh.geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 bg-background ${className}`}
      style={style}
      aria-label="Interactive lining-waves shader"
    />
  );
}
