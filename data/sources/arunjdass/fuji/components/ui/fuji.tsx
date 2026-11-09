"use client"

// AsciiArt — "Fuji", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=24e59d8b-610f-49e9-9fa8-4e68d623a834
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_39o4wVmT0Y5zTgtujcn7Fxw3uiT/0d44fff0-01c2-45b1-936e-2a620823e5fc.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_39o4wVmT0Y5zTgtujcn7Fxw3uiT/436036e6-d702-41ab-9f83-efe1741c0b3e.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Fuji — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
