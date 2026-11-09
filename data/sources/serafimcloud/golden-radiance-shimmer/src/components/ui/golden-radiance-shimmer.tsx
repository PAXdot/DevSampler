"use client"

// AsciiArt — "Golden Radiance Shimmer", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=455e6218-19a8-40ed-a0d6-05ced17dc6ba
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_2nElBLvklOKlAURm6W1PTu6yYFh/acd189a5-9b76-416f-b3f5-330248379e9b.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_2nElBLvklOKlAURm6W1PTu6yYFh/a4fe45dd-0254-418b-84c8-ead689f52c7b.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Golden Radiance Shimmer — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
