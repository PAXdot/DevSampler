"use client"

// AsciiArt — "man", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=dee3b895-cde4-4a6c-bdc3-e97ca8859ddd
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3CTno03uU6l3pzC0sXpEwTY5OIQ/60ec0752-ede5-41b3-a755-21b5de11d959.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3CTno03uU6l3pzC0sXpEwTY5OIQ/3ac65869-f5b9-49e0-9788-0a83a0697cac.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"man — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
