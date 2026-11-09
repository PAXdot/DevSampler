"use client"

// AsciiArt — "AsherAscii", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=06adfde3-69d4-40cd-8273-1b58b22a6e82
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_30Z4TAnxZmHEKqc0zKYuo9vexqg/dc670c58-19bb-41b6-bbdd-bde51e0fb792.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_30Z4TAnxZmHEKqc0zKYuo9vexqg/cd099a8e-054e-441e-92f2-cbd87c1b218e.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"AsherAscii — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
