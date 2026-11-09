"use client"

// AsciiArt — "spider pixel", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=29ae6cb7-908a-4460-8ae0-c29cca63a399
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3KNsv3rHgB4kmeHtMSjWWPEVv3e/6d761e84-69d9-43e1-aecc-383cea109de8.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3KNsv3rHgB4kmeHtMSjWWPEVv3e/6b45a4df-ef3a-4208-8eea-042ce455b786.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"spider pixel — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
