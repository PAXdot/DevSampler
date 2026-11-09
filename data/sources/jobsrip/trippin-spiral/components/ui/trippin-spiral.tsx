"use client"

// AsciiArt — "trippin spiral", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=fa23bfd9-dad9-49f9-be46-6f4ce2e61c29
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3EuR8Rivo7IplxBpAILOW0HIiin/7857661c-d3d9-4605-a142-a369513c135d.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3EuR8Rivo7IplxBpAILOW0HIiin/6c9e52dc-d1a3-4991-9ff9-230ade812b54.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"trippin spiral — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
