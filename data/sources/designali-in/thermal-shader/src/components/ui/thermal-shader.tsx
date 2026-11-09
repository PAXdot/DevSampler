"use client";

import * as React from "react";
import * as THREE from "three";

export interface ThermalShaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Animation speed multiplier. */
  speed?: number;
  /** Spatial frequency of the thermal noise. */
  scale?: number;
  /** Overall heat/intensity of the map. */
  intensity?: number;
}

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uSpeed;
  uniform float uScale;
  uniform float uIntensity;

  // Simplex-ish value noise
  vec3 hash3(vec2 p) {
    vec3 q = vec3(
      dot(p, vec2(127.1, 311.7)),
      dot(p, vec2(269.5, 183.3)),
      dot(p, vec2(419.2, 371.9))
    );
    return fract(sin(q) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash3(i + vec2(0.0, 0.0)).x;
    float b = hash3(i + vec2(1.0, 0.0)).x;
    float c = hash3(i + vec2(0.0, 1.0)).x;
    float d = hash3(i + vec2(1.0, 1.0)).x;
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 6; i++) {
      v += amp * noise(p);
      p *= 2.0;
      amp *= 0.5;
    }
    return v;
  }

  // Thermal / infrared colour ramp: black -> purple -> red -> orange -> yellow -> white
  vec3 thermal(float t) {
    t = clamp(t, 0.0, 1.0);
    vec3 c0 = vec3(0.0, 0.0, 0.0);
    vec3 c1 = vec3(0.20, 0.0, 0.35);
    vec3 c2 = vec3(0.70, 0.0, 0.20);
    vec3 c3 = vec3(1.0, 0.35, 0.0);
    vec3 c4 = vec3(1.0, 0.85, 0.10);
    vec3 c5 = vec3(1.0, 1.0, 0.95);
    if (t < 0.2) return mix(c0, c1, t / 0.2);
    if (t < 0.4) return mix(c1, c2, (t - 0.2) / 0.2);
    if (t < 0.6) return mix(c2, c3, (t - 0.4) / 0.2);
    if (t < 0.8) return mix(c3, c4, (t - 0.6) / 0.2);
    return mix(c4, c5, (t - 0.8) / 0.2);
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    vec2 p = vec2(uv.x * aspect, uv.y) * uScale;

    float t = uTime * uSpeed * 0.15;

    vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3 - t)));
    vec2 r = vec2(
      fbm(p + 4.0 * q + vec2(1.7, 9.2) + 0.15 * t),
      fbm(p + 4.0 * q + vec2(8.3, 2.8) - 0.12 * t)
    );

    float heat = fbm(p + 4.0 * r);
    heat = pow(heat * uIntensity, 1.4);

    vec3 col = thermal(heat);
    gl_FragColor = vec4(col, 1.0);
  }
`;

export default function ThermalShader({
  speed = 1,
  scale = 3,
  intensity = 1.6,
  className,
  style,
  ...props
}: ThermalShaderProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const uniformsRef = React.useRef<{
    uTime: { value: number };
    uResolution: { value: THREE.Vector2 };
    uSpeed: { value: number };
    uScale: { value: number };
    uIntensity: { value: number };
  } | null>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uSpeed: { value: speed },
      uScale: { value: scale },
      uIntensity: { value: intensity },
    };
    uniformsRef.current = uniforms;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    const resize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      renderer.setSize(w, h, false);
      uniforms.uResolution.value.set(w, h);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const clock = new THREE.Clock();
    let raf = 0;
    const animate = () => {
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mesh.geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (uniformsRef.current) uniformsRef.current.uSpeed.value = speed;
  }, [speed]);
  React.useEffect(() => {
    if (uniformsRef.current) uniformsRef.current.uScale.value = scale;
  }, [scale]);
  React.useEffect(() => {
    if (uniformsRef.current) uniformsRef.current.uIntensity.value = intensity;
  }, [intensity]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      {...props}
    />
  );
}
