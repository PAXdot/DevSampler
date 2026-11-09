"use client";
import React, { useState, useEffect } from "react";

const ICONS = [
  "https://cdn.21st.dev/assets/mirror/16/162827c850b86456fabe955b03e4775ceecb030464b5309f0587c061e0fc3678.svg",
  "https://cdn.21st.dev/assets/mirror/7a/7a0dd11e373830a51a565de9fed4a985707c67ccd390f9ae4946a152303ea676.svg",
  "https://cdn.21st.dev/assets/mirror/aa/aa897c48c85db59a18d977b814dab60bbf9bb2ddddb5a4604cdc4d9d1d80e534.svg",
  "https://cdn.21st.dev/assets/mirror/16/16bb40aa3ce9ad31b267b569614c4be5dba97556645e1a2b0c23ad570694b420.svg",
  "https://cdn.21st.dev/assets/mirror/17/17160477a475166ad0556e0028e3b0bd0634d70c02e7b920c04a4429ea184ab3.svg",
  "https://cdn.21st.dev/assets/mirror/08/086cccbda00af6d3abd4a4d39605520568a58eeb1466f957b2fc3d4bd675e26e.svg",
];

function SemiCircleOrbit({ radius, centerX, centerY, count, iconSize }: any) {
  return (
    <>
      {/* Semi-circle glow background */}
      <div className="absolute inset-0 flex justify-center">
        <div
          className="
            w-[1000px] h-[1000px] rounded-full 
            bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.25),transparent_70%)]
            dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_70%)]
            blur-3xl 
            -mt-40 
            pointer-events-none
          "
          style={{ zIndex: 0 }}
        />
      </div>

      {/* Orbit icons */}
      {Array.from({ length: count }).map((_, index) => {
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        const icon = ICONS[index % ICONS.length];

        // Tooltip positioning — above or below based on angle
        const tooltipAbove = angle > 90;

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center group"
            style={{
              left: `${centerX + x - iconSize / 2}px`,
              top: `${centerY - y - iconSize / 2}px`,
              zIndex: 5,
            }}
          >
            <img
              src={icon}
              alt={`icon-${index}`}
              width={iconSize}
              height={iconSize}
              className="object-contain cursor-pointer transition-transform hover:scale-110"
              style={{ minWidth: iconSize, minHeight: iconSize }} // fix accidental shrink
            />

            {/* Tooltip */}
            <div
              className={`absolute ${
                tooltipAbove ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"
              } hidden group-hover:block w-28 rounded-lg bg-black px-2 py-1 text-xs text-white shadow-lg text-center`}
            >
              App {index + 1}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-black ${
                  tooltipAbove ? "top-full" : "bottom-full"
                }`}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function MultiOrbitSemiCircle() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const baseWidth = Math.min(size.width * 0.8, 700);
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.5;

  const iconSize =
    size.width < 480
      ? Math.max(24, baseWidth * 0.05)
      : size.width < 768
      ? Math.max(28, baseWidth * 0.06)
      : Math.max(32, baseWidth * 0.07);

  return (
    <section className="py-12 relative min-h-screen w-full overflow-hidden">
      <div className="relative flex flex-col items-center text-center z-10">
        <h1 className="my-6 text-4xl font-bold lg:text-7xl">Integrations</h1>
        <p className="mb-12 max-w-2xl text-gray-600 dark:text-gray-400 lg:text-xl">
          Connect your favourite apps to your workflow.
        </p>

        <div
          className="relative"
          style={{ width: baseWidth, height: baseWidth * 0.6 }}
        >
          <SemiCircleOrbit radius={baseWidth * 0.22} centerX={centerX} centerY={centerY} count={6} iconSize={iconSize} />
          <SemiCircleOrbit radius={baseWidth * 0.36} centerX={centerX} centerY={centerY} count={8} iconSize={iconSize} />
          <SemiCircleOrbit radius={baseWidth * 0.5} centerX={centerX} centerY={centerY} count={10} iconSize={iconSize} />
        </div>
      </div>
    </section>
  );
}
