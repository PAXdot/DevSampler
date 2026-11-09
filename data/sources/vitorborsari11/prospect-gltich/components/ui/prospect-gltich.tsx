"use client"

// AsciiArt — "prospect gltich", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=2a89f4c1-c699-4a44-8ad7-96053c77696c
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Kbchf8midYoVJfgiSf6oqL4X7D/7c365542-d13a-4a05-8fea-a54096ff656c.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Kbchf8midYoVJfgiSf6oqL4X7D/2bab32af-8f9b-4456-9c29-0e2db70ff056.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"prospect gltich — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
