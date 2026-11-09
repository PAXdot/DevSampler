"use client"

// AsciiArt — "dwar", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=23e3ddd0-3974-4b1c-bcfa-d0ff6c9577d9
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_38Vo4vVSopQMSmW2ueCOjbIjRUT/28f02a2c-0498-4bc6-b10d-df659f7b9ea9.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_38Vo4vVSopQMSmW2ueCOjbIjRUT/535c15bb-a134-409a-be17-12fbb7103f8b.png"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"dwar — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
