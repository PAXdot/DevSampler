"use client"

// AsciiArt — "Vibrant Pulse Glow", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=225d7e0d-2e3a-435a-b3b3-9eebc103ed2b
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_2nElBLvklOKlAURm6W1PTu6yYFh/e7a1de51-459d-4670-b081-368660cd3efb.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_2nElBLvklOKlAURm6W1PTu6yYFh/bf132235-4d83-412d-a5fe-fff9acd56df0.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Vibrant Pulse Glow — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
