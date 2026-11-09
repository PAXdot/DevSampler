"use client"

// AsciiArt — "lahit", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=febe1254-6ec7-4786-8552-c292c1ff0d1b
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3HQ4D8KD0q8xT7uhXqEp1m3rUrN/40b4a2fb-9c84-443e-b046-b5a9d099d3a5.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3HQ4D8KD0q8xT7uhXqEp1m3rUrN/1cef70f1-589f-4f64-935c-ae64314e9c92.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"lahit — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
