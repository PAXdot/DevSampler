"use client"

// AsciiArt — "the creation of adam", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=d697c742-d745-4c77-927b-0da62ccc7e64
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3IrOog7EU3WI8wW8HKWN3h6DjW6/0a8f9c41-a0a5-455e-bb91-bfac8db8785e.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3IrOog7EU3WI8wW8HKWN3h6DjW6/aa2fc80e-2c5b-4296-8180-a584df6d620a.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"the creation of adam — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
