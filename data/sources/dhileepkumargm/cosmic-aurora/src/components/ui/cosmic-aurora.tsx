import React, { useRef, useEffect } from "react";

export interface AuroraCanvasProps {
  particleCount?: number;
  particleSpeed?: number;
  particleLifetime?: number;
  trailLength?: number;
  hueSpeed?: number;
  noiseScale?: number;
  noiseSpeed?: number;
  canvasGlow?: number;
  baseHue?: number;
}

const AuroraCanvas = ({
  particleCount = 800,
  particleSpeed = 0.1,
  particleLifetime = 300,
  trailLength = 0.08,
  hueSpeed = 0.2,
  noiseScale = 0.002,
  noiseSpeed = 0.0005,
  canvasGlow = 15,
  baseHue = 200,
}: AuroraCanvasProps = {}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let width: number, height: number;
    let particles: Particle[] = [];
    let hue = baseHue;
    let time = 0;
    let animationFrameId: number;

    const config = {
      particleCount,
      particleSpeed,
      particleLifetime,
      trailLength,
      hueSpeed,
      noiseScale,
      noiseSpeed,
      canvasGlow,
    };

    const noise = (() => {
      const p = new Uint8Array(512);
      for (let i = 0; i < 256; i++) p[i] = p[i + 256] = i;
      const perm = new Uint8Array(512);
      for (let i = 0; i < 256; i++) {
        const j = Math.floor(Math.random() * (256 - i)) + i;
        [p[i], p[j]] = [p[j], p[i]];
      }
      for (let i = 0; i < 512; i++) perm[i] = p[i & 255];

      function fade(t: number) {
        return t * t * t * (t * (t * 6 - 15) + 10);
      }
      function lerp(t: number, a: number, b: number) {
        return a + t * (b - a);
      }
      function grad(hash: number, x: number, y: number) {
        const h = hash & 15;
        const u = h < 8 ? x : y;
        const v = h < 4 ? y : h === 12 || h === 14 ? x : 0;
        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
      }

      return (x: number, y: number, z: number) => {
        const X = Math.floor(x) & 255;
        const Y = Math.floor(y) & 255;
        const Z = Math.floor(z) & 255;
        x -= Math.floor(x);
        y -= Math.floor(y);
        z -= Math.floor(z);
        const u = fade(x);
        const v = fade(y);
        const w = fade(z);
        const A = perm[X] + Y;
        const AA = perm[A] + Z;
        const AB = perm[A + 1] + Z;
        const B = perm[X + 1] + Y;
        const BA = perm[B] + Z;
        const BB = perm[B + 1] + Z;

        return lerp(
          w,
          lerp(
            v,
            lerp(u, grad(perm[AA], x, y), grad(perm[BA], x - 1, y)),
            lerp(u, grad(perm[AB], x, y - 1), grad(perm[BB], x - 1, y - 1)),
          ),
          lerp(
            v,
            lerp(u, grad(perm[AA + 1], x, y), grad(perm[BA + 1], x - 1, y)),
            lerp(
              u,
              grad(perm[AB + 1], x, y - 1),
              grad(perm[BB + 1], x - 1, y - 1),
            ),
          ),
        );
      };
    })();

    class Particle {
      x!: number;
      y!: number;
      vx!: number;
      vy!: number;
      lifetime!: number;
      age!: number;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height / 2 + ((Math.random() * height) / 4 - height / 8);
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = 0;
        this.lifetime = Math.random() * config.particleLifetime;
        this.age = 0;
      }

      update(time: number) {
        this.age++;
        if (this.age > this.lifetime) this.reset();

        const angle =
          noise(
            this.x * config.noiseScale,
            this.y * config.noiseScale,
            time * config.noiseSpeed,
          ) *
          Math.PI *
          4;

        this.vx += Math.cos(angle) * config.particleSpeed;
        this.vy += Math.sin(angle) * config.particleSpeed;

        this.vx *= 0.98;
        this.vy *= 0.98;

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height)
          this.reset();
      }

      draw() {
        const opacity = 1 - this.age / this.lifetime;
        const particleHue = hue + (this.x / width) * 60;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${particleHue}, 100%, 70%, ${opacity * 0.5})`;
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const setup = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.fillStyle = `rgba(0, 2, 26, ${config.trailLength})`;
      ctx.fillRect(0, 0, width, height);

      ctx.shadowBlur = config.canvasGlow;
      ctx.shadowColor = `hsla(${hue}, 100%, 50%, 0.5)`;

      particles.forEach((p) => {
        p.update(time);
        p.draw();
      });

      ctx.shadowBlur = 0;

      hue += config.hueSpeed;
      time++;

      animationFrameId = window.requestAnimationFrame(animate);
    };

    setup();
    animate();
    window.addEventListener("resize", setup);

    return () => {
      window.removeEventListener("resize", setup);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [
    particleCount,
    particleSpeed,
    particleLifetime,
    trailLength,
    hueSpeed,
    noiseScale,
    noiseSpeed,
    canvasGlow,
    baseHue,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        background: "#00021a",
      }}
    />
  );
};

export default AuroraCanvas;
