"use client"

// AsciiArt — "collab", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=cfae2635-23b5-406b-8662-40ad068bdc49
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_2y4mAmG5WMonwhwjqKc8LyeecUz/42a831dd-594e-42f5-b346-17d80bd07980.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_2y4mAmG5WMonwhwjqKc8LyeecUz/8bfdb54b-25ce-40bd-b4f1-8bcf9642ad6b.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"collab — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
