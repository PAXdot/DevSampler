"use client"

// AsciiArt — "Barcelona mosaic", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=352189bc-00be-4fa9-a7f0-491d54fec8c6
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3EJCdmnIl7U1V8i5Ny6Ykc6dvlB/1efdf7e2-3124-4e8c-9e76-6147ab8007a6.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3EJCdmnIl7U1V8i5Ny6Ykc6dvlB/4bb63a9f-0ecb-440f-bcc2-25e56b04a638.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Barcelona mosaic — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
