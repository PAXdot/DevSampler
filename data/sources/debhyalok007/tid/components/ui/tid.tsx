"use client"

// AsciiArt — "tid", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=c6d5cbfa-56d3-45b0-aef2-c064da6d6d19
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3I4lQMyUsytt63OHuXDvJXNlTBO/1ab26eca-93e3-4462-93ad-a812098d3328.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3I4lQMyUsytt63OHuXDvJXNlTBO/901bc9c8-fff8-4112-b92e-baa705dff615.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"tid — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
