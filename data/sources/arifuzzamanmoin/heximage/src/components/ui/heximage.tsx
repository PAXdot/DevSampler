"use client"

// AsciiArt — "Heximage", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=0bfb4fe9-7583-459d-8192-1f7971e3c037
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GTmm8jNoQIxVVDZmyng4bN3uFj/38f24872-2e1b-4582-bcf0-375dceb1e481.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GTmm8jNoQIxVVDZmyng4bN3uFj/f1e9ca31-92ab-465d-a08f-41a0393623ce.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Heximage — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
