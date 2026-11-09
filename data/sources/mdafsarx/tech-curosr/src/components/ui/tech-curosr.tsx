"use client";
import React, { useEffect, useRef } from "react";

interface TechImage {
  name: string;
  src: string;
  image: HTMLImageElement;
}

interface Particle {
  x: number;
  y: number;
  alpha: number;
  image: HTMLImageElement;
  size: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const icons: { name: string; src: string }[] = [
  // replace with your image path
  {
    name: "JavaScript",
    src: "https://cdn.21st.dev/assets/mirror/c1/c16e56a3018fdec5e1a5f81b8c9c78916461f27d3cacb9bdf01c5db6dd987bc0.png",
  },
  {
    name: "TypeScript",
    src: "https://cdn.21st.dev/assets/mirror/54/543879830b5fbeb29965638f83f6e8ddfbe5e2b56f4305d3461ab4f564570ef5.png",
  },
  {
    name: "React",
    src: "https://cdn.21st.dev/assets/mirror/08/08fe52f4ff4229461a6bd00e48e3da81d5b952ccb15d2ad80c01027d3813738f.svg",
  },
  {
    name: "Next.js",
    src: "https://cdn.21st.dev/assets/mirror/55/55995dfad6ecb4945a1e856ddca03c5e16aa5bf13fd21b4df6a74ae79357bcfc.svg",
  },
  {
    name: "HTML",
    src: "https://cdn.21st.dev/assets/mirror/34/347bbc1b9f5fa6cb9473536ba3d46e9ec837371d51092901fb0b353ff2f2f73a.png",
  },
  {
    name: "CSS",
    src: "https://cdn.21st.dev/assets/mirror/55/55478d6aec55c04103523a45a2731c49f8fa0b3b704c017cba1a63ea2bd6e86c.png",
  },
];

const TechCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const techImagesRef = useRef<TechImage[]>([]);

  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      techImagesRef.current = await Promise.all(
        icons.map(({ name, src }) => {
          return new Promise<TechImage>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve({ name, src, image: img });
          });
        }),
      );
    };

    loadImages().then(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = particlesRef.current;

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.update();
          p.draw(ctx);
          if (p.alpha <= 0) {
            particles.splice(i, 1);
          }
        }
        requestAnimationFrame(animate);
      };

      animate();

      const onMove = (e: MouseEvent) => {
        const randomIcon =
          techImagesRef.current[
            Math.floor(Math.random() * techImagesRef.current.length)
          ];

        const size = 22 + Math.random() * 8;

        const particle: Particle = {
          x: e.clientX,
          y: e.clientY,
          alpha: 1,
          image: randomIcon.image,
          size,
          update() {
            this.y -= 0.4;
            this.alpha -= 0.02;
          },
          draw(ctx: CanvasRenderingContext2D) {
            ctx.globalAlpha = this.alpha;
            ctx.drawImage(
              this.image,
              this.x - this.size / 2,
              this.y - this.size / 2,
              this.size,
              this.size,
            );
            ctx.globalAlpha = 1;
          },
        };

        particles.push(particle);
      };

      window.addEventListener("mousemove", onMove);
      return () => {
        window.removeEventListener("mousemove", onMove);
      };
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};

export default TechCursor;
