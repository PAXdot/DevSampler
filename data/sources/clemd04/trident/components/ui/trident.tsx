"use client"

// AsciiArt — "trident", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=3875e140-a490-4ce9-975f-baba4485d354
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_2wB1YUEkGC9ZPkrgz74LU07lBpo/235a48f1-62e8-4b7f-9fee-a6efaf19a3f8.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_2wB1YUEkGC9ZPkrgz74LU07lBpo/505e8eee-53a5-45b4-9c3f-5b1fdc3b09d0.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"trident — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
