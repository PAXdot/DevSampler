"use client"

// AsciiArt — "Ascii Clouds", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=977d0c6f-e45f-4c52-b013-7609e470f37d
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3DAqNduPV8FZGsQ5d8pXRGO0VGG/3bd73b5f-aa77-44d1-9181-f4576fe25130.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3DAqNduPV8FZGsQ5d8pXRGO0VGG/9445efb4-2dca-4ae3-aa14-fce5f0c1acd7.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Ascii Clouds — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
