"use client"

// AsciiArt — "a ASCII", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=205344ff-b4c7-481f-b7e9-9d915baca65e
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3KxyjT0rQ9Bfl51292dAn82Qm4x/7798a707-71e5-4bc8-bc71-9e8ac62c46a3.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3KxyjT0rQ9Bfl51292dAn82Qm4x/b586e2f4-5cf6-46f0-b2fe-3c185015cb8a.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"a ASCII — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
