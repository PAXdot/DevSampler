"use client"

// AsciiArt — "dsadas", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=088fa87d-e1b6-4ec9-94d1-ca31eb47602f
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3KixgdegWoqQWfwcaptsmCqHJ8X/a4ff32eb-1f07-47fa-a5cd-be778c6875af.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3KixgdegWoqQWfwcaptsmCqHJ8X/5149e9d3-0d2c-4b4b-901f-b6a5c0746fb5.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"dsadas — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
