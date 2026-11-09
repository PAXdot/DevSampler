"use client"

// AsciiArt — "footer wisel", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=b832231a-8a78-4c29-bb9a-0a5535659f97
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3JHgK6hleXeRRdMjY4YAHLx8hjW/69a45acd-6b6e-46cb-a06f-dd0e0bee5210.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3JHgK6hleXeRRdMjY4YAHLx8hjW/4044cab1-fccc-4c76-a83b-f0db0b5b0aae.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"footer wisel — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
