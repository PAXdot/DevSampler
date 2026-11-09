"use client"

// AsciiArt — "Prisma", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=1ce75066-db3c-439d-a1d8-153c90cb7117
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3KtVXFbBJ7LQDHFWz2UXinyLyb8/cee99079-5dc2-4aef-aad5-4b64b3bd2ed1.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3KtVXFbBJ7LQDHFWz2UXinyLyb8/d8f2e369-2206-4e86-9f60-511f4321016b.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Prisma — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
