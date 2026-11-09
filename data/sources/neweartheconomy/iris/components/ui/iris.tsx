"use client"

// AsciiArt — "Iris", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=8aadaad6-794e-4a6c-a2a7-d1b7f95cdfb6
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GN2P0snuNmd4xIGklouucy5NUy/46a22fef-201b-4fc6-b12e-193a07bde355.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GN2P0snuNmd4xIGklouucy5NUy/a12bc1c9-0379-4a02-b0f1-da433219d083.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Iris — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
