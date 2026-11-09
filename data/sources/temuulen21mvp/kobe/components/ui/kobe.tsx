"use client"

// AsciiArt — "Kobe", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=0c62131a-8180-46a2-b8a5-09662c53aea2
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3H515LbCV9LPma3wcrBvW7ztm9i/86779ddc-77bc-4f6c-b8bb-32c680ba8a6c.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3H515LbCV9LPma3wcrBvW7ztm9i/e86ed834-30cb-4877-9633-2de794ee7e12.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Kobe — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
