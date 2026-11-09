import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ElectricWavesShaderProps {
  waveCount?: number;
  amplitude?: number;
  frequency?: number;
  brightness?: number;
  colorSeparation?: number;
}

const ElectricWavesShader = ({
  waveCount = 5.0,
  amplitude = 0.1,
  frequency = 2.0,
  brightness = 0.005,
  colorSeparation = 0.1,
}: ElectricWavesShaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<THREE.ShaderMaterial>();

  // Sync props → shader uniforms
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_waveCount.value = waveCount;
      materialRef.current.uniforms.u_amplitude.value = amplitude;
      materialRef.current.uniforms.u_frequency.value = frequency;
      materialRef.current.uniforms.u_brightness.value = brightness;
      materialRef.current.uniforms.u_colorSeparation.value = colorSeparation;
    }
  }, [waveCount, amplitude, frequency, brightness, colorSeparation]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1) Renderer / Scene / Camera / Clock
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);
    } catch (err) {
      console.error("WebGL not supported", err);
      container.innerHTML =
        '<p style="color:white;text-align:center;">Sorry, WebGL isn’t available.</p>';
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    // 2) GLSL 100 shaders
    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision mediump float;

      uniform float u_time;
      uniform vec2 u_resolution;
      uniform float u_waveCount;
      uniform float u_amplitude;
      uniform float u_frequency;
      uniform float u_brightness;
      uniform float u_colorSeparation;

      float pattern(vec2 uv) {
        float intensity = 0.0;
        for (float i = 0.0; i < u_waveCount; i++) {
          uv.x += sin(u_time * (1.0 + i) + uv.y * u_frequency) * u_amplitude;
          intensity += u_brightness / abs(uv.x);
        }
        return intensity;
      }

      vec3 scene(vec2 uv) {
        vec3 color = vec3(0.0);
        vec2 ruv = vec2(uv.y, uv.x);
        for (float i = 0.0; i < u_waveCount; i++) {
          int channel = int(mod(i, 3.0));
          vec2 cuv = ruv + vec2(0.0, i * u_colorSeparation);
          color[channel] += pattern(cuv);
        }
        return color;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution)
                  / min(u_resolution.x, u_resolution.y);
        vec3 col = scene(uv);
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    // 3) Material / Mesh
    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2() },
      u_waveCount: { value: waveCount },
      u_amplitude: { value: amplitude },
      u_frequency: { value: frequency },
      u_brightness: { value: brightness },
      u_colorSeparation: { value: colorSeparation },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });
    materialRef.current = material;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 4) Handle resize
    const onResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      uniforms.u_resolution.value.set(width, height);
    };
    window.addEventListener("resize", onResize);
    onResize();

    // 5) Animation loop
    renderer.setAnimationLoop(() => {
      uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    // 6) Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      renderer.setAnimationLoop(null);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
      }}
      aria-label="Interactive electric waves background"
    />
  );
};

export default ElectricWavesShader;
