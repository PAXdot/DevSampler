"use client"

// AsciiArt — "erwsd", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=fcebfd60-6571-48c9-b458-804bc6e7ccbd
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3ITXikLSbRFUIUzqOooimA9MyG7/028e203f-4ae3-4e5c-bd1f-84083d305803.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3ITXikLSbRFUIUzqOooimA9MyG7/455c4180-ade3-49c1-a055-7ab0f63b2a37.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"erwsd — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
