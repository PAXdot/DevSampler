import React, { useRef, useEffect, useMemo } from "react";

// --- Helper class for a single animated blob ---
class Blob {
  constructor(canvas, color, radius) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius =
      radius ||
      Math.random() * (Math.min(canvas.width, canvas.height) / 4) +
        Math.min(canvas.width, canvas.height) / 6;
    this.vx = (Math.random() * 2 - 1) * 1.5; // Velocity x
    this.vy = (Math.random() * 2 - 1) * 1.5; // Velocity y
    this.color = color;
  }

  update(speed) {
    // Move
    this.x += this.vx * speed;
    this.y += this.vy * speed;

    // Bounce off edges
    if (this.x < this.radius || this.x > this.canvas.width - this.radius) {
      this.vx *= -1;
      this.x = Math.max(
        this.radius,
        Math.min(this.x, this.canvas.width - this.radius),
      );
    }
    if (this.y < this.radius || this.y > this.canvas.height - this.radius) {
      this.vy *= -1;
      this.y = Math.max(
        this.radius,
        Math.min(this.y, this.canvas.height - this.radius),
      );
    }
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

/**
 * WarpGradient Component
 * (Props documentation is the same as in the original file)
 */
const WarpGradient = ({
  color1 = "#f80050",
  color2 = "#00c8f8",
  color3 = "#7000f8",
  blobCount = 4,
  speed = 1.5,
  blur = 70,
  contrast = 30,
  backgroundColor = "transparent",
  className = "",
}) => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const blobs = useRef([]);

  const colors = useMemo(
    () => [color1, color2, color3],
    [color1, color2, color3],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let parent = canvas.parentElement;
    if (!parent) {
      console.error("WarpGradient must be rendered within a parent element.");
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        canvas.width = width;
        canvas.height = height;
        blobs.current = [];
        const minRadius = Math.min(width, height) / 6;
        const maxRadius = Math.min(width, height) / 4;
        for (let i = 0; i < blobCount; i++) {
          const radius = Math.random() * (maxRadius - minRadius) + minRadius;
          blobs.current.push(
            new Blob(canvas, colors[i % colors.length], radius),
          );
        }
      }
    });

    resizeObserver.observe(parent);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (backgroundColor !== "transparent") {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      blobs.current.forEach((blob) => {
        blob.update(speed);
        blob.draw();
      });
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (parent) {
        resizeObserver.unobserve(parent);
      }
    };
  }, [blobCount, colors, speed, backgroundColor]);

  const canvasStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    filter: `blur(${blur}px) contrast(${contrast})`,
    backgroundColor: backgroundColor,
  };

  return <canvas ref={canvasRef} style={canvasStyle} className={className} />;
};

export default WarpGradient;
