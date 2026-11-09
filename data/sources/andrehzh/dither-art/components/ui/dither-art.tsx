"use client"

// AsciiArt — "Dither Art", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=4bf668b8-8a0f-48f3-af98-663990462d9d
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3FtGtt8tPJzeStRvUhBVTUY2i6o/6b68bcae-1cbe-4f3c-bbed-3ad588d39125.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3FtGtt8tPJzeStRvUhBVTUY2i6o/b1bdc7d2-5417-4301-bd18-dabf59db9105.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Dither Art — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
