"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// Three examples imports must be ESM; they work fine in a client component:
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

type ThemeKey = "molten" | "cosmic" | "emerald";

interface StarShockwavesProps {
  /** Initial visual theme. */
  theme?: ThemeKey;
  /** Radial displacement of an auto-emitted shockwave. */
  amplitude?: number;
  /** Expansion speed of an auto-emitted shockwave. */
  speed?: number;
  /** Ring width of an auto-emitted shockwave. */
  width?: number;
}

function StarShockwaves({
  theme: themeProp = "molten",
  amplitude = 12,
  speed = 28,
  width: waveWidth = 6,
}: StarShockwavesProps = {}) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  const [theme] = useState<ThemeKey>(themeProp);
  const [isAnimating] = useState(true);

  // Keep the latest shockwave params available to the animation loop.
  const waveParamsRef = useRef({ amplitude, speed, width: waveWidth });
  waveParamsRef.current = { amplitude, speed, width: waveWidth };

  useEffect(() => {
    // --- add/remove body theme class without clobbering other classes
    const body = document.body;
    const classes = ["theme-molten", "theme-cosmic", "theme-emerald"];
    classes.forEach((c) => body.classList.remove(c));
    body.classList.add(`theme-${theme}`);
  }, [theme]);

  useEffect(() => {
    if (!mountRef.current) return;

    // ---------- THREE setup ----------
    let width = mountRef.current.clientWidth;
    let height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1500);
    camera.position.z = 90;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.04;
    controls.rotateSpeed = 0.3;
    controls.minDistance = 30;
    controls.maxDistance = 300;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.15;

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      1.5,
      0.4,
      0.85,
    );
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());

    // ----------- Theme palettes and bloom presets -----------
    const themes: Record<
      ThemeKey,
      {
        name: string;
        colors: THREE.Color[];
        bloom: { strength: number; radius: number; threshold: number };
      }
    > = {
      molten: {
        name: "Molten",
        colors: [
          new THREE.Color(0xff4800),
          new THREE.Color(0xff8c00),
          new THREE.Color(0xd73a00),
          new THREE.Color(0x3d1005),
          new THREE.Color(0xffc600),
        ],
        bloom: { strength: 0.35, radius: 0.45, threshold: 0.7 },
      },
      cosmic: {
        name: "Cosmic",
        colors: [
          new THREE.Color(0x6a0dad),
          new THREE.Color(0x9370db),
          new THREE.Color(0x4b0082),
          new THREE.Color(0x8a2be2),
          new THREE.Color(0xdda0dd),
        ],
        bloom: { strength: 0.4, radius: 0.5, threshold: 0.65 },
      },
      emerald: {
        name: "Emerald",
        colors: [
          new THREE.Color(0x00ff7f),
          new THREE.Color(0x3cb371),
          new THREE.Color(0x2e8b57),
          new THREE.Color(0x00fa9a),
          new THREE.Color(0x98fb98),
        ],
        bloom: { strength: 0.3, radius: 0.6, threshold: 0.75 },
      },
    };

    // ---------- Particles ----------
    const particleCount = 10000;
    const MAX_HOME_RADIUS = 45;
    let time = 0;
    let shockwaves: Array<{
      t0: number;
      amplitude: number;
      speed: number;
      width: number;
      decay: number;
    }> = [];

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const targetPositions = new Float32Array(particleCount * 3);
    const disintegrationOffsets = new Float32Array(particleCount * 3);

    function createStarPath(particleIndex: number, totalParticles: number) {
      const numStarPoints = 5;
      const outerRadius = 35;
      const innerRadius = 15;
      const scale = 1.0;
      const zDepth = 4;

      const starVertices: THREE.Vector2[] = [];
      for (let i = 0; i < numStarPoints; i++) {
        let angle = (i / numStarPoints) * Math.PI * 2 - Math.PI / 2;
        starVertices.push(
          new THREE.Vector2(
            outerRadius * Math.cos(angle),
            outerRadius * Math.sin(angle),
          ),
        );
        angle += Math.PI / numStarPoints;
        starVertices.push(
          new THREE.Vector2(
            innerRadius * Math.cos(angle),
            innerRadius * Math.sin(angle),
          ),
        );
      }

      const numSegments = starVertices.length;
      const t_path = (particleIndex / totalParticles) * numSegments;
      const segmentIndex = Math.floor(t_path) % numSegments;
      const segmentProgress = t_path - Math.floor(t_path);
      const startVertex = starVertices[segmentIndex];
      const endVertex = starVertices[(segmentIndex + 1) % numSegments];

      const x = THREE.MathUtils.lerp(
        startVertex.x,
        endVertex.x,
        segmentProgress,
      );
      const y = THREE.MathUtils.lerp(
        startVertex.y,
        endVertex.y,
        segmentProgress,
      );
      const z =
        Math.sin((particleIndex / totalParticles) * Math.PI * 4) * (zDepth / 2);
      const jitterStrength = 0.2;

      return new THREE.Vector3(
        x * scale + (Math.random() - 0.5) * jitterStrength,
        y * scale + (Math.random() - 0.5) * jitterStrength,
        z + (Math.random() - 0.5) * jitterStrength * 0.5,
      );
    }

    function getAttributesForParticle(i: number, palette: THREE.Color[]) {
      const t = i / particleCount;
      const colorProgress =
        (t * palette.length * 1.5 + time * 0.05) % palette.length;
      const colorIndex1 = Math.floor(colorProgress);
      const colorIndex2 = (colorIndex1 + 1) % palette.length;
      const blendFactor = colorProgress - colorIndex1;
      const color1 = palette[colorIndex1];
      const color2 = palette[colorIndex2];
      const baseColor = new THREE.Color().lerpColors(
        color1,
        color2,
        blendFactor,
      );
      const color = baseColor
        .clone()
        .multiplyScalar(0.65 + Math.random() * 0.55);
      const size = 0.65 + Math.random() * 0.6;
      return { color, size };
    }

    function createParticleTexture() {
      const canvas = document.createElement("canvas");
      const size = 64;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;
      const centerX = size / 2;
      const centerY = size / 2;
      const outerRadius = size * 0.45;
      const innerRadius = size * 0.2;
      const numPoints = 5;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY - outerRadius);
      for (let i = 0; i < numPoints; i++) {
        const outerAngle = (i / numPoints) * Math.PI * 2 - Math.PI / 2;
        ctx.lineTo(
          centerX + outerRadius * Math.cos(outerAngle),
          centerY + outerRadius * Math.sin(outerAngle),
        );
        const innerAngle = outerAngle + Math.PI / numPoints;
        ctx.lineTo(
          centerX + innerRadius * Math.cos(innerAngle),
          centerY + innerRadius * Math.sin(innerAngle),
        );
      }
      ctx.closePath();

      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        outerRadius,
      );
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.3, "rgba(255,255,220,0.9)");
      gradient.addColorStop(0.6, "rgba(255,200,150,0.6)");
      gradient.addColorStop(1, "rgba(255,150,0,0)");
      ctx.fillStyle = gradient;
      ctx.fill();

      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      return tex;
    }

    // Seed buffers
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const pos = createStarPath(i, particleCount);
      positions[i3] = pos.x;
      positions[i3 + 1] = pos.y;
      positions[i3 + 2] = pos.z;
      targetPositions[i3] = pos.x;
      targetPositions[i3 + 1] = pos.y;
      targetPositions[i3 + 2] = pos.z;

      const { color, size } = getAttributesForParticle(i, themes[theme].colors);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
      sizes[i] = size;

      const offsetStrength = 30 + Math.random() * 40;
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.acos(2 * Math.random() - 1);
      disintegrationOffsets[i3] =
        Math.sin(theta) * Math.cos(phi) * offsetStrength;
      disintegrationOffsets[i3 + 1] =
        Math.sin(theta) * Math.sin(phi) * offsetStrength;
      disintegrationOffsets[i3 + 2] = Math.cos(theta) * offsetStrength * 0.5;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute(
      "targetPosition",
      new THREE.BufferAttribute(targetPositions, 3),
    );
    geometry.setAttribute(
      "disintegrationOffset",
      new THREE.BufferAttribute(disintegrationOffsets, 3),
    );

    const material = new THREE.PointsMaterial({
      size: 2.8,
      map: createParticleTexture(),
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
      alphaTest: 0.01,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Set initial bloom per theme
    const applyBloomForTheme = (t: ThemeKey) => {
      const b = themes[t].bloom;
      bloomPass.strength = b.strength;
      bloomPass.radius = b.radius;
      bloomPass.threshold = b.threshold;
    };
    applyBloomForTheme(theme);

    // ---------- Animation loop ----------
    let raf = 0;
    const tempRotatedTargets = new Float32Array(targetPositions.length);

    function triggerShockwave(
      opts: {
        amplitude?: number;
        speed?: number;
        width?: number;
        decay?: number;
      } = {},
    ) {
      const p = waveParamsRef.current;
      const {
        amplitude = p.amplitude,
        speed = p.speed,
        width = p.width,
        decay = 1.25,
      } = opts;
      shockwaves.push({ t0: time, amplitude, speed, width, decay });
      if (shockwaves.length > 6) shockwaves.shift();
    }

    const onResize = () => {
      if (!mountRef.current) return;
      width = mountRef.current.clientWidth;
      height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // Auto-emit a shockwave periodically so amplitude/speed/width are visible.
    let lastPulse = -Infinity;

    function animate() {
      raf = requestAnimationFrame(animate);
      time += 0.02;
      controls.update();

      // periodic shockwave using the current prop-driven params
      if (time - lastPulse > 3.2) {
        lastPulse = time;
        triggerShockwave();
      }

      if (isAnimating) {
        const pos = geometry.attributes.position.array as Float32Array;
        const tgt = geometry.attributes.targetPosition.array as Float32Array;
        const col = geometry.attributes.color.array as Float32Array;
        const sz = geometry.attributes.size.array as Float32Array;

        const palette = themes[theme].colors;

        // slow rotation
        const rotationSpeed = 0.0008;
        const cosRot = Math.cos(rotationSpeed);
        const sinRot = Math.sin(rotationSpeed);
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const tx = tgt[i3];
          const ty = tgt[i3 + 1];
          tgt[i3] = tx * cosRot - ty * sinRot;
          tgt[i3 + 1] = tx * sinRot + ty * cosRot;
        }

        tempRotatedTargets.set(tgt);
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const nextI3 = ((i + 1) % particleCount) * 3;
          const flowFactor =
            Math.sin(time * 0.4 + (i / particleCount) * Math.PI * 10) * 0.005;
          tgt[i3] +=
            (tempRotatedTargets[nextI3] - tempRotatedTargets[i3]) * flowFactor;
          tgt[i3 + 1] +=
            (tempRotatedTargets[nextI3 + 1] - tempRotatedTargets[i3 + 1]) *
            flowFactor;
          tgt[i3 + 2] +=
            (tempRotatedTargets[nextI3 + 2] - tempRotatedTargets[i3 + 2]) *
            flowFactor;
        }

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const homeX = tgt[i3];
          const homeY = tgt[i3 + 1];
          const homeZ = tgt[i3 + 2];

          // disintegration cycle
          const disintegrationCycleTime = 10.0;
          const particleCycleOffset =
            (i / particleCount) * disintegrationCycleTime * 0.5;
          const cycleProgress =
            ((time * 0.6 + particleCycleOffset) % disintegrationCycleTime) /
            disintegrationCycleTime;

          let disAmt = 0;
          const stableEnd = 0.5;
          const disStart = stableEnd;
          const disFull = stableEnd + 0.15;
          const holdEnd = disFull + 0.1;
          if (cycleProgress < stableEnd) disAmt = 0;
          else if (cycleProgress < disFull)
            disAmt = (cycleProgress - disStart) / (disFull - disStart);
          else if (cycleProgress < holdEnd) disAmt = 1.0;
          else disAmt = 1.0 - (cycleProgress - holdEnd) / (1.0 - holdEnd);
          disAmt = Math.sin(disAmt * Math.PI * 0.5);

          // shockwaves along radial
          let addX = 0,
            addY = 0,
            addZ = 0;
          const dist =
            Math.sqrt(homeX * homeX + homeY * homeY + homeZ * homeZ) + 1e-6;
          for (let w = 0; w < shockwaves.length; w++) {
            const sw = shockwaves[w];
            const elapsed = Math.max(0, time - sw.t0);
            const R = sw.speed * elapsed;
            const sigma = sw.width;
            const decayFactor = Math.exp(-sw.decay * elapsed);
            const g = Math.exp(
              -((dist - R) * (dist - R)) / (2 * sigma * sigma),
            );
            const amp = sw.amplitude * g * decayFactor;
            addX += (homeX / dist) * amp;
            addY += (homeY / dist) * amp;
            addZ += (homeZ / dist) * amp * 0.6;
          }

          let curTargetX = homeX + addX;
          let curTargetY = homeY + addY;
          let curTargetZ = homeZ + addZ;

          let lerp = 0.085;
          if (disAmt > 0.001) {
            curTargetX += disintegrationOffsets[i3] * disAmt;
            curTargetY += disintegrationOffsets[i3 + 1] * disAmt;
            curTargetZ += disintegrationOffsets[i3 + 2] * disAmt;
            lerp = 0.045 + disAmt * 0.02;
          }

          pos[i3] += (curTargetX - pos[i3]) * lerp;
          pos[i3 + 1] += (curTargetY - pos[i3 + 1]) * lerp;
          pos[i3 + 2] += (curTargetZ - pos[i3 + 2]) * lerp;

          const { color: baseColor, size } = getAttributesForParticle(
            i,
            palette,
          );
          let bright =
            (0.65 +
              Math.sin((i / particleCount) * Math.PI * 7 + time * 1.3) * 0.35) *
            (1 - disAmt * 0.75);
          bright *= 0.85 + Math.sin(time * 7 + i * 0.5) * 0.15;

          col[i3] = baseColor.r * bright;
          col[i3 + 1] = baseColor.g * bright;
          col[i3 + 2] = baseColor.b * bright;

          let curSize = size * (1 - disAmt * 0.9);
          curSize *= 0.8 + Math.sin(time * 5 + i * 0.3) * 0.2;
          sz[i] = Math.max(0.05, curSize);
        }

        geometry.attributes.position.needsUpdate = true;
        geometry.attributes.targetPosition.needsUpdate = true;
        geometry.attributes.color.needsUpdate = true;
        geometry.attributes.size.needsUpdate = true;

        // prune expired shockwaves
        if (shockwaves.length) {
          shockwaves = shockwaves.filter((sw) => {
            const elapsed = time - sw.t0;
            const R = sw.speed * elapsed;
            const expiredByRadius = R - MAX_HOME_RADIUS > 6 * sw.width;
            const expiredByTime = elapsed > 12;
            return !(expiredByRadius || expiredByTime);
          });
        }
      }

      composer.render();
    }

    raf = requestAnimationFrame(animate);

    // ---------- React -> Three theme bridge ----------
    const updateTheme = () => {
      // update bloom
      applyBloomForTheme(theme);
      // refresh particle colors/sizes immediately
      const col = geometry.attributes.color.array as Float32Array;
      const sz = geometry.attributes.size.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const { color, size } = getAttributesForParticle(
          i,
          themes[theme].colors,
        );
        col[i * 3] = color.r;
        col[i * 3 + 1] = color.g;
        col[i * 3 + 2] = color.b;
        sz[i] = size;
      }
      geometry.attributes.color.needsUpdate = true;
      geometry.attributes.size.needsUpdate = true;
    };
    updateTheme();

    // ---------- Cleanup ----------
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      controls.dispose();
      geometry.dispose();
      (material.map as THREE.Texture)?.dispose();
      material.dispose();
      composer.dispose();
      renderer.dispose();
      scene.clear();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, isAnimating]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {/* Glow overlay (theme-controlled via global CSS below) */}
      <div
        ref={glowRef}
        className="glow pointer-events-none fixed inset-0 opacity-75 mix-blend-screen"
      />

      {/* Three mount */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* Scoped global CSS for gradients/panels/toggle (mirrors your original CSS) */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          transition: background 1.5s ease;
        }

        /* Theme backgrounds */
        body.theme-molten {
          background: linear-gradient(
            180deg,
            #000000 0%,
            #100500 50%,
            #1f0a00 100%
          );
        }
        body.theme-cosmic {
          background: linear-gradient(
            180deg,
            #000000 0%,
            #050010 50%,
            #0a001f 100%
          );
        }
        body.theme-emerald {
          background: linear-gradient(
            180deg,
            #000000 0%,
            #001005 50%,
            #001f0a 100%
          );
        }

        /* Glow overlays per theme */
        body.theme-molten .glow {
          background: radial-gradient(
            circle at 50% 50%,
            rgba(255, 100, 0, 0.05) 0%,
            rgba(200, 50, 0, 0.05) 50%,
            transparent 65%
          );
        }
        body.theme-cosmic .glow {
          background: radial-gradient(
            circle at 50% 50%,
            rgba(147, 112, 219, 0.05) 0%,
            rgba(75, 0, 130, 0.05) 50%,
            transparent 65%
          );
        }
        body.theme-emerald .glow {
          background: radial-gradient(
            circle at 50% 50%,
            rgba(0, 255, 127, 0.05) 0%,
            rgba(46, 139, 87, 0.05) 50%,
            transparent 65%
          );
        }
      `}</style>
    </div>
  );
}

export { StarShockwaves };

export default StarShockwaves;
