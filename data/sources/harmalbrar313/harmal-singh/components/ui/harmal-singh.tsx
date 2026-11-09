"use client"

// AsciiArt — "Harmal Singh", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=c6d29c4b-b3d6-4397-8d95-397392bad398
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3J7kgPTg8DjpYxJQPLZhUpuMVIn/d154a7e9-1354-4c09-880c-6dabf7821d89.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3J7kgPTg8DjpYxJQPLZhUpuMVIn/0488e498-6e26-4600-b726-d411e70289bd.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Harmal Singh — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
