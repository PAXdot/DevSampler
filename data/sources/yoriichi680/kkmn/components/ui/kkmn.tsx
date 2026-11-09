"use client"

// AsciiArt — "kkmn", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=c26db130-cbf5-4a8f-af37-f8452550db11
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_2wfwJCTeyO1VhkmoSj1GoyQ8201/8f52b3e7-edce-4633-88c6-1485f1da8196.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_2wfwJCTeyO1VhkmoSj1GoyQ8201/f5fce199-a366-4f9d-98af-022a4c7e3232.png"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"kkmn — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
