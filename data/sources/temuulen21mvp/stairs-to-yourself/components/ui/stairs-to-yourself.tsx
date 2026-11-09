"use client"

// AsciiArt — "stairs to yourself", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=bd386a22-d1f8-46ff-9f78-a5abe8833fcd
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3H515LbCV9LPma3wcrBvW7ztm9i/a20a63cd-a0a5-44c8-ad29-25916de87be1.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3H515LbCV9LPma3wcrBvW7ztm9i/573aa931-6fae-43b8-b634-a9191036196c.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"stairs to yourself — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
