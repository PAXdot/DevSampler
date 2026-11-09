"use client"

// AsciiArt — "Areeb Asci", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=00333c6a-96f0-4311-b30e-b215d2f8d297
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3J23dXMKfN6Gy9bhIu4dWv9IXj5/f7b504cb-e1db-46ae-8594-1b00d93a37b7.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3J23dXMKfN6Gy9bhIu4dWv9IXj5/6e7084ce-a36e-404f-b180-7611e9a43cf4.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Areeb Asci — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
