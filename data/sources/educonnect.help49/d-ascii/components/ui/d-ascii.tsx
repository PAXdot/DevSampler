"use client"

// AsciiArt — "d ASCII", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=935fa287-05d5-4187-b19c-f573b9bc63d3
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3K8a1FYX2XyhDIJ19RPgNv4tl5U/91cb66b7-cf85-4186-b8f8-17db42e4c317.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3K8a1FYX2XyhDIJ19RPgNv4tl5U/020eeb81-82ca-4f79-97ab-586dede751c2.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"d ASCII — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
