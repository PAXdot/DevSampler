"use client"

// AsciiArt — "dither", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=174d7aba-0265-4346-930f-233e70b11cff
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3EMZZSIFjkeaO3Raon77NDaEBmM/02943579-7335-4118-9b99-f76e92769c4b.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3EMZZSIFjkeaO3Raon77NDaEBmM/3e049271-b824-4db0-97ba-c8359d5d6e9e.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"dither — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
