"use client"

// AsciiArt — "Liminal - Vincent Marcum", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=014dd54b-c957-4b26-981a-d4cac908b5a2
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3H0w1YnCp8g3oI2fnQnYRstoSko/91fe9a82-da94-4f0b-9103-098d8190a12b.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3H0w1YnCp8g3oI2fnQnYRstoSko/d055e24c-b5cc-4969-bde8-6a5bcd7ed180.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Liminal - Vincent Marcum — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
