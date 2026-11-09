"use client"

// AsciiArt — "oval eggs", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=35d7d4ef-c0c4-4ffd-b8eb-79835b531df7
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_2yQhKWmRkueqJboOVE2MMynwBdu/843558a6-0884-438e-b32a-64c0dc35cf4c.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_2yQhKWmRkueqJboOVE2MMynwBdu/e4177612-0363-4091-9c18-b27701d795fb.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"oval eggs — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
