"use client"

// AsciiArt — "acg", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=aa78889f-b9e1-4b42-9d30-8314ce06ea53
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_39fm4Vn9JRZxIDavlqXFa5DaQB6/d5b2f63d-5817-4808-b229-ced23322a10a.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_39fm4Vn9JRZxIDavlqXFa5DaQB6/c1791817-bb48-4701-8eff-8dfd07e39488.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"acg — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
