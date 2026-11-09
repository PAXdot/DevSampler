"use client"

// AsciiArt — "Alinyxe", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=d8808552-9486-456a-acc0-820915834d61
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3BRg6PyisstXC1zlxhG66cyXdXC/f9779e47-77bc-4bbb-8644-3eecc98a5dac.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3BRg6PyisstXC1zlxhG66cyXdXC/14654a9f-58ae-4f0d-badd-58be336614d7.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Alinyxe — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
