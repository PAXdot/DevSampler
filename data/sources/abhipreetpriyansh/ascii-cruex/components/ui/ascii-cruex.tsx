"use client"

// AsciiArt — "ASCII Cruex", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=452e959e-0716-4028-a200-6363558b637e
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3INy0mZNc54reM06iJ0ao8iuzRv/73f09da6-4556-4191-98be-c3fe404e230d.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3INy0mZNc54reM06iJ0ao8iuzRv/39034285-6224-4492-9ea2-f8a4e1851f05.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"ASCII Cruex — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
