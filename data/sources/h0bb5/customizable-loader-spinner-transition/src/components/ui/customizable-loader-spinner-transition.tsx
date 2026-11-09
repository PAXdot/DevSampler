"use client";

import React, { useState, useEffect, useMemo } from "react";

interface ComponentProps {
  speed?: number;
  squareCount?: number;
  isPaused?: boolean;
}

export const Component = ({
  speed = 0.35,
  squareCount = 12,
  isPaused = false,
}: ComponentProps = {}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Inject animation styles
    const styleId = "nested-squares-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes magic {
          0% {
            transform: scale(0) rotate(0deg);
            filter: blur(0px);
          }
          50% {
            transform: scale(1) rotate(90deg);
            filter: blur(0.5px);
          }
          100% {
            transform: scale(2) rotate(180deg);
            filter: blur(1px);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }

        .nested-square {
          animation: magic calc(2s / var(--speed, 1)) ease infinite alternate;
          animation-delay: var(--delay);
          animation-play-state: var(--play-state, running);
          transform-origin: center;
          will-change: transform;
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      const style = document.getElementById(styleId);
      if (style && document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const squares = useMemo(() => {
    return Array.from({ length: squareCount }, (_, i) => {
      const index = i + 1;
      const hue = ((index * 360) / squareCount) % 360;
      return {
        id: index,
        padding: index * 10,
        offset: index * -10,
        color: `hsl(${260 + hue / 3}, 80%, 60%)`, // Purple to blue gradient
        delay: i * 0.1,
      };
    });
  }, [squareCount]);

  if (!mounted) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            border: "4px solid transparent",
            borderTopColor: "#a855f7",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background:
          "radial-gradient(ellipse at center, #0a0014 0%, #000000 100%)",
        overflow: "hidden",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Animated background elements */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {[...Array(15)].map((_, i) => (
          <div
            key={`bg-${i}`}
            style={{
              position: "absolute",
              width: "2px",
              height: "2px",
              backgroundColor: "#a855f7",
              borderRadius: "50%",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `glow ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main animation */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ position: "relative" }}>
          {squares.map((square) => (
            <div
              key={square.id}
              className="nested-square"
              style={{
                position: "absolute",
                boxSizing: "content-box",
                padding: `${square.padding}px`,
                top: `${square.offset}px`,
                left: `${square.offset}px`,
                border: `1px solid ${square.color}`,
                boxShadow: `0 0 3px ${square.color}, inset 0 0 3px rgba(255, 255, 255, 0.1)`,
                borderRadius: "2px",
                "--delay": `${square.delay}s`,
                "--speed": speed,
                "--play-state": isPaused ? "paused" : "running",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ffffff";
                e.currentTarget.style.boxShadow =
                  "0 0 10px #ffffff, inset 0 0 5px rgba(255, 255, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = square.color;
                e.currentTarget.style.boxShadow = `0 0 3px ${square.color}, inset 0 0 3px rgba(255, 255, 255, 0.1)`;
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Component;
