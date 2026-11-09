"use client"

// AsciiArt — "neonic rings", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=b8d4b2bd-26d6-4577-a98d-c119e992cc6f
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3K6KISQZI6NC3qxblrNLvYvLt41/03178efa-b928-402b-8c7d-781519ddc9d9.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3K6KISQZI6NC3qxblrNLvYvLt41/df7850a2-e70c-4bbb-9bc5-2ee22101f2af.png"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"neonic rings — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
