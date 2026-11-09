"use client"

// AsciiArt — "opp", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=e5bf188e-e3a8-4c4f-bdcf-a328ff9115b4
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3K9rvvKGQ1hqGVnNKuSKZhe8cjL/1e5665a2-4812-44ca-8122-702fcdd9b52e.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3K9rvvKGQ1hqGVnNKuSKZhe8cjL/829c0a8a-e054-4199-937b-4da768e93599.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"opp — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
