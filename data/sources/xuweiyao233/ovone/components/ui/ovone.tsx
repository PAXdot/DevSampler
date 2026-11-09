"use client"

// AsciiArt — "oVONE", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=57f212a0-1b1b-479a-92b2-40132e966d31
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Ir4IFzX1Wv5LdsGbH9D3IpkfZB/20a4d717-68bf-4410-ac58-87dd4a7a7fc4.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Ir4IFzX1Wv5LdsGbH9D3IpkfZB/c51e1488-06a6-4a3f-9a66-46e7934293e7.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"oVONE — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
