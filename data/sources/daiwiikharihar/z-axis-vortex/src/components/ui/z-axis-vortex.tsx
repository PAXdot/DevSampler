"use client";

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

// Diverse, high-resolution aesthetic imagery across architecture, nature, cyber, and abstract
const IMAGES = [
    { src: "https://cdn.21st.dev/assets/mirror/67/678d13ab2f51cc194ee7109f41e5c4b74a33f143dde876368a93b748a5bdb2f6.jpg", alt: "Modern Architecture" },
    { src: "https://cdn.21st.dev/assets/mirror/14/149f499dba8765b2595b7cc9c2e7c0308539b099ab4921cb09a793abeac15e8d.jpg", alt: "Tokyo Neon Lights" },
    { src: "https://cdn.21st.dev/assets/mirror/33/33a46fd10989bb6b1e09d4de0a69a8b9bdbc9a96a84df089ef711e1b397b4d22.jpg", alt: "Misty Mountain Peaks" },
    { src: "https://cdn.21st.dev/assets/mirror/72/7212c26bc51771b75ab8af050017c20ec5ec2aadcd6a2aa5adfca7f5079e857b.jpg", alt: "Deep Ocean Wave" },
    { src: "https://cdn.21st.dev/assets/mirror/e5/e5ffa439e162814094cf35bf7cba498443bc16cf5ee0f1a01a2514e06ca63931.jpg", alt: "Cinematic Portrait" },
    { src: "https://cdn.21st.dev/assets/mirror/3a/3a26e7f2a478c18c181675f3a1767119bb40e3cfb2f77c23b2a05bf6f34092ab.jpg", alt: "Iridescent Fluid Glass" },
    { src: "https://cdn.21st.dev/assets/mirror/68/685310451242e492e32a3237285ef5b1bc5b3e3ec89bde9433f536ef6fc85f8e.jpg", alt: "Sleek Dark Supercar" },
    { src: "https://cdn.21st.dev/assets/mirror/8f/8f0b861549a4f453512cbf7a7af2abfc423a3b2347b629da87561790cadb5876.jpg", alt: "Cosmic Nebula & Earth" },
];


interface VortexCardData {
    item: { src: string; alt: string };
    baseAngle: number;
    radiusX: number;
    radiusY: number;
    depthOffset: number;
    z: number;
}

const generateVortexCards = (): VortexCardData[] => {
    const total = IMAGES.length;
    return IMAGES.map((item, i) => {
        // Smooth 1.5-turn spiral
        const angle = (i / total) * Math.PI * 3;
        const radiusBase = 18 + i * 2.2;

        return {
            item,
            baseAngle: (angle * 180) / Math.PI,
            radiusX: radiusBase,
            radiusY: radiusBase * 0.65, // Elliptical orbit gives natural 3D depth
            depthOffset: (i / total) * 0.35,
            z: i + 1,
        };
    });
};

const VORTEX_CARDS = generateVortexCards();

function VortexCard({ card, progress }: { card: VortexCardData; progress: any }) {
    const { item, baseAngle, radiusX, radiusY, depthOffset, z } = card;

    // Smooth, gentle rotation across the scroll
    const currentAngle = useTransform(progress, [0, 1], [baseAngle, baseAngle + 180]);

    // Elliptical coordinate mapping
    const x = useTransform(currentAngle, (a) => Math.cos((a * Math.PI) / 180) * radiusX);
    const y = useTransform(currentAngle, (a) => Math.sin((a * Math.PI) / 180) * radiusY);

    // Staggered depth: scale and opacity
    const localP = useTransform(progress, [0, 1], [-depthOffset, 1.15 - depthOffset]);
    const scale = useTransform(localP, [0, 0.25, 0.75, 1], [0.15, 0.7, 1.25, 2.6]);
    const opacity = useTransform(localP, [0, 0.12, 0.8, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            className="absolute left-1/2 top-1/2 will-change-transform origin-center w-28 h-40 sm:w-36 sm:h-52 md:w-48 md:h-64 pointer-events-auto"
            style={{
                zIndex: z,
                x: useTransform(x, (val) => `calc(-50% + ${val}vw)`),
                y: useTransform(y, (val) => `calc(-50% + ${val}vh)`),
                rotate: useTransform(currentAngle, (a) => a * 0.35),
                scale,
                opacity,
            }}
        >
            <div className="group relative h-full w-full overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-neutral-900/60 shadow-2xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
                <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
        </motion.div>
    );
}

export default function ZAxisVortex() {
    const wrapRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: wrapRef,
        offset: ["start start", "end end"],
    });

    // Silky spring physics for smooth scroll response
    const progress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 25,
        restDelta: 0.001,
    });

    const titleScale = useTransform(progress, [0, 0.6], [1, 2]);
    const titleOpacity = useTransform(progress, [0, 0.35], [1, 0]);

    // Reduced height from 400vh to 220vh, added overflow-clip
    return (
        <section
            ref={wrapRef}
            className="relative w-full h-[220vh] bg-white dark:bg-black text-black dark:text-white overflow-clip"
        >
            <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-100 via-neutral-200 to-white dark:from-neutral-900 dark:via-neutral-950 dark:to-black">
                {/* Background ambient glow */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 dark:from-sky-500/15 dark:to-purple-500/15 blur-3xl" />
                </div>

                {/* Cards Container */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    {VORTEX_CARDS.map((card, i) => (
                        <VortexCard key={i} card={card} progress={progress} />
                    ))}
                </div>

                {/* Center Title */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <motion.h2
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-widest uppercase text-neutral-800/40 dark:text-white/30 mix-blend-overlay select-none"
                        style={{
                            scale: titleScale,
                            opacity: titleOpacity,
                        }}
                    >
                        The Vortex
                    </motion.h2>
                </div>
            </div>
        </section>
    );
}