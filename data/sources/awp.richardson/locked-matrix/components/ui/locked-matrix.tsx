"use client"

// AsciiArt — "locked matrix", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=1cc71f85-d5ee-4e6a-afb9-46c101cd0e13
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HTEiOsrAJFXxFUEGcrAhd8Jp1e/368d85c7-2781-4b0b-9960-32551ec7099f.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HTEiOsrAJFXxFUEGcrAhd8Jp1e/2b2c6759-2fff-46d9-a4ac-1d14d0e550b7.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"locked matrix — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
