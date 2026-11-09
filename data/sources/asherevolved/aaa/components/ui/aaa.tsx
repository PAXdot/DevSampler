"use client"

// AsciiArt — "aaa", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=467a86c2-360e-4e93-bfe4-f2a35795641d
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_30Z4TAnxZmHEKqc0zKYuo9vexqg/ab159e04-28c5-4d5c-aa75-7b3c4ed594cb.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_30Z4TAnxZmHEKqc0zKYuo9vexqg/645dea97-970b-425c-9443-69f49522d8d2.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"aaa — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
