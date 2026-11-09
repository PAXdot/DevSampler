"use client"

// AsciiArt — "ff", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=41db929b-874c-4b32-b0e2-8ec05909d4da
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3KJupQOZNIoGcYGcZbwRX2FWpil/3e7232e9-b893-4261-910e-3ca63abc0ad9.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3KJupQOZNIoGcYGcZbwRX2FWpil/c8841f26-1b00-4bf2-b9fd-e15244418276.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"ff — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
