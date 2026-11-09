"use client"

// AsciiArt — "MARBS123", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=1b20ddff-5b5d-4efe-8cbf-e5fad24c0de9
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GQ1sJvL4jA5b65Zqqb9fRNasdm/2bf24537-aab0-4aa8-998e-26c894a1529b.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GQ1sJvL4jA5b65Zqqb9fRNasdm/9befbe31-93ec-40eb-b8f2-44c627d32544.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"MARBS123 — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
