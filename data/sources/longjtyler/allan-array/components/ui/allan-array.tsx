"use client"

// AsciiArt — "Allan.Array", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=fb1649a7-6939-4da3-87e0-f9f1ce2bbd6d
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3KEzwnNwKBbKBZRJrxZU1sV4059/32a8ecdc-946a-4e60-8932-47a7d4b4d855.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3KEzwnNwKBbKBZRJrxZU1sV4059/730cb1c7-0098-4718-b385-1035f4e21817.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Allan.Array — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
