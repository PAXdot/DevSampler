"use client"

// AsciiArt — "Spider Man", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=e6478fe6-de12-4663-a802-503cd24e1a9c
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3FoHy15J546pivaN7YD1UGMG0kI/c7edd551-4c4c-49ca-b48f-0e6131171622.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3FoHy15J546pivaN7YD1UGMG0kI/b1cf95fe-9a69-4809-87a0-198624247c19.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Spider Man — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
