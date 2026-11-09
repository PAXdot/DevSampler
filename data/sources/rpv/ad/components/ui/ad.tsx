"use client"

// AsciiArt — "ad", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=794d54e6-5821-46fe-a1b0-e58acd4c73f6
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Je4pM499qSDxsTKbzGgzlzKPnf/034ae400-e471-4c8c-bf6d-32bac041237b.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Je4pM499qSDxsTKbzGgzlzKPnf/d47426d1-f10b-4b41-95a6-8ab0cea3bc35.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"ad — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
