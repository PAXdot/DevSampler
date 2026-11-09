"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Direct image CDN URLs
const TILES = [
    "https://cdn.21st.dev/assets/mirror/39/3970f9f954859b3de601d98d999c9da1e03008e6094ec25f54645a7e747aa744.png",
    "https://cdn.21st.dev/assets/mirror/fd/fde1cb26ddc2a4416697d7d2cff0c221dca6c0a4ca29f69bcbfd4b958cc88497.png",
    "https://cdn.21st.dev/assets/mirror/ea/ea421fa53a0c287d8129761b6e0929d55b8078f6e28354996606f8705fe798a0.png",
    "https://cdn.21st.dev/assets/mirror/75/75bd57c868244cca64140b7172fbe3c65d5dfc76e47b8433ef15dbf4b5d77fdd.png",
    "https://cdn.21st.dev/assets/mirror/ca/cab878a2df8ffce28b170e02b3f251689f1b378d6d5fc5a964e5757c5b4cc45b.png",
    "https://cdn.21st.dev/assets/mirror/9c/9c73983cb0481cb79f1ff984c05a300065ae9ff31c593135343b8c32002bf9f2.png",
    "https://cdn.21st.dev/assets/mirror/20/20accfd095be39a7580abc1f19181c83437c023b600afbad97cda87c3f283a77.png",
    "https://cdn.21st.dev/assets/mirror/fc/fc2f02f6dc8c5f5570b2b2a8f1c713c85f155f31dce2d8153522db7fea97bee3.png",
    "https://cdn.21st.dev/assets/mirror/4e/4e42744c22ddec9048f2a5774f7b00f1688d95d704017a916a87258cca2e19fc.png",
];

// Refined scattered states to stay within bounds on smaller mobile screens
const scatterStates = [
    { x: -20, y: -30, rotate: -10, z: 20 },
    { x: 0, y: -40, rotate: 5, z: 40 },
    { x: 30, y: -20, rotate: 15, z: 10 },
    { x: -40, y: 0, rotate: -15, z: 50 },
    { x: 0, y: 0, rotate: 180, scale: 0.8, z: 0 },
    { x: 40, y: -10, rotate: 12, z: 30 },
    { x: -25, y: 30, rotate: -10, z: 15 },
    { x: 10, y: 40, rotate: -5, z: 25 },
    { x: 35, y: 25, rotate: 18, z: 35 },
];

export default function MagneticPuzzle() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white overflow-hidden">

            <div
                // Fully responsive grid matching the exact 245:156 tile aspect ratio with 0 gap
                className="grid grid-cols-3 gap-0 w-full max-w-[85vw] sm:max-w-md md:max-w-xl aspect-[245/156] cursor-crosshair z-20"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                // Touch events for mobile support
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
                style={{ perspective: 1200 }}
            >
                {TILES.map((src, i) => {
                    const scatter = scatterStates[i];

                    return (
                        <motion.div
                            key={i}
                            className="w-full h-full bg-transparent will-change-transform aspect-[245/156]"
                            animate={{
                                x: isHovered ? 0 : scatter.x,
                                y: isHovered ? 0 : scatter.y,
                                rotateZ: isHovered ? 0 : scatter.rotate,
                                scale: isHovered ? 1 : (scatter.scale || 1),
                                z: isHovered ? 0 : scatter.z,
                            }}
                            transition={{
                                // Silky smooth transition physics
                                type: "spring",
                                stiffness: 60,
                                damping: 15,
                                mass: 0.9
                            }}
                        >
                            <img
                                src={src}
                                alt={`Tile ${i + 1}`}
                                className="w-full h-full object-cover block pointer-events-none"
                                onError={(e) => {
                                    // Automatic fallback to local public tile if remote asset fails or is blocked
                                    const fallback = `/tile_${Math.floor(i / 3) + 1}x${(i % 3) + 1}.png`;
                                    if (e.currentTarget.src !== fallback) {
                                        e.currentTarget.src = fallback;
                                    }
                                }}
                            />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
