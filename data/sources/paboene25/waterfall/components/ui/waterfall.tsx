"use client"

// AsciiArt — "Waterfall", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=c154d49b-23e1-4015-ac49-7abd5d78a766
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3CIDFvZMf5pQsCyTDv1a4wpEDaE/d334513c-d75c-4a55-946a-1f8cefbcace5.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3CIDFvZMf5pQsCyTDv1a4wpEDaE/e9b08fcf-c6f5-4225-a527-e51c8238ecf7.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Waterfall — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
