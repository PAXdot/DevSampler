"use client"

// AsciiArt — "rocks", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=f76120d1-0f93-4180-b529-3ee1ea8a0fc3
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3CdJgTW8geRShR3gegqAjY0JB3B/3189f908-6a3c-4d1a-914c-55256e8b2e93.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3CdJgTW8geRShR3gegqAjY0JB3B/c5fdc65e-e912-47dd-9052-9971cd6753d3.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"rocks — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
