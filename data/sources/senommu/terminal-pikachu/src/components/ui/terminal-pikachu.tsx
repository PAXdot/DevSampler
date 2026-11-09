"use client"

// AsciiArt — "Terminal Pikachu", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=a0b55a43-58b6-4792-8375-43e630f093e5
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_39720J8FZrHCoGeL23ljF4x20L3/ffa79616-dc73-4587-93ba-ff3f8ff354ef.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_39720J8FZrHCoGeL23ljF4x20L3/9b9bf5f4-272f-415d-bbb6-436ffba39927.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Terminal Pikachu — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
