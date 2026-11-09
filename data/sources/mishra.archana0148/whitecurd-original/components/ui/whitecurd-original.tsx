"use client"

// AsciiArt — "Whitecurd original", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=47de2eed-6783-435b-bc8f-e67c28e36d1c
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Hfg68Y5FL9dPj0O9gWPiLs2yN0/81d5494a-712a-4449-920d-44973f95f789.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Hfg68Y5FL9dPj0O9gWPiLs2yN0/2a4cb239-65a0-4d48-b424-5cd0559014e3.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Whitecurd original — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
