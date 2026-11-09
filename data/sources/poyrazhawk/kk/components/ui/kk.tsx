"use client"

// AsciiArt — "kk", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=3f846dcf-ff52-4580-85b6-ed471b2752a9
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_38dTPmnvxt4Ud6smxMnoCiSlKN5/030d610c-2baa-4591-83b6-5c85b5845798.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_38dTPmnvxt4Ud6smxMnoCiSlKN5/f898942c-2cfe-4ba0-b0d6-7f5e24790306.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"kk — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
