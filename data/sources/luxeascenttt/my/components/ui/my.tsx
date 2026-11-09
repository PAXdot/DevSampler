"use client"

// AsciiArt — "my", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=353b74a2-9c3f-490b-b9ce-dcc9361c4d07
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3LQk6iqOKBqxKGSXwUAnbQ95wDa/c52e613f-5880-4736-ac5c-7331d3208f45.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3LQk6iqOKBqxKGSXwUAnbQ95wDa/d589c6fc-ab50-4b4a-8ab0-ea7fc0ef68a4.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"my — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
