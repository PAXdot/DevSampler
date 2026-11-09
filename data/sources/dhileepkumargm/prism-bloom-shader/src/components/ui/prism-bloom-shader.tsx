"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export interface PrismBloomShaderProps {
  /** Number of swirling petals */
  swirlCount?: number;
  /** Speed of the bloom animation */
  swirlSpeed?: number;
  /** Extra wrapper classes */
  className?: string;
  /** Inline styles for the wrapper */
  style?: React.CSSProperties;
}

/**
 * PrismBloomShader
 *
 * Renders a full-screen bloom of swirling, petal-like waves.
 * Props drive swirl count and speed; theming via CSS variables.
 */
export default function PrismBloomShader({
  swirlCount = 24,
  swirlSpeed = 0.8,
  className = "",
  style = {},
}: PrismBloomShaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<THREE.ShaderMaterial>();

  // Sync props→uniforms
  useEffect(() => {
    const mat = materialRef.current;
    if (mat) {
      mat.uniforms.uSwirlCount.value = swirlCount;
      mat.uniforms.uSwirlSpeed.value = swirlSpeed;
    }
  }, [swirlCount, swirlSpeed]);

  // Three.js setup + render loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Scene / Camera / Clock
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    // GLSL
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
      uniform float uSwirlCount;
      uniform float uSwirlSpeed;
      varying vec2 vUv;

      // Polar petals shape
      float petal(in vec2 uv) {
        vec2 p = uv - 0.5;
        float r = length(p);
        float a = atan(p.y, p.x);
        float petals = uSwirlCount;
        float angle = a + iTime * uSwirlSpeed;
        float m = mod(angle * petals / (6.28318), 1.0);
        float shape = abs(m - 0.5) * 2.0;
        return smoothstep(0.2, 0.0, shape) * (1.0 - r);
      }

      void mainImage(out vec4 O, in vec2 uv) {
        float bloom = petal(uv);
        // vertical gradient palette
        vec3 col1 = vec3(0.1, 0.2, 0.6);
        vec3 col2 = vec3(1.0, 0.6, 0.2);
        vec3 color = mix(col1, col2, uv.y);
        O = vec4(color * bloom, 1.0);
      }

      void main() {
        mainImage(gl_FragColor, vUv);
      }
    `;

    // Uniforms
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      uSwirlCount: { value: swirlCount },
      uSwirlSpeed: { value: swirlSpeed },
    };

    // Material & mesh
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
      aria-label="Prism bloom shader background"
    />
  );
}
