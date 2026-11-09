"use client"

// AsciiArt — "Magifying glass", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=4a76b09f-0b4d-45f1-a1a6-835225d8eade
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Eypglh37XASBRcA2ijJU6KnYWU/47157f34-4ffc-46c1-8848-8c76c93912a9.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Eypglh37XASBRcA2ijJU6KnYWU/be7ef073-52af-4836-b266-d96478b7462a.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Magifying glass — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
