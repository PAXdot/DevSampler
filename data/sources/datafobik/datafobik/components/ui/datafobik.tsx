"use client"

// AsciiArt — "datafobik", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=6e1f578b-7693-4fce-946f-928bbaf6cb35
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_2xJO3zNCqtKxPsyybThWTp4ABVV/d2116d16-319b-4172-9615-05ffb9b08df9.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_2xJO3zNCqtKxPsyybThWTp4ABVV/f321cc20-7ed8-4a4d-8cbf-ccef1e9a7506.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"datafobik — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
