"use client"

// AsciiArt — "S1 ASCI Art", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=7a4fe1d0-4be0-4e11-a6be-2ae8e756af17
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3H92DZKEWMkakgZqcCOVlzigSSa/f792f714-b48f-48fc-8fbf-a50289d1420a.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3H92DZKEWMkakgZqcCOVlzigSSa/0f36d803-3aab-4d79-9515-1812b4b4eead.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"S1 ASCI Art — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
