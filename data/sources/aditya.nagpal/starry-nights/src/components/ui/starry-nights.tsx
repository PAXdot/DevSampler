"use client"

// AsciiArt — "starry nights", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=7ad845c6-760e-459d-b294-96ed22fe439e
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3CsH4USnadu1DaOGLGegjBVQeA2/d7c70a61-4be8-497b-aa96-728173159d52.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3CsH4USnadu1DaOGLGegjBVQeA2/20b7cadd-f69b-4a89-b3ec-9a1fc455a176.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"starry nights — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
