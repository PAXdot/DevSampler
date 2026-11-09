"use client"

// AsciiArt — "test", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=e132b6f2-bc13-4e48-9906-46d62e451e46
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3C0m5EBunnS8rUoJ9qlBd2MiPDR/030b1314-3765-4f12-8064-d5a43a61d3a3.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3C0m5EBunnS8rUoJ9qlBd2MiPDR/9e02b5cb-2e9d-4d34-9489-3c489a6cd6bd.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"test — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
