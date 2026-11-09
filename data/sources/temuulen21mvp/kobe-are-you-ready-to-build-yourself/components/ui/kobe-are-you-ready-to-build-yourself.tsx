"use client"

// AsciiArt — "Kobe, are you ready to build yourself", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=0221ccdd-9a16-4fe7-a3db-defa08230df9
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3H515LbCV9LPma3wcrBvW7ztm9i/3b9eec25-b353-4262-956c-df3d9d9402f1.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3H515LbCV9LPma3wcrBvW7ztm9i/a02958f4-42f1-44c9-9b90-8fd330846a7a.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Kobe, are you ready to build yourself — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
