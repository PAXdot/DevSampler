"use client"

// AsciiArt — "candelstick", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=385aceac-ee3b-47ff-a678-95477f8c9a3f
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3CoVpzDHLQI1V4OoWfdEhoNDpqb/8ffe94e4-d1bf-43a0-8dee-15d0d2642fc9.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3CoVpzDHLQI1V4OoWfdEhoNDpqb/37ed65bd-d383-4d28-a187-d68aef62e1cd.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"candelstick — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
