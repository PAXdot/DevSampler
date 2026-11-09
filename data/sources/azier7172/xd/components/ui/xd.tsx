"use client"

// AsciiArt — "XD", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=ea70a6ea-2d01-4562-92d7-1813068c0ab7
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3DfLPtQ0XJcNcMc0fJX13uk7Exw/d7907950-bb50-45d1-b05c-0f1884d6a35b.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3DfLPtQ0XJcNcMc0fJX13uk7Exw/58c7e402-16ec-4b26-aaa5-fb4ec348838a.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"XD — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
