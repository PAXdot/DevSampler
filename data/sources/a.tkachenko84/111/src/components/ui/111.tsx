"use client"

// AsciiArt — "111", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=1b1b1d95-b943-45a3-83ff-1644085a2298
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_37uTI9hlEYXnjEFWy2aLO2iI5gF/b1daf54e-00f5-473f-80ad-959762c51940.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_37uTI9hlEYXnjEFWy2aLO2iI5gF/20848c4f-fc0a-41cf-a289-5234327b4539.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"111 — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
