import React, { useRef, useEffect } from "react";

const SoundwaveCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let frame = 0;
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const numLines = 100;
    const lineSpacing = canvas.width / numLines;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      for (let i = 0; i < numLines; i++) {
        const amplitude = (Math.sin(i * 0.2 + frame * 0.05) + 1) / 2;
        const lineHeight =
          amplitude * (canvas.height * 0.6) + canvas.height * 0.1;
        const x = i * lineSpacing + lineSpacing / 2;
        const y = (canvas.height - lineHeight) / 2;

        const hue = (frame + i * 5) % 360;
        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;

        ctx.shadowColor = `hsl(${hue}, 100%, 50%)`;
        ctx.shadowBlur = 15;

        ctx.fillRect(x - lineSpacing / 4, y, lineSpacing / 2, lineHeight);
      }

      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default SoundwaveCanvas;
