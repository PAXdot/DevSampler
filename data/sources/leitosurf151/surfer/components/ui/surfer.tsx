"use client"

// AsciiArt — "surfer", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=ecefd249-00a9-439d-831c-ffb7a94b9998
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HX1XRzBRhdIPJrfET4goOprwEF/2a916997-61a0-497e-97d9-69721745e14a.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HX1XRzBRhdIPJrfET4goOprwEF/4fa129bd-c763-4f07-a02f-dd981a02a82c.png"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"surfer — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
