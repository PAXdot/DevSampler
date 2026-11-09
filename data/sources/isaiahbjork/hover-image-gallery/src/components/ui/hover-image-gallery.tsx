"use client";
import { useState } from "react";

interface HoverImageGalleryProps {
  images: string[];
}

export function HoverImageGallery({
  images = [
    "https://cdn.21st.dev/assets/mirror/a6/a6276627fbc2a9d64efe6c30c3ca8bcc4f5742356dcc069b6cec761ee0cab40f.jpg",
    "https://cdn.21st.dev/assets/mirror/60/60bda945afa42e21c763a3e6fd2fdcdaf1e77439bd40f008a7557c9e46033dd6.jpg",
    "https://cdn.21st.dev/assets/mirror/16/16b3de261a8ede08a7ebb341135a2ed41fc499b58aae7bd5195ab560b0a24a9c.jpg",
    "https://cdn.21st.dev/assets/mirror/4c/4cc18dd7d265058203d3fa464cd72afdaf2219bf74ac3659ede75aded5efc626.jpg",
    "https://cdn.21st.dev/assets/mirror/a4/a4347d87271cd05223f377a6b263ce3e6f34b66f98d3952c82f15dac9a6973fb.jpg",
    "https://cdn.21st.dev/assets/mirror/e1/e182534d65c238ac73dc6f0602739d5a385803a1f7319c9b1644d9f51aff657d.jpg",
    "https://cdn.21st.dev/assets/mirror/65/65d2cee2c8ddb144cd65f531dbf91e300f7ede08c2d27581f2dbe5eb81b9f5ca.jpg",
    "https://cdn.21st.dev/assets/mirror/9c/9c29096340d90bb2704e58f3f9d46aa73bf474ff26f0cd617021210d7f92d949.jpg",
    "https://cdn.21st.dev/assets/mirror/a5/a58f0565e2e0cf846f5254b938e177c1c0782c95553a27ebff7f1cb4f2c96cd4.jpg",
    "https://cdn.21st.dev/assets/mirror/df/dffa415221e9ec080587e198e550e7753eebcbf16dbe53512a5a88edf55c3864.jpg",
    "https://cdn.21st.dev/assets/mirror/59/59e5aa1263e06528982f156f25e82f17f0b9ea1c1708c94928eb12fddfc1caef.jpg"
  ],
}: HoverImageGalleryProps){
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;

    // Update mouse position for tooltip
    setMousePosition({ x, y });

    // Calculate which image to show based on horizontal position
    const imageIndex = Math.floor((x / width) * images.length);
    const clampedIndex = Math.max(0, Math.min(images.length - 1, imageIndex));

    setCurrentImageIndex(clampedIndex);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="relative group">
      <div
        className="relative w-[550px] h-[550px] overflow-hidden rounded-lg shadow-lg cursor-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Main displayed image */}
        <img
          src={images[currentImageIndex]}
          alt={`Gallery image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-150 ease-out"
        />

        {/* Glassmorphic Tooltip with Both Chevrons */}
        {isHovering && (
          <div
            className="absolute pointer-events-none z-20 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
          >
            <div className="bg-white/20 backdrop-blur-md rounded-full p-2 shadow-lg border border-white/30 w-12 h-12 flex items-center justify-center">
              <div className="flex items-center space-x-1">
                {/* Left Chevron */}
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>

                {/* Right Chevron */}
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};