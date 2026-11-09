"use client"

// AsciiArt — "aa", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=5ae8b899-6eab-4654-b746-d4684623ff1a
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Hm1P1O4jLc9DzBKoLSjhLY83hu/ceefeb14-becc-4034-a1e2-dd3db5874d49.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Hm1P1O4jLc9DzBKoLSjhLY83hu/7ab43691-b991-43e6-b3f0-9a1c382556fc.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"aa — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
