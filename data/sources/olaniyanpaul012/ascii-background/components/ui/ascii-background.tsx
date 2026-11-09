"use client"

// AsciiArt — "ASCII Background", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=84608dc9-881e-4ab5-9dea-f3463b278b9d
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_38qpYMZAhl1Jt5TBJYWNfQXEjg6/53030ebb-6606-4378-9459-95d5b666cbbe.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_38qpYMZAhl1Jt5TBJYWNfQXEjg6/6232adc5-7ee8-42e4-9b02-9971f77df93f.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"ASCII Background — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
