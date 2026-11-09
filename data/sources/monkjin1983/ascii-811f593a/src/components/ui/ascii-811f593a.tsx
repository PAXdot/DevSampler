"use client"

// AsciiArt — "半堂好课", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=811f593a-5e0a-449e-99a0-ee166a61bbae
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Ff7GI3GncB5FwdkIYOqrujtyIw/c3292a13-32bf-4b5c-96cd-b99065eaf1b0.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Ff7GI3GncB5FwdkIYOqrujtyIw/c1fd33ea-0cd3-4b0c-817e-5180b7fcd460.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"半堂好课 — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
