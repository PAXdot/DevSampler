"use client"

// AsciiArt — "bennet", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=46bfa460-8899-47d9-9d59-af514c9b52dc
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3H515LbCV9LPma3wcrBvW7ztm9i/dd547359-dab1-4ade-a30b-12eca1c3787e.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3H515LbCV9LPma3wcrBvW7ztm9i/4be5636f-0cc9-441c-a377-ad5e6a4f92ed.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"bennet — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
