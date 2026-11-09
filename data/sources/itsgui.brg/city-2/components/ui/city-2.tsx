"use client"

// AsciiArt — "City 2", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=20202245-bb60-417e-831c-698dc0aef249
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HNp1mMV57OGfJ6YAsha1I037iH/4488ace9-2523-41fb-ab02-2c6f92654979.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HNp1mMV57OGfJ6YAsha1I037iH/d4993e75-599c-4188-a646-8fba01b44522.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"City 2 — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
