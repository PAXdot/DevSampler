"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const images = [
  "https://cdn.21st.dev/assets/mirror/67/6736e09c72013915f540c0dfd48fb34eab707dd3745c8e3e7932e7dde2bb0d28.png",
  "https://cdn.21st.dev/assets/mirror/ca/caab6367d517dd33f4cf09b7fd151bf00fc17b714ada90c6a9d348e79e3a3c56.jpg",
  "https://cdn.21st.dev/assets/mirror/fd/fd041b7716d1bed8ec34ab7052114033b28e1793d7292af86c2fac7ff034e018.png",
  "https://cdn.21st.dev/assets/mirror/de/de138d3ae34eff5b57061dbebe77e02bb0eef27fd3031f588fc31d9de601b342.png",
  "https://cdn.21st.dev/assets/mirror/fd/fd59e7d53418be9b77716fe63730677b4b41a7a2f7970eb7e016ccd7664fc9ae.png",
  "https://cdn.21st.dev/assets/mirror/4b/4bb457abcb2c96f2342aca6b68ca781aa09c2fb954fb6f45868e06cba485aaf4.png",
  "https://cdn.21st.dev/assets/mirror/f5/f5a063fba53eeb4786b692c6b819db22ce7ef209cb8d9f95f3c4a7c56890490c.jpg",
  "https://cdn.21st.dev/assets/mirror/98/989de8a6fa0d3d1c8e733571c1dd3c81fd525d83b06b06911881af69cf45ae36.jpg",
  "https://cdn.21st.dev/assets/mirror/0b/0b6fa6575c3d9e2b42d88522012b15480c2466489dce1eb9dde58af6118e37f4.png",
];

// Inline NoiseWrapper as a small helper CardHover
const InlineNoise = ({
  children,
  opacity = 0.27,
  className,
}: {
  children: React.ReactNode;
  opacity?: number;
  className?: string;
}) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <svg
        className="pointer-events-none absolute inset-0 isolate z-50 size-full"
        width="100%"
        height="100%"
        style={{ opacity }}
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="1"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {children}
    </div>
  );
};

const CardHover = () => {
  const [expandedImage, setExpandedImage] = useState(3);

  const getImageWidth = (index: number) =>
    index === expandedImage ? "24rem" : "5rem";

  return (
    <div className="w-full h-screen bg-[#f5f4f3]">
      <div className="relative grid min-h-screen grid-cols-1 items-center justify-center p-2 lg:flex transition-all duration-300 w-full">
        <div className="w-full h-full overflow-hidden rounded-3xl">
          <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3]">
            <div className="relative w-full max-w-6xl px-5">
              <div className="flex w-full items-center justify-center gap-1">
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 ease-in-out"
                    style={{
                      width: getImageWidth(idx + 1),
                      height: "24rem",
                    }}
                    onMouseEnter={() => setExpandedImage(idx + 1)}
                  >
                    <InlineNoise className="rounded-3xl" opacity={0.27}>
                      <img
                        className="w-full h-full object-cover"
                        src={src}
                        alt={`Image ${idx + 1}`}
                      />
                    </InlineNoise>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHover;
