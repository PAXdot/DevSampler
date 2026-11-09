import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface ComponentProps {
  particleCount?: number;
  speed?: number;
  connectionDistance?: number;
  activeRule?: number;
  themeMode?: "light" | "dark";
}

export const Component = ({
  particleCount = 80,
  speed = 2,
  connectionDistance = 150,
  activeRule = 0,
  themeMode = "dark",
}: ComponentProps = {}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<any[]>([]);

  // Initialize particles
  useEffect(() => {
    const initParticles = () => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      const particles = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: themeMode === "dark" ? "#8B5CF6" : "#6D28D9",
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          connect: [],
          opacity: Math.random() * 0.5 + 0.5,
        });
      }

      particlesRef.current = particles;
    };

    initParticles();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [particleCount, speed, themeMode]);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;

      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    resizeCanvas();

    const handleResize = () => {
      resizeCanvas();
      // Reposition particles proportionally when canvas is resized
      if (particlesRef.current.length > 0) {
        const oldWidth = particlesRef.current[0].canvasWidth || canvas.width;
        const oldHeight = particlesRef.current[0].canvasHeight || canvas.height;

        particlesRef.current.forEach((particle) => {
          particle.x = (particle.x / oldWidth) * canvas.width;
          particle.y = (particle.y / oldHeight) * canvas.height;
          particle.canvasWidth = canvas.width;
          particle.canvasHeight = canvas.height;
        });
      }
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particle positions
      particlesRef.current.forEach((particle) => {
        // Move particles
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx = -particle.vx;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy = -particle.vy;
        }

        // Apply different behavior based on active rule
        switch (activeRule) {
          case 1: // Swarm behavior
            // Attract to center with random offsets
            const centerX =
              canvas.width / 2 + Math.sin(Date.now() / 2000) * 100;
            const centerY =
              canvas.height / 2 + Math.cos(Date.now() / 2000) * 100;
            const dx = centerX - particle.x;
            const dy = centerY - particle.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist > 100) {
              particle.vx += (dx / dist) * 0.02;
              particle.vy += (dy / dist) * 0.02;
            }
            break;

          case 2: // Clustering behavior
            // Form clusters around 3 points
            const clusters = [
              { x: canvas.width * 0.25, y: canvas.height * 0.5 },
              { x: canvas.width * 0.5, y: canvas.height * 0.25 },
              { x: canvas.width * 0.75, y: canvas.height * 0.5 },
            ];

            // Each particle is attracted to its nearest cluster
            const closestCluster = clusters.reduce(
              (nearest, cluster, index) => {
                const dx = cluster.x - particle.x;
                const dy = cluster.y - particle.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < nearest.dist) {
                  return { dist, index };
                }
                return nearest;
              },
              { dist: Infinity, index: 0 },
            );

            const targetCluster = clusters[closestCluster.index];
            const dxc = targetCluster.x - particle.x;
            const dyc = targetCluster.y - particle.y;
            const distc = Math.sqrt(dxc * dxc + dyc * dyc);

            if (distc > 30) {
              particle.vx += (dxc / distc) * 0.03;
              particle.vy += (dyc / distc) * 0.03;
            }
            break;

          default: // Neural network behavior (rule 0)
            // Random motion with slight adjustments
            if (Math.random() > 0.97) {
              particle.vx += (Math.random() - 0.5) * 0.2;
              particle.vy += (Math.random() - 0.5) * 0.2;
            }

            // Limit velocity
            const maxVelocity = 2 * speed;
            const vSquared =
              particle.vx * particle.vx + particle.vy * particle.vy;
            if (vSquared > maxVelocity * maxVelocity) {
              const ratio = maxVelocity / Math.sqrt(vSquared);
              particle.vx *= ratio;
              particle.vy *= ratio;
            }
        }

        // Draw particles
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Draw connections
      ctx.strokeStyle =
        themeMode === "dark"
          ? "rgba(139, 92, 246, 0.2)"
          : "rgba(109, 40, 217, 0.15)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particlesRef.current.length; i++) {
        const particle = particlesRef.current[i];

        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const particle2 = particlesRef.current[j];
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Calculate opacity based on distance
            ctx.globalAlpha = 1 - distance / connectionDistance;

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [activeRule, speed, connectionDistance, themeMode]);

  return (
    <div
      className={cn(
        "w-full h-full overflow-hidden transition-colors duration-300",
        themeMode === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900",
      )}
    >
      <div className="relative w-full h-full">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </div>
  );
};

export default Component;
