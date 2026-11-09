import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// --- IMAGE TRAIL CURSOR COMPONENT ---
const ImageTrailCursor: React.FC<{ images: string[] }> = ({ images }) => {
  const [trail, setTrail] = useState<
    { x: number; y: number; src: string; id: number }[]
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const src = images[Math.floor(Math.random() * images.length)];

      setTrail((prev) => [
        ...prev.slice(-10),
        { x, y, src, id: Date.now() + Math.random() },
      ]);
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", handleMouseMove);
    return () => container?.removeEventListener("mousemove", handleMouseMove);
  }, [images]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {trail.map((t) => (
        <motion.img
          key={t.id}
          src={t.src}
          alt=""
          initial={{ opacity: 0, scale: 0.6, x: t.x, y: t.y }}
          animate={{
            opacity: [1, 0.6, 0],
            scale: [1, 0.9, 0.7],
            x: t.x,
            y: t.y,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-xl pointer-events-none shadow-lg border border-black/10 dark:border-white/10"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      ))}
    </div>
  );
};

// --- MAIN DEMO COMPONENT ---
export const ImageTrailDemo: React.FC = () => {
  const images = [
    "https://cdn.21st.dev/assets/mirror/af/af33c021303480cf557a9681fc86dde4b89deca7b30dcaadeb1eb63e86682315.jpg",
    "https://cdn.21st.dev/assets/mirror/63/63b84eff41014e482ed4cd23b4a799964af534e2ae66d60462d1818ea0584e31.jpg",
    "https://cdn.21st.dev/assets/mirror/57/57660bf79121679137053d2a0d21e919064ac7d7589e196e9f896458d980d8df.jpg",
    "https://cdn.21st.dev/assets/mirror/0e/0e61d7e1f7fc35f8613154b39ed01485b4f5508c3551e7fb41ae5796e9529f0f.jpg",
    "https://cdn.21st.dev/assets/mirror/6d/6d67a347089a5b1147e495252954ebf334d04ec8e0bceb0bab53a40803ae29c1.jpg",
    "https://cdn.21st.dev/assets/mirror/ac/ac1cb010a30db48fba2c9cb8bdea300e5bd50db47cd67d27dc0a7d2e01ec5028.jpg",
    "https://cdn.21st.dev/assets/mirror/8c/8c174243b8e035becd91822935b68884b76ca3ff05f43421743654eb001f2ac6.jpg",
  ];

  return (
    <div className="flex flex-col gap-6 w-3/4 max-w-5xl mx-auto min-h-[28rem] p-4 sm:p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Hover Area */}
      <div className="
        relative w-full 
        border border-black/10 dark:border-white/20 
        rounded-2xl p-2 sm:p-4 
        flex items-center justify-center 
        h-80 sm:h-96 
        bg-white dark:bg-black 
        shadow-[inset_0_4px_10px_rgba(0,0,0,0.05)] 
        dark:shadow-[inset_0_4px_10px_rgba(255,255,255,0.1)] 
        overflow-hidden 
        transition-all duration-300
      ">
        <span className="
          absolute inset-0 flex items-center justify-center 
          text-2xl sm:text-3xl md:text-4xl font-semibold 
          text-black/30 dark:text-white/30 
          select-none pointer-events-none
        ">
          Hover Here
        </span>
        <ImageTrailCursor images={images} />
      </div>
    </div>
  );
};

// --- WRAPPER COMPONENT (LIGHT & DARK MODE) ---
export function Component() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black flex items-center justify-center transition-colors duration-500">
      <ImageTrailDemo />
    </div>
  );
}
