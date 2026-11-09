"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode, useState, useEffect } from "react";

interface MarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
}

function Marquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 40,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:1rem] [gap:var(--gap)]",
        className
      )}
      style={
        {
          "--duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

const images = [
  "https://cdn.21st.dev/assets/mirror/69/697f7681b52a28ac0bdbba7112048ff98b24ae1f61c801524d3bea14a82c40e7.jpg",
  "https://cdn.21st.dev/assets/mirror/4c/4c334511e54d5e842944d4f50d6e652f07665a1e16766d28d11387c9b3b4c4d1.jpg",
  "https://cdn.21st.dev/assets/mirror/89/892cf4ed0c29f61f17fea5cccffad0575e37575ae5742c717ca16274d0d4e894.jpg",
  "https://cdn.21st.dev/assets/mirror/69/690e70500d799ff55c6f30eb47242fbaa63080c2d5d6cdc731048efe8588ebbe.jpg",
];

const images2 = [
  "https://cdn.21st.dev/assets/mirror/c8/c8e98756dd770841764a95ebbdbad40e53854be8a98e1c7d25ddd4c8c7e70255.jpg",
  "https://cdn.21st.dev/assets/mirror/27/278d971ec24e44da1feebce8112db18c9e573b7f1640cf3c2e3465971092df0f.jpg",
  "https://cdn.21st.dev/assets/mirror/ff/ff22309571652c322033406ed025e30c20679bf9c5e7f2dd5d8bebf1acc56dfd.jpg",
  "https://cdn.21st.dev/assets/mirror/7c/7c529e9e13aa7c9933e060b7513d08d6ecceb48f9c276592294b094520115bdb.jpg",
];

function ScrambleButton() {
  const [displayText, setDisplayText] = useState("Read More");
  const [isScrambling, setIsScrambling] = useState(false);
  const originalText = "Read More";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    
    let iteration = 0;
    const maxIterations = originalText.length;

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setIsScrambling(false);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <button
      onMouseEnter={scramble}
      className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
    >
      {displayText}
    </button>
  );
}

export function HeroWithMarquee() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The Future of Creative Design
            </h1>
            <div className="space-y-1 text-muted-foreground">
              <p className="text-lg">March 2025</p>
              <p className="text-lg">Design Studio</p>
            </div>
            <ScrambleButton />
          </div>

          {/* Right Marquee Grid */}
          <div className="space-y-4 overflow-hidden">
            <Marquee speed={30} reverse className="[--gap:1rem]">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"
                >
                  <Image
                    src={src}
                    alt={`Image ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </Marquee>
            <Marquee speed={30} className="[--gap:1rem]">
              {images2.map((src, idx) => (
                <div
                  key={idx}
                  className="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"
                >
                  <Image
                    src={src}
                    alt={`Image ${idx + 5}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
