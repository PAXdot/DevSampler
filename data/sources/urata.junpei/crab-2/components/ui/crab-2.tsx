"use client"

// AsciiArt — "crab", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=1e900c5a-f23f-4f1e-8f63-ef055ba5eb11
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3IBpKFZKpAjsTVkip9JVUOnrcZl/eb43c6a3-a597-4618-8137-ed3a0ccd9708.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3IBpKFZKpAjsTVkip9JVUOnrcZl/42a4d0ce-7a62-4067-80c9-d086fd1d4da8.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"crab — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
