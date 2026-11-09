import { useEffect, useRef } from "react";
import * as THREE from 'https://esm.sh/three';

export const LiquidGlassButton = () => {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !cursorRef.current) return;

    const canvas = canvasRef.current;
    const cursor = cursorRef.current;

    // ── Renderer ──────────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // ── Scene / Camera ────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5.5);

    // ── Background Environment ───────────────────────────────────────────────────
    const bgGeo = new THREE.SphereGeometry(30, 32, 32);
    const bgMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        varying vec3 vPos;
        void main() { vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
      `,
      fragmentShader: `
        varying vec3 vPos;
        void main() {
          vec3 n = normalize(vPos);
          float y = n.y * 0.5 + 0.5;
          vec3 bg = mix(vec3(0.01, 0.01, 0.015), vec3(0.06, 0.04, 0.02), y);
          gl_FragColor = vec4(bg, 1.0);
        }
      `,
    });
    scene.add(new THREE.Mesh(bgGeo, bgMat));

    // ── Lighting ──────────────────────────────────────────────────────────────────
    const keyLight = new THREE.DirectionalLight(0xffe8bb, 3.0);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);

    const ambLight = new THREE.AmbientLight(0xffeedd, 0.4);
    scene.add(ambLight);

    // ── Procedural Watery Glass Shader ──────────────────────────────────────────
    const glassVS = `
      precision highp float;
      uniform float uTime;
      uniform float uHover;
      uniform vec2  uMouse;

      varying vec3  vWorldPos;
      varying vec3  vNormal;
      varying vec3  vViewDir;
      varying float vFresnel;

      void main() {
        vec3 pos = position;
        vec3 n   = normal;

        // Watery Ripple Distortion on Hover
        float wave = sin(pos.x * 8.0 - uTime * 4.5) * cos(pos.y * 8.0 + uTime * 3.0);
        pos += n * wave * 0.03 * uHover;

        vec4 worldPos4 = modelMatrix * vec4(pos, 1.0);
        vWorldPos  = worldPos4.xyz;
        vNormal    = normalize(normalMatrix * n);
        vViewDir   = normalize(cameraPosition - vWorldPos);
        vFresnel   = pow(1.0 - max(0.0, dot(vNormal, vViewDir)), 2.5);

        gl_Position = projectionMatrix * viewMatrix * worldPos4;
      }
    `;

    const glassFS = `
      precision highp float;
      uniform float uTime;
      uniform float uHover;

      varying vec3  vWorldPos;
      varying vec3  vNormal;
      varying vec3  vViewDir;
      varying float vFresnel;

      // Procedural liquid surface distortion
      float liquidNoise(vec2 p, float t) {
        float w1 = sin(p.x * 10.0 + t * 4.0) * cos(p.y * 8.0 + t * 3.0);
        float w2 = sin(p.x * 18.0 - t * 5.0) * cos(p.y * 14.0 + t * 4.0) * 0.5;
        return (w1 + w2) * 0.5;
      }

      void main() {
        vec3 n = normalize(vNormal);
        vec3 v = normalize(vViewDir);

        // Apply dynamic liquid surface perturbation
        float ripple = liquidNoise(vWorldPos.xy * 2.5, uTime);
        n = normalize(n + vec3(ripple * 0.2 * uHover, ripple * 0.2 * uHover, 0.0));

        float fr = pow(1.0 - max(0.0, dot(n, v)), 2.8);

        // Dark obsidian base with inner liquid amber radiance
        vec3 baseGlass = vec3(0.05, 0.04, 0.03);
        vec3 innerGlow = vec3(0.22, 0.15, 0.06) * (1.0 - fr);

        // High-gloss specular reflections
        vec3 lightDir = normalize(vec3(3.0, 5.0, 4.0));
        float spec = pow(max(0.0, dot(reflect(-lightDir, n), v)), 36.0);
        vec3 specular = vec3(1.0, 0.92, 0.75) * spec * 3.5;

        // Golden rim lighting
        vec3 rimColor = vec3(0.95, 0.78, 0.4) * fr * 2.2;

        vec3 finalColor = baseGlass + innerGlow + specular + rimColor;
        gl_FragColor = vec4(finalColor, 0.88 + fr * 0.12);
      }
    `;

    const glassMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uHover: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader: glassVS,
      fragmentShader: glassFS,
      transparent: true,
      depthWrite: true,
    });

    // ── Main Assembly Group ─────────────────────────────────────────────────────
    const buttonGroup = new THREE.Group();
    scene.add(buttonGroup);

    // 1. Single Continuous Glass Pill Shape
    const btnRadius = 0.45;
    const btnLength = 1.6;
    const btnGeo = new THREE.CapsuleGeometry(btnRadius, btnLength, 32, 64);
    btnGeo.rotateZ(Math.PI / 2);
    const glassBtn = new THREE.Mesh(btnGeo, glassMat);
    buttonGroup.add(glassBtn);

    // 2. Dynamic Drop Shadow
    const shadowVS = `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `;
    const shadowFS = `
      varying vec2 vUv;
      uniform float uHover;
      void main() {
        float d = length(vUv - vec2(0.5));
        float alpha = smoothstep(0.5, 0.0, d) * (0.6 + uHover * 0.25);
        gl_FragColor = vec4(0.0, 0.0, 0.0, alpha);
      }
    `;
    const shadowMat = new THREE.ShaderMaterial({
      uniforms: { uHover: { value: 0 } },
      vertexShader: shadowVS,
      fragmentShader: shadowFS,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2.6, 1.0),
      shadowMat
    );
    shadowMesh.position.set(0, -0.65, -0.1);
    shadowMesh.rotation.x = -Math.PI * 0.1;
    buttonGroup.add(shadowMesh);

    // 3. Parallel Metallic Top & Bottom Lines
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0xdfb164,
      metalness: 0.95,
      roughness: 0.15,
    });
    const lineWidth = btnLength + btnRadius * 1.4;
    const lineGeo = new THREE.CylinderGeometry(0.012, 0.012, lineWidth, 16);
    lineGeo.rotateZ(Math.PI / 2);

    const topLine = new THREE.Mesh(lineGeo, rimMat);
    topLine.position.set(0, btnRadius + 0.05, 0);
    buttonGroup.add(topLine);

    const bottomLine = new THREE.Mesh(lineGeo, rimMat);
    bottomLine.position.set(0, -(btnRadius + 0.05), 0);
    buttonGroup.add(bottomLine);

    // 4. Ultra-Crisp White "ENTER" Text Layer
    const createHighResText = (text) => {
      const c = document.createElement("canvas");
      c.width = 1024;
      c.height = 256;
      const ctx = c.getContext("2d");
      ctx.font = '900 72px "Inter", "Helvetica Neue", sans-serif';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.letterSpacing = "12px";
      ctx.fillStyle = "#FFFFFF";
      ctx.shadowColor = "rgba(0,0,0,0.8)";
      ctx.shadowBlur = 12;
      ctx.fillText(text, 512, 128);
      const tex = new THREE.CanvasTexture(c);
      tex.needsUpdate = true;
      return tex;
    };

    const textGeo = new THREE.PlaneGeometry(1.5, 0.375);
    const textMat = new THREE.MeshBasicMaterial({
      map: createHighResText("ENTER"),
      transparent: true,
      depthTest: true,
      depthWrite: false,
    });
    const textMesh = new THREE.Mesh(textGeo, textMat);
    textMesh.position.set(0, 0, btnRadius + 0.02); // Sits cleanly above the glass
    buttonGroup.add(textMesh);

    // ── Mouse & Floating Physics ────────────────────────────────────────────────
    let mouse = new THREE.Vector2(0, 0);
    let mouseTarget = new THREE.Vector2(0, 0);
    let hoverTarget = 0;
    let hoverSmooth = 0;
    let t = 0;
    let offset = new THREE.Vector2(0, 0);

    const onMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseTarget.set(x, y);

      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      const inBtn = Math.abs(x) < 0.55 && Math.abs(y) < 0.25;
      hoverTarget = inBtn ? 1 : 0;
      cursor.style.transform = inBtn
        ? "translate(-50%,-50%) scale(2.2)"
        : "translate(-50%,-50%) scale(1.0)";
    };

    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // ── Animation Loop ──────────────────────────────────────────────────────────
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.016;

      mouse.lerp(mouseTarget, 0.1);
      hoverSmooth += (hoverTarget - hoverSmooth) * 0.08;

      offset.x += (mouse.x * hoverSmooth * 0.25 - offset.x) * 0.1;
      offset.y += (mouse.y * hoverSmooth * 0.15 - offset.y) * 0.1;

      const floatY = Math.sin(t * 1.5) * 0.025;
      buttonGroup.position.set(offset.x, offset.y + floatY, 0);

      // Shadow scales dynamically with hover lift
      shadowMesh.position.y = -0.65 - floatY * 0.5;
      shadowMesh.scale.setScalar(1.0 + hoverSmooth * 0.1);
      shadowMat.uniforms.uHover.value = hoverSmooth;

      glassMat.uniforms.uTime.value = t;
      glassMat.uniforms.uHover.value = hoverSmooth;
      glassMat.uniforms.uMouse.value.set(mouse.x, mouse.y);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#0a0805",
        overflow: "hidden",
        cursor: "none",
        margin: 0,
      }}
    >
      <canvas ref={canvasRef} style={{ display: "block" }} />
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "rgba(255,220,140,0.9)",
          pointerEvents: "none",
          mixBlendMode: "screen",
          transform: "translate(-50%,-50%)",
          transition: "transform 0.08s ease",
          zIndex: 100,
          boxShadow: "0 0 12px 4px rgba(255,200,80,0.4)",
        }}
      />
    </div>
  );
};

export default LiquidGlassButton;
