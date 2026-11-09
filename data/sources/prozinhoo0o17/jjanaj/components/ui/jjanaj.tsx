"use client"

// AsciiArt — "jjanaj", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=6c6d2fa3-7f25-4365-a058-60475bb0248e
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3IjFbd2OjAg1lNjJkANJ57fUf5X/1711b386-90ee-46b1-ab32-3c25a76098c3.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3IjFbd2OjAg1lNjJkANJ57fUf5X/02cc9143-779d-405b-93dd-77dbf48d81d1.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"jjanaj — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
