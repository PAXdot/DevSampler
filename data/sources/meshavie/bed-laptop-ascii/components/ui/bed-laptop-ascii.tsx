"use client"

// AsciiArt — "Bed Laptop Ascii", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=427eb473-1a8b-40bb-98c6-766c07fe233a
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HdIGFrhAXvCUDQ3P1fjXzXyAJH/adf8ecc3-a85f-4658-b2c4-633e9db48070.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HdIGFrhAXvCUDQ3P1fjXzXyAJH/225ae3fc-1be9-4f3c-b251-112bfa3c5d68.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Bed Laptop Ascii — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
