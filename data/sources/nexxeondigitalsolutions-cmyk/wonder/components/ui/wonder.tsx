"use client"

// AsciiArt — "Wonder", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=4ed4be04-770d-45f2-af98-8d7130a86fe1
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HyZ0rt6rMCUjIcV47idGnCBAAf/7bdd8e54-3d09-4934-9557-7e6761056e86.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HyZ0rt6rMCUjIcV47idGnCBAAf/18cf87d4-f31f-4cb8-8af3-4b39d4e26a75.png"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Wonder — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
