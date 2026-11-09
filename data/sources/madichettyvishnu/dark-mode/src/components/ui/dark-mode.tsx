"use client"

// AsciiArt — "dark mode", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=5309be10-34dd-40d3-8387-e1e8b5ff6620
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3BDsysVu3WGuohsPQWdLSbzDhLY/f2112277-00a0-4fb0-8205-20d2b73210ae.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3BDsysVu3WGuohsPQWdLSbzDhLY/e5d0bde6-c702-4a5a-81ca-a34f45d4e01f.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"dark mode — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
