"use client"

// AsciiArt — "stash", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=5ec67a8d-35ff-4071-824f-1df025f23915
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3KXSbJwjiG4w3svZMt5uhaBeNpl/8fb925c7-e721-454e-8deb-f5dd1084079c.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3KXSbJwjiG4w3svZMt5uhaBeNpl/d49d4ca1-70aa-41f8-be19-8b6f452d4173.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"stash — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
