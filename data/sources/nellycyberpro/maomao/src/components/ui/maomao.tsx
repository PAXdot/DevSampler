"use client"

// AsciiArt — "maomao", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=7900cfcd-fc8f-4eeb-92c8-2d84b7215670
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GmOlixWi8onZxPavVQ2o3dPvUK/7ff30bc8-1b34-47e1-b952-745f68ff85b9.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GmOlixWi8onZxPavVQ2o3dPvUK/47f760e4-1e12-4065-a06c-0187df46ac44.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"maomao — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
